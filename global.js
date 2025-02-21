console.log(__dirname)
console.log(__filename)

setTimeout(() => {
    console.log('Hello, World!');
    }, 1000);



let num = 0
 const timer = setInterval(() => {
    num+=2;
    console.log(num,' Hello, World!');

    if (num >= 5){
    clearInterval(timer);
    }
}
    , 1000);
