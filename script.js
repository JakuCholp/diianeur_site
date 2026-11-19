// ===== НАСТРОЙКИ =====
// Номер для WhatsApp в международном формате, без + и пробелов (+996 551 909 999)
const WHATSAPP_NUMBER = "996551909999";
// Telegram: укажите username без @, например "username" -> https://t.me/username.
// Пока пусто, ссылка на Telegram в подвале скрыта.
const TELEGRAM_USERNAME = "";
// =====================

document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-contact]").forEach((a) => {
  const plan = a.dataset.plan;
  const text = plan
    ? `Здравствуйте! Хочу записаться на обучение, тариф «${plan}».`
    : "Здравствуйте! Хочу узнать подробнее о курсах.";
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

// Ссылка на Telegram показывается только когда указан username (ссылка по номеру телефона не работает).
document.querySelectorAll("[data-telegram]").forEach((a) => {
  if (!TELEGRAM_USERNAME) return;
  a.href = `https://t.me/${TELEGRAM_USERNAME}`;
  a.target = "_blank";
  a.rel = "noopener";
  a.hidden = false;
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
