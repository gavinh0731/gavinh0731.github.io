import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: '財穀資訊網',
  tagline: 'stock, blog',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gavinh0731.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gavinh0731', // Usually your GitHub org/user name.
  projectName: 'gavinh0731.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-hant',
    locales: ['zh-hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // id: 'product', // omitted => default instance
          // path: 'docs',
          // routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,        //顯示閱讀時間
          blogTitle: '部落格相關',          //部落格名稱
          blogSidebarTitle: '全部文章',  //側邊欄名稱
          blogSidebarCount: 'ALL',      //顯示所有文章
          postsPerPage: 10,             //每頁顯示文章數
          // routeBasePath: 'happy', //設置多個部落格時使用
          // path: './blog/happy',   //路徑
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  //#region 多個blog
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'code',
        routeBasePath: 'rb_stock_technical',
        path: 'vault_stock_technical',
        sidebarPath: './sidebarsStockTechnical.ts',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docusaurus',
        routeBasePath: 'rb_docusaurus',
        path: 'vault_docusaurus',
        sidebarPath: './sidebarsDocusaurus.ts',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        blogSidebarTitle: '所有文章',
        blogSidebarCount: 'ALL',
        postsPerPage: 10, //每頁顯示文章數
        //
        id: 'life',
        routeBasePath: '生活',
        path: 'vault_blogs/生活',
      },
    ],
  ],
  //#endregion 多個blog
  
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    //導航欄
    navbar: {
      title: '財穀資訊網',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.png',
        srcDark: 'img/logo.svg',
        // 可以將原本預設點擊後到首頁，更改為頁面跳轉到外部連結指定網址。
        // href: 'https://docusaurus.io/',
        // target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '新進文章',
        },

        // region === === 導航欄文章 === === === === === === === === === === ===
        {
          type: 'dropdown',
          position: 'left',
          label: '股票相關',
          items: [
            {

              to: '/docs/category/學習', label: '新進文章',
            },
            {

              to: '/rb_stock_technical/code', label: '技術分析',
            },
          ],
        },
        // region --- --- 導航欄文章 --- --- --- --- --- --- --- --- --- --- ---
        
        // region === === 導航欄部落格 === === === === === === === === === === ===
        // { to: '/blog', label: 'Blog', position: 'left' },
        //# region blog
        {
          type: 'dropdown',
          position: 'left',
          label: 'blog',
          items: [
            {

              to: '/blog', label: '生活隨記',
            },
            {
              to: '/生活', label: '生活',

            },
          ],
        },
        // region --- --- 導航欄部落格 --- --- --- --- --- --- --- --- --- --- ---
        // ---------------------------------------------------------------------
        {
          type: 'dropdown',
          position: 'right',
          label: '網站架設',
          items: [
            {
              label: 'Tutorial Intro',
              to: '/rb_docusaurus/intro',
            },
            {
              label: 'Tutorial - Basics',
              to: '/rb_docusaurus/category/tutorial---basics',
            },
            {
              label: '朝八晚八教學',
              to: 'https://from8to8.com/docs/Website/basic/installation/',
            },
          ]
        },
        {
          href: 'https://github.com/gavinh0731',
          label: 'GitHub',
          position: 'right',
        },
      ],
      // 自動隱藏導航欄，在網頁下滑時會將導航欄隱藏，向上滾動時導航欄自動出現。
      hideOnScroll: true,
      style: 'primary',
    },
    //側邊框隱藏按鈕
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
