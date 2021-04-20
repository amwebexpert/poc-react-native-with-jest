
module.exports = {
    preset: 'react-native',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: [
        "node_modules/(?!(@react-native|react-native|react-native-iphone-x-helper)/)"
    ]
};