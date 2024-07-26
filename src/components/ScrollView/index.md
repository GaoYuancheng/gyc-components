---
group:
  title: uniapp-mobile-components
  order: 1
---

# ScrollView

- uniapp 移动端滚动组件
- 封装 scroll-view
- 自带下拉分页 下拉刷新
- 支持自定义渲染展示区域.

:::code-group

```vue | pure [示例]
<template>
  <view @click="searchParams.count++">count++</view>
  <ScrollView
    height="100rpx"
    :request="getData"
    :params="{ searchParams }"
    v-slot="slotProps"
    :style="{ color: 'red' }"
    class="scrollView"
  >
    <view>{{ slotProps.item.name }}</view>
  </ScrollView>
</template>

<script setup>
import ScrollView from '@/components/ScrollView';
import { ref } from 'vue';

const mockData = {
  dataList: new Array(10).fill(1).map((item, index) => {
    return {
      id: index,
      name: `张三${index}`,
      age: 18,
      sex: '男',
    };
  }),
  pages: 2,
  total: 10,
};

const searchParams = ref({
  count: 0,
});

const getData = ({ pageNum, pageSize }, params) =>
  new Promise((resolve, reject) => {
    console.log('getData', { pageNum, pageSize, params });
    setTimeout(() => {
      resolve(mockData);
    }, 1000);

    return mockData;
  });
</script>

<style lang="scss" scoped>
.scrollView {
  font-size: 36rpx;
}
</style>
```

```vue | pure [源码（ScrollView.vue）]
<template>
  <scroll-view
    :style="{ 'max-height': height }"
    scroll-y="true"
    refresher-enabled
    @refresherrefresh="onRefresh"
    refresher-background="rgba(244, 246, 248, 1)"
    @scrolltolower="scrolltolower"
    :refresher-triggered="triggered"
  >
    <view v-for="item in list || []" :key="item[rowKey]">
      <slot :item="item">无内容</slot>
    </view>
  </scroll-view>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
const props = defineProps({
  height: {
    type: String,
    default: '300rpx',
  },
  rowKey: {
    type: String,
    default: 'id',
  },
  request: {
    // 请求
    type: Function,
    //
    default: (pageNum, params) => {
      return {
        pages: 0,
        total: 0,
        dataList: [],
      };
    },
  },
  options: {
    // 默认配置
    type: Object,
    default: {},
  },

  params: {
    // 筛选参数 会带到request中
    type: Object,
    default: {},
  },
});

const { options, request, params, rowKey } = props;
const { defaultPageSize = 10 } = options;

const triggered = ref(false);
const loading = ref(false);
const list = ref([]);
const pageInfo = ref({
  pageNum: 1,
  pageSize: defaultPageSize,
  pages: 0,
  total: 0,
});

const getList = async (pageNum) => {
  if (loading.value) return;

  const pageSize = pageInfo.value.pageSize;
  loading.value = true;
  try {
    const res = await request({ pageNum, pageSize }, params);
    if (pageNum === 1) {
      list.value = res?.dataList || [];
    } else {
      list.value = list.value.concat(res?.dataList || []);
    }
    pageInfo.value = {
      pageNum,
      pageSize,
      pages: res.pages,
      total: res.total,
    };
  } finally {
    loading.value = false;
  }
};

// 上拉
const onRefresh = async () => {
  console.log('onRefresh');
  triggered.value = true;
  await getList(1);
  triggered.value = false;
};

// 触底
const scrolltolower = async () => {
  console.log('scrolltolower');
  if (loading.value) return;
  const params = { ...pageInfo.value };
  if (params.pageNum < params.pages) {
    params.pageNum++;
    await getList(params.pageNum);
  } else {
    console.log('已经到底了');
  }
};

watch(
  () => props.params,
  (newValue) => {
    getList(1, newValue);
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss" scoped></style>
```

:::
