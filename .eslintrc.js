module.exports = {
  env: {
    // node: true: Define que el entorno es Node.js, lo que permite el uso de variables y funciones globales específicas de Node.js.
    node: true,
    // es2021: true: Habilita las características de ECMAScript 2021.
    es2021: true,
    // commonjs: true: Define que se está utilizando el sistema de módulos CommonJS (usado en Node.js).
    commonjs: true,
  },
  globals: {
    process: true,
    "jest/globals": true,
  },
  // jest: Añade el plugin de jest para que ESLint pueda reconocer y aplicar reglas específicas de Jest.
  plugins: ["jest"],
  extends: ["eslint:recommended", "plugin:jest/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
  },
};
