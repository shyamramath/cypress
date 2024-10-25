import { defineConfig } from "cypress";
import fs from 'fs'

export default defineConfig({
  video: true,
  trashAssetsBeforeRuns: true,
  // reporter: 'mochawesome',
  // reporter: 'cypress-multi-reporters',
  // reporterOptions: {
  //   configFile: 'reporter-config.json',
  // },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:screenshot', (details) => {
        console.log(details) // print all details to terminal
        const newPath = '/Users/shyamramath/work/src/github/shyamramath/cypress/react-app-for-cypress-testing/screenshot.png'
        return new Promise((resolve, reject) => {
          // fs.rename moves the file to the existing directory 'new/path/to'
          // and renames the image to 'screenshot.png'
          fs.rename(details.path, newPath, (err) => {
            if (err) return reject(err)
            // because we renamed and moved the image, resolve with the new path
            // so it is accurate in the test results
            resolve({ path: newPath })
          })
        })
      })
    },
  },
});
