const score = JSON.parse(localStorage.getItem('Score'))
                 || {wins : 0,
                    loose : 0,
                    ties : 0
                };
                
             updateScore();
                
            /*same thing as above
            if (score === null){ 
                score = {
                    wins : 0,
                    loose : 0,
                    ties : 0
                };
            }*/

            
            
            function compMove(comp_move){
                if (comp_move > 0 && comp_move < 1/3){
                    computerMove = 'Rock';
                    
                }
                else if (comp_move > 1/3 && comp_move < 2/3){
                    computerMove = 'Paper';
                }
                else {
                    computerMove = 'Scissor';
                }
            }  
            
            function comparision(computerMove,userMove){
                if ((computerMove === 'Rock' && userMove === 'Rock') || (computerMove === 'Paper' && userMove === 'Paper') 
                ||(computerMove === 'Scissor' && userMove === 'Scissor')){
                    result = 'Tie'
                    score.ties +=1;
                }
                else if ((computerMove === 'Rock' && userMove === 'Paper')||(computerMove === 'Scissor' && userMove === 'Rock')
                ||(computerMove === 'Paper' && userMove === 'Scissor')){
                    result ='You Win';
                    score.wins +=1;
                }
                else if ((computerMove === 'Scissor' && userMove === 'Paper')||(computerMove === 'Rock' && userMove === 'Scissor')
                ||(computerMove === 'Paper' && userMove === 'Rock')){
                    result = 'You Loose';
                    score.loose +=1; 
                }

                showMove(userMove,computerMove);
                Displayresult(result);
                updateScore();
                /* JSON.stringfy() converts any variable into string
                localStorage stores values permanently*/
                localStorage.setItem('Score',JSON.stringify(score)); 

                /*alert (`
                        You Picked ${userMove}.
                        Computer picked ${computerMove}.
                        ${result}.
                        wins : ${score.wins} , loose: ${score.loose} , Tie : ${score.ties}`)
                */
                        
            }
            function updateScore(){
                    document.querySelector('.js-score')
                        .innerHTML = `Wins : ${score.wins} , Loose: ${score.loose} , Tie : ${score.ties}`;
                }
            
            function showMove(userMove,computerMove){
                document.querySelector('.js-showMoves')
                    .innerHTML = `you <img class = "emojis" src="pictures/${userMove}-emoji.png" > vs <img class = "emojis" src="pictures/${computerMove}-emoji.png"> computer. ` 
            
            }
            function Displayresult(result){
                document.querySelector('.js-resultDisplay')
                    .innerHTML = `${result}.` 
            }