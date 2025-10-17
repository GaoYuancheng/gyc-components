"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[3518],{90936:function(s,e,n){n.r(e),n.d(e,{demos:function(){return i}});var t=n(13448),a=n.n(t),p=n(74815),c=n.n(p),r=n(50959),i={"usehook1-demo-base":{component:r.memo(r.lazy(function(){return n.e(2529).then(n.bind(n,88214))})),asset:{type:"BLOCK",id:"usehook1-demo-base",refAtomIds:["useHook1"],dependencies:{"index.tsx":{type:"FILE",value:n(7448).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(32195).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(50959),"../index.tsx":n(11982)},renderOpts:{compile:function(){var d=c()(a()().mark(function m(){var l,v=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(648).then(n.bind(n,90648));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,v));case 3:case"end":return o.stop()}},m)}));function u(){return d.apply(this,arguments)}return u}()}}}},95696:function(s,e,n){n.r(e),n.d(e,{demos:function(){return a}});var t=n(50959),a={}},69320:function(s,e,n){n.r(e),n.d(e,{demos:function(){return i}});var t=n(13448),a=n.n(t),p=n(74815),c=n.n(p),r=n(50959),i={"usemodal-demo-base":{component:r.memo(r.lazy(function(){return n.e(6916).then(n.bind(n,82845))})),asset:{type:"BLOCK",id:"usemodal-demo-base",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(3690).Z},antd:{type:"NPM",value:"4.24.15"},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{antd:n(88931),"gyc-components":n(71364),react:n(50959)},renderOpts:{compile:function(){var d=c()(a()().mark(function m(){var l,v=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(648).then(n.bind(n,90648));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,v));case 3:case"end":return o.stop()}},m)}));function u(){return d.apply(this,arguments)}return u}()}},"usemodal-demo-addoredit":{component:r.memo(r.lazy(function(){return n.e(6916).then(n.bind(n,38493))})),asset:{type:"BLOCK",id:"usemodal-demo-addoredit",refAtomIds:["useModal"],dependencies:{"index.tsx":{type:"FILE",value:n(26745).Z},antd:{type:"NPM",value:"4.24.15"},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",description:"\u901A\u8FC7open\u65B9\u6CD5\u4F20\u53C2\u4F7F\u7528\u4E0D\u540C\u7684 options"},context:{antd:n(88931),"gyc-components":n(71364),react:n(50959)},renderOpts:{compile:function(){var d=c()(a()().mark(function m(){var l,v=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(648).then(n.bind(n,90648));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,v));case 3:case"end":return o.stop()}},m)}));function u(){return d.apply(this,arguments)}return u}()}}}},11982:function(s,e,n){n.r(e);var t=n(28152),a=n.n(t),p=n(50959),c=function(){var i=(0,p.useState)({}),d=a()(i,2),u=d[0],m=d[1];return{state:u}};e.default=c},3969:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"This is an example component.",paraId:0,tocIndex:0}]},95260:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:`\u79FB\u52A8\u7AEF\u5217\u8868\u6EDA\u52A8\u7EC4\u4EF6
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
`,paraId:2}]},76174:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u547D\u4EE4\u5F0F\u5F39\u7A97\u7528\u6CD5",paraId:0,tocIndex:0},{value:`\u628A visible/open \u7B49\u72B6\u6001\u7BA1\u7406\u4EA4\u7ED9\u7EC4\u4EF6\u5185\u90E8.
\u5F00\u53D1\u8005\u53EA\u9700\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91`,paraId:1,tocIndex:0},{value:"\u6253\u5F00\u5F39\u7A97 \u5E76\u4E14\u5728 onOk \u65F6\u83B7\u53D6 state \u72B6\u6001",paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"ModalComponent",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u7EC4\u4EF6",paraId:3,tocIndex:5},{value:"<Modal>{...}</ Modal>",paraId:3,tocIndex:5},{value:"React.ElementType",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"modalOptions",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u7EC4\u4EF6\u7684\u516C\u5171\u53C2\u6570",paraId:3,tocIndex:5},{value:"ModalOptions",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u53C2\u6570",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"open",paraId:4,tocIndex:6},{value:"\u6253\u5F00\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:4,tocIndex:6},{value:"(params: ModalOptions) => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"close",paraId:4,tocIndex:6},{value:"\u5173\u95ED\u5F39\u7A97\u7684\u65B9\u6CD5",paraId:4,tocIndex:6},{value:"() => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"modalDom",paraId:4,tocIndex:6},{value:"\u5F39\u7A97\u7684 dom",paraId:4,tocIndex:6},{value:"React.ReactNode",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"modalOptions",paraId:4,tocIndex:6},{value:"\u5F39\u7A97\u63A5\u53D7\u5230\u7684\u53C2\u6570",paraId:4,tocIndex:6},{value:"ModalOptions",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"Modal",paraId:5,tocIndex:7},{value:" & ModalComponent \u7EC4\u4EF6\u53C2\u6570",paraId:5,tocIndex:7}]},7448:function(s,e){e.Z=`import React from 'react';
import useHook1 from '../index';

const UseHook1Base = () => {
  const { state } = useHook1();

  return <div>UseHook1Base</div>;
};

export default UseHook1Base;
`},32195:function(s,e){e.Z=`import { useState } from 'react';

const useHook1 = () => {
  const [state, setState] = useState({});
  return { state };
};

export default useHook1;
`},26745:function(s,e){e.Z=`import { Form, Input, message, Modal, ModalProps, Space } from 'antd';
import { useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

interface EditModalProps extends ModalProps {
  data: any;
  onSuccess: (values: any) => void;
}

const EditModal: React.FC<EditModalProps> = ({ data, onSuccess, ...rest }) => {
  const { open } = rest;

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
    message.success('\u64CD\u4F5C\u6210\u529F');
    onSuccess(values);
  };

  return (
    <Modal
      afterClose={() => form.resetFields()}
      onOk={onOk}
      title={isEdit ? '\u7F16\u8F91' : '\u65B0\u5EFA'}
      {...rest}
    >
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

  const editModal = useModal(EditModal, {
    onSuccess: (values) => {
      setContent(values.content);
      editModal.close();
    },
  });

  return (
    <div>
      <div>content: {content}</div>
      <Space>
        <a
          onClick={() => {
            editModal.open();
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
            editModal.open({
              data,
            });
          }}
        >
          \u7F16\u8F91
        </a>
      </Space>

      {editModal.modalDom}
    </div>
  );
};

export default UseModalDifferentOptions;
`},3690:function(s,e){e.Z=`import { Modal, ModalProps } from 'antd';
import { useModal } from 'gyc-components';
import React, { useState } from 'react';

interface Props extends ModalProps {
  onSuccess: any;
  count: number;
}
const DemoModal: React.FC<Props> = ({ onSuccess, ...props }) => {
  console.log('DemoModal render', props);
  return (
    <Modal {...props} onOk={onSuccess}>
      <div>
        <div>\u6211\u662F\u521D\u59CB\u5F39\u7A97</div>
        <div>{JSON.stringify(props)}</div>
      </div>
    </Modal>
  );
};

const UseModalBase = () => {
  const [count, setCount] = useState(0);

  const baseModal = useModal(DemoModal, {
    title: '\u5F39\u7A97\u5C5E\u6027',
    count,
    onSuccess: () => {
      console.log('onSuccess', count);
    },
  });

  return (
    <div>
      <a
        onClick={() => {
          baseModal.open({
            title: '\u6211\u662F\u4FEE\u6539\u540E\u7684\u5F39\u7A97',
          });
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </a>
      <div
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        count: {count}
      </div>
      {baseModal.modalDom}
    </div>
  );
};

export default UseModalBase;
`}}]);
