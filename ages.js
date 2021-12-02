function findSenior(list) {
  let oldest = 0;

  for (let j = 0; j < list.length; j++) {
    if (list[j].age > oldest) {
      oldest = list[j].age;
    }
  }
  const result = list.filter((ele) => {
    return ele.age === oldest;
  });
  return result;
}
