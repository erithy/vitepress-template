export default {
  title: "fe.Handbook",
  description: "Frontend Engineering Handbook & Documents",
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "fe.Handbook",
    search: {
      provider: "local",
    },
    // Sidebar
    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "How-to",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Documents",
        collapsed: true,
        items: [
          { text: "Backoffice",
            collapsed: true,
            items: [
              {
                text: 'Level 2',
                link: 'backoffice/level-2'
              }
            ]
          },
          { text: "Web Banking",
            collapsed: true,
            items: [
              {
                text: 'Level 2',
                link: 'web-banking/level-2'
              }
            ]
          },
        ],
      },
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: false,
      next: true,
    },
    footer: {
      copyright: "Copyright © 2024-present",
    },
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
  lastUpdated: true
};
