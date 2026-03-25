import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export function getAllPosts() {
  const fileNames = fs.readdirSync(contentDirectory)
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      // Format date
      const date = new Date(data.date)
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      })

      return {
        slug: data.slug.replace('/blog/', ''),
        title: data.title,
        date: formattedDate,
        rawDate: data.date,
        summary: data.summary,
        ogimage: data.ogimage,
      }
    })

  // Sort by date descending
  allPosts.sort((a, b) => (a.rawDate > b.rawDate ? -1 : 1))
  return allPosts
}

export async function getPostBySlug(slug) {
  // Find the markdown file whose frontmatter slug matches
  const fileNames = fs.readdirSync(contentDirectory)

  for (const fileName of fileNames) {
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    if (data.slug === `/blog/${slug}`) {
      const processedContent = await remark().use(html).process(content)
      const contentHtml = processedContent.toString()

      const date = new Date(data.date)
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      })

      return {
        slug,
        title: data.title,
        date: formattedDate,
        ogimage: data.ogimage,
        html: contentHtml,
      }
    }
  }

  return null
}
