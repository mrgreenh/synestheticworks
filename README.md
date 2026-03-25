http://www.synestheticworks.com

## Tech Stack

The whole website was one-shot-migrated to Next js with Opus 4.6 from a Gatsby project.

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) with static export
- **Styling**: SCSS (global, imported via `app/globals.scss`)
- **Blog**: Markdown files in `content/`, processed with gray-matter + remark
- **Hosting**: GitHub Pages (static HTML deployed to the `master` branch)

## Project Structure

```
app/                  # Next.js App Router pages and layouts
content/              # Markdown blog posts
lib/                  # Utilities (markdown processing)
public/               # Static assets (images, videos, CNAME)
src/components/       # React components
src/styles/           # SCSS stylesheets
```

## Prerequisites

- Node.js 18+
- npm

## Development

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This generates a static export in the `out/` directory. The site uses `output: 'export'` in `next.config.js`, so no Node.js server is needed at runtime.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and pushes the `out/` directory to the `master` branch using `gh-pages`. The `source` branch holds the source code; `master` holds the deployed static files.

## Adding a Blog Post

1. Create a new `.md` file in `content/`
2. Add frontmatter:

   ```yaml
   ---
   slug: "/blog/your-post-slug"
   date: "2024-01-15"
   title: "Post Title"
   summary: "A short description for the blog listing."
   ---

   ```

3. Write the post body in Markdown below the frontmatter
4. The post will automatically appear on `/blog/` and at its slug URL

## Flow Animation Configs

The animated background on the left side of the page changes per route. To add or modify configs, edit the `pageToConfig` map in `src/components/FlowReadingTracker.js`.
