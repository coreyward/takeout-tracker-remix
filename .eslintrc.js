module.exports = {
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  plugins: ["standard", "react", "react-hooks", "prettier"],
  rules: {
    "react/prop-types": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    ENV: "writable",
    cache: "writable",
  },
  env: {
    jest: true,
  },
}
