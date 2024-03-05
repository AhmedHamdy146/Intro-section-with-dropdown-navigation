const dropdown = document.querySelectorAll(".links .link");
const close = document.querySelector(".close-menu");
const open = document.querySelector(".menu-icon");
for (const dropBtn of dropdown) {
  dropBtn.addEventListener("click", () => {
    const dropBrnCh = dropBtn.lastElementChild.classList;
    if (dropBrnCh.contains("dropdown")) {
      dropBtn.lastElementChild.classList.toggle("open");
      if (!dropBrnCh.contains("open")) {
        if (dropBrnCh.contains("dp--1")) {
          document.querySelector(
            ".du-image--1"
          ).src = `./images/icon-arrow-up.svg`;
        } else {
          document.querySelector(
            ".du-image--2"
          ).src = `./images/icon-arrow-up.svg`;
        }
      } else {
        if (dropBrnCh.contains("dp--1")) {
          document.querySelector(
            ".du-image--1"
          ).src = `./images/icon-arrow-down.svg`;
        } else {
          document.querySelector(
            ".du-image--2"
          ).src = `./images/icon-arrow-down.svg`;
        }
      }
    }
    // if(dropBtn)
  });
}

close.addEventListener("click", () => {
  document.querySelector(".navbar").style.right = `-30rem`;
  document.querySelector(".overlay").style.display = "none";
});

open.addEventListener("click", () => {
  document.querySelector(".navbar").style.right = `0`;
  document.querySelector(".overlay").style.display = "block";
});
