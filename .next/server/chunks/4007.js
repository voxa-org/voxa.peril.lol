"use strict";exports.id=4007,exports.ids=[4007,1614],exports.modules={21614:(e,i,t)=>{t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{TileViolator:()=>f,default:()=>$});var a=t(20997),o=t(16689),n=t(57518),l=t.n(n),s=t(46555),c=t(94307),d=e([s]);s=(d.then?(await d)():d)[0];let p=l().div`
    --tile-background-color: var(--background-tertiary-color);
    --tile-overlay-background-color: var(--section-accent-color ,#86868b);
    --tile-overlay-copy-max-width: 550px;

    position: relative;
    /* padding: 22px; */
    background-color: var(--background-tertiary-color);
    /* border-radius: 18px; */
    border-radius: 30px;
    overflow: hidden;

    ${({color:e})=>"blue"===e?`
      background-image: radial-gradient(circle at 90% 0%,#239AF2 0%,#3F4CC8 100%);
      // background: linear-gradient(114.88deg,#3cd0ff,#0b0050),linear-gradient(107.56deg,#000e16,#0c21e0 48.44%,#05d2ff);
    `:""}
    ${({color:e})=>"deep-purple"===e?`
      background: linear-gradient(to bottom right,#0D1387,#867AF6);
    `:""}
    ${({color:e})=>"purple"===e?`
      background: #dd41b7;
      background: linear-gradient(137deg,#dd41b7,#5717a6);
    `:""}
    ${({color:e})=>"pink"===e?`
      background: #dd41b7;
      background-image: radial-gradient(circle at 0% -25%,#FF7948 0%,#FF8355 0,#DA2C84 42%,#3E13A4 110%);
    `:""}

    &[data-color-scheme="dark"] {
      color: white;
    }

    ol+*, p+*, ul+* {
      margin-top: 0.8em;
    }
`,x=l().div`
  padding: 40px;
`,h=l().div`
  margin-top: -4px;
  max-width: 655px;
`,u=l()(c.default).attrs({as:"h4"})`
    font-size: 21px;
    line-height: 1.1904761905;
    font-weight: 600;
    letter-spacing: .011em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    ${({overlay:e})=>e?"":"color: var(--section-accent-color);"}
`,g=l()(c.default)`
    font-size: 19px;
    line-height: 1.4211026316;
    font-weight: 600;
    letter-spacing: .012em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    ${u} + & {
      margin-top: 0.3em;
    }
`,f=l().div`
  box-sizing: border-box;
  white-space: nowrap;
  display: inline-block;
  background: transparent;
  border: 1px solid #bf4800;
  color: #bf4800;
  font-size: 17px;
  line-height: 1.1764805882;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  border-radius: 18px;
  padding: 7px 18px;

  // reduced
  font-size: 12px;
  line-height: 1.3333733333;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  border-radius: 12px;
  padding: 3px 11px;

  // tile violator
  background: transparent;
  /* border-color: #6e6e73;
  color: #6e6e73; */

`,v=l().div`

`,b=l().input`
  display: none;
`,y=l().div`
    z-index: 10;
`,m=l().label`
  -webkit-tap-highlight-color: transparent;
  z-index: 3;
  width: 44px;
  height: 44px;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`,j=l().span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color 100ms linear;
  z-index: 2;
  background-color: #86868b;
  color: var(--tile-background-color);
  opacity: .92;
  transition: background-color .66s cubic-bezier(0.66,0,0.01,1) .66s,color .66s cubic-bezier(0.66,0,0.01,1) .66s,transform .66s cubic-bezier(0.66,0,0.2,1),opacity 100ms linear;
  background-color: #6e6e73; //dark
  will-change: transform;
  svg {
    fill: currentColor;
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  ${b}:checked ~ ${y} & {
    color: var(--tile-overlay-background-color);
    background-color: #fff;
    transform: rotate(45deg);
    transition-delay: 0s;
  }
`,w=l().span`
    position: absolute;
    width: 100%;
    height: 100%;
`,k=l().span`
    position: absolute;
    clip: rect(1px,1px,1px,1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
`,S=l().div`
  background-color: var(--tile-overlay-background-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: var(--tile-padding-top) var(--tile-padding-right) var(--tile-padding-bottom) var(--tile-padding-left);
  padding: 40px;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .66s cubic-bezier(0.66,0,0.01,1) .66s,visibility 0s linear 1.32s;
  border-radius: 30px;
  
  ${b}:checked ~ ${y} & {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
`,z=l().div`
  margin-top: -4px;
  max-width: 655px;
  & ${u} {
    color: #fff;
  }
`,F=l().div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    align-items: center;
`,I=l().div`
    font-size: 19px;
    line-height: 1.4211026316;
    font-weight: 600;
    letter-spacing: .012em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;

    color: #fff;

    max-width: var(--tile-overlay-copy-max-width);
    opacity: 0;
    transform: translateY(-20px);
    transition: all .66s cubic-bezier(0.66,0,0.2,1);

    ${b}:checked ~ ${y} & {
      opacity: 1;
      transform: translateY(0);
      transition-delay: .66s; 
    }
`,$=({children:e,headline:i,copy:t,overlay:r,violator:n,overlayCopy:l,...c})=>{let d={};c.color&&(d["data-color-scheme"]="dark");let $=(0,o.useMemo)(()=>(0,s.v4)(),[]);return(0,a.jsxs)(p,{...d,...c,children:[(0,a.jsxs)(x,{children:[(i||t||n)&&(0,a.jsxs)(h,{children:[i&&a.jsx(u,{children:i}),t&&a.jsx(g,{children:t}),n&&a.jsx(f,{children:n})]}),a.jsx(v,{children:e})]}),(r||l)&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(b,{type:"checkbox",id:`tile-overlay-toggle-${$}`}),(0,a.jsxs)(y,{children:[(0,a.jsxs)(m,{for:`tile-overlay-toggle-${$}`,children:[a.jsx(j,{children:a.jsx("svg",{className:"tile-icon-alt",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"})})}),a.jsx(w,{role:"button","aria-expanded":"false","aria-controls":"content-toggle-shortcuts-app",children:a.jsx(k,{children:"Learn more"})})]}),(0,a.jsxs)(S,{children:[a.jsx(z,{children:a.jsx(u,{overlay:!0,children:i})}),(0,a.jsxs)(F,{children:[l&&a.jsx(I,{children:l}),"function"==typeof r?r():r]})]})]})]})]})};r()}catch(e){r(e)}})},84007:(e,i,t)=>{t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{default:()=>x});var a=t(20997),o=t(16689),n=t(99101),l=t(21614),s=t(94307),c=t(28706),d=t(85590),p=e([l,c,d]);[l,c,d]=p.then?(await p)():p;let x=()=>{let{breakpoint:e}=(0,d.useSite)(),i=(0,o.useMemo)(()=>"xs"===e?24:40,[e]);return a.jsx(c.Section,{contained:!0,gutterBottom:20,variant:"secondary",children:(0,a.jsxs)(c.Grid,{columns:{xs:1,lg:2},gap:{xs:6,lg:12},children:[a.jsx(c.GridItem,{as:l.default,width:{xs:1,lg:2},children:(0,a.jsxs)(c.Stack,{direction:"xs"===e?"vertical":"horizontal",gap:3.5,children:[a.jsx("div",{children:a.jsx(n.Info,{size:28})}),a.jsx(s.default,{variant:"intro",children:"Voxa is crafted to complement Discord's Official client, offering an alternative specifically for Apple platforms. Our goal is to provide every user with an exceptional experience and top-notch performance."})]})}),a.jsx(c.GridItem,{children:(0,a.jsxs)(c.Stack,{children:[a.jsx(n.Zap,{size:i}),a.jsx(s.default,{variant:"intro",gutterTop:!0,children:"macOS Native"}),a.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Experience the full power of your Mac with Voxa, built entirely with a native Swift architecture for seamless performance and efficiency."})]})}),a.jsx(c.GridItem,{children:(0,a.jsxs)(c.Stack,{children:[a.jsx(n.Feather,{size:i}),a.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Lightweight Yet Powerful"}),a.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Designed to be fast and smooth, making Voxa a joy to use."})]})}),a.jsx(c.GridItem,{children:(0,a.jsxs)(c.Stack,{children:[a.jsx(n.GitHub,{size:i}),a.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Completely Open Source"}),a.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Voxa is built by developers for developers. Have suggestions or want a new feature? Simply open an issue or submit a pull request."})]})}),a.jsx(c.GridItem,{children:(0,a.jsxs)(c.Stack,{children:[a.jsx(n.Sliders,{size:i}),a.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Fully Featured"}),a.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Voxa is packed with all your favorite features of your *old* Discord client, but with a fresh new look and feel."})]})}),a.jsx(c.GridItem,{children:(0,a.jsxs)(c.Stack,{children:[a.jsx(n.Layout,{size:i}),a.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Familiar & Intuitive User Interface"}),a.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Voxa's UI is designed to be familiar and intuitive, Meaning no new learning."})]})}),a.jsx(c.GridItem,{children:(0,a.jsxs)(c.Stack,{children:[a.jsx(n.Tool,{size:i}),a.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Easy Installer"}),a.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"We provide an easy-to-use installer for even the *clumsiest* of users."})]})})]})})};r()}catch(e){r(e)}})}};