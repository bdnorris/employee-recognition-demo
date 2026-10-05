/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true,
  },
  "rules": {
    "vue/multi-word-component-names": 0,
    "no-inner-declarations": 0,
  }
}
