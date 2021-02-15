module.exports = function reverse(n) {
    if (n.toString().includes('-')) {
        n = n.toString().replace('-', '')
        return Number(n.toString().split('').reverse().join(""))
    } else {
        return Number(n.toString().split('').reverse().join(""))
    }

}
