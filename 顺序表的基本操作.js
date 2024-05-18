/*
  ListInsert(&L,i,e)：插入操作，在表L中的第i个位置上插入指定的元素e


*/


function text(obj){
  obj.x = 2024
  console.log('x调用时',obj.x);
}

function f() {
  let obj = {
    x:1
  }
  console.log('x调用前',obj.x);
  text(obj)
  console.log('x调用后',obj.x);
}
f()