// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return []
    } else {
        return matrix.reduce((acc, el, i) => {
            if (i % 2 === 0) acc.push(...el)
            else acc.push(...el.reverse())
            return acc
        }, [])
    }

}
