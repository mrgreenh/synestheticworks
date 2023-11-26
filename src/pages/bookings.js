import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BlogHeader from "../components/blogHeader"
import MediaPlayer from '../components/MediaPlayer'
import BookingsIntro from './bookings_components/BookingsIntro'
import BookingsMosaic from './bookings_components/BookingsMosaic'
import MixesMosaic from '../components/mosaics/MixesMosaic'

import "./bookings_components/bookings.scss"

const About = () => {
    return <Layout>
        <BlogHeader ogimage="/home.png" />
        <BookingsIntro/>
        <BookingsMosaic/>
        <h3 className="big-label">Check out the <Link to="/">Home</Link> for more 🚀</h3>
        {/* <MixesMosaic/> */}
    </Layout>;
}

export default About