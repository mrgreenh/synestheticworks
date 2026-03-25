"use client"

import Layout from "../../src/components/layout"
import BlogHeader from "../../src/components/blogHeader"
import BookingsIntro from '../../src/components/bookings/BookingsIntro'
import BookingsMosaic from '../../src/components/bookings/BookingsMosaic'
import Link from 'next/link'

export default function Bookings() {
    return <Layout>
        <BlogHeader ogimage="/home.png" />
        <BookingsIntro/>
        <BookingsMosaic/>
        <h3 className="big-label">Check out the <Link href="/">Home</Link> for more 🚀</h3>
    </Layout>
}
