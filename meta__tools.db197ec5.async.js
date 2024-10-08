"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[24],{678:function(P,t,e){e.r(t),e.d(t,{demos:function(){return F}});var o=e(13448),I=e.n(o),j=e(74815),s=e.n(j),M=e(50959),F={"src-tools-async-pool-demo-base":{component:M.memo(M.lazy(function(){return e.e(433).then(e.bind(e,88179))})),asset:{type:"BLOCK",id:"src-tools-async-pool-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67378).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{"gyc-components":e(2586),react:e(50959)},renderOpts:{compile:function(){var T=s()(I()().mark(function $(){var O,G=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(769).then(e.bind(e,11710));case 2:return l.abrupt("return",(O=l.sent).default.apply(O,G));case 3:case"end":return l.stop()}},$)}));function L(){return T.apply(this,arguments)}return L}()}}}},20975:function(P,t,e){e.r(t),e.d(t,{demos:function(){return I}});var o=e(50959),I={}},47492:function(P,t,e){e.r(t),e.d(t,{demos:function(){return F}});var o=e(13448),I=e.n(o),j=e(74815),s=e.n(j),M=e(50959),F={"tool1-demo-base":{component:M.memo(M.lazy(function(){return e.e(125).then(e.bind(e,63790))})),asset:{type:"BLOCK",id:"tool1-demo-base",refAtomIds:["tool1"],dependencies:{"index.tsx":{type:"FILE",value:e(61430).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:e(14302).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:e(50959),"../index.tsx":e(69627)},renderOpts:{compile:function(){var T=s()(I()().mark(function $(){var O,G=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(769).then(e.bind(e,11710));case 2:return l.abrupt("return",(O=l.sent).default.apply(O,G));case 3:case"end":return l.stop()}},$)}));function L(){return T.apply(this,arguments)}return L}()}}}},2586:function(P,t,e){e.r(t),e.d(t,{ClickWrap:function(){return j},ColorPicker:function(){return F},Foo:function(){return $},FormFieldFormatter:function(){return G},GModal:function(){return ne},GSelect:function(){return oe},GUpload:function(){return se},asyncPool:function(){return Ce},tool1:function(){return z.default},useModal:function(){return me}});var o=e(50959),I=function(n){var m=n.children,d=n.onClick,i=(0,o.useRef)(!1),v=o.cloneElement(m,{onMouseLeave:function(){i.current=!1},onMouseEnter:function(){i.current=!0}});return(0,o.useEffect)(function(){var u=document.body,h=function(a){i.current||d==null||d(a)};return u.addEventListener("click",h),function(){u.removeEventListener("click",h)}},[]),v},j=I,s=e(11527),M=function(n){var m=n.value,d=n.onChange,i=n.defaultValue,v=n.disabled,u=(0,o.useRef)(),h=function(a){u.current.value=a};return(0,o.useEffect)(function(){h(m)},[m]),(0,o.useEffect)(function(){i&&!m&&h(i)},[i]),(0,s.jsx)("div",{children:(0,s.jsx)("input",{ref:u,type:"color",onChange:function(a){d==null||d(a.target.value)},disabled:v})})},F=M,T=function(){console.log("util1")},L=function(n){return(0,z.default)(),T(),(0,s.jsx)("h4",{children:n.title})},$=L,O=function(n){var m=n.onChange,d=n.value,i=n.formatOnChange,v=n.formatValue,u=n.children;return u?o.cloneElement(u,{onChange:function(){for(var f,a,r=arguments.length,g=new Array(r),c=0;c<r;c++)g[c]=arguments[c];var p=g[0];i&&(p=i.apply(void 0,g)),(f=(a=u.props).onChange)===null||f===void 0||f.call.apply(f,[a].concat(g)),m==null||m(p)},value:v?v(d):d}):null},G=O,K=e(77117),l=e.n(K),X=e(28152),x=e.n(X),w=e(95530),W=e.n(w),_=e(69243),k=e.n(_),V=e(10422),q=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],ee=function(n){var m=n.onClose,d=n.className,i=n.title,v=n.header,u=v===void 0?!0:v,h=n.open,f=h===void 0?!0:h,a=n.style,r=n.targetNode,g=n.children,c=n.afterClose,p=n.destroyOnClose,D=p===void 0?!0:p,E=W()(n,q),y=(0,o.useRef)(null),R=(0,o.useState)(!1),S=x()(R,2),Z=S[0],N=S[1],b=(0,o.useState)({}),B=x()(b,2),H=B[0],Pe=B[1],Y=(a==null?void 0:a.height)||400,J=(a==null?void 0:a.width)||520,Ie=(a==null?void 0:a.top)||(window.innerHeight-Y)/2,De=(a==null?void 0:a.left)||(window.innerWidth-J)/2,Ee=(0,s.jsx)("div",l()(l()({className:k()("gModal",d),style:l()(l()(l()({width:J,height:Y},a),H),{},{display:f?"block":"none"})},E),{},{children:(0,s.jsxs)("div",{className:"gModalContent",style:{},children:[u&&(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("div",{className:"title",children:i}),(0,s.jsx)("div",{className:"closeIcon",children:(0,s.jsx)("div",{className:"closeImg",onClick:m,children:"x"})})]}),(0,s.jsx)("div",{className:"content",children:g})]})}));if((0,o.useEffect)(function(){f?(Pe({top:Ie,left:De}),N(!0)):c==null||c()},[f]),!Z)return null;var Q=Ee;return D?f?(0,s.jsx)("div",{ref:y,children:V.createPortal(Q,r?r(y.current):document.body)}):null:(0,s.jsx)("div",{ref:y,children:V.createPortal(Q,r?r(y.current):document.body)})},ne=ee,U=e(75427),te=function(){return(0,s.jsxs)(U.Z,{className:"gselect",children:[(0,s.jsx)(U.Z.Option,{value:1,children:"1"}),(0,s.jsx)(U.Z.Option,{value:12,children:"12"}),(0,s.jsx)(U.Z.Option,{value:123,children:"123"})]})},Me=function(){console.log("GSelectFunc")},oe=te,ae=e(66600),re=["value","onChange","readonly"],le=function(n){var m=n.value,d=n.onChange,i=n.readonly,v=W()(n,re),u=(0,o.useState)([]),h=x()(u,2),f=h[0],a=h[1],r=function(c){console.log("info",c),a(c.fileList),d==null||d(c.fileList)};return(0,o.useEffect)(function(){m&&a(m)},[m]),(0,s.jsx)(ae.Z,l()(l()({maxCount:1,showUploadList:!0,customRequest:function(c){console.log(c)},disabled:i,listType:i?"text":"picture-card",itemRender:function(c,p,D,E){if(!i)return c;var y=E.download,R=E.preview,S=E.remove;return(0,s.jsx)("div",{style:{lineHeight:"30px"},children:(0,s.jsx)("a",{href:p==null?void 0:p.url,download:!0,children:p.name})})},accept:"image/jpg,image/jpeg,image/png,*.svg",fileList:f,onChange:r},v),{},{children:i?null:"\u70B9\u51FB\u4E0A\u4F20"}))},se=le,ue=e(91557),ie=["contentRender"],de=["data"],ce=function(n){var m=n.contentRender,d=W()(n,ie),i=(0,o.useState)(!1),v=x()(i,2),u=v[0],h=v[1],f=(0,o.useState)(!1),a=x()(f,2),r=a[0],g=a[1],c=(0,o.useState)({}),p=x()(c,2),D=p[0],E=p[1],y=function(b){var B=b.data,H=W()(b,de);h(!0),g(B),E(H)},R=function(){h(!1)},S={data:r,modalProps:l()(l()({},d),{},{open:u})};console.log("contentParams:",S);var Z=(0,s.jsx)(ue.Z,l()(l()(l()({onCancel:function(){R()},open:u},d),D),{},{children:m(S)}));return{open:y,close:R,modalDom:Z}},me=ce,ve=e(13448),A=e.n(ve),fe=e(38887),pe=e.n(fe),he=e(74815),ge=e.n(he),ye=function(){var C=ge()(A()().mark(function n(m,d){var i,v,u,h,f;return A()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:i=[],v=new Set,u=pe()(m),r.prev=3,f=A()().mark(function g(){var c,p,D;return A()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(c=h.value,p=c(),i.push(p),v.add(p),D=function(){return v.delete(p)},p.then(D).catch(D),!(v.size>=d)){y.next=9;break}return y.next=9,Promise.race(v);case 9:case"end":return y.stop()}},g)}),u.s();case 6:if((h=u.n()).done){r.next=10;break}return r.delegateYield(f(),"t0",8);case 8:r.next=6;break;case 10:r.next=15;break;case 12:r.prev=12,r.t1=r.catch(3),u.e(r.t1);case 15:return r.prev=15,u.f(),r.finish(15);case 18:return r.abrupt("return",Promise.all(i));case 19:case"end":return r.stop()}},n,null,[[3,12,15,18]])}));return function(m,d){return C.apply(this,arguments)}}(),Ce=ye,z=e(69627)},69627:function(P,t,e){e.r(t);var o=function(){console.log("this is tool1")};t.default=o},50818:function(P,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"\u9650\u5236\u8BF7\u6C42\u5E76\u53D1",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1},{value:"\u8BF4\u660E",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"promiseList",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u5F02\u6B65\u8BF7\u6C42\u6570\u7EC4",paraId:1},{value:"(() => Promise",paraId:1},{value:")[]",paraId:1},{value:"-",paraId:1},{value:"limit",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u6700\u5927\u5E76\u53D1\u6570",paraId:1},{value:"number",paraId:1},{value:"-",paraId:1}]},54928:function(P,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:`\u4F7F\u7528\uFF1A
\u590D\u5236\u5230\u5F53\u524D\u76EE\u5F55\u4E0B \u4F7F\u7528 node \u6267\u884C`,paraId:0,tocIndex:1},{value:"\u4EE5\u83B7\u53D6\u4E00\u5E74\u5185\u6709\u8FC7\u63D0\u4EA4\u7684\u6587\u4EF6\u4E3A\u4F8B",paraId:1,tocIndex:1},{value:"fileDisplay \u904D\u5386\u5F53\u524D\u76EE\u5F55 \u5BF9\u6587\u4EF6\u8FDB\u884C\u5224\u65AD\u5904\u7406",paraId:2,tocIndex:1},{value:"detectionFile \u5BF9\u904D\u5386\u5230\u7684\u6587\u4EF6\u8FDB\u884C\u5224\u65AD",paraId:2,tocIndex:1},{value:"\u4F7F\u7528 git log \u83B7\u53D6\u4E0A\u4E00\u6761\u63D0\u4EA4\u8BB0\u5F55 \u5224\u65AD\u65F6\u95F4\u662F\u5426\u5728\u6307\u5B9A\u65F6\u95F4\u8303\u56F4\u5185",paraId:2,tocIndex:1},{value:"\u4F7F\u7528 fs.copyFile \u628A\u7B26\u5408\u6761\u4EF6\u7684\u6587\u4EF6\u653E\u5230\u76EE\u6807\u6587\u4EF6\u5939\u4E2D",paraId:2,tocIndex:1},{value:`// 1. \u83B7\u53D6\u5F53\u524D\u76EE\u5F55\u7684 \u6587\u4EF6\u5217\u8868 \u6839\u636E git log \u83B7\u53D6\u6700\u8FD1\u4E00\u5E74\u5185\u4FEE\u6539\u7684\u6587\u4EF6
const child = require('child_process');
const now = new Date().getTime();

const fs = require('fs');
const path = require('path');

const targetDir = './targetDir';
// \u4E00\u5E74
const diffTime = 365 * 24 * 60 * 60 * 1000;

if (fs.existsSync(targetDir)) {
  console.log(\`\${targetDir}\u5DF2\u5B58\u5728, \u8BF7\u5148\u5220\u9664\`);
  return;
}
fs.mkdirSync(targetDir);

const fileDisplay = (filePath) => {
  //\u6839\u636E\u6587\u4EF6\u8DEF\u5F84\u8BFB\u53D6\u6587\u4EF6\uFF0C\u8FD4\u56DE\u6587\u4EF6\u5217\u8868
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err, '\u8BFB\u53D6\u6587\u4EF6\u5939\u9519\u8BEF\uFF01');
    } else {
      //\u904D\u5386\u8BFB\u53D6\u5230\u7684\u6587\u4EF6\u5217\u8868
      files.forEach(function (filename) {
        // \u8DF3\u8FC7 node_modules \u7B49\u65E0\u610F\u4E49\u6587\u4EF6
        if (
          filename.includes('node_module') ||
          filename.includes('.git') ||
          filename.includes('.umi')
        )
          return;
        //\u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84
        let fileDir = path.join(filePath, filename);
        //\u6839\u636E\u6587\u4EF6\u8DEF\u5F84\u83B7\u53D6\u6587\u4EF6\u4FE1\u606F\uFF0C\u8FD4\u56DE\u4E00\u4E2Afs.Stats\u5BF9\u8C61
        fs.stat(fileDir, function (error, stats) {
          if (error) {
            console.warn('\u83B7\u53D6\u6587\u4EF6stats\u5931\u8D25', fileDir);
          } else {
            let isFile = stats.isFile(); //\u662F\u6587\u4EF6
            let isDir = stats.isDirectory(); //\u662F\u6587\u4EF6\u5939
            if (isFile) {
              detectionFile(fileDir, targetDir);
            }
            if (isDir) {
              fileDisplay(fileDir); //\u9012\u5F52\uFF0C\u5982\u679C\u662F\u6587\u4EF6\u5939\uFF0C\u5C31\u7EE7\u7EED\u904D\u5386\u8BE5\u6587\u4EF6\u5939\u4E0B\u9762\u7684\u6587\u4EF6
            }
          }
        });
      });
    }
  });
};

// \u5224\u65AD\u6587\u4EF6\u662F\u5426\u8D85\u51FA\u4E00\u5E74
const detectionFile = (filePath) => {
  child.exec(
    // \u4E0D\u80FD\u4F7F\u7528 %Y-%m-%d %H:%M:%S \u4F1A\u62A5\u9519
    \`git log -n 1 --date=format:'%Y-%m-%d-%H-%M-%S' \${filePath}\`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }

      const res = stdout.match(/\\d{4}-\\d{2}-\\d{2}-\\d{2}-\\d{2}-\\d{2}/);
      if (!res) return;
      const [matchRes] = res;
      const [year, month, day, h, m, s] = matchRes.split('-');
      const fileUpdateTime = new Date(
        \`\${year}-\${month}-\${day} \${h}:\${m}:\${s}\`,
      ).getTime();
      const diff = now - fileUpdateTime;
      // \u5224\u65AD\u662F\u5426\u8D85\u8FC7\u4E00\u5E74
      if (diff < diffTime) {
        const resFile = \`\${targetDir}/\${filePath.replaceAll(/[\\\\|\\/]/gi, '_')}\`;
        fs.copyFile(\`\${filePath}\`, resFile, (err) => {
          console.log(\`\${filePath} => \${resFile}\`);
          if (err) {
            console.error(err);
            return;
          }
        });
      } else {
        // console.log('\u5927\u4E8E1\u5E74')
      }
    },
  );
};

fileDisplay('./');
`,paraId:3,tocIndex:1}]},16849:function(P,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"This is an example component.",paraId:0,tocIndex:0}]},67378:function(P,t){t.Z=`import { asyncPool } from 'gyc-components';
import React, { useEffect } from 'react';

// \u8BF7\u6C42\u793A\u4F8B
const request = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

// \u4F7F\u7528\u65B9\u6CD5

const Tool1base = () => {
  const [res1, setRes1] = React.useState<any>([]);
  const [res2, setRes2] = React.useState<any>([]);
  const [res3, setRes3] = React.useState<any>([]);
  const onClick = async () => {
    const res = await asyncPool(
      [
        () => request(2000).then((data) => setRes1(data)),
        () => request(5000).then((data) => setRes2(data)),
        () => request(4000).then((data) => setRes3(data)),
      ],
      2,
    );
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button type="button" onClick={onClick}>
        \u5F00\u59CB\u8BF7\u6C42
      </button>
      <div>res1: {res1}</div>
      <div>res2: {res2}</div>
      <div>res3: {res3}</div>
    </div>
  );
};

export default Tool1base;
`},61430:function(P,t){t.Z=`import React, { useEffect } from 'react';
import tool1 from '../index';

const Tool1base = () => {
  useEffect(() => {
    tool1();
  }, []);

  return <div>tool1base</div>;
};

export default Tool1base;
`},14302:function(P,t){t.Z=`const tool1 = () => {
  console.log('this is tool1');
};

export default tool1;
`}}]);
