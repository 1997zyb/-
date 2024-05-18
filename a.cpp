#include <stdio.h>

#define _CRT_SECURE_NO_WARNINGS
// #include <cstdio>

int main()
{
  loveYou(3000)
}
void loveYou(int n)
{
  int i = 1;
  while (i <= n)
  {
    i++;
    printf('I LOVE YOU %d\n', i)
  }
  printf('I LOVE YOU MORE THAN %d\n', n)
}
InitList(&L)

#define MaxSize 10
    typedef struct
{
  int data[MaxSize]; // 用静态的数组存放数据元素
  int length;        // 顺序表的当前长度
} SqList;            // 顺序表的类型定义

// 初始化一个顺序表
void InitList(SqList &L)
{
  for (int i = 0; i < MaxSize; i++)
  {
    L.data[i] = 0; // 将所有元素设置为默认初始值
    // 如果不设置默认值，可能会有脏数据
    L.length = 0;  // 顺序表初始长度为0
  }
}
int main()
{
  SqList L;    // 声明一个顺序表
  InitList(L); // 初始化顺序表
  return 0
}
