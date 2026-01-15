function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';
  num = Number(num);

  // handle subtractive cases manually
  const specials = [
    [900, 'CM'],
    [400, 'CD'],
    [90, 'XC'],
    [40, 'XL'],
    [9, 'IX'],
    [4, 'IV']
  ];

  for (let [value, symbol] of specials) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  for (let i = 0; i <= 6; i++) {
    const [sym, val] = obj[i];
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }

  return result; // ✅ ONLY return
}
