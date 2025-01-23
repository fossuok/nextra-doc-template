import nextra from 'nextra'
 
// const withNextra = nextra({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.jsx'
// })
 
// export default withNextra()
 
// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

const isProd = process.env.NODE_ENV === 'production';

export default withNextra({
  // Ensure the project builds for static export
  output: 'export',

  // Support for GitHub Pages
  basePath: '',
  assetPrefix: '',

  // Required if you're using next/image
  images: {
    unoptimized: true,
  },
});
