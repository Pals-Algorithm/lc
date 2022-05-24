/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (40.47%)
 * Likes:    8116
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 3.2M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 
 * 题目数据保证列表表示的数字不含前导零
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode(null);
  let currentPoint = dummyHead;
  let l1Point = l1;
  let l2Point = l2;
  let prevPlus = 0;

  while(l1Point || l2Point) {
    l1Point = l1Point || new ListNode(0);
    l2Point = l2Point || new ListNode(0);
    const l1Val = l1Point.val;
    const l2Val = l2Point.val;
    let sum = l1Val + l2Val + prevPlus;
    prevPlus = 0;
    if (sum >= 10) {
      sum = sum - 10;
      prevPlus = 1;
    }
    currentPoint.next = new ListNode(sum);
    currentPoint = currentPoint.next;
    l1Point = l1Point.next;
    l2Point = l2Point.next;
  }

  prevPlus && (currentPoint.next = new ListNode(prevPlus));

  return dummyHead.next;
};

// 时间复杂度: O(n)  n 为 l1、l2 的更长度
// 空间复杂度: 若返回值算复杂度的话 O(n)
// @lc code=end

