const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  transpileDependencies: [],
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          // Absolute path to compiled SPA
          staticDir: path.resolve(__dirname, './dist'),
          // List of routes to prerender
          routes: [ '/en/', '/ar/' ],
          // Options
          postProcess(context) {
           /*  let titles = {
              '/': 'My home page',
              '/about': 'My awesome about page',
              '/contact': 'Contact me'
            };
            context.html = context.html.replace(
              /<title>[^<]*<\/title>/i,
              `<title>${titles[context.route]}</title>`
            ) */
            return context
          }
        }),
      ]
    };
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
