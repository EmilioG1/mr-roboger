// business logic

function looper(num) {
  let array = []
  for(let i = 0; i<= num; i++) {
    array.push(i)
  }
  console.log("look at these numbers " + array);

  array.forEach(function (element) {
    element = array[0];
    console.log(element);

  })
    return array
};


// ui logic