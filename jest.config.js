module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    // testRegex = '(/__tests__/.*|\\.spec)\\.js$',
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50
        }
    },
    coverageReporters: ['json', 'lcov', 'text', 'clover']
}