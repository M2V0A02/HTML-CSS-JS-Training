function rowSumOddNumbers(n) {
    const out = Array.from( {length: n * (n + 1) / 2}, (_, i) => i * 2 + 1)

    return out.slice(out.length - n).reduce((sum, current) => sum += current, 0);
}

console.log(rowSumOddNumbers(30000));