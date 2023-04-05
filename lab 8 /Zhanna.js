$(document).ready(function() {
  answers = ["Mars","White","Mars", "Neil Armstrong"];
  questions = ["What planet is called 'Red planet'","What color is the sun?","God of war called in honour of this planet",
  "First man on the moon?"];
  choice_options = [["Mars", "Venus", "Jupiter", "Pluto"],["White", "Yellow", "Orange", "Red"],["Mars", "Earth", "Saturn", "Moon"],
  ["Gagarin","Neil Armstrong","Lambert Hugo","Lolus Kekus"]];

  for (var i=0; i<questions.length; i++) {
    $("#Question").append(questions[i]);
    $("#Question").append("<br>");
    
    for (var b=0; b<choice_options[i].length; b++) {
      label = $("<label>").text(choice_options[i][b]);
      label_input = $("<input>").attr('type', 'radio').attr('name', 'Q'+i).attr("value", choice_options[i][b]);
      $("#Question").append(label_input).append(label);
    }
    $("#Question").append("<br>");
    $("#Question").append("<br>");
  }

  $("#Check").click(function() {
    grade = 0;
    for (var i=0; i<questions.length; i++) {
      choice = $("input[name=Q" + i + "]:checked").val();
      if (choice === answers[i]) {
        grade++;
      }
    }
  $("#Score").text(grade + " out of " + questions.length + " are/is correct");
  });
});
