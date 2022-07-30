const openAddMenu = () => {
  let menu = document.getElementById("todo-save-menu");
  if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
  }
  menu.classList.add("open");
};
const closeAddMenu = () => {
  let menu = document.getElementById("todo-save-menu");
  menu.classList.remove("open");
  menu.classList.add("closed");
};
