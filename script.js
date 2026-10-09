// ===== НАСТРОЙКИ =====
// Куда ведут кнопки «Выбрать ...». Замените на свою ссылку (WhatsApp / Telegram / Instagram):
//   WhatsApp:  https://wa.me/996XXXXXXXXX
//   Telegram:  https://t.me/username
//   Instagram: https://ig.me/m/username
const CONTACT_URL = "https://ig.me/m/diianeur";
// =====================

document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-contact]").forEach((a) => {
  a.href = CONTACT_URL;
  a.target = "_blank";
  a.rel = "noopener";
});

const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("is-in"));
}
