function calculateScore(){

  let tech = parseInt(document.getElementById("technical").value);
  let comm = parseInt(document.getElementById("communication").value);
  let resume = parseInt(document.getElementById("resume").value);

  let total = (tech + comm + resume) / 3;

  let message = "";

  if(total >= 80){
    message = "Excellent Interview Readiness";
  }
  else if(total >= 60){
    message = "Good, but needs improvement";
  }
  else{
    message = "Need more preparation";
  }

  document.getElementById("result").innerHTML =
    "Your Score: " + total + "<br>" + message;
}