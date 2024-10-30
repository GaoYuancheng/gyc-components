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

<!-- ![示例1](./assets/demo-with-u-card.png =430\*932) -->
<img src="./assets/demo-with-u-card.png" height="400px">

:::code-group

```vue | pure [示例1]
<template>
  <u-page class="more">
    <div class="header">
      <u-search
        :clearabled="false"
        @search="search"
        @custom="search"
      ></u-search>
    </div>
    <ScrollView
      ref="scrollViewRef"
      :params="filter"
      :request="getData"
      v-slot="slotProps"
      class="scrollView"
      rowKey="date"
    >
      <u-card
        :title="`${slotProps.item.date}`"
        :border="false"
        class="cardItem"
      >
        <template #body>
          <div class="info" v-for="item in cardItemInfoList">
            <div class="label">{{ item.label }}</div>
            <div class="value">
              {{ slotProps.item[item.valueKey] }}
            </div>
          </div>
        </template>

        <template #foot>
          <div class="footer">
            <div class="refreshBtn" @click="deleteItem">点击后刷新列表</div>
          </div>
        </template>
      </u-card>
    </ScrollView>
  </u-page>
</template>

<script setup>
import ScrollView from '@/components/ScrollView';
import { ref } from 'vue';

const scrollViewRef = ref();

const mockData = {
  success: true,
  data: {
    total: 30,
    list: [
      {
        id: 9412,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 1,
        dutyDept: '1',
        dutyManager: '1',
        dutyMember: '1',
        dutyPhone: '1',
        dutyRoomPhone: '1',
      },
      {
        id: 9413,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 2,
        dutyDept: '1',
        dutyManager: '1',
        dutyMember: '1',
        dutyPhone: '1',
        dutyRoomPhone: '1',
      },
      {
        id: 9414,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 3,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
      {
        id: 9415,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 4,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
      {
        id: 9416,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 5,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
      {
        id: 9417,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 6,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
      {
        id: 9418,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 7,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
      {
        id: 9419,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 8,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
      {
        id: 9420,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 9,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
      {
        id: 9421,
        companyId: 11524,
        year: 2024,
        month: 9,
        date: 10,
        dutyDept: null,
        dutyManager: null,
        dutyMember: null,
        dutyPhone: null,
        dutyRoomPhone: null,
      },
    ],
    pageNum: 1,
    pageSize: 10,
    size: 10,
    startRow: 1,
    endRow: 10,
    pages: 3,
    prePage: 0,
    nextPage: 2,
    isFirstPage: true,
    isLastPage: false,
    hasPreviousPage: false,
    hasNextPage: true,
    navigatePages: 8,
    navigatepageNums: [1, 2, 3],
    navigateFirstPage: 1,
    navigateLastPage: 3,
  },
};

const cardItemInfoList = [
  {
    label: '值班部门：',
    valueKey: 'dutyDept',
  },
  {
    label: '部门负责人：',
    valueKey: 'dutyManager',
  },
  {
    label: '值班人员：',
    valueKey: 'dutyMember',
  },
  {
    label: '联系电话：',
    valueKey: 'dutyPhone',
  },
  {
    label: '总部值班电话：',
    valueKey: 'dutyRoomPhone',
  },
];

const filter = ref({});

const deleteItem = () => {
  scrollViewRef.value.refresh();
};

const search = (value) => {
  filter.value.search = value;
};

const getData = async ({ pageNum, pageSize }, params) => {
  const res = mockData;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        dataList: res?.data?.list || [],
        total: res?.data?.total || 0,
        pages: res?.data?.pages,
      });
    }, 1500);
  });
  // const res = mockData
  // // 可以在这里格式化数据
  // return {
  //   dataList: res?.data?.list || [],
  //   total: res?.data?.total || 0,
  //   pages: res?.data?.pages
  // }
};
</script>

<style lang="scss" scoped>
.more {
  display: flex;
  flex-direction: column;
  .header {
    background: #fff;
    padding: 24rpx;
  }

  .scrollView {
    padding: 24rpx;
    flex: 1;
    .cardItem {
      // background-color: #fff;
      font-size: 32rpx;

      .info {
        display: flex;
        width: 100%;
        margin-bottom: 16rpx;
        .label {
          width: 240rpx;
        }
        .value {
          flex: 1;
          text-align: right;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .footer {
        text-align: right;
        .refreshBtn {
          color: red;
        }
      }
    }
  }
}
</style>
```

```vue | pure [源码（ScrollView.vue）]
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
        @click="scrolltolower"
        v-if="index === list.length - 1"
        :status="status"
        :marginTop="16"
      ></u-loadmore>
    </view>
  </scroll-view>
</template>

<script setup>
import { onMounted, ref, watch, defineExpose } from 'vue';
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

const getList = async (pageNum = pageInfo.value.pageNum) => {
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

defineExpose({
  refresh: () => getList(1),
  getList,
});
</script>

<style lang="scss" scoped>
.scrollView {
  box-sizing: border-box;
}
</style>
```

:::
