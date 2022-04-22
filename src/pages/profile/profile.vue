<template>
  <view class="profile"
    ><view>
      <form @submit="formSubmit" @reset="formReset">
        <view class="uni-form-item uni-column">
          <view class="title">姓名</view>
          <input class="uni-input" focus placeholder="请输入姓名" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">性别</view>
          <radio-group name="radio">
            <label> <radio value="radio1" /><text>男</text> </label>
            <label> <radio value="radio2" /><text>女</text> </label>
          </radio-group>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">爱好</view>
          <checkbox-group name="checkbox">
            <label> <checkbox value="checkbox1" /><text>读书</text> </label>
            <label> <checkbox value="checkbox2" /><text>写字</text> </label>
          </checkbox-group>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">年龄</view>
          <slider value="50" name="slider" show-value></slider>
        </view>
        <view class="uni-btn-v">
          <button form-type="submit" class="submit">提交</button>
          <button type="default" form-type="reset" class="reset">重置</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    formSubmit: function (e) {
      console.log(
        "form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value)
      );
      var formdata = e.detail.value;
      uni.showModal({
        content: "表单数据内容：" + JSON.stringify(formdata),
        showCancel: false,
      });
    },
    formReset: function (e) {
      console.log("清空数据");
    },
  },
};
</script>

<style>
.profile {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  padding: 20px;
}
.uni-form-item {
  margin: 10px 0;
}

.uni-form-item .uni-input {
  background-color: #fff;
  padding: 8px;
  color: rgb(152, 152, 152);
  font-size: 12px;
}

.uni-form-item .title {
  padding: 20px 0;
}
.submit {
  margin-top: 40px;
  background-color: rgb(128, 149, 255);
  color: #fff;
}
.reset {
  margin-top: 15px;
  background-color: rgb(236, 240, 240);
}
</style>
