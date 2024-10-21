"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[518],{92948:function(I,o,n){n.r(o),n.d(o,{demos:function(){return N}});var a=n(13448),h=n.n(a),F=n(74815),r=n.n(F),M=n(50959),N={"usehook1-demo-base":{component:M.memo(M.lazy(function(){return n.e(529).then(n.bind(n,89011))})),asset:{type:"BLOCK",id:"usehook1-demo-base",refAtomIds:["useHook1"],dependencies:{"index.tsx":{type:"FILE",value:n(22163).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(64496).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(50959),"../index.tsx":n(20814)},renderOpts:{compile:function(){var P=r()(h()().mark(function R(){var C,S=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(769).then(n.bind(n,11710));case 2:return e.abrupt("return",(C=e.sent).default.apply(C,S));case 3:case"end":return e.stop()}},R)}));function E(){return P.apply(this,arguments)}return E}()}}}},95182:function(I,o,n){n.r(o),n.d(o,{demos:function(){return h}});var a=n(50959),h={}},44008:function(I,o,n){n.r(o),n.d(o,{demos:function(){return N}});var a=n(13448),h=n.n(a),F=n(74815),r=n.n(F),M=n(50959),N={"usemodal-demo-base":{component:M.memo(M.lazy(function(){return n.e(916).then(n.bind(n,49195))})),asset:{type:"BLOCK",id:"usemodal-demo-base",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(56725).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"gyc-components":n(2586),react:n(50959)},renderOpts:{compile:function(){var P=r()(h()().mark(function R(){var C,S=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(769).then(n.bind(n,11710));case 2:return e.abrupt("return",(C=e.sent).default.apply(C,S));case 3:case"end":return e.stop()}},R)}));function E(){return P.apply(this,arguments)}return E}()}},"usemodal-demo-customcontent":{component:M.memo(M.lazy(function(){return n.e(916).then(n.bind(n,98515))})),asset:{type:"BLOCK",id:"usemodal-demo-customcontent",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(43928).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",description:"\u901A\u8FC7open\u65B9\u6CD5\u4F20\u53C2\u4F7F\u7528\u4E0D\u540C\u7684 content"},context:{"gyc-components":n(2586),react:n(50959)},renderOpts:{compile:function(){var P=r()(h()().mark(function R(){var C,S=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(769).then(n.bind(n,11710));case 2:return e.abrupt("return",(C=e.sent).default.apply(C,S));case 3:case"end":return e.stop()}},R)}));function E(){return P.apply(this,arguments)}return E}()}},"usemodal-demo-differentoptions":{component:M.memo(M.lazy(function(){return n.e(916).then(n.bind(n,76834))})),asset:{type:"BLOCK",id:"usemodal-demo-differentoptions",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(30162).Z},antd:{type:"NPM",value:"4.24.15"},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",description:"\u901A\u8FC7open\u65B9\u6CD5\u4F20\u53C2\u4F7F\u7528\u4E0D\u540C\u7684 options"},context:{antd:n(33718),"gyc-components":n(2586),react:n(50959)},renderOpts:{compile:function(){var P=r()(h()().mark(function R(){var C,S=arguments;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(769).then(n.bind(n,11710));case 2:return e.abrupt("return",(C=e.sent).default.apply(C,S));case 3:case"end":return e.stop()}},R)}));function E(){return P.apply(this,arguments)}return E}()}}}},20814:function(I,o,n){n.r(o);var a=n(28152),h=n.n(a),F=n(50959),r=function(){var N=(0,F.useState)({}),P=h()(N,2),E=P[0],R=P[1];return{state:E}};o.default=r},2586:function(I,o,n){n.r(o),n.d(o,{ClickWrap:function(){return F},ColorPicker:function(){return N},Foo:function(){return R},FormFieldFormatter:function(){return S},GModal:function(){return en},GSelect:function(){return on},GUpload:function(){return ln},asyncPool:function(){return Cn},tool1:function(){return V.default},useModal:function(){return pn}});var a=n(50959),h=function(t){var c=t.children,i=t.onClick,u=(0,a.useRef)(!1),p=a.cloneElement(c,{onMouseLeave:function(){u.current=!1},onMouseEnter:function(){u.current=!0}});return(0,a.useEffect)(function(){var l=document.body,f=function(s){u.current||i==null||i(s)};return l.addEventListener("click",f),function(){l.removeEventListener("click",f)}},[]),p},F=h,r=n(11527),M=function(t){var c=t.value,i=t.onChange,u=t.defaultValue,p=t.disabled,l=(0,a.useRef)(),f=function(s){l.current.value=s};return(0,a.useEffect)(function(){f(c)},[c]),(0,a.useEffect)(function(){u&&!c&&f(u)},[u]),(0,r.jsx)("div",{children:(0,r.jsx)("input",{ref:l,type:"color",onChange:function(s){i==null||i(s.target.value)},disabled:p})})},N=M,P=function(){console.log("util1")},E=function(t){return(0,V.default)(),P(),(0,r.jsx)("h4",{children:t.title})},R=E,C=function(t){var c=t.onChange,i=t.value,u=t.formatOnChange,p=t.formatValue,l=t.children;return l?a.cloneElement(l,{onChange:function(){for(var v,s,d=arguments.length,y=new Array(d),m=0;m<d;m++)y[m]=arguments[m];var g=y[0];u&&(g=u.apply(void 0,y)),(v=(s=l.props).onChange)===null||v===void 0||v.call.apply(v,[s].concat(y)),c==null||c(g)},value:p?p(i):i}):null},S=C,U=n(77117),e=n.n(U),X=n(28152),A=n.n(X),w=n(95530),B=n.n(w),k=n(69243),_=n.n(k),b=n(10422),q=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],nn=function(t){var c=t.onClose,i=t.className,u=t.title,p=t.header,l=p===void 0?!0:p,f=t.open,v=f===void 0?!0:f,s=t.style,d=t.targetNode,y=t.children,m=t.afterClose,g=t.destroyOnClose,L=g===void 0?!0:g,D=B()(t,q),x=(0,a.useRef)(null),j=(0,a.useState)(!1),T=A()(j,2),H=T[0],$=T[1],K=(0,a.useState)({}),Z=A()(K,2),xn=Z[0],Mn=Z[1],J=(s==null?void 0:s.height)||400,Y=(s==null?void 0:s.width)||520,Pn=(s==null?void 0:s.top)||(window.innerHeight-J)/2,On=(s==null?void 0:s.left)||(window.innerWidth-Y)/2,En=(0,r.jsx)("div",e()(e()({className:_()("gModal",i),style:e()(e()(e()({width:Y,height:J},s),xn),{},{display:v?"block":"none"})},D),{},{children:(0,r.jsxs)("div",{className:"gModalContent",style:{},children:[l&&(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"title",children:u}),(0,r.jsx)("div",{className:"closeIcon",children:(0,r.jsx)("div",{className:"closeImg",onClick:c,children:"x"})})]}),(0,r.jsx)("div",{className:"content",children:y})]})}));if((0,a.useEffect)(function(){v?(Mn({top:Pn,left:On}),$(!0)):m==null||m()},[v]),!H)return null;var Q=En;return L?v?(0,r.jsx)("div",{ref:x,children:b.createPortal(Q,d?d(x.current):document.body)}):null:(0,r.jsx)("div",{ref:x,children:b.createPortal(Q,d?d(x.current):document.body)})},en=nn,W=n(75427),tn=function(){return(0,r.jsxs)(W.Z,{className:"gselect",children:[(0,r.jsx)(W.Z.Option,{value:1,children:"1"}),(0,r.jsx)(W.Z.Option,{value:12,children:"12"}),(0,r.jsx)(W.Z.Option,{value:123,children:"123"})]})},Rn=function(){console.log("GSelectFunc")},on=tn,an=n(66600),rn=["value","onChange","readonly"],sn=function(t){var c=t.value,i=t.onChange,u=t.readonly,p=B()(t,rn),l=(0,a.useState)([]),f=A()(l,2),v=f[0],s=f[1],d=function(m){console.log("info",m),s(m.fileList),i==null||i(m.fileList)};return(0,a.useEffect)(function(){c&&s(c)},[c]),(0,r.jsx)(an.Z,e()(e()({maxCount:1,showUploadList:!0,customRequest:function(m){console.log(m)},disabled:u,listType:u?"text":"picture-card",itemRender:function(m,g,L,D){if(!u)return m;var x=D.download,j=D.preview,T=D.remove;return(0,r.jsx)("div",{style:{lineHeight:"30px"},children:(0,r.jsx)("a",{href:g==null?void 0:g.url,download:!0,children:g.name})})},accept:"image/jpg,image/jpeg,image/png,*.svg",fileList:v,onChange:d},p),{},{children:u?null:"\u70B9\u51FB\u4E0A\u4F20"}))},ln=sn,dn=n(91557),un=["content"],cn=["content"],z=function(t,c){return typeof t=="function"?t(c):t},mn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=t.content,i=B()(t,un),u=(0,a.useState)(e()({open:!1},i)),p=A()(u,2),l=p[0],f=p[1],v=z(c,l),s=(0,a.useRef)(v),d=(0,a.useState)(v),y=A()(d,2),m=y[0],g=y[1],L=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},H=T.content,$=B()(T,cn),K=e()(e()(e()({},l),$),{},{open:!0});f(K);var Z=z(H||s.current,K);g(Z)},D=function(){f(e()(e()({},l),{},{open:!1}))},x=(0,r.jsx)(dn.Z,e()(e()({onCancel:function(){D()}},l),{},{children:m}));return{open:L,close:D,modalDom:x,modalOptions:l}},pn=mn,vn=n(13448),G=n.n(vn),fn=n(38887),gn=n.n(fn),hn=n(74815),yn=n.n(hn),In=function(){var O=yn()(G()().mark(function t(c,i){var u,p,l,f,v;return G()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:u=[],p=new Set,l=gn()(c),d.prev=3,v=G()().mark(function y(){var m,g,L;return G()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(m=f.value,g=m(),u.push(g),p.add(g),L=function(){return p.delete(g)},g.then(L).catch(L),!(p.size>=i)){x.next=9;break}return x.next=9,Promise.race(p);case 9:case"end":return x.stop()}},y)}),l.s();case 6:if((f=l.n()).done){d.next=10;break}return d.delegateYield(v(),"t0",8);case 8:d.next=6;break;case 10:d.next=15;break;case 12:d.prev=12,d.t1=d.catch(3),l.e(d.t1);case 15:return d.prev=15,l.f(),d.finish(15);case 18:return d.abrupt("return",Promise.all(u));case 19:case"end":return d.stop()}},t,null,[[3,12,15,18]])}));return function(c,i){return O.apply(this,arguments)}}(),Cn=In,V=n(69627)},69627:function(I,o,n){n.r(o);var a=function(){console.log("this is tool1")};o.default=a},21959:function(I,o,n){n.r(o),n.d(o,{texts:function(){return a}});const a=[{value:"This is an example component.",paraId:0,tocIndex:0}]},83881:function(I,o,n){n.r(o),n.d(o,{texts:function(){return a}});const a=[{value:`\u79FB\u52A8\u7AEF\u5217\u8868\u6EDA\u52A8\u7EC4\u4EF6
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
`,paraId:2}]},66099:function(I,o,n){n.r(o),n.d(o,{texts:function(){return a}});const a=[{value:`\u628A visible/open \u7B49\u72B6\u6001\u7BA1\u7406\u4EA4\u7ED9\u7EC4\u4EF6\u5185\u90E8.
\u5F00\u53D1\u8005\u53EA\u9700\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91`,paraId:0,tocIndex:0},{value:"\u5176\u4F59\u53C2\u6570\u4E0E ",paraId:1,tocIndex:6},{value:"Modal",paraId:1,tocIndex:6},{value:" \u4E00\u81F4",paraId:1,tocIndex:6},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"contentRender",paraId:2,tocIndex:6},{value:"content \u533A\u57DF\u6E32\u67D3\u51FD\u6570",paraId:2,tocIndex:6},{value:"(params: ContentRenderProps) => React.ReactNode",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"open",paraId:3,tocIndex:7},{value:"\u6253\u5F00\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:3,tocIndex:7},{value:"(params: OpenProps) => void",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"close",paraId:3,tocIndex:7},{value:"\u5173\u95ED\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:3,tocIndex:7},{value:"() => void",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"modalDom",paraId:3,tocIndex:7},{value:"\u5F39\u7A97\u7684 dom",paraId:3,tocIndex:7},{value:"React.ReactNode",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"\u5176\u4F59\u53C2\u6570\u4E0E ",paraId:4,tocIndex:8},{value:"Modal",paraId:4,tocIndex:8},{value:" \u4E00\u81F4",paraId:4,tocIndex:8},{value:"\u53C2\u6570",paraId:5,tocIndex:8},{value:"\u8BF4\u660E",paraId:5,tocIndex:8},{value:"\u7C7B\u578B",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:8},{value:"data",paraId:5,tocIndex:8},{value:"\u4F20\u5165 modal \u7684\u53C2\u6570\uFF0C\u4F1A\u5728 contentRender \u4E2D\u629B\u51FA",paraId:5,tocIndex:8},{value:"Record<string, any>",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8}]},22163:function(I,o){o.Z=`import React from 'react';
import useHook1 from '../index';

const UseHook1Base = () => {
  const { state } = useHook1();

  return <div>UseHook1Base</div>;
};

export default UseHook1Base;
`},64496:function(I,o){o.Z=`import { useState } from 'react';

const useHook1 = () => {
  const [state, setState] = useState({});
  return { state };
};

export default useHook1;
`},56725:function(I,o){o.Z=`import { useModal } from 'gyc-components';
import React from 'react';

const UseModalBase = () => {
  const { open, modalDom } = useModal({
    destroyOnClose: true,
    content: (modalProps) => {
      return (
        <div>
          <div>\u6211\u662F\u521D\u59CB\u5F39\u7A97</div>
          <div>{JSON.stringify(modalProps)}</div>
        </div>
      );
    },
  });

  return (
    <div>
      <a
        onClick={() => {
          open({
            title: '\u5F39\u7A97\u5C5E\u6027',
          });
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </a>
      {modalDom}
    </div>
  );
};

export default UseModalBase;
`},43928:function(I,o){o.Z=`import { useModal } from 'gyc-components';
import React from 'react';

const UseModalCustomContent = () => {
  const { open, modalDom } = useModal({
    destroyOnClose: true,
    title: '\u5F39\u7A97\u5C5E\u6027',
    content: (modalProps) => {
      return (
        <div>
          <div>\u6211\u662F\u521D\u59CB\u5F39\u7A97</div>
          <div>{JSON.stringify(modalProps)}</div>
        </div>
      );
    },
  });

  return (
    <div>
      <div>
        <a
          onClick={() => {
            open();
          }}
        >
          \u521D\u59CBContent
        </a>
      </div>

      <div>
        <a
          onClick={() => {
            open({
              title: '\u5F39\u7A97\u5C5E\u6027',
              content: (modalProps) => {
                return <div>{JSON.stringify(modalProps)}</div>;
              },
            });
          }}
        >
          \u4F7F\u7528\u81EA\u5B9A\u4E49 content
        </a>
      </div>

      {modalDom}
    </div>
  );
};

export default UseModalCustomContent;
`},30162:function(I,o){o.Z=`import { Form, FormInstance, Input, message, Space } from 'antd';
import { ContentRenderProps, useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

interface EditContentProps extends ContentRenderProps {
  form: FormInstance;
}

const EditContent: React.FC<EditContentProps> = ({ form }) => {
  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item label="content" name="content">
        <Input />
      </Form.Item>
    </Form>
  );
};

const UseModalDifferentOptions = () => {
  const [content, setContent] = useState('');
  const [form] = Form.useForm();

  const { open, close, modalDom } = useModal({
    afterClose: () => {
      form.resetFields();
    },
  });

  return (
    <div>
      <div>content: {content}</div>
      <Space>
        <a
          onClick={() => {
            const data = {};
            open({
              title: '\u65B0\u5EFA',
              onOk: async () => {
                const values = await form.validateFields();
                message.success('\u64CD\u4F5C\u6210\u529F');
                close();
                setContent(values.content);
              },
              content: <EditContent form={form} />,
            });
          }}
        >
          \u65B0\u5EFA
        </a>
        <a
          onClick={() => {
            const data = {
              content,
              id: 11,
            };
            open({
              title: '\u7F16\u8F91',
              onOk: async () => {
                const values = await form.validateFields();
                message.success('\u64CD\u4F5C\u6210\u529F');
                close();
                setContent(values.content);
              },
              content: <EditContent form={form} />,
            });

            form.setFieldsValue(data);
          }}
        >
          \u7F16\u8F91
        </a>
      </Space>

      {modalDom}
    </div>
  );
};

export default UseModalDifferentOptions;
`}}]);
