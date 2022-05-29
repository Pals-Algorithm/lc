/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (53.31%)
 * Likes:    907
 * Dislikes: 0
 * Total Accepted:    259.5K
 * Total Submissions: 486.7K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // 设置快慢指针，慢指针指向虚拟头节点，快指针指向头节点
  // 当快指针.val === 快指针.next.val 时，快指针移动，直到找到非重复的节点
  // 然后慢指针指向非重复快指针，慢指针步进，快指针重复上述逻辑找非重复节点

  if (!head || !head.next) return head;
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = head;
  while(fast) {
    if (fast.next && fast.val === fast.next.val) {
      while(fast && fast.val === slow.next.val) {
        fast = fast.next;
      }
      slow.next = fast; // 删除重复节点
      continue;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return dummy.next;
};
// 时间复杂度: O(n) n 为链表长度
// 空间复杂度: O(1)
// @lc code=end

