# Bases reference

Distilled from the official docs (verify against the live pages if something
looks off — append `.md` to any Help URL for raw Markdown):
[syntax](https://help.obsidian.md/bases/syntax) ·
[functions](https://help.obsidian.md/bases/functions) ·
[views](https://help.obsidian.md/bases/views).

## Contents
- [Operators](#operators)
- [Date arithmetic & durations](#date-arithmetic--durations)
- [Types](#types)
- [File properties](#file-properties)
- [Default summary formulas](#default-summary-formulas)
- [View config keys](#view-config-keys)
- [Functions — global](#functions--global)
- [Functions — any](#functions--any)
- [Functions — date](#functions--date)
- [Functions — string](#functions--string)
- [Functions — number](#functions--number)
- [Functions — list](#functions--list)
- [Functions — link](#functions--link)
- [Functions — file](#functions--file)
- [Functions — object & regexp](#functions--object--regexp)

## Operators

Arithmetic: `+ - * / %` and `( )`.
Comparison: `==`, `!=`, `>`, `<`, `>=`, `<=` (equality works on any type; the
others on numbers/dates).
Boolean: `!` (not), `&&` (and), `||` (or).

## Date arithmetic & durations

Modify dates by adding/subtracting a duration string: `date + "1M"`,
`now() - "2h"`, `today() + "7d"`. Units accept long or short forms:
`y/year/years`, `M/month/months`, `d/day/days`, `w/week/weeks`,
`h/hour/hours`, `m/minute/minutes`, `s/second/seconds`.

- `now() + "1 day"` → 24h from now.
- `file.mtime > now() - "1 week"` → true if modified in the last week.
- Subtracting two dates yields the millisecond difference.
- `date("2024-12-01") + "1M" + "4h"` → date math chains.
- Get the date part of a datetime: `datetime.date()`. Format:
  `datetime.format("YYYY-MM-DD")`.

## Types

- **String** — single/double quotes: `"hello"`.
- **Number** — `1`, `(2.5)`.
- **Boolean** — `true` / `false` (unquoted).
- **Date / datetime** — `date("2025-01-01 12:00:00")`; modify with durations.
- **List** — `list("x")` wraps a value; index with `prop[0]`; great for
  properties that are sometimes scalar, sometimes a list.
- **Object** — access with `prop.sub` or `prop["sub"]`.
- **Link** — wikilinks in frontmatter are auto-recognized Link objects and
  render clickable. Build with `link("path")` or `file.asLink()`. Links compare
  equal when they resolve to the same file, and can be compared to `file` / `this`
  (`author == this`) or checked in lists (`authors.contains(this)`).

## File properties

Available on every file (any type), via `file.`:

| Property | Type | Description |
|---|---|---|
| `file.name` / `file.basename` | String | name (with/without extension) |
| `file.path` | String | vault-relative path |
| `file.folder` | String | parent folder path |
| `file.ext` | String | extension |
| `file.size` | Number | bytes |
| `file.ctime` / `file.mtime` | Date | created / modified time |
| `file.tags` | List | all tags (inline + frontmatter) |
| `file.links` | List | internal links in the note |
| `file.backlinks` | List | files linking here (heavy — prefer reverse `file.links`) |
| `file.embeds` | List | embeds in the note |
| `file.properties` | Object | all frontmatter properties |
| `file.file` | File | the file object (for functions) |

`this` exposes the same under `this.file.*` (e.g. `this.file.folder`).

## Default summary formulas

Assign in a view's `summaries:` map (`property: SummaryName`). Built-ins:
`Average`, `Min`, `Max`, `Sum`, `Range`, `Median`, `Stddev` (numbers);
`Earliest`, `Latest`, `Range` (dates); `Checked`, `Unchecked` (booleans);
`Empty`, `Filled`, `Unique` (any). Define custom ones in the top-level
`summaries:` block using the `values` list, e.g. `values.mean().round(3)`.

## View config keys

Per view entry in `views:`:

- `type` — `table` | `cards` | `list` | `map` | (plugin types like `kanban-view`).
- `name` — display name; first view is the default; used in `![[File.base#name]]`.
- `filters` — same grammar as global filters; AND-ed with them.
- `order` — list of properties = the columns/fields shown, in order.
- `groupBy` — `{ property, direction }`; one property; rows grouped by its value.
- `sort` — list of `{ property, direction }` (ASC/DESC); multi-key.
- `limit` — max rows.
- `summaries` — `{ property: SummaryName }` column-foot aggregates.
- `columnSize` — `{ property: pixels }` saved column widths (UI-managed).
- Cards views also use cover-image / card-size settings (UI-managed).

## Functions — global

`escapeHTML(s)`, `date(str)`, `duration(str)`, `file(pathOrLinkOrUrl)`,
`html(str)`, `if(cond, then, else?)`, `image(pathOrUrl)`, `icon(lucideName)`,
`link(path, display?)`, `list(el)`, `max(a, b, …)`, `min(a, b, …)`, `now()`,
`number(any)`, `today()`, `random()`.

`if(isModified, "Modified", "Unmodified")` · `link("[[Note]]", "Display")` ·
`icon("arrow-right")`.

## Functions — any

`value.isTruthy()`, `value.isType("string"|"boolean"|…)`, `value.toString()`.

## Functions — date

Fields: `.year .month .day .hour .minute .second .millisecond`.
Methods: `date.date()` (strip time), `date.format("YYYY-MM-DD")` (Moment.js
tokens), `date.time()`, `date.relative()` (e.g. "3 days ago"), `date.isEmpty()`.

## Functions — string

Field `.length`. Methods: `contains(s)`, `containsAll(…)`, `containsAny(…)`,
`startsWith(s)`, `endsWith(s)`, `isEmpty()`, `lower()`, `title()`, `trim()`,
`replace(patternOrRegex, repl)`, `repeat(n)`, `reverse()`,
`slice(start, end?)`, `split(sep, n?)`.

## Functions — number

`abs()`, `ceil()`, `floor()`, `round(digits?)`, `toFixed(p)`, `isEmpty()`.

## Functions — list

Field `.length`. Methods: `contains(v)`, `containsAll(…)`, `containsAny(…)`,
`filter(expr)`, `map(expr)`, `reduce(expr, acc)`, `flat()`, `join(sep)`,
`sort()`, `reverse()`, `slice(s, e?)`, `unique()`, `isEmpty()`.
In `filter`/`map`/`reduce`, refer to `value`, `index`, and (reduce) `acc`.

`[1,2,3].contains(2)` · `tags.filter(value != "wip")` ·
`list(contact_type).contains("dj")` (robust scalar-or-list membership).

## Functions — link

`link.asFile()` → file object if it resolves; `link.linksTo(file)` → boolean.
Construct: `link("path", "display?")`. From a file: `file.asLink("display?")`.

## Functions — file

Fields: see [File properties](#file-properties). Methods:
`file.asLink(display?)`, `file.hasLink(otherFileOrPath)`,
`file.hasProperty(name)`, `file.hasTag(name, …)` (includes nested tags),
`file.inFolder(folder)` (includes subfolders).

`file.hasTag("project", "area")` · `file.inFolder("Marketing/Content")` ·
`file.hasLink(this.file)` (backlinks-style).

## Functions — object & regexp

Object: `obj.isEmpty()`, `obj.keys()`, `obj.values()`.
Regexp: `/abc/.matches("abcde")` → boolean. String `replace` accepts a regex
with capture groups: `"John Smith".replace(/(\w+) (\w+)/, "$2, $1")`.
