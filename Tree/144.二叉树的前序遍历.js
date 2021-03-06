/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (71.05%)
 * Likes:    847
 * Dislikes: 0
 * Total Accepted:    623.5K
 * Total Submissions: 877K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = [1,2]
 * 输出：[1,2]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 100] 内
 * -100 
 * 
 * 
 * 
 * 
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // 方法一： 递归
  
  // 树是一个典型的递归结构。  
  // 对于一个树的前序遍历，其实就是想要先访问到树的根节点、再访问左节点、再访问右节点。
  // 假如 root 根节点只有左右孩子，那么我们要的结果就是 [根节点，左节点，右节点] 对吧？
  // 如果左右孩子又有其自己的节点，要以前序去访问节点是否也是先访问孩子节点，再访问孩子的左节点，最后访问孩子的右节点，我们想要的结果就是 [孩子节点，孩子左，孩子右]。
  // 所以我们完全可以把左右孩子分别作为根节点拆成两个树，我们最终想要的结果就是 [根节点，左孩子树的前序遍历结果，右孩子树的前序遍历结果]
  // 然而 preorderTraversal 方法的定义（目的）就是输入一个根节点，返回该树的前序遍历结果，所以我们想要的结果就是 [根节点, ...preorderTraversal(左孩子), ...preorderTraversal(右孩子)]
  // 中序、后续的遍历结果其实就只是顺序不同嘛。

  if (!root) return []; // 出口条件，传个空节点，返回空数组
  // [根节点, ...preorderTraversal(左孩子), ...preorderTraversal(右孩子)]
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];

  // 方法二： 迭代
  // 递归的方式无非就是函数入执行栈、出执行栈的过程。
  // 要想使用迭代方法，我们可以自己维护一个执行栈，模拟递归的过程。
  // 著名的颜色标记法可以来解决迭代树的遍历问题
  // if (!root) return [];

  // const stack = [{
  //   color: 'white', // 未遍历到就是 'white'，遍历到了该节点就变颜色为 'gray'
  //   node: root
  // }];
  // const res = [];

  // while(stack.length) {
  //   const {color, node} = stack.pop(); // 节点出栈、待处理
  //   if (color === 'gray') {
  //     // 遍历到了该节点，则对其做出处理，此处是保存进返回值里
  //     res.push(node.val);
  //   } else {
  //     // 节点入栈
  //     // 因为栈是先进后出，假如我们想前序遍历 根左右 的话，入栈顺序就得反过来。
  //     // 同理，想要中序遍历、后续遍历，改变入栈顺序就行。
  //     node.right && stack.push({color: 'white', node: node.right});
  //     node.left && stack.push({color: 'white', node: node.left});
  //     stack.push({color: 'gray', node}); // 本轮走到了该节点，颜色改变
  //   }
  // }
  // return res;
};
// @lc code=end

