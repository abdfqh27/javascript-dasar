function sum(name, ...data){
    let total = 0;
    for(const item of data){
        total += item;
    }
    console.info(`Total ${name} is ${total}`);
}

sum('Oranges',2,3,4,5,6,7,8);

sum('Apples',1,2,3,4,5);

sum('Bananas',10,20,30);

// Spread Syntax di rest Parameter
sum('Orange',...[2,3,4,5,6,7]);
sum('Apple',...[2,3,4,5,6,7]);
sum('Bakso',...[2,3,4,5,6,7]);

const values = [10,20,30];
sum('Apple',...values);
