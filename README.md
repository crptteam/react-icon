# react-icon

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Icon component. Icons keeped in svg-format.

## Usage

### Classic method
```javascript

import { Icon } from "@crpt/react-icon";

<Icon type="calendar" />

```

| PropName | Описание | Пример |
|---|---|---|
| type(required): String | Icon name. | `<Icon type="search" />` |
| onClick: Function  | Callback for the click event. |  `<Icon type="calendar" onClick={e => console.log(e)} />` |
| size: Integer  | Set size in pixels. |  `<Icon size={16} type="calendar" />` |
| spacingLeft: Integer  | Set left margin in pixels. |  `<Icon type="calendar" spacingLeft={16} />` |
| spacingRight: Integer  | Set right margin in pixels. |  `<Icon type="calendar" spacingRight={16} />` |
| withoutMask : bool | It disabling mask for svg (If you aren't see svg, try to use this flag) | |

### React way ))
  You have to receive React Component with svg icon and use it as you wish
```javascript
import { Icon } from "@crpt/react-icon";
...
  const ObjectWithIconsAsReactComponent = Icon.svgIconsAsComponents;
  const IconComponent = ObjectWithIconsAsReactComponent['iconFileName'];
...  
  at render:
  <IconComponent {some props} />
```

## How to add the icon.
  Just copy svg icon to src/svg folder and make 
```javascript
  npm run build
```
or
```javascript
  npm start
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
