
/* IMPORT */

import delay from 'promise-resolve-timeout';
import vscode from 'vscode';
import {getConfig} from 'vscode-extras';
import NoopsDetector from './noops_detector';
import {isNumber} from './utils';

/* MAIN */

const open = async (): Promise<void> => {

  const config = getConfig ( 'searchOpenAllResults' );
  const delayMs = isNumber ( config?.delay ) ? config.delay : 150;
  const fileResultsLimit = isNumber ( config?.fileResultsLimit ) ? config.fileResultsLimit : 10;
  const resultsLimit = isNumber ( config?.resultsLimit ) ? config.resultsLimit : 250;
  const detector = new NoopsDetector ( fileResultsLimit );

  /* OPEN LOOP */

  await vscode.commands.executeCommand ( 'list.focusPageUp' );

  for ( let i = 0; i < resultsLimit; i++ ) {

    await vscode.commands.executeCommand ( 'workbench.action.keepEditor' );
    await vscode.commands.executeCommand ( 'search.action.focusNextSearchResult' );

    detector.tick ();

    if ( detector.isLimited () ) break;

    await delay ( delayMs );

  }

};

/* EXPORT */

export {open};
