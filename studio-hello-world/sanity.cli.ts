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
    appId: 'hyij5pstzt94o98tkeb03mhz',
    autoUpdates: true,
  }
})
