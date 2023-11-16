import React from "react"

import Layout from "../../components/layout"
import BlogHeader from "../../components/blogHeader"
import MediaPlayer from '../../components/MediaPlayer'
import BookingsIntro from './BookingsIntro'
import BookingsMosaic from './BookingsMosaic'
import MixesMosaic from '../../components/mosaics/MixesMosaic'

import "./performing.scss"

const About = () => {
  return <Layout>
    <BlogHeader ogimage="/home.png" title="Visual Psytrance Music Journey (Exploration)" />
    <BookingsIntro/>
    <MediaPlayer 
        controls={true}
        className='react-player'
        url='https://youtu.be/lRnhCE_BLsk?si=TGMLR_J2ymKC2UxT'
        width='100%'
        height="100%"
    />
    <BookingsMosaic />
    <MixesMosaic/>
    </Layout>;
}

export default About