import{j as e}from"./i18n.B2AVHcGw.js";import{R as c}from"./index.Dkaqzkgy.js";import{r as s,u as i}from"./useTranslations.DYC37lO_.js";class p extends c.Component{constructor(a){super(a),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(a,t){typeof window<"u"&&window.Sentry&&window.Sentry.captureException(a,{contexts:{react:{componentStack:t.componentStack}}})}render(){return this.state.hasError?this.props.fallback??e.jsxs("div",{style:{padding:"2rem",textAlign:"center",color:"#5b6072"},children:[e.jsx("p",{style:{fontWeight:600,color:"#dc2626",marginBottom:"0.5rem"},children:"Something went wrong."}),e.jsx("p",{style:{fontSize:"0.875rem"},children:"Please refresh the page or try again later."})]}):this.props.children}}const l={en:{time:"Time",calculator:"Calculator",image:"Image",dev:"Dev",soon:"soon",tagline:"Open. Use. Done.",contact:"Contact",network:"Moosti",privacy:"Privacy",terms:"Terms"},pt:{time:"Tempo",calculator:"Calculadora",image:"Imagem",dev:"Dev",soon:"em breve",tagline:"Abra. Use. Pronto.",contact:"Contato",network:"Moosti",privacy:"Privacidade",terms:"Termos"},fr:{time:"Temps",calculator:"Calculatrice",image:"Image",dev:"Dev",soon:"bientôt",tagline:"Ouvrez. Utilisez. Terminé.",contact:"Contact",network:"Moosti",privacy:"Confidentialité",terms:"Conditions"},es:{time:"Tiempo",calculator:"Calculadora",image:"Imagen",dev:"Dev",soon:"pronto",tagline:"Abre. Usa. Listo.",contact:"Contacto",network:"Moosti",privacy:"Privacidad",terms:"Términos"},ru:{time:"Время",calculator:"Калькулятор",image:"Изображение",dev:"Dev",soon:"скоро",tagline:"Открой. Используй. Готово.",contact:"Контакт",network:"Moosti",privacy:"Конфиденциальность",terms:"Условия"},zh:{time:"时间",calculator:"计算器",image:"图像",dev:"开发",soon:"即将推出",tagline:"打开。使用。完成。",contact:"联系我们",network:"Moosti",privacy:"隐私政策",terms:"服务条款"},ja:{time:"時間",calculator:"計算機",image:"画像",dev:"開発ツール",soon:"近日公開",tagline:"開く。使う。完了。",contact:"お問い合わせ",network:"Moosti",privacy:"プライバシー",terms:"利用規約"}};s("nav",l);function f({contexts:o}){const a=i("nav");return e.jsxs("nav",{className:"nav-contexts","aria-label":"Contexts",children:[o.map(t=>{const n=a(t.slug,t.slug),r={"--ctx":t.accent,"--ctx-soft":t.accentSoft};return t.available?e.jsx("a",{href:t.href,className:`nav-link${t.active?" active":""}`,style:r,"aria-current":t.active?"page":void 0,children:e.jsx("span",{className:"nav-link-label",children:n})},t.slug):e.jsx("span",{className:"nav-link nav-link-soon",style:r,title:a("soon"),"aria-disabled":"true",children:e.jsx("span",{className:"nav-link-label",children:n})},t.slug)}),e.jsx("style",{children:`
        .nav-contexts { display: none; align-items: center; gap: 0.2rem; margin-left: auto; }
        @media (min-width: 768px) { .nav-contexts { display: flex; } }
        .nav-link {
          display: inline-flex; align-items: center; gap: 0.35rem;
          padding: 0.35rem 0.65rem; border-radius: 999px;
          font-size: 0.8125rem; font-weight: 500;
          color: var(--ink-600, #3d4356); text-decoration: none;
          border: 1px solid transparent;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
          white-space: nowrap; user-select: none;
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
      `})]})}s("nav",l);function g({contexts:o,hubUrl:a,year:t}){const n=i("nav");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"ft-inner container",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Moosti"}),e.jsx("p",{className:"ft-muted",children:n("tagline")}),e.jsx("a",{className:"ft-contact",href:"mailto:talk@moosti.com",children:"talk@moosti.com"})]}),e.jsxs("div",{className:"ft-cols",children:[e.jsx("div",{children:e.jsx("ul",{className:"ft-list",children:o.map(r=>e.jsx("li",{children:r.available?e.jsx("a",{href:r.href,children:n(r.slug,r.slug)}):e.jsxs("span",{className:"ft-soon",children:[n(r.slug,r.slug)," ",e.jsxs("em",{children:["· ",n("soon")]})]})},r.slug))})}),e.jsx("div",{children:e.jsxs("ul",{className:"ft-list",children:[e.jsx("li",{children:e.jsx("a",{href:`${a}/privacy`,children:n("privacy")})}),e.jsx("li",{children:e.jsx("a",{href:`${a}/terms`,children:n("terms")})})]})})]})]}),e.jsxs("div",{className:"ft-copyright container",children:["© ",t," Moosti"]}),e.jsx("style",{children:`
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
      `})]})}export{g as F,f as N,p as T};
