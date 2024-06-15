function f(N) {
  if (N == 0) {
    return 1
  }
  else {
    return f(N - 1) * N
  }
}
var res = f(5)
console.log(res);



function f2(N) {
  if (N < 3) {
    return 1
  }
  else {
    return f2(N - 1) + f2(N - 2)
  }
}
var res = f2(5)
console.log(res);

// 数组nums包含0~n的所有整数，但其中缺了一个，请编写代码找出那个整数，
// 要求时间复杂度为O(n)

// 输入：[3,0,1]
// 输出：2

// 输入：[9,3,5,1,2,4,7,6,0]
// 输出：8


function f3(arr, length) {
  let x = 0
  for (let i = 0; i <= length; i++) {
    x ^= i;
    console.log(x);
  }
  // for (let i = 0; i <= length; i++) {
  //   x ^= arr[i];
  // }
}
var arr = [9, 3, 5, 1, 8, 4, 7, 6, 0]
f3(arr, arr.length)