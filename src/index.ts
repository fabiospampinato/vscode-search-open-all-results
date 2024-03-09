
/* IMPORT */

import vscode from 'vscode';
import * as Commands from './commands';

/* MAIN */

const activate = (): void => {

  vscode.commands.registerCommand ( 'searchOpenAllResults.open', Commands.open );

};

/* EXPORT */

export {activate};
