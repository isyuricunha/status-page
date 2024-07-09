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
    {
      id: 'gitea.yuricunha.com',
      url: 'https://gitea.yuricunha.com/',
      description: 'Gitea (Git)',
      followRedirect: true,
    },
    {
      id: 'umami.yuricunha.com',
      url: 'https://umami.yuricunha.com/',
      description: 'Umami',
      followRedirect: true,
    },
  ],
}
