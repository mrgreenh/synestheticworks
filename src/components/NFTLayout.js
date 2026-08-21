"use client"

import React from "react"
import Link from "next/link"
import BlogHeader from "./blogHeader"
import FramedPlayer from "./FramedPlayer"
import LayerGrid from "./LayerGrid"
import NFTsMosaic from "./mosaics/NFTsMosaic"
import { layerCount, hasLayers, hasTemplates, isForSale } from "../data/vjLoops"

// Badge shown over each Vizloom Template thumbnail, where the play button sits.
const VIZLOOM_LOGO = "/images/vizloom_logo.png"

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
              <Link
                className="loop-story__more"
                href="/blog/blessed_ones_backstory"
              >
                Read the Background Story →
              </Link>
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

      {hasTemplates(loop) && (
        <section className="layers-section">
          <h3 className="layers-section__title">
            <a
              className="layers-section__title-link"
              href="https://vizloom.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vizloom
            </a>{" "}
            Templates
          </h3>
          <LayerGrid
            layers={loop.templates}
            badge={VIZLOOM_LOGO}
            numbered={false}
          />
        </section>
      )}

      {hasLayers(loop) && (
        <section className="layers-section">
          <h3 className="layers-section__title">Layers</h3>
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
