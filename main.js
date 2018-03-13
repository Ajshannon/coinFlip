var destination = document.getElementById("main");
var coins = "";
var toss = document.getElementById("toss");
var amount = document.getElementById("input");
var coin = {
    state: 0,
    

    flip: function () {

        this.state = (Math.floor(Math.random() * 2))
        
        // randomly set this.state to be either 0 or 1
    },
    toString: function () {
        switch (this.state) {
            case 0:
                return "H";
                
            case 1:
                return "T";
                
        }
        
        // return “H” or “T” depending on whether this.state is 0 or 1

    },
    toHTML: function () {
        let sideState = this.toString();
        let img = document.createElement("img");
        img.classList.add('coin');
        let coin = document.createElement("div");

        console.log(sideState);
        switch (sideState) {
            case "H":

                img.setAttribute('src', 'images/front.png');
                coin.appendChild(img);
                destination.appendChild(coin);
                break;

            case "T":

                img.setAttribute('src', 'images/back.png');
                coin.appendChild(img);
                destination.appendChild(coin);
                break;
        }
        // set the properties of the image element to show either heads or tails
    }
};

//will flip the amount of coins specified in the input box. 
function coinFlipper(flips) {
    for (let i = 0; i < flips; i++) { 
        coin.flip();
        coin.toHTML();
    }
}


//flips coins when clicked

document.getElementById("toss").onclick = function () {
    destination.innerHTML = '';
    console.log("pressed");
    const flips = amount.value;
    coinFlipper(flips);
}