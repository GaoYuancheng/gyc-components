<template>
  <u-empty mode="data" v-if="list.length == 0" text="暂无数据" />
  <scroll-view
    v-else
    :class="`${$attrs.class} scrollView`"
    :style="{ height: height }"
    scroll-y="true"
    refresher-enabled
    @refresherrefresh="onRefresh"
    refresher-background="rgba(244, 246, 248, 1)"
    @scrolltolower="scrolltolower"
    :refresher-triggered="triggered"
  >
    <view v-for="(item, index) in list || []" :key="item[rowKey]">
      <slot :item="item">无内容</slot>
      <!-- 只能放里面 放外面布局会有问题 -->
      <u-loadmore
        v-if="index === list.length - 1"
        :status="status"
        :marginTop="16"
      ></u-loadmore>
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
    default: (pageInfo, params) => {
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
const status = ref('loadmore');
const list = ref([]);
const pageInfo = ref({
  pageNum: 1,
  pageSize: defaultPageSize,
  pages: 0,
  total: 0,
});

const loading = status.value === 'loading';

const getList = async (pageNum) => {
  uni.showLoading({
    title: '加载中...',
  });
  if (loading) return;

  const pageSize = pageInfo.value.pageSize;
  status.value = 'loading';
  try {
    const res = await request({ pageNum, pageSize }, params);
    if (pageNum === 1) {
      list.value = res?.dataList || [];
    } else {
      list.value = list.value.concat(res?.dataList || []);
    }

    const resPage = res.pages || Math.ceil(res.total / pageSize);

    pageInfo.value = {
      pageNum,
      pageSize,
      pages: resPage,
      total: res.total,
    };
  } finally {
    status.value = 'loadmore';
    uni.hideLoading();
  }
};

// 上拉
const onRefresh = async () => {
  triggered.value = true;
  await getList(1);
  triggered.value = false;
};

// 触底
const scrolltolower = async () => {
  if (loading) return;
  const params = { ...pageInfo.value };
  if (params.pageNum < params.pages) {
    params.pageNum++;
    await getList(params.pageNum);
  } else {
    status.value = 'nomore';
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

<style lang="scss" scoped>
.scrollView {
  box-sizing: border-box;
}
</style>
