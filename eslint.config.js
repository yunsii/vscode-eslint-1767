// migration-guide: https://eslint.org/docs/latest/use/configure/migration-guide

import js from "@eslint/js";
import unusedImports from 'eslint-plugin-unused-imports'
import { parser } from "typescript-eslint";
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default [ 
  js.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: {
      'unused-imports': unusedImports
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    }
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: parser
    },
    plugins: {
      '@stylistic/ts': stylisticTs,
      'unused-imports': unusedImports,
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      "unused-imports/no-unused-imports": "error",
    }
  }
]
