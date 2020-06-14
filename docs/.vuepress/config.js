module.exports = {
    title: 'Stefan Isele',
    description: 'About building software',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            // {text: 'Guide', link: '/guide/'},
            // {text: 'External', link: 'https://google.com'}
        ],
        sidebar: [
            {
                title: 'Domain',   // required
                children: ['/']
            },
            {
                title: 'Technical',   // required
                children: [
                    {
                        title: '1st party (ours)',   // required
                        children: []
                    },
                    {
                        title: '2nd party (inhouse)',   // required
                        children: []
                    },
                    {
                        title: '3rd party (external)',   // required
                        children: [{
                            title: 'Concepts',   // required
                            children: [
                                ['/technical/3rd-party/concepts/unicode-UTF-8-UTF-16', 'Unicode, UTF-8, UTF-16']
                            ]
                        },]
                    },
                ]
            }
        ],
        themeConfig: {
            lastUpdated: 'Last Updated', // string | boolean
        }
    }
}
