
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

// This class tries to detect when we might be looping over of the existing results again

class NoopsDetector {

  /* VARIABLES */

  private limit: number;
  private maxKnownFiles: number;
  private noops: number;

  /* CONSTRUCTOR */

  constructor ( limit: number ) {

    this.limit = limit;
    this.maxKnownFiles = vscode.workspace.textDocuments.length;
    this.noops = 0;

  }

  /* API */

  tick = (): void => {

    const knownFiles = vscode.workspace.textDocuments.length;

    if ( knownFiles > this.maxKnownFiles ) { // Not a noop

      this.maxKnownFiles = knownFiles;
      this.noops = 0;

    } else { // Noop

      this.noops += 1;

    }

  };

  isLimited = (): boolean => { // Too many noops

    return this.noops > this.limit;

  };

}

/* EXPORT */

export default NoopsDetector;
