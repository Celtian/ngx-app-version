import { writeFileSync } from 'fs-extra';
import { join } from 'path';
import distPackage from '../dist/ngx-app-version/package.json';

// Modify package.json in dist folder
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pkg: Record<string, any> = distPackage;

pkg['publishConfig'] = {};
pkg['name'] = '@celtian/ngx-app-version';
pkg['publishConfig'].registry = 'https://npm.pkg.github.com';

writeFileSync(join(__dirname, '..', 'dist', 'ngx-app-version', 'package.json'), JSON.stringify(pkg, null, 2));
console.log('File package.json modified:', pkg);
