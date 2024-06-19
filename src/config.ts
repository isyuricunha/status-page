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
      description: 'Cloud',
      followRedirect: true,
    },
    {
      id: 'memo.yuricunha.com',
      url: 'https://memo.yuricunha.com',
      description: 'Memos',
      followRedirect: true,
    },
    {
      id: 'vaultwarden.yuricunha.com',
      url: 'https://vaultwarden.yuricunha.com',
      description: 'Password Manager',
      followRedirect: true,
    },
    {
      id: 'metube.yuricunha.com',
      url: 'https://metube.yuricunha.com',
      description: 'YouTube Downloader',
      followRedirect: true,
    },


  ],
}
