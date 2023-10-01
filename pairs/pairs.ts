export function pairs(numbers: Array<number> | null, sum: number): number {
    if (!Array.isArray(numbers) || !numbers.length) {
        return 0;
    }

    if (numbers.length === 1) {
        return 0;
    }

    if (numbers.length === 2 && numbers[0] + numbers[1] === sum) {
        return 1;
    }

    let k = 0;
    const map = new Map();
    numbers.forEach((value) => {
        let requiredNumber = sum - value
        if (!map.has(requiredNumber)) {
            map.set(value, 1)
            return
        }

        k++
        let num = map.get(requiredNumber)
        num--;
        if (num == 0) map.delete(requiredNumber)
    });

    return k
}
