import{j as e}from"./i18n.B2AVHcGw.js";import{r as l}from"./index.Dkaqzkgy.js";import{r as le,u as de}from"./useTranslations.DYC37lO_.js";import{r as ce,h as I,a as me,t as be,i as pe,j as ue,k as fe,I as b,R as xe,L as X,g as he,l as ge,e as H,m as D,n as _,o as ye,p as ve,d as ke,b as G,T as we,f as je,q as Ne,s as Ce}from"./radio.CMO7cuSi.js";import"./ga4.CrHqlIrT.js";function ze({playing:o}){const s=l.useRef(null),n=l.useRef(o);return n.current=o,l.useEffect(()=>{const i=s.current;if(!i)return;const t=i.getContext("2d");if(!t)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let x=0,c=0,m=0,p=1;const h=[],g=()=>{p=Math.min(window.devicePixelRatio||1,2),c=window.innerWidth,m=window.innerHeight,i.width=Math.floor(c*p),i.height=Math.floor(m*p),i.style.width=`${c}px`,i.style.height=`${m}px`,t.setTransform(p,0,0,p,0,0);const k=Math.min(48,Math.floor(c*m/28e3));h.length=0;for(let v=0;v<k;v++)h.push({x:Math.random()*c,y:Math.random()*m,r:1.2+Math.random()*2.4,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.18,a:.15+Math.random()*.35})};g(),window.addEventListener("resize",g);const S=performance.now(),R=k=>{const v=(k-S)/1e3,w=n.current,T=w?1:.55;t.clearRect(0,0,c,m);const N=t.createRadialGradient(c*.5,m*.45,0,c*.5,m*.45,Math.max(c,m)*.7),$=w?.5+.5*Math.sin(v*.7):.35;N.addColorStop(0,`rgba(70, 130, 150, ${.1+$*.08})`),N.addColorStop(.45,`rgba(30, 60, 90, ${.08+$*.04})`),N.addColorStop(1,"rgba(10, 16, 24, 0)"),t.fillStyle=N,t.fillRect(0,0,c,m),t.lineWidth=1.25;for(let r=0;r<4;r++){const y=m*(.28+r*.14),C=18+r*10,P=.0035+r*6e-4,F=v*(.35+r*.08)*T+r*1.2;t.beginPath();for(let z=0;z<=c;z+=6){const u=y+Math.sin(z*P+F)*C+Math.sin(z*P*.45+F*.7)*(C*.35);z===0?t.moveTo(z,u):t.lineTo(z,u)}t.strokeStyle=`rgba(140, 190, 210, ${.08+r*.03+(w?.04:0)})`,t.stroke()}for(const r of h){f||(r.x+=r.vx*T,r.y+=r.vy*T,r.x<-10&&(r.x=c+10),r.x>c+10&&(r.x=-10),r.y<-10&&(r.y=m+10),r.y>m+10&&(r.y=-10));const y=.65+.35*Math.sin(v*1.2+r.x*.01);t.beginPath(),t.arc(r.x,r.y,r.r,0,Math.PI*2),t.fillStyle=`rgba(180, 210, 230, ${r.a*y*(w?1.15:.85)})`,t.fill()}const E=c*.5,M=m*.42;for(let r=0;r<3;r++){const y=70+r*55,C=w?12*Math.sin(v*.55+r*.9):4*Math.sin(v*.3+r);t.beginPath(),t.arc(E,M,y+C,0,Math.PI*2),t.strokeStyle=`rgba(150, 195, 215, ${.07+r*.02})`,t.lineWidth=1,t.stroke()}x=window.requestAnimationFrame(R)};return f?R(performance.now()):x=window.requestAnimationFrame(R),()=>{window.cancelAnimationFrame(x),window.removeEventListener("resize",g)}},[]),e.jsx("canvas",{ref:s,className:"moosti-radio-focus-canvas","aria-hidden":"true"})}le("radio",ce);const Se={lobby:xe.length,lofi:I("lofi").length,soundscape:I("soundscape").length,meditation:I("meditation").length};function K(o,s){const n=we[o];return s(n.labelKey,s(`lobby.${o}`,o))}function Re(o,s){return o.titleKey?s(o.titleKey,o.title):o.title}function Me(o,s){const n=H(o);if(n.length!==0)return n.map(i=>K(i,s)).join(" · ")}const U="moosti:radio:collapsed";function Ee(){try{return localStorage.getItem(U)==="1"}catch{return!1}}function Pe(o){try{localStorage.setItem(U,o?"1":"0")}catch{}}function W(o){if(!Number.isFinite(o)||o<0)return"0:00";const s=Math.floor(o/60),n=Math.floor(o%60);return`${s}:${n.toString().padStart(2,"0")}`}function $e(){const o=he(),[s,n]=l.useState(null),[i,t]=l.useState(!1),[f,x]=l.useState(.7),[c,m]=l.useState("all"),[p,h]=l.useState(null),[g,S]=l.useState(!1);return l.useEffect(()=>(o.hydrateFromPrefs(),n(o.getSelection()),t(o.isPlaying()),x(o.getVolume()),m(o.getRepeat()),h(o.getPlaylist()),S(!0),o.subscribe(()=>{n(o.getSelection()),t(o.isPlaying()),x(o.getVolume()),m(o.getRepeat()),h(o.getPlaylist())})),[o]),{engine:o,selection:s,playing:i,volume:f,repeat:c,playlist:p,hydrated:g}}function Te(o,s,n){const[i,t]=l.useState(0),[f,x]=l.useState(0);return l.useEffect(()=>{let c=0;const m=()=>{const p=o.getCurrentAudio();p?(t(p.currentTime||0),x(Number.isFinite(p.duration)?p.duration:0)):(t(0),x(0)),c=window.requestAnimationFrame(m)};return c=window.requestAnimationFrame(m),()=>window.cancelAnimationFrame(c)},[o,s,n]),{current:i,duration:f}}function Fe(o,s,n){if(!o)return{title:n("pick_prompt"),icon:"Music"};const i=ge(o);if(!i)return{title:o,icon:"Music"};const t=H(i),f=t.length>0?t.map(x=>K(x,n)).join(" · "):void 0;return{title:i.titleKey?n(i.titleKey,i.title):i.title,subtitle:f??(s?n(`lobby.${s}`):void 0),icon:i.icon}}function Le(o){return o==="one"?"Repeat1":"Repeat"}function Be(){const o=de("radio"),{engine:s,selection:n,playing:i,volume:t,repeat:f,playlist:x,hydrated:c}=$e(),{current:m,duration:p}=Te(s,i,n),[h,g]=l.useState(!1),[S,R]=l.useState(!1),[k,v]=l.useState(!1),[w,T]=l.useState("lobby"),[N,$]=l.useState([]),[E,M]=l.useState(!1),r=l.useRef(null),y=Fe(n,x,o),C=n!==null,P=C&&s.canSkip(),F=p>0?Math.min(1,m/p):0,z=a=>o("tracks_count").replace("{n}",String(a)),u=w==="lobby"?null:w,O=l.useMemo(()=>u?me(u):[],[u]),Y=l.useMemo(()=>u?be(u,N):[],[u,N]);l.useEffect(()=>{$([])},[w]),l.useEffect(()=>{c&&R(Ee())},[c]),l.useEffect(()=>{if(c)return document.body.classList.toggle("radio-collapsed",S&&!k),Pe(S),()=>{document.body.classList.remove("radio-collapsed")}},[S,k,c]),l.useEffect(()=>{if(c)return document.body.classList.toggle("radio-focus",k),()=>{document.body.classList.remove("radio-focus")}},[k,c]),l.useEffect(()=>{if(!h&&!k)return;const a=d=>{if(d.key==="Escape"){if(k){D("escape"),v(!1);return}_(!1),g(!1)}};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[h,k]),l.useEffect(()=>{if(!E)return;const a=j=>{r.current&&!r.current.contains(j.target)&&M(!1)},d=j=>{j.key==="Escape"&&M(!1)};return document.addEventListener("mousedown",a),document.addEventListener("keydown",d),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",d)}},[E]);const A=l.useCallback(a=>{n&&(i?pe(n,a):ue(n,a)),s.toggle()},[s,i,n]),L=l.useCallback((a,d)=>{fe(a,d,n),a==="next"?s.next():s.previous()},[s,n]),J=()=>{g(!1),M(!1),v(!1),R(!0),Ce()},B=()=>{R(!1),ye()},V=()=>{g(!1),M(!1),R(!1),v(!0),ve()},Q=()=>{v(!1),D("button")},q=()=>{g(!1),_(!1)},Z=()=>{g(!0),_(!0)},ee=()=>{g(a=>{const d=!a;return _(d),d})},oe=a=>{const d=Number(a.target.value);Number.isFinite(d)&&s.seek(d)},ae=async a=>{je(a,"player",u??void 0),await s.select(a,!0),g(!1)},ie=async a=>{const d=X.find(j=>j.id===a)?.count;ke(a,"player",{trackCount:d}),await s.playCategory(a,!0),g(!1)},re=a=>{u&&$(d=>{const j=d.includes(a)?d.filter(ne=>ne!==a):[...d,a];return G("player",u,j,a),j})},te=()=>{u&&($([]),G("player",u,[]))},se=()=>{s.cycleRepeat(),Ne(s.getRepeat())};return c?k?e.jsxs("div",{className:"moosti-radio is-focus",children:[e.jsxs("div",{className:"moosti-radio-focus",role:"dialog","aria-modal":"true","aria-label":o("focus_mode"),children:[e.jsx("div",{className:"moosti-radio-focus-bg","aria-hidden":"true",children:e.jsx(ze,{playing:i})}),e.jsxs("div",{className:"moosti-radio-focus-center",children:[e.jsx("p",{className:"moosti-radio-focus-title",children:y.title}),y.subtitle&&e.jsx("p",{className:"moosti-radio-focus-sub",children:y.subtitle}),e.jsxs("div",{className:"moosti-radio-focus-transport",children:[e.jsx("button",{type:"button",className:"moosti-radio-focus-btn",onClick:()=>L("previous","focus"),disabled:!P,"aria-label":o("previous"),children:e.jsx(b,{name:"SkipBack",size:22})}),e.jsx("button",{type:"button",className:`moosti-radio-focus-play${i?" is-playing":""}`,onClick:()=>A("focus"),disabled:!C,"aria-pressed":i,"aria-label":o(i?"pause":"play"),children:i?e.jsx(b,{name:"Pause",size:28}):e.jsx(b,{name:"Play",size:28})}),e.jsx("button",{type:"button",className:"moosti-radio-focus-btn",onClick:()=>L("next","focus"),disabled:!P,"aria-label":o("next"),children:e.jsx(b,{name:"SkipForward",size:22})})]}),e.jsxs("button",{type:"button",className:"moosti-radio-focus-exit",onClick:Q,"aria-label":o("exit_focus"),children:[e.jsx(b,{name:"X",size:16}),e.jsx("span",{children:o("exit_focus")})]})]})]}),e.jsx("style",{children:`
          .moosti-radio.is-focus {
            position: relative;
            z-index: 70;
          }
          .moosti-radio-focus {
            position: fixed;
            inset: 0;
            z-index: 70;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0a1018;
            color: #e8eef8;
            overflow: hidden;
            padding: max(4.5rem, env(safe-area-inset-top, 0px)) max(1.5rem, env(safe-area-inset-right, 0px)) max(1.5rem, env(safe-area-inset-bottom, 0px)) max(1.5rem, env(safe-area-inset-left, 0px));
          }
          .moosti-radio-focus-bg {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .moosti-radio-focus-canvas {
            display: block;
            width: 100%;
            height: 100%;
          }
          .moosti-radio-focus-center {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.65rem;
            max-width: 28rem;
            width: 100%;
          }
          .moosti-radio-focus-title {
            margin: 0;
            font-size: clamp(1.35rem, 4vw, 1.85rem);
            font-weight: 650;
            letter-spacing: -0.03em;
            line-height: 1.2;
            color: #f2f6fc;
          }
          .moosti-radio-focus-sub {
            margin: 0;
            font-size: 0.95rem;
            color: rgba(232, 238, 248, 0.55);
            line-height: 1.4;
          }
          .moosti-radio-focus-transport {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.1rem;
            margin-top: 1.75rem;
          }
          .moosti-radio-focus-exit {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            margin-top: 1.35rem;
            padding: 0.5rem 1rem 0.5rem 0.75rem;
            border: 1px solid rgba(232, 238, 248, 0.22);
            border-radius: 999px;
            background: rgba(12, 18, 32, 0.55);
            color: rgba(232, 238, 248, 0.92);
            font-size: 0.8125rem;
            font-weight: 600;
            cursor: pointer;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
          }
          .moosti-radio-focus-exit:hover {
            background: rgba(232, 238, 248, 0.14);
            border-color: rgba(232, 238, 248, 0.4);
            color: #fff;
          }
          .moosti-radio-focus-btn,
          .moosti-radio-focus-play {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            color: #e8eef8;
            background: transparent;
            transition: transform 0.15s ease, opacity 0.15s ease, background 0.15s ease;
          }
          .moosti-radio-focus-btn {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            opacity: 0.75;
          }
          .moosti-radio-focus-btn:hover:not(:disabled) {
            opacity: 1;
            background: rgba(255,255,255,0.08);
          }
          .moosti-radio-focus-btn:disabled {
            opacity: 0.28;
            cursor: not-allowed;
          }
          .moosti-radio-focus-play {
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.16);
          }
          .moosti-radio-focus-play:hover:not(:disabled) {
            background: rgba(255,255,255,0.18);
            transform: scale(1.04);
          }
          .moosti-radio-focus-play:disabled {
            opacity: 0.35;
            cursor: not-allowed;
          }
          .moosti-radio-focus-play.is-playing {
            background: rgba(94, 160, 180, 0.28);
            border-color: rgba(148, 200, 210, 0.35);
          }
        `})]}):S?e.jsxs("div",{className:"moosti-radio is-collapsed",children:[e.jsxs("div",{className:"moosti-radio-bubble",role:"region","aria-label":o("library"),children:[e.jsx("button",{type:"button",className:"moosti-radio-bubble-art",onClick:B,title:o("expand"),"aria-label":o("expand"),children:e.jsx(b,{name:y.icon,size:20})}),e.jsx("button",{type:"button",className:`moosti-radio-bubble-play${i?" is-playing":""}`,onClick:()=>A("bubble"),disabled:!C,"aria-pressed":i,"aria-label":o(i?"pause":"play"),children:i?e.jsx(b,{name:"Pause",size:16}):e.jsx(b,{name:"Play",size:16})}),e.jsx("button",{type:"button",className:"moosti-radio-bubble-expand",onClick:V,"aria-label":o("focus_mode"),title:o("focus_mode"),children:e.jsx(b,{name:"Expand",size:16})}),e.jsx("button",{type:"button",className:"moosti-radio-bubble-expand",onClick:B,"aria-label":o("expand"),title:o("expand"),children:e.jsx(b,{name:"ChevronUp",size:16})})]}),e.jsx("style",{children:`
          .moosti-radio.is-collapsed {
            position: relative;
            z-index: 40;
          }
          .moosti-radio-bubble {
            position: fixed;
            left: max(0.85rem, env(safe-area-inset-left, 0px));
            bottom: max(0.85rem, env(safe-area-inset-bottom, 0px));
            z-index: 42;
            display: flex;
            align-items: center;
            gap: 0.2rem;
            padding: 0.35rem;
            border-radius: 999px;
            background: #fff;
            border: 1px solid rgba(15, 17, 30, 0.1);
            box-shadow: 0 8px 28px rgba(15, 17, 30, 0.16);
          }
          .moosti-radio-bubble-art,
          .moosti-radio-bubble-expand {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.25rem;
            height: 2.25rem;
            border: none;
            border-radius: 50%;
            background: #eef2ff;
            color: #4338ca;
            cursor: pointer;
          }
          .moosti-radio-bubble-art:hover,
          .moosti-radio-bubble-expand:hover {
            filter: brightness(0.97);
          }
          .moosti-radio-bubble-play {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.35rem;
            height: 2.35rem;
            border: none;
            border-radius: 50%;
            background: #0b0b0f;
            color: #fff;
            cursor: pointer;
          }
          .moosti-radio-bubble-play:disabled {
            opacity: 0.4;
            cursor: default;
          }
          .moosti-radio-bubble-play.is-playing {
            background: #4338ca;
          }
          .moosti-radio-bubble-play:not(:disabled):hover {
            opacity: 0.92;
          }
        `})]}):e.jsxs("div",{className:"moosti-radio","data-open":h?"true":"false",children:[h&&e.jsx("div",{className:"moosti-radio-backdrop",onClick:q,"aria-hidden":"true"}),h&&e.jsxs("div",{className:"moosti-radio-panel",role:"dialog","aria-modal":"true","aria-label":o("library"),children:[e.jsxs("div",{className:"moosti-radio-panel-head",children:[e.jsx("div",{className:"moosti-radio-tabs",role:"tablist",children:[["lobby","tab_lobby"],["lofi","tab_lofi"],["soundscape","tab_soundscape"],["meditation","tab_meditation"]].map(([a,d])=>e.jsxs("button",{type:"button",role:"tab","aria-selected":w===a,className:`moosti-radio-tab${w===a?" is-active":""}`,onClick:()=>T(a),children:[o(d),e.jsx("span",{className:"moosti-radio-tab-count",children:Se[a]})]},a))}),e.jsx("div",{className:"moosti-radio-panel-actions",children:e.jsx("button",{type:"button",className:"moosti-radio-text-btn",onClick:q,"aria-label":o("close"),children:o("close")})})]}),e.jsxs("div",{className:"moosti-radio-panel-body",children:[w==="lobby"&&e.jsxs("div",{className:"moosti-radio-lobby",children:[e.jsx("p",{className:"moosti-radio-lobby-hint",children:o("lobby_hint")}),e.jsx("ul",{className:"moosti-radio-grid",role:"listbox","aria-label":o("tab_lobby"),children:X.map(a=>{const d=x===a.id;return e.jsx("li",{children:e.jsxs("button",{type:"button",role:"option","aria-selected":d,className:`moosti-radio-card${d?" is-selected":""}`,onClick:()=>void ie(a.id),children:[e.jsx("span",{className:"moosti-radio-card-icon","aria-hidden":"true",children:e.jsx(b,{name:a.icon,size:20})}),e.jsx("span",{className:"moosti-radio-card-title",children:o(a.labelKey)}),e.jsx("span",{className:"moosti-radio-card-sub",children:z(a.count)})]})},a.id)})})]}),u&&e.jsxs("div",{className:"moosti-radio-category",children:[O.length>0&&e.jsxs("div",{className:"moosti-radio-filters","aria-label":o("filters"),children:[e.jsx("span",{className:"moosti-radio-filters-label",children:o("filters")}),e.jsxs("div",{className:"moosti-radio-filter-chips",role:"group",children:[e.jsx("button",{type:"button",className:`moosti-radio-filter${N.length===0?" is-active":""}`,onClick:te,"aria-pressed":N.length===0,children:o("filter_all")}),O.map(a=>{const d=N.includes(a);return e.jsx("button",{type:"button",className:`moosti-radio-filter${d?" is-active":""}`,onClick:()=>re(a),"aria-pressed":d,children:K(a,o)},a)})]})]}),e.jsx("ul",{className:"moosti-radio-grid",role:"listbox","aria-label":o(`tab_${u}`),children:Y.map(a=>{const d=n===a.id,j=Me(a,o);return e.jsx("li",{children:e.jsxs("button",{type:"button",role:"option","aria-selected":d,className:`moosti-radio-card${d?" is-selected":""}`,onClick:()=>void ae(a.id),children:[e.jsx("span",{className:"moosti-radio-card-icon","aria-hidden":"true",children:e.jsx(b,{name:a.icon,size:20})}),e.jsx("span",{className:"moosti-radio-card-title",children:Re(a,o)}),j&&e.jsx("span",{className:"moosti-radio-card-sub",children:j})]})},a.id)})})]})]})]}),e.jsxs("div",{className:"moosti-radio-bar",role:"region","aria-label":o("library"),children:[e.jsxs("button",{type:"button",className:"moosti-radio-track",onClick:Z,title:o("choose"),children:[e.jsx("span",{className:"moosti-radio-art","aria-hidden":"true",children:e.jsx(b,{name:y.icon,size:22})}),e.jsxs("span",{className:"moosti-radio-meta",children:[e.jsx("span",{className:"moosti-radio-now-title",children:y.title}),y.subtitle&&e.jsx("span",{className:"moosti-radio-now-sub",children:y.subtitle})]})]}),e.jsxs("div",{className:"moosti-radio-center",children:[e.jsxs("div",{className:"moosti-radio-transport",children:[e.jsxs("div",{className:"moosti-radio-transport-side is-left",children:[e.jsx("span",{className:"moosti-radio-icon-spacer","aria-hidden":"true"}),e.jsx("button",{type:"button",className:"moosti-radio-icon-btn",onClick:()=>L("previous","player"),disabled:!P,"aria-label":o("previous"),children:e.jsx(b,{name:"SkipBack",size:18})})]}),e.jsx("button",{type:"button",className:`moosti-radio-play${i?" is-playing":""}`,onClick:()=>A("player"),disabled:!C,"aria-pressed":i,"aria-label":o(i?"pause":"play"),children:i?e.jsx(b,{name:"Pause",size:20}):e.jsx(b,{name:"Play",size:20})}),e.jsxs("div",{className:"moosti-radio-transport-side is-right",children:[e.jsx("button",{type:"button",className:"moosti-radio-icon-btn",onClick:()=>L("next","player"),disabled:!P,"aria-label":o("next"),children:e.jsx(b,{name:"SkipForward",size:18})}),e.jsxs("button",{type:"button",className:`moosti-radio-icon-btn moosti-radio-repeat${f!=="off"?" is-active":""}`,onClick:se,"aria-label":o(`repeat.${f}`),title:o(`repeat.${f}`),children:[e.jsx(b,{name:Le(f),size:16}),f==="off"&&e.jsx("span",{className:"moosti-radio-repeat-off","aria-hidden":"true"})]})]})]}),e.jsxs("div",{className:"moosti-radio-progress",children:[e.jsx("span",{className:"moosti-radio-time",children:W(m)}),e.jsx("input",{type:"range",className:"moosti-radio-seek",min:0,max:p||0,step:.1,value:Math.min(m,p||0),disabled:!C||p<=0,onChange:oe,style:{"--progress":`${F*100}%`},"aria-label":o("library")}),e.jsx("span",{className:"moosti-radio-time",children:W(p)})]})]}),e.jsxs("div",{className:"moosti-radio-right",children:[e.jsxs("div",{className:"moosti-radio-vol-wrap",ref:r,children:[E&&e.jsx("div",{className:"moosti-radio-vol-pop",role:"dialog","aria-label":o("volume"),children:e.jsx("input",{type:"range",className:"moosti-radio-vol-slider",min:0,max:1,step:.01,value:t,"aria-orientation":"vertical",onChange:a=>s.setVolume(Number(a.target.value)),"aria-label":o("volume"),style:{"--vol":`${t*100}%`}})}),e.jsx("button",{type:"button",className:`moosti-radio-icon-btn${E?" is-active":""}`,onClick:()=>M(a=>!a),"aria-label":o("volume"),"aria-expanded":E,title:o("volume"),children:e.jsx(b,{name:t<=.001?"VolumeX":"Volume2",size:18})})]}),e.jsx("button",{type:"button",className:`moosti-radio-icon-btn${h?" is-active":""}`,onClick:()=>{M(!1),ee()},"aria-expanded":h,"aria-label":o("choose"),title:o("choose"),children:e.jsx(b,{name:"ListMusic",size:18})}),e.jsx("button",{type:"button",className:"moosti-radio-icon-btn",onClick:V,"aria-label":o("focus_mode"),title:o("focus_mode"),children:e.jsx(b,{name:"Expand",size:18})}),e.jsx("button",{type:"button",className:"moosti-radio-icon-btn",onClick:J,"aria-label":o("collapse"),title:o("collapse"),children:e.jsx(b,{name:"ChevronDown",size:18})})]})]}),e.jsx("style",{children:`
        .moosti-radio {
          --radio-h: 4.75rem;
          position: relative;
          z-index: 40;
        }
        .moosti-radio-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(11, 11, 15, 0.35);
          z-index: 41;
        }
        .moosti-radio-panel {
          position: fixed;
          left: 50%;
          bottom: calc(var(--radio-h) + 0.75rem + env(safe-area-inset-bottom, 0px));
          transform: translateX(-50%);
          width: min(640px, calc(100vw - 1.5rem));
          height: min(62vh, 26rem);
          max-height: calc(100dvh - var(--radio-h) - 1.75rem - env(safe-area-inset-bottom, 0px));
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding: 0.75rem;
          border-radius: var(--radius-lg, 0.75rem);
          background: var(--surface, #fff);
          border: 1px solid var(--ink-100, #e8eaf1);
          box-shadow: 0 12px 40px rgba(15, 17, 30, 0.18);
          z-index: 42;
          overflow: hidden;
        }
        .moosti-radio-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .moosti-radio-tabs {
          display: flex;
          gap: 0.25rem;
          padding: 0.2rem;
          border-radius: 999px;
          background: var(--ink-50, #f5f6fa);
          overflow-x: auto;
          max-width: 100%;
        }
        .moosti-radio-tab {
          border: none;
          background: transparent;
          color: var(--ink-500, #5b6072);
          font-weight: 600;
          font-size: 0.8rem;
          padding: 0.4rem 0.7rem;
          border-radius: 999px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .moosti-radio-tab.is-active {
          background: var(--surface, #fff);
          color: var(--ink-900, #0b0b0f);
          box-shadow: var(--shadow-sm, 0 1px 2px rgba(15, 17, 30, 0.04));
        }
        .moosti-radio-tab-count {
          font-size: 0.68rem;
          font-weight: 650;
          font-variant-numeric: tabular-nums;
          color: var(--ink-500, #5b6072);
          opacity: 0.85;
        }
        .moosti-radio-tab.is-active .moosti-radio-tab-count {
          color: var(--brand-500, #ff5a3c);
          opacity: 1;
        }
        .moosti-radio-panel-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .moosti-radio-text-btn {
          border: none;
          background: transparent;
          color: var(--ink-500, #5b6072);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0.25rem 0.4rem;
        }
        .moosti-radio-text-btn:hover { color: var(--ink-900, #0b0b0f); }
        .moosti-radio-panel-body {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .moosti-radio-category {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .moosti-radio-filters {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem 0.55rem;
          position: sticky;
          top: 0;
          z-index: 1;
          padding: 0.1rem 0 0.35rem;
          background: var(--surface, #fff);
        }
        .moosti-radio-filters-label {
          font-size: 0.65rem;
          font-weight: 650;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--ink-500, #5b6072);
        }
        .moosti-radio-filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        .moosti-radio-filter {
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          border: 1px solid var(--ink-100, #e8eaf1);
          background: #fff;
          color: var(--ink-900, #0b0b0f);
          font-size: 0.72rem;
          font-weight: 550;
          cursor: pointer;
        }
        .moosti-radio-filter:hover {
          border-color: color-mix(in srgb, var(--brand-500, #ff5a3c) 35%, transparent);
        }
        .moosti-radio-filter.is-active {
          border-color: color-mix(in srgb, var(--brand-500, #ff5a3c) 45%, transparent);
          background: color-mix(in srgb, var(--brand-500, #ff5a3c) 8%, white);
          color: var(--brand-500, #ff5a3c);
        }
        .moosti-radio-lobby {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          min-height: 100%;
        }
        .moosti-radio-lobby-hint {
          margin: 0;
          font-size: 0.8rem;
          color: var(--ink-500, #5b6072);
          line-height: 1.35;
          flex-shrink: 0;
        }
        .moosti-radio-grid {
          list-style: none;
          margin: 0;
          padding: 0 0.1rem 0.15rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 0.5rem;
        }
        .moosti-radio-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.65rem 0.45rem;
          border-radius: var(--radius-lg, 0.75rem);
          border: 1px solid var(--ink-100, #e8eaf1);
          background: #fff;
          cursor: pointer;
          text-align: center;
          transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
        }
        .moosti-radio-card:hover {
          border-color: color-mix(in srgb, var(--brand-500, #ff5a3c) 35%, transparent);
        }
        .moosti-radio-card.is-selected {
          border-color: var(--brand-500, #ff5a3c);
          background: color-mix(in srgb, var(--brand-500, #ff5a3c) 8%, white);
          box-shadow: 0 0 0 1px var(--brand-500, #ff5a3c);
        }
        .moosti-radio-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--brand-500, #ff5a3c) 14%, white);
          color: var(--brand-500, #ff5a3c);
          margin-bottom: 0.1rem;
        }
        .moosti-radio-card-title {
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--ink-900, #0b0b0f);
          line-height: 1.25;
        }
        .moosti-radio-card-sub {
          font-size: 0.7rem;
          color: var(--ink-500, #5b6072);
          line-height: 1.3;
        }

        .moosti-radio-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 43;
          min-height: var(--radio-h);
          padding: 0.55rem 1rem calc(0.55rem + env(safe-area-inset-bottom, 0px));
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) minmax(0, 1fr);
          align-items: center;
          gap: 0.75rem;
          background: color-mix(in srgb, var(--surface, #fff) 94%, transparent);
          border-top: 1px solid var(--ink-100, #e8eaf1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 -4px 24px rgba(15, 17, 30, 0.06);
        }

        .moosti-radio-track {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          min-width: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          padding: 0;
        }
        .moosti-radio-art {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--brand-500, #ff5a3c) 14%, white);
          color: var(--brand-500, #ff5a3c);
        }
        .moosti-radio-meta {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          min-width: 0;
        }
        .moosti-radio-now-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--ink-900, #0b0b0f);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .moosti-radio-now-sub {
          font-size: 0.75rem;
          color: var(--ink-500, #5b6072);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .moosti-radio-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          min-width: 0;
          width: 100%;
        }
        .moosti-radio-transport {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          width: min(100%, 28rem);
          gap: 0.35rem;
        }
        .moosti-radio-transport-side {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .moosti-radio-transport-side.is-left {
          justify-content: flex-end;
        }
        .moosti-radio-transport-side.is-right {
          justify-content: flex-start;
        }
        .moosti-radio-icon-spacer {
          width: 2rem;
          height: 2rem;
          flex-shrink: 0;
        }
        .moosti-radio-icon-btn {
          position: relative;
          width: 2rem;
          height: 2rem;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: var(--ink-500, #5b6072);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .moosti-radio-icon-btn:hover:not(:disabled) {
          color: var(--ink-900, #0b0b0f);
          background: var(--ink-50, #f5f6fa);
        }
        .moosti-radio-icon-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .moosti-radio-icon-btn.is-active {
          color: var(--brand-500, #ff5a3c);
        }
        .moosti-radio-play {
          width: 2.6rem;
          height: 2.6rem;
          border: none;
          border-radius: 999px;
          background: var(--brand-500, #ff5a3c);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-500, #ff5a3c) 28%, transparent);
          flex-shrink: 0;
        }
        .moosti-radio-play:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          box-shadow: none;
        }
        .moosti-radio-play.is-playing {
          background: var(--ink-900, #0b0b0f);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-500, #ff5a3c) 35%, transparent);
        }
        .moosti-radio-play:not(:disabled):hover { opacity: 0.92; }
        .moosti-radio-repeat-off {
          position: absolute;
          inset: 35% 22%;
          border-top: 1.5px solid currentColor;
          transform: rotate(-35deg);
          pointer-events: none;
          opacity: 0.85;
        }

        .moosti-radio-progress {
          width: min(100%, 28rem);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 0.45rem;
        }
        .moosti-radio-time {
          font-size: 0.7rem;
          font-variant-numeric: tabular-nums;
          color: var(--ink-500, #5b6072);
          min-width: 2.1rem;
        }
        .moosti-radio-time:last-child { text-align: right; }
        .moosti-radio-seek {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(
            to right,
            var(--ink-900, #0b0b0f) 0%,
            var(--ink-900, #0b0b0f) var(--progress, 0%),
            var(--ink-100, #e8eaf1) var(--progress, 0%),
            var(--ink-100, #e8eaf1) 100%
          );
          outline: none;
          cursor: pointer;
        }
        .moosti-radio-seek:disabled { cursor: default; opacity: 0.55; }
        .moosti-radio-seek::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--ink-900, #0b0b0f);
          border: none;
          cursor: pointer;
        }
        .moosti-radio-seek::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--ink-900, #0b0b0f);
          border: none;
          cursor: pointer;
        }

        .moosti-radio-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.25rem;
          min-width: 0;
        }
        .moosti-radio-vol-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .moosti-radio-vol-pop {
          position: absolute;
          bottom: calc(100% + 0.55rem);
          left: 50%;
          transform: translateX(-50%);
          width: 2.4rem;
          height: 7.5rem;
          padding: 0.75rem 0.55rem;
          border-radius: 999px;
          background: var(--ink-900, #0b0b0f);
          box-shadow: 0 8px 28px rgba(15, 17, 30, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 45;
        }
        .moosti-radio-vol-slider {
          writing-mode: vertical-lr;
          direction: rtl;
          -webkit-appearance: none;
          appearance: none;
          width: 6px;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(
            to top,
            #fff 0%,
            #fff var(--vol, 70%),
            rgba(255, 255, 255, 0.28) var(--vol, 70%),
            rgba(255, 255, 255, 0.28) 100%
          );
          outline: none;
          cursor: pointer;
        }
        .moosti-radio-vol-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff;
          border: none;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
        }
        .moosti-radio-vol-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff;
          border: none;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 720px) {
          .moosti-radio-panel {
            width: calc(100vw - 1rem);
            height: min(52dvh, 22rem);
            max-height: calc(100dvh - 7.5rem - env(safe-area-inset-bottom, 0px));
            bottom: calc(5.75rem + env(safe-area-inset-bottom, 0px));
            padding: 0.65rem;
            gap: 0.5rem;
          }
          .moosti-radio-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 0.4rem;
          }
          .moosti-radio-card {
            padding: 0.55rem 0.35rem;
          }
          .moosti-radio-bar {
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-areas:
              "track right"
              "center center";
            gap: 0.4rem 0.6rem;
            --radio-h: auto;
          }
          .moosti-radio-track { grid-area: track; }
          .moosti-radio-center { grid-area: center; width: 100%; }
          .moosti-radio-right { grid-area: right; }
          .moosti-radio-progress { width: 100%; }
          .moosti-radio-art { width: 36px; height: 36px; }
        }
      `})]}):e.jsx("div",{className:"moosti-radio","aria-hidden":"true"})}export{Be as RadioPlayer};
