var arr = [1, 2, 4, 5, 6]
function inset(arr, i, item) {
  for (let j = arr.length; j >= i; j--) {
    arr[j] = arr[j - 1];
    if (j === 3) {
      arr[j - 1] = item

    }
  }
}
inset(arr, 3, 3)
console.log(arr);



var arr = [1, 2, 4, 5, 6]
function del(arr, i) {
  for (let j = arr.length - 1; j >= i; j--) {
    if (j === 3) {
      delete arr[j - 1]
      arr.length--
    }
  }
}
del(arr, 3)
console.log(arr);



function main() {
  var obj = {
    id: 1,
    age: 12,
  }
  f1(obj)
  console.log(obj);
}
function f1(obj) {
  var objCopy = obj
  var obj2 = {
    num: 10,
  }
  objCopy.id = 10
  func2(obj2)
  obj2.num = obj2.num + 10
}
function func2(obj2) {
  obj2.num = 30
}
main()



// Sub：返回的新串 S：父串 pos：位置，len：长度
function SubString(Sub, S, pos, len) {
  let str = ''
  for (var i = pos = 1; i < pos + len; i++) {
    str = S[i]
    Sub = Sub + str
  }
  // console.log('Sub',Sub);
  return Sub
}
var res = SubString('', 'zhangyabowenguipinglovelove', 7, 15)
console.log(res);
// for (int i = pos, i < pos + len; i++) {
//   Sub.ch[i - pos + 1] = S.ch[i]
//   Sub.length = len;
//   return true
// }


// 比较两个字符串大小
var S = 'wangdao'
var T = 'wangda'
function compare(S, T) {
  if (S.length > T.length) {
    T.padEnd(7, "q")
    console.log('TTTT', T);
  } else if (S.length < T.length) {
    S.padEnd(T.length, "#")
  }
  console.log(S, T);
  let res = '等于'
  for (var i = 0; i < S.length && i < T.length; i++) {
    if (S[i] != T[i]) {
      res = S[i] > T[i] ? '大于' : '小于'
      break;
    }
  }
  return res
}
var comp = compare(S, T)
console.log(comp);

// 判断一个串在另一个串中的位置
var str = 'zhangyabowenguipinglove'
var t = 'gui'


var arr = [
  { name: 'A', id: '0', parentID: '-1' },
  { name: 'B', id: '1', parentID: '0' },
  { name: 'C', id: '2', parentID: '1' },
  { name: 'D', id: '3', parentID: '-1' },
  { name: 'E', id: '4', parentID: '1' },
  { name: 'F', id: '5', parentID: '1' },
  { name: 'G', id: '6', parentID: '2' },
  { name: 'H', id: '7', parentID: '3' },
  { name: 'I', id: '8', parentID: '3' },
  { name: 'J', id: '9', parentID: '3' },
  { name: 'K', id: '10', parentID: '4' },
  { name: 'L', id: '11', parentID: '4' },
  { name: 'M', id: '12', parentID: '7' },
]
// 假如输入的id为11，那么它的parentId就是4，
// 再找id为4的，找到它的parentID为1，
// 再找id为1的，找到它的parentID为0，
// 再找id为0的，找到它的parentID为-1，
// 结束，输出为-1的这一项(输入11，则输出{ name: 'A', id: '0', parentID: '-1' },)
var obj = {}
function findP(id) {
  let nextId = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      nextId = arr[i].parentID
      if (nextId >= '0') {
        findP(nextId)
      } else {
        obj = arr[i];
      }
    }
  }
}
var id = '11'
findP(id)
console.log(obj);