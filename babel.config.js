// const { NODE_ENV } = process.env;

// module.exports = function exports(api) {
//   api.cache(true);

//   const plugins = [
//     '@babel/plugin-transform-runtime',
//     ['@babel/plugin-proposal-decorators', { legacy: true }],
//     '@babel/plugin-proposal-class-properties'
//   ];

//   if (NODE_ENV === 'production') {
//     plugins.push(
//       '@babel/plugin-transform-react-constant-elements',
//       '@babel/plugin-transform-react-inline-elements',
//       'babel-plugin-transform-react-remove-prop-types'
//     );
//   }

//   return {
//     presets: [
//       [
//         '@babel/preset-env',
//         {
//           targets: {
//             browsers: [
//               'last 2 Chrome versions',
//               'last 2 Firefox versions',
//               'last 2 Safari versions',
//               'last 2 Edge versions',
//               'ie 11'
//             ]
//           },
//           debug: NODE_ENV === 'development'
//         }
//       ],
//       '@babel/preset-react'
//     ],
//     plugins
//   };
// };
