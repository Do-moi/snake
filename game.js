import Snake from "./snake.js";
import Drawing from "./drawing.js";
import Apple from "./apple.js";

export default class Game {
    constructor(canvasWidth = 900, canvasHeight = 600) {

         this.canvasWidth = canvasWidth;
         this.canvasHeight = canvasHeight;
         this.blockSize = 20;
         this.canvas = document.createElement('canvas');
         this.ctx = this.canvas.getContext('2d');
         this.widthBlocks = this.canvasWidth / this.blockSize;
         this.heightBlocks = this.canvasHeight / this.blockSize;
         this.centerX = this.canvasWidth / 2;
         this.centerY = this.canvasHeight / 2;
         this.delay = 200;
         this.serpent;
         this.pomme; 
         this.pommeRouge;
         this.score;
         this.timeOut;
         this.lost = false;

    }
     init () {
 
     this.canvas.width = this.canvasWidth;
     this.canvas.height = this.canvasHeight;
     this.canvas.style.border = "30px solid grey";
     this.canvas.style.margin = "50px auto";
     this.canvas.style.display = 'block'
     this.canvas.style.backgroundColor = "#ddd";
     document.body.appendChild(this.canvas);
     this.lunch()
     this.refreshCanvas();

     };


     lunch () {
         
             this.serpent = new Snake( 'right', [6,4], [5,4], [4,4], [3,4], [2,4] );
             this.pomme = new Apple();
             this.pommeRouge = new Apple([10, 5]);
             this.score = 0;
             this.lost = false;
             this.delay = 200;
             clearTimeout(this.timeOut); 
             this.refreshCanvas();  
     };
 
     refreshCanvas () {
             
             this.serpent.advance();

             if( this.serpent.checkCollision(this.widthBlocks,  this.heightBlocks, this.lost) ){
                 
                 this.lost = true;
                 Drawing.gameOver( this.ctx, this.centerX , this.centerY );
                
             } else {
                 if( this.serpent.isEatingApple(this.pomme)){
                     this.score ++;
                     this.serpent.ateApple = true;
                     do {
                         this.pomme.setNewPosition(this.widthBlocks, this.heightBlocks); 
                        
                     } while( this.pomme.isOnSnake(this.serpent));
                     if (this.score % 3 == 0){
                         this.speedUp()
                     };
                     
                 }
                 if( this.serpent.isEatingAppleRed(this.pommeRouge)){
                     if(this.score !== 0){
                        this.score --;     
                     }
                    
                    this.serpent.ateAppleRed = true;
                   
                    do {
                        
                        this.pommeRouge.setNewPosition(this.widthBlocks, this.heightBlocks);
                    } while( this.pommeRouge.isOnSnake(this.serpent));
                    if (this.serpent.ateAppleRed === true && this.score <= 0){
                        this.lost = true;
                        this.serpent.checkCollision(this.widthBlocks,  this.heightBlocks,this.lost)
                        Drawing.gameOver( this.ctx, this.centerX , this.centerY );  
                        
                    }else{
                        
                        this.speedUp()
                    }
                    
                }
                

                 this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);
                 Drawing.drawScore(this.ctx, this.centerX , this.centerY, this.score);
                 Drawing.drawSnake(this.ctx, this.blockSize, this.serpent);
                 Drawing.drawApple(this.ctx, this.blockSize, this.pomme);
                 Drawing.drawAppleRed(this.ctx, this.blockSize, this.pommeRouge);
                 this.timeOut = setTimeout(this.refreshCanvas.bind(this), this.delay);
             }

             
     };
     speedUp () {
         this.delay /= 1.5
     };

     
};