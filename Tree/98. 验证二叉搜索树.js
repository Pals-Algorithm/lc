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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  if (!root) return false;
  let prev = -Infinity;
  let isValid = true;
  function dfs(node) {
      if(!node) return;
      if (!isValid) return;
      dfs(node.left);
      if (node.val > prev) {
          prev = node.val;
      } else {
          isValid = false;
      }
      dfs(node.right);
  }
  dfs(root);
  return isValid;
};