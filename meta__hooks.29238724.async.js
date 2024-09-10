"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[518],{42645:function(f,e,n){n.r(e),n.d(e,{demos:function(){return R}});var t=n(13448),v=n.n(t),_=n(74815),a=n.n(_),y=n(50959),R={"src-hooks-async-pool-demo-base":{component:y.memo(y.lazy(function(){return n.e(433).then(n.bind(n,35466))})),asset:{type:"BLOCK",id:"src-hooks-async-pool-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(14595).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{"gyc-components":n(46481),react:n(50959)},renderOpts:{compile:function(){var P=a()(v()().mark(function x(){var C,T=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(769).then(n.bind(n,11710));case 2:return r.abrupt("return",(C=r.sent).default.apply(C,T));case 3:case"end":return r.stop()}},x)}));function M(){return P.apply(this,arguments)}return M}()}}}},77876:function(f,e,n){n.r(e),n.d(e,{demos:function(){return v}});var t=n(50959),v={}},86675:function(f,e,n){n.r(e),n.d(e,{demos:function(){return R}});var t=n(13448),v=n.n(t),_=n(74815),a=n.n(_),y=n(50959),R={"tool1-demo-base":{component:y.memo(y.lazy(function(){return n.e(125).then(n.bind(n,56318))})),asset:{type:"BLOCK",id:"tool1-demo-base",refAtomIds:["tool1"],dependencies:{"index.tsx":{type:"FILE",value:n(93152).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(7784).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(50959),"../index.tsx":n(8187)},renderOpts:{compile:function(){var P=a()(v()().mark(function x(){var C,T=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(769).then(n.bind(n,11710));case 2:return r.abrupt("return",(C=r.sent).default.apply(C,T));case 3:case"end":return r.stop()}},x)}));function M(){return P.apply(this,arguments)}return M}()}}}},92948:function(f,e,n){n.r(e),n.d(e,{demos:function(){return R}});var t=n(13448),v=n.n(t),_=n(74815),a=n.n(_),y=n(50959),R={"usehook1-demo-base":{component:y.memo(y.lazy(function(){return n.e(529).then(n.bind(n,89011))})),asset:{type:"BLOCK",id:"usehook1-demo-base",refAtomIds:["useHook1"],dependencies:{"index.tsx":{type:"FILE",value:n(22163).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(64496).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(50959),"../index.tsx":n(20814)},renderOpts:{compile:function(){var P=a()(v()().mark(function x(){var C,T=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(769).then(n.bind(n,11710));case 2:return r.abrupt("return",(C=r.sent).default.apply(C,T));case 3:case"end":return r.stop()}},x)}));function M(){return P.apply(this,arguments)}return M}()}}}},95182:function(f,e,n){n.r(e),n.d(e,{demos:function(){return v}});var t=n(50959),v={}},8187:function(f,e,n){n.r(e);var t=function(){console.log("this is tool1")};e.default=t},20814:function(f,e,n){n.r(e);var t=n(28152),v=n.n(t),_=n(50959),a=function(){var R=(0,_.useState)({}),P=v()(R,2),M=P[0],x=P[1];return{state:M}};e.default=a},46481:function(f,e,n){n.r(e),n.d(e,{ClickWrap:function(){return _},ColorPicker:function(){return R},Foo:function(){return x},FormFieldFormatter:function(){return T},GModal:function(){return w},GSelect:function(){return q},GUpload:function(){return rn},asyncPool:function(){return fn},tool1:function(){return A.default}});var t=n(50959),v=function(o){var d=o.children,i=o.onClick,c=(0,t.useRef)(!1),p=t.cloneElement(d,{onMouseLeave:function(){c.current=!1},onMouseEnter:function(){c.current=!0}});return(0,t.useEffect)(function(){var u=document.body,g=function(s){c.current||i==null||i(s)};return u.addEventListener("click",g),function(){u.removeEventListener("click",g)}},[]),p},_=v,a=n(11527),y=function(o){var d=o.value,i=o.onChange,c=o.defaultValue,p=o.disabled,u=(0,t.useRef)(),g=function(s){u.current.value=s};return(0,t.useEffect)(function(){g(d)},[d]),(0,t.useEffect)(function(){c&&!d&&g(c)},[c]),(0,a.jsx)("div",{children:(0,a.jsx)("input",{ref:u,type:"color",onChange:function(s){i==null||i(s.target.value)},disabled:p})})},R=y,P=function(){console.log("util1")},M=function(o){return(0,A.default)(),P(),(0,a.jsx)("h4",{children:o.title})},x=M,C=function(o){var d=o.onChange,i=o.value,c=o.formatOnChange,p=o.formatValue,u=o.children;return u?t.cloneElement(u,{onChange:function(){for(var m,s,l=arguments.length,h=new Array(l),E=0;E<l;E++)h[E]=arguments[E];var I=h[0];c&&(I=c.apply(void 0,h)),(m=(s=u.props).onChange)===null||m===void 0||m.call.apply(m,[s].concat(h)),d==null||d(I)},value:p?p(i):i}):null},T=C,S=n(77117),r=n.n(S),z=n(28152),b=n.n(z),V=n(95530),N=n.n(V),Y=n(69243),J=n.n(Y),U=n(10422),Q=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],X=function(o){var d=o.onClose,i=o.className,c=o.title,p=o.header,u=p===void 0?!0:p,g=o.open,m=g===void 0?!0:g,s=o.style,l=o.targetNode,h=o.children,E=o.afterClose,I=o.destroyOnClose,L=I===void 0?!0:I,W=N()(o,Q),O=(0,t.useRef)(null),B=(0,t.useState)(!1),$=b()(B,2),vn=$[0],pn=$[1],gn=(0,t.useState)({}),G=b()(gn,2),hn=G[0],yn=G[1],K=(s==null?void 0:s.height)||400,Z=(s==null?void 0:s.width)||520,En=(s==null?void 0:s.top)||(window.innerHeight-K)/2,In=(s==null?void 0:s.left)||(window.innerWidth-Z)/2,Pn=(0,a.jsx)("div",r()(r()({className:J()("gModal",i),style:r()(r()(r()({width:Z,height:K},s),hn),{},{display:m?"block":"none"})},W),{},{children:(0,a.jsxs)("div",{className:"gModalContent",style:{},children:[u&&(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"title",children:c}),(0,a.jsx)("div",{className:"closeIcon",children:(0,a.jsx)("div",{className:"closeImg",onClick:d,children:"x"})})]}),(0,a.jsx)("div",{className:"content",children:h})]})}));if((0,t.useEffect)(function(){m?(yn({top:En,left:In}),pn(!0)):E==null||E()},[m]),!vn)return null;var H=Pn;return L?m?(0,a.jsx)("div",{ref:O,children:U.createPortal(H,l?l(O.current):document.body)}):null:(0,a.jsx)("div",{ref:O,children:U.createPortal(H,l?l(O.current):document.body)})},w=X,j=n(75427),k=function(){return(0,a.jsxs)(j.Z,{className:"gselect",children:[(0,a.jsx)(j.Z.Option,{value:1,children:"1"}),(0,a.jsx)(j.Z.Option,{value:12,children:"12"}),(0,a.jsx)(j.Z.Option,{value:123,children:"123"})]})},Cn=function(){console.log("GSelectFunc")},q=k,nn=n(33445),en=n(66600),tn=n(53330),on=["value","onChange"],an=function(o){var d=o.value,i=o.onChange,c=N()(o,on),p=(0,t.useState)([]),u=b()(p,2),g=u[0],m=u[1],s=function(h){console.log("info",h),m(h.fileList),i==null||i(h.fileList)};return(0,t.useEffect)(function(){d&&m(d)},[d]),(0,a.jsx)(en.Z,r()(r()({maxCount:1,showUploadList:!0,customRequest:function(h){console.log(h)},accept:"image/jpg,image/jpeg,image/png,*.svg",fileList:g,onChange:s},c),{},{children:(0,a.jsx)("div",{children:(0,a.jsx)(tn.Z,{icon:(0,a.jsx)(nn.Z,{}),children:"\u70B9\u51FB\u4E0A\u4F20"})})}))},rn=an,sn=n(13448),F=n.n(sn),ln=n(38887),un=n.n(ln),dn=n(74815),cn=n.n(dn),mn=function(){var D=cn()(F()().mark(function o(d,i){var c,p,u,g,m;return F()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:c=[],p=new Set,u=un()(d),l.prev=3,m=F()().mark(function h(){var E,I,L;return F()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(E=g.value,I=E(),c.push(I),p.add(I),L=function(){return p.delete(I)},I.then(L).catch(L),!(p.size>=i)){O.next=9;break}return O.next=9,Promise.race(p);case 9:case"end":return O.stop()}},h)}),u.s();case 6:if((g=u.n()).done){l.next=10;break}return l.delegateYield(m(),"t0",8);case 8:l.next=6;break;case 10:l.next=15;break;case 12:l.prev=12,l.t1=l.catch(3),u.e(l.t1);case 15:return l.prev=15,u.f(),l.finish(15);case 18:return l.abrupt("return",Promise.all(c));case 19:case"end":return l.stop()}},o,null,[[3,12,15,18]])}));return function(d,i){return D.apply(this,arguments)}}(),fn=mn,A=n(8187)},67662:function(f,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u9650\u5236\u8BF7\u6C42\u5E76\u53D1",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1},{value:"\u8BF4\u660E",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"promiseList",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u5F02\u6B65\u8BF7\u6C42\u6570\u7EC4",paraId:1},{value:"(() => Promise",paraId:1},{value:")[]",paraId:1},{value:"-",paraId:1},{value:"limit",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u6700\u5927\u5E76\u53D1\u6570",paraId:1},{value:"number",paraId:1},{value:"-",paraId:1}]},67659:function(f,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:`\u4F7F\u7528\uFF1A
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
`,paraId:3,tocIndex:1}]},49017:function(f,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"This is an example component.",paraId:0,tocIndex:0}]},21959:function(f,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"This is an example component.",paraId:0,tocIndex:0}]},83881:function(f,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:`\u79FB\u52A8\u7AEF\u5217\u8868\u6EDA\u52A8\u7EC4\u4EF6
\u5728 uni-app \u4E2D \u914D\u5408 scroll-view \u6807\u7B7E\u4F7F\u7528`,paraId:0,tocIndex:0},{value:`<template>
  <scroll-view
    :style="{ 'max-height': 'calc(100vh - 365rpx)' }"
    scroll-y="true"
    refresher-enabled
    @refresherrefresh="onRefresh"
    refresher-background="rgba(244, 246, 248, 1)"
    @scrolltolower="scrolltolower"
    :refresher-triggered="triggered"
  >
    <view v-for="item in list || []" :key="item.id + searchParams.hourType">
      11
    </view>
  </scroll-view>
</template>
<script>
const { triggered, init, list, onRefresh, scrolltolower } = useListScroll({
  request: (pageNum) => getData({ ...queryParams.value, page: pageNum }),
});
<\/script>
`,paraId:1},{value:`import { onMounted, Ref } from 'vue';
import { ref } from 'vue';

interface pageInfo {
  pageNum: number;
  pageSize: number;
  pages: number;
  total: number;
}

type requestReturn = {
  dataList: any[];
} & pageInfo;

interface Props {
  request: (pageNum: pageInfo['pageNum']) => Promise<requestReturn>;
  //   initialList: any[]
  // list: any[];
}

interface returnType {
  onRefresh: () => void;
  scrolltolower: () => void;
  list: Ref<any[]>;
  loading: Ref<boolean>;
  triggered: Ref<boolean>;
  init: returnType['onRefresh'];
}

const useScroll = ({ request }: Props): returnType => {
  const loading = ref(false);
  const list = ref<any[]>([]);
  const triggered = ref(false);
  const pageInfo = ref<pageInfo>({
    pageNum: 1,
    pageSize: 10,
    pages: 0,
    total: 0,
  });

  const getList = async (pageNum) => {
    if (loading.value) return;

    loading.value = true;
    try {
      const data = await request(pageNum);
      if (pageNum === 1) {
        list.value = data?.dataList || [];
      } else {
        list.value = list.value.concat(data?.dataList || []);
      }
      pageInfo.value = {
        pageNum: data.pageNum,
        pageSize: data.pageSize,
        pages: data.pages,
        total: data.total,
      };
    } finally {
      loading.value = false;
    }
  };

  // \u4E0A\u62C9
  const onRefresh = async () => {
    triggered.value = true;
    await getList(1);
    triggered.value = false;
  };

  // \u89E6\u5E95
  const scrolltolower = async () => {
    if (loading.value) return;
    const params = { ...pageInfo.value };
    if (params.pageNum < params.pages) {
      params.pageNum++;
      await getList(params.pageNum);
    } else {
      console.log('\u5DF2\u7ECF\u5230\u5E95\u4E86');
    }
  };

  const init = () => {
    getList(1);
  };

  return {
    list,
    onRefresh,
    loading,
    scrolltolower,
    init,
    triggered,
  };
};

export default useScroll;
`,paraId:2}]},14595:function(f,e){e.Z=`import { asyncPool } from 'gyc-components';
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
`},93152:function(f,e){e.Z=`import React, { useEffect } from 'react';
import tool1 from '../index';

const Tool1base = () => {
  useEffect(() => {
    tool1();
  }, []);

  return <div>tool1base</div>;
};

export default Tool1base;
`},7784:function(f,e){e.Z=`const tool1 = () => {
  console.log('this is tool1');
};

export default tool1;
`},22163:function(f,e){e.Z=`import React from 'react';
import useHook1 from '../index';

const UseHook1Base = () => {
  const { state } = useHook1();

  return <div>UseHook1Base</div>;
};

export default UseHook1Base;
`},64496:function(f,e){e.Z=`import { useState } from 'react';

const useHook1 = () => {
  const [state, setState] = useState({});
  return { state };
};

export default useHook1;
`}}]);
