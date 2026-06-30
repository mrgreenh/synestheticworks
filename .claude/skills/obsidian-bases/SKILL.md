---
name: obsidian-bases
description: >-
  Everything needed to read, write, and debug Obsidian Bases — the core-plugin
  database feature where `.base` files (or embedded ```base code blocks) render
  table / cards / list / map / kanban views over notes using their frontmatter
  properties. Use this skill whenever the user is working with Obsidian Bases:
  `.base` files, embedded base queries, base views, filtering/grouping/sorting
  notes by properties, the `this` object in a base, base formulas or functions,
  list/multi-value properties driving a base, or building a dashboard, tracker,
  CRM, or kanban board over Obsidian notes. Trigger even when the user doesn't
  say "base" explicitly — e.g. "query my notes by status", "make a dashboard of
  my contacts in Obsidian", "group my project notes into a board", "why isn't my
  base showing the right rows", or "the note titles in my table aren't
  clickable". Includes links to the official docs so you can refresh details that
  may have changed.
---

# Obsidian Bases

Bases is an Obsidian **core plugin** that turns notes into database-like views.
Each row is a file; each column is one of that file's **properties**. The data
itself lives in ordinary Markdown frontmatter — Bases is just a live *lens* over
it, never a separate store. Master that one idea and most confusion disappears:
**to change what a base shows, you usually change note frontmatter, not the
base.**

## Two ways a base exists

1. **A `.base` file** — a standalone YAML file (extension `.base`). Open it to
   get the full view UI. Reference/embed it elsewhere with
   `![[File.base]]` (first view) or `![[File.base#View Name]]` (specific view).
2. **An embedded ```base code block** inside any note — same YAML, fenced as
   ` ```base `. Self-contained: it renders right in the note with no separate
   file. Great for dashboards where each section is its own query.

Both use the identical syntax below.

## File / block structure

A base is YAML with up to five top-level keys. Minimal but complete example:

```yaml
filters:                      # which files are in the dataset (optional)
  and:
    - type == "contact"
    - status != "archived"
formulas:                     # computed columns (optional)
  display_name: 'name + " (" + role + ")"'
properties:                   # per-property display config (optional)
  status:
    displayName: Stage
views:                        # one or more ways to render the data (required)
  - type: table
    name: Pipeline
    filters:                  # view-level filters, AND-ed with the global ones
      and:
        - status == "active"
    groupBy:
      property: status
      direction: ASC
    order:                    # which columns, in order
      - file.name
      - status
      - formula.display_name
    sort:
      - property: file.name
        direction: ASC
    limit: 100
    summaries:
      file.name: Filled       # aggregate (count, etc.) shown at column foot
```

There is **no `from`/`source`** like SQL — a base starts with *every file in the
vault* and you narrow with `filters`. Global `filters` apply to all views; a
view's own `filters` are concatenated with `AND`.

## Referencing properties

Three kinds, distinguished by prefix:

- **Note properties** — frontmatter keys. Use bare (`status`) or `note.status`.
- **File properties** — about the file itself: `file.name`, `file.path`,
  `file.folder`, `file.tags`, `file.links`, `file.ctime`, `file.mtime`,
  `file.ext`, `file.size`, plus functions like `file.hasTag(...)`,
  `file.inFolder(...)`, `file.hasLink(...)`. (`file.name` is also the clickable
  title — see Gotchas.)
- **Formula properties** — defined in the `formulas:` block; referenced as
  `formula.display_name`.

## Filters

`filters` is either a single string statement or a nested object of
`and` / `or` / `not`, each holding more statements or sub-objects:

```yaml
filters:
  or:
    - file.hasTag("urgent")
    - and:
        - status == "active"
        - not:
            - file.inFolder("Archive")
```

A statement is a comparison (`==`, `!=`, `>`, `<`, `>=`, `<=`) or a function
call that returns truthy/falsey. Booleans combine with `&&`, `||`, `!`.

**Quoting:** string statements should be quoted (`'status == "active"'`), but
Obsidian's editor often rewrites simple ones to unquoted form when you save via
the UI — both are valid, so don't "fix" unquoted statements you see in a file
the app has touched.

**"Missing vs present":** for "property is empty/absent" use
`property.isEmpty()` (or `!property`); for "property has any value" use the bare
`property` as a truthy test.

## The `this` object (and reverse lookups)

`this` refers to a context file, which depends on where the base runs:

- **Embedded in a note** → `this` is the *embedding note*.
- **In the sidebar** → `this` is the *active file* in the main pane.
- **Opened as its own `.base` tab** → `this` is the base file itself.

This powers **reverse lookups** — "show every note that points back at me."
Because a wikilink in a property is a Link object, and a Link compared to a file
is equal when it resolves to that file:

```yaml
# inside a ```base embedded in note "Parent":
filters:
  and:
    - type == "asset"
    - derives_from == this           # assets whose derives_from points here
```

If the property might hold one link *or* a list of links, wrap it so `contains`
works either way: `list(derives_from).contains(this)`. To replicate the
backlinks pane: `file.hasLink(this.file)`.

## Views and layouts

`views` is a list; each entry has a `type`, a `name`, and optional
`filters` / `order` / `groupBy` / `sort` / `limit` / `summaries` /
`columnSize`. Layouts:

| `type`  | What it renders | Notes |
|---------|-----------------|-------|
| `table` | rows × property columns | first/`file.name` column is the clickable link |
| `cards` | gallery grid of cards | can show a cover image; card title is clickable |
| `list`  | bulleted/numbered list | newer Obsidian versions |
| `map`   | pins on a map | needs the Maps plugin + lat/long properties |
| `kanban-view` | columns/lanes | **community** "Kanban Bases View" plugin, not core |

Group with `groupBy` (one property). Sort with `sort` (multiple keys). You can
embed a single view: `![[File.base#View Name]]`.

## Map view

Maps require the **Maps plugin** (core). To display pins, configure the view with a coordinates property in the settings.

### Setting up coordinates

In the map view settings, select a property to use as the **marker coordinates**. This property holds the geographic location for each pin. Supported formats:

- **Text property:** `"lat, lng"` (comma-separated string, e.g., `"40.7128, -74.0060"`)
- **List property:** latitude and longitude as separate entries in a YAML list
- **Formula property:** computed from separate lat/lng properties using the array syntax `[latitude, longitude]`

For separate lat/lng properties, use a formula:
```yaml
formulas:
  coordinates: '[latitude, longitude]'
```
Then select `formula.coordinates` as the marker coordinates property in the view settings.

### Getting coordinates

Right-click a location on the map and select **Copy coordinates** to get the exact lat/lng for a location — useful for adding to notes.

### Customizing markers

**Icons:** In the view settings, select a marker icons property. Use any icon from Obsidian's built-in Lucide library (e.g., `landmark`, `utensils`, `heart`, `pin`). The icon value should be the icon name as a string.

**Colors:** Set marker colors using RGB, HEX values, or CSS variables. Example:
```yaml
properties:
  location_color:
    displayName: Map Color
    # Use values like "255, 0, 0" or "#FF0000"
```



## Properties as your schema

The base is only as good as the frontmatter feeding it, so design a small,
consistent vocabulary of properties and reuse it:

- Keep value sets controlled (e.g. `status: backlog | active | done`) so
  `groupBy`/filters stay clean.
- **Multi-value? Use a YAML list** and filter it with `contains`:

  ```yaml
  # note frontmatter
  contact_type: [dj, musician]
  ```
  ```yaml
  # base filter — works whether the value is a scalar or a list
  - list(contact_type).contains("dj")
  ```
  A property is only treated as a *List* (multi-select pills, etc.) when it
  actually holds a list. Seed new/template notes with `prop: []` so the type
  stays List from the start instead of silently reverting to a scalar.

## Gotchas worth knowing up front

These are the ones that commonly trip people up:

- **Clickable titles:** the note opens when you click the **`file.name`**
  cell/title. In a `table`, make sure `file.name` is in `order`; in `cards` the
  title is clickable by default. A column of `summary`/other text is *not* a
  link.
- **Cards can't show note body text.** A card displays the properties you list,
  not the note's content. For a scannable preview, add a short `summary`
  frontmatter property and show that.
- **No native conditional color-coding** (coloring rows/cells/cards by value) as
  of mid-2026 — it's an open feature request. Workarounds: surface a value as a
  `#tag` and use Obsidian's tag colors, or the community **"Colored Bases
  Properties"** plugin (colors list-value pills).
- **Bases filter by properties, not folders.** Prefer `type == "..."` over
  `file.inFolder(...)` if you want notes to keep working when moved. Wikilinks
  resolve by basename vault-wide, so reorganizing folders won't break a base.
- **Community plugins write verbose auto-managed config.** The Kanban Bases View
  plugin adds a `type: kanban-view` block with long `columnOrders` /
  `cardOrders` / `columnColors` / `swimlaneOrders` lists (every file path,
  remembered positions). That bulk is the plugin's bookkeeping — don't hand-edit
  it; change lanes by editing the notes' grouping property (e.g. `status`) and
  let the plugin reconcile.
- **`groupBy` a list property** puts a card under each of its values — usually
  what you want, occasionally surprising.

## Functions

Filters and formulas share the same function library, organized by value type
(global, date, string, number, list, link, file, object, regexp). Common ones:
`if()`, `date()`, `now()`/`today()`, `link()`, `list()`, `file.hasTag()`,
`file.inFolder()`, `list.contains()`, `string.contains()`, `date.format()`. For
the full catalogue with signatures and examples, read
[`references/bases-reference.md`](references/bases-reference.md) — load it when
you need a function you don't remember or are writing a non-trivial
formula/filter.

## Official docs (refresh when unsure — Bases changes fast)

Bases is young and evolving, so verify specifics against the live docs rather
than trusting memory. Tip: append `.md` to any Obsidian Help URL to fetch the
raw Markdown.

- Introduction / create a base: https://help.obsidian.md/bases
- Syntax (the `.base` file format): https://help.obsidian.md/bases/syntax
- Functions: https://help.obsidian.md/bases/functions
- Views (layouts, filter/sort/group UI): https://help.obsidian.md/bases/views
- Properties (frontmatter types): https://help.obsidian.md/properties
- Kanban Bases View (community plugin): https://community.obsidian.md/plugins (search "Kanban Bases View")
