import Layout from "../src/components/layout"
import ShortsMosaic from "../src/components/mosaics/ShortsMosaic"
import MixesMosaic from "../src/components/mosaics/MixesMosaic"
import NFTsMosaic from "../src/components/mosaics/NFTsMosaic"
import MiscMosaic from "../src/components/mosaics/MiscMosaic"
import BlogContents from "../src/components/blogContents"
import { getAllPosts } from "../lib/markdown"

export const metadata = {
  title: "Home",
  openGraph: {
    images: [{ url: "https://www.synestheticworks.com/home.png" }],
  },
}

export default function IndexPage() {
  const posts = getAllPosts()

  return (
    <Layout>
      <div className="home-mosaic-container">
        <MiscMosaic />
      </div>
      <div className="home-mosaic-container">
        <NFTsMosaic />
        <h2 className={"inset"}>Original VJ Loops</h2>
      </div>
      <div className="home-mosaic-container">
        <MixesMosaic />
        <h2 className={"inset"}>Visual DJ Mixes</h2>
      </div>
      <div className="home-mosaic-container">
        <ShortsMosaic />
        <h2 className={"inset"}>VR & Music Videos</h2>
      </div>
      <div className="home-mosaic-container">
        <h2>Blog</h2>
      </div>
      <BlogContents count={2} includeDescriptions={true} posts={posts} />
    </Layout>
  )
}
