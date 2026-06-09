"use client"

import React from "react"
import BlogHeader from "./blogHeader"
import FramedPlayer from "./FramedPlayer"
import LayerGrid from "./LayerGrid"
import NFTsMosaic from "./mosaics/NFTsMosaic"
import { layerCount, hasLayers, isForSale } from "../data/vjLoops"

// Renders a single Original VJ Loop page from its config entry. The loop's
// stats (layers, date) are mirrored from the same source the gallery cards
// read, so the catalog and the page can never drift apart.
const NFTLayout = ({ loop }) => {
  return (
    <>
      <BlogHeader title={loop.title} date={loop.date} ogimage={loop.ogimage} />

      <div className="nft-layout">
        <FramedPlayer
          controls={true}
          className="react-player"
          url={loop.video}
          width="100%"
          height="100%"
          loop={true}
          playing={true}
          muted={true}
          playsinline={true}
        >
          <div className="loop-meta-row">
            <dl className="loop-meta">
              <div className="loop-meta__item">
                <dt>Layers</dt>
                <dd>{String(layerCount(loop)).padStart(2, "0")}</dd>
              </div>
              <div className="loop-meta__item">
                <dt>Made</dt>
                <dd>{loop.date}</dd>
              </div>
            </dl>

            {isForSale(loop) && (
              <a
                className="loop-buy"
                href={loop.gumroad}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Gumroad
              </a>
            )}
          </div>

          {loop.story && (
            <div className="loop-story">
              {loop.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}

          {loop.making && (
            <div className="loop-making">
              <h4 className="loop-making__title">How it was made</h4>
              {loop.making}
            </div>
          )}
        </FramedPlayer>
      </div>

      {hasLayers(loop) && (
        <section className="layers-section">
          <h3 className="layers-section__title">The Layers</h3>
          <p className="layers-section__note">
            This art can be utilized in any video-mixing software, but try it
            out in Vizloom for best results.
          </p>
          <LayerGrid layers={loop.layers} />
        </section>
      )}

      <div className="footer-text">
        <hr />
        See also
      </div>
      <NFTsMosaic />
    </>
  )
}

export default NFTLayout
