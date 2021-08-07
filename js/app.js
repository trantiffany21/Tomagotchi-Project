//game function
const game = () => {
        //remove submit button
        const submit = document.querySelector("#submit")
        submit.remove()

        //create tomagotchi
        const name = document.querySelector("#name").value
        document.querySelector("h1").innerHTML = name

        const toma = new Tomagotchi(name)

        //feed when clicked
        const feedBtn = document.getElementById('feed')
        feedBtn.addEventListener("click", ()=>toma.feed())

        //play when clicked
        const playBtn = document.querySelector('#play')
        playBtn.addEventListener("click", ()=>toma.play())

        //sleep and turn off lights when clicked
        const sleepBtn = document.querySelector('#sleep')
        sleepBtn.addEventListener("click", ()=>toma.lightsOff())
        

    
}

class Tomagotchi{
    constructor(name){
        this.name = name
        this.hunger = 1
        this.sleep = 1
        this.boredom = 1
        this.age = 0
        this.alive = true
        this.displayStats()
        this.time = 2000
        this.level = 1
        this.start()

    }
    displayStats(){
        if(this.alive === false){
            return false
        }
        const liStats = document.querySelectorAll('#statsList')
        liStats[0].style.borderStyle = "none"
        liStats[0].innerHTML = `Hunger: ${this.hunger}`
        liStats[1].innerHTML = `Boredom: ${this.boredom}`
        liStats[2].innerHTML = `Sleep: ${this.sleep}`
        liStats[3].innerHTML = `Age: ${this.age}`
        console.log("hunger " + this.hunger)
        console.log("boredom " +this.boredom)
        console.log("sleep " + this.sleep)
        
      
    }
    feed(){
        if(this.alive === false){
            return false
        }
        if(this.hunger>1){
            this.hunger--
            this.displayStats()
        }
    }
    play(){
        if(this.alive === false){
            return false
        }
        if(this.boredom>1){
            this.boredom--
            this.displayStats()
        }
    }
    lightsOff(){
        if(this.alive === false){
            return false
        }
        if(this.sleep>1){
            this.sleep--
            const screen = document.querySelector('#screen')
            screen.id = "screen-sleep";
            setTimeout(function(){
                screen.id = "screen"
                },1000);
                this.displayStats()
            }
    }
    ageUp(){
        if(this.alive === false){
            this.clear()
            return false
        }
        this.age++
        this.displayStats()

    }
    evolveCheck(){
        const img = document.querySelector("img")
        console.log(img.src)
        if(this.age >=32 && this.level === 2){
            img.src = "images/charizard.png"
            const liStats = document.querySelectorAll("#statsList")
            liStats[0].innerHTML =`${this.name.toUpperCase()} evolved into CHARIZARD`
            liStats[0].style.borderStyle = "double"
            liStats[0].style.borderColor = "black"
            liStats[1].innerHTML = ""
            liStats[2].innerHTML = ""
            liStats[3].innerHTML = ""
            this.level = 3
            this.time = 500
            this.restart()
            return true;
        }else if(this.age >= 16 && this.level === 1){
            const liStats = document.querySelectorAll("#statsList")
            img.src = "images/charmeleon.png"
            img.style.height = (img.clientHeight + 10) + "px"
            liStats[0].innerHTML =`${this.name.toUpperCase()} evolved into CHARMELEON`
            liStats[0].style.borderStyle = "double"
            liStats[0].style.borderColor = "black"
            liStats[1].innerHTML = ""
            liStats[2].innerHTML = ""
            liStats[3].innerHTML = ""
            this.level = 2
            this.time = 1000
            this.restart()
            return true; 
        }
        return false;

    }
    hungerUp(){
        if(this.alive === true){
            this.hunger++
            if(this.hunger >=10){
                this.gameOver("hunger")
            }
        }
    }
    sleepUp(){
        if(this.alive === true){
            this.sleep++
            if(this.sleep >=10 ){
                this.gameOver("fatigue")
            }
        }
    }
    boredomUp(){
        if(this.alive === true){
            this.boredom++
            if(this.boredom >=10 ){
                this.gameOver("boredom")
            }
        }
    }
    game(){
        if(this.alive === false){
            return false
        }
        //select random stat to increase
        const randMethod = Math.floor(Math.random()*4)
        
        if(randMethod === 0 ){
            this.hungerUp()
            this.animate()
        }else if(randMethod === 1){
            this.sleepUp()
            this.animate()
        }else{
            this.boredomUp()
            this.animate()
        }
        if(this.alive === true){
            if(this.evolveCheck() === true){
                 setTimeout(()=> this.displayStats(), 3000)
             }else{
                this.displayStats()
            }
        }
    }

    gameOver(reason){
        // alert(`${this.name} has died of ${reason}!`)
        const liStats = document.querySelectorAll("#statsList")
        liStats[0].innerHTML =`${this.name.toUpperCase()} HAS DIED OF ${reason.toUpperCase()}! GAME OVER`
        liStats[1].innerHTML = ""
        liStats[2].innerHTML = ""
        liStats[3].innerHTML = ""
        document.querySelector("img").src = "images/gameover.png"
        document.querySelector("img").style.height = "150px";
        document.querySelector("#feed").disabled = true
        console.log(document.querySelector("#feed"))
        document.querySelector("#play").disabled = true
        document.querySelector("#sleep").disabled = true
        this.alive = false
        // clearInterval(this.statChange)
        this.clear()
    }

    animate(){
        const imgBox = document.querySelector("#img-box")
        const justify = ['flex-start', 'flex-end', 'center']
        const align = ['flex-start', 'flex-end', 'center']
        const rand1 = Math.floor(Math.random()*3)
        const rand2 = Math.floor(Math.random()*3)
        imgBox.style['justify-content'] = justify[rand1]
        imgBox.style['align-items'] = align[rand2]
    }
    start(){
        this.aging = setInterval(()=>this.ageUp(),2500)
        this.statChange = setInterval(()=>this.game(),this.time)
    }
    restart(){
        // clearInterval(this.statChange)
        clearInterval(this.statChange)
        this.statChange = setInterval(()=>this.game(),this.time)
    }
    clear(){
        clearInterval(this.aging)
        clearInterval(this.statChange)
    }

}




