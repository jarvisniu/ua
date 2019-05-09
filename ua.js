// ua - Detect web environment by user agent
// https://github.com/jarvisniu/ua

let ua = window.navigator.userAgent || ''

// 系统 OS: .isWindows, isMacOS, isLinux
let isWindows = ua.includes('Windows')
let isMacOS = ua.includes('Macintosh') || ua.includes('Mac_PowerPC')
let isLinux = ua.includes('Linux') || ua.includes('X11')
// 内核 Kernel: .isChrome, .isFirefox, .isSafari, isEdge, .isIE
let isChrome = ua.includes('Chrome/')
let isFirefox = ua.includes('Firefox/')
let isSafari = ua.includes('Safari/')
let isEdge = ua.includes('Edge/')
let isIE = ua.includes('MSIE/')
// 平台 Platform: .isElectron
// TODO .isDesktop, .isMobile
let isElectron = ua.includes('Electron/')
// 应用 App: .isWechat, .isAlipay
let isWechat = ua.includes('MicroMessenger/')
let isAlipay = ua.includes('AlipayClient/')

export default {
  value: ua,
  // os
  isWindows,
  isMacOS,
  isLinux,
  // kernel
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
  isIE,
  // platform
  isElectron,
  // app
  isWechat,
  isAlipay,
}
