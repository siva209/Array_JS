var myArray = new Array();
for (var i = 1; i < 100; i++) {
    if (i % 11 == 0) {
        myArray.push(i);
    }
}
myArray.forEach(i => console.log(i));