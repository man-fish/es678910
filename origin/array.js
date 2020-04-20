let a = [1, 2, 3, "foo", "bar", {}];
console.log(a);

a[a.length - 1] = null;

console.log(a);

if (a.length != 0) {
  console.log(a);
}
