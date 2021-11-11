function highestRank(arr) {
  //Your Code logic should written here
  let map = {};
  let mostFrq = arr[0];
  let maxCount = 1;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (map[element] == null) map[element] = 1;
    else map[element]++;
    if (map[element] > maxCount) {
      mostFrq = element;
      maxCount = map[element];
    }
  }
  return mostFrq;
}
