// ---------------------------------------------------------------------------
// Original VJ Loops — single source of truth.
//
// Every place that needs to know about a looping artwork reads from here:
//   - the "Original VJ Loops" mosaic on the home page (src/components/mosaics/NFTsMosaic.js)
//   - the gallery index at /vj-loops (app/vj-loops/page.js)
//   - each individual loop page at /art/[slug] (app/art/[slug]/page.js)
//
// `layers` is an array of the individual layer videos that compose a loop
// ({ name, video, thumb }); the displayed layer count derives from its length.
// Loops whose layers haven't been collected yet may use a plain number as a
// placeholder count instead — `layerCount()`/`hasLayers()` handle both. Encode
// new assets and generate the `layers` snippet with the "add-loop-to-website"
// skill (.claude/skills/add-loop-to-website). Keep this file their only home.
//
// `gumroad` is an optional purchase URL. When present (and `forSale` isn't
// false) a "Buy" button appears on both the gallery card and the loop's page.
//
// Two optional visibility flags (both default to ON when omitted):
//   - `published: false` hides the loop everywhere on the site — the gallery,
//     the home mosaic, the "see also" rows, and its own generated page.
//   - `forSale: false` keeps the loop visible but hides its Buy links (e.g. when
//     the Gumroad product is temporarily unlisted), without deleting the url.
// ---------------------------------------------------------------------------

export const vjLoops = [
  // ===================== Granting Voice Series =====================
  {
    slug: "spacepromenade",
    collection: "granting_voice",
    title: "Space Promenade",
    thumb: "/images/nft_thumbs/spacepromenade.jpg",
    video: "/nfts/spacepromenade.mp4",
    preview: "/nfts/previews/spacepromenade.mp4",
    ogimage: "/images/nft_thumbs/spacepromenade.jpg",
    light: true,
    layers: [
      {
        name: "Base",
        video: "/nfts/layers/spacepromenade/01_base.mp4",
        thumb: "/nfts/layers/spacepromenade/01_base.jpg",
      },
      {
        name: "Promenade Lights",
        video: "/nfts/layers/spacepromenade/02_promenade_lights.mp4",
        thumb: "/nfts/layers/spacepromenade/02_promenade_lights.jpg",
      },
      {
        name: "Stars",
        video: "/nfts/layers/spacepromenade/03_stars.mp4",
        thumb: "/nfts/layers/spacepromenade/03_stars.jpg",
      },
      {
        name: "Sunlight",
        video: "/nfts/layers/spacepromenade/04_sunlight.mp4",
        thumb: "/nfts/layers/spacepromenade/04_sunlight.jpg",
      },
      {
        name: "Tiles",
        video: "/nfts/layers/spacepromenade/05_tiles.mp4",
        thumb: "/nfts/layers/spacepromenade/05_tiles.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    story: [
      "We all watched the wizards climb that bridge into the night. For generations we queried the thin thread of marble, as it slowly swirled towards the stars, longing for their tales.",
    ],
    making: (
      <>
        <ul>
          <li>This was the first loop I made.</li>
          <li>
            Built out in Blender. No 3D modeling went into this one because, as
            all geometry I needed was a handful of spheres for the celestial
            bodies, all textures, animations and backdrops are built
            procedurally in the various node editors.
          </li>
          <li>
            Geometry Nodes weren't yet a thing, so this was animated using a
            plugin called "Animation Nodes", which here describe the movement
            and scaling of the various tiles and columns coming together to
            build the bridge as an infinite loop. This loop is only 2 seconds
            long.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "spacecolony",
    collection: "granting_voice",
    title: "Space Colony",
    thumb: "/images/nft_thumbs/spacecolony.jpg",
    video: "/nfts/spacecolony.mp4",
    preview: "/nfts/previews/spacecolony.mp4",
    ogimage: "/images/nft_thumbs/spacecolony.jpg",
    light: true,
    layers: [
      {
        name: "Beam1",
        video: "/nfts/layers/spacecolony/01_beam1.mp4",
        thumb: "/nfts/layers/spacecolony/01_beam1.jpg",
      },
      {
        name: "Beam2",
        video: "/nfts/layers/spacecolony/02_beam2.mp4",
        thumb: "/nfts/layers/spacecolony/02_beam2.jpg",
      },
      {
        name: "Beam3",
        video: "/nfts/layers/spacecolony/03_beam3.mp4",
        thumb: "/nfts/layers/spacecolony/03_beam3.jpg",
      },
      {
        name: "Beam4",
        video: "/nfts/layers/spacecolony/04_beam4.mp4",
        thumb: "/nfts/layers/spacecolony/04_beam4.jpg",
      },
      {
        name: "Beams",
        video: "/nfts/layers/spacecolony/05_beams.mp4",
        thumb: "/nfts/layers/spacecolony/05_beams.jpg",
      },
      {
        name: "City Lights",
        video: "/nfts/layers/spacecolony/06_city_lights.mp4",
        thumb: "/nfts/layers/spacecolony/06_city_lights.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/spacecolony/07_depth.mp4",
        thumb: "/nfts/layers/spacecolony/07_depth.jpg",
      },
      {
        name: "Energy",
        video: "/nfts/layers/spacecolony/08_energy.mp4",
        thumb: "/nfts/layers/spacecolony/08_energy.jpg",
      },
      {
        name: "Oled",
        video: "/nfts/layers/spacecolony/09_oled.mp4",
        thumb: "/nfts/layers/spacecolony/09_oled.jpg",
      },
      {
        name: "Promenade",
        video: "/nfts/layers/spacecolony/10_promenade.mp4",
        thumb: "/nfts/layers/spacecolony/10_promenade.jpg",
      },
      {
        name: "Streetlamps",
        video: "/nfts/layers/spacecolony/11_streetlamps.mp4",
        thumb: "/nfts/layers/spacecolony/11_streetlamps.jpg",
      },
      {
        name: "Sun",
        video: "/nfts/layers/spacecolony/12_sun.mp4",
        thumb: "/nfts/layers/spacecolony/12_sun.jpg",
      },
      {
        name: "Traffic",
        video: "/nfts/layers/spacecolony/13_traffic.mp4",
        thumb: "/nfts/layers/spacecolony/13_traffic.jpg",
      },
      {
        name: "Tron",
        video: "/nfts/layers/spacecolony/14_tron.mp4",
        thumb: "/nfts/layers/spacecolony/14_tron.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    story: [
      "Oftentimes, their lack of scientific understanding would be cause for outlandish asks, and the Granting Voice would figure out a way to make them possible regardless: bridges extending infinitely into the sky, spaceships made of marble, entire ring worlds built for a family of four.",
    ],
    making: (
      <>
        <ul>
          <li>
            Everything modeled directly within Blender. A few different building
            clusters generated via python with varying sizes and shapes, then
            duplicated and transformed to fill the space into the horizon.
          </li>
          <li>
            Geometry Nodes weren't yet a thing, so this was made using a plugin
            called "Animation Nodes". Here they are used for the self-assembling
            bridge, as well as controlling the fading-in and out of various
            clusters of flying vehicles so that the traffic appears like a
            continuous flow without introducing seams in the infinite loop. This
            loop is only 4 seconds long.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) as usual to keep the numbers
            easy to reason about.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "ancientpath",
    collection: "granting_voice",
    title: "Ancient Path",
    thumb: "/images/nft_thumbs/ancientpath.jpg",
    video: "/nfts/ancientpath.mp4",
    preview: "/nfts/previews/ancientpath.mp4",
    ogimage: "/images/nft_thumbs/ancientpath.jpg",
    light: true,
    layers: [
      {
        name: "Atmosphere",
        video: "/nfts/layers/ancientpath/01_atmosphere.mp4",
        thumb: "/nfts/layers/ancientpath/01_atmosphere.jpg",
      },
      {
        name: "Circle",
        video: "/nfts/layers/ancientpath/02_circle.mp4",
        thumb: "/nfts/layers/ancientpath/02_circle.jpg",
      },
      {
        name: "Daylight",
        video: "/nfts/layers/ancientpath/03_daylight.mp4",
        thumb: "/nfts/layers/ancientpath/03_daylight.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/ancientpath/04_depth.mp4",
        thumb: "/nfts/layers/ancientpath/04_depth.jpg",
      },
      {
        name: "Holo",
        video: "/nfts/layers/ancientpath/05_holo.mp4",
        thumb: "/nfts/layers/ancientpath/05_holo.jpg",
      },
      {
        name: "Intricate Holos",
        video: "/nfts/layers/ancientpath/06_intricate_holos.mp4",
        thumb: "/nfts/layers/ancientpath/06_intricate_holos.jpg",
      },
      {
        name: "Laser Scramble",
        video: "/nfts/layers/ancientpath/07_laser_scramble.mp4",
        thumb: "/nfts/layers/ancientpath/07_laser_scramble.jpg",
      },
      {
        name: "Laser",
        video: "/nfts/layers/ancientpath/08_laser.mp4",
        thumb: "/nfts/layers/ancientpath/08_laser.jpg",
      },
      {
        name: "Nightlight",
        video: "/nfts/layers/ancientpath/09_nightlight.mp4",
        thumb: "/nfts/layers/ancientpath/09_nightlight.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    story: [
      "Were you to ask any of the Blessed Ones whether they were part of a multi-planetary civilization, they wouldn't understand the meaning of your question. They wouldn't know their home to be Artificial Planet #163 (AP163), orbiting Artificial Sun #9 (AS9).",
      "They would however invite you to enjoy the beauty of the grass field and its hypnotic motion. One of millions of identical fields constructed by the Granting Voice, waiting to be inhabited, waving in the wind.",
    ],
    making: (
      <>
        <ul>
          <li>
            The 3D model of the rods at the sides of the road was sculpted in VR
            using Adobe Medium.
          </li>
          <li>
            Geometry Nodes weren't yet a thing, so this was made using a plugin
            called "Animation Nodes".
          </li>
          <li>
            As for most of my loops, the crucial challenge lies in describing
            their movement mathematically, so that it can both look natural but
            also loop seamlessly (this is a 16 seconds video in total). This is
            done mostly by summing and multiplying a number of sinusoids and
            other periodic functions to control the waving of grass in the wind.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            In order to hide the "seam" when new tiles are added at the front,
            the repeating landscape disappears at the horizon as each "slice" is
            positioned along a curve that slowly arches downward in the
            distance, artificially simulating a planet's curvature (but at a
            much smaller scale).
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> While driving through some fields of
          what seemed tall grass, I noticed its motion as it was pushed by gusts
          of wind. It was crested by slow-moving waves, hypnotically dancing in
          the sunset light. It gave me a profound feeling of relaxation and
          appreciation for nature, which motivated me to try capture it in a
          seamless loop.
        </p>
      </>
    ),
  },
  {
    slug: "energytrees",
    collection: "granting_voice",
    title: "Energy Trees",
    thumb: "/images/nft_thumbs/energytrees.jpg",
    video: "/nfts/energytrees.mp4",
    preview: "/nfts/previews/energytrees.mp4",
    ogimage: "/images/nft_thumbs/energytrees.jpg",
    light: true,
    layers: [
      {
        name: "Daylight",
        video: "/nfts/layers/energytrees/01_daylight.mp4",
        thumb: "/nfts/layers/energytrees/01_daylight.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/energytrees/02_depth.mp4",
        thumb: "/nfts/layers/energytrees/02_depth.jpg",
      },
      {
        name: "Energy Stores",
        video: "/nfts/layers/energytrees/03_energy_stores.mp4",
        thumb: "/nfts/layers/energytrees/03_energy_stores.jpg",
      },
      {
        name: "Fireflies",
        video: "/nfts/layers/energytrees/04_fireflies.mp4",
        thumb: "/nfts/layers/energytrees/04_fireflies.jpg",
      },
      {
        name: "Flowers",
        video: "/nfts/layers/energytrees/05_flowers.mp4",
        thumb: "/nfts/layers/energytrees/05_flowers.jpg",
      },
      {
        name: "Fruits",
        video: "/nfts/layers/energytrees/06_fruits.mp4",
        thumb: "/nfts/layers/energytrees/06_fruits.jpg",
      },
      {
        name: "Grass",
        video: "/nfts/layers/energytrees/07_grass.mp4",
        thumb: "/nfts/layers/energytrees/07_grass.jpg",
      },
      {
        name: "Planet",
        video: "/nfts/layers/energytrees/08_planet.mp4",
        thumb: "/nfts/layers/energytrees/08_planet.jpg",
      },
      {
        name: "Stars",
        video: "/nfts/layers/energytrees/09_stars.mp4",
        thumb: "/nfts/layers/energytrees/09_stars.jpg",
      },
      {
        name: "Tech",
        video: "/nfts/layers/energytrees/10_tech.mp4",
        thumb: "/nfts/layers/energytrees/10_tech.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    story: [
      "Myriads of light-speed vessels followed the interstellar routes through this system. A close-by natural reserve was kept intact so passers-by could enjoy gliding through the fields and admire this unique expression of nature during this short break from cryogenic sleep.",
    ],
    making: (
      <>
        <ul>
          <li>
            The 3D models of the trees were sculpted in VR using Adobe Medium.
          </li>
          <li>
            Geometry Nodes weren't yet a thing, so this was animated using a
            plugin called "Animation Nodes".
          </li>
          <li>
            As for most of my loops, the crucial challenge lies in describing
            all movement mathematically, so that it can both look natural but
            also loop seamlessly (this is a 16 seconds video in total). This is
            done mostly by summing and multiplying a number of sinusoids and
            other periodic functions to control the waving of grass in the wind.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            In order to hide the "seam" when new tiles are added at the front,
            the repeating landscape disappears at the horizon as each "slice" is
            positioned along a curve that slowly arches downward in the
            distance, artificially simulating a planet's curvature (but at a
            much smaller scale).
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> Always been a fan of Tim Burton's
          movies. I wanted to play with the idea of alien trees from a distant
          planet inheriting from that style a little bit.
        </p>
      </>
    ),
  },
  {
    slug: "planetarytunnels",
    collection: "granting_voice",
    title: "Planetary Tunnels",
    thumb: "/images/nft_thumbs/planetarytunnels.jpg",
    video: "/nfts/planetarytunnels.mp4",
    preview: "/nfts/previews/planetarytunnels.mp4",
    ogimage: "/images/nft_thumbs/planetarytunnels.jpg",
    light: true,
    layers: [
      {
        name: "Atmo",
        video: "/nfts/layers/planetarytunnels/01_atmo.mp4",
        thumb: "/nfts/layers/planetarytunnels/01_atmo.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/planetarytunnels/02_depth.mp4",
        thumb: "/nfts/layers/planetarytunnels/02_depth.jpg",
      },
      {
        name: "Large Tunnel",
        video: "/nfts/layers/planetarytunnels/03_large_tunnel.mp4",
        thumb: "/nfts/layers/planetarytunnels/03_large_tunnel.jpg",
      },
      {
        name: "Medium Tunnel",
        video: "/nfts/layers/planetarytunnels/04_medium_tunnel.mp4",
        thumb: "/nfts/layers/planetarytunnels/04_medium_tunnel.jpg",
      },
      {
        name: "Particles",
        video: "/nfts/layers/planetarytunnels/05_particles.mp4",
        thumb: "/nfts/layers/planetarytunnels/05_particles.jpg",
      },
      {
        name: "Small Tunnel",
        video: "/nfts/layers/planetarytunnels/06_small_tunnel.mp4",
        thumb: "/nfts/layers/planetarytunnels/06_small_tunnel.jpg",
      },
      {
        name: "Starry Sky",
        video: "/nfts/layers/planetarytunnels/07_starry_sky.mp4",
        thumb: "/nfts/layers/planetarytunnels/07_starry_sky.jpg",
      },
      {
        name: "Sun",
        video: "/nfts/layers/planetarytunnels/08_sun.mp4",
        thumb: "/nfts/layers/planetarytunnels/08_sun.jpg",
      },
      {
        name: "Tunnels",
        video: "/nfts/layers/planetarytunnels/09_tunnels.mp4",
        thumb: "/nfts/layers/planetarytunnels/09_tunnels.jpg",
      },
      {
        name: "Water",
        video: "/nfts/layers/planetarytunnels/10_water.mp4",
        thumb: "/nfts/layers/planetarytunnels/10_water.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    story: [
      "It was no secret among maritime merchants that structures of unfathomable size could be sighted in the distant horizons. These stretched through the skies so far that, on a clear day, they could be seen touching the gods.",
      "It was observed by those knowledgeable about the ways of the Granting Voice, that intense lightings often propagated through the constructions just after the voice was exercised.",
    ],
    making: (
      <>
        <ul>
          <li>
            The 3D models of the strange cliffs in the horizon were sculpted in
            VR using Adobe Medium.
          </li>
          <li>
            Geometry Nodes weren't yet a thing, so this was made using a plugin
            called "Animation Nodes" (the particles, the volumetric fog...).
          </li>
          <li>
            This loop relies on a copy of the looping ocean water that was made
            for the "Interplanetary Pollen" animation.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> If the Granting Voice was to move
          resources repeatedly, quickly and efficiently between planets... Would
          it at some point find it more efficient to move them to the same orbit
          and tether them together by means of enormous, flexible bridges
          extending through space?
        </p>
      </>
    ),
  },
  {
    slug: "interplanetarypollen",
    collection: "granting_voice",
    title: "Interplanetary Pollen",
    thumb: "/images/nft_thumbs/interplanetarypollen.jpg",
    video: "/nfts/interplanetarypollen.mp4",
    preview: "/nfts/previews/interplanetarypollen.mp4",
    ogimage: "/images/nft_thumbs/interplanetarypollen.jpg",
    light: true,
    layers: [
      {
        name: "Air Petals",
        video: "/nfts/layers/interplanetarypollen/01_air_petals.mp4",
        thumb: "/nfts/layers/interplanetarypollen/01_air_petals.jpg",
      },
      {
        name: "Base With Wave",
        video: "/nfts/layers/interplanetarypollen/02_base_with_wave.mp4",
        thumb: "/nfts/layers/interplanetarypollen/02_base_with_wave.jpg",
      },
      {
        name: "Base",
        video: "/nfts/layers/interplanetarypollen/03_base.mp4",
        thumb: "/nfts/layers/interplanetarypollen/03_base.jpg",
      },
      {
        name: "Daytime",
        video: "/nfts/layers/interplanetarypollen/04_daytime.mp4",
        thumb: "/nfts/layers/interplanetarypollen/04_daytime.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/interplanetarypollen/05_depth.mp4",
        thumb: "/nfts/layers/interplanetarypollen/05_depth.jpg",
      },
      {
        name: "Nighttime",
        video: "/nfts/layers/interplanetarypollen/06_nighttime.mp4",
        thumb: "/nfts/layers/interplanetarypollen/06_nighttime.jpg",
      },
      {
        name: "Rave",
        video: "/nfts/layers/interplanetarypollen/07_rave.mp4",
        thumb: "/nfts/layers/interplanetarypollen/07_rave.jpg",
      },
      {
        name: "Rave2",
        video: "/nfts/layers/interplanetarypollen/08_rave2.mp4",
        thumb: "/nfts/layers/interplanetarypollen/08_rave2.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    story: [
      'The granting voice often assembled entire celestial bodies in its quest to organize matter. Orbiting around these gardens there is a moon made entirely of water. A wish had been made for a planet with "uninterrupted" fields of flowers, which the voice took to mean no body of water could be present on the surface.',
      "In the absence of temperature-regulating oceans, incredibly strong winds would blow over the seam between night and day, often carrying petals so high into the sky they'd escape gravity and rain over the garden's reservoir satellites.",
    ],
    making: (
      <>
        <ul>
          <li>
            Geometry Nodes weren't yet a thing, so the tiles of "water" are
            generated using a plugin called "Animation Nodes" (the particles,
            the volumetric fog...).
          </li>
          <li>
            Each tile uses an animated displacement map that was generated using
            water simulation, then repeated and mirrored to hide seams. An
            additional layer of sinusoids was added to try hide the repetitive
            pattern as much as possible, however it's still noticeable if you
            know where and when to look.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> I tried learning to surf in Hawaii once.
          I wasn't good at it, but I really liked the part where you wait,
          floating on the board, for a good wave. Surrounded by water in all
          directions, I noticed the moon in the sky, and reminiscing of the
          island's flowers, I imagined this scene.
        </p>
      </>
    ),
  },
  {
    slug: "harvester",
    collection: "granting_voice",
    title: "Harvester",
    thumb: "/images/nft_thumbs/harvester.jpg",
    video: "/nfts/harvester.mp4",
    preview: "/nfts/previews/harvester.mp4",
    ogimage: "/images/nft_thumbs/harvester.jpg",
    light: true,
    layers: [
      {
        name: "Alien Portrait",
        video: "/nfts/layers/harvester/01_alien_portrait.mp4",
        thumb: "/nfts/layers/harvester/01_alien_portrait.jpg",
      },
      {
        name: "Base",
        video: "/nfts/layers/harvester/02_base.mp4",
        thumb: "/nfts/layers/harvester/02_base.jpg",
      },
      {
        name: "Cyberpunk Street",
        video: "/nfts/layers/harvester/03_cyberpunk_street.mp4",
        thumb: "/nfts/layers/harvester/03_cyberpunk_street.jpg",
      },
      {
        name: "Daytime",
        video: "/nfts/layers/harvester/04_daytime.mp4",
        thumb: "/nfts/layers/harvester/04_daytime.jpg",
      },
      {
        name: "Eyes",
        video: "/nfts/layers/harvester/05_eyes.mp4",
        thumb: "/nfts/layers/harvester/05_eyes.jpg",
      },
      {
        name: "Godzilla Portrait",
        video: "/nfts/layers/harvester/06_godzilla_portrait.mp4",
        thumb: "/nfts/layers/harvester/06_godzilla_portrait.jpg",
      },
      {
        name: "Growth",
        video: "/nfts/layers/harvester/07_growth.mp4",
        thumb: "/nfts/layers/harvester/07_growth.jpg",
      },
      {
        name: "Laser",
        video: "/nfts/layers/harvester/08_laser.mp4",
        thumb: "/nfts/layers/harvester/08_laser.jpg",
      },
      {
        name: "Robot Face",
        video: "/nfts/layers/harvester/09_robot_face.mp4",
        thumb: "/nfts/layers/harvester/09_robot_face.jpg",
      },
      {
        name: "Street",
        video: "/nfts/layers/harvester/10_street.mp4",
        thumb: "/nfts/layers/harvester/10_street.jpg",
      },
      {
        name: "Tech",
        video: "/nfts/layers/harvester/11_tech.mp4",
        thumb: "/nfts/layers/harvester/11_tech.jpg",
      },
      {
        name: "Woman Face",
        video: "/nfts/layers/harvester/12_woman_face.mp4",
        thumb: "/nfts/layers/harvester/12_woman_face.jpg",
      },
      {
        name: "Eyes",
        video: "/nfts/layers/harvester/13_eyes.mp4",
        thumb: "/nfts/layers/harvester/13_eyes.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    story: [
      "There were only two types of civilization in the galaxy: those on the right side and those on the wrong side of the Granting Voice. The former only comprised the Blessed Ones, while the latter extended to any other present and future form of life within the light cone of the Granting Voice's birth.",
      "Harvesters only understood the above distinction when it came to selecting celestial bodies to mine for resources, placing all forms of life but one in the path of destruction.",
    ],
    making: (
      <>
        <ul>
          <li>
            One of the first experiments with Animation Nodes, it repeats a cube
            along various different paths to produce the shape of the harvester.
          </li>
          <li>
            The cliffs on the side, delineating the valley left behind by the
            harvester's laser, are made using a noise function acting as
            displacement + bump map. The resulting terrain is repeated and
            mirrored to hide seams.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            In order to hide the "seam" when new tiles are added at the front,
            the repeating landscape disappears into the fog/darkness in the
            distance.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "portalpeaks",
    collection: "granting_voice",
    title: "Portal Peaks",
    thumb: "/images/nft_thumbs/portalpeaks.jpg",
    video: "/nfts/portalpeaks.mp4",
    preview: "/nfts/previews/portalpeaks.mp4",
    ogimage: "/images/nft_thumbs/portalpeaks.jpg",
    light: true,
    gumroad: "https://synwrks.gumroad.com/l/portalpeaks",
    forSale: false,
    date: "2022",
    year: "2022",
    story: [
      "The Granting Voice's mandate required infrastructure built in all corners of the galaxy. Its functional design was made to survive through eons, while claiming no aesthetic aims on its surroundings. You could stare at an unremarkable landscape for a century, or two, before it suddenly came to life to fulfill its task.",
    ],
    making: (
      <>
        <ul>
          <li>
            The 3D model of the mountain itself was sculpted in VR using Adobe
            Medium, then shaded and textured in Blender.
          </li>
          <li>
            Geometry nodes had just been introduced, so I used those to
            procedurally generate the trees, and have them wave in the wind.
          </li>
          <li>
            As for most of my loops, the crucial challenge lies in describing
            their movement mathematically, so that it can both look natural but
            also loop seamlessly (this is a 16 seconds video in total). This is
            done mostly by summing and multiplying a number of sinusoids and
            other periodic functions to control various parameters of the trees'
            shape. The fog is also animated in a similar way.
          </li>
          <li>
            Python scripts were used to spawn multiple instances of the trees
            forest, each with slightly different parameters, to add variation
            and trick the eye into thinking all trees are different even though
            they are not.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            In order to hide the "seam" when new tiles are added at the front,
            the repeating landscape disappears into the fog/darkness in the
            distance.
          </li>
          <li>
            The circular shimmer spiraling outwards is also animated with
            similar techniques, but only applied to various noise functions
            modulating each other within the shader's nodes tree.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> I snapped a picture of this mountain in
          the Italian Alps once. A plane appeared to fly over it just as if
          going through the middle of an imaginary circle sitting on the rocky
          walls. Made me think of spaceships flying through a mountain-sized
          portal.
        </p>
      </>
    ),
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
    ],
  },
  {
    slug: "timetemple",
    collection: "granting_voice",
    title: "Time Temple",
    thumb: "/images/nft_thumbs/timetemple.jpg",
    video: "/nfts/timetemple.mp4",
    preview: "/nfts/previews/timetemple.mp4",
    ogimage: "/images/nft_thumbs/timetemple.jpg",
    light: true,
    layers: [
      {
        name: "Cables",
        video: "/nfts/layers/timetemple/01_cables.mp4",
        thumb: "/nfts/layers/timetemple/01_cables.jpg",
      },
      {
        name: "Centered Planet",
        video: "/nfts/layers/timetemple/02_centered_planet.mp4",
        thumb: "/nfts/layers/timetemple/02_centered_planet.jpg",
      },
      {
        name: "Cloudy Day",
        video: "/nfts/layers/timetemple/03_cloudy_day.mp4",
        thumb: "/nfts/layers/timetemple/03_cloudy_day.jpg",
      },
      {
        name: "Daylight",
        video: "/nfts/layers/timetemple/04_daylight.mp4",
        thumb: "/nfts/layers/timetemple/04_daylight.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/timetemple/05_depth.mp4",
        thumb: "/nfts/layers/timetemple/05_depth.jpg",
      },
      {
        name: "Grass",
        video: "/nfts/layers/timetemple/06_grass.mp4",
        thumb: "/nfts/layers/timetemple/06_grass.jpg",
      },
      {
        name: "Jewels",
        video: "/nfts/layers/timetemple/07_jewels.mp4",
        thumb: "/nfts/layers/timetemple/07_jewels.jpg",
      },
      {
        name: "Spheres",
        video: "/nfts/layers/timetemple/08_spheres.mp4",
        thumb: "/nfts/layers/timetemple/08_spheres.jpg",
      },
      {
        name: "Stars",
        video: "/nfts/layers/timetemple/09_stars.mp4",
        thumb: "/nfts/layers/timetemple/09_stars.jpg",
      },
      {
        name: "Sundisk",
        video: "/nfts/layers/timetemple/10_sundisk.mp4",
        thumb: "/nfts/layers/timetemple/10_sundisk.jpg",
      },
      {
        name: "Sunlight",
        video: "/nfts/layers/timetemple/11_sunlight.mp4",
        thumb: "/nfts/layers/timetemple/11_sunlight.jpg",
      },
      {
        name: "Timesand",
        video: "/nfts/layers/timetemple/12_timesand.mp4",
        thumb: "/nfts/layers/timetemple/12_timesand.jpg",
      },
      {
        name: "Tron Grid1",
        video: "/nfts/layers/timetemple/13_tron_grid1.mp4",
        thumb: "/nfts/layers/timetemple/13_tron_grid1.jpg",
      },
      {
        name: "Tron Grid2",
        video: "/nfts/layers/timetemple/14_tron_grid2.mp4",
        thumb: "/nfts/layers/timetemple/14_tron_grid2.jpg",
      },
      {
        name: "Tron Grid3",
        video: "/nfts/layers/timetemple/15_tron_grid3.mp4",
        thumb: "/nfts/layers/timetemple/15_tron_grid3.jpg",
      },
      {
        name: "Tron Grid4",
        video: "/nfts/layers/timetemple/16_tron_grid4.mp4",
        thumb: "/nfts/layers/timetemple/16_tron_grid4.jpg",
      },
      {
        name: "Grid 1",
        video: "/nfts/layers/timetemple/17_grid_1.mp4",
        thumb: "/nfts/layers/timetemple/17_grid_1.jpg",
      },
      {
        name: "Grid 2",
        video: "/nfts/layers/timetemple/18_grid_2.mp4",
        thumb: "/nfts/layers/timetemple/18_grid_2.jpg",
      },
      {
        name: "Grid 3",
        video: "/nfts/layers/timetemple/19_grid_3.mp4",
        thumb: "/nfts/layers/timetemple/19_grid_3.jpg",
      },
      {
        name: "Grid 4",
        video: "/nfts/layers/timetemple/20_grid_4.mp4",
        thumb: "/nfts/layers/timetemple/20_grid_4.jpg",
      },
      {
        name: "Spheres",
        video: "/nfts/layers/timetemple/21_spheres.mp4",
        thumb: "/nfts/layers/timetemple/21_spheres.jpg",
      },
    ],
    date: "2023",
    year: "2023",
    story: [
      "The Granting Voice's arrival was often announced by distant cataclysms. Stars would artificially be collapsed into black holes for the production of energy, close-by gas giants would shrink into nothingness. Developing civilizations would often see these developments as a sign of angry gods, and devolve enormous resources to erecting temples for their appeasement.",
      "Nobody had walked through this one in many centuries. Here, statues of now-extinct monks try hold onto the passage of time, which however steadily slips through their fingers, like fine sand into the wind.",
    ],
    making: (
      <>
        <ul>
          <li>
            The 3D model of the statues and architectural elements were sculpted
            in VR using Adobe Medium.
          </li>
          <li>
            Geometry nodes were used to procedurally build out and animate the
            scene. Things like the grass, the shimmering sunlight pattern in the
            distance, the sand slipping through the statues' hands.
          </li>
          <li>
            As for most of my loops, the crucial challenge lies in describing
            their movement mathematically, so that it can both look natural but
            also loop seamlessly (this is a 16 seconds video in total). This is
            done mostly by summing and multiplying a number of sinusoids and
            other periodic functions to control the waving of grass in the wind.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            In order to hide the "seam" when new tiles are added at the front,
            the repeating landscape disappears at the horizon as each "slice" is
            positioned along a curve that slowly arches downward in the
            distance, artificially simulating a planet's curvature (but at a
            much smaller scale).
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> I imagined this walk through an infinite
          roof-less cathedral while visiting the beautiful Carmo Convent in
          Lisbon. I snapped a few pictures while there and used them as
          reference while 3D sculpting.
        </p>
      </>
    ),
  },
  {
    slug: "scavengers",
    collection: "granting_voice",
    title: "Scavengers",
    thumb: "/images/nft_thumbs/scavengers.jpg",
    video: "/nfts/scavengers.mp4",
    preview: "/nfts/previews/scavengers.mp4",
    ogimage: "/images/nft_thumbs/scavengers.jpg",
    light: true,
    layers: [
      {
        name: "Daytime",
        video: "/nfts/layers/scavengers/01_daytime.mp4",
        thumb: "/nfts/layers/scavengers/01_daytime.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/scavengers/02_depth.mp4",
        thumb: "/nfts/layers/scavengers/02_depth.jpg",
      },
      {
        name: "Grass",
        video: "/nfts/layers/scavengers/03_grass.mp4",
        thumb: "/nfts/layers/scavengers/03_grass.jpg",
      },
      {
        name: "Lighting 1",
        video: "/nfts/layers/scavengers/04_lighting_1.mp4",
        thumb: "/nfts/layers/scavengers/04_lighting_1.jpg",
      },
      {
        name: "Lighting 2",
        video: "/nfts/layers/scavengers/05_lighting_2.mp4",
        thumb: "/nfts/layers/scavengers/05_lighting_2.jpg",
      },
      {
        name: "Lighting 3",
        video: "/nfts/layers/scavengers/06_lighting_3.mp4",
        thumb: "/nfts/layers/scavengers/06_lighting_3.jpg",
      },
      {
        name: "Lighting 4",
        video: "/nfts/layers/scavengers/07_lighting_4.mp4",
        thumb: "/nfts/layers/scavengers/07_lighting_4.jpg",
      },
      {
        name: "Maglev",
        video: "/nfts/layers/scavengers/08_maglev.mp4",
        thumb: "/nfts/layers/scavengers/08_maglev.jpg",
      },
      {
        name: "Paddle 1",
        video: "/nfts/layers/scavengers/09_paddle_1.mp4",
        thumb: "/nfts/layers/scavengers/09_paddle_1.jpg",
      },
      {
        name: "Paddle 2",
        video: "/nfts/layers/scavengers/10_paddle_2.mp4",
        thumb: "/nfts/layers/scavengers/10_paddle_2.jpg",
      },
      {
        name: "Paddle 3",
        video: "/nfts/layers/scavengers/11_paddle_3.mp4",
        thumb: "/nfts/layers/scavengers/11_paddle_3.jpg",
      },
      {
        name: "Planet Emission",
        video: "/nfts/layers/scavengers/12_planet_emission.mp4",
        thumb: "/nfts/layers/scavengers/12_planet_emission.jpg",
      },
      {
        name: "Planet Sun",
        video: "/nfts/layers/scavengers/13_planet_sun.mp4",
        thumb: "/nfts/layers/scavengers/13_planet_sun.jpg",
      },
      {
        name: "Stars",
        video: "/nfts/layers/scavengers/14_stars.mp4",
        thumb: "/nfts/layers/scavengers/14_stars.jpg",
      },
      {
        name: "Sun",
        video: "/nfts/layers/scavengers/15_sun.mp4",
        thumb: "/nfts/layers/scavengers/15_sun.jpg",
      },
      {
        name: "Lighting 1",
        video: "/nfts/layers/scavengers/16_lighting_1.mp4",
        thumb: "/nfts/layers/scavengers/16_lighting_1.jpg",
      },
      {
        name: "Lighting 2",
        video: "/nfts/layers/scavengers/17_lighting_2.mp4",
        thumb: "/nfts/layers/scavengers/17_lighting_2.jpg",
      },
      {
        name: "Lighting 3",
        video: "/nfts/layers/scavengers/18_lighting_3.mp4",
        thumb: "/nfts/layers/scavengers/18_lighting_3.jpg",
      },
      {
        name: "Lighting 4",
        video: "/nfts/layers/scavengers/19_lighting_4.mp4",
        thumb: "/nfts/layers/scavengers/19_lighting_4.jpg",
      },
    ],
    date: "2025",
    year: "2025",
    story: [
      "Megastructures like these were common meeting grounds for scavengers of ancient technology. They'd assemble their levitating ships with parts from these sites, however they still needed to be pushed by the wind for forward movement.",
    ],
    making: (
      <>
        <ul>
          <li>
            The 3D models of the ships, the ruins and landscape in the distance
            were sculpted in VR using Adobe Medium.
          </li>
          <li>
            As for most of my loops, the crucial challenge lies in describing
            all movement mathematically, so that it can both look natural but
            also loop seamlessly across time and space (this is a 16 seconds
            video in total). Geometry nodes were used to animate each element of
            this scene: the floating of the levitating ships, the flapping of
            their sails, the lightings within the ruins, the grass. The pavement
            is modulated by various sinusoids to make a repeating pattern of
            mounds, and the grass is angled to grow on those. Various sinusoids
            were also used together to simulate the movement of wind gusts
            through the field.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            In order to hide the "seam" when new tiles are added at the front,
            the repeating landscape disappears at the horizon as each "slice" is
            positioned along a curve that slowly arches downward in the
            distance, artificially simulating a planet's curvature (but at a
            much smaller scale).
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
      </>
    ),
  },
  // ===================== Others =====================
  {
    slug: "spaceclockwork",
    collection: "granting_voice",
    title: "Space Clockwork",
    thumb: "/images/nft_thumbs/spaceclockwork.jpg",
    video: "/nfts/spaceclockwork.mp4",
    preview: "/nfts/previews/spaceclockwork.mp4",
    ogimage: "/images/nft_thumbs/spaceclockwork.jpg",
    light: true,
    layers: [
      {
        name: "Background",
        video: "/nfts/layers/spaceclockwork/01_background.mp4",
        thumb: "/nfts/layers/spaceclockwork/01_background.jpg",
      },
      {
        name: "Base",
        video: "/nfts/layers/spaceclockwork/02_base.mp4",
        thumb: "/nfts/layers/spaceclockwork/02_base.jpg",
      },
      {
        name: "Circles",
        video: "/nfts/layers/spaceclockwork/03_circles.mp4",
        thumb: "/nfts/layers/spaceclockwork/03_circles.jpg",
      },
      {
        name: "Maglev",
        video: "/nfts/layers/spaceclockwork/04_maglev.mp4",
        thumb: "/nfts/layers/spaceclockwork/04_maglev.jpg",
      },
      {
        name: "Sun",
        video: "/nfts/layers/spaceclockwork/05_sun.mp4",
        thumb: "/nfts/layers/spaceclockwork/05_sun.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    making: (
      <>
        <ul>
          <li>
            One of the first experiments using Animation Nodes to produce
            infinitely looping animations in Blender.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> Some sort of orbital mag-lev slowly
          accelerating/decelerating cargo between planets.
        </p>
      </>
    ),
  },
  {
    slug: "laserstunnel",
    collection: "granting_voice",
    title: "Lasers Tunnel",
    thumb: "/images/nft_thumbs/laserstunnel.jpg",
    video: "/nfts/laserstunnel.mp4",
    preview: "/nfts/previews/laserstunnel.mp4",
    ogimage: "/images/nft_thumbs/laserstunnel.jpg",
    light: true,
    layers: [
      {
        name: "Circles",
        video: "/nfts/layers/laserstunnel/01_circles.mp4",
        thumb: "/nfts/layers/laserstunnel/01_circles.jpg",
      },
      {
        name: "Circuits Outline",
        video: "/nfts/layers/laserstunnel/02_circuits_outline.mp4",
        thumb: "/nfts/layers/laserstunnel/02_circuits_outline.jpg",
      },
      {
        name: "Circuits",
        video: "/nfts/layers/laserstunnel/03_circuits.mp4",
        thumb: "/nfts/layers/laserstunnel/03_circuits.jpg",
      },
      {
        name: "Electric Lasers",
        video: "/nfts/layers/laserstunnel/04_electric_lasers.mp4",
        thumb: "/nfts/layers/laserstunnel/04_electric_lasers.jpg",
      },
      {
        name: "Flowers",
        video: "/nfts/layers/laserstunnel/05_flowers.mp4",
        thumb: "/nfts/layers/laserstunnel/05_flowers.jpg",
      },
      {
        name: "Glass Emission",
        video: "/nfts/layers/laserstunnel/06_glass_emission.mp4",
        thumb: "/nfts/layers/laserstunnel/06_glass_emission.jpg",
      },
      {
        name: "Godzilla Mouth",
        video: "/nfts/layers/laserstunnel/07_godzilla_mouth.mp4",
        thumb: "/nfts/layers/laserstunnel/07_godzilla_mouth.jpg",
      },
      {
        name: "Lasers",
        video: "/nfts/layers/laserstunnel/08_lasers.mp4",
        thumb: "/nfts/layers/laserstunnel/08_lasers.jpg",
      },
      {
        name: "Plasma Lasers",
        video: "/nfts/layers/laserstunnel/09_plasma_lasers.mp4",
        thumb: "/nfts/layers/laserstunnel/09_plasma_lasers.jpg",
      },
      {
        name: "Pointlight",
        video: "/nfts/layers/laserstunnel/10_pointlight.mp4",
        thumb: "/nfts/layers/laserstunnel/10_pointlight.jpg",
      },
      {
        name: "Sun",
        video: "/nfts/layers/laserstunnel/11_sun.mp4",
        thumb: "/nfts/layers/laserstunnel/11_sun.jpg",
      },
      {
        name: "Water",
        video: "/nfts/layers/laserstunnel/12_water.mp4",
        thumb: "/nfts/layers/laserstunnel/12_water.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    making: (
      <>
        <ul>
          <li>
            One of the first experiments using Animation Nodes to produce
            infinitely looping animations in Blender.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "theancestors",
    collection: "granting_voice",
    title: "The Ancestors",
    thumb: "/images/nft_thumbs/theancestors.jpg",
    video: "/nfts/theancestors.mp4",
    preview: "/nfts/previews/theancestors.mp4",
    ogimage: "/images/nft_thumbs/theancestors.jpg",
    light: true,
    layers: [
      {
        name: "Depth",
        video: "/nfts/layers/theancestors/01_depth.mp4",
        thumb: "/nfts/layers/theancestors/01_depth.jpg",
      },
      {
        name: "Environment",
        video: "/nfts/layers/theancestors/02_environment.mp4",
        thumb: "/nfts/layers/theancestors/02_environment.jpg",
      },
      {
        name: "Headlights",
        video: "/nfts/layers/theancestors/03_headlights.mp4",
        thumb: "/nfts/layers/theancestors/03_headlights.jpg",
      },
      {
        name: "Moonsrocks",
        video: "/nfts/layers/theancestors/04_moonsrocks.mp4",
        thumb: "/nfts/layers/theancestors/04_moonsrocks.jpg",
      },
      {
        name: "Veinlights",
        video: "/nfts/layers/theancestors/05_veinlights.mp4",
        thumb: "/nfts/layers/theancestors/05_veinlights.jpg",
      },
    ],
    date: "2021",
    year: "2021",
    making: (
      <>
        <ul>
          <li>
            The 3D model of the statues was sculpted in VR using Adobe Medium.
          </li>
          <li>
            Geometry Nodes weren't yet a thing, so this was animated using a
            plugin called "Animation Nodes".
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The environment is comprised of multiple identical
            copies of the same model that are moved towards it.
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "rasrailway",
    collection: "granting_voice",
    title: "Ra's Railway",
    thumb: "/images/nft_thumbs/rasrailway.jpg",
    video: "/nfts/rasrailway.mp4",
    preview: "/nfts/previews/rasrailway.mp4",
    ogimage: "/images/nft_thumbs/rasrailway.jpg",
    light: true,
    layers: [
      {
        name: "Arch Holos 1",
        video: "/nfts/layers/rasrailway/01_arch_holos_1.mp4",
        thumb: "/nfts/layers/rasrailway/01_arch_holos_1.jpg",
      },
      {
        name: "Arch Holos 2",
        video: "/nfts/layers/rasrailway/02_arch_holos_2.mp4",
        thumb: "/nfts/layers/rasrailway/02_arch_holos_2.jpg",
      },
      {
        name: "Arch Holos 3",
        video: "/nfts/layers/rasrailway/03_arch_holos_3.mp4",
        thumb: "/nfts/layers/rasrailway/03_arch_holos_3.jpg",
      },
      {
        name: "Arch Holos 4",
        video: "/nfts/layers/rasrailway/04_arch_holos_4.mp4",
        thumb: "/nfts/layers/rasrailway/04_arch_holos_4.jpg",
      },
      {
        name: "City Lights",
        video: "/nfts/layers/rasrailway/05_city_lights.mp4",
        thumb: "/nfts/layers/rasrailway/05_city_lights.jpg",
      },
      {
        name: "Coil Lighting",
        video: "/nfts/layers/rasrailway/06_coil_lighting.mp4",
        thumb: "/nfts/layers/rasrailway/06_coil_lighting.jpg",
      },
      {
        name: "Daylight",
        video: "/nfts/layers/rasrailway/07_daylight.mp4",
        thumb: "/nfts/layers/rasrailway/07_daylight.jpg",
      },
      {
        name: "Eclipse",
        video: "/nfts/layers/rasrailway/08_eclipse.mp4",
        thumb: "/nfts/layers/rasrailway/08_eclipse.jpg",
      },
      {
        name: "Holo 1",
        video: "/nfts/layers/rasrailway/09_holo_1.mp4",
        thumb: "/nfts/layers/rasrailway/09_holo_1.jpg",
      },
      {
        name: "Holo 2",
        video: "/nfts/layers/rasrailway/10_holo_2.mp4",
        thumb: "/nfts/layers/rasrailway/10_holo_2.jpg",
      },
      {
        name: "Holo 3",
        video: "/nfts/layers/rasrailway/11_holo_3.mp4",
        thumb: "/nfts/layers/rasrailway/11_holo_3.jpg",
      },
      {
        name: "Holo 4",
        video: "/nfts/layers/rasrailway/12_holo_4.mp4",
        thumb: "/nfts/layers/rasrailway/12_holo_4.jpg",
      },
      {
        name: "Holo Projectors",
        video: "/nfts/layers/rasrailway/13_holo_projectors.mp4",
        thumb: "/nfts/layers/rasrailway/13_holo_projectors.jpg",
      },
      {
        name: "Pyramid Lighting 1",
        video: "/nfts/layers/rasrailway/14_pyramid_lighting_1.mp4",
        thumb: "/nfts/layers/rasrailway/14_pyramid_lighting_1.jpg",
      },
      {
        name: "Pyramid Lighting 2",
        video: "/nfts/layers/rasrailway/15_pyramid_lighting_2.mp4",
        thumb: "/nfts/layers/rasrailway/15_pyramid_lighting_2.jpg",
      },
      {
        name: "Pyramid Lighting 3",
        video: "/nfts/layers/rasrailway/16_pyramid_lighting_3.mp4",
        thumb: "/nfts/layers/rasrailway/16_pyramid_lighting_3.jpg",
      },
      {
        name: "Pyramid Lighting 4",
        video: "/nfts/layers/rasrailway/17_pyramid_lighting_4.mp4",
        thumb: "/nfts/layers/rasrailway/17_pyramid_lighting_4.jpg",
      },
      {
        name: "Pyramid Lightings",
        video: "/nfts/layers/rasrailway/18_pyramid_lightings.mp4",
        thumb: "/nfts/layers/rasrailway/18_pyramid_lightings.jpg",
      },
      {
        name: "Pyramid Main Floor 1",
        video: "/nfts/layers/rasrailway/19_pyramid_main_floor_1.mp4",
        thumb: "/nfts/layers/rasrailway/19_pyramid_main_floor_1.jpg",
      },
      {
        name: "Pyramid Main Floor 2",
        video: "/nfts/layers/rasrailway/20_pyramid_main_floor_2.mp4",
        thumb: "/nfts/layers/rasrailway/20_pyramid_main_floor_2.jpg",
      },
      {
        name: "Pyramid Main Floor 3",
        video: "/nfts/layers/rasrailway/21_pyramid_main_floor_3.mp4",
        thumb: "/nfts/layers/rasrailway/21_pyramid_main_floor_3.jpg",
      },
      {
        name: "Pyramid Main Floor 4",
        video: "/nfts/layers/rasrailway/22_pyramid_main_floor_4.mp4",
        thumb: "/nfts/layers/rasrailway/22_pyramid_main_floor_4.jpg",
      },
      {
        name: "Ra Statue",
        video: "/nfts/layers/rasrailway/23_ra_statue.mp4",
        thumb: "/nfts/layers/rasrailway/23_ra_statue.jpg",
      },
      {
        name: "Square Holos 1",
        video: "/nfts/layers/rasrailway/24_square_holos_1.mp4",
        thumb: "/nfts/layers/rasrailway/24_square_holos_1.jpg",
      },
      {
        name: "Square Holos 2",
        video: "/nfts/layers/rasrailway/25_square_holos_2.mp4",
        thumb: "/nfts/layers/rasrailway/25_square_holos_2.jpg",
      },
      {
        name: "Square Holos 3",
        video: "/nfts/layers/rasrailway/26_square_holos_3.mp4",
        thumb: "/nfts/layers/rasrailway/26_square_holos_3.jpg",
      },
      {
        name: "Square Holos 4",
        video: "/nfts/layers/rasrailway/27_square_holos_4.mp4",
        thumb: "/nfts/layers/rasrailway/27_square_holos_4.jpg",
      },
      {
        name: "Stargate Holos 1",
        video: "/nfts/layers/rasrailway/28_stargate_holos_1.mp4",
        thumb: "/nfts/layers/rasrailway/28_stargate_holos_1.jpg",
      },
      {
        name: "Stargate Holos 2",
        video: "/nfts/layers/rasrailway/29_stargate_holos_2.mp4",
        thumb: "/nfts/layers/rasrailway/29_stargate_holos_2.jpg",
      },
      {
        name: "Stargate Holos 3",
        video: "/nfts/layers/rasrailway/30_stargate_holos_3.mp4",
        thumb: "/nfts/layers/rasrailway/30_stargate_holos_3.jpg",
      },
      {
        name: "Stargate Holos 4",
        video: "/nfts/layers/rasrailway/31_stargate_holos_4.mp4",
        thumb: "/nfts/layers/rasrailway/31_stargate_holos_4.jpg",
      },
      {
        name: "Stars",
        video: "/nfts/layers/rasrailway/32_stars.mp4",
        thumb: "/nfts/layers/rasrailway/32_stars.jpg",
      },
      {
        name: "Eclipse",
        video: "/nfts/layers/rasrailway/37_eclipse.mp4",
        thumb: "/nfts/layers/rasrailway/37_eclipse.jpg",
      },
    ],
    date: "2023",
    year: "2023",
    making: (
      <>
        <ul>
          <li>
            The 3D models of the statues on the sides were sculpted in VR using
            Adobe Medium. These are an interpretation of the depictions of Ra
            found in ancient Egyptian culture.
          </li>
          <li>
            Geometry nodes were used to animate each element of this scene: the
            electric flows on top of each pyramid, the pyramids' moving parts
            and anything else really that's moving in the scene.
          </li>
          <li>
            The camera is fixed at origin (0,0,0) to keep the numbers easy to
            reason about. The landscape is comprised of multiple identical
            "slices" that are moved towards it.
          </li>
          <li>
            In order to hide the "seam" when new tiles are added at the front,
            the repeating landscape disappears at the horizon as each "slice" is
            positioned along a curve that slowly arches downward in the
            distance, artificially simulating a planet's curvature (but at a
            much smaller scale).
          </li>
          <li>
            A 180 degrees / stereo 3D version of this loop was also rendered for
            VR.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> I visited Egypt once. I was impressed by
          how alien their culture and architecture felt. I wondered what this
          civilization could have looked like if their values were allowed to
          survive and develop through technological and scientific discovery. I
          imagined their cities would be built as enormous, claustrophobic
          pyramids, their lives architected around supporting technology to
          "upload" the souls of their dead to data-centers in space, via
          powerful energy beams.
        </p>
      </>
    ),
  },
  {
    slug: "filaments",
    title: "Filaments",
    thumb: "/images/nft_thumbs/filaments.jpg",
    video: "/nfts/filaments.mp4",
    preview: "/nfts/previews/filaments.mp4",
    ogimage: "/images/nft_thumbs/filaments.jpg",
    gumroad: "https://synwrks.gumroad.com/l/dnaflow",
    forSale: false,
    light: true,
    date: "2026",
    year: "2026",
    making: (
      <>
        <ul>
          <li>
            Entirely made in Blender, combining a handful of geometry nodes
            modifiers with slightly different parameters. For example, the
            "sky", the "floor", the "filaments" and the little worms swimming
            through are all made using the same nodes trees.
          </li>
          <li>
            The filaments in the center are made to react to the proximity of
            the large spheres as if attracted to them right before chaining up,
            to add an organic element to the movement.
          </li>
        </ul>
        <p className="loop-making__inspiration">
          <strong>Inspiration.</strong> This is a first attempt at producing
          more abstract visuals that could be more malleable in the way they are
          manipulated. In particular, I wanted some material I could use to demo
          some new{" "}
          <a
            href="https://www.vizloom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vizloom
          </a>{" "}
          features through the use of time-warping, and finally visualize a Drum
          &amp; Bass beat. This kind of visual lends itself nicely to still look
          believable when pushed forward by a syncopated rhythm, as these look
          like particles floating in a medium that causes them to flow through
          at an irregular pace.
        </p>
        <p>
          While the animation appears to depict microscopic organic elements, I
          used materials like glass, gold and silver because these shapes were
          actually inspired by the elements of Drum &amp; Bass music. For
          example the large spheres represent the kick, the floor represents the
          bass, and the various metallic filaments and little gems represent the
          constant flow of hi-hats and other percussions.
        </p>
      </>
    ),
    layers: [
      {
        name: "Blue Squiggles",
        video: "/nfts/layers/filaments/01_blue_squiggles.mp4",
        thumb: "/nfts/layers/filaments/01_blue_squiggles.jpg",
      },
      {
        name: "Depth",
        video: "/nfts/layers/filaments/02_depth.mp4",
        thumb: "/nfts/layers/filaments/02_depth.jpg",
      },
      {
        name: "Filament 1",
        video: "/nfts/layers/filaments/03_filament_1.mp4",
        thumb: "/nfts/layers/filaments/03_filament_1.jpg",
      },
      {
        name: "Filament 2",
        video: "/nfts/layers/filaments/04_filament_2.mp4",
        thumb: "/nfts/layers/filaments/04_filament_2.jpg",
      },
      {
        name: "Filament 3",
        video: "/nfts/layers/filaments/05_filament_3.mp4",
        thumb: "/nfts/layers/filaments/05_filament_3.jpg",
      },
      {
        name: "Filament 4",
        video: "/nfts/layers/filaments/06_filament_4.mp4",
        thumb: "/nfts/layers/filaments/06_filament_4.jpg",
      },
      {
        name: "Floor",
        video: "/nfts/layers/filaments/07_floor.mp4",
        thumb: "/nfts/layers/filaments/07_floor.jpg",
      },
      {
        name: "Gems 1",
        video: "/nfts/layers/filaments/08_gems_1.mp4",
        thumb: "/nfts/layers/filaments/08_gems_1.jpg",
      },
      {
        name: "Gems 2",
        video: "/nfts/layers/filaments/09_gems_2.mp4",
        thumb: "/nfts/layers/filaments/09_gems_2.jpg",
      },
      {
        name: "Gems 3",
        video: "/nfts/layers/filaments/10_gems_3.mp4",
        thumb: "/nfts/layers/filaments/10_gems_3.jpg",
      },
      {
        name: "Gems 4",
        video: "/nfts/layers/filaments/11_gems_4.mp4",
        thumb: "/nfts/layers/filaments/11_gems_4.jpg",
      },
      {
        name: "Green Squiggles",
        video: "/nfts/layers/filaments/12_green_squiggles.mp4",
        thumb: "/nfts/layers/filaments/12_green_squiggles.jpg",
      },
      {
        name: "Pink Squiggles",
        video: "/nfts/layers/filaments/13_pink_squiggles.mp4",
        thumb: "/nfts/layers/filaments/13_pink_squiggles.jpg",
      },
      {
        name: "Red Squiggles",
        video: "/nfts/layers/filaments/14_red_squiggles.mp4",
        thumb: "/nfts/layers/filaments/14_red_squiggles.jpg",
      },
      {
        name: "Sky",
        video: "/nfts/layers/filaments/15_sky.mp4",
        thumb: "/nfts/layers/filaments/15_sky.jpg",
      },
      {
        name: "Sunlight",
        video: "/nfts/layers/filaments/16_sunlight.mp4",
        thumb: "/nfts/layers/filaments/16_sunlight.jpg",
      },
      {
        name: "Tripping Balls",
        video: "/nfts/layers/filaments/17_tripping_balls.mp4",
        thumb: "/nfts/layers/filaments/17_tripping_balls.jpg",
      },
    ],
  },
]

// --- Visibility flags (both default ON when the field is omitted) -----------
// Whether the loop is shown anywhere on the site.
export const isPublished = loop => loop.published !== false
// Whether to show Buy links: needs a gumroad url and `forSale` not turned off.
export const isForSale = loop => !!loop.gumroad && loop.forSale !== false

// The published subset — use this for every listing (gallery, mosaics, routes).
export const publishedLoops = vjLoops.filter(isPublished)

// Canonical route for a loop's own page.
export const loopHref = loop => `/art/${loop.slug}/`

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
