import configurations from "./flowConfigs.js"
import neonizeFlowConfig from "./neonizeFlowConfig.js"

class ReadingTracker {
  constructor(configurations, patternChangeEmitter) {
    this.selectedConfName = undefined
    this.callbacks = []
    this.currentPage = "/"
    // Re-pick colors when the theme toggles (dispatched by ThemeToggle).
    // The theme suffix on selectedConfName makes renderFlow cross-fade.
    if (typeof window !== "undefined") {
      window.addEventListener("themechange", () =>
        this.onPageChange(this.currentPage)
      )
    }
    this.onPageChange("triangles")
  }

  registerPageChange(callback) {
    if (this.callbacks.indexOf(callback) == -1) {
      this.callbacks.push(callback)
    }
  }

  isDarkTheme() {
    if (typeof document === "undefined") return true // dark is the default
    return document.documentElement.getAttribute("data-theme") !== "light"
  }

  onPageChange(page) {
    console.log("flowing to page " + page)
    this.currentPage = page

    const pageToConfig = {
      "/": "colors",
      "/synesthesia1": "synesthesia1",
      "/abluedwarftale": "trianglesCrystals",
      "/firstflight": "firstflight",
      "/thebookoftea": "bookoftea",
      "/blog": "blog",
      "/about": "circle",
      "/blog/2120_imagination_machine": "smoke",
      "/blog/the_imagination_machine_today": "green_smoke",
      "/blog/about_the_method": "red_smoke",
      "/links": "red_smoke",
      "/vj-loops": "nft",
      "/bookings": "red_smoke",
      "/synesthetic_mixes/introspection": "red",
      "/synesthetic_mixes/just_weird": "green",
      "/synesthetic_mixes/exploration": "blue",
    }

    // Normalize: strip trailing slash for consistent lookup (except root "/")
    const normalizedPage = page !== "/" ? page.replace(/\/+$/, "") : page
    // Every individual loop page (/art/<slug>) shares the gallery's "nft" flow.
    const name = normalizedPage.startsWith("/art/")
      ? "nft"
      : pageToConfig[normalizedPage] ?? "triangles"

    if (configurations[name]) {
      const dark = this.isDarkTheme()
      const config = dark
        ? neonizeFlowConfig(configurations[name])
        : configurations[name]
      this.forceField = config.forces
      this.visualSettings = config.visualConfig
      this.selectedConfName = name + (dark ? "@dark" : "@light")
      this.speedOffset = config.speedOffset ?? 0.5
    }

    // This is read by other components that need to know the page
    this.callbacks.forEach(callback => callback(page))
  }
}

export default ReadingTracker
