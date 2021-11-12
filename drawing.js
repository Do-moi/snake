

export default class Drawing {
    
            static gameOver (ctx, centerX , centerY) {
                    
                    ctx.save();
                    ctx.font = 'bold 70px sans-serif';
                    ctx.fillStyle = "black";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = "middle";
                    ctx.strokeStyle = "white";
                    ctx.lineWidth = 5;
                    ctx.strokeText("Game Over", centerX, centerY -180);
                    ctx.fillText("Game Over", centerX, centerY -180);
                    ctx.font = 'bold 30px sans-serif';
                    ctx.strokeText("Appuyer sur la touche espace pour rejouer", centerX, centerY + 140);
                    ctx.fillText("Appuyer sur la touche espace pour rejouer", centerX, centerY + 140);
                    ctx.restore();

            };
            static drawScore(ctx, centerX , centerY, score) {
                ctx.save();
                ctx.font = "bold 200px sans-serif";
                ctx.fillStyle = "gray";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(score.toString(), centerX, centerY);
                ctx.restore();
            };
            static drawSnake (ctx, blockSize, serpent ) {
                ctx.save();
                ctx.fillStyle = "#ff0000";
                
                for (let block of serpent.body){
                    this.drawBlock(ctx, block, blockSize);
                }
                ctx.restore();

            };
            static drawApple (ctx,blockSize,pomme) {
                        ctx.save();
                        ctx.fillStyle = "#33cc33";
                        ctx.beginPath();
                        const radius = blockSize / 2;
                        const x = pomme.position[0] * blockSize + radius;
                        const y = pomme.position[1] * blockSize + radius;
                        ctx.arc( x, y, radius, 0, Math.PI * 2, true );
                        ctx.fill();
                        ctx.restore();
            };
            static drawAppleRed (ctx,blockSize,pommeRouge) {
                ctx.save();
                ctx.fillStyle = "red";
                ctx.beginPath();
                const radius = blockSize / 2;
                const x = pommeRouge.position[0] * blockSize + radius;
                const y = pommeRouge.position[1] * blockSize + radius;
                ctx.arc( x, y, radius, 0, Math.PI * 2, true );
                ctx.fill();
                ctx.restore();
    };

            static drawBlock (ctx, position, blockSize) {

                const [x, y] = position ;
                
                ctx.fillRect(x * blockSize   ,y * blockSize ,blockSize, blockSize);

            };
};