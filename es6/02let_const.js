/* var, let, const */

// 块级作用域
{
  let a = 1;
  var b = 2;
  console.log(a, b);
}
console.log(a, b);

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();

// 不存在变量提升 (预解析)
console.log(foo);
console.log(bar);
var foo = 1;
let bar = 2;

// 暂时性死区
var a = 1;
if (true) {
  console.log(a);
  let a = 0;
}

console.log(typeof j);
let j;
console.log(typeof e);

// 不允许重复声明
let j = 1;
var j = 1;
function j() {}
let j = 1;

function Wrong(x) {
  {
    let x = 1;
  }
}

function notWrong(x) {
  let x = 1;
}
