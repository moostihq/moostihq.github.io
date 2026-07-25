import{j as e}from"./i18n.B2AVHcGw.js";import{r as i,u as t}from"./useTranslations.DYC37lO_.js";import"./index.Dkaqzkgy.js";import"./RadioLobby.yI6ZOQCr.js";import{I as s}from"./radio.CMO7cuSi.js";import{a as c,c as d,s as l}from"./urls.CkRPBCKS.js";import"./ga4.CrHqlIrT.js";i("context-nav",{en:{heading:"Browse by context",soon:"Soon",new:"New",time:"Pomodoro, countdown, stopwatch, alarm.",calculator:"Date, age, timezone, conversion.",image:"Compress, convert, resize.",radio:"Playlists, lo-fi, soundscapes.",dev:"Base64, JWT, regex, hash."},pt:{heading:"Explore por contexto",soon:"Em breve",new:"Novo",time:"Pomodoro, contagem regressiva, cronômetro, alarme.",calculator:"Data, idade, fuso, conversão.",image:"Comprimir, converter, redimensionar.",radio:"Playlists, lo-fi, paisagens sonoras.",dev:"Base64, JWT, regex, hash."},fr:{heading:"Parcourir par catégorie",soon:"Bientôt",new:"Nouveau",time:"Pomodoro, minuteur, chrono, alarme.",calculator:"Date, âge, fuseau, conversion.",image:"Compresser, convertir, redimensionner.",radio:"Playlists, lo-fi, paysages sonores.",dev:"Base64, JWT, regex, hash."},es:{heading:"Explorar por contexto",soon:"Pronto",new:"Nuevo",time:"Pomodoro, cuenta regresiva, cronómetro, alarma.",calculator:"Fecha, edad, zona horaria, conversión.",image:"Comprimir, convertir, redimensionar.",radio:"Playlists, lo-fi, paisajes sonoros.",dev:"Base64, JWT, regex, hash."},ru:{heading:"Обзор по разделу",soon:"Скоро",new:"Новое",time:"Помодоро, таймер, секундомер, будильник.",calculator:"Дата, возраст, часовой пояс, конвертация.",image:"Сжатие, конвертация, изменение размера.",radio:"Плейлисты, lo-fi, звуковые пейзажи.",dev:"Base64, JWT, regex, хэш."},zh:{heading:"按分类浏览",soon:"即将推出",new:"新",time:"番茄钟、倒计时、秒表、闹钟。",calculator:"日期、年龄、时区、换算。",image:"压缩、转换、调整大小。",radio:"歌单、Lo-fi、声景。",dev:"Base64、JWT、正则、哈希。"},ja:{heading:"カテゴリで探す",soon:"近日公開",new:"新着",time:"ポモドーロ、カウントダウン、ストップウォッチ、アラーム。",calculator:"日付、年齢、タイムゾーン、換算。",image:"圧縮、変換、リサイズ。",radio:"プレイリスト、Lo-fi、サウンドスケープ。",dev:"Base64、JWT、正規表現、ハッシュ。"}});function u(){const n=t("context-nav");return e.jsxs("section",{className:"contexts",id:"context-nav",children:[e.jsx("h2",{children:n("heading")}),e.jsx("div",{className:"cn-grid",children:c.map(o=>{const a=d[o],r=a.available?`${l(o)}/`:void 0;return e.jsxs("a",{href:r,className:`cn-card${a.available?"":" cn-disabled"}`,style:{"--accent":a.accent,"--accent-soft":a.accentSoft},"data-context":o,onClick:()=>{typeof window<"u"&&window.gtag&&window.gtag("event","context_changed",{from:"hub",to:o})},children:[e.jsx("div",{className:"cn-accent-line","aria-hidden":"true"}),e.jsx("div",{className:"cn-icon",children:e.jsx(s,{name:a.icon,size:20})}),e.jsxs("strong",{className:"cn-title",children:[a.label,a.badge==="new"&&e.jsx("span",{className:"cn-dot","aria-hidden":"true",title:n("new")})]}),e.jsx("span",{className:"cn-desc",children:n(o)}),!a.available&&e.jsx("span",{className:"cn-badge",children:n("soon")})]},o)})}),e.jsx("style",{children:`
        .contexts { padding: 2.5rem 0; }
        .contexts h2 { margin: 0 0 1rem; font-size: 1.5rem; letter-spacing: -0.01em; }
        .cn-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
        .cn-card {
          display: flex; flex-direction: column; gap: 0.35rem;
          padding: 1.25rem; border-radius: 0.875rem;
          border: 1px solid var(--ink-100, #e8eaf1);
          background: #fff; text-decoration: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          position: relative; overflow: hidden;
        }
        .cn-accent-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--accent);
        }
        .cn-card:hover {
          border-color: color-mix(in srgb, var(--accent) 35%, transparent);
          box-shadow: 0 2px 12px color-mix(in srgb, var(--accent) 10%, transparent);
        }
        .cn-disabled { opacity: 0.5; pointer-events: none; }
        .cn-icon { width: 38px; height: 38px; border-radius: 10px; background: color-mix(in srgb, var(--accent) 14%, white); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cn-title { font-size: 0.95rem; font-weight: 600; color: var(--ink-900, #0b0b0f); display: inline-flex; align-items: center; gap: 0.4rem; }
        .cn-desc { font-size: 0.8rem; color: var(--ink-500, #5b6072); line-height: 1.4; }
        .cn-badge { font-size: 0.7rem; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.06em; }
        .cn-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #e11d48; flex-shrink: 0;
        }
      `})]})}export{u as default};
