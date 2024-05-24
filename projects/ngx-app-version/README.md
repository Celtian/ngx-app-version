<p align="center">
  <a href="https://github.com/Celtian/ngx-app-version" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxAppVersion</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-app-version.svg)](https://badge.fury.io/js/ngx-app-version)
[![Package License](https://img.shields.io/npm/l/ngx-app-version.svg)](https://www.npmjs.com/ngx-app-version)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-app-version.svg)](https://www.npmjs.com/ngx-app-version)
[![Snyk](https://snyk.io//advisor/npm-package/ngx-app-version/badge.svg)](https://snyk.io//advisor/npm-package/ngx-app-version)
[![codecov](https://codecov.io/gh/Celtian/ngx-app-version/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-app-version/)
[![stars](https://badgen.net/github/stars/celtian/ngx-app-version)](https://github.com/celtian/ngx-app-version/)
[![forks](https://badgen.net/github/forks/celtian/ngx-app-version)](https://github.com/celtian/ngx-app-version/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-app-version.svg)](http://hits.dwyl.com/celtian/ngx-app-version)

> Angular directive for writing version into DOM

> ✓ _Angular 18 compatible_

Here's the [demo](http://celtian.github.io/ngx-app-version/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-app-version) or [codesandbox live preview](https://codesandbox.io/s/ngx-app-version-l05882)

- Lightweight
- No dependencies!
- Directive way
- Customizable [options](#options)...

## Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-app-version
```

2. Add `provideAppVersion` into your config

```typescript
import { provideAppVersion } from 'ngx-app-version';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideAppVersion({
      version: '1.0.0'
    })
  ]
};
```

or module

```typescript
  import { provideAppVersion } from 'ngx-app-version';

  @NgModule({
   // ...
   providers: [
     // ...
     provideAppVersion({
       version: '1.1.1'
     })
   ]
  })
```

_Note: Do you want to get version from package.json? Consider to use [ngx-devkit-builders](https://www.npmjs.com/package/ngx-devkit-builders)._

## Quick start

### Directive example

```html
<div ngxAppVersion>...</div>
```

```html
<div app-version="1.1.1">...</div>
```

### Host directive example

```typescript
import { NgxAppVersionDirective } from 'ngx-app-version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  hostDirectives: [NgxAppVersionDirective]
})
export class AppComponent {}
```

```html
<app-root app-version="1.1.1">...</app-root>
```

## Compatibility

| Angular | ngx-app-version | Install                      |
| ------- | --------------- | ---------------------------- |
| >= 14   | 1.x             | `yarn add ngx-app-version`   |
| >= 12   | 0.x             | `yarn add ngx-app-version@0` |

## Options

### Root options

| Option      | Type   | Default   | Description                   |
| ----------- | ------ | --------- | ----------------------------- |
| **version** | string | undefined | version that will be rendered |

## Dependencies

_None_

## License

Copyright &copy; 2023 - 2024 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
