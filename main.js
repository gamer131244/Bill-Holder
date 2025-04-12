import { OptionList } from './OptionList.js';
import { RenameCard } from './Rename Card.js';
import { DeleteCard } from './Delete Card.js';
import { MenuBar } from './MenuBar.js';
import { CreateProject } from './Create Project.js';
import { SearchUI } from './Search Ui.js';



// Example Sheet For Genrate Random ID


document.querySelectorAll("filters").forEach((card) => {
  var abc = `a b c d e f g h i j k l m n o p q r s t u v w x y z`;
  var sliceAbc = abc.split(" ");
  var l1 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l2 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l3 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l4 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var l5 = sliceAbc[Math.floor(Math.random() * sliceAbc.length)];
  var comW = l1 + l2 + l3 + l4 + l5;
  card.id = comW;
});




FilterCard();





document.querySelector(".menu-icon span").addEventListener("click", () => {
  var img = document.querySelector(".menu-icon span img");
  
  img.style.transform = "scale(0)";
  
  setTimeout(() => {
    img.style.transform = "scale(1)";
    if (img.src.includes("menu.svg")) {
      img.src = `/x.svg`;
      document.querySelector(".menu-icon").style.background = "black";
      document.querySelector(".menu-btn-wrapper").style.zIndex = "999999999";
      MenuBar(true, {
        0: ["/dashboard-horizontal-line.svg", "Dashboard"],
        1: ["/file-damage-line.svg", "Tempelete"],
        2: ["", ""]
      }, {}, {
        compony: "Bill Manager"
      });
    } else {
      img.src = "menu.svg";
      document.querySelector(".menu-icon").style.background = "transparent";
      document.querySelector(".menu-btn-wrapper").style.zIndex = "auto";
      history.back();
      MenuBar(false);
    }
  }, 100);
  
  
  
});


document.querySelector(".size-project-icon span").addEventListener("click", () => {
  var img = document.querySelector(".size-project-icon span img");
  
  img.style.transform = "scale(0)";
  
  setTimeout(() => {
    img.style.transform = "scale(1)";
    if (img.src.includes("grid.svg")) {
      img.src = `align-left.svg`;
      var parent = document.querySelector(".project-ul");
      if (parent.children.length > 1) {
        document.querySelectorAll(".project-card").forEach((card) => {
          card.style.width = "40vw";
          
          document.querySelectorAll(`.${card.className} .project-name`).forEach((title) => {
            title.style.fontSize = "3.5vw";
          });
          
          document.querySelectorAll(`.${card.className} .project-time-class`).forEach((title) => {
            title.style.fontSize = "2.3vw";
          });
          
          document.querySelectorAll(`.${card.className} .project-page-class`).forEach((title) => {
            title.style.fontSize = "1.5vw";
          });
          
          
        });
      } else {
        img.src = `grid.svg`;
      }
    } else {
      img.src = "/grid.svg";
      document.querySelectorAll(".project-card").forEach((card) => {
        card.style.width = "90vw";
        
        document.querySelectorAll(`.${card.className} .project-name`).forEach((title) => {
          title.style = "";
        });
        
        document.querySelectorAll(`.${card.className} .project-time-class`).forEach((title) => {
          title.style = "";
        });
        
        document.querySelectorAll(`.${card.className} .project-page-class`).forEach((title) => {
          title.style = "";
        });
        
      });
    }
  }, 100);
});


function RenameFun() {
  RenameCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
}


function DeleteFun() {
  DeleteCard(sessionStorage.getItem("menuID"));
  document.querySelector(".block-back").click();
  FilterCard();
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

function Ts() {
  // Tab to edit
  alert(7)
}


function Hs() {
  alert('Gs')
}





function ShowClear() {
  if (document.querySelector(".project-ul").children.length > 0) {
    document.querySelectorAll("filters").forEach((filterData) => {
      filterData.style.display = filterData.className === "paid" ? "block" : "none";
    });
    document.querySelector(".block-back").click();
  } else {
    
  }
}

function Unclear() {
  if (document.querySelector(".project-ul").children.length > 0) {
    document.querySelectorAll("filters").forEach((filterData) => {
      filterData.style.display = filterData.className === "paid" ? "none" : "block";
    });
    document.querySelector(".block-back").click();
  }
}

function NormalFilter() {
  if (document.querySelector(".project-ul").children.length > 0) {
    document.querySelectorAll("filters").forEach((filterData) => {
      filterData.style.display = "block";
    });
    document.querySelector(".block-back").click();
  }
}


document.querySelector(".more-nav-icon span").addEventListener("click", (e) => {
  
  var BtnP = e.target.getBoundingClientRect();
  var xP = BtnP.left;
  var yP = BtnP.top;
  OptionList({
    0: ["/checkbox-circle-line.svg", "Show Cleared"],
    1: ["/close-circle-line.svg", "Show Panding"],
    2: ["/emotion-normal-line.svg", "Normal"]
  }, [ShowClear, Unclear, NormalFilter], {
    Top: yP + "px",
    Left: xP + "px"
  }, true);
});



function FilterCard() {
  var cardWrapper = document.querySelector(".project-ul");
  if (cardWrapper.children.length > 0) {
    document.querySelector(".empty-wrapper").style.display = "none";
    document.querySelector(".project-ul-class").style.height = "auto";
  } else {
    document.querySelector(".empty-wrapper").style.display = "block";
    document.querySelector(".project-ul-class").style.height = "80vh";
  }
} 



document.querySelector(".plus-nav-icon").addEventListener("click", ()=>{
  CreateProject();
  FilterCard();
});



document.querySelector(".search-nav-icon").addEventListener("click", ()=>{
  SearchUI();
});
