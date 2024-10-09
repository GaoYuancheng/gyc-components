"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[518],{92948:function(C,t,n){n.r(t),n.d(t,{demos:function(){return F}});var a=n(13448),h=n.n(a),L=n(74815),l=n.n(L),P=n(50959),F={"usehook1-demo-base":{component:P.memo(P.lazy(function(){return n.e(529).then(n.bind(n,89011))})),asset:{type:"BLOCK",id:"usehook1-demo-base",refAtomIds:["useHook1"],dependencies:{"index.tsx":{type:"FILE",value:n(22163).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(64496).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(50959),"../index.tsx":n(20814)},renderOpts:{compile:function(){var M=l()(h()().mark(function R(){var O,j=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(769).then(n.bind(n,11710));case 2:return o.abrupt("return",(O=o.sent).default.apply(O,j));case 3:case"end":return o.stop()}},R)}));function E(){return M.apply(this,arguments)}return E}()}}}},95182:function(C,t,n){n.r(t),n.d(t,{demos:function(){return h}});var a=n(50959),h={}},44008:function(C,t,n){n.r(t),n.d(t,{demos:function(){return F}});var a=n(13448),h=n.n(a),L=n(74815),l=n.n(L),P=n(50959),F={"usemodal-demo-base":{component:P.memo(P.lazy(function(){return n.e(916).then(n.bind(n,49195))})),asset:{type:"BLOCK",id:"usemodal-demo-base",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(56725).Z},antd:{type:"NPM",value:"4.24.15"},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{antd:n(63351),"gyc-components":n(2586),react:n(50959)},renderOpts:{compile:function(){var M=l()(h()().mark(function R(){var O,j=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(769).then(n.bind(n,11710));case 2:return o.abrupt("return",(O=o.sent).default.apply(O,j));case 3:case"end":return o.stop()}},R)}));function E(){return M.apply(this,arguments)}return E}()}},"usemodal-demo-differentoptions":{component:P.memo(P.lazy(function(){return n.e(916).then(n.bind(n,76834))})),asset:{type:"BLOCK",id:"usemodal-demo-differentoptions",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(30162).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",description:"\u901A\u8FC7open\u65B9\u6CD5\u4F20\u53C2\u4F7F\u7528\u4E0D\u540C\u7684 options"},context:{"gyc-components":n(2586),react:n(50959)},renderOpts:{compile:function(){var M=l()(h()().mark(function R(){var O,j=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(769).then(n.bind(n,11710));case 2:return o.abrupt("return",(O=o.sent).default.apply(O,j));case 3:case"end":return o.stop()}},R)}));function E(){return M.apply(this,arguments)}return E}()}}}},20814:function(C,t,n){n.r(t);var a=n(28152),h=n.n(a),L=n(50959),l=function(){var F=(0,L.useState)({}),M=h()(F,2),E=M[0],R=M[1];return{state:E}};t.default=l},2586:function(C,t,n){n.r(t),n.d(t,{ClickWrap:function(){return L},ColorPicker:function(){return F},Foo:function(){return R},FormFieldFormatter:function(){return j},GModal:function(){return en},GSelect:function(){return on},GUpload:function(){return sn},asyncPool:function(){return Cn},tool1:function(){return V.default},useModal:function(){return pn}});var a=n(50959),h=function(e){var m=e.children,c=e.onClick,u=(0,a.useRef)(!1),p=a.cloneElement(m,{onMouseLeave:function(){u.current=!1},onMouseEnter:function(){u.current=!0}});return(0,a.useEffect)(function(){var d=document.body,g=function(r){u.current||c==null||c(r)};return d.addEventListener("click",g),function(){d.removeEventListener("click",g)}},[]),p},L=h,l=n(11527),P=function(e){var m=e.value,c=e.onChange,u=e.defaultValue,p=e.disabled,d=(0,a.useRef)(),g=function(r){d.current.value=r};return(0,a.useEffect)(function(){g(m)},[m]),(0,a.useEffect)(function(){u&&!m&&g(u)},[u]),(0,l.jsx)("div",{children:(0,l.jsx)("input",{ref:d,type:"color",onChange:function(r){c==null||c(r.target.value)},disabled:p})})},F=P,M=function(){console.log("util1")},E=function(e){return(0,V.default)(),M(),(0,l.jsx)("h4",{children:e.title})},R=E,O=function(e){var m=e.onChange,c=e.value,u=e.formatOnChange,p=e.formatValue,d=e.children;return d?a.cloneElement(d,{onChange:function(){for(var v,r,s=arguments.length,I=new Array(s),i=0;i<s;i++)I[i]=arguments[i];var f=I[0];u&&(f=u.apply(void 0,I)),(v=(r=d.props).onChange)===null||v===void 0||v.call.apply(v,[r].concat(I)),m==null||m(f)},value:p?p(c):c}):null},j=O,A=n(77117),o=n.n(A),X=n(28152),N=n.n(X),k=n(95530),B=n.n(k),w=n(69243),_=n.n(w),z=n(10422),q=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],nn=function(e){var m=e.onClose,c=e.className,u=e.title,p=e.header,d=p===void 0?!0:p,g=e.open,v=g===void 0?!0:g,r=e.style,s=e.targetNode,I=e.children,i=e.afterClose,f=e.destroyOnClose,D=f===void 0?!0:f,S=B()(e,q),y=(0,a.useRef)(null),T=(0,a.useState)(!1),U=N()(T,2),Z=U[0],b=U[1],K=(0,a.useState)({}),H=N()(K,2),$=H[0],xn=H[1],Y=(r==null?void 0:r.height)||400,J=(r==null?void 0:r.width)||520,Pn=(r==null?void 0:r.top)||(window.innerHeight-Y)/2,Mn=(r==null?void 0:r.left)||(window.innerWidth-J)/2,On=(0,l.jsx)("div",o()(o()({className:_()("gModal",c),style:o()(o()(o()({width:J,height:Y},r),$),{},{display:v?"block":"none"})},S),{},{children:(0,l.jsxs)("div",{className:"gModalContent",style:{},children:[d&&(0,l.jsxs)("div",{className:"header",children:[(0,l.jsx)("div",{className:"title",children:u}),(0,l.jsx)("div",{className:"closeIcon",children:(0,l.jsx)("div",{className:"closeImg",onClick:m,children:"x"})})]}),(0,l.jsx)("div",{className:"content",children:I})]})}));if((0,a.useEffect)(function(){v?(xn({top:Pn,left:Mn}),b(!0)):i==null||i()},[v]),!Z)return null;var Q=On;return D?v?(0,l.jsx)("div",{ref:y,children:z.createPortal(Q,s?s(y.current):document.body)}):null:(0,l.jsx)("div",{ref:y,children:z.createPortal(Q,s?s(y.current):document.body)})},en=nn,W=n(75427),tn=function(){return(0,l.jsxs)(W.Z,{className:"gselect",children:[(0,l.jsx)(W.Z.Option,{value:1,children:"1"}),(0,l.jsx)(W.Z.Option,{value:12,children:"12"}),(0,l.jsx)(W.Z.Option,{value:123,children:"123"})]})},En=function(){console.log("GSelectFunc")},on=tn,an=n(66600),rn=["value","onChange","readonly"],ln=function(e){var m=e.value,c=e.onChange,u=e.readonly,p=B()(e,rn),d=(0,a.useState)([]),g=N()(d,2),v=g[0],r=g[1],s=function(i){console.log("info",i),r(i.fileList),c==null||c(i.fileList)};return(0,a.useEffect)(function(){m&&r(m)},[m]),(0,l.jsx)(an.Z,o()(o()({maxCount:1,showUploadList:!0,customRequest:function(i){console.log(i)},disabled:u,listType:u?"text":"picture-card",itemRender:function(i,f,D,S){if(!u)return i;var y=S.download,T=S.preview,U=S.remove;return(0,l.jsx)("div",{style:{lineHeight:"30px"},children:(0,l.jsx)("a",{href:f==null?void 0:f.url,download:!0,children:f.name})})},accept:"image/jpg,image/jpeg,image/png,*.svg",fileList:v,onChange:s},p),{},{children:u?null:"\u70B9\u51FB\u4E0A\u4F20"}))},sn=ln,dn=n(91557),un=["contentRender"],cn=["data"],mn=function(e){var m=e.contentRender,c=B()(e,un),u=(0,a.useState)(!1),p=N()(u,2),d=p[0],g=p[1],v=(0,a.useState)(!1),r=N()(v,2),s=r[0],I=r[1],i=(0,a.useState)({}),f=N()(i,2),D=f[0],S=f[1],y=function(K){var H=K.data,$=B()(K,cn);g(!0),I(H),S($)},T=function(){g(!1)},U={data:s,modalProps:o()(o()({},c),{},{open:d})},Z=(0,l.jsx)(dn.Z,o()(o()(o()({onCancel:function(){T()},open:d,destroyOnClose:!0},c),D),{},{children:m(U)}));return{open:y,close:T,modalDom:Z}},pn=mn,vn=n(13448),G=n.n(vn),fn=n(38887),gn=n.n(fn),hn=n(74815),In=n.n(hn),yn=function(){var x=In()(G()().mark(function e(m,c){var u,p,d,g,v;return G()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:u=[],p=new Set,d=gn()(m),s.prev=3,v=G()().mark(function I(){var i,f,D;return G()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(i=g.value,f=i(),u.push(f),p.add(f),D=function(){return p.delete(f)},f.then(D).catch(D),!(p.size>=c)){y.next=9;break}return y.next=9,Promise.race(p);case 9:case"end":return y.stop()}},I)}),d.s();case 6:if((g=d.n()).done){s.next=10;break}return s.delegateYield(v(),"t0",8);case 8:s.next=6;break;case 10:s.next=15;break;case 12:s.prev=12,s.t1=s.catch(3),d.e(s.t1);case 15:return s.prev=15,d.f(),s.finish(15);case 18:return s.abrupt("return",Promise.all(u));case 19:case"end":return s.stop()}},e,null,[[3,12,15,18]])}));return function(m,c){return x.apply(this,arguments)}}(),Cn=yn,V=n(69627)},69627:function(C,t,n){n.r(t);var a=function(){console.log("this is tool1")};t.default=a},21959:function(C,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:"This is an example component.",paraId:0,tocIndex:0}]},83881:function(C,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:`\u79FB\u52A8\u7AEF\u5217\u8868\u6EDA\u52A8\u7EC4\u4EF6
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
`,paraId:2}]},66099:function(C,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:`\u628A visible/open \u7B49\u72B6\u6001\u7BA1\u7406\u4EA4\u7ED9\u7EC4\u4EF6\u5185\u90E8.
\u5F00\u53D1\u8005\u53EA\u9700\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91`,paraId:0,tocIndex:0},{value:"\u5176\u4F59\u53C2\u6570\u4E0E ",paraId:1,tocIndex:5},{value:"Modal",paraId:1,tocIndex:5},{value:" \u4E00\u81F4",paraId:1,tocIndex:5},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"contentRender",paraId:2,tocIndex:5},{value:"content \u533A\u57DF\u6E32\u67D3\u51FD\u6570",paraId:2,tocIndex:5},{value:"(params: ContentRenderProps) => React.ReactNode",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"open",paraId:3,tocIndex:6},{value:"\u6253\u5F00\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:3,tocIndex:6},{value:"(params: OpenProps) => void",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"close",paraId:3,tocIndex:6},{value:"\u5173\u95ED\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:3,tocIndex:6},{value:"() => void",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"modalDom",paraId:3,tocIndex:6},{value:"\u5F39\u7A97\u7684 dom",paraId:3,tocIndex:6},{value:"React.ReactNode",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"\u5176\u4F59\u53C2\u6570\u4E0E ",paraId:4,tocIndex:7},{value:"Modal",paraId:4,tocIndex:7},{value:" \u4E00\u81F4",paraId:4,tocIndex:7},{value:"\u53C2\u6570",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"data",paraId:5,tocIndex:7},{value:"\u4F20\u5165 modal \u7684\u53C2\u6570\uFF0C\u4F1A\u5728 contentRender \u4E2D\u629B\u51FA",paraId:5,tocIndex:7},{value:"Record<string, any>",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7}]},22163:function(C,t){t.Z=`import React from 'react';
import useHook1 from '../index';

const UseHook1Base = () => {
  const { state } = useHook1();

  return <div>UseHook1Base</div>;
};

export default UseHook1Base;
`},64496:function(C,t){t.Z=`import { useState } from 'react';

const useHook1 = () => {
  const [state, setState] = useState({});
  return { state };
};

export default useHook1;
`},56725:function(C,t){t.Z=`import { Form, FormInstance, Input } from 'antd';
import { ContentRenderProps, useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

interface UseDetailModalProps {
  onOkAfter?: () => void;
}

interface DetailContentProps extends ContentRenderProps {
  form: FormInstance;
}

const DetailContent: React.FC<DetailContentProps> = ({
  data,
  form,
  modalProps,
}) => {
  const init = async () => {
    form.setFieldsValue(data);
  };

  useEffect(() => {
    if (modalProps.open) {
      init();
    }
  }, [modalProps.open]);

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
      <Form.Item label="id" name="id">
        <Input />
      </Form.Item>
      <Form.Item label="content" name="content">
        <Input />
      </Form.Item>
    </Form>
  );
};

const useDetailContentModal = ({ onOkAfter }: UseDetailModalProps) => {
  const [form] = Form.useForm();

  const modal = useModal({
    contentRender: ({ data, modalProps }) => (
      <DetailContent data={data} form={form} modalProps={modalProps} />
    ),
    title: 'DetailContent',
    onOk: async () => {
      const data = await form.validateFields();
      onOkAfter?.();
      modal.close();
    },
  });

  return modal;
};

const UseModalBase = () => {
  const [count, setCount] = useState(0);
  const { open, modalDom } = useDetailContentModal({
    onOkAfter: () => {
      setCount((prev) => prev + 1);
    },
  });

  return (
    <div>
      {count}
      <div
        onClick={() => {
          open({
            data: {
              id: 1,
              content: 'content',
            },
          });
        }}
      >
        UseModalBase
      </div>

      {modalDom}
    </div>
  );
};

export default UseModalBase;
`},30162:function(C,t){t.Z=`import { useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

const useDetailModal = () => {
  const modal = useModal({
    contentRender: ({ data, modalProps }) => <div>content</div>,
    title: 'DetailContent',
  });

  return modal;
};

const UseModalDifferentOptions = () => {
  const { open, modalDom } = useDetailModal();

  return (
    <div>
      <a
        onClick={() => {
          open({
            data: {
              id: '1',
              content: 'content',
            },
            title: '\u65B0\u589E',
          });
        }}
      >
        \u65B0\u589E
      </a>

      <a
        onClick={() => {
          open({
            data: {
              id: '1',
              content: 'content',
            },
            title: '\u8BE6\u60C5',
            footer: null,
          });
        }}
      >
        \u8BE6\u60C5
      </a>

      {modalDom}
    </div>
  );
};

export default UseModalDifferentOptions;
`}}]);
