import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Status Page / Yuri Cunha',
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
    {
      id: 'cloud.yuricunha.com',
      url: 'https://cloud.yuricunha.com',
      description: 'Website',
      followRedirect: true,
    },


  ],
}
