import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId:'ddrwhofx',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    // appId: 'hyij5pstzt94o98tkeb03mhz',
    appId: 'nthocu3gz5zuyp5i9hjz6gec',
    autoUpdates: true,
  }
})
