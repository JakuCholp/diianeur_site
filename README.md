# diianeur — сайт курсов по AI-контенту

Статический сайт (HTML + CSS + JS), без сборки. Файлы: `index.html`, `styles.css`, `script.js`, `assets/`.

## Что поменять перед запуском
- `script.js` → `WHATSAPP_NUMBER` и `TELEGRAM_USERNAME`: контакты для кнопок «Выбрать ...» и подвала.
- `index.html` → ссылка в подвале и `<title>`/описание при необходимости.

## Запуск на сервере (VPS + nginx)
1. Скопировать папку: `scp -r . user@SERVER:/var/www/diianeur`
2. Конфиг `/etc/nginx/sites-available/diianeur`:
   ```
   server { listen 80; server_name example.com www.example.com;
            root /var/www/diianeur; index index.html; }
   ```
   `ln -s` в `sites-enabled`, затем `nginx -t && systemctl reload nginx`.
3. Домен: у регистратора A-запись `@` и `www` на IP сервера.
4. HTTPS: `certbot --nginx -d example.com -d www.example.com`.

Без своего сервера: Cloudflare Pages / Netlify / GitHub Pages — загрузить папку, подключить домен в настройках.

## Важно при правках
Cloudflare на домене кэширует CSS, JS и картинки в браузере на 4 часа. Поэтому при изменении `styles.css`, `script.js`
или картинок меняйте номер версии в `index.html` (`styles.css?v=N`, `script.js?v=N`) либо называйте новые картинки новым именем.
Постоянное решение: Cloudflare → домен → Caching → Configuration → Browser Cache TTL → Respect Existing Headers.
