// business logic

function looper(num) {
  let array = []
  let finalArray = []
  for(let i = 0; i <= num; i++) {
    array.push(i)
  }
  let newArray = array.toString().split(",")
  newArray.forEach(function(item) {
    let ar = [item]
    ar.forEach(function(char) {
      if(char.includes("3")) {
        finalArray.push("Won't you be my Neighbor")
      } else if(char.includes("2")) {
        finalArray.push("Boop")
      } else if(char.includes("1")) {
        finalArray.push("Beep")
      } else {
        finalArray.push(item)
      }

    })
  })
  return finalArray
}

console.log(looper(100))



// ui logic

$(document).ready(function () {
  $("form#neighbor").submit(function (event) {
    event.preventDefault();
    const robo = $("input#num").val();
    const output = looper(robo);
    $("#tell").text(output);
    
  });
});
