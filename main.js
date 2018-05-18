console.log("hello coinflip")
let currentCoin = ""
let newSpan = document.createElement("div");
document.body.appendChild(newSpan)

var coin = {
    state: 0,
    flip: function() {
        
        this.state = Math.floor(Math.random()* 2) 
        console.log("Flip: creates random number 0 or 1 and assigns to this.state",this.state)
        // randomly set this.state to be either 0 or 1
        
    },
    
    toString: function() {
        
            coin.flip()
        switch(this.state){
            case 0:
            currentCoin = "H"
            let displayHead = document.createTextNode(currentCoin)
            newSpan.appendChild(displayHead)
            console.log("returns H if this.state is 0", currentCoin)
            //return "H"
            break;

            case 1:
            currentCoin = "T"
            let displayTail = document.createTextNode(currentCoin)
            newSpan.appendChild(displayTail)
            console.log("returns T if this.state is 1", currentCoin)
            //return "T"
            break;
            
         
    }
        // return “H” or “T” depending on whether this.state is 0 or 1
    },
    toHTML: function() {
        var img = document.createElement("img")
        
        img.classList.add("coinSize")
        switch(currentCoin){
            case "H":
            img.src = "Dogecoin.jpg";
            document.body.appendChild(img)
            break;

            case "T":
            img.src = "tails.png"
            document.body.appendChild(img)
            break;
        }
    
        // set the properties of the image element to show either heads or tails
        return img;
        
        
    }
};

for( let i = 0; i < 20; i++){
coin.flip()
coin.toString()
coin.toHTML()
}


