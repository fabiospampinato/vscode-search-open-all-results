# Search - Open All Results

<p align="center">
  <img src="https://raw.githubusercontent.com/fabiospampinato/vscode-search-open-all-results/master/resources/logo.png" width="128" alt="Logo">
</p>

Open all search results at once with a single command.

This extension will loop through all the available search results and open the respective files.

There isn't really a proper API for implementing this, therefore the way this works is a bit hacky and you might find some bugs with it. Try to use this on search queries that produce one, or very few, results per file.

## Install

Follow the instructions in the [Marketplace](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-search-open-all-results), or run the following in the command palette:

```shell
ext install fabiospampinato.vscode-search-open-all-results
```

## Usage

It adds one command, available only when the search pane is visible, to the command palette:

```js
'Search: Open All Results' // Open all search results at once
```

## Settings

```js
{
  "searchOpenAllResults.delay": 150, // Delay, in milliseconds, between file openings
  "searchOpenAllResults.fileResultsLimit": 10, // Maximum number of supported results per file
  "searchOpenAllResults.resultsLimit": 250 // Maximum number of results to open
}
```

## License

MIT © Fabio Spampinato
