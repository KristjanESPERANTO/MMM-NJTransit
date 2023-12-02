module.exports = {
    root: true,
    parser: "babel-eslint",
    extends: [
        "airbnb-base",
        "plugin:flowtype/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:promise/recommended"
    ],
    plugins: [],
    rules: {
        "comma-dangle": ["error", "never"],
        "guard-for-in": "off",
        "import/no-unresolved": "off",
        indent: ["error", 4],
        "max-classes-per-file": "off",
        "max-len": "off",
        "no-console": "off",
        "no-mixed-operators": "off",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        quotes: [2, "double"]
    },
    env: {
        browser: true,
        commonjs: true,
        mocha: true
    },
    globals: {
        sinon: true,
        suite: true,
        benchmark: true,
        i18n: true,
        Log: true,
        Module: true
    }
};
