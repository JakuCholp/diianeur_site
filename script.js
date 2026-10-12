// ===== НАСТРОЙКИ =====
// Номер для WhatsApp в международном формате, без + и пробелов (+996 551 909 999)
const WHATSAPP_NUMBER = "996551909999";
// Telegram: лучше указать username, например "username" -> https://t.me/username.
// Пока ссылка идёт по номеру телефона (работает, только если в Telegram разрешён поиск по номеру).
const TELEGRAM_USERNAME = "";
const TELEGRAM_PHONE = "996551909999";
// =====================

document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-contact]").forEach((a) => {
  const plan = a.dataset.plan;
  const text = plan
    ? `Здравствуйте! Хочу пройти курс «${plan}».`
    : "Здравствуйте! Хочу узнать подробнее о курсах.";
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.querySelectorAll("[data-telegram]").forEach((a) => {
  a.href = TELEGRAM_USERNAME
    ? `https://t.me/${TELEGRAM_USERNAME}`
    : `https://t.me/+${TELEGRAM_PHONE}`;
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
