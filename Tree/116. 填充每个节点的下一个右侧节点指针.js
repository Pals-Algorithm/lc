/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  if (!root) return null;
  
  let l = root.left;
  let r = root.right;
  while(l) {
      l.next = r;
      l = l.right;
      r = r.left;
  }
  connect(root.left);
  connect(root.right);
  return root;
};