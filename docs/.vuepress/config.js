import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { redirectPlugin } from 'vuepress-plugin-redirect'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: 'Apps',
        link: '/apps/',
      },
      {
        text: 'About us',
        link: '/about/'
      }
    ],
    sidebar: {
      '/apps/': [
        {
          text: 'Apps',
          collapsible: false,
          children: [
            '/apps/README.md',
          ]
        }
      ],
    },
    contributors: false,
    lastUpdated: false,
    footer: '© 2022 Popprate LLC.'
  }),

  title: 'Popprate LLC',
  description: 'The corporate site of Popprate LLC.',

  head: [
    ['meta', { name: 'theme-color', content: '#44c0c2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-GF8Z9BMW5M' }],
    ['script', {}, `
      window.dataLayer=window.dataLayer||[];
      function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());gtag('config','G-GF8Z9BMW5M');
    `]
  ],

  plugins: [
    redirectPlugin({
      config: {
        '/privacy.html': '/privacy/20250701-a.html',
        '/terms-of-use.html': '/terms-of-use/20250701-a.html'
      }
    })
  ]
})