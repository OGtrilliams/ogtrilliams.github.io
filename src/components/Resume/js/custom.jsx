import Aos from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
// initialize AOS
Aos.init({ duration: 1000, once: true });
// menu toggle

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// typing effect

// animated boxes

document.querySelectorAll(".skill-box").forEach((box) => {
  const rect = box.querySelector("rect");
  const percent = +box.dataset.percent;
  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;
  const perimeter = 2 * (boxWidth + boxHeight - 8);

  const targetOffset = perimeter * (1 - percent / 100);
  rect.setAttribute("stroke-dasharray", perimeter);
  rect.setAttribute("stroke-dashoffset", perimeter);

  // trigger animation
  rect.style.animation = "drawBorder 2s ease-out forwards";
  rect.style.setProperty("--offset", targetOffset);
});
// testimonial

// filter cards
document.querySelectorAll(".filters button").forEach((button) => {
  button.onclick = () => {
    document
      .querySelectorAll(".filters button")
      .forEach((b) => b.classList.remove(button.classList.add(active)));
    const filter = button.dataset.filter;
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.category
      );
    });
  };
});
const openModal = (btn) => {
  const imgSrc = btn.closest(".card").querySelector("img").src;
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal").classList.remove("hidden");
};
// const closeModal = () =>
//   document.getElementById("modal").classList.add("hidden");
// window.onscroll = () => {
//   document
//     .getElementById("mainHeader")
//     .classList.toggle("fixed", scrollY > 100);
//   document.getElementById("backToTop").style.display =
//     scrollY > 300 ? "block" : "none";
// };
// document.getElementById("backToTop").onclick = () =>
//   window.scrollTo({ top: 0, behavior: "smooth" });
