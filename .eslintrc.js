module.exports = {
    root: false,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
        "no-console": "off",
        "no-debugger": "off",
        "no-unused-vars": "off",
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};