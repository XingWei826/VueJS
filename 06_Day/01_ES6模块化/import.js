// 此文件用来为导入模块进行测试 : 代码执行命令是   npx babel-node 路径
// 1. 默认导入语法： import 接收名  from ‘模块路径'

import Module from './export1.js';
console.log(Module);


// 2.按需导入语法
import {num,name} from './export1';
console.log(num);
console.log(name);



// 有时候，我们只想单纯执行某个模块中的代码，并不需要得到模块中向外暴露的成员，此时，可以直接导入并执行模块代码。
import './export2.js'