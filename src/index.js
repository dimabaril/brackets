module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) {
        return false;
    }
    let inArr = str.split("");
    console.log(inArr);
    let acc = [];
    for (i = 0; i < inArr.length; i++) {
        for (j = 0; j < bracketsConfig.length; j++) {
            if (
                inArr[i] === bracketsConfig[j][0] &&
                bracketsConfig[j][0] === bracketsConfig[j][1]
            ) {
                if (inArr[i] === acc[acc.length - 1]) {
                    acc.pop();
                } else {
                    acc.push(inArr[i]);
                }
            } else if (inArr[i] === bracketsConfig[j][0]) {
                acc.push(inArr[i]);
                console.log(acc);
            } else if (
                inArr[i] === bracketsConfig[j][1] &&
                acc[acc.length - 1] === bracketsConfig[j][0]
            ) {
                acc.pop();
                console.log(acc);
            } else if (inArr[i] === bracketsConfig[j][1] && acc.length === 0) {
                return false;
            }
        }
    }
    return !Boolean(acc.length);
};
