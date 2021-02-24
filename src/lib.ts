import { name as pkgName } from '../package.json';
import debugFactory from 'debug';

// TODO: replace "lib" below with actual name
const debug = debugFactory(`${pkgName}:lib`);

/**
 * Does functionality
 */
export function functionality() {
  debug('functionality');
  // eslint-disable-next-line no-console
  console.log('hello, world!');
}
