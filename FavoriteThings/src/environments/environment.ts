// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCA_NIdg0xDkjIbCXZ7vvB8cqQ-B2w3e3o',
    authDomain: 'moorect-default.firebaseapp.com',
    databaseURL: 'https://moorect-default.firebaseio.com',
    projectId: 'moorect-default',
    storageBucket: 'moorect-default.appspot.com',
    messagingSenderId: '18531524097'
  }
};
