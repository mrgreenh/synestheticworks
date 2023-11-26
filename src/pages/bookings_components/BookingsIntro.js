import React from 'react';
import { Link } from "gatsby"
import MediaPlayer from "../../components/MediaPlayer"

const BookingsIntro = () => {
    return (
        <div class="bookings_intro">

            <div class="framed">
                <a className="play-button" alt="watch full video" href="https://youtu.be/uyqBv9A9Hpg" target="_blank"/>
                <MediaPlayer
                    url='/promo_loop.webm'
                    width='100%'
                    height='100%'
                    loop={true}
                    playing={true}
                    muted={true}
                    playsinline={true}
                    controls={false}
                ></MediaPlayer>

                <div class="text_with_gradient">
                    <strong>Thank you for checking out my work!</strong><br />
                    I'm a DJ and visual artist based in San Francisco, and currently open for bookings as DJ, VJ, and my specialty: <strong style={{ boxShadow: "0 0 10px rgb(200, 200, 0)", backgroundColor: "rgba(255, 255, 0, 0.3)", color: "white" }}>Video-DJ</strong>. Make sure to check out the <a href="https://www.youtube.com/playlist?list=PL7gzsMg4b2X4iWNK8AsWMRBaGOgxruCe7" target="_blank">examples</a> linked below,
                    and if you'd like to see this one-of-a-kind performance at your venue or event, reach me on <a href="https://ig.me/m/synwrks" target="_blank">Instagram</a> or <a href="mailto:info@synwrks.com?subject=Booking inquiry">email</a>.<br />
                    All visuals are original works created by me, and procedurally blended to closely represent music through a custom software I'm currently developing, inspired by <Link to="/synesthesia1">synesthesia</Link>.<br />
                    <br />
                    - <Link to="/about"><i>Synwrks</i></Link>
                </div>
            </div>
        </div>
    );
    
}

export default BookingsIntro;
