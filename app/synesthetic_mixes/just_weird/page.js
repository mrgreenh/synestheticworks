"use client"

import Layout from "../../../src/components/layout"
import BlogHeader from "../../../src/components/blogHeader"
import PillsMixesMosaic from "../../../src/components/bookings/PillsMixesMosaic"
import Image from "next-image-export-optimizer"
import Link from "next/link"

export default function JustWeirdPage() {
  return (
    <Layout>
      <BlogHeader ogimage="/home.png" title="Synesthetic Mix: Just Weird" />
      <a
        href="https://youtu.be/kk7q6pYXhFs?si=GPRGnASvxjIFPiUj"
        title="Take it"
        target="_blank"
      >
        <Image src="/images/just_weird_transparent_play.png" alt="Just Weird" width={1080} height={608} style={{ width: '100%', height: 'auto' }}/>
      </a>
      <PillsMixesMosaic />
      <h3 className="big-label">
        Check out the <Link href="/">Home</Link> for more 🚀
      </h3>
    </Layout>
  )
}
