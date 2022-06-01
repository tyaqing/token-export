import { makeHex, makeRgb } from '@/helpers/helpers'
import { KV } from '@/business'

export function getPaintStyles() {
  // eslint-disable-next-line
  const colorStyles = figma.getLocalPaintStyles();
  const colors: KV[] = [] // array of hex values and their names
  const gradientColors: string[] = []

  colorStyles.forEach((style) => {
    // Extra check for empty paint styles
    const paint = style.paints[0] || null
    if (paint) {
      if ('color' in style.paints[0]) {
        const { color, opacity } = style.paints[0]
        const { name } = style
        const { r, g, b } = makeRgb(color)
        let opacityPercent = 100
        if (opacity) opacityPercent = +opacity.toFixed(2) * 100
        // const value = makeHex(r, g, b) + opacity.toFixed(2)*100;
        const value = opacityPercent === 100 ? `rgba(${r},${g},${b})` : `rgba(${r},${g},${b},${opacityPercent}%)`
        const result = { name, value }
        colors.push(result)
      }

      if ('gradientStops' in style.paints[0]) {
        const { gradientStops } = style.paints[0]
        /* Add gradients as a suggestion */
        gradientStops.length &&
          gradientStops.forEach((stop) => {
            const { r, g, b } = makeRgb(stop.color)
            const value = makeHex(r, g, b)
            gradientColors.push(value)
          })
      }
    }
  })

  return { colors, gradientColors }
}
