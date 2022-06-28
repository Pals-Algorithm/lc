/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
  // 其实题意把递归的思路都说清楚了。。
  // 递归定义： 给定一个数组，构建一个最大二叉树
  // 递归出口： 数组为空时返回 null
  if (!nums.length) {
      return null;
  }
  let max = -Infinity, maxIndex;
  nums.forEach((item, index) => {
      if (item > max) {
          max = item;
          maxIndex = index;
      }
  })
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return root;
};