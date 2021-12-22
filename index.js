
    function writeCards(friends, events) { 
        let arr = [];
        for (let i = 0; i < friends.length; i++) {
        arr = [...arr,`Thank you, ${friends[i]}, for the wonderful ${events} gift!`];
        }
        return arr;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown() {
    let count = 10; 
    while (count > -1) {
    console.log(count--)
    }
}

countDown();
