export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff88588a40131027f064730',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-4274ozqb',
                  apiId: 'eaab1aaa-7ed5-42b2-83c1-b524e5b4b9d2'
                },
                {
                  buildHookId: '5ff88588fcd260fa9995d65e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-kz6j61nc',
                  apiId: 'd8257e4b-56ad-4a4a-9ea9-685e420c1c59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/duksh/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-kz6j61nc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
