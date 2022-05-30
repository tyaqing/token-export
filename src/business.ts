// 首页界面
export enum ViewPanel {
  COLORS = 'COLORS',
  TYPOGRAPHY = 'TYPOGRAPHY',
  BORDER_RADIUS = 'BORDER_RADIUS',
  SHADOW = 'SHADOW',
  EXPORT = 'EXPORT',
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
