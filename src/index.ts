import { name as pkgName } from '../package.json';
import { functionality } from './lib';
import yargs from 'yargs/yargs';
import debugFactory from 'debug';

import type { Arguments, Argv } from 'yargs';

export type Program = Argv;
export type { Arguments };
export type Parser = (argv?: string[]) => Promise<Arguments>;

export type Context = {
  program: Program;
  parse: Parser;
};

// TODO: replace "parse" (index) below with actual name
const debug = debugFactory(`${pkgName}:parse`);

/**
 * Create and return a pre-configured Yargs instance (program) and argv parser.
 */
export function configureProgram(): Context;
/**
 * Configure an existing Yargs instance (program) and return an argv parser.
 *
 * @param program A Yargs instance to configure
 */
export function configureProgram(program: Program): Context;
export function configureProgram(program?: Program): Context {
  const finalProgram = program || yargs();

  finalProgram
    .scriptName('cli')
    .usage('$0' + '\n\nA description does here!')
    .options({
      silent: {
        alias: 's',
        describe: 'Nothing will be printed to stdout or stderr',
        type: 'boolean'
      }
    })
    .string('_')
    // .group(
    //   ['X', 'Y', 'Z'],
    //   'Scope options:'
    // )
    .group(['help', 'version', 'silent'], 'Other options:')
    .epilogue('Details:' + '\n  A few final points go here.')
    .example([
      ['$0', 'First example'],
      ['$0 --silent', 'Second example']
    ])
    .strictOptions();

  return {
    program: finalProgram,
    parse: async (argv?: string[]) => {
      debug('parse: saw argv: %O', argv);
      const finalArgv = finalProgram.parse(argv || []);

      functionality();
      return finalArgv;
    }
  };
}
