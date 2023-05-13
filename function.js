/**
 * 打招呼函式
 * @param { object } options 選項
 * @param { string } options.name 名字
 * @param { number } options.age 年齡
 * @returns { string } Hi, ${name}
 * @example
 * sayHi({ name: 'John', age: 18 }); // Hi, John
 */
const sayHi = ({ name, age }) => {
  return `Hi, ${name}，今年 ${age} 歲`;
};

sayHi({ name: 'John', age: 18 });

/**
 * 傳入單純字串
 * @param { string } name 名字
 * @returns { string } Hi, ${name}
 * @example
 * sayHi('John'); // Hi, John
 */
const fnStr = (name) => {
  return `Hi, ${name}`;
}

fnStr('John');

/**
 * 傳入陣列字串
 * @param { string[] } data 名字
 * @returns { void } Hi, ${name}
 * @example
 * sayHi(['John', 'Ray']); // Hi, John
 */
const fnArrStr = (data) => {
  data.forEach((name) => {
    console.log(`Hi, ${name}`);
  });
}

fnArrStr(['John', 'Ray']);
