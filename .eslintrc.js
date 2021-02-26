// .eslintrc.js
module.exports = {
    // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
    root: true,
    // 추가적인 규칙들을 적용
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
        // 'plugin:vue/recommended'  Use this if you are using Vue.js 2.x.
    ],
    // 코드 정리 플러그인 추가
    plugins: ['prettier'],
    // 사용자 편의 규칙 추가
    rules: {
        "vue/no-v-html": 0,
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error", 4],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": ['module',]
        }],
        "vue/no-multi-spaces": ["error", {
            "ignoreProperties": false
        }],
    },
    "globals": {
        "module": true,
        "process": true,
    }
  };