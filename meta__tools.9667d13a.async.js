"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[24],{678:function(I,t,e){e.r(t),e.d(t,{demos:function(){return F}});var o=e(13448),D=e.n(o),j=e(74815),i=e.n(j),O=e(50959),F={"src-tools-async-pool-demo-base":{component:O.memo(O.lazy(function(){return e.e(433).then(e.bind(e,88179))})),asset:{type:"BLOCK",id:"src-tools-async-pool-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67378).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{"gyc-components":e(2586),react:e(50959)},renderOpts:{compile:function(){var S=i()(D()().mark(function L(){var M,$=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(769).then(e.bind(e,11710));case 2:return r.abrupt("return",(M=r.sent).default.apply(M,$));case 3:case"end":return r.stop()}},L)}));function T(){return S.apply(this,arguments)}return T}()}}}},20975:function(I,t,e){e.r(t),e.d(t,{demos:function(){return D}});var o=e(50959),D={}},47492:function(I,t,e){e.r(t),e.d(t,{demos:function(){return F}});var o=e(13448),D=e.n(o),j=e(74815),i=e.n(j),O=e(50959),F={"tool1-demo-base":{component:O.memo(O.lazy(function(){return e.e(125).then(e.bind(e,63790))})),asset:{type:"BLOCK",id:"tool1-demo-base",refAtomIds:["tool1"],dependencies:{"index.tsx":{type:"FILE",value:e(61430).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:e(14302).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:e(50959),"../index.tsx":e(69627)},renderOpts:{compile:function(){var S=i()(D()().mark(function L(){var M,$=arguments;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(769).then(e.bind(e,11710));case 2:return r.abrupt("return",(M=r.sent).default.apply(M,$));case 3:case"end":return r.stop()}},L)}));function T(){return S.apply(this,arguments)}return T}()}}}},2586:function(I,t,e){e.r(t),e.d(t,{ClickWrap:function(){return j},ColorPicker:function(){return F},Foo:function(){return L},FormFieldFormatter:function(){return $},GModal:function(){return ne},GSelect:function(){return oe},GUpload:function(){return se},asyncPool:function(){return Ce},tool1:function(){return z.default},useModal:function(){return me}});var o=e(50959),D=function(n){var d=n.children,c=n.onClick,u=(0,o.useRef)(!1),f=o.cloneElement(d,{onMouseLeave:function(){u.current=!1},onMouseEnter:function(){u.current=!0}});return(0,o.useEffect)(function(){var l=document.body,p=function(a){u.current||c==null||c(a)};return l.addEventListener("click",p),function(){l.removeEventListener("click",p)}},[]),f},j=D,i=e(11527),O=function(n){var d=n.value,c=n.onChange,u=n.defaultValue,f=n.disabled,l=(0,o.useRef)(),p=function(a){l.current.value=a};return(0,o.useEffect)(function(){p(d)},[d]),(0,o.useEffect)(function(){u&&!d&&p(u)},[u]),(0,i.jsx)("div",{children:(0,i.jsx)("input",{ref:l,type:"color",onChange:function(a){c==null||c(a.target.value)},disabled:f})})},F=O,S=function(){console.log("util1")},T=function(n){return(0,z.default)(),S(),(0,i.jsx)("h4",{children:n.title})},L=T,M=function(n){var d=n.onChange,c=n.value,u=n.formatOnChange,f=n.formatValue,l=n.children;return l?o.cloneElement(l,{onChange:function(){for(var v,a,s=arguments.length,g=new Array(s),m=0;m<s;m++)g[m]=arguments[m];var h=g[0];u&&(h=u.apply(void 0,g)),(v=(a=l.props).onChange)===null||v===void 0||v.call.apply(v,[a].concat(g)),d==null||d(h)},value:f?f(c):c}):null},$=M,B=e(77117),r=e.n(B),X=e(28152),G=e.n(X),w=e(95530),W=e.n(w),_=e(69243),k=e.n(_),H=e(10422),q=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],ee=function(n){var d=n.onClose,c=n.className,u=n.title,f=n.header,l=f===void 0?!0:f,p=n.open,v=p===void 0?!0:p,a=n.style,s=n.targetNode,g=n.children,m=n.afterClose,h=n.destroyOnClose,P=h===void 0?!0:h,E=W()(n,q),y=(0,o.useRef)(null),x=(0,o.useState)(!1),R=G()(x,2),K=R[0],Z=R[1],N=(0,o.useState)({}),b=G()(N,2),Ie=b[0],De=b[1],Y=(a==null?void 0:a.height)||400,J=(a==null?void 0:a.width)||520,Ee=(a==null?void 0:a.top)||(window.innerHeight-Y)/2,Pe=(a==null?void 0:a.left)||(window.innerWidth-J)/2,Oe=(0,i.jsx)("div",r()(r()({className:k()("gModal",c),style:r()(r()(r()({width:J,height:Y},a),Ie),{},{display:v?"block":"none"})},E),{},{children:(0,i.jsxs)("div",{className:"gModalContent",style:{},children:[l&&(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("div",{className:"title",children:u}),(0,i.jsx)("div",{className:"closeIcon",children:(0,i.jsx)("div",{className:"closeImg",onClick:d,children:"x"})})]}),(0,i.jsx)("div",{className:"content",children:g})]})}));if((0,o.useEffect)(function(){v?(De({top:Ee,left:Pe}),Z(!0)):m==null||m()},[v]),!K)return null;var Q=Oe;return P?v?(0,i.jsx)("div",{ref:y,children:H.createPortal(Q,s?s(y.current):document.body)}):null:(0,i.jsx)("div",{ref:y,children:H.createPortal(Q,s?s(y.current):document.body)})},ne=ee,U=e(75427),te=function(){return(0,i.jsxs)(U.Z,{className:"gselect",children:[(0,i.jsx)(U.Z.Option,{value:1,children:"1"}),(0,i.jsx)(U.Z.Option,{value:12,children:"12"}),(0,i.jsx)(U.Z.Option,{value:123,children:"123"})]})},Me=function(){console.log("GSelectFunc")},oe=te,re=e(66600),ae=["value","onChange","readonly"],le=function(n){var d=n.value,c=n.onChange,u=n.readonly,f=W()(n,ae),l=(0,o.useState)([]),p=G()(l,2),v=p[0],a=p[1],s=function(m){console.log("info",m),a(m.fileList),c==null||c(m.fileList)};return(0,o.useEffect)(function(){d&&a(d)},[d]),(0,i.jsx)(re.Z,r()(r()({maxCount:1,showUploadList:!0,customRequest:function(m){console.log(m)},disabled:u,listType:u?"text":"picture-card",itemRender:function(m,h,P,E){if(!u)return m;var y=E.download,x=E.preview,R=E.remove;return(0,i.jsx)("div",{style:{lineHeight:"30px"},children:(0,i.jsx)("a",{href:h==null?void 0:h.url,download:!0,children:h.name})})},accept:"image/jpg,image/jpeg,image/png,*.svg",fileList:v,onChange:s},f),{},{children:u?null:"\u70B9\u51FB\u4E0A\u4F20"}))},se=le,ie=e(91557),ue=["content"],de=["content"],V=function(n,d){return typeof n=="function"?n(d):n},ce=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=n.content,c=W()(n,ue),u=(0,o.useState)(r()({open:!1},c)),f=G()(u,2),l=f[0],p=f[1],v=V(d,l),a=(0,o.useRef)(v),s=(0,o.useState)(v),g=G()(s,2),m=g[0],h=g[1],P=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},K=R.content,Z=W()(R,de),N=r()(r()(r()({},l),Z),{},{open:!0});p(N);var b=V(K||a.current,N);h(b)},E=function(){p(r()(r()({},l),{},{open:!1}))},y=(0,i.jsx)(ie.Z,r()(r()({onCancel:function(){E()}},l),{},{children:m}));return{open:P,close:E,modalDom:y,modalOptions:l}},me=ce,fe=e(13448),A=e.n(fe),ve=e(38887),pe=e.n(ve),he=e(74815),ge=e.n(he),ye=function(){var C=ge()(A()().mark(function n(d,c){var u,f,l,p,v;return A()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:u=[],f=new Set,l=pe()(d),s.prev=3,v=A()().mark(function g(){var m,h,P;return A()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(m=p.value,h=m(),u.push(h),f.add(h),P=function(){return f.delete(h)},h.then(P).catch(P),!(f.size>=c)){y.next=9;break}return y.next=9,Promise.race(f);case 9:case"end":return y.stop()}},g)}),l.s();case 6:if((p=l.n()).done){s.next=10;break}return s.delegateYield(v(),"t0",8);case 8:s.next=6;break;case 10:s.next=15;break;case 12:s.prev=12,s.t1=s.catch(3),l.e(s.t1);case 15:return s.prev=15,l.f(),s.finish(15);case 18:return s.abrupt("return",Promise.all(u));case 19:case"end":return s.stop()}},n,null,[[3,12,15,18]])}));return function(d,c){return C.apply(this,arguments)}}(),Ce=ye,z=e(69627)},69627:function(I,t,e){e.r(t);var o=function(){console.log("this is tool1")};t.default=o},50818:function(I,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"\u9650\u5236\u8BF7\u6C42\u5E76\u53D1",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1},{value:"\u8BF4\u660E",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"promiseList",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u5F02\u6B65\u8BF7\u6C42\u6570\u7EC4",paraId:1},{value:"(() => Promise",paraId:1},{value:")[]",paraId:1},{value:"-",paraId:1},{value:"limit",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u6700\u5927\u5E76\u53D1\u6570",paraId:1},{value:"number",paraId:1},{value:"-",paraId:1}]},54928:function(I,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:`\u4F7F\u7528\uFF1A
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
