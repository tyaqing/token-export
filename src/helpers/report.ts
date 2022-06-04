let isWindowLoaded = false
const imgReportCache: string[] = []

// 为了避免上报卡住微信的绿条加载，会导致jsapi无法调用
window.addEventListener('load', () => {
  setTimeout(() => {
    isWindowLoaded = true
    imgReportCache.forEach((url) => {
      new Image().src = url
    })
  }, 2000)
})

export function imgReport(url: string) {
  if (!url) {
    return
  }
  if (isWindowLoaded) {
    // const Image = window.Image;
    new Image().src = url
  } else {
    imgReportCache.push(url)
  }
}
