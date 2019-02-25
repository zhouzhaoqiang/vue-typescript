<template>
  <div class="login-page">
    <img src="../../assets/login_logo.png" class="login-page-logo"/>
    <div class="login-page-title">账号密码登录</div>
    <div class="login-page-form">
      <div class="login-page-form-phone">
        <input v-model="phone" type="text" placeholder="请输入手机号">
      </div>
      <div class="login-page-form-code">
        <input v-model="code" type="text" placeholder="请输入验证码">
        <button @click="sendCaptcha" :class="{'activeColor': !nodeStyle}">{{codeText}}</button>
      </div>
      <button class="login-page-form-btn" @click="login">登录</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import router from '@/router'
@Component
export default class Login extends Vue {
  private times!: number
  private codeText!: string
  private phone!: string
  private code!: string
  public data() {
    return {
      phone: '',
      code: '',
      times: 60,
      codeText: '获取验证码'
    };
  }

  get nodeStyle():boolean {
    return this.codeText === `获取验证码`;
  }
  private login () {
    this.$router.push('/home');
  }
  private sendCaptcha () {
    const intervalHandler = setInterval(() => {
        if (this.times === 0) {
            this.codeText = `获取验证码`;
            clearInterval(intervalHandler);
        } else {
            this.times--;
            this.codeText = `重新获取${this.times}s`;
        }
    }, 1000);
  }
}
</script>
<style lang="scss" scoped>
.login-page {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    font-size: 22px;
    &-logo {
        width: auto;
        height: 106px;
    }
    &-title {
        color: #323232;
        margin-top: 20px;
    }
    &-form {
        width: 70%;
        margin:30px auto 0;
        text-align: left;
        &-phone, &-code {
           outline:none;
           border: 0;
           background: transparent;
           -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
           box-sizing: border-box;
        }
        &-btn {
            width: 100%;
            display: block;
            margin: 20px auto 0;
            background-color: #4187f5;
            color: #fff;
            line-height: 2.5;
            text-align: center;
            border-radius: .5em;
            outline: none;
            border: 0;
        }
    }
}
.activeColor {
    color: #4187f5;
}
</style>