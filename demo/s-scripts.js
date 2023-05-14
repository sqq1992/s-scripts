
const program = require('commander');
const packageInfo = require('../package.json');

(async ()=>{

    program
        .version('0.0.1')

    program
        .command('init') //定义初始化命令
        .description('init project')
        .option("-d") //传参
        .action(function(dir) {
            console.log('dir',dir)
        });
    program.parse(process.argv);


})();

