const obj = [
  {text: 'hahaha', id: 1},
  {text: 'lalala', id: 2},
];

const convertToJson = JSON.stringify(obj);

console.log(convertToJson);

const convertToObj = JSON.parse(convertToJson);

console.log(convertToObj);
