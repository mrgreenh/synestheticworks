"use client"

import Layout from "../../../src/components/layout"
import BlogHeader from "../../../src/components/blogHeader"
import PillsMixesMosaic from "../../../src/components/bookings/PillsMixesMosaic"
import Image from "next/image"
import Link from "next/link"

export default function IntrospectionPage() {
  return (
    <Layout>
      <BlogHeader ogimage="/home.png" title="Synesthetic Mix: Introspection" />
      <a
        href="https://youtu.be/2FIGPF3Mg08?si=YSVRn_AaDxYQFGYc"
        title="Take it"
        target="_blank"
      >
        <Image src="/images/introspection_transparent_play.png" alt="Introspection" width={1080} height={608} style={{ width: '100%', height: 'auto' }}/>
      </a>
      <PillsMixesMosaic />
      <h3 className="big-label">
        Check out the <Link href="/">Home</Link> for more 🚀
      </h3>
    </Layout>
  )
}
