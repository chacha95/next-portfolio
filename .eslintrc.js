module.exports = {
  extends: ["next", "prettier"],
  plugins: ["unicorn"],
  rules: {
    "no-unused-vars": "off",
    "@next/next/no-document-import-in-page": "off",
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
