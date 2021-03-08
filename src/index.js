module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let brackets = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
    for (let i = 0; i < str.length; i++) {
        let bracket = str[i];
        if (Object.values(brackets).includes(bracket)) {
            if (
                brackets[bracket] === bracket &&
                stack[stack.length - 1] === brackets[bracket]
            ) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        } else {
            if (stack.pop() !== brackets[bracket]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
