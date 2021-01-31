function typeofTest(value, test) {
    if (typeof test == "string") {
        console.log("string");
    }
    if (typeof test == "number") {
        console.log("number");
    }
    else {
        console.log(value);
    }
}
typeofTest('ddd', 'www');
