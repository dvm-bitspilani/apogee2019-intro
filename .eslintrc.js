module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-console": [
            "off"
        ],
        "no-useless-escape": [
            "off"
        ]
    },
    "globals": {
        "module": false,
        "node": false
    },
    "env": {
        "browser": true,
        "node": true
    }
};