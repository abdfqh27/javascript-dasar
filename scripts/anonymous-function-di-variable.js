let say = function (name){
    console.info(`Hello ${name}`);
}

say("John Doe"); // Output: Hello John Doe

//anonymous function di parameter
function giveMeName(callback){
    callback("John Doe");
}
giveMeName(say);

giveMeName(function(name){
    document.writeln(`<p> Hi ${name}</p>`)
});