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
      id: 'ddgp.yuricunha.com',
      url: 'https://ddgp.yuricunha.com/login',
      description: 'DuckDuckGo Mail Panel',
      followRedirect: true,
    },
    {
      id: 'vaultwarden.yuricunha.com',
      url: 'https://vaultwarden.yuricunha.com/',
      description: 'Password Vault',
      followRedirect: true,
    },
    {
      id: 'umami.yuricunha.com',
      url: 'https://umami.yuricunha.com/login',
      description: 'Private Focused Analytcs',
      followRedirect: true,
    },
    {
      id: 'ittools.yuricunha.com',
      url: 'https://ittools.yuricunha.com/login',
      description: 'It Tools for Devs',
      followRedirect: true,
    },
    {
      id: 'llm.yuricunha.com',
      url: 'https://llm.yuricunha.com/login',
      description: 'LLMs/IAs Hub',
      followRedirect: true,
    },
    {
      id: 'support.yuricunha.com',
      url: 'https://support.yuricunha.com/login',
      description: 'Support Ticket for Clients',
      followRedirect: true,
    },
  ],
}
