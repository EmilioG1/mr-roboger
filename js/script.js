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


let rogers = [];

function looper(num) {
  let array = []
  for (let i = 0; i <= num; i++) {
    array.push(i)
    let arr2 = array.toString();
    if (arr2.includes("3")) {
      rogers.push("Will you be my neighbor?");
    }
  }
  return rogers
};

// take array, iterate through array find if number is included in array list, take those values and set them to strings, replace strings with words.