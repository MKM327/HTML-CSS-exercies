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
function rotate(rotateId, detailId) {
  let btnClassList = document.getElementById(rotateId).classList;
  let todoDetails = document.getElementById(detailId).classList;
  if (btnClassList.contains("down")) {
    btnClassList.remove("down");
    btnClassList.add("right");
    todoDetails.remove("details-open");
    todoDetails.add("details-closed");
  } else {
    btnClassList.remove("right");
    btnClassList.add("down");
    todoDetails.remove("details-closed");
    todoDetails.add("details-open");
  }
}
