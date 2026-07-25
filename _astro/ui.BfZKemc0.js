import{R as U}from"./RadioLobby.CrFNakCg.js";import{j as e}from"./i18n.B2AVHcGw.js";import{r as h}from"./index.Dkaqzkgy.js";import{u as p}from"./useLocale.BrpKoICO.js";import{I as x}from"./radio.Bb9wCwEh.js";import"./useTranslations.DYC37lO_.js";import"./ga4.CrHqlIrT.js";function k({accent:t,accentSoft:r,hero:c,tools:u}){const d=p(),n=c[d]??c.en;return h.useEffect(()=>{document.title=n.pageTitle},[n.pageTitle]),e.jsxs("div",{style:{"--accent":t,"--accent-soft":r},children:[e.jsxs("section",{className:"ci-hero",children:[e.jsx("div",{className:"ci-hero-bg","aria-hidden":"true"}),e.jsxs("div",{className:"container ci-hero-inner",children:[e.jsx("p",{className:"ci-ctx",children:n.ctx}),e.jsx("h1",{className:"ci-h1",children:n.h1}),e.jsx("p",{className:"ci-lede",children:n.lede})]})]}),e.jsx("div",{className:"container ci-grid",children:u.map(i=>{const o=i.i18n[d]??i.i18n.en??{name:i.slug,description:""};return e.jsxs("a",{href:i.href,className:"ci-card",children:[e.jsx("div",{className:"ci-accent-line","aria-hidden":"true"}),e.jsx("div",{className:"ci-card-icon",children:e.jsx(x,{name:i.icon,size:20})}),e.jsx("strong",{className:"ci-card-name",children:o.name}),e.jsx("span",{className:"ci-card-desc",children:o.description})]},i.slug)})}),e.jsx("style",{children:`
        .ci-hero {
          position: relative;
          padding: 3rem 1rem 1.5rem;
          text-align: center;
          overflow: hidden;
        }
        .ci-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% -20%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 60%);
          pointer-events: none;
        }
        .ci-hero-inner { position: relative; }
        .ci-ctx {
          text-transform: uppercase; letter-spacing: 0.12em;
          font-size: 0.72rem; font-weight: 700; margin: 0 0 0.75rem;
          color: var(--accent);
        }
        .ci-h1 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          margin: 0 0 0.5rem; line-height: 1.1; letter-spacing: -0.02em;
        }
        .ci-lede { color: var(--ink-500, #5b6072); margin: 0; font-size: 1.0625rem; }
        .ci-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
          padding: 2rem 1rem 3rem;
        }
        .ci-card {
          display: flex; flex-direction: column; gap: 0.35rem;
          padding: 1.25rem; border-radius: 0.875rem;
          border: 1px solid var(--ink-100, #e8eaf1);
          background: #fff; text-decoration: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          position: relative; overflow: hidden;
        }
        .ci-accent-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--accent);
        }
        .ci-card:hover {
          border-color: color-mix(in srgb, var(--accent) 35%, transparent);
          box-shadow: 0 2px 12px color-mix(in srgb, var(--accent) 10%, transparent);
        }
        .ci-card-icon { width: 38px; height: 38px; border-radius: 10px; background: color-mix(in srgb, var(--accent) 14%, white); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ci-card-name { font-size: 0.95rem; font-weight: 600; color: var(--ink-900, #0b0b0f); }
        .ci-card-desc { font-size: 0.8rem; color: var(--ink-500, #5b6072); line-height: 1.4; }
      `})]})}function z({accent:t,accentSoft:r,hero:c,tools:u,categoryOrder:d,categoryLabels:n}){const i=p(),o=c[i]??c.en,l=new Map;for(const a of d)l.set(a,[]);for(const a of u)l.has(a.category)&&l.get(a.category).push(a);const f=d.filter(a=>(l.get(a)??[]).length>0);return h.useEffect(()=>{document.title=o.pageTitle},[o.pageTitle]),e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"dh-hero container",style:{"--accent":t,"--accent-soft":r},children:[e.jsx("p",{className:"dh-ctx",children:o.ctx}),e.jsx("h1",{className:"dh-h1",children:o.h1}),e.jsx("p",{className:"dh-lede",children:o.lede})]}),f.map(a=>{const b=l.get(a)??[],v=n[a]?.[i]??a;return e.jsx(h.Fragment,{children:e.jsxs("section",{className:"dh-category container",children:[e.jsx("h2",{className:"dh-cat-heading",style:{borderColor:t},children:v}),e.jsx("div",{className:"dh-grid",children:b.map(s=>{const g=s.i18n[i]??s.i18n.en??{name:s.slug,description:""};return e.jsxs("a",{href:s.href,className:"dh-card",style:{"--accent":t},children:[e.jsx("div",{className:"dh-accent-line","aria-hidden":"true"}),e.jsx("div",{className:"dh-card-icon",children:e.jsx(x,{name:s.icon,size:20})}),e.jsx("strong",{className:"dh-card-name",children:g.name}),e.jsx("span",{className:"dh-card-desc",children:g.description})]},s.slug)})})]})},a)}),e.jsx("style",{children:`
        .dh-hero { padding: 2.5rem 1rem 1rem; text-align: center; }
        .dh-ctx { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem; font-weight: 600; margin: 0 0 0.5rem; color: var(--accent); }
        .dh-h1 { font-size: clamp(1.75rem, 4vw, 2.5rem); margin: 0 0 0.5rem; line-height: 1.15; letter-spacing: -0.02em; }
        .dh-lede { color: var(--ink-500, #5b6072); margin: 0; }
        .dh-category { padding: 1.5rem 1rem 0; }
        .dh-cat-heading { font-size: 1.1rem; font-weight: 600; margin: 0 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid; color: var(--ink-900, #0b0b0f); }
        .dh-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; padding-bottom: 1.5rem; }
        .dh-card {
          display: flex; flex-direction: column; gap: 0.35rem;
          padding: 1.25rem; border-radius: 0.875rem;
          border: 1px solid var(--ink-100, #e8eaf1);
          background: #fff; text-decoration: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          position: relative; overflow: hidden;
        }
        .dh-accent-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--accent);
        }
        .dh-card:hover {
          border-color: color-mix(in srgb, var(--accent) 35%, transparent);
          box-shadow: 0 2px 12px color-mix(in srgb, var(--accent) 10%, transparent);
        }
        .dh-card-icon { width: 38px; height: 38px; border-radius: 10px; background: color-mix(in srgb, var(--accent) 14%, white); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .dh-card-name { font-size: 0.95rem; font-weight: 600; color: var(--ink-900, #0b0b0f); }
        .dh-card-desc { font-size: 0.8rem; color: var(--ink-500, #5b6072); line-height: 1.4; }
      `})]})}const m={en:{pageTitle:"Moosti: Browser Tools for Time, Image, Text, Dev",eyebrow:"Moosti",h1:"Open. Use. Done.",lede:"A network of focused tools. Each one runs entirely in your browser, with no uploads, no accounts, and no surprises.",whatTitle:"What is Moosti?",what1:"Moosti is an umbrella of small, specialized sites, one per task. The Pomodoro timer that grew into a daily habit became the seed: focused tools that respect your time and your data.",what2:"Every tool follows three rules: it runs in your browser, it loads fast, and it does one thing well. We make money through unobtrusive ads. There is no Pro tier, no account, no upload."},pt:{pageTitle:"Moosti: Ferramentas para tempo, imagem e dev",eyebrow:"Moosti",h1:"Abra. Use. Pronto.",lede:"Uma rede de ferramentas focadas. Cada uma roda inteiramente no seu navegador, sem uploads, sem cadastro e sem surpresas.",whatTitle:"O que é o Moosti?",what1:"Moosti é um conjunto de sites pequenos e especializados, um por tarefa. O timer Pomodoro que virou hábito diário foi a semente: ferramentas focadas que respeitam seu tempo e seus dados.",what2:"Cada ferramenta segue três regras: roda no navegador, carrega rápido e faz uma coisa bem. Geramos receita com anúncios discretos. Não há plano Pro, conta ou upload."},fr:{pageTitle:"Moosti: Outils navigateur pour le temps, l'image et le dev",eyebrow:"Moosti",h1:"Ouvrez. Utilisez. Terminé.",lede:"Un réseau d'outils ciblés. Chacun fonctionne entièrement dans votre navigateur, sans uploads, sans comptes et sans surprises.",whatTitle:"Qu'est-ce que Moosti ?",what1:"Moosti est un ensemble de sites petits et spécialisés, un par tâche. Le timer Pomodoro devenu habitude quotidienne en fut la graine: des outils focalisés qui respectent votre temps.",what2:"Chaque outil suit trois règles: il fonctionne dans le navigateur, il se charge vite et fait une chose bien. Nous gagnons de l'argent via des publicités discrètes. Pas de compte, pas d'upload."},es:{pageTitle:"Moosti: Herramientas de navegador para tiempo, imagen y dev",eyebrow:"Moosti",h1:"Abre. Usa. Listo.",lede:"Una red de herramientas enfocadas. Cada una funciona completamente en tu navegador, sin subidas, sin cuentas y sin sorpresas.",whatTitle:"¿Qué es Moosti?",what1:"Moosti es un conjunto de sitios pequeños y especializados, uno por tarea. El timer Pomodoro que se convirtió en hábito diario fue la semilla: herramientas enfocadas que respetan tu tiempo.",what2:"Cada herramienta sigue tres reglas: funciona en el navegador, carga rápido y hace una cosa bien. Ganamos dinero con anuncios discretos. Sin cuenta, sin upload."},ru:{pageTitle:"Moosti: Браузерные инструменты для времени, изображений и разработки",eyebrow:"Moosti",h1:"Открой. Используй. Готово.",lede:"Сеть специализированных инструментов. Каждый работает полностью в вашем браузере, без загрузок, без аккаунтов и без сюрпризов.",whatTitle:"Что такое Moosti?",what1:"Moosti — это набор небольших специализированных сайтов, по одному на задачу. Таймер Помодоро, ставший ежедневной привычкой, стал отправной точкой.",what2:"Каждый инструмент следует трём правилам: работает в браузере, загружается быстро и делает одно дело хорошо. Мы зарабатываем ненавязчивой рекламой. Без аккаунта, без загрузок."},zh:{pageTitle:"Moosti: 适用于时间、图像和开发的浏览器工具",eyebrow:"Moosti",h1:"打开。使用。完成。",lede:"一个专注工具网络。每个工具完全在您的浏览器中运行，无需上传、无需账户，也没有意外。",whatTitle:"什么是 Moosti？",what1:"Moosti 是一系列小型专业网站的集合，每个网站专注于一项任务。每天使用的番茄钟计时器就是最初的灵感。",what2:"每个工具遵循三条规则：在浏览器中运行、加载快速、专注做好一件事。我们通过非侵入性广告盈利。无账户，无上传。"},ja:{pageTitle:"Moosti: 時間・画像・開発のためのブラウザツール",eyebrow:"Moosti",h1:"開く。使う。完了。",lede:"専門的なツールのネットワーク。各ツールはブラウザで完全に動作し、アップロード不要、アカウント不要、驚きもありません。",whatTitle:"Moostitとは？",what1:"Moostitは小さな専門サイトの集合体で、タスクごとに一つあります。毎日の習慣になったポモドーロタイマーがその始まりでした。",what2:"各ツールは三つのルールに従います：ブラウザで動作、高速読み込み、一つのことを上手くこなす。控えめな広告で収益を得ています。アカウントなし、アップロードなし。"}};function q(){const t=p(),r=m[t]??m.en;return e.jsxs("section",{className:"container hh-about",children:[e.jsx("h2",{children:r.whatTitle}),e.jsx("p",{children:r.what1}),e.jsx("p",{children:r.what2}),e.jsx("style",{children:`
        .hh-about { padding: 2.5rem 1rem 3rem; max-width: 720px; line-height: 1.7; }
        .hh-about h2 { font-size: 1.5rem; margin: 0 0 0.75rem; letter-spacing: -0.01em; }
        .hh-about p { color: var(--ink-700, #1f2230); }
      `})]})}function C(){const t=p(),r=m[t]??m.en;return h.useEffect(()=>{document.title=r.pageTitle},[r.pageTitle]),e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"hh-hero",children:[e.jsx("div",{className:"hh-hero-bg","aria-hidden":"true"}),e.jsxs("div",{className:"container hh-hero-inner",children:[e.jsx("span",{className:"hh-eyebrow",children:r.eyebrow}),e.jsx("h1",{children:r.h1}),e.jsx("p",{className:"hh-lede",children:r.lede})]})]}),e.jsx("style",{children:`
        .hh-hero { position: relative; padding: 4rem 1rem 2.5rem; text-align: center; overflow: hidden; }
        .hh-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 20% 0%, rgba(255,90,60,0.08), transparent 60%),
                      radial-gradient(ellipse at 80% 0%, rgba(124,58,237,0.06), transparent 60%);
          pointer-events: none;
        }
        .hh-hero-inner { position: relative; }
        .hh-eyebrow {
          display: inline-block; font-size: 0.7rem; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--brand-600);
          background: color-mix(in srgb, var(--brand-500) 10%, white);
          padding: 0.3rem 0.7rem; border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--brand-500) 18%, white);
          margin-bottom: 1.25rem; font-weight: 600;
        }
        .hh-hero h1 { font-size: clamp(2rem, 5vw, 3.25rem); margin: 0 0 1rem; line-height: 1.05; letter-spacing: -0.025em; }
        .hh-lede { font-size: 1.125rem; color: var(--ink-500, #5b6072); max-width: 620px; margin: 0 auto; line-height: 1.55; }
      `})]})}export{k as ContextIndexBody,z as DevContextBody,q as HubAbout,C as HubHome,U as RadioLobby};
