const date = new Date();
const [month, day, year] = [
  date.getMonth()+1,
  date.getDate(),
  date.getFullYear(),
];
const todayDate = `${year}年${month}月${day}日`;
console.log(todayDate);