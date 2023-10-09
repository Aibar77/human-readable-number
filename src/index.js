module.exports = function toReadable(num) {
    const belowTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (num < 20) {
        return belowTwenty[num];
    } else if (num < 100) {
        const ten = Math.floor(num / 10);
        const remainder = num % 10;
        return tens[ten] + (remainder > 0 ? " " + belowTwenty[remainder] : "");
    } else {
        const hundred = Math.floor(num / 100);
        const remainder = num % 100;
        return (
            belowTwenty[hundred] +
            " hundred" +
            (remainder > 0 ? " " + toReadable(remainder) : "")
        );
    }
};
