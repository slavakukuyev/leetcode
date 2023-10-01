class Node1 {
  value: number;
  left: Node1 | null;
  right: Node1 | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: Node1 | null;
  uniqueNumbers: { [key: number]: boolean };

  constructor() {
    this.root = null;
    this.uniqueNumbers = {};
  }

  insert(value: number): void {
    let newNode = new Node1(value);
    if (this.uniqueNumbers[value]) {
      throw new Error('This value already exists in the tree');
    }

    this.uniqueNumbers[value] = true;

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: Node1, newNode: Node1): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

function isCorrectTree(node: Node1 | null, min: number | null, max: number | null, isRoot: boolean = true): boolean {
  if (node === null) {
    return true;
  }

  if (node.left !== null) {

    if (node.left.value > node.value) {
      return false;
    }

    if (!isRoot && (
      (max !== null && node.left.value > max) || (min !== null && node.left.value < min)
    )) {
      return false;
    }
  }

  if (node.right !== null) {

    if (node.right.value < node.value) {
      return false;
    }

    if (!isRoot && (
      (max !== null && node.right.value > max) || (min !== null && node.right.value < min)
    )) {
      return false;
    }
  }

  if (isRoot) {
    if (max === null || max === undefined) {
      max = node.value
    }

    if (min == null || min === undefined) {
      min = node.value
    }
  }




  return isCorrectTree(node.left, null, max, false) && isCorrectTree(node.right, min, null, false);
}

export { BinaryTree, isCorrectTree }
