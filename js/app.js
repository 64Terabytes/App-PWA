if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

function ChangeTimeTableA() {
  var TableYear;
  if (document.getElementById("year-level").value == "year7") {
    console.log("Opening Year 7 A")
    document.getElementById("TimeTableImage").src = "images/timetable/year7A.png"
  }
  else if (document.getElementById("year-level").value == "year8") {
    console.log("Opening Year 8 A")
  }
  else if (document.getElementById("year-level").value == "year9") {
    console.log("Opening Year 9 A")
  }
  else if (document.getElementById("year-level").value == "year10") {
    console.log("Opening Year 10 A")
  }
}

function ChangeTimeTableB() {
  var TableYear;
  if (document.getElementById("year-level").value == "year7") {
    console.log("Opening Year 7 B")
    document.getElementById("TimeTableImage").src = "images/timetable/year7B.png"
  }
  else if (document.getElementById("year-level").value == "year8") {
    console.log("Opening Year 8 B")
  }
  else if (document.getElementById("year-level").value == "year9") {
    console.log("Opening Year 9 B")
  }
  else if (document.getElementById("year-level").value == "year10") {
    console.log("Opening Year 10 B")
  }
}