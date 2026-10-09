# diianeur — сайт курсов по AI-контенту

Статический сайт (HTML + CSS + JS), без сборки. Файлы: `index.html`, `styles.css`, `script.js`, `assets/`.

## Что поменять перед запуском
- `script.js` → `CONTACT_URL`: ссылка, куда ведут кнопки «Выбрать ...» (WhatsApp / Telegram / Instagram).
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
