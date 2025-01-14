function add(numbers) {
    if (numbers === "") return 0;

    let total = 0;
    const parts = numbers.split("");

    parts.forEach(ele => {
        total += ele
    });

    return total

}

module.exports = add;
