module.exports = {
  publicPath: 'realestate',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_default.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_responsive.scss";
        `
      }
    }
  }
} 