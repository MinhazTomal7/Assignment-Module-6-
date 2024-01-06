function checkInput() {
    var inputValue = document.getElementById("inputValue").value;
    if (inputValue >= 18) {
      document.getElementById("adultCard").style.display = "block";
      document.getElementById("childCard").style.display = "none";
    } else {
      document.getElementById("adultCard").style.display = "none";
      document.getElementById("childCard").style.display = "block";
    }
  }