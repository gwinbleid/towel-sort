
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return  [];

    return matrix.map((item, index) => {
        if (index % 2 === 0) {
            return item.sort((a, b) => a - b);
        } else {
            return item.sort((a, b) => b - a);
        }
    }).reduce((a, b) => a.concat(b));
}
