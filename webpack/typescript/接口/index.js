var me = {
    weight: '90kg',
    height: '160cm'
};
console.log(me);
var only = {
    name: 'hst'
};
// only.name = 'woo'
console.log(only);
// 只读数组
var ax = [1, 2, 3, 4];
var noChange = ax;
console.log(ax);
console.log(noChange);
var demoList = {
    top: '222',
    bottom: '3333',
    left: 0
};
var demoNoList = {
    top: '555',
    bottom: '5666'
};
console.dir(demoList);
console.dir(demoNoList);
