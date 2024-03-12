
/* IMPORT */

import delay from 'promise-resolve-timeout';
import vscode from 'vscode';
import NoopsDetector from './noops_detector';
import {getOptions} from './utils';

/* MAIN */

const open = async (): Promise<void> => {

  const options = getOptions ();
  const detector = new NoopsDetector ( options.fileResultsLimit );

  /* OPEN LOOP */

  await vscode.commands.executeCommand ( 'list.focusPageUp' );

  for ( let i = 0; i < options.resultsLimit; i++ ) {

    await vscode.commands.executeCommand ( 'workbench.action.keepEditor' );
    await vscode.commands.executeCommand ( 'search.action.focusNextSearchResult' );

    detector.tick ();

    if ( detector.isLimited () ) break;

    await delay ( options.delay );

  }

};

/* EXPORT */

export {open};
