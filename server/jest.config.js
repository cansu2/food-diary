/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/**/*.test.ts"],
    verbose: true, //each test will be reported during the run
    forceExit: true,
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
  };
  