function isLanguageDiverse(list) { //this passed once
  // thank you for checking out the Coding Meetup kata :)
  let js = 0;
  let p = 0;
  let ruby = 0;
  let res = true;

  for (let i = 0; i < list.length; i++) {
    if (list[i].language === "Ruby") {
      ruby += 1;
    }
    if (list[i].language === "Python") {
      p += 1;
    }
    if (list[i].language === "JavaScript") {
      js += 1;
    }
  }
  if (js >= 3 || p >= 3 || ruby >= 3) {
    return (res = false);
  }
  return res;
  //console.log(js, p, ruby);
}
