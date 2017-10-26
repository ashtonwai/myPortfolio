// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBQjqWP29kflW52wOIDRZ0ywMFJ_SiQsqk',
    authDomain: 'my-portfolio-a9f0e.firebaseapp.com',
    databaseURL: 'https://my-portfolio-a9f0e.firebaseio.com',
    projectId: 'my-portfolio-a9f0e',
    storageBucket: 'my-portfolio-a9f0e.appspot.com',
    messagingSenderId: '691904174793'
  }
};
