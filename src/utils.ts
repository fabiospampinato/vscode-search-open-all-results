
/* IMPORT */

import {getConfig} from 'vscode-extras';
import type {Options} from './types';

/* MAIN */

const getOptions = (): Options => {

  const config = getConfig ( 'searchOpenAllResults' );
  const delay = isNumber ( config?.delay ) ? config.delay : 150;
  const fileResultsLimit = isNumber ( config?.fileResultsLimit ) ? config.fileResultsLimit : 10;
  const resultsLimit = isNumber ( config?.resultsLimit ) ? config.resultsLimit : 250;

  return { delay, fileResultsLimit, resultsLimit };

};

const isNumber = ( value: unknown ): value is number => {

  return typeof value === 'number';

};

/* EXPORT */

export {getOptions, isNumber};
