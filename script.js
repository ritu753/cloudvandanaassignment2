function validate(sentence, letter, count) {
    var occur = 0;
    count = 1;
    sentence = document.getElementById("sentence").value;
    letter = document.getElementById("letter").value;

    if (count == 0) {
      document.write(sentence);
      return;
    }
    for (i = 0; i < sentence.length; i++) {
      if (sentence.charAt(i) == letter) {
        occur++;
      }
      if (occur == count) {
        break;
      }
    }
    if (i < sentence.length - 1) {
      alert("The Result: " + sentence.substring(i + 1));
    } else {
      alert("The letter doesn't exist in the sentence");
    }
  }