// We are going to create our own custom modules in node using nodeJs. The purpose of creating our own modules is to help other creators to use them in their code which can help them.

console.log("This is module")

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports = average;

// we can also create an object and make it as a module.

module.exports = {
    avg: average,
    name: "Dipanshu",
    repo: "Github"
}

// in the same way we can export multiple objects and create our own modules with the help of NodeJs, 
// There is another method to call the above object 

module.exports.name = "Hrithik";