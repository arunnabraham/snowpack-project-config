// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  optimize:{
    bundle: true,
    target: 'es2018',
  },
  mount: {
    /* ... */
  },
  plugins: [
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions:{
          loadPath:[
            "css"
          ]
        }
      }
    ]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  exclude:[
    '**/node_modules/**/*',
    '**/README.md',
    '**/snowpack.config.js',
    '**/*.json'
  ]
};
