this.counter = 0;

function count() {
    counter++;
    document.getElementById("h1").innerHTML = "The amount of times you have clicked:" + counter
}

function reset() {
    counter = 0
    document.getElementById("h1").innerHTML = "The amount of times you have clicked:" + counter
    setTimeout(function() {
        alert("Time is up! You clicked " + counter + " times")
    }, 6000);
}

setTimeout(function() {
    alert("Time is up! You clicked " + counter + " times")
}, 6000);