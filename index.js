
 (function() {

    // definition of the function construction 
    
       function Question(question, Answer ,correct){
           
        this.question = question;
    
        this.Answer = Answer;
    
     
        this.correct = correct;
       
       }
    
      // first methode to select  a random question
    
    
          Question.prototype.randomQuestion =  function(){
            console.log(this.question);
             for (var i = 0; i< this.Answer.length ; i++){
                 console.log(i + ':' +this.Answer[i]);
             }
          }
    
          // second methode to check if the answer gave by the user is correct and log it into the console
    
    
          Question.prototype.respond = function(ans, callback) {
                var sc;
            if (ans === this.correct){
                console.log('congratullation this the correct anwswer');
                 sc = callback(true);
            }
            else{
                console.log('sorry this is the wrong answer you trier one  mor time');
            
                sc = callback(false);
            }
            this.displayscore(sc);
    
          }
        
    
    
        Question.prototype.displayscore = function(score){
          
            console.log('your current is score : ' + score );
            console.log('--------------------------------');
        }
        
        // create differents function with the fucntion construction 
    
    
       var gender = new Question('what is your gender? ' , ['maxculin','feminin'], 1 );
       var eyesColor = new Question('what is the color of your  eyes? ', ['brown','black','bleu'],2 );
       var race = new Question('what is your race ? ', ['black','white','asian'], 1 );
       var religion = new Question('what is your religion? ', ['christian','muslin','jurish'],1);
    
    
     // storage all the different function into an array
    
    var questions = [gender,eyesColor,race,religion];
    
    
    function score(){
    
    var sc = 0;
     return function (correct){
        
        if (correct){
            sc++;
    
        }
         return sc;
    }
    
    }
       
    
         var keepsc = score();
    
    
    function nextQ(){
    
        var x = Math.floor(Math.random()*4);
        questions[x].randomQuestion(); 
        var correctAnswer = prompt('what is the correct answer ?');
    
        if (correctAnswer !== 'exit'){
        questions[x].respond(parseInt(correctAnswer), keepsc);
        nextQ();
    
        }
      }
    
      nextQ();
         
     
    })();
    