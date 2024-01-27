const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'Backspace',
        'Enter'];

    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
};

export { blockInvalidChar };