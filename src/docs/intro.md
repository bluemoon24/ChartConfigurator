# Bayer ROI Charts

### Development
To develop the library, type `yarn dev`.

### Production build
To build a minified library file, type `yarn build`.

### Tests

To run tests, type `yarn test`.

To run tests in watch mode, type `yarn test:watch`.

### Usage
To install the library, type:
```
npm install git+ssh://git@github.com:skygate/bayer-roi.git
```
or
```
yarn add git+ssh://git@github.com:skygate/bayer-roi.git
```
At the end of this command you can write `#` followed by a name of particular tag (e.g. v0.0.22) or branch to use a specific version of a library.
If it is not provided, then the latest version will be used.

To update the library, you can either use the same command as for installing it, or `yarn upgrade roi-charts`.

To use the library, import it:
```
import roiCharts from 'roi-charts';
```
