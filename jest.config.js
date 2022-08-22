/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  roots: ["<rootDir>/src"],

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  preset: "ts-jest",

  testEnvironment: "node",
}