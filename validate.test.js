const {checkNameExists, checkEmailExists, checkEmailUSIU, checkPassword, checkRoom, calculatePrice, calculatePrices, calculateTotal} = require('./validate');     

//check if name exists (2 tests)
test('checkNameExists: eadwera does not exist', () => {
    expect(checkNameExists('eadwera')).toBe("Name doesn't exist!");
});
test('checkNameExists: nsalim does exist', () => {
    expect(checkNameExists('nsalim')).toBe("Name already exists!");
});  

//check if email exists (2 tests)
test('checkEmailExists: thisemail@usiu.ac.ke does not exist', () => {
    expect(checkEmailExists('thisemail@usiu.ac.ke')).toBe("Email doesn't exist!");
});
test('checkEmailExists: nsalim@usiu.ac.ke does exist', () => {
    expect(checkEmailExists('nsalim@usiu.ac.ke')).toBe("Email already exists!");
}); 

//check if email is a USIU email (2 tests)
test('checkEmailUSIU: nsalim@usiu.ac.ke is the right format', () => {
    expect(checkEmailUSIU('nsalim@usiu.ac.ke')).toBe("Valid email!");
});
test('checkEmailUSIU: nsalim@google.com is the wrong format', () => {
    expect(checkEmailUSIU('nsalim@google.com')).toBe("Invalid email!");
}); 

//check if password is at least 8 characters (3 tests)
test('checkPassword: 1234 is less than 8 characters long', () => {
    expect(checkPassword('1234')).toBe("Wrong!");
});
test('checkPassword: 12345678 is 8 characters long', () => {
    expect(checkPassword('12345678')).toBe("Right!");
}); 
test('checkPassword: 123456789 is more than 8 characters long', () => {
    expect(checkPassword('123456789')).toBe("Right!");
}); 

//check if room is a valid number
test('checkRoom: 99 is not a valid room', () => {
    expect(checkRoom(99)).toBe("Wrong!");
});
test('checkRoom: 999 is not a valid room', () => {
    expect(checkRoom(999)).toBe("Wrong!");
});
test('checkRoom: 801 is a valid room', () => {
    expect(checkRoom(801)).toBe("Right!");
});
test('checkRoom: 8010 is not a valid room', () => {
    expect(checkRoom(8010)).toBe("Wrong!");
});

//check if price and items are a valid number, then calculates total
test('calculatePrice: Kshs. 100 by three items (items of value string)', () => {
    expect(calculatePrice(100, "3")).toBe("Input numbers only!");
});
test('calculatePrice: Kshs. three hundred by 5 items (price of value string)', () => {
    expect(calculatePrice("300", 5)).toBe("Input numbers only!");
});
test('calculatePrice: Kshs. two hundred by ten items (price and items of value string)', () => {
    expect(calculatePrice("200", "10")).toBe("Input numbers only!");
});
test('calculatePrice: Kshs. 100 by 3 items (valid)', () => {
    expect(calculatePrice(100, 3)).toBe(300);
});
test('calculatePrice: Kshs. -10 by 10 items (negative price)', () => {
    expect(calculatePrice(-10, 10)).toBe("Invalid price!");
});
test('calculatePrice: Kshs. 0 by 10 items (price at 0)', () => {
    expect(calculatePrice(0, 10)).toBe("Invalid price!");
});
test('calculatePrice: Kshs. 1000000 by 10 items (unrealistic price)', () => {
    expect(calculatePrice(1000000, 10)).toBe("Invalid price!");
});
test('calculatePrice: Kshs. 1400 by 0 items (valid but 0 items)', () => {
    expect(calculatePrice(1400, 0)).toBe(0);
});
test('calculatePrice: Kshs. 250 by -1 items (negative items)', () => {
    expect(calculatePrice(250, -1)).toBe("Invalid number of items!");
});
test('calculatePrice: Kshs. 450 by 15 items (unrealistic items)', () => {
    expect(calculatePrice(450, 15)).toBe("Invalid number of items!");
});

//check if the arrays of prices and items are valid, then returns an array of total
test('calculatePrices: Kshs. seven hundred by 4 items (not arrays with price as a string)', () => {
    expect(calculatePrices("700", 4)).toBe("Not arrays!");
});
test('calculatePrices: Kshs. 800 by two items (not arrays with price as a string)', () => {
    expect(calculatePrices(800, "two")).toBe("Not arrays!");
});
test('calculatePrices: Kshs. 40 by 9 items (not arrays with price nad items as numbers)', () => {
    expect(calculatePrices(40, 9)).toBe("Not arrays!");
});
test('calculatePrices: [Kshs. 100, Kshs. 50] by [1, 2, 3] items (different size arrays)', () => {
    expect(calculatePrices([100, 50], [1, 2, 3])).toBe("Wrong array sizes!");
});
test('calculatePrices: [Kshs. 300, Kshs. 20, Kshs. 90] by [5, three, 1] items (items of value string)', () => {
    expect(calculatePrices([300, 20, 90], [5, "3", 1])).toBe("Input numbers only!");
});
test('calculatePrices: [Kshs. 10, Kshs. 20, Kshs. one hundred] by [5, 3, 1] items (price of value string)', () => {
    expect(calculatePrices([10, 20, "100"], [5, 3, 1])).toBe("Input numbers only!");
});
test('calculatePrices: [Kshs. 50, Kshs. two hundred, Kshs.30] by [ten, one, three] items (price and items of value string)', () => {
    expect(calculatePrices([50, "200", 30], ["10", "1", "3"])).toBe("Input numbers only!");
});
test('calculatePrices: [Kshs. 100, Kshs. 40] by [3, 5] items (valid)', () => {
    expect(calculatePrices([100, 40], [3, 5])).toStrictEqual([300, 200]);
});
test('calculatePrices: [Kshs. 50, Kshs. -10] by [10, 5] items (negative price)', () => {
    expect(calculatePrices([50, -10], [10, 5])).toBe("Invalid price!");
});
test('calculatePrices: [Kshs. 30, Kshs. 0] by [2, 8] items (price at 0)', () => {
    expect(calculatePrices([30, 0], [2, 8])).toBe("Invalid price!");
});
test('calculatePrices: [Kshs. 1000000, Kshs.100] by [5, 4] items (unrealistic price)', () => {
    expect(calculatePrices([1000000, 100], [5, 4])).toBe("Invalid price!");
});
test('calculatePrices: [Kshs. 1400, Kshs. 1,200, Kshs. 500] by [10, 0, 4] items (valid but one item is at 0)', () => {
    expect(calculatePrices([1400, 1200, 500], [10, 0, 4])).toStrictEqual([14000, 0, 2000]);
});
test('calculatePrices: [Kshs. 250, Kshs. 50] by [-1, -4] items (negative items)', () => {
    expect(calculatePrices([250, 50], [-1, -4])).toBe("Invalid number of items!");
});
test('calculatePrices: [Kshs. 450] by [15] items (unrealistic items)', () => {
    expect(calculatePrices([450], [15])).toBe("Invalid number of items!");
});

//check if checkTotal has numbers array only to calculate the total sum
test('calculateTotal: Kshs. 450 (not an array)', () => {
    expect(calculateTotal(450)).toBe("Not an array!");
});
test('calculateTotal: [Kshs. 450, Kshs. ninety] (string value in array)', () => {
    expect(calculateTotal([450, "90"])).toBe("Input numbers only!");
});
test('calculateTotal: [Kshs. 450, Kshs. 90] (valid array)', () => {
    expect(calculateTotal([450, 90])).toBe(540);
});
test('calculateTotal: [Kshs. 4500, Kshs. 9000, Kshs. 7000, Kshs. 5000] (too expensive for a student)', () => {
    expect(calculateTotal([4500, 9000, 7000, 5000])).toBe("Too expensive!");
});