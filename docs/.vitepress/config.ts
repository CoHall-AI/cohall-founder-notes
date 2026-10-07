import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Hall for Carbon–Silicon Teams',
  description: '创始人笔记',
  lang: 'zh-CN',
  base: '/cohall-founder-notes/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        text: '方法论',
        items: [
          { text: '反共识判断公式：Agent 时代的组织搭建方法论', link: '/反共识判断公式' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CoHall-AI/cohall-founder-notes' }
    ]
  }
})
