// 首页界面
export enum ViewPanel {
  COLORS = 'COLORS',
  TYPOGRAPHY = 'TYPOGRAPHY',
  // BORDER = 'BORDER',
  BORDER_RADIUS = 'BORDER_RADIUS',
  SHADOW = 'SHADOW',
  SPACING = 'SPACING',
  EXPORT = 'EXPORT',
}

export const ViewPanelNameMapping = {
  [ViewPanel.EXPORT]: '导出',
  [ViewPanel.SHADOW]: '阴影',
  [ViewPanel.BORDER_RADIUS]: '圆角',
  [ViewPanel.TYPOGRAPHY]: '字体/字号',
  [ViewPanel.COLORS]: '颜色',
  [ViewPanel.SPACING]: '边距',
}

export type KV = {
  name: string
  value: string
}

export interface ITheme {
  colors: KV[]
  borderRadius: KV[]
  boxShadow: KV[]
  fontFamily: KV[]
  fontSize: KV[]
  gradientColors: KV[]
}
