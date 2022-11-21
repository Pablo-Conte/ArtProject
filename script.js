
    var arrayImg = new Array("./img/amarelo.png", "./img/azul.png", "./img/laranja.png", "./img/rosa.png", "./img/roxo.png", "./img/verde.png", "./img/vermelho.png");
    var doingA = ""
    var doingB = ""
    var w = window.screen.width; 
    var h = window.screen.height; 
    var maxElements = 1000;
    var currentElements = 0;
    var degree = 0;


    
    // changes 0 to 360 in a proper way
    function changeDegree(increment){

        if(increment > 0){
            degree = (degree + increment)%360;
        }else{
            degree = (degree + increment + 360)%360;
        }
        document.getElementsByClassName("cat")[0].style.transform = "rotate("+degree+"deg)";
    }
    
    function moveCat(forward){
        var cat = document.getElementsByClassName("cat")[0];
        var x = cat.offsetLeft;
        var y = cat.offsetTop;
        var w = cat.offsetWidth;
        var h = cat.offsetHeight;

        var speed = 2 * forward;
        var angle = degree * Math.PI / 180;
        var dx = speed * Math.cos(angle);
        var dy = speed * Math.sin(angle);
        var newX = x + dx;
        var newY = y + dy;
        // if(newX < 0 || newX > window.innerWidth - w){
        //     changeDegree(180);
        // }
        // if(newY < 0 || newY > window.innerHeight - h){
        //     changeDegree(180);
        // }
        cat.style.left = newX + "px";
        cat.style.top = newY + "px";

        // set the cat to the correct angle in the css
        cat.style.transform = "rotate(" + degree + "deg)";
    }

    function increaseAngle(){
        changeDegree(1);
    }

    function decreaseAngle(){
        changeDegree(-1);
    }
    

    function handleKeysDown(e){

        if(e != null){
            
            
            if(e.key == "ArrowUp"){
                doingB = "up"
                moveCat(1);
            }else if(e.key == "ArrowDown"){
                doingB = "down";
                moveCat(-1);
            }


            if(e.key == "ArrowRight"){
                doingA = "right"
                increaseAngle();
            }else if(e.key == "ArrowLeft"){
                decreaseAngle();
                doingA = "left";
            }




            if(e.key == "Space"){
                // doing = "space";
                splash();
            }
        }else{
            // just updating
            if(doingA == "right"){
                increaseAngle();
            }else if(doingA == "left"){
                decreaseAngle();
            }else if(doingB == "up"){
                moveCat(1);
            }else if(doingB == "down"){
                moveCat(-1);
            }
        }
    }

    function handleKeysUp(e){
        
        if(e.key == "ArrowRight"){
            doingA = ""
        }else if(e.key == "ArrowLeft"){
            doingA = "";
        }
        
        if(e.key == "ArrowUp"){
            doingB = ""
        }else if(e.key == "ArrowDown"){
            doingB = "";
        }       

        if(e.key == "Space"){
            // doingA = "";
        }
    }


    function splash() {
        // this functions chooses a random image from the array
        // it also chooses a random position for the image, a random size, a random rotation (TODO) and a random 

        // if there is too many elements on the screen, it removes the oldest one
        if(currentElements >= maxElements){
            document.getElementsByTagName("img")[0].remove()
            currentElements--
        }

        // random number for the size of the image and the volume of the song
        var rN = Math.random() 
        var pppp = Math.floor(rN * 200) + 100;

        // creating a random position for the image
        let randomPositionW = (Math.floor(Math.random() * (w + pppp))-pppp) + "px";
        let randomPositionH = (Math.floor(Math.random() * (h + pppp))-pppp) + "px";
        
        
        // random numbers between the size of the array 
        var randomNum = Math.floor(Math.random() * arrayImg.length);

        
        // setting the volume according to the size of the image
        var audio = new Audio('./song/splash.mp3');
        audio.volume = rN
        audio.play();

        
        // setting the attributes of the background image
        const para = document.createElement("img");
        para.width = pppp
        para.height = pppp
        para.src = arrayImg[randomNum];
        para.style.top = randomPositionH
        para.style.left = randomPositionW
        para.style.filter = "contrast(0%) contrast(50000) blur(5px)"
        document.body.appendChild(para);
        
        // setting the attributes of the image
        const para2 = document.createElement("img");
        para2.width = pppp
        para2.height = pppp
        para2.src = arrayImg[randomNum];
        para2.style.top = randomPositionH
        para2.style.left = randomPositionW
        document.body.appendChild(para2);

        // increasing the variable that controls the number of elements on the screen
        currentElements++
    }







    function choosePic() {
        // this functions chooses a random image from the array
        // it also chooses a random position for the image, a random size, a random rotation (TODO) and a random 

        // if there is too many elements on the screen, it removes the oldest one
        if(currentElements >= maxElements){
            document.getElementsByTagName("img")[0].remove()
            currentElements--
        }

        // random number for the size of the image and the volume of the song
        var rN = Math.random() 
        var pppp = Math.floor(rN * 200) + 100;

        // creating a random position for the image
        let randomPositionW = (Math.floor(Math.random() * (w + pppp))-pppp) + "px";
        let randomPositionH = (Math.floor(Math.random() * (h + pppp))-pppp) + "px";
        
        
        // random numbers between the size of the array 
        var randomNum = Math.floor(Math.random() * arrayImg.length);

        
        // setting the volume according to the size of the image
        var audio = new Audio('./song/splash.mp3');
        audio.volume = rN
        audio.play();

        
        // setting the attributes of the background image
        const para = document.createElement("img");
        para.width = pppp
        para.height = pppp
        para.src = arrayImg[randomNum];
        para.style.top = randomPositionH
        para.style.left = randomPositionW
        para.style.filter = "contrast(0%) contrast(50000) blur(5px)"
        document.body.appendChild(para);
        
        // setting the attributes of the image
        const para2 = document.createElement("img");
        para2.width = pppp
        para2.height = pppp
        para2.src = arrayImg[randomNum];
        para2.style.top = randomPositionH
        para2.style.left = randomPositionW
        document.body.appendChild(para2);

        // increasing the variable that controls the number of elements on the screen
        currentElements++
    }

     // setting the attributes of the background image
    const gato = document.createElement("img");
    gato.classList.add("cat")
    gato.style.zIndex = "100"
    gato.src = "./img/gato.gif";
    gato.style.top = (h/3) + "px"
    gato.style.left = (w/3) + "px"
    // gato.style.filter = "contrast(0%) contrast(50000) blur(5px)"
    document.body.appendChild(gato);
    document.body.onkeydown = handleKeysDown
    document.body.onkeyup = handleKeysUp 

    setInterval(handleKeysDown, 8);




    // setting the attributes of the background image
    // const back = document.createElement("svg");
    // back.classList.add("black")

    // back.style.zIndex = "50"
    // back.style.top = 0
    // back.style.left = 0
    // back.style.width = w + "px"
    // back.style.height = h + "px"
    // document.body.appendChild(back);

