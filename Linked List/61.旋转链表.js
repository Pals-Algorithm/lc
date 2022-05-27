/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode.cn/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.69%)
 * Likes:    776
 * Dislikes: 0
 * Total Accepted:    251.5K
 * Total Submissions: 603.3K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!k || !head || !head.next)  {
    return head;
  }
  let lastNode = head;
  let len = 1;
  while(lastNode.next) {
    lastNode = lastNode.next;
    len++;
  }
  lastNode.next = head; // 成环

  let cut = len - (k % len);
  while(--cut) {
    head = head.next;
  }
  const newHead = head.next;
  head.next = null // 切断
  return newHead;
};
// 时间复杂度： O(n) 最坏情况为遍历 链表节点数 * 2 - 1 次
// 空间复杂度： O(1)
// @lc code=end

