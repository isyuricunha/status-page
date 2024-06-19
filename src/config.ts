import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Status Page Pro',
    url: 'https://status-page.yuricunha.com/',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'yuricunha.com',
      url: 'https://yuricunha.com',
      description: 'Website',
      followRedirect: true,
    },

  ],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
