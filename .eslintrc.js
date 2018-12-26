module.exports = {
  "root": true,
  "env": {"es6": true, "browser": true, "node": true},
  "extends": [
    "standard",
    "plugin:vue/recommended",
  ],
  rules: {
    "no-multi-spaces": [0],
    "comma-dangle": [0],
    "object-curly-spacing": [0],
    "vue/max-attributes-per-line": [0],
    "vue/singleline-html-element-content-newline": [0],
    "vue/multiline-html-element-content-newline": [0],
    "vue/no-v-html": [0],
    "vue/require-default-prop": [0]
  },
}
