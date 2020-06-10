module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "plugin:vue/strongly-recommended"
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: "off",
    "no-tabs": 0,
    "vue/html-closing-bracket-spacing": [
      "warn",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always"
      }
    ],
    "no-mixed-spaces-and-tabs": "off",
    "vue/attributes-order": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    semi: ["error", "always"],
    "no-console": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "off",
          constructors: "off",
          methods: "explicit"
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "[uU]nused[0-9]*",
        args: "after-used",
        argsIgnorePattern: "([uU]nused[0-9]*)|(.*Emit)",
        ignoreRestSiblings: false
      }
    ],
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" }
    ],
    "keyword-spacing": ["error", { overrides: { this: { before: false } } }]
  }
};
