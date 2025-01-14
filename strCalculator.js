function add(numbers) {
    if (numbers === "") return 0;
    let total = 0;
    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n', 2);
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const parts = numbers.split(delimiter);

    parts.forEach(part => {
        if (part) {
            const num = parseInt(part, 10);
            total += num;
        }
    });
    return total;
}

module.exports = add;
