import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import BlogHeader from "../../components/blogHeader"
import MediaPlayer from '../../components/MediaPlayer'
import BookingsIntro from './BookingsIntro'
import BookingsMosaic from './BookingsMosaic'
import MixesMosaic from '../../components/mosaics/MixesMosaic'

import "./performing.scss"

const About = () => {
    return <Layout>
        <BlogHeader ogimage="/home.png" title="Visual House Music Journey (Introspection)" />
        <BookingsIntro/>
        <MediaPlayer 
                controls={true}
                className='react-player'
                url='https://youtu.be/YcbpBRkktB8?si=vj_YUClExHNbw17O'
                width='100%'
                height="100%"
        />
        <BookingsMosaic/>
        <MixesMosaic/>
    </Layout>;
}

export default About