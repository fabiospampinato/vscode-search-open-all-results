
/* IMPORT */

import * as vscode from 'vscode';
import Config from './config';
import NoopsDetector from './noops_detector';
import Utils from './utils';

/* OPEN */

async function open () {

  const config = Config.get (),
        detector = new NoopsDetector ();

  await vscode.commands.executeCommand ( 'list.focusPageUp' );

  for ( let i = 0, l = config.resultsLimit; i < l; i++ ) {

    await vscode.commands.executeCommand ( 'workbench.action.keepEditor' );
    await vscode.commands.executeCommand ( 'search.action.focusNextSearchResult' );

    detector.iteration ();

    if ( detector.isLimit () ) break;

    await Utils.delay ( config.delay );

  }

}

/* EXPORT */

export {open};
