module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['./src/assets/static/bootstrap/**'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include']
      }
    ],
    'declaration-empty-line-before': null,
    'order/properties-order': [
      // {
      //   groupName: 'positioning',
      //   properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
      //   emptyLineBefore: 'always',
      //   order: 'flexible'
      // },
      // {
      //   groupName: 'box-model',
      //   properties: [
      //     'display',
      //     'float',
      //     'width',
      //     'height',
      //     'max-width',
      //     'max-height',
      //     'min-width',
      //     'min-height',
      //     'padding',
      //     'padding-top',
      //     'padding-right',
      //     'padding-bottom',
      //     'padding-left',
      //     'margin',
      //     'margin-top',
      //     'margin-right',
      //     'margin-bottom',
      //     'margin-left',
      //     'overflow',
      //     'overflow-x',
      //     'overflow-y',
      //     'clear'
      //   ],
      //   emptyLineBefore: 'always',
      //   order: 'flexible'
      // },
      // {
      //   groupName: 'typography',
      //   properties: [
      //     'font',
      //     'font-family',
      //     'font-size',
      //     'font-smoothing',
      //     'font-style',
      //     'font-weight',
      //     'line-height',
      //     'letter-spacing',
      //     'word-spacing',
      //     'color',
      //     'text-align',
      //     'text-decoration',
      //     'text-indent',
      //     'text-overflow',
      //     'text-rendering',
      //     'text-size-adjust',
      //     'text-shadow',
      //     'text-transform',
      //     'word-break',
      //     'word-wrap',
      //     'white-space',
      //     'vertical-align'
      //   ],
      //   emptyLineBefore: 'always',
      //   order: 'flexible'
      // },
      // {
      //   groupName: 'visual',
      //   properties: [
      //     'background',
      //     'background-attachment',
      //     'background-color',
      //     'background-image',
      //     'background-position',
      //     'background-repeat',
      //     'background-size',
      //     'border',
      //     'border-collapse',
      //     'border-top',
      //     'border-right',
      //     'border-bottom',
      //     'border-left',
      //     'border-color',
      //     'border-image',
      //     'border-top-color',
      //     'border-right-color',
      //     'border-bottom-color',
      //     'border-left-color',
      //     'border-spacing',
      //     'border-style',
      //     'border-top-style',
      //     'border-right-style',
      //     'border-bottom-style',
      //     'border-left-style',
      //     'border-width',
      //     'border-top-width',
      //     'border-right-width',
      //     'border-bottom-width',
      //     'border-left-width',
      //     'border-radius',
      //     'border-top-right-radius',
      //     'border-bottom-right-radius',
      //     'border-bottom-left-radius',
      //     'border-top-left-radius',
      //     'border-radius-topright',
      //     'border-radius-bottomright',
      //     'border-radius-bottomleft',
      //     'border-radius-topleft'
      //   ],
      //   emptyLineBefore: 'always',
      //   order: 'flexible'
      // }
    ],
    'selector-pseudo-element-colon-notation': null
  }
};
