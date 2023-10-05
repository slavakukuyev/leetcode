const MIN_NUM = (-2) ** 31
const MAX_NUM =  2 ** 31 - 1

//alternative way of myAtoi without parseInt
function myAtoi(s: string): number {
    if (!s || !s.length || s.length > 200) return 0

    let sign = 1
    let num = 0;
    let left = 0;

    while (s[left] === " " && left != s.length) {
        left++
    }

    if ((s[left] === "-" ||  s[left] == "+" ) && left != s.length) {
       if (s[left] === "-" ) sign = -1
        left++
    }

    while (s[left] === "0" && left != s.length) {
        left++
    }

    while (/[0-9]/.test(s[left]) && left != s.length) {
       num =  num  * 10 + ( + s[left])
        left++
    }

    if (!num) return 0;

    num = num * sign;
    if(num < MIN_NUM) return MIN_NUM
    if(num > MAX_NUM) return MAX_NUM

    return num
};

export { myAtoi }
