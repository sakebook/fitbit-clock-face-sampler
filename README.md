# fitbit-clock-face-sampler


## Requirement
- Node 8.0 +
- (Optional) lerna 3.0.0 +

## Setup
### Use lerna

```sh
$ git clone https://github.com/sakebook/fitbit-clock-face-sampler
$ npm install --global lerna
$ cd fitbit-clock-face-sampler
fitbit-clock-face-sampler$ lerna bootstrap --hoist
```

### If you do not use lerna

```sh
$ git clone https://github.com/sakebook/fitbit-clock-face-sampler
```

Under all packages

```
SOME_PACKAGE$ npm install
```

## Build

In any of the packages.

```
SOME_PACKAGE$ npx fitbit
fitbit$ build
fitbit$ install
```

## LICENSE

MIT
