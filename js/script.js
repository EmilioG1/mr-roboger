// business logic

function looper(num) {
  let array = []
  for(let i = 0; i<= num; i++) {
    array.push(i)
    let strA = array.toString();
    let stSplit = strA.split(",");
    console.log(stSplit);
    if (stSplit.includes("3")) {
      stSplit.replace("3", "Will you be my neighbor?");
    // } else if (strA.includes("2")) {
    //   strA.replace("2", "Boop");
    // } else if (strA.includes("1")) {
    //   strA.replace("1", "Beep");
    }
  }
  return array
};
