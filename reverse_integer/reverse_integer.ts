const MIN_NUM = (-2) ** 31
const MAX_NUM = 2 ** 31 - 1

function reverseInteger(x: number): number {
  if (!x || !Number.isInteger(x) || x < MIN_NUM || x > MAX_NUM) return 0

  let sign = 1
  if (x < 0) {
    sign = -1
    x = x * -1
  }

  let arr = ("" + x).split('');
  let left = 0
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }

  x = parseInt(arr.join('')) * sign
  if (x < MIN_NUM || x > MAX_NUM) {
    return 0
  }

  return x
};

export { reverseInteger }
