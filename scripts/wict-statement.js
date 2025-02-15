const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

with(person) {
    console.log(name); // Output: John Doe
    console.log(age); // Output: 30
    console.log(city); // Output: New York
}