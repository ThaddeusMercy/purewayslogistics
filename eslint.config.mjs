import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the unescaped entities rule
      "react/no-unescaped-entities": "off",
      
      // Allow any type where necessary (consider fixing these properly in the future)
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Allow using regular img elements if needed
      "@next/next/no-img-element": "warn",
      
      // Allow unused variables (consider fixing these properly)
      "@typescript-eslint/no-unused-vars": "warn",
      
      // Set exhaustive-deps to warn instead of error
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];

export default eslintConfig;