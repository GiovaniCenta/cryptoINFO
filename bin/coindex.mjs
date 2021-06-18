


import pkg from '../../package.json';
import commander from 'commander';
const program = commander;
program
  .version(pkg.version)
  .command('key', 'Manage API Key -- https://nomics.com')
  .command('check', 'Check Coin Price Info')
  .command('historical', 'Check coins historical info')
  .parse(process.argv);
