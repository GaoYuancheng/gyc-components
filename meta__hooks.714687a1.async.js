"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[518],{92948:function(y,o,n){n.r(o),n.d(o,{demos:function(){return D}});var a=n(13448),h=n.n(a),S=n(74815),s=n.n(S),x=n(50959),D={"usehook1-demo-base":{component:x.memo(x.lazy(function(){return n.e(529).then(n.bind(n,89011))})),asset:{type:"BLOCK",id:"usehook1-demo-base",refAtomIds:["useHook1"],dependencies:{"index.tsx":{type:"FILE",value:n(22163).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(64496).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(50959),"../index.tsx":n(20814)},renderOpts:{compile:function(){var E=s()(h()().mark(function R(){var O,L=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(769).then(n.bind(n,11710));case 2:return t.abrupt("return",(O=t.sent).default.apply(O,L));case 3:case"end":return t.stop()}},R)}));function P(){return E.apply(this,arguments)}return P}()}}}},95182:function(y,o,n){n.r(o),n.d(o,{demos:function(){return h}});var a=n(50959),h={}},44008:function(y,o,n){n.r(o),n.d(o,{demos:function(){return D}});var a=n(13448),h=n.n(a),S=n(74815),s=n.n(S),x=n(50959),D={"usemodal-demo-base":{component:x.memo(x.lazy(function(){return n.e(916).then(n.bind(n,49195))})),asset:{type:"BLOCK",id:"usemodal-demo-base",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(56725).Z},antd:{type:"NPM",value:"4.24.15"},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{antd:n(33718),"gyc-components":n(2586),react:n(50959)},renderOpts:{compile:function(){var E=s()(h()().mark(function R(){var O,L=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(769).then(n.bind(n,11710));case 2:return t.abrupt("return",(O=t.sent).default.apply(O,L));case 3:case"end":return t.stop()}},R)}));function P(){return E.apply(this,arguments)}return P}()}},"usemodal-demo-addoredit":{component:x.memo(x.lazy(function(){return n.e(916).then(n.bind(n,33185))})),asset:{type:"BLOCK",id:"usemodal-demo-addoredit",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(21001).Z},antd:{type:"NPM",value:"4.24.15"},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",description:"\u901A\u8FC7open\u65B9\u6CD5\u4F20\u53C2\u4F7F\u7528\u4E0D\u540C\u7684 options"},context:{antd:n(33718),"gyc-components":n(2586),react:n(50959)},renderOpts:{compile:function(){var E=s()(h()().mark(function R(){var O,L=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(769).then(n.bind(n,11710));case 2:return t.abrupt("return",(O=t.sent).default.apply(O,L));case 3:case"end":return t.stop()}},R)}));function P(){return E.apply(this,arguments)}return P}()}}}},20814:function(y,o,n){n.r(o);var a=n(28152),h=n.n(a),S=n(50959),s=function(){var D=(0,S.useState)({}),E=h()(D,2),P=E[0],R=E[1];return{state:P}};o.default=s},2586:function(y,o,n){n.r(o),n.d(o,{ClickWrap:function(){return S},ColorPicker:function(){return D},Foo:function(){return R},FormFieldFormatter:function(){return L},GModal:function(){return k},GSelect:function(){return q},GUpload:function(){return tn},asyncPool:function(){return pn},tool1:function(){return K.default},useModal:function(){return rn}});var a=n(50959),h=function(e){var m=e.children,i=e.onClick,u=(0,a.useRef)(!1),p=a.cloneElement(m,{onMouseLeave:function(){u.current=!1},onMouseEnter:function(){u.current=!0}});return(0,a.useEffect)(function(){var d=document.body,f=function(r){u.current||i==null||i(r)};return d.addEventListener("click",f),function(){d.removeEventListener("click",f)}},[]),p},S=h,s=n(11527),x=function(e){var m=e.value,i=e.onChange,u=e.defaultValue,p=e.disabled,d=(0,a.useRef)(),f=function(r){d.current.value=r};return(0,a.useEffect)(function(){f(m)},[m]),(0,a.useEffect)(function(){u&&!m&&f(u)},[u]),(0,s.jsx)("div",{children:(0,s.jsx)("input",{ref:d,type:"color",onChange:function(r){i==null||i(r.target.value)},disabled:p})})},D=x,E=function(){console.log("util1")},P=function(e){return(0,K.default)(),E(),(0,s.jsx)("h4",{children:e.title})},R=P,O=function(e){var m=e.onChange,i=e.value,u=e.formatOnChange,p=e.formatValue,d=e.children;return d?a.cloneElement(d,{onChange:function(){for(var v,r,l=arguments.length,I=new Array(l),c=0;c<l;c++)I[c]=arguments[c];var g=I[0];u&&(g=u.apply(void 0,I)),(v=(r=d.props).onChange)===null||v===void 0||v.call.apply(v,[r].concat(I)),m==null||m(g)},value:p?p(i):i}):null},L=O,j=n(77117),t=n.n(j),V=n(28152),T=n.n(V),J=n(95530),B=n.n(J),Y=n(69243),Q=n.n(Y),G=n(10422),X=["onClose","className","title","header","open","style","targetNode","children","afterClose","destroyOnClose"],w=function(e){var m=e.onClose,i=e.className,u=e.title,p=e.header,d=p===void 0?!0:p,f=e.open,v=f===void 0?!0:f,r=e.style,l=e.targetNode,I=e.children,c=e.afterClose,g=e.destroyOnClose,F=g===void 0?!0:g,N=B()(e,X),C=(0,a.useRef)(null),W=(0,a.useState)(!1),A=T()(W,2),vn=A[0],fn=A[1],gn=(0,a.useState)({}),H=T()(gn,2),hn=H[0],In=H[1],Z=(r==null?void 0:r.height)||400,$=(r==null?void 0:r.width)||520,yn=(r==null?void 0:r.top)||(window.innerHeight-Z)/2,Mn=(r==null?void 0:r.left)||(window.innerWidth-$)/2,Cn=(0,s.jsx)("div",t()(t()({className:Q()("gModal",i),style:t()(t()(t()({width:$,height:Z},r),hn),{},{display:v?"block":"none"})},N),{},{children:(0,s.jsxs)("div",{className:"gModalContent",style:{},children:[d&&(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("div",{className:"title",children:u}),(0,s.jsx)("div",{className:"closeIcon",children:(0,s.jsx)("div",{className:"closeImg",onClick:m,children:"x"})})]}),(0,s.jsx)("div",{className:"content",children:I})]})}));if((0,a.useEffect)(function(){v?(In({top:yn,left:Mn}),fn(!0)):c==null||c()},[v]),!vn)return null;var z=Cn;return F?v?(0,s.jsx)("div",{ref:C,children:G.createPortal(z,l?l(C.current):document.body)}):null:(0,s.jsx)("div",{ref:C,children:G.createPortal(z,l?l(C.current):document.body)})},k=w,U=n(75427),_=function(){return(0,s.jsxs)(U.Z,{className:"gselect",children:[(0,s.jsx)(U.Z.Option,{value:1,children:"1"}),(0,s.jsx)(U.Z.Option,{value:12,children:"12"}),(0,s.jsx)(U.Z.Option,{value:123,children:"123"})]})},xn=function(){console.log("GSelectFunc")},q=_,nn=n(66600),en=["value","onChange","readonly"],on=function(e){var m=e.value,i=e.onChange,u=e.readonly,p=B()(e,en),d=(0,a.useState)([]),f=T()(d,2),v=f[0],r=f[1],l=function(c){console.log("info",c),r(c.fileList),i==null||i(c.fileList)};return(0,a.useEffect)(function(){m&&r(m)},[m]),(0,s.jsx)(nn.Z,t()(t()({maxCount:1,showUploadList:!0,customRequest:function(c){console.log(c)},disabled:u,listType:u?"text":"picture-card",itemRender:function(c,g,F,N){if(!u)return c;var C=N.download,W=N.preview,A=N.remove;return(0,s.jsx)("div",{style:{lineHeight:"30px"},children:(0,s.jsx)("a",{href:g==null?void 0:g.url,download:!0,children:g.name})})},accept:"image/jpg,image/jpeg,image/png,*.svg",fileList:v,onChange:l},p),{},{children:u?null:"\u70B9\u51FB\u4E0A\u4F20"}))},tn=on,an=function(e){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t()({open:!1,visible:!1,onCancel:function(){r()}},m),u=(0,a.useState)(i),p=T()(u,2),d=p[0],f=p[1],v=(0,a.useRef)(i),r=function(){f(t()(t()({},d),{},{open:!1,visible:!1}))},l=a.createElement(e,d),I=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};f(t()(t()(t()({},v.current),g),{},{open:!0,visible:!0}))};return{modalDom:l,open:I,close:r,modalOptions:d}},rn=an,ln=n(13448),b=n.n(ln),sn=n(38887),dn=n.n(sn),un=n(74815),cn=n.n(un),mn=function(){var M=cn()(b()().mark(function e(m,i){var u,p,d,f,v;return b()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:u=[],p=new Set,d=dn()(m),l.prev=3,v=b()().mark(function I(){var c,g,F;return b()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(c=f.value,g=c(),u.push(g),p.add(g),F=function(){return p.delete(g)},g.then(F).catch(F),!(p.size>=i)){C.next=9;break}return C.next=9,Promise.race(p);case 9:case"end":return C.stop()}},I)}),d.s();case 6:if((f=d.n()).done){l.next=10;break}return l.delegateYield(v(),"t0",8);case 8:l.next=6;break;case 10:l.next=15;break;case 12:l.prev=12,l.t1=l.catch(3),d.e(l.t1);case 15:return l.prev=15,d.f(),l.finish(15);case 18:return l.abrupt("return",Promise.all(u));case 19:case"end":return l.stop()}},e,null,[[3,12,15,18]])}));return function(m,i){return M.apply(this,arguments)}}(),pn=mn,K=n(69627)},69627:function(y,o,n){n.r(o);var a=function(){console.log("this is tool1")};o.default=a},21959:function(y,o,n){n.r(o),n.d(o,{texts:function(){return a}});const a=[{value:"This is an example component.",paraId:0,tocIndex:0}]},83881:function(y,o,n){n.r(o),n.d(o,{texts:function(){return a}});const a=[{value:`\u79FB\u52A8\u7AEF\u5217\u8868\u6EDA\u52A8\u7EC4\u4EF6
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
`,paraId:2}]},66099:function(y,o,n){n.r(o),n.d(o,{texts:function(){return a}});const a=[{value:"\u547D\u4EE4\u5F0F\u5F39\u7A97\u7528\u6CD5",paraId:0,tocIndex:0},{value:`\u628A visible/open \u7B49\u72B6\u6001\u7BA1\u7406\u4EA4\u7ED9\u7EC4\u4EF6\u5185\u90E8.
\u5F00\u53D1\u8005\u53EA\u9700\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91`,paraId:1,tocIndex:0},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"ModalComponent",paraId:2,tocIndex:5},{value:"\u5F39\u7A97\u7EC4\u4EF6",paraId:2,tocIndex:5},{value:"<Modal>{...}</ Modal>",paraId:2,tocIndex:5},{value:"React.ElementType",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"modalOptions",paraId:2,tocIndex:5},{value:"\u5F39\u7A97\u7EC4\u4EF6\u7684\u516C\u5171\u53C2\u6570",paraId:2,tocIndex:5},{value:"ModalOptions",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"open",paraId:3,tocIndex:6},{value:"\u6253\u5F00\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:3,tocIndex:6},{value:"(params: ModalOptions) => void",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"close",paraId:3,tocIndex:6},{value:"\u5173\u95ED\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:3,tocIndex:6},{value:"() => void",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"modalDom",paraId:3,tocIndex:6},{value:"\u5F39\u7A97\u7684 dom",paraId:3,tocIndex:6},{value:"React.ReactNode",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"modalOptions",paraId:3,tocIndex:6},{value:"\u5F39\u7A97\u63A5\u53D7\u5230\u7684\u53C2\u6570",paraId:3,tocIndex:6},{value:"ModalOptions",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"Modal",paraId:4,tocIndex:7},{value:" & ModalComponent \u7EC4\u4EF6\u53C2\u6570",paraId:4,tocIndex:7}]},22163:function(y,o){o.Z=`import React from 'react';
import useHook1 from '../index';

const UseHook1Base = () => {
  const { state } = useHook1();

  return <div>UseHook1Base</div>;
};

export default UseHook1Base;
`},64496:function(y,o){o.Z=`import { useState } from 'react';

const useHook1 = () => {
  const [state, setState] = useState({});
  return { state };
};

export default useHook1;
`},21001:function(y,o){o.Z=`import {
  Form,
  FormInstance,
  Input,
  message,
  Modal,
  ModalProps,
  Space,
} from 'antd';
import { ContentRenderProps, useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

interface EditModalProps extends ModalProps {
  data: any;
  onSuccess: (values: any) => void;
}

const EditModal: React.FC<EditModalProps> = ({ ...props }) => {
  const { data, open, onSuccess } = props;

  const isEdit = data?.id;

  const [form] = Form.useForm();

  const init = async () => {
    form.setFieldsValue(data);
  };

  useEffect(() => {
    if (!open) return;
    if (isEdit) {
      // \u7F16\u8F91\u56DE\u586B
      init();
    }
  }, [open]);

  const onOk = async () => {
    const values = await form.validateFields();
    if (data?.id) {
      console.log('\u7F16\u8F91', values);
    } else {
      // \u65B0\u5EFA
      console.log('\u65B0\u5EFA', values);
    }
    onSuccess(values);
  };

  return (
    <Modal onOk={onOk} title={isEdit ? '\u7F16\u8F91' : '\u65B0\u5EFA'} {...props}>
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
    </Modal>
  );
};

const UseModalDifferentOptions = () => {
  const [content, setContent] = useState('');

  const { open, close, modalDom } = useModal(EditModal, {
    onSuccess: (values) => {
      setContent(values.content);
      close();
    },
  });

  return (
    <div>
      <div>content: {content}</div>
      <Space>
        <a
          onClick={() => {
            open();
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
              data,
            });
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
`},56725:function(y,o){o.Z=`import { Modal, ModalProps } from 'antd';
import { useModal } from 'gyc-components';
import React from 'react';

interface Props extends ModalProps {}
const DemoModal: React.FC<Props> = ({ ...props }) => {
  return (
    <Modal {...props}>
      <div>
        <div>\u6211\u662F\u521D\u59CB\u5F39\u7A97</div>
        <div>{JSON.stringify(props)}</div>
      </div>
    </Modal>
  );
};

const UseModalBase = () => {
  const baseModal = useModal(DemoModal, {
    title: '\u5F39\u7A97\u5C5E\u6027',
  });

  return (
    <div>
      <a
        onClick={() => {
          baseModal.open();
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </a>
      {baseModal.modalDom}
    </div>
  );
};

export default UseModalBase;
`}}]);
