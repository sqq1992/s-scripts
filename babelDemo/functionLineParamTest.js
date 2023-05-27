const { transformFileSync } = require('@babel/core');
const insertParametersPlugin = require('./pluginList/function-line-param/function-line-param');
const path = require('path');

const { code } = transformFileSync(path.join(__dirname, './pluginList/function-line-param/sourceCode.js'), {
    plugins: [insertParametersPlugin],
    parserOpts: {
        sourceType: 'unambiguous',
        plugins: ['jsx']
    }
});

console.log(code);
