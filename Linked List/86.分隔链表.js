/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode.cn/problems/partition-list/description/
 *
 * algorithms
 * Medium (63.21%)
 * Likes:    563
 * Dislikes: 0
 * Total Accepted:    152.9K
 * Total Submissions: 241.8K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 200] 内
 * -100 
 * -200 
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // 核心就在于分隔
  // 如果这题，你想直接在原链表上修改，你会步入 trap，问题复杂度增加很多。
  // 但是若你及时止步，想想是否遍历一遍链表，把 < x 的节点和 >= x 的节点分别收集在两条不同的链表中，然后把 < x 的链表尾节点连上 >= x 链表的头节点就行了？
  // 代码实现中，small 为 < x 的节点链表，large 为 >= x 的节点链表

  if (!head) return head;
  const dummySmallHead = new ListNode(0);
  const dummyLargeHead = new ListNode(0);
  let small = dummySmallHead;
  let large = dummyLargeHead;
  while(head) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  small.next = dummyLargeHead.next;
  large.next = null; // 断环
  return dummySmallHead.next;
};
// 时间复杂度： O(n) 只遍历了一遍链表
// 空间复杂度： O(1) small、large 链表的节点都是复用原链表的，无创建额外空间

// @lc code=end

