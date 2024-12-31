"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[24],{678:function(I,t,e){e.r(t),e.d(t,{demos:function(){return R}});var o=e(13448),E=e.n(o),x=e(74815),i=e.n(x),P=e(50959),R={"src-tools-async-pool-demo-base":{component:P.memo(P.lazy(function(){return e.e(433).then(e.bind(e,88179))})),asset:{type:"BLOCK",id:"src-tools-async-pool-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67378).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{"gyc-components":e(2586),react:e(50959)},renderOpts:{compile:function(){var F=i()(E()().mark(function S(){var D,T=arguments;return E()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(769).then(e.bind(e,11710));case 2:return a.abrupt("return",(D=a.sent).default.apply(D,T));case 3:case"end":return a.stop()}},S)}));function j(){return F.apply(this,arguments)}return j}()}}}},20975:function(I,t,e){e.r(t),e.d(t,{demos:function(){return E}});var o=e(50959),E={}},47492:function(I,t,e){e.r(t),e.d(t,{demos:function(){return R}});var o=e(13448),E=e.n(o),x=e(74815),i=e.n(x),P=e(50959),R={"tool1-demo-base":{component:P.memo(P.lazy(function(){return e.e(125).then(e.bind(e,63790))})),asset:{type:"BLOCK",id:"tool1-demo-base",refAtomIds:["tool1"],dependencies:{"index.tsx":{type:"FILE",value:e(61430).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:e(14302).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:e(50959),"../index.tsx":e(69627)},renderOpts:{compile:function(){var F=i()(E()().mark(function S(){var D,T=arguments;return E()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(769).then(e.bind(e,11710));case 2:return a.abrupt("return",(D=a.sent).default.apply(D,T));case 3:case"end":return a.stop()}},S)}));function j(){return F.apply(this,arguments)}return j}()}}}},2586:function(I,t,e){e.r(t),e.d(t,{ClickWrap:function(){return x},ColorPicker:function(){return R},Foo:function(){return S},FormFieldFormatter:function(){return T},GModal:function(){return _},GSelect:function(){return q},GUpload:function(){return oe},asyncPool:function(){return me},tool1:function(){return B.default},useModal:function(){return re}});var o=e(50959),E=function(n){var d=n.children,c=n.onClick,u=(0,o.useRef)(!1),f=o.cloneElement(d,{onMouseLeave:function(){u.current=!1},onMouseEnter:function(){u.current=!0}});return(0,o.useEffect)(function(){var s=document.body,p=function(r){u.current||c==null||c(r)};return s.addEventListener("click",p),function(){s.removeEventListener("click",p)}},[]),f},x=E,i=e(11527),P=function(n){var d=n.value,c=n.onChange,u=n.defaultValue,f=n.disabled,s=(0,o.useRef)(),p=function(r){s.current.value=r};return(0,o.useEffect)(function(){p(d)},[d]),(0,o.useEffect)(function(){u&&!d&&p(u)},[u]),(0,i.jsx)("div",{children:(0,i.jsx)("input",{ref:s,type:"color",onChange:function(r){c==null||c(r.target.value)},disabled:f})})},R=P,F=function(){console.log("util1")},j=function(n){return(0,B.default)(),F(),(0,i.jsx)("h4",{children:n.title})},S=j,D=function(n){var d=n.onChange,c=n.value,u=n.formatOnChange,f=n.formatValue,s=n.children;return s?o.cloneElement(s,{onChange:function(){for(var v,r,l=arguments.length,g=new Array(l),m=0;m<l;m++)g[m]=arguments[m];var h=g[0];u&&(h=u.apply(void 0,g)),(v=(r=s.props).onChange)===null||v===void 0||v.call.apply(v,[r].concat(g)),d==null||d(h)},value:f?f(c):c}):null},T=D,b=e(77117),a=e.n(b),z=e(28152),L=e.n(z),Y=e(95530),A=e.n(Y),J=e(69243),Q=e.n(J),N=e(10422),X=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],w=function(n){var d=n.onClose,c=n.className,u=n.title,f=n.header,s=f===void 0?!0:f,p=n.open,v=p===void 0?!0:p,r=n.style,l=n.targetNode,g=n.children,m=n.afterClose,h=n.destroyOnClose,O=h===void 0?!0:h,M=A()(n,X),C=(0,o.useRef)(null),W=(0,o.useState)(!1),U=L()(W,2),fe=U[0],ve=U[1],pe=(0,o.useState)({}),K=L()(pe,2),he=K[0],ge=K[1],Z=(r==null?void 0:r.height)||400,H=(r==null?void 0:r.width)||520,ye=(r==null?void 0:r.top)||(window.innerHeight-Z)/2,Ce=(r==null?void 0:r.left)||(window.innerWidth-H)/2,Ie=(0,i.jsx)("div",a()(a()({className:Q()("gModal",c),style:a()(a()(a()({width:H,height:Z},r),he),{},{display:v?"block":"none"})},M),{},{children:(0,i.jsxs)("div",{className:"gModalContent",style:{},children:[s&&(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("div",{className:"title",children:u}),(0,i.jsx)("div",{className:"closeIcon",children:(0,i.jsx)("div",{className:"closeImg",onClick:d,children:"x"})})]}),(0,i.jsx)("div",{className:"content",children:g})]})}));if((0,o.useEffect)(function(){v?(ge({top:ye,left:Ce}),ve(!0)):m==null||m()},[v]),!fe)return null;var V=Ie;return O?v?(0,i.jsx)("div",{ref:C,children:N.createPortal(V,l?l(C.current):document.body)}):null:(0,i.jsx)("div",{ref:C,children:N.createPortal(V,l?l(C.current):document.body)})},_=w,$=e(75427),k=function(){return(0,i.jsxs)($.Z,{className:"gselect",children:[(0,i.jsx)($.Z.Option,{value:1,children:"1"}),(0,i.jsx)($.Z.Option,{value:12,children:"12"}),(0,i.jsx)($.Z.Option,{value:123,children:"123"})]})},Ee=function(){console.log("GSelectFunc")},q=k,ee=e(66600),ne=["value","onChange","readonly"],te=function(n){var d=n.value,c=n.onChange,u=n.readonly,f=A()(n,ne),s=(0,o.useState)([]),p=L()(s,2),v=p[0],r=p[1],l=function(m){console.log("info",m),r(m.fileList),c==null||c(m.fileList)};return(0,o.useEffect)(function(){d&&r(d)},[d]),(0,i.jsx)(ee.Z,a()(a()({maxCount:1,showUploadList:!0,customRequest:function(m){console.log(m)},disabled:u,listType:u?"text":"picture-card",itemRender:function(m,h,O,M){if(!u)return m;var C=M.download,W=M.preview,U=M.remove;return(0,i.jsx)("div",{style:{lineHeight:"30px"},children:(0,i.jsx)("a",{href:h==null?void 0:h.url,download:!0,children:h.name})})},accept:"image/jpg,image/jpeg,image/png,*.svg",fileList:v,onChange:l},f),{},{children:u?null:"\u70B9\u51FB\u4E0A\u4F20"}))},oe=te,ae=function(n){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=a()({open:!1,visible:!1,onCancel:function(){v()}},d),u=(0,o.useState)(c),f=L()(u,2),s=f[0],p=f[1],v=function(){p(a()(a()({},s),{},{open:!1,visible:!1}))},r=o.createElement(n,s),l=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};p(a()(a()(a()(a()({},s),d),m),{},{open:!0,visible:!0}))};return{modalDom:r,open:l,close:v,modalOptions:s}},re=ae,le=e(13448),G=e.n(le),se=e(38887),ie=e.n(se),ue=e(74815),de=e.n(ue),ce=function(){var y=de()(G()().mark(function n(d,c){var u,f,s,p,v;return G()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:u=[],f=new Set,s=ie()(d),l.prev=3,v=G()().mark(function g(){var m,h,O;return G()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(m=p.value,h=m(),u.push(h),f.add(h),O=function(){return f.delete(h)},h.then(O).catch(O),!(f.size>=c)){C.next=9;break}return C.next=9,Promise.race(f);case 9:case"end":return C.stop()}},g)}),s.s();case 6:if((p=s.n()).done){l.next=10;break}return l.delegateYield(v(),"t0",8);case 8:l.next=6;break;case 10:l.next=15;break;case 12:l.prev=12,l.t1=l.catch(3),s.e(l.t1);case 15:return l.prev=15,s.f(),l.finish(15);case 18:return l.abrupt("return",Promise.all(u));case 19:case"end":return l.stop()}},n,null,[[3,12,15,18]])}));return function(d,c){return y.apply(this,arguments)}}(),me=ce,B=e(69627)},69627:function(I,t,e){e.r(t);var o=function(){console.log("this is tool1")};t.default=o},50818:function(I,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"\u9650\u5236\u8BF7\u6C42\u5E76\u53D1",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1},{value:"\u8BF4\u660E",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"promiseList",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u5F02\u6B65\u8BF7\u6C42\u6570\u7EC4",paraId:1},{value:"(() => Promise",paraId:1},{value:")[]",paraId:1},{value:"-",paraId:1},{value:"limit",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u6700\u5927\u5E76\u53D1\u6570",paraId:1},{value:"number",paraId:1},{value:"-",paraId:1}]},54928:function(I,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:`\u4F7F\u7528\uFF1A
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
`,paraId:3,tocIndex:1}]},16849:function(I,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"This is an example component.",paraId:0,tocIndex:0}]},67378:function(I,t){t.Z=`import { asyncPool } from 'gyc-components';
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
`},61430:function(I,t){t.Z=`import React, { useEffect } from 'react';
import tool1 from '../index';

const Tool1base = () => {
  useEffect(() => {
    tool1();
  }, []);

  return <div>tool1base</div>;
};

export default Tool1base;
`},14302:function(I,t){t.Z=`const tool1 = () => {
  console.log('this is tool1');
};

export default tool1;
`}}]);
