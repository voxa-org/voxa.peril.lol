"use strict";exports.id=2081,exports.ids=[2081,1226],exports.modules={31226:(t,a,e)=>{e.a(t,async(t,s)=>{try{e.r(a),e.d(a,{default:()=>p});var i=e(20997),n=e(57518),r=e.n(n),l=e(61190),o=e(40968),c=e.n(o),h=t([l]);l=(h.then?(await h)():h)[0];let d=r()(l.default)`
  img:first-child {
    display: none;
  }
  padding: 10px;
  img {
    width: 100%;
  }
  p,
  ul,
  ol,
  li {
    font-size: 14px;
  }

  h2 {
    font-size: 24px;
  }
  & img,
  & video,
  & iframe {
    margin-bottom: 10px;
  }

  & > * {
    max-width: 100%;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`,p=({release:t})=>t?(0,i.jsxs)(i.Fragment,{children:[i.jsx(c(),{children:i.jsx("meta",{name:"robots",content:"noindex"})}),i.jsx(d,{children:t.body})]}):i.jsx("div",{children:"No Release Found"});s()}catch(t){s(t)}})},22081:(t,a,e)=>{e.a(t,async(t,s)=>{try{e.r(a),e.d(a,{default:()=>i.default,getStaticPaths:()=>o,getStaticProps:()=>l});var i=e(31226),n=e(69037),r=t([i]);async function l({params:t}){let{tag:a}=t;return{props:{release:(await (0,n.fetchWithCache)("releases","https://api.github.com/repos/plyght/voxa/releases")).find(t=>t.tag_name===a)||null}}}async function o(){return{paths:(await (0,n.fetchWithCache)("releases","https://api.github.com/repos/plyght/voxa/releases")).map(t=>({params:{tag:t.tag_name}})),fallback:!1}}i=(r.then?(await r)():r)[0],s()}catch(t){s(t)}})}};