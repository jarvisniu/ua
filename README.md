# ua

Detect web environment by user agent

## Usage

Install:

```bash
npm install @jarvisniu/ua
```

Import:

```js
import ua from '@jarvisniu/ua'
```

Use:

```js
ua.isWindows
// extending
ua.isOpera = ua.value.incluces('OPR/')
```

## API

### OS

- `isWindows`
- `isMacOS`
- `isLinux`
- `isUbuntu`
- `isAndroid`
- `isIOS`

### Kernel

- `isChrome`
- `isFirefox`
- `isSafari`
- `isEdge`
- `isIE`

### Platform

- `isElectron`
- `isDesktop`
- `isMobile`

### App

- `isWechat`
- `isAlipay`

## License

MIT
