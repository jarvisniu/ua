// ua - Detect web environment by user agent
// https://github.com/jarvisniu/ua

let ua = window.navigator.userAgent || ''

// 系统 OS: .isWindows, isMacOS, isLinux
let isWindows = ua.includes('Windows')
let isMacOS = ua.includes('Macintosh') || ua.includes('Mac_PowerPC')
let isLinux = ua.includes('Linux') || ua.includes('X11')
let isUbuntu = ua.includes('Ubuntu')
let isAndroid = ua.includes('Android')
let isIOS = ua.includes('iPhone OS')
// 内核 Kernel: .isChrome, .isFirefox, .isSafari, isEdge, .isIE
let isChrome = ua.includes('Chrome/')
let isFirefox = ua.includes('Firefox/')
let isSafari = ua.includes('Safari/')
let isEdge = ua.includes('Edge/')
let isIE = ua.includes('MSIE/')
// 平台 Platform: .isElectron, .isDesktop, .isMobile
let isElectron = ua.includes('Electron/')
let isDesktop = isWindows || isMacOS || isUbuntu || isElectron
let isMobile = isAndroid || isIOS
// 应用 App: .isWechat, .isAlipay
let isWechat = ua.includes('MicroMessenger/')
let isAlipay = ua.includes('AlipayClient/')

export default {
  value: ua,
  // os
  isWindows,
  isMacOS,
  isLinux,
  isUbuntu,
  isAndroid,
  isIOS,
  // kernel
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
  isIE,
  // platform
  isElectron,
  isDesktop,
  isMobile,
  // app
  isWechat,
  isAlipay,
}
