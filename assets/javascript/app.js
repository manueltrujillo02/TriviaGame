

  var number = 60;
  var correct = 0;
  var wrong = 0;
  var numOfQuestions = 3;
  var ansArr = ["a", "f", "k"]
  var intervalId;
  
  
  
  function stop() {
    clearInterval(intervalId);
  }
  clearInterval(intervalId);
  
    
  
  $("#the-start").on("click", function () {
    intervalId = setInterval(decrement, 1000);
     function decrement() {
      number--;
      $("#show-number").html("<h1>" + number + "</h1>");
      if (number === 0) {
        
        
        var q1 = document.forms["riddle"]["q1"].value;
        var q2 = document.forms["riddle"]["q2"].value;
        var q3 = document.forms["riddle"]["q3"].value;
        for (var i = 1; i <= numOfQuestions; i++) {
          if (q1 === ansArr[i - 1]) {
              correct++
              $("#correct").text("CORRECT ANSWERS: " + correct)
          };
      
          if (q2 === ansArr[i]) {
              correct++
              $("#correct").text("CORRECT ANSWERS: " + correct)
          };
          if (q3 === ansArr[i + 1]) {
              correct++
              $("#correct").text("CORRECT ANSWERS: " + correct)
      
      
              stop();
              console.log(correct);
              console.log(wrong)
          }
          
            stop();
        }
       
      
      };
    };
  
  });
  
  
  
  $(".submit").on("click", function () {
    // function onSubmit(){
    event.preventDefault();
    var q1 = document.forms["riddle"]["q1"].value;
    var q2 = document.forms["riddle"]["q2"].value;
    var q3 = document.forms["riddle"]["q3"].value;
    for (var i = 1; i <= numOfQuestions; i++) {
      if (q1 === ansArr[i - 1]) {
          correct++
          $("#correct").text("CORRECT ANSWERS: " + correct)
      };
  
      if (q2 === ansArr[i]) {
          correct++
          $("#correct").text("CORRECT ANSWERS: " + correct)
      };
      if (q3 === ansArr[i + 1]) {
          correct++
          $("#correct").text("CORRECT ANSWERS: " + correct)
  
          stop();
          console.log(correct);
          console.log(wrong)
      }
      
        stop();
    }
  
  
  });
  