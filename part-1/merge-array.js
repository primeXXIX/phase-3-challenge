module.exports = function mergeArray(a, b) {
  let result = []
  a.map((v, i) => {
    result.push(a[i])
    result.push(b[i])
    return result
  })
}
