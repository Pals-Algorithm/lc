// 题目： https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/

var pathSum = function(root, target) {
  // 前序遍历
  // 在遍历中维护一个数组保存路径，相加已遍历路径上的值，若是叶节点且等于 target 则存进结果数组，否则继续遍历
  const ret = [];
  const path = [];

  function dfs(node, target) {
      if (!node) return;
      // 节点存在，入路径数组进行处理
      path.push(node.val);
      // 叶子节点且值相等
      if (!node.left && !node.right && node.val === target) {
          ret.push(path.slice());
      }
      dfs(node.left, target - node.val);
      dfs(node.right, target - node.val);
      // 左右节点处理完了，证明该节点处理完了，出路径数组回溯
      path.pop();
  }
  dfs(root, target);
  return ret;
};