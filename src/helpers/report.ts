export function imgReport(url: string) {
  if (!url) return
  new Image().src = url
}
