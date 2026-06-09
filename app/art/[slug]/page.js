import Layout from "../../../src/components/layout"
import NFTLayout from "../../../src/components/NFTLayout"
import { publishedLoops, getLoop, isPublished } from "../../../src/data/vjLoops"

export async function generateStaticParams() {
  return publishedLoops.map(loop => ({ slug: loop.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const loop = getLoop(slug)
  if (!loop) return { title: "Not Found" }
  return {
    title: loop.title,
    openGraph: {
      images: [{ url: `https://www.synestheticworks.com${loop.ogimage}` }],
    },
  }
}

export default async function NFTPage({ params }) {
  const { slug } = await params
  const loop = getLoop(slug)

  if (!loop || !isPublished(loop)) {
    return (
      <Layout>
        <h1>Loop not found</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <NFTLayout loop={loop} />
    </Layout>
  )
}
