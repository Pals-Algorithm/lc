var constructFromPrePost = function(preorder, postorder) {
  if (!preorder.length) return null;
  const root = preorder[0];
  const node = new TreeNode(root);
  const leftLen = postorder.indexOf(preorder[1]) + 1;
  const leftPreTree = preorder.slice(1, leftLen + 1);
  const rightPreTree = preorder.slice(leftLen + 1);
  const leftPostTree = postorder.slice(0, leftLen);
  const rightPostTree = postorder.slice(leftLen, -1);
  node.left = constructFromPrePost(leftPreTree, leftPostTree);
  node.right = constructFromPrePost(rightPreTree, rightPostTree);
  return node;
};