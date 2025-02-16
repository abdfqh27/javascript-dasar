function register(name, gender = "UNKNOWN"){
    console.log(name);
    console.log(gender);
}

register("John Doe", "MALE"); // Output: John Doe, MALE

register("Jane Doe"); // Output: Jane Doe, UNKNOWN
register("Faqih", undefined)