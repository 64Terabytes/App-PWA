if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

function ChangeTimeTable(Week) {
  var TableYear;
  var SelectedYearLevel = document.getElementById("year-level").value
  console.log("Opening Year " + SelectedYearLevel + Week);
  document.getElementById("TimeTableImage").src = "images/timetable/year" + SelectedYearLevel + Week + ".png";
}