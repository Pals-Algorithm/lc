/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (51.60%)
 * Likes:    1412
 * Dislikes: 0
 * Total Accepted:    444.9K
 * Total Submissions: 860.3K
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,2,1]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 * 
 * 
 * 
 * 
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
 const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }
  return prev;
}

const endOfFirstHalf = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
}

var isPalindrome = function(head) {
  if (head == null) return true;

    // 找到前半部分链表的尾节点并反转后半部分链表
    const firstHalfEnd = endOfFirstHalf(head);
    const secondHalfStart = reverseList(firstHalfEnd.next);

    // 判断是否回文
    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;
    while (result && p2 != null) {
        if (p1.val != p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }        

    // 还原链表并返回结果
    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
};
// 时间复杂度: O(n)
// 空间复杂度: O(1)
// @lc code=end

