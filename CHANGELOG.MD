# Changelog

All notable changes to this project will be documented in this file.

## [0.2.1] - 2020-12-20

### Added

### Changed

- `date` property found in timeseries returned from `getFromWiki` is now typeof Date.

## [0.2.0] - 2020-12-20

### Added

- Wiki api accessible with `OSRS.getFromWiki`

### Changed

- Updated `README.md`
- Removed `moment` dependency in favor of `src/util/time.ts` for date formatting.
- ESLINT -Prettier updated.
- NPM description changes.
- Fixed mocha tests.
- Table of contents automatically updated when deploying to npm.

## [0.1.1] - 2020-12-20

### Added

### Changed

- Changed proxy provider

## [0.1.1] - 2020-12-18

### Added

### Changed

- Dependencies updated.

## [0.1.0] - 2020-12-14

### Added

- Browser support via CORS proxy.
- Browser development tests.

### Changed

- User agent is only generated if not running on a browser.
- `README.md` mention proxy limitations.
- Update `SECURITY.md`.
- Removed `PROXY` export.

## [0.0.8] - 2020-12-13

### Changed

- Homepage, repository and issues urls found in `package.json`

## [0.0.7] - 2020-12-13

### Added

- Missing `axios` dependency

## [0.0.4] - 2020-12-12

### Added

- `CODE_OF_CONDUCT.md`
- `SECURITY.md`

### Changed

- Updated `README.md`
- Renamed `OfficialAPI` to `getFromOfficialAPI`
- Renamed `hq2007API` to `getFrom2007HQ`

## [0.0.3] - 2020-12-11

### Added

### Changed

- fixed `packagelock.json`

## [0.0.2] - 2020-12-11

### Added

### Changed

- `README.md` examples added.

## [0.0.1] - 2020-12-11

### Added

- Dependabot.

### Changed

- Fixed `getTradeVolume` returning an array containing duplicates.
- Updated dependencies.
- Removed travis ci.
- Removed `2007HQ` key from `getTradeVolume`.
- Added repo url to `package.json`
