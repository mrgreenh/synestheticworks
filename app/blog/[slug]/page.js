import Layout from "../../../src/components/layout"
import BlogHeader from "../../../src/components/blogHeader"
import BlogContents from "../../../src/components/blogContents"
import { getPostBySlug, getAllPosts } from "../../../lib/markdown"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: post.title,
    openGraph: {
      images: [{ url: `https://www.synestheticworks.com${post.ogimage}` }],
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const allPosts = getAllPosts()

  if (!post) {
    return <Layout><h1>Post not found</h1></Layout>
  }

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <BlogHeader title={post.title} date={post.date} ogimage={post.ogimage}/>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      <hr/>
      <BlogContents
        exclude={post.title}
        includeDescriptions={false}
        count={2}
        posts={allPosts}/>
    </Layout>
  )
}
