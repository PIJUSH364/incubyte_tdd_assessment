function add(numbers) {
    if (numbers === "") return 0;
    const parts = numbers.split("");
    return parseInt(parts[0])

}

module.exports = add;
