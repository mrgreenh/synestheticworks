import Layout from "../../src/components/layout"
import BlogHeader from "../../src/components/blogHeader"
import BlogContents from "../../src/components/blogContents"
import { getAllPosts } from "../../lib/markdown"

export const metadata = {
  title: 'All the ramblings',
  openGraph: {
    images: [{ url: 'https://www.synestheticworks.com/home.png' }],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <Layout>
        <BlogHeader ogimage="/home.png" title="All the ramblings"/>
        <BlogContents count={0} includeDescriptions={true} descOnMobile={true} posts={posts}/>
    </Layout>
  )
}
