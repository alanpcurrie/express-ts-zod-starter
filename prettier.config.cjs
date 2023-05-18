// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: ["<BUILT_IN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[.]", "[~]", "", "<TYPES>"],
    importOrderParserPlugins: ['typescript'],
    importOrderTypeScriptVersion: '5.0.0',
};
