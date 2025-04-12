import { OptionList } from '/OptionList.js';
import { RenameCard } from '/Rename Card.js';
import { DeleteCard } from '/Delete Card.js';
import { MenuBar } from '/MenuBar.js';
import { CreateProject } from '/Create Project.js';
import { SearchUI } from '/Search Ui.js';





function RenameFun() {
  RenameCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
}


function DeleteFun() {
  DeleteCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
}



document.querySelectorAll(".project-card .project-menu-class").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll("filters").forEach((cd) => {
      cd.addEventListener("click", () => {
        sessionStorage.setItem("menuID", cd.id);
      });
    });
    var rect = card.getBoundingClientRect();
    var xPos = rect.left;
    var yPos = rect.top;
    setTimeout(() => {
      OptionList({
        0: ["edit-2.svg", "Rename"],
        1: ["delete-bin-line.svg", "Delete"],
        2: ["edit-box-line.svg", "Edit"],
        3: ["pushpin-line.svg", "Pin"]
      }, [RenameFun, DeleteFun], {
        Left: xPos + "px",
        Top: yPos + "px"
      }, true);
    }, 20);
  });
});


