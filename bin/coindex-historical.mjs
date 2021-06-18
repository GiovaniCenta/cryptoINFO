import commander from 'commander';
const program = commander;
import historical from "../commands/historical_methods.mjs"

program
  .command('First_Trade_Date')
  .description('Check the date of the first trade')
  .option(
    '--coin <type>',
    'Add specific coin types in CSV format',
    'BTC,ETH,XRP')
  .action(cmd => historical.firstTradeDate(cmd));

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}