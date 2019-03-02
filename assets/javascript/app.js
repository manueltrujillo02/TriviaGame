

  var number = 60;
  var correct = 0;
  var wrong = 0;
  var numOfQuestions = 3;
  var ansArr = ["a","b","c"]
  var intervalId;
  var q1 = document.forms["riddle"]["q1"].value;
  var q2 = document.forms["riddle"]["q2"].value;
  var q3 = document.forms["riddle"]["q3"].value;

  function decrement() {
    number--;
    $("#show-number").html("<h1>" + number + "</h1>");
  }

  // function stop() {
  //   clearInterval(intervalId);
  // }


  // if (number === 0) {
  //   stop();
  // }

  $(".start").on("click", function() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  });



function onSubmit(){
  event.preventDefault();
  

  for(var i = 1; i <= numOfQuestions; i++){
    if(q1 === ansArr[i - 1]) {
      correct++
      $("#correct").text("CORRECT ANSWERS: " + correct)
      
      console.log(correct);
    };
  }
  // stop();
}


  



