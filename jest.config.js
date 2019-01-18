module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.js$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform'
    },
}