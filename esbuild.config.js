const fs = require('fs');
const path = require('path');

require('esbuild').build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18.17',
  outdir: 'dist',
  metafile: true,
  external: [
    'better-sqlite3',
    'mysql',
    'mysql2',
    'oracledb',
    'pg-native',
    'pg-query-stream',
    'sqlite3',
    'tedious',
    '@mikro-orm/seeder',
    '@mikro-orm/mongodb',
    '@mikro-orm/mysql',
    '@mikro-orm/mariadb',
    '@mikro-orm/sqlite',
    '@mikro-orm/better-sqlite'
  ]
}).then(build => {
  fs.writeFileSync(path.join(__dirname, 'meta.json'), JSON.stringify(build.metafile, null, 2));
})