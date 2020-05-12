const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');

const question = async function () {
    const setting = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectProject',
            message: '请选择要操作的项目：',
            choices: [
                {
                    name: 'pharmacy',
                    value: 'pharmacy'
                },
                {
                    name: 'erp',
                    value: 'erp'
                }
            ]
        },
        {
            type: 'confirm',
            name: 'isComfirmed',
            message: '确定要删除所选项目pages中所有的console.log？'
        }
    ])

    console.log('setting', setting)

    if(setting.selectProject.includes('pharmacy')){
        console.log('123123')
    }

}



question()





// modify_here
const filePath = path.join(__dirname, 'src')
//调用文件遍历方法
// fileDisplay(filePath);

/**
 * 文件遍历
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function (err, files) {
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件列表
            files.forEach(function (filename) {
                if (filename !== "fuckConsole.js") {
                    //获取当前文件的绝对路径
                    var filedir = path.join(filePath, filename);
                    //根据文件路径获取文件信息，返回一个fs.Stats对象
                    fs.stat(filedir, function (eror, stats) {
                        // 
                        if (eror) {
                            console.warn('获取文件stats失败');
                        } else {
                            var isFile = stats.isFile();//是文件
                            var isDir = stats.isDirectory();//是文件夹
                            if (isFile) {
                                startFucking(filedir)
                            } else if (isDir) {
                                fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                            }
                        }
                    })
                }

            });
        }
    });
}

/**
 * 删除文件中所有的console
 * @param {*} fileTarget 需要处理的文件路径 
 */
function startFucking(fileTarget) {
    const context = fs.readFileSync(fileTarget, 'utf-8');
    var newValue = context.replace(/console.log\(.*?\)|;/g, '');
    fs.writeFileSync(fileTarget, newValue, 'utf-8')
}
