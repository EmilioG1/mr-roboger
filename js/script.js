// business logic

let rogers = [];

function looper(num) {
  let array = []
  for (let i = 0; i <= num; i++) {
    array.push(i)
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
  }
  return rogers
}

// ui logic

$(document).ready(function () {
  $("form#neighbor").submit(function (event) {
    event.preventDefault();
    let output = looper("#num");
    $("#tell").text(output);
    
  });
});
