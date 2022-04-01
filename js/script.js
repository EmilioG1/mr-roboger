// business logic
// let userIn = input.toString()

// function arrayFinder(val) {
//   let array = [];
//   for (let i = 0; i <= val; i++) {
//     array.push(i)
//   } if ("3" === array) {
//     arr2.push(replace(num, "Will you be my neighbor?"))
//     console.log(num)

//   } 
//   return array
// }




function looper(num) {
  let array = []
  let rogers = [];
  for (let i = 0; i <= num; i++) {
    array.push(i)
  }
  let arr2 = array.toString().split(",")
  arr2.forEach(function (element) {
    if (arr2.includes("3")) {
      rogers.push(element.replace("3", "Will you be my neighbor?"));
    } else if (element.includes("2")) {
      rogers.push(element.replace("2", "Boop"));
    } else if (element.includes("1")) {
      rogers.push(element.replace("1", "Beep"));
    } else {
      rogers.push(element)
    }
  });
  return rogers
};


// take array, iterate through array find if number is included in array list, take those values and set them to strings, replace strings with words.