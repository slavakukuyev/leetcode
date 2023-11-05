import { quickSort } from './quick_sort';
import { bubbleSort } from './bubble_sort'; 

describe('quickSort', () => {

    let funcs = [quickSort, bubbleSort];
    for(let f of funcs) {

    // Sorts an array of positive integers in ascending order
    it('should sort an array of positive integers in ascending order', () => {
        const arr = [5, 2, 8, 1, 9];
        const sortedArr = f(arr);
        expect(sortedArr).toEqual([1, 2, 5, 8, 9]);
    });

    // Sorts an array of negative integers in ascending order
    it('should sort an array of negative integers in ascending order', () => {
        const arr = [-5, -2, -8, -1, -9];
        const sortedArr = f(arr);
        expect(sortedArr).toEqual([-9, -8, -5, -2, -1]);
    });

    // Sorts an array of mixed positive and negative integers in ascending order
    it('should sort an array of mixed positive and negative integers in ascending order', () => {
        const arr = [-5, 2, -8, 1, -9];
        const sortedArr = f(arr);
        expect(sortedArr).toEqual([-9, -8, -5, 1, 2]);
    });

    // Sorts an empty array
    it('should return an empty array when sorting an empty array', () => {
        const arr: Array<number> = [];
        const sortedArr = f(arr);
        expect(sortedArr).toEqual([]);
    });
}
});
