import Link from "next/link"
import Layout from "../../src/components/layout"
import BlogHeader from "../../src/components/blogHeader"
import LoopCard from "../../src/components/LoopCard"
import { publishedLoops } from "../../src/data/vjLoops"

export const metadata = {
  title: "Original VJ Loops",
  openGraph: {
    images: [{ url: "https://www.synestheticworks.com/home.png" }],
  },
}

export default function VJLoopsPage() {
  return (
    <Layout>
      <BlogHeader title="Original VJ Loops" />

      <section className="vj-gallery">
        <p className="vj-gallery__intro">
          I made these animations to assemble my visual DJ sets and VJ
          performances. I explain my process{" "}
          <Link
            href="https://youtu.be/hgfgBuqa5Mg?si=LcK07w-GW1vuQvSw"
            target="_blank"
          >
            in this video
          </Link>
          .
        </p>

        <h3>Granting Voice Series</h3>
        <p className="vj-gallery__collection_intro">
          These loops are forward-scrolling animations taking place in an
          imaginary galaxy where a super-intelligent AI divides all life forms
          into two groups: the Blessed Ones, and everyone else. I described this
          backstory in{" "}
          <Link href="/blog/blessed_ones_backstory">this blog article</Link>.
        </p>
        <div className="vj-gallery__grid">
          {publishedLoops
            .filter(l => l.collection === "granting_voice")
            .map((loop, i) => (
              <LoopCard key={loop.slug} loop={loop} index={i} />
            ))}
        </div>

        <hr />
        <h3>Others</h3>
        <div className="vj-gallery__grid">
          {publishedLoops
            .filter(l => l.collection == null)
            .map((loop, i) => (
              <LoopCard key={loop.slug} loop={loop} index={i} />
            ))}
        </div>
      </section>
    </Layout>
  )
}
