const fs = require('fs');
const path = require('path');

const pkgPath = path.join(process.cwd(), 'node_modules', 'react', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

pkg.exports = pkg.exports || {};
pkg.exports['./jsx-runtime.js'] = './jsx-runtime.js';
pkg.exports['./jsx-dev-runtime.js'] = './jsx-dev-runtime.js';

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
