function imageTypeRegExp(input) {
    let regex = /image/g;
    return regex.test(input);
}

console.log(useRegex("angoajsdnjofasD: json/jpg"))
