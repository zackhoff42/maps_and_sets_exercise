new Set([1, 1, 2, 2, 3, 4]); // {1,2,3,4}

[...new Set("referee")].join(""); // 'ref'

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // {Array(3) => true, Array(3) => false}

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

function vowelCount(str) {
    const vowels = 'aeiou';
    const resMap = new Map();

    for (let char of str) {
        let lowerCase = char.toLowerCase();
        if (vowels.includes(lowerCase)) {
            if (resMap.has(lowerCase)) {
                resMap.set(lowerCase, resMap.get(lowerCase) + 1);
            }
            else {
                resMap.set(lowerCase, 1);
            }
        }
    }

    return resMap;
}