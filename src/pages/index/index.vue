<template>
  <view class="wrap">
    <!-- 轮播图 -->
    <view class="uni-padding-wrap">
      <view class="page-section swiper">
        <view class="page-section-spacing">
          <swiper
            class="swiper"
            :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration"
          >
            <swiper-item>
              <view class="swiper-item uni-bg-red">
                <image src="@/static/blue.jpg" />
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item uni-bg-green">
                <image src="@/static/green.jpg" />
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item uni-bg-blue">
                <image src="@/static/pink.jpg" />
              </view>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>
    <!-- 编辑 -->
    <view class="container">
      <editor
        id="editor"
        class="ql-container"
        :placeholder="placeholder"
        @ready="onEditorReady"
      ></editor>
      <button type="warn" @tap="undo">撤销</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      placeholder: "开始输入...",
    };
  },
  methods: {
    onEditorReady() {
      // #ifdef MP-BAIDU
      this.editorCtx =
        requireDynamicLib("editorLib").createEditorContext("editorId");
      // #endif

      // #ifdef APP-PLUS || H5 ||MP-WEIXIN
      uni
        .createSelectorQuery()
        .select("#editor")
        .context((res) => {
          this.editorCtx = res.context;
        })
        .exec();
      // #endif
    },
    undo() {
      this.editorCtx.undo();
    },
  },
};
</script>

<style>
.wrap {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
}
uni-image {
  width: 100%;
}

.container {
  margin: 80px 15px 0;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
}
</style>
