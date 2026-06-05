// Transforms a flow configuration's colors (designed for the light/white
// theme) into neon equivalents that pop on the dark background.
//
// Colored entries keep their hue but are pushed to full saturation and high
// lightness. Grey (desaturated) entries have no hue to preserve, so they are
// tinted with a rotating set of neon accent hues.

const ACCENT_HUES = [300, 180, 90, 210] // magenta, cyan, green, azure

function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h
  switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0)
      break
    case g:
      h = (b - r) / d + 2
      break
    default:
      h = (r - g) / d + 4
  }
  return { h: (h * 60) % 360, s, l }
}

function hslToRgb(h, s, l) {
  h /= 360
  if (s === 0) {
    const v = Math.round(l * 255)
    return [v, v, v]
  }
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ]
}

function neonizeColor(color, accentIndex) {
  if (!color) return color
  const [r, g, b, a] = color
  // Some configs contain out-of-range channel values (e.g. 2255); clamp.
  let { h, s, l } = rgbToHsl(
    Math.min(255, r),
    Math.min(255, g),
    Math.min(255, b)
  )
  if (s < 0.2) {
    // Grey: tint with a neon accent, lightness flipped to read on dark
    h = ACCENT_HUES[accentIndex % ACCENT_HUES.length]
    s = 0.9
    l = Math.max(0.6, 1 - l)
  } else {
    // Colored: keep hue, crank to neon
    s = 1
    l = Math.max(0.65, Math.min(0.75, 1 - l))
  }
  const [nr, ng, nb] = hslToRgb(h, s, l)
  // Alphas were tuned for a white page; glow needs more presence on dark
  return [nr, ng, nb, Math.min(255, Math.round(a * 2.2))]
}

function neonizeFlowConfig(config) {
  const visualConfig = { ...config.visualConfig }
  // Only touch keys the config actually defines — TilesFlow falls back to
  // defaults via Object.assign, and an explicit undefined would override them.
  ;["stroke", "pointsColor", "baseColor"].forEach((key, i) => {
    if (visualConfig[key]) visualConfig[key] = neonizeColor(visualConfig[key], i)
  })
  // A faint glowing wireframe sells the neon look — give strokeless configs
  // a subtle magenta lattice.
  if (!visualConfig.stroke || visualConfig.stroke[3] === 0) {
    visualConfig.stroke = [255, 80, 255, 22]
  }
  return {
    ...config,
    forces: config.forces.map((force, i) =>
      force.color ? { ...force, color: neonizeColor(force.color, i) } : force
    ),
    visualConfig,
  }
}

export default neonizeFlowConfig
