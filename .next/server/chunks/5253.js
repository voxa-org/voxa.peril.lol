"use strict";exports.id=5253,exports.ids=[5253,9632],exports.modules={49632:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>x});var s=a(20997);a(16689);var i=a(57518),n=a.n(i),l=a(28706),o=a(94307),d=a(91972),c=a(22193),h=a(99101),u=a(11163),f=a(88328),p=e([l,f]);[l,f]=p.then?(await p)():p;let g=n()(l.Section)`
  text-align: center;
`,m=n()(o.default)`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`,v=n().span`
  position: relative;
  -webkit-text-fill-color: #0000;
  background: linear-gradient(120deg, #a972ff, #2997ff 50%, #43b9b9);
  -webkit-background-clip: text;
  background-clip: text;
  color: #2997ff;
  [data-color-scheme='dark'] & {
    text-shadow: 0 0 0.75em #2997ff;
  }
`;function x({releases:e}){let t=(0,u.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(g,{contained:!0,gutterY:12,children:[(0,s.jsxs)(o.default,{variant:"headline-elevated",as:"h1",children:["What’s ",s.jsx(v,{children:"New"})]}),(0,s.jsxs)(m,{variant:"intro-elevated",gutter:!0,children:["Learn about the latest features available for Voxa. For detailed information on updates in the latest released versions, visit the"," ",s.jsx("a",{href:"https://www.github.com/plyght/Voxa/releases",children:"Voxa Release Notes"}),"."]}),s.jsx(c.Menu,{placement:"bottom",trigger:()=>(0,s.jsxs)(d.default,{children:["Jump to version",s.jsx(h.ChevronDown,{})]}),children:e.map(e=>s.jsx(c.MenuItem,{onClick:()=>{t.replace(`#${e.name}`)},children:e.name},`jump-to-${e.id}`))})]}),e.map((e,t)=>s.jsx(f.default,{release:e,latest:0===t},e.id))]})}r()}catch(e){r(e)}})},75253:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>s.default,getStaticProps:()=>l});var s=a(49632),i=a(69037),n=e([s]);async function l(){return{props:{releases:await (0,i.fetchWithCache)("releases","https://api.github.com/repos/plyght/voxa/releases")}}}s=(n.then?(await n)():n)[0],r()}catch(e){r(e)}})}};