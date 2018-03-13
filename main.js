var destination = document.getElementById("main");
var coins = "";
var toss = document.getElementById("toss");
var amount = document.getElementById("input");
var h = 0;
var t = 0;
var heads = document.getElementById("heads").innerHTML = "heads: " + h;
var tails = document.getElementById("tails").innerHTML = "tails: " + t;


var coin = {

    state: 0,

    flip: function () {
        this.state = Math.round(Math.random())
        // randomly set this.state to be either 0 or 1
    },

    toString: function () {
        switch (this.state) {
            case 0:
                h += 1;
                console.log(h);
                return "H";
            case 1:
                t += 1;
                console.log(t);
                return "T";
        }
       
        // return “H” or “T” depending on whether this.state is 0 or 1
    },

    toHTML: function () {
        let img = document.createElement("img");
        let coin = document.createElement("div");

        switch (this.state) {
            case 0:
                img.setAttribute('src', 'images/front.png');
                img.classList.add('front');
                break;

            case 1:
                img.setAttribute('src', 'images/back.png');
                img.classList.add('back');
                break;

        }
        coin.appendChild(img);
        destination.appendChild(coin);
        // set the properties of the image element to show either heads or tails
    }
};

//will flip the amount of coins specified in the input box. 
function coinFlipper(flips) {
    for (let i = 0; i < flips; i++) {
        coin.toString();
        coin.flip();
        coin.toHTML();
    }
   
}


//flips coins when clicked

document.getElementById("toss").onclick = function () {
    destination.innerHTML = '';
    h = 0;
    t = 0;
    console.log("pressed");
    const flips = amount.value;
    coinFlipper(flips);
    heads = document.getElementById("heads").innerHTML = "heads: " + h;
    tails = document.getElementById("tails").innerHTML = "tails: " + t;


}