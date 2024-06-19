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
    {
      id: 'umami.yuricunha.com',
      url: 'https://umami.yuricunha.com',
      description: 'Privacy Analytcs',
      followRedirect: true,
    },
    {
      id: 'ittools.yuricunha.com',
      url: 'https://ittools.yuricunha.com',
      description: 'IT Tools',
      followRedirect: true,
    },
    {
      id: 'privatebin.yuricunha.com',
      url: 'https://privatebin.yuricunha.com',
      description: 'PrivateBin Privacy',
      followRedirect: true,
    },
    {
      id: 'support.yuricunha.com',
      url: 'https://support.yuricunha.com',
      description: 'Support Ticket',
      followRedirect: true,
    },
    {
      id: 'docs.yuricunha.com',
      url: 'https://docs.yuricunha.com',
      description: 'Docs from my pages/projects',
      followRedirect: true,
    },
    {
      id: 'llm.yuricunha.com',
      url: 'https://llm.yuricunha.com',
      description: 'UI to my LLM',
      followRedirect: true,
    },
    {
      id: 'git.yuricunha.com',
      url: 'https://git.yuricunha.com',
      description: 'GitTea Privacy GIT',
      followRedirect: true,
    },


  ],
}
