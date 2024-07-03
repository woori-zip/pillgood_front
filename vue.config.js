<<<<<<< Updated upstream
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .options({
        esModule: false,
      })
      .end();
  }
});
=======
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack'); // webpack을 불러옵니다

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
    ],
  },
};

// 아래 코드는 주석 처리된 상태입니다. 필요하다면 주석을 해제하여 사용할 수 있습니다.
// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: config => {
//     config.module
//       .rule('raw')
//       .test(/\.txt$/)
//       .use('raw-loader')
//       .loader('raw-loader')
//       .options({
//         esModule: false,
//       })
//       .end();
//   }
// });
>>>>>>> Stashed changes
