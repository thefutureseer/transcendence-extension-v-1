  function openSettings() {
    document.getElementById("settings").classList.toggle("settings-open");
  }

  document.getElementById("settings-btn").addEventListener("click", openSettings)

  var userName = localStorage.getItem("name");

  function saveNameLocalStorage() {
    console.log("set local storage", userName);

    localStorage.setItem("name", userName)
  }

  if (userName === null) {
    userName = "My friend";
    console.log("if null name: ", userName);
  }

  function changeName() {
    userName = document.getElementById("name-input").value;
    saveNameLocalStorage();
    getGreeting();
  }

  document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    changeName();
  });

  function getGreeting() {
    document.getElementById("greeting").innerHTML = `Hi ${userName}, I hope you are well.`
  }

