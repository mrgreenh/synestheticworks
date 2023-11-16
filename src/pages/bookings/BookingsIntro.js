import React from 'react';
import { Link } from "gatsby"

const BookingsIntro = () => {
    return (
        <div class="bookings_intro">
            <div class="framed">
                <div class="text_with_gradient">
                    <strong>Thank you for tuning into this Synesthetic DJ Set!</strong> <br />
                    If you'd like to see this kind of performance at your venue or event, reach me at:<br />
                    <a href="mailto:info@synwrks.com?subject=Booking inquiry">info@synwrks.com</a><br />
                    All visuals are original works created by me, and procedurally blended to closely follow each song through a custom software I'm currently developing, inspired by <Link to="/synesthesia1">synesthesia</Link>.<br />
                </div>
            </div>
        </div>
    );
}

export default BookingsIntro;
