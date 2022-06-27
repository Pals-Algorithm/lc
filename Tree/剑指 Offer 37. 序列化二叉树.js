/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  const Layer_Sign = 'layer';
  const queue = [root, Layer_Sign];
  const ret = root ? [root.val] : [];
  let node = null;
  while(node = queue.shift()) {
      if (node === Layer_Sign) {
          if(!queue.length) {
              break;
          }
          queue.push(Layer_Sign);
          continue;
      }
      ret.push(node.left ? node.left.val : null);
      ret.push(node.right ? node.right.val : null);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
  }
  return JSON.stringify(ret);
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const arr = JSON.parse(data);
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);

  const queue = [root];
  let pointer = 1; // 指向当前节点的左孩子
  let node;
  while(node = queue.shift()) {
      if (arr[pointer] !== null && arr[pointer] !== undefined) {
          const leftNode = new TreeNode(arr[pointer]);
          node.left = leftNode;
          queue.push(leftNode);
      }
      if (arr[pointer + 1] !== null && arr[pointer + 1] !== undefined) {
          const rightNode = new TreeNode(arr[pointer + 1]);
          node.right = rightNode;
          queue.push(rightNode);
      }
      pointer += 2;
  }
  return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/