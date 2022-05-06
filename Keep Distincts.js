// Given a string S. Your task is to remove all duplicates characters from the string S

// NOTE:

// 1.) Order of characters in output string should be same as given in input string.

// 2.) String S contains only lowercase characters ['a'-'z']

// Note : You have to take the input yourself


function remove(str){

    let obj = {};
    bag = "";
    for(i=0; i<str.length; i++){
        let key = str[i]
        if (obj[key]===undefined){
            obj[key]=1;
        bag = bag + key
        }else{
            obj[key]++
        }
    }
    console.log(bag);
}


function runProgram(input) {
    remove(input);
 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}