"use client"

import React from "react"
import Link from "next/link"
import Image from "next-image-export-optimizer"
import ThemeToggle from "./ThemeToggle"

const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="theme-toggle-item">
          <ThemeToggle />
        </li>
        <li>
          <a href="https://www.instagram.com/synwrks/" title="Link to Instagram page" target="_blank"><Image src="/images/instagram.png" alt="Instagram" width={100} height={100} style={{ width: '100%', height: 'auto' }}/></a>
        </li>
        <li>
          <a href="https://www.twitch.tv/synwrks/" title="Link to Twitch page" target="_blank"><Image src="/images/twitch.png" alt="Twitch" width={100} height={100} style={{ width: '100%', height: 'auto' }}/></a>
        </li>
        <li>
          <a href="https://bit.ly/synwrks-youtube" title="Link to Youtube page" target="_blank"><Image src="/images/youtube.png" alt="YouTube" width={100} height={100} style={{ width: '100%', height: 'auto' }}/></a>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/1IkV119B5J0dgRzNiyu3FK?si=yazckQCFSemWAT1aoIpLrQ" title="Link to Spotify artist page" target="_blank"><Image src="/images/spotify.png" alt="Spotify" width={100} height={100} style={{ width: '100%', height: 'auto' }}/></a>
        </li>
        <li>
          <Link href="/links" title="All social accounts."><Image src="/images/links.png" alt="Links" width={100} height={100} style={{ width: '100%', height: 'auto' }}/></Link>
        </li>
      </ul>
      <p className="newsletter-link"><a href="http://eepurl.com/hQ3rAn" target="_blank">Newsletter</a></p>
    </footer>
  )
}

export default Footer
