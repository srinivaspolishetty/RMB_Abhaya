// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  qa: false,
 //apiBase: 'http://14.98.164.17:8099',
 // apiBase: 'http://111.93.16.251:8099',
  apiBase: 'https://abhayaotsi.epragathi.org:8099',
  videoStream: 'https://abhaya.epragathi.org',
  version: '/v1',
  env: 'dev',
  setIntervalTime: 30000,
  pageSize: 10,
  pageSizeValues : [10, 50, 100, 200]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
