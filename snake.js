export default class Snake {
        constructor(direction, ...body){

        this.body = body;
        this.direction = direction;
        this.ateApple = false; 
        this.ateAppleRed = false;

        }

        advance () {
                    const nextPosition = this.body[0].slice();

                    switch(this.direction){
                        case "left":
                            nextPosition[0] -= 1; 
                            break;
                        case "right":
                            nextPosition[0] += 1;
                            break;
                        case "down":
                            nextPosition[1] += 1; 
                            break;
                        case "up":
                            nextPosition[1] -= 1;  
                            break;
                        default:
                            return;  

                    }

                    this.body.unshift(nextPosition);
                    if( !this.ateApple){
                        this.body.pop();
                    } else {
                    this.ateApple = false;
                    this.ateAppleRed = false;
                    }


        };

        setDirection (newDirection) {

                    let allowedDirection;
                    switch(this.direction){
                        case "left":
                        case "right":
                            allowedDirection = ["up","down"] ;
                            break;
                        case "up":
                        case "down":
                            allowedDirection = ["left","right"] ;
                            break; 
                        default:
                            throw('invalid Direction')          
                    }
                    if(allowedDirection.includes(newDirection)){
                        this.direction = newDirection;
                    }
        };

        checkCollision (widthBlocks, heightBlocks,gameOver) {

                    
                    let wallCollision = false;
                    let snakeCollision = false;
                    const [headSnake, ...restSnake] = this.body;
                    const [snakeX, snakeY] = headSnake;
                    const minX = 0;
                    const minY = 0;
                    const maxX = widthBlocks - 1;
                    const maxY = heightBlocks -1;
                    const isNotBetweenHorizontalWall = snakeX < minX || snakeX > maxX;
                    const isNotBetweenVerticaleWall = snakeY < minY || snakeY > maxY;
                    wallCollision = gameOver
                    if(isNotBetweenVerticaleWall || isNotBetweenHorizontalWall){
                    wallCollision = true;  
                    }

                    for( let block of restSnake){
                        if( snakeX == block[0] && snakeY == block[1]){
                            snakeCollision = true;
                        }
                        
                    }

            return wallCollision || snakeCollision;

        };

        isEatingApple (appleToEat) {
                    const head = this.body[0];
                        if( head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]){
                            return true;
                        } else {
                            return false;
                        }
        };
        isEatingAppleRed (appleRedToEat) {
            const head = this.body[0];
                if( head[0] === appleRedToEat.position[0] && head[1] === appleRedToEat.position[1]){
                    return true;
                } else {
                    return false;
                }
};


};