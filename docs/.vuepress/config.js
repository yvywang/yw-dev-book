
const sidebar = require('./mapRouter.js')

module.exports = {
    title: 'yw-dev-book',
    description: 'Just playing around',
    themeConfig: {
        nav: [{
            text: '指南',
            link: '/dev/'
        },
        {
            text: 'Github',
            link: 'https://github.com/yvywang/yw-dev-book'
        },
        ],
        sidebar
    }
}