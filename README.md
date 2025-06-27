# LotR Node.js sdk

The LotR Node sdk provides access to the LotR API for server side applications written in javascript

## Requirements

Node 8, 10 or higher.

## Installation

Install the package with:

```sh
npm install lotr-sdk --save
# or
yarn add lotr-sdk 
```

## Usage

The package needs to be configured with your LotR secret key, which is
available in your LotR dashboard.

<!-- prettier-ignore -->
```js
import LotR from 'lotr-sdk';
const lotr = new LotR('your_api_key');

(async () => {
  const allBooks = await lotr.books.list();

  console.log(allBooks);
})();
```

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

If you do not have `yarn` installed, you can get it with `npm install --global yarn`.

<!--
# vim: set tw=79:
-->
