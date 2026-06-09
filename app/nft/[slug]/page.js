import Layout from "../../../src/components/layout"
import RedirectToArt from "./RedirectToArt"
import { publishedLoops, getLoop, loopHref } from "../../../src/data/vjLoops"

// Legacy alias: the loops used to live under /nft/<slug> before moving to
// /art/<slug>. Keep the old URLs resolving by generating a redirect page for
// each loop that bounces to its new home (see RedirectToArt for the why).
export const dynamicParams = false

export async function generateStaticParams() {
  return publishedLoops.map(loop => ({ slug: loop.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const loop = getLoop(slug)
  if (!loop) return { title: "Redirecting…" }
  return {
    title: loop.title,
    // Point search engines at the canonical /art URL, and keep the alias out
    // of the index.
    alternates: {
      canonical: `https://www.synestheticworks.com${loopHref(loop)}`,
    },
    robots: { index: false, follow: true },
  }
}

export default async function NftAliasPage({ params }) {
  const { slug } = await params
  const loop = getLoop(slug)
  const to = loop ? loopHref(loop) : "/vj-loops/"

  return (
    <Layout>
      <RedirectToArt to={to} />
    </Layout>
  )
}
