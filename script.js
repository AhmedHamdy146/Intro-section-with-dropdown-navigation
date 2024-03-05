const dropdown = document.querySelectorAll(".links .link");
const close = document.querySelector(".close-menu");
const open = document.querySelector(".menu-icon");
for (const dropBtn of dropdown) {
  dropBtn.addEventListener("click", () => {
    const lastChild = dropBtn.lastElementChild;
    lastChild.classList.toggle("co");
    if (lastChild.classList.contains("dp--1")) {
      if (!lastChild.classList.contains("co")) {
        lastChild.style.height = "18.1rem";
        document.querySelector(".du-image--1").src =
          "./images/icon-arrow-up.svg";
        lastChild.style.boxShadow = `0 1rem 3rem 1rem rgba(0, 0, 0, 0.1)`;
      } else {
        lastChild.style.height = "0";
        document.querySelector(".du-image--1").src =
          "./images/icon-arrow-down.svg";
        lastChild.style.boxShadow = `none`;
      }
    } else {
      if (!lastChild.classList.contains("co")) {
        lastChild.style.height = "13.6rem";
        lastChild.style.boxShadow = `0 1rem 3rem 1rem rgba(0, 0, 0, 0.1)`;
        document.querySelector(".du-image--2").src =
          "./images/icon-arrow-up.svg";
      } else {
        lastChild.style.height = "0";
        lastChild.style.boxShadow = `none`;

        document.querySelector(".du-image--2").src =
          "./images/icon-arrow-down.svg";
      }
    }
  });
}
// if(dropBtn)

close.addEventListener("click", () => {
  document.querySelector(".navbar").style.right = `-30rem`;
  document.querySelector(".overlay").style.display = "none";
});

open.addEventListener("click", () => {
  document.querySelector(".navbar").style.right = `0`;
  document.querySelector(".overlay").style.display = "block";
});
