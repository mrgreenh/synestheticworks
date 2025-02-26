import configurations from "./flowConfigs.js"

class ReadingTracker {
  constructor(configurations, patternChangeEmitter) {
    this.selectedConfName = undefined
    this.callbacks = []
    this.onPageChange("triangles")
  }

  registerPageChange(callback) {
    if (this.callbacks.indexOf(callback) == -1) {
      this.callbacks.push(callback)
    }
  }

  onPageChange(page) {
    console.log("flowing to page " + page)

    const pageToConfig = {
      "/": "colors",
      "/synesthesia1/": "synesthesia1",
      "/abluedwarftale/": "trianglesCrystals",
      "/firstflight/": "firstflight",
      "/thebookoftea/": "bookoftea",
      "/blog/": "blog",
      "/about/": "circle",
      "/blog/2120_imagination_machine": "smoke",
      "/blog/the_imagination_machine_today": "green_smoke",
      "/blog/about_the_method": "red_smoke",
      "/links/": "red_smoke",
      "/nft/planetarybridges/": "nft",
      "/nft/terraforming/": "nft",
      "/nft/harvester/": "nft",
      "/nft/portalpeaks/": "nft",
      "/bookings/": "red_smoke",
      "/synesthetic_mixes/introspection/": "red",
      "/synesthetic_mixes/just_weird/": "green",
      "/synesthetic_mixes/exploration/": "blue",
    }

    const name = pageToConfig[page] ?? "triangles"

    if (configurations[name]) {
      this.forceField = configurations[name].forces
      this.visualSettings = configurations[name].visualConfig
      this.selectedConfName = name
      this.speedOffset = configurations[name].speedOffset ?? 0.5
    }

    // This is read by other components that need to know the page
    this.callbacks.forEach(callback => callback(page))
  }
}

export default ReadingTracker
