/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.66%)
 * Likes:    2447
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 两个链表两个指针
  // 遍历 Math.min(l1 结点数, l2 结点数) 次，每轮遍历找出更小值
  // 赋更小值的结点给返回结点，更小值结点指针继续步进，重复比较

  const dummy = new ListNode(0);
  let point = dummy;

  while(list1 && list2) {
    if (list1.val < list2.val) {
      point.next = list1;
      list1 = list1.next;
    } else {
      point.next = list2;
      list2 = list2.next;
    }
    point = point.next;
  }
  list1 && (point.next = list1);
  list2 && (point.next = list2);

  return dummy.next;
};

// 时间复杂度: O(n)  n = Math.min(L1, L2)
// 空间复杂度: O(1)  返回值不算的话
// @lc code=end

