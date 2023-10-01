import { BinaryTree, isCorrectTree } from './binary_tree';

describe('BinaryTree', () => {

    it('should be correct tree', () => {
        const tree = new BinaryTree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(8);

        expect(isCorrectTree(tree.root, null, null)).toBe(true);
    });

    it('should be incorrect tree', () => {
        const tree = new BinaryTree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(8);
        tree.root!.left!.left!.value = 10;

        expect(isCorrectTree(tree.root, null, null)).toBe(false);
    });

    it('should be incorrect tree', () => {
        const tree = new BinaryTree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(8);
        tree.root!.left!.right!.value = 1;

        expect(isCorrectTree(tree.root, null, null)).toBe(false);
    });

    it('should be incorrect tree', () => {
        const tree = new BinaryTree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(8);
        tree.root!.right!.left!.value = 9;

        expect(isCorrectTree(tree.root, null, null)).toBe(false);
    });

    it('should be incorrect tree', () => {
        const tree = new BinaryTree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(8);
        tree.root!.right!.right!.value = 1;

        expect(isCorrectTree(tree.root, null, null)).toBe(false);
    });

    it('should be incorrect tree', () => {
        const tree = new BinaryTree();
        tree.insert(14);
        tree.insert(5);
        tree.insert(20);
        tree.insert(17);
        tree.insert(2);
        tree.insert(3);
        tree.insert(8);
        tree.root!.left!.right!.value = 16;

        expect(isCorrectTree(tree.root, null, null)).toBe(false);
    });

    it('should throw an exception on the same number insertion', () => {
        const tree = new BinaryTree();
        let error = null;
        try {
        tree.insert(5);
        tree.insert(5);
        } catch (e) {
            error = e
        }
        expect(error).not.toBe(null);
    });

});
