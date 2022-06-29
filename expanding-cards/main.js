const panels = document.querySelectorAll(".panel");
console.log(panels);

for (let i = 0; i < panels.length; i++) {
  const panel = panels[i];
  panel.addEventListener("click", () => {
    panel.classList.toggle("active");
  });
}
