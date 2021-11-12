    import Game from "./game.js";

    
    window.onload = () => {

    let myGame = new Game();
    myGame.init();
    
    document.onkeydown = (e) => {

            const key = e.keyCode ;
            if( myGame.lost === true && key == 32){
                   myGame.lunch();
            }

            let newDirection;

            switch(key){
                case 37:
                        newDirection = 'left'
                        break;
                case 38:
                        newDirection = 'up'
                        break;
                case 39:
                        newDirection = 'right'
                        break;  
                case 40:
                        newDirection = 'down'
                        break;  
                    
                default:
                        return;      

            }
            myGame.serpent.setDirection(newDirection);

    };

    

    
}


