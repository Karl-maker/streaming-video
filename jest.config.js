export default {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {},
    extensionsToTreatAsEsm: [".ts"],
    moduleFileExtensions: ["ts", "js", "json"],
    testMatch: ["**/?(*.)+(spec|test).ts"],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Map @/ to src/
    },
};
  