
/* IMPORT */

import * as vscode from 'vscode';
import Config from './config';

/* NOOPS DETECTOR */

class NoopsDetector {

  config; maxKnownFiles; noops;

  constructor () {

    this.config = Config.get ();
    this.maxKnownFiles = this.getKnownFiles ();
    this.noops = 0;

  }

  getKnownFiles () {

    return vscode.workspace.textDocuments.length;

  }

  iteration () {

    const knownFiles = this.getKnownFiles ();

    if ( knownFiles > this.maxKnownFiles ) { // Not a noop

      this.maxKnownFiles = knownFiles;
      this.noops = 0;

    } else { // Noop

      this.noops++;

    }

  }

  isLimit () { // Too many noops

    return this.noops > this.config.fileResultsLimit;

  }

}

/* EXPORT */

export default NoopsDetector;
