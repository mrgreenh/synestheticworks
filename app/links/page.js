import Layout from "../../src/components/layout"
import Image from "next-image-export-optimizer"

export const metadata = {
  title: 'Links',
}

const links = [
  {
    url: "https://distrokid.com/hyperfollow/synwrks/the-book-of-tea",
    title: "Listen to my latest release:",
    description: '"The Book of Tea"',
    symbol: "🔊",
  },
  {
    url: "https://www.youtube.me/synwrks",
    title: "YouTube",
    description: "Original music videos, VR & V-DJ sets recordings",
    icon: "/images/youtube.png",
  },
  {
    url: "https://www.instagram.com/synwrks/",
    title: "Instagram",
    description: "Events, art, behind the scenes & updates",
    icon: "/images/instagram.png",
  },
  {
    url: "https://open.spotify.com/artist/1IkV119B5J0dgRzNiyu3FK",
    title: "Spotify",
    description: "Original music",
    icon: "/images/spotify.png",
  },
  {
    url: "https://soundcloud.com/synwrks",
    title: "SoundCloud",
    description: "Even more original music & mix recordings",
    icon: "/images/soundcloud.png",
  },
  {
    url: "https://twitch.tv/synwrks",
    title: "Twitch",
    description: "Live V-DJ Sets every week",
    icon: "/images/twitch.png",
  },
  {
    url: "https://www.facebook.com/synestheticworks",
    title: "Facebook",
    description: "Art & updates",
    icon: "/images/facebook.png",
  },
  {
    url: "https://x.com/synwrks",
    title: "X",
    description: "Quick updates",
    icon: "/images/twitter.png",
  },
  {
    url: "https://synwrks.com/",
    title: "Blog",
    description: 'Philosophy, instructions, "about" & hub',
    symbol: "📝",
  },
]

export default function LinksPage() {
  return (
    <Layout>
      <div className="links-container">
        <ul className="links-list">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                title={`Link to ${link.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  {link.icon ? (
                    <Image src={link.icon} alt={link.title} width={60} height={60} />
                  ) : (
                    <span className="symbol">{link.symbol}</span>
                  )}
                </div>
                <div className="link-text">
                  <h2>{link.title}</h2>
                  {link.description && <p>{link.description}</p>}
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="qrcode-container">
          <Image src="/images/links_qrcode.png" alt="QR Code" width={200} height={200} />
        </div>
      </div>
    </Layout>
  )
}
