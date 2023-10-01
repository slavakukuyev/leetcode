import { is } from "@babel/types";

const illion = new Map<number, string>([
    [10, "nonillion"],
    [9, "octillion"],
    [8, "septillion"],
    [7, "sextillion"],
    [6, "quintillion"],
    [5, "quadrillion"],
    [4, "trillion"],
    [3, "billion"],
    [2, "million"],
    [1, "thousand"]
])

const singles = new Map<string, string>([
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
    ["4", "four"],
    ["5", "five"],
    ["6", "six"],
    ["7", "seven"],
    ["8", "eight"],
    ["9", "nine"],
]);

const teens = new Map<string, string>([
    ["0", "ten"],
    ["1", "eleven"],
    ["2", "twelve"],
    ["3", "thirteen"],
    ["4", "fourteen"],
    ["5", "fifteen"],
    ["6", "sixteen"],
    ["7", "seventeen"],
    ["8", "eighteen"],
    ["9", "nineteen"],
]);

const decades = new Map<string, string>([
    ["2", "twenty"],
    ["3", "thirty"],
    ["4", "forty"],
    ["5", "fifty"],
    ["6", "sixty"],
    ["7", "seventy"],
    ["8", "eighty"],
    ["9", "ninety"],
]);

function cleanAndSplit(str: string): Array<string> {
    let arr = str.replace(/[ ,]/g, "").split("")
    while (arr[0] === "0") {
        arr.shift()
    }

    return arr.reverse()
}

function valid(str: string): boolean {
    if (!str || typeof str !== "string") {
        return false
    }

    str = str.replace(/[0-9 \-,]/g, "")
    if (str.length) {
        return false
    }

    return true
}


function numberInWords(str: string): string {
    if (str === "0") {
        return "zero"
    }

    if (!valid(str)) {
        return "Invalid input"
    }

    let arr = cleanAndSplit(str);
    let words: Array<string> = [];

    let isNegative = false;
    if (arr.length > 1 && arr[arr.length - 1] === "-") {
        isNegative = true;
        arr.pop()
    }

    let counterIllions = 0;
    let three: Array<string> = []

    for (let i = 0; i < arr.length; i++) {

        if (three.length === 3) {
            words.unshift(...parseThreeNumbers(three, counterIllions))
            counterIllions++
            three = [];
        }


        three.push(arr[i])
    }

    if (three.length) {
        words.unshift(...parseThreeNumbers(three, counterIllions))
    }

    if (isNegative) {
        words.unshift("negative")
    }

    return words.join(" ").trim()

}

//432  -> two hundred thirthy four
function parseThreeNumbers(three: Array<string>, counterIllions: number): Array<string> {
    let words: Array<string> = []

    if (three[2] && three[2] !== "0") {
        words.push(singles.get(three[2]) || "")
        words.push("hundred")
    }

    if (three[1] && three[1] !== "0") {
        if (three[1] === "1") {
            words.push(teens.get(three[0]) || "")
            three[0] = "0"
        } else {
            words.push(decades.get(three[1]) || "")
        }
    }

    if (three[0] && three[0] !== "0") {
        words.push(singles.get(three[0]) || "")
    }

    if (words.length && illion.has(counterIllions)) {
        words.push(illion.get(counterIllions) || "")
    }

    return words
}

export { numberInWords };
