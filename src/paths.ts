import * as tsConfigPaths from 'tsconfig-paths';

const baseUrl = './';
const paths = {
    '~controllers/*': ['src/controllers/*'],
    '~models/*': ['src/models/*'],
    '`routes/*': ['src/routes/*'],
    '~middleware/*': ['src/middleware/*'],
    '~db/*': ['src/db/*'],
};

tsConfigPaths.register({
    baseUrl,
    paths,
});
