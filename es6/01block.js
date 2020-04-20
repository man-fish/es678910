/* 块级作用域 */
// 没有块级作用域带来的问题
// var tmp = 1;

// function a() {
//   console.log(tmp);
//   if (false) {
//     var tmp = 2;
//   }
// }

// a();

// 块级作用域，外部作用域无法使用外部作用域声明的变量。
let a = 1;
{
  let a = 1;
}

console.log(a);

{
  a = 2;
}

console.log(a);
