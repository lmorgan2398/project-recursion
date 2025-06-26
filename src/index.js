function fibs(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            sequence[i] = 0;
        }
        else if (i == 1) {
            sequence[i] = 1;
        } else {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
    }
    return sequence;
}

function fibsRecursive(n) {
    if (n <= 0)
        return [];
    if (n == 1)
        return [0];
    if (n == 2)
        return [0, 1];
    
    let sequence = fibsRecursive(n - 1);

    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}