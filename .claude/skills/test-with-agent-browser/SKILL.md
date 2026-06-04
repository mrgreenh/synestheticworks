---
name: test-with-agent-browser
description: >-
  Test code changes by interacting with the running Next.js dev server via the
  agent-browser CLI. Use when the user asks to visually verify a change, test
  UI behaviour, click elements, scroll the page, take screenshots, or
  interact with the site directly.
---

# Testing Changes with agent-browser

Use the `agent-browser` CLI to launch a Chrome instance pointed at the local
Next.js dev server, then interact with it: click elements, scroll, take
screenshots, read DOM state, and verify code changes produce the expected
visual or behavioural result.

The dev server is a plain Next.js process. `agent-browser` launches its
own Chrome and navigates to the URL — there's no special "remote
debugging" port to wire up on the app side.

## Prerequisites

| Requirement                          | How to verify                   |
|--------------------------------------|---------------------------------|
| `agent-browser` installed globally   | `agent-browser --version`       |
| Chrome for Testing downloaded        | `agent-browser install` (once)  |
| Next.js dev server running           | `npm run dev` in the repo root  |

If `agent-browser` is not installed, run
`npm install -g agent-browser && agent-browser install`.

## Starting the Dev Server

Run the dev server in the background so commands can return immediately:

```bash
npm run dev
```

Next.js writes its bound URL to stdout as `- Local: http://localhost:<port>`.
Port 3000 is the default but Next.js will pick the next free port (3001,
3002, …) if 3000 is in use, so **always grep the dev-server log for the
actual port** before opening — don't assume 3000.

Example (background command with output file):

```bash
# Start dev (background)
npm run dev > /tmp/synestheticworks-dev.log 2>&1 &
# Wait until ready, then capture the URL
until grep -qE 'Ready in|Local:' /tmp/synestheticworks-dev.log; do sleep 0.5; done
URL=$(grep -oE 'http://localhost:[0-9]+' /tmp/synestheticworks-dev.log | head -1)
echo "Dev server at $URL"
```

## Opening the Page

```bash
agent-browser open "$URL"
# or directly:
agent-browser open http://localhost:3000
# or any sub-route:
agent-browser open http://localhost:3000/blog
```

`agent-browser open` launches Chrome (downloaded by `agent-browser install`)
and navigates to the URL. The session stays alive across subsequent
commands until you `agent-browser close` it.

Set the viewport up-front to match the design target:

```bash
agent-browser set viewport 1440 900     # desktop
agent-browser set device "iPhone 14"    # mobile emulation
```

## Core Workflow

### 1. Orient — snapshot or screenshot

```bash
agent-browser snapshot -i -c              # interactive elements only, compact
agent-browser screenshot /tmp/page.png    # visual check
agent-browser screenshot --annotate /tmp/annot.png  # labelled interactive elements
agent-browser screenshot --full /tmp/full.png       # whole scrollable page
```

The snapshot returns an accessibility tree with **refs** (`@e1`, `@e2`, …)
that you use for subsequent interactions.

### 2. Interact — click, type, scroll, navigate

```bash
agent-browser click @e3                 # click by ref from snapshot
agent-browser find role button click --name "Submit"
agent-browser find text "Sign in" click # by visible text
agent-browser find label "Email" fill "test@test.com"
agent-browser scroll down 800           # scroll the page (or use --selector)
agent-browser fill @e5 "hello"          # clear + type into an input
agent-browser press Enter
agent-browser hover @e8
```

After any action that may change the page, take a fresh snapshot before
the next action — refs from old snapshots can become stale.

### 3. Verify — visual + DOM state

```bash
agent-browser screenshot /tmp/after.png
agent-browser eval "window.scrollY"
agent-browser eval "getComputedStyle(document.querySelector('h2')).fontSize"
agent-browser get text @e1
agent-browser get attr @e2 href
agent-browser get url
agent-browser get title
agent-browser console                   # check for console messages
agent-browser errors                    # uncaught JavaScript exceptions
```

Use `eval` for state that isn't visible in the accessibility tree (scroll
position, CSS variables, computed styles, references to internal classes
or stores).

### 4. Diff against a baseline

`diff` is handy for "did my change break anything visually":

```bash
agent-browser screenshot /tmp/before.png             # capture before
# … make code change, HMR reloads …
agent-browser diff screenshot --baseline /tmp/before.png -o /tmp/diff.png
```

Or compare two URLs directly:

```bash
agent-browser diff url http://localhost:3000/blog http://localhost:3000/blog/2
```

### 5. Coordinate-based clicks

When you need to click a specific pixel position (e.g. a canvas, a
non-interactive element, or somewhere the accessibility tree can't reach):

```bash
agent-browser mouse move <x> <y>
agent-browser mouse down left
agent-browser mouse up left
```

Get coordinates with `agent-browser get box @eN --json` or by evaluating
`document.elementFromPoint(x, y)`.

## Useful Commands

| Task                                | Command                                                                |
|-------------------------------------|------------------------------------------------------------------------|
| Navigate                            | `agent-browser open <url>`                                              |
| Reload page                         | `agent-browser reload`                                                  |
| Back / forward                      | `agent-browser back` / `agent-browser forward`                          |
| List tabs                           | `agent-browser tab`                                                     |
| Switch tab                          | `agent-browser tab t<N>` (or label)                                     |
| Get element text                    | `agent-browser get text @eN`                                            |
| Get bounding box                    | `agent-browser get box @eN --json`                                      |
| Get computed styles                 | `agent-browser get styles @eN`                                          |
| Run JS in page                      | `agent-browser eval "<expression>"`                                     |
| Check console                       | `agent-browser console`                                                 |
| Check page errors                   | `agent-browser errors`                                                  |
| Annotated screenshot                | `agent-browser screenshot --annotate /tmp/ann.png`                      |
| Full-page screenshot                | `agent-browser screenshot --full /tmp/full.png`                         |
| Get viewport size                   | `agent-browser eval "JSON.stringify({w:innerWidth,h:innerHeight})"`     |
| Coordinate-based click              | `agent-browser mouse move <x> <y>` then `down left` / `up left`          |
| Wait for element                    | `agent-browser wait <selector>`                                         |
| Wait for text                       | `agent-browser wait --text "Welcome"`                                   |
| Wait for time (ms)                  | `agent-browser wait 500`                                                |
| Close session                       | `agent-browser close`                                                   |

## Tips

- **HMR is your friend.** Next.js auto-reloads the page when source files
  change. After editing code, you generally don't need to `reload` — just
  re-snapshot or re-screenshot. If state went weird, `agent-browser reload`
  forces a full reload from the dev server.
- **Stale session blocking `open`.** If a previous `agent-browser` session's
  Chrome was killed externally (terminal closed, machine slept, etc.),
  `agent-browser open` fails with `Auto-launch failed: All CDP discovery
  methods failed for 127.0.0.1:9222`. Run `agent-browser close --all` to
  drop the stale session, then retry `open`. List sessions with
  `agent-browser session list`.
- **Stale refs.** Snapshot refs become invalid after navigation, reload,
  or any DOM-changing interaction. Re-snapshot before the next action if
  it depends on a `@eN` ref.
- **SCSS styling.** Styles come from global SCSS (`app/globals.scss`,
  `src/styles/`), so `element.style` will usually be empty. Always use
  `getComputedStyle()` (or `agent-browser get styles`) to read the
  actually-applied values.
- **Dev port isn't always 3000.** If a Next.js process is already on 3000,
  the new one picks 3001/3002/…. Always read the URL from the dev server
  log before opening the browser.
- **Mobile vs desktop.** Set viewport explicitly with `set viewport <w> <h>`
  or `set device "<name>"` — relying on the default can hide responsive
  bugs. Default Chrome window is roughly desktop-sized but isn't
  deterministic across machines.
- **Multiple agents in parallel.** Use `--session <name>` (or
  `AGENT_BROWSER_SESSION`) to keep separate browser instances if you're
  testing two scenarios concurrently.
- **Capturing console errors during a test.** Run `agent-browser console
  --clear` at the start, exercise the page, then `agent-browser console`
  at the end to see only what happened in between.
- **SPA navigation.** Use `agent-browser pushstate <url>` for client-side
  Next.js route changes that should go through `next/router` rather than
  a full page load.
- **Markdown / blog content.** Blog posts are markdown files in `content/`,
  rendered via `remark` + `gray-matter` (`lib/markdown.js`) — treat them
  like any other rendered HTML; the DOM you snapshot is the real document.
- **Animated background.** The left-side flow animation changes per route
  (configured in `src/components/FlowReadingTracker.js`) and is always
  moving — it makes `agent-browser diff` pixel comparisons noisy. Prefer
  DOM/computed-style assertions over screenshot diffs, or crop screenshots
  away from the animated region when comparing.
- **Static export.** The site uses `output: 'export'` (deployed to GitHub
  Pages) — there's no Node.js server at runtime, so don't test server-side
  features. To verify the production build, run `npm run build` and serve
  `out/` with a static file server instead of `next start`.
