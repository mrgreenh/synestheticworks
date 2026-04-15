"use client"

import Layout from "../../../src/components/layout"
import BlogHeader from "../../../src/components/blogHeader"
import PillsMixesMosaic from "../../../src/components/bookings/PillsMixesMosaic"
import Image from "next-image-export-optimizer"
import Link from "next/link"

export default function ExplorationPage() {
  return (
    <Layout>
      <BlogHeader ogimage="/home.png" title="Synesthetic Mix: Exploration" />
      <a
        href="https://youtu.be/fICLKB0IfBo?si=tl2o0WCsQOacrX4h"
        title="Take it"
        target="_blank"
      >
        <Image src="/images/exploration_transparent_play.png" alt="Exploration" width={1080} height={608} style={{ width: '100%', height: 'auto' }}/>
      </a>
      <PillsMixesMosaic />
      <h3 className="big-label">
        Check out the <Link href="/">Home</Link> for more 🚀
      </h3>
    </Layout>
  )
}
