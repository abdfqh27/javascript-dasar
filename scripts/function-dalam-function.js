function outer(){
    function inner(){
        console.log("Hello, I'm an inner function");
    }

    inner();
    inner();
}

outer();
inner();//Eroor