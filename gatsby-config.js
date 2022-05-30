const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Teniso Partneris`,
        siteUrl: `https://www.raketes.tenisopartneris.lt`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet-async`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto\:300,400,500,600,700`,
                    `Redhat\:300,400,500,600,700`,
                ],
                display: `swap`,
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: path.resolve(__dirname, 'src/pages'),
                ignore: ['**/sections/*', '**/options/*', '**/elements/*'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-resolve-src',
            options: {
                srcPath: path.resolve(__dirname, 'src'),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Teniso Partneris`,
                short_name: `Teniso Partneris`,
                start_url: `/`,
                display: `standalone`,
                icon: `src/assets/images/tplogo.png`,
            },
        },
    ],
};
