// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getPaintStyles from './figma/paintStyles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getTextStyles from './figma/textStyles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getEffectStyles from './figma/effectStyles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getNodeStyles from './figma/nodeStyles'

// theme
const theme = {
  colors: [],
  gradientColors: [],
  fontSize: [],
  fontFamily: [],
  boxShadow: [],
  borderRadius: [],
  baseFontSize: false,
  groupColor: false,
}

// Gather all different properties
const { colors, gradientColors } = getPaintStyles()
const { finalSizes, finalFamilies } = getTextStyles()
const { shadows } = getEffectStyles()
const { finalRadii } = getNodeStyles()

// Create theme
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.colors.push(...colors)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.gradientColors.push(...gradientColors)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.fontSize.push(...finalSizes)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.fontFamily.push(...finalFamilies)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.boxShadow.push(...shadows)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.borderRadius.push(...finalRadii)

// options
const options = {
  width: 600,
  height: 600,
}

// showUi
figma.showUI(__html__, options)
// pass theme
figma.ui.postMessage(theme)

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = []
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle()
      rect.x = i * 150
      rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }]
      figma.currentPage.appendChild(rect)
      nodes.push(rect)
    }
    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin()
}

export {}
