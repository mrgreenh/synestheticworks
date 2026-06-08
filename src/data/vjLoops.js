// ---------------------------------------------------------------------------
// Original VJ Loops — single source of truth.
//
// Every place that needs to know about a looping artwork reads from here:
//   - the "Original VJ Loops" mosaic on the home page (src/components/mosaics/NFTsMosaic.js)
//   - the gallery index at /vj-loops (app/vj-loops/page.js)
//   - each individual loop page at /nft/[slug] (app/nft/[slug]/page.js)
//
// `layers` is an array of the individual layer videos that compose a loop
// ({ name, video, thumb }); the displayed layer count derives from its length.
// Loops whose layers haven't been collected yet may use a plain number as a
// placeholder count instead — `layerCount()`/`hasLayers()` handle both. Encode
// new assets and generate the `layers` snippet with the "add-loop-to-website"
// skill (.claude/skills/add-loop-to-website). Keep this file their only home.
//
// `gumroad` is an optional purchase URL. When present, a "Buy" button appears on
// both the gallery card and the loop's page; when absent, no button is shown.
// ---------------------------------------------------------------------------

export const vjLoops = [
  {
    slug: "portalpeaks",
    title: "Portal Peaks",
    // thumbnail still frame shown by default in mosaics and cards
    thumb: "/images/nft_thumbs/portal_peaks_daytime.jpg",
    // full-resolution loop shown at the top of the loop's own page
    video: "/nfts/portal_peaks_baq.mp4",
    // lightweight, muted preview shown on card hover (encoded with ffmpeg)
    preview: "/nfts/previews/portalpeaks.mp4",
    ogimage: "/nfts/portal_peaks_daytime.jpg",
    light: true,
    gumroad: "https://synwrks.gumroad.com/l/portalpeaks",
    date: "August 2022",
    year: "2022",
    story: [
      "The Granting Voice's mandate required infrastructure built in all corners of the galaxy. Its functional design was made to survive through eons, while claiming no aesthetic aims on its surroundings.",
      "You could stare at an unremarkable landscape for a century, or two, before it suddenly came to life to fullfill its task.",
    ],
    // Optional "how it was made" block. A React node (JSX), so it accepts rich
    // formatting and components — paragraphs, lists, links, emphasis, etc.
    making: (
      <>
        <p>
          Portal Peaks is composited from twelve independently rendered loops:
          base passes for the terrain, water, crystals and ships, each paired
          with a matching <em>glare</em> pass, then layered and blended for live
          mixing.
        </p>
      </>
    ),
    // The composing layers, in stacking order (base passes then glares).
    layers: [
      {
        name: "Floor",
        video: "/nfts/layers/portalpeaks/01_floor.mp4",
        thumb: "/nfts/layers/portalpeaks/01_floor.jpg",
      },
      {
        name: "Shimmer",
        video: "/nfts/layers/portalpeaks/02_shimmer.mp4",
        thumb: "/nfts/layers/portalpeaks/02_shimmer.jpg",
      },
      {
        name: "Ships",
        video: "/nfts/layers/portalpeaks/03_ships.mp4",
        thumb: "/nfts/layers/portalpeaks/03_ships.jpg",
      },
      {
        name: "Bioluminescence",
        video: "/nfts/layers/portalpeaks/04_bioluminescence.mp4",
        thumb: "/nfts/layers/portalpeaks/04_bioluminescence.jpg",
      },
      {
        name: "Crystals",
        video: "/nfts/layers/portalpeaks/05_crystals.mp4",
        thumb: "/nfts/layers/portalpeaks/05_crystals.jpg",
      },
      {
        name: "Daylight",
        video: "/nfts/layers/portalpeaks/06_daylight.mp4",
        thumb: "/nfts/layers/portalpeaks/06_daylight.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/portalpeaks/07_depth.mp4",
        thumb: "/nfts/layers/portalpeaks/07_depth.jpg",
      },
      {
        name: "Fruit",
        video: "/nfts/layers/portalpeaks/08_fruit.mp4",
        thumb: "/nfts/layers/portalpeaks/08_fruit.jpg",
      },
      {
        name: "Stars",
        video: "/nfts/layers/portalpeaks/09_stars.mp4",
        thumb: "/nfts/layers/portalpeaks/09_stars.jpg",
      },
      {
        name: "Floor Glare Only",
        video: "/nfts/layers/portalpeaks/10_floor_glare.mp4",
        thumb: "/nfts/layers/portalpeaks/10_floor_glare.jpg",
      },
      {
        name: "Shimmer Glare Only",
        video: "/nfts/layers/portalpeaks/11_shimmer_glare.mp4",
        thumb: "/nfts/layers/portalpeaks/11_shimmer_glare.jpg",
      },
      {
        name: "Ships Glare Only",
        video: "/nfts/layers/portalpeaks/12_ships_glare.mp4",
        thumb: "/nfts/layers/portalpeaks/12_ships_glare.jpg",
      },
    ],
  },
  {
    slug: "terraforming",
    title: "Terraforming",
    thumb: "/images/nft_thumbs/ancient_path_purple.jpg",
    video: "/nfts/ancient_path_purple_ffmpeg.mp4",
    preview: "/nfts/previews/terraforming.mp4",
    ogimage: "/nfts/ancient_path_purple.jpg",
    light: true,
    layers: 9, // dummy — to be confirmed
    date: "February 21, 2022",
    year: "2022",
    story: [
      "Were you to ask any of the Blessed Children whether they were part of a multi-planetary civilization, they wouldn't understand the meaning of your question. They wouldn't know their home to be Artificial Planet #163 (AP163), orbiting Artificial Sun #9 (AS9).",
      "They would however invite you to enjoy the beauty of the grass field and its hypnotic motion. One of millions of identical fields that nobody had ever set eyes on, waiting to be inhabited, waving in the wind.",
    ],
  },
  {
    slug: "planetarybridges",
    title: "Planetary Bridges",
    thumb: "/images/nft_thumbs/planetary_bridges_full.png",
    video: "/nfts/planetary_tunnels_full_ffmpeg.mp4",
    preview: "/nfts/previews/planetarybridges.mp4",
    ogimage: "/nfts/planetary_bridges_full.png",
    light: true,
    layers: 8, // dummy — to be confirmed
    date: "December 5, 2021",
    year: "2021",
    story: [
      "It was no secret among maritime merchants that structures of unfathomable size could be sighted in the distant horizons. These stretched through the skies so far that, on a clear day, they could be seen touching the gods.",
      "It was observed by those knowledgeable about the ways of the Granting Voice, that intense lightings often propagated through the constructions just after the voice was exercised.",
    ],
  },
  {
    slug: "harvester",
    title: "Harvester",
    thumb: "/images/nft_thumbs/harvester_full.png",
    video: "/nfts/harvester_full_ffmpeg.mp4",
    preview: "/nfts/previews/harvester.mp4",
    ogimage: "/nfts/harvester_full.png",
    light: true,
    layers: 7, // dummy — to be confirmed
    date: "December 5, 2021",
    year: "2021",
    story: [
      "There were only two types of civilization in the universe: those on the right side and those on the wrong side of the Granting Voice. The former only comprised the Blessed Children, while the latter extended to any other present and future form of life within the light cone of the Granting Voice's birth.",
      "Harvesters only understood the above distinction when it came to selecting celestial bodies to mine for resources, placing all forms of life but one in the path of destruction.",
    ],
  },
]

// Canonical route for a loop's own page.
export const loopHref = loop => `/nft/${loop.slug}/`

// The gallery index page listing every loop.
export const galleryHref = "/vj-loops/"

// How many loops the home-page mosaic shows before the "See All" tile.
export const MOSAIC_LIMIT = 6

export const getLoop = slug => vjLoops.find(l => l.slug === slug)

// `layers` may be an array of layer objects or a placeholder count (number).
export const layerCount = loop =>
  Array.isArray(loop.layers) ? loop.layers.length : loop.layers || 0

export const hasLayers = loop =>
  Array.isArray(loop.layers) && loop.layers.length > 0

export default vjLoops
