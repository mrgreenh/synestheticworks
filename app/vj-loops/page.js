import Layout from "../../src/components/layout"
import BlogHeader from "../../src/components/blogHeader"
import LoopCard from "../../src/components/LoopCard"
import { vjLoops } from "../../src/data/vjLoops"

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
          Seamless windows on 3D Sculpted and procedural worlds, I made these
          layered animations to assemble my visual DJ sets and VJ performances.
          From here you can explore the full collection of loops, each with
          their composing layers and notes on their creation.
        </p>

        <div className="vj-gallery__grid">
          {vjLoops.map((loop, i) => (
            <LoopCard key={loop.slug} loop={loop} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
