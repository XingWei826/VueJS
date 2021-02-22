//此文件用来测试导出模块 
let a = 10;
let b = 20;
let c = 30;

function show() {
    console.log('默认导出');
}

// 1. 默认导出, 且只能执行一次, 不可多次执行该命令
export default {
    a,
    b,
    show
}

// 2. 按需导出, 可以多次使用
export let num = 101;
export let name = 'Zhang';