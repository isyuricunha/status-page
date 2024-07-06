import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Status Page / Yuri Cunha',
    url: 'https://status-page.yuricunha.com/',
    displayDays: 30,
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
      id: 'memos.yuricunha.com',
      url: 'https://memos.yuricunha.com',
      description: 'Memos',
      followRedirect: true,
    },
    {
      id: 'vaultwarden.yuricunha.com',
      url: 'https://vaultwarden.yuricunha.com',
      description: 'Vaultwarden',
      followRedirect: true,
    },
    {
      id: 'privatebin.yuricunha.com',
      url: 'https://privatebin.yuricunha.com',
      description: 'PrivateBin',
      followRedirect: true,
    },
  ],
}
