  document.querySelectorAll("#Home, #home_1").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
    });
  });
  
  
  document.querySelectorAll("#projectsBtn, #projectsBt , #projectsBtn_1").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("#sobreMi, #sobreMi_1 , #projectsBtn_1").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("info").scrollIntoView({ behavior: "smooth" });
    });
  });