<p align="center">
  <a href="https://github.com/Celtian/ngx-app-version" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxAppVersion</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-app-version.svg)](https://badge.fury.io/js/ngx-app-version)
[![Package License](https://img.shields.io/npm/l/ngx-app-version.svg)](https://www.npmjs.com/ngx-app-version)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-app-version.svg)](https://www.npmjs.com/ngx-app-version)
[![Build & Publish](https://github.com/celtian/ngx-app-version/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/ngx-app-version/actions)
[![codecov](https://codecov.io/gh/Celtian/ngx-app-version/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-app-version/)
[![stars](https://badgen.net/github/stars/celtian/ngx-app-version)](https://github.com/celtian/ngx-app-version/)
[![forks](https://badgen.net/github/forks/celtian/ngx-app-version)](https://github.com/celtian/ngx-app-version/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-app-version.svg)](http://hits.dwyl.com/celtian/ngx-app-version)

> Angular directive for writing version into DOM

> ✓ _Angular 15, Ivy and SSR compatible_

Here's the [demo](http://celtian.github.io/ngx-app-version/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-app-version) or [codesandbox live preview](https://codesandbox.io/s/ngx-app-version-j2ryu)

- Lightweight
- No dependencies!
- Directive way
- Highly customizable [options](#options)...

## Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-app-version
```

2. Add NgxAppVersionModule into your module `imports`

```typescript
  import { NgxAppVersionModule } from 'ngx-app-version';

  @NgModule({
   // ...
   imports: [
     // ...
     NgxAppVersionModule.forRoot({

     })
   ]
  })

  // or

  @NgModule({
   // ...
   imports: [
     // ...
     NgxAppVersionModule
   ]
  })
```

## Compatibility

| Angular | ngx-app-version | Install                    |
| ------- | --------------- | -------------------------- |
| >= 12   | 0.x             | `yarn add ngx-app-version` |

## Quick start

### Example code

```html
<div ngxAppVersion>some long text</div>
```

### Result

```html
<div app-version="0.0.0">some long text</div>
```

## Options

### Root options

| Option              | Type             | Default                  | Description                                            |
| ------------------- | ---------------- | ------------------------ | ------------------------------------------------------ |
| **size**            | string or number | 1                        | Number of truncated lines                              |
| **breakpoints**     | object           | DEFAULT_BREAKPOINTS      | Breakpoints used in responsive mode                    |
| **responsiveSizes** | object           | DEFAULT_RESPONSIVE_SIZES | How many lines should be truncated for each breakpoint |

### Directive

| Option                 | Type         | Default                       | Description                                  |
| ---------------------- | ------------ | ----------------------------- | -------------------------------------------- |
| **[size]**             | object       | value taken from root options | Number of truncated lines or responsive mode |
| **[truncateDisabled]** | boolean      | false                         | Whether truncation is active or not          |
| **(truncateChange)**   | () => object | none                          | Event called when truncation is changed.     |

## Dependencies

_None_

## License

Copyright &copy; 2023 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
