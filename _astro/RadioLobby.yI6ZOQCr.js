import{j as e}from"./i18n.B2AVHcGw.js";import{R as P,r as c}from"./index.Dkaqzkgy.js";import{r as f,u as g}from"./useTranslations.DYC37lO_.js";import{I as u,r as F,c as L,a as I,t as $,L as w,g as A,b as z,T as D,d as K,e as O,f as B}from"./radio.CMO7cuSi.js";class J extends P.Component{constructor(i){super(i),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i,n){typeof window<"u"&&window.Sentry&&window.Sentry.captureException(i,{contexts:{react:{componentStack:n.componentStack}}})}render(){return this.state.hasError?this.props.fallback??e.jsxs("div",{style:{padding:"2rem",textAlign:"center",color:"#5b6072"},children:[e.jsx("p",{style:{fontWeight:600,color:"#dc2626",marginBottom:"0.5rem"},children:"Something went wrong."}),e.jsx("p",{style:{fontSize:"0.875rem"},children:"Please refresh the page or try again later."})]}):this.props.children}}const x={en:{time:"Time",calculator:"Calculator",image:"Image",radio:"Radio",dev:"Dev",soon:"soon",new:"New",menu:"Menu",close_menu:"Close menu",tagline:"Open. Use. Done.",contact:"Contact",network:"Moosti",privacy:"Privacy",terms:"Terms"},pt:{time:"Tempo",calculator:"Calculadora",image:"Imagem",radio:"Rádio",dev:"Dev",soon:"em breve",new:"Novo",menu:"Menu",close_menu:"Fechar menu",tagline:"Abra. Use. Pronto.",contact:"Contato",network:"Moosti",privacy:"Privacidade",terms:"Termos"},fr:{time:"Temps",calculator:"Calculatrice",image:"Image",radio:"Radio",dev:"Dev",soon:"bientôt",new:"Nouveau",menu:"Menu",close_menu:"Fermer le menu",tagline:"Ouvrez. Utilisez. Terminé.",contact:"Contact",network:"Moosti",privacy:"Confidentialité",terms:"Conditions"},es:{time:"Tiempo",calculator:"Calculadora",image:"Imagen",radio:"Radio",dev:"Dev",soon:"pronto",new:"Nuevo",menu:"Menú",close_menu:"Cerrar menú",tagline:"Abre. Usa. Listo.",contact:"Contacto",network:"Moosti",privacy:"Privacidad",terms:"Términos"},ru:{time:"Время",calculator:"Калькулятор",image:"Изображение",radio:"Радио",dev:"Dev",soon:"скоро",new:"Новое",menu:"Меню",close_menu:"Закрыть меню",tagline:"Открой. Используй. Готово.",contact:"Контакт",network:"Moosti",privacy:"Конфиденциальность",terms:"Условия"},zh:{time:"时间",calculator:"计算器",image:"图像",radio:"电台",dev:"开发",soon:"即将推出",new:"新",menu:"菜单",close_menu:"关闭菜单",tagline:"打开。使用。完成。",contact:"联系我们",network:"Moosti",privacy:"隐私政策",terms:"服务条款"},ja:{time:"時間",calculator:"計算機",image:"画像",radio:"ラジオ",dev:"開発ツール",soon:"近日公開",new:"新着",menu:"メニュー",close_menu:"メニューを閉じる",tagline:"開く。使う。完了。",contact:"お問い合わせ",network:"Moosti",privacy:"プライバシー",terms:"利用規約"}};f("nav",x);function Z({contexts:r}){const i=g("nav");return e.jsxs("nav",{className:"nav-contexts","aria-label":i("menu","Menu"),children:[r.map(n=>{const s=i(n.slug,n.slug),t={"--ctx":n.accent,"--ctx-soft":n.accentSoft};return n.available?e.jsx("a",{href:n.href,className:`nav-link${n.active?" active":""}`,style:t,"aria-current":n.active?"page":void 0,children:e.jsx("span",{className:"nav-link-label",children:s})},n.slug):e.jsx("span",{className:"nav-link nav-link-soon",style:t,title:i("soon"),"aria-disabled":"true",children:e.jsx("span",{className:"nav-link-label",children:s})},n.slug)}),e.jsx("style",{children:`
        .nav-contexts {
          display: none;
          align-items: center;
          gap: 0.2rem;
          margin-left: auto;
        }
        @media (min-width: 768px) {
          .nav-contexts { display: flex; }
        }
        .nav-link {
          display: inline-flex; align-items: center; gap: 0.35rem;
          padding: 0.35rem 0.65rem; border-radius: 999px;
          font-size: 0.8125rem; font-weight: 500;
          color: var(--ink-600, #3d4356); text-decoration: none;
          border: 1px solid transparent;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
          white-space: nowrap; user-select: none;
          position: relative;
        }
        a.nav-link:hover {
          background: var(--ctx-soft); color: var(--ctx);
          border-color: color-mix(in srgb, var(--ctx) 18%, transparent);
        }
        a.nav-link.active {
          background: var(--ctx-soft); color: var(--ctx);
          border-color: color-mix(in srgb, var(--ctx) 22%, transparent);
          font-weight: 600;
        }
        .nav-link-soon { opacity: 0.38; cursor: not-allowed; }
      `})]})}f("nav",x);function ee({contexts:r}){const i=g("nav"),[n,s]=c.useState(!1),t=c.useRef(null),m=c.useId();return c.useEffect(()=>{if(!n)return;const a=l=>{t.current&&!t.current.contains(l.target)&&s(!1)},d=l=>{l.key==="Escape"&&s(!1)};return document.addEventListener("mousedown",a),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",d)}},[n]),c.useEffect(()=>{const a=window.matchMedia("(min-width: 768px)"),d=()=>{a.matches&&s(!1)};return a.addEventListener("change",d),()=>a.removeEventListener("change",d)},[]),e.jsxs("div",{className:"nav-mobile-menu",ref:t,children:[e.jsx("button",{type:"button",className:"nav-menu-btn","aria-expanded":n,"aria-controls":m,"aria-label":n?i("close_menu","Close menu"):i("menu","Menu"),onClick:()=>s(a=>!a),children:e.jsx(u,{name:n?"X":"Menu",size:20})}),n&&e.jsx("nav",{id:m,className:"nav-mobile-panel","aria-label":i("menu","Menu"),children:r.map(a=>{const d=i(a.slug,a.slug),l={"--ctx":a.accent,"--ctx-soft":a.accentSoft};return a.available?e.jsx("a",{href:a.href,className:`nav-mobile-link${a.active?" is-active":""}`,style:l,"aria-current":a.active?"page":void 0,onClick:()=>s(!1),children:d},a.slug):e.jsx("span",{className:"nav-mobile-link is-soon",style:l,"aria-disabled":"true",children:d},a.slug)})}),e.jsx("style",{children:`
        .nav-mobile-menu {
          position: relative;
          display: flex;
          align-items: center;
        }
        @media (min-width: 768px) {
          .nav-mobile-menu { display: none !important; }
        }
        .nav-menu-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border: 1px solid transparent;
          border-radius: 0.5rem;
          background: transparent;
          color: var(--ink-700, #2e3345);
          cursor: pointer;
        }
        .nav-menu-btn:hover {
          background: #f3f4f8;
        }
        .nav-mobile-panel {
          position: absolute;
          top: calc(100% + 0.55rem);
          right: 0;
          z-index: 60;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          min-width: 11rem;
          padding: 0.45rem;
          border-radius: 0.75rem;
          background: #fff;
          border: 1px solid rgba(15, 17, 30, 0.08);
          box-shadow: 0 10px 30px rgba(15, 17, 30, 0.12);
        }
        .nav-mobile-link {
          display: flex;
          align-items: center;
          padding: 0.55rem 0.75rem;
          border-radius: 0.55rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--ink-600, #3d4356);
          text-decoration: none;
          border: 1px solid transparent;
        }
        a.nav-mobile-link:hover {
          background: var(--ctx-soft);
          color: var(--ctx);
        }
        a.nav-mobile-link.is-active {
          background: var(--ctx-soft);
          color: var(--ctx);
          font-weight: 600;
          border-color: color-mix(in srgb, var(--ctx) 22%, transparent);
        }
        .nav-mobile-link.is-soon {
          opacity: 0.38;
          cursor: not-allowed;
        }
      `})]})}f("nav",x);function re({href:r,accent:i,accentSoft:n,active:s}){const m=g("nav")("radio","Radio"),a={"--ctx":i,"--ctx-soft":n};return e.jsxs("a",{href:r,className:`nav-radio${s?" is-active":""}`,style:a,"aria-current":s?"page":void 0,"aria-label":m,children:[e.jsx("span",{className:"nav-radio-icon","aria-hidden":"true",children:e.jsx(u,{name:"Headphones",size:16})}),e.jsx("span",{className:"nav-radio-label",children:m}),e.jsx("style",{children:`
        .nav-radio {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--ctx);
          text-decoration: none;
          background: var(--ctx-soft);
          border: 1px solid color-mix(in srgb, var(--ctx) 28%, transparent);
          box-shadow: 0 1px 2px color-mix(in srgb, var(--ctx) 12%, transparent);
          transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          white-space: nowrap;
          user-select: none;
        }
        .nav-radio:hover {
          border-color: color-mix(in srgb, var(--ctx) 45%, transparent);
          box-shadow: 0 2px 8px color-mix(in srgb, var(--ctx) 18%, transparent);
          transform: translateX(-50%) translateY(-1px);
        }
        .nav-radio.is-active {
          border-color: color-mix(in srgb, var(--ctx) 50%, transparent);
          box-shadow: 0 0 0 2px color-mix(in srgb, var(--ctx) 18%, transparent);
        }
        .nav-radio-icon {
          display: flex;
          align-items: center;
        }
        @media (max-width: 480px) {
          .nav-radio {
            padding: 0.35rem 0.65rem;
            font-size: 0.8125rem;
          }
        }
      `})]})}f("nav",x);function ae({contexts:r,hubUrl:i,year:n}){const s=g("nav");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"ft-inner container",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Moosti"}),e.jsx("p",{className:"ft-muted",children:s("tagline")}),e.jsx("a",{className:"ft-contact",href:"mailto:talk@moosti.com",children:"talk@moosti.com"})]}),e.jsxs("div",{className:"ft-cols",children:[e.jsx("div",{children:e.jsx("ul",{className:"ft-list",children:r.map(t=>e.jsx("li",{children:t.available?e.jsx("a",{href:t.href,children:s(t.slug,t.slug)}):e.jsxs("span",{className:"ft-soon",children:[s(t.slug,t.slug)," ",e.jsxs("em",{children:["· ",s("soon")]})]})},t.slug))})}),e.jsx("div",{children:e.jsxs("ul",{className:"ft-list",children:[e.jsx("li",{children:e.jsx("a",{href:`${i}/privacy`,children:s("privacy")})}),e.jsx("li",{children:e.jsx("a",{href:`${i}/terms`,children:s("terms")})})]})})]})]}),e.jsxs("div",{className:"ft-copyright container",children:["© ",n," Moosti"]}),e.jsx("style",{children:`
        .ft-inner { display: flex; flex-direction: column; gap: 1.5rem; }
        @media (min-width: 768px) { .ft-inner { flex-direction: row; justify-content: space-between; } }
        .ft-cols { display: flex; gap: 3rem; }
        .ft-head { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-500); margin: 0 0 0.5rem; }
        .ft-list { list-style: none; padding: 0; margin: 0; }
        .ft-list li { margin: 0.25rem 0; }
        .ft-list a { color: var(--ink-700); text-decoration: none; font-size: 0.9rem; }
        .ft-list a:hover { color: var(--brand-600); }
        .ft-soon { color: var(--ink-300); font-size: 0.9rem; }
        .ft-soon em { font-style: normal; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; }
        .ft-muted { color: var(--ink-500); font-size: 0.875rem; margin: 0.25rem 0 0; }
        .ft-contact { color: var(--ink-500); font-size: 0.875rem; text-decoration: none; display: block; margin-top: 0.25rem; }
        .ft-contact:hover { color: var(--brand-600); }
        .ft-copyright { margin-top: 1.5rem; font-size: 0.75rem; color: var(--ink-500); }
      `})]})}f("radio",F);const U="#4338ca",X="#eef2ff";function G(){const r=A(),[i,n]=c.useState(null),[s,t]=c.useState(!1),[m,a]=c.useState(null),[d,l]=c.useState(!1);return c.useEffect(()=>(r.hydrateFromPrefs(),n(r.getSelection()),t(r.isPlaying()),a(r.getPlaylist()),l(!0),r.subscribe(()=>{n(r.getSelection()),t(r.isPlaying()),a(r.getPlaylist())})),[r]),{engine:r,selection:i,playing:s,playlist:m,hydrated:d}}function H(r,i){const n=O(r);if(n.length!==0)return n.map(s=>C(s,i)).join(" · ")}function Y(r,i){return r.titleKey?i(r.titleKey,r.title):r.title}function C(r,i){const n=D[r];return i(n.labelKey,i(`lobby.${r}`,r))}function oe(){const r=g("radio"),{engine:i,selection:n,playing:s,playlist:t,hydrated:m}=G(),[a,d]=c.useState("lofi"),[l,y]=c.useState([]);c.useEffect(()=>{t&&(d(L(t)),(t==="guided"||t==="motivational"||t==="study"||t==="concentration")&&y([t]))},[t]);const k=c.useMemo(()=>I(a),[a]),v=c.useMemo(()=>$(a,l),[a,l]),j=w.find(o=>o.id===a)??w[0],E=o=>r("tracks_count").replace("{n}",String(o)),S=o=>{d(o),y([])},T=o=>{y(b=>{const p=b.includes(o)?b.filter(h=>h!==o):[...b,o];return z("lobby",a,p,o),p})},M=()=>{y([]),z("lobby",a,[])},R=async()=>{m&&(K(a,"lobby",{trackCount:v.length,filters:l}),await i.playQueue(v.map(o=>o.id),!0,a))},_=async o=>{m&&(B(o,"lobby",a),await i.select(o,!0))};return e.jsxs("div",{className:"radio-lobby",style:{"--rl-accent":U,"--rl-soft":X},children:[e.jsxs("header",{className:"radio-lobby-hero",children:[e.jsx("h1",{className:"radio-lobby-brand",children:r("lobby_title")}),e.jsx("p",{className:"radio-lobby-lede",children:r("lobby_lede")})]}),e.jsx("section",{className:"radio-lobby-section","aria-label":r("tab_lobby"),children:e.jsx("div",{className:"radio-lobby-playlists",children:w.map(o=>{const b=a===o.id;return e.jsxs("button",{type:"button",className:`radio-lobby-card${b?" is-active":""}`,onClick:()=>S(o.id),"aria-pressed":b,children:[e.jsx("span",{className:"radio-lobby-card-icon","aria-hidden":"true",children:e.jsx(u,{name:o.icon,size:18})}),e.jsxs("span",{className:"radio-lobby-card-body",children:[e.jsx("span",{className:"radio-lobby-card-title",children:r(o.labelKey)}),e.jsx("span",{className:"radio-lobby-card-sub",children:E(o.count)})]})]},o.id)})})}),k.length>0&&e.jsx("section",{className:"radio-lobby-section","aria-label":r("filters"),children:e.jsxs("div",{className:"radio-lobby-filters",children:[e.jsx("span",{className:"radio-lobby-filters-label",children:r("filters")}),e.jsxs("div",{className:"radio-lobby-filter-chips",role:"group",children:[e.jsx("button",{type:"button",className:`radio-lobby-filter${l.length===0?" is-active":""}`,onClick:M,"aria-pressed":l.length===0,children:r("filter_all")}),k.map(o=>{const b=l.includes(o);return e.jsx("button",{type:"button",className:`radio-lobby-filter${b?" is-active":""}`,onClick:()=>T(o),"aria-pressed":b,children:C(o,r)},o)})]})]})}),e.jsxs("section",{className:"radio-lobby-section","aria-label":r(j.labelKey),children:[e.jsxs("div",{className:"radio-lobby-list-head",children:[e.jsx("h2",{className:"radio-lobby-list-title",children:r(j.labelKey)}),e.jsxs("button",{type:"button",className:"radio-lobby-play-all",onClick:()=>void R(),disabled:!m||v.length===0,children:[e.jsx(u,{name:"Play",size:14}),r("play_all")]})]}),e.jsx("ul",{className:"radio-lobby-tracks",role:"listbox",children:v.map((o,b)=>{const p=n===o.id,h=p&&s,N=H(o,r);return e.jsx("li",{children:e.jsxs("button",{type:"button",role:"option","aria-selected":p,className:`radio-lobby-row${p?" is-selected":""}`,onClick:()=>void _(o.id),children:[e.jsx("span",{className:"radio-lobby-row-idx","aria-hidden":"true",children:h?e.jsx(u,{name:"Volume2",size:14}):b+1}),e.jsx("span",{className:"radio-lobby-row-icon","aria-hidden":"true",children:e.jsx(u,{name:o.icon,size:18})}),e.jsxs("span",{className:"radio-lobby-row-meta",children:[e.jsx("span",{className:"radio-lobby-row-title",children:Y(o,r)}),N&&e.jsx("span",{className:"radio-lobby-row-sub",children:N})]}),p&&e.jsx("span",{className:"radio-lobby-row-now",children:r("now_playing")})]})},o.id)})})]}),e.jsx("style",{children:`
        .radio-lobby {
          --rl-ink: #12141c;
          --rl-muted: #5b6072;
          max-width: 920px;
          margin: 0 auto;
          padding: 1rem 1.25rem 5.5rem;
        }
        .radio-lobby-hero {
          margin-bottom: 0.85rem;
          padding: 0.85rem 1rem;
          border-radius: 0.75rem;
          background:
            radial-gradient(ellipse 80% 120% at 0% 0%, color-mix(in srgb, var(--rl-accent) 22%, transparent), transparent 55%),
            linear-gradient(160deg, var(--rl-soft) 0%, #fff 62%);
          border: 1px solid color-mix(in srgb, var(--rl-accent) 14%, transparent);
        }
        .radio-lobby-brand {
          margin: 0;
          font-size: clamp(1.35rem, 3.5vw, 1.65rem);
          font-weight: 750;
          letter-spacing: -0.03em;
          color: var(--rl-accent);
          line-height: 1.15;
        }
        .radio-lobby-lede {
          margin: 0.25rem 0 0;
          max-width: 36rem;
          font-size: 0.875rem;
          line-height: 1.4;
          color: var(--rl-muted);
        }
        .radio-lobby-section { margin-bottom: 0.75rem; }
        .radio-lobby-section:last-of-type { margin-bottom: 0; }
        .radio-lobby-playlists {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.45rem;
        }
        .radio-lobby-card {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          text-align: left;
          padding: 0.65rem 0.75rem;
          border-radius: 0.6rem;
          border: 1px solid color-mix(in srgb, var(--rl-accent) 12%, #e5e7ef);
          background: #fff;
          cursor: pointer;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          color: var(--rl-ink);
        }
        .radio-lobby-card:hover {
          border-color: color-mix(in srgb, var(--rl-accent) 35%, transparent);
          box-shadow: 0 2px 8px color-mix(in srgb, var(--rl-accent) 10%, transparent);
        }
        .radio-lobby-card.is-active {
          border-color: color-mix(in srgb, var(--rl-accent) 45%, transparent);
          background: var(--rl-soft);
        }
        .radio-lobby-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.15rem;
          height: 2.15rem;
          border-radius: 0.45rem;
          background: var(--rl-soft);
          color: var(--rl-accent);
          flex-shrink: 0;
        }
        .radio-lobby-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
          min-width: 0;
          flex: 1;
          line-height: 1.25;
        }
        .radio-lobby-card-title {
          font-size: 0.85rem;
          font-weight: 650;
          letter-spacing: -0.01em;
        }
        .radio-lobby-card-sub {
          font-size: 0.72rem;
          color: var(--rl-muted);
        }
        .radio-lobby-filters {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.4rem 0.65rem;
        }
        .radio-lobby-filters-label {
          font-size: 0.6875rem;
          font-weight: 650;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--rl-muted);
        }
        .radio-lobby-filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        .radio-lobby-filter {
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          border: 1px solid #e5e7ef;
          background: #fff;
          color: var(--rl-ink);
          font-size: 0.75rem;
          font-weight: 550;
          cursor: pointer;
          transition: border-color 0.12s ease, background 0.12s ease, color 0.12s ease;
        }
        .radio-lobby-filter:hover {
          border-color: color-mix(in srgb, var(--rl-accent) 35%, transparent);
        }
        .radio-lobby-filter.is-active {
          border-color: color-mix(in srgb, var(--rl-accent) 45%, transparent);
          background: var(--rl-soft);
          color: var(--rl-accent);
        }
        .radio-lobby-list-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.45rem;
        }
        .radio-lobby-list-title {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--rl-ink);
        }
        .radio-lobby-play-all {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          border: none;
          background: var(--rl-accent);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
        }
        .radio-lobby-play-all:hover { filter: brightness(1.06); }
        .radio-lobby-play-all:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          filter: none;
        }
        .radio-lobby-tracks {
          list-style: none;
          margin: 0;
          padding: 0;
          border: 1px solid #e8eaf2;
          border-radius: 0.65rem;
          overflow: hidden;
          background: #fff;
        }
        .radio-lobby-row {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.75rem;
          border: none;
          border-bottom: 1px solid #eef0f6;
          background: transparent;
          text-align: left;
          cursor: pointer;
          color: var(--rl-ink);
          transition: background 0.12s ease;
        }
        .radio-lobby-tracks li:last-child .radio-lobby-row { border-bottom: none; }
        .radio-lobby-row:hover { background: #f7f8fc; }
        .radio-lobby-row.is-selected {
          background: var(--rl-soft);
        }
        .radio-lobby-row-idx {
          width: 1.15rem;
          text-align: center;
          font-size: 0.7rem;
          color: var(--rl-muted);
          font-variant-numeric: tabular-nums;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
        }
        .radio-lobby-row.is-selected .radio-lobby-row-idx { color: var(--rl-accent); }
        .radio-lobby-row-icon {
          display: flex;
          color: var(--rl-accent);
          opacity: 0.85;
          flex-shrink: 0;
        }
        .radio-lobby-row-meta {
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 0;
          flex: 1;
          line-height: 1.25;
        }
        .radio-lobby-row-title {
          font-size: 0.85rem;
          font-weight: 550;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .radio-lobby-row.is-selected .radio-lobby-row-title { color: var(--rl-accent); font-weight: 650; }
        .radio-lobby-row-sub {
          font-size: 0.7rem;
          color: var(--rl-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .radio-lobby-row-now {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--rl-accent);
          flex-shrink: 0;
        }
        @media (max-width: 560px) {
          .radio-lobby { padding: 0.75rem 0.85rem 5.5rem; }
          .radio-lobby-hero { padding: 0.7rem 0.85rem; margin-bottom: 0.65rem; }
          .radio-lobby-playlists { gap: 0.35rem; }
          .radio-lobby-card-title { font-size: 0.75rem; }
          .radio-lobby-card-sub { font-size: 0.625rem; }
          .radio-lobby-row-now { display: none; }
        }
      `})]})}export{ae as F,Z as N,oe as R,J as T,ee as a,re as b};
