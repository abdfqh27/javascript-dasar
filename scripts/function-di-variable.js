function sayHello(name){
    console.info(`Hello ${name}`);
}
sayHello("Faqih");

let say = sayHello;
say("Abdullah");

function giveMeName(callback){
    callback("Ame");//sayHello("Ame");
}

giveMeName(sayHello);
giveMeName(say);