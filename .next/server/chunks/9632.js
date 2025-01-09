"use strict";exports.id=9632,exports.ids=[9632],exports.modules={49632:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>m});var i=a(20997);a(16689);var n=a(57518),s=a.n(n),l=a(28706),o=a(94307),d=a(91972),c=a(22193),h=a(99101),u=a(11163),x=a(88328),f=e([l,x]);[l,x]=f.then?(await f)():f;let g=s()(l.Section)`
  text-align: center;
`,p=s()(o.default)`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`,j=s().span`
  position: relative;
  -webkit-text-fill-color: #0000;
  background: linear-gradient(120deg, #a972ff, #2997ff 50%, #43b9b9);
  -webkit-background-clip: text;
  background-clip: text;
  color: #2997ff;
  [data-color-scheme='dark'] & {
    text-shadow: 0 0 0.75em #2997ff;
  }
`;function m({releases:e}){let t=(0,u.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g,{contained:!0,gutterY:12,children:[(0,i.jsxs)(o.default,{variant:"headline-elevated",as:"h1",children:["What’s ",i.jsx(j,{children:"New"})]}),(0,i.jsxs)(p,{variant:"intro-elevated",gutter:!0,children:["Learn about the latest features available for Voxa. For detailed information on updates in the latest released versions, visit the"," ",i.jsx("a",{href:"https://www.github.com/plyght/Voxa/releases",children:"Voxa Release Notes"}),"."]}),i.jsx(c.Menu,{placement:"bottom",trigger:()=>(0,i.jsxs)(d.default,{children:["Jump to version",i.jsx(h.ChevronDown,{})]}),children:e.map(e=>i.jsx(c.MenuItem,{onClick:()=>{t.replace(`#${e.name}`)},children:e.name},`jump-to-${e.id}`))})]}),e.map((e,t)=>i.jsx(x.default,{release:e,latest:0===t},e.id))]})}r()}catch(e){r(e)}})}};