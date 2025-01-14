function add(numbers) {
    if (numbers === "") return 0;
    let total = 0;
    let delimiter = /,|\n/;
    const negatives = [];

    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n', 2);
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const parts = numbers.split(delimiter);

    parts.forEach(part => {
        if (part) {
            const num = parseInt(part, 10);
            if (num < 0) negatives.push(num);
            total += num;
        }
    });
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
    return total;
}

module.exports = add;
