
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("preferredTheme", theme);
  }
  

  window.onload = function () {
    const savedTheme = localStorage.getItem("preferredTheme") || "light";
    document.body.className = savedTheme;
  
    const box = document.getElementById("box");
  
  
    box.addEventListener("click", function () {
      box.classList.remove("bounce");
      void box.offsetWidth; 
      box.classList.add("bounce");
    });
  };
  