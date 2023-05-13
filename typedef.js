/**
 * @typedef { object } User 選項
 * @property { string } name 名字
 * @property { number } age 年齡
 */

/**
 * 打招呼函式
 * @param { User } user 使用者資料
 * @returns { string } Hi, ${name}
 * @example
 * sayHi({ name: 'John', age: 18 }); // Hi, John
 */
const sayHiFn = ({ name, age }) => {
  return `Hi, ${name}，今年 ${age} 歲`;
};

/**
 * 使用者資料
 * @type { User }
 */
const user = {
  name: 'Ray',
  age: 18,
};

sayHiFn(user)

