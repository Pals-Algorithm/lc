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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
  // 先找到待删除节点与待删除节点的父节点
  // 让父节点指向待删除节点右子树的最小值，然后删除最小值父节点的指向
  let cache = null;
  function dfs(node) {
      if (!node || cache) return;
      if(node.left && node.left.val === key) {
          cache = [node.left, node, 'left'];
          return;
      }
      if (node.right && node.right.val === key) {
          
          cache = [node.right, node, 'right']
          return;
      }
      dfs(node.left);
      dfs(node.right);
  }
  if (root && root.val === key) {
      // 根节点就是待删除节点
      const dummyRoot = new TreeNode(-1);
      dummyRoot.left = root;
      cache = [root, dummyRoot, 'left'];
  } else {
      dfs(root)
  }
  const [target, parent, sign] = cache ?? [];
  if (!target) {
      // 如果没找到删除的，就返回树本身
      return root;
  }
  function findMinNode(node) {
      if (!node) return;
      let parent = node;
      let left = node.left;
      while(left && left.left) {
          parent = left;
          left = left.left;
      }
      return [parent, left];
  }
  const [father, node] = findMinNode(target.right) ?? [];
  // 删除节点没有右子树
  if (!node && !father) {
      parent[sign] = target.left;
  }
  // 删除节点的右子树没有左孩子
  if (!node && father) {
      parent[sign] = father;
      father.left = target.left;
  }
  // 找到最小节点和其父节点
  if(node && father) {
      parent[sign] = node;
      let r = node;
      while(r && r.right) {
          r = r.right;
      }
      r.right = target.right;
      node.left = target.left;
      father.left = null;
  }
  return target === root ? parent[sign] : root;
};