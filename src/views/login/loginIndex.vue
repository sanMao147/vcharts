<template>
  <div class="login-container">
    <div class="layer">
      <div class="some-space">
        <div class="form">
          <h2>大数据可视化平台</h2>
          <div class="item">
            <i class="iconfont icon-user"></i>
            <input
              v-model="data.userName"
              autocomplete="off"
              type="text"
              class="input"
              placeholder="请输入用户名"
            />
          </div>
          <div class="item">
            <i class="iconfont icon-password"></i>
            <input
              v-model="data.userPwd"
              autocomplete="off"
              type="password"
              class="input"
              maxlength="20"
              placeholder="请输入密码"
              @keyup.enter="login"
            />
          </div>
          <a-button
            class="loginBtn"
            type="primary"
            @click="login"
            >立即登录</a-button
          >

          <div class="tip">默认用户名：admin ，默认密码：123456</div>
        </div>
      </div>
    </div>
    <Particles
      id="tsparticles"
      ref="pJSDom"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      :options="particles"
    />
  </div>
</template>

<script setup>
  import { particles } from '@/utils/particles'
  import { message } from 'ant-design-vue'
  import 'ant-design-vue/es/message/style/css'
  import { loadFull } from 'tsparticles'
  import { computed, ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const data = reactive({
    userName: 'admin',
    userPwd: '123456'
  })
  const pJSDom = ref(null)

  const login = () => {
    if (data.userName == 'admin' && data.userPwd == '123456') {
      router.replace({
        path: '/home'
      })
    } else {
      message.error('请输入正确的用户名和密码')
    }
  }

  // const isLoginAble = computed(() => {
  //   return !(data.userName && data.userPwd)
  // })

  const particlesInit = async engine => {
    await loadFull(engine)
  }

  const particlesLoaded = async container => {
    console.log('Particles container loaded', container)
  }

  // onUnmounted(() => {
  //   if (pJSDom.value && pJSDom.value.length > 0) {
  //     pJSDom.value.forEach(element => {
  //       element.pJS.fn.vendors.destroypJS()
  //     })
  //   }
  // })
</script>

<style lang="scss" scoped>
  .login-container {
    .layer {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    #particles-js {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
    }
    .some-space {
      color: white;
      font-weight: 100;
      letter-spacing: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1001;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);

      -ms-animation: cloud 2s 3s ease-in infinite alternate;
      -moz-animation: cloud 2s 3s ease-in infinite alternate;
      -webkit-animation: cloud 2s 3s ease-in infinite alternate;
      -o-animation: cloud 2s 3s ease-in infinite alternate;
      -webkit-animation: cloud 2s 3s ease-in infinite alternate;
      animation: cloud 2s 3s ease-in infinite alternate;

      .form {
        width: 460px;
        height: auto;
        background: rgba(36, 36, 85, 0.5);
        margin: 0 auto;
        padding: 35px 30px 25px;
        box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        .item {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
          border-bottom: 1px solid #d3d7f7;
          i {
            color: #d3d7f7;
            margin-right: 10px;
          }
        }
        h2 {
          text-align: center;
          font-weight: normal;
          font-size: 26px;
          color: #d3d7f7;
          padding-bottom: 35px;
        }
        .input {
          font-size: 16px;
          line-height: 30px;
          width: 100%;
          color: #d3d7f7;
          outline: none;
          border: none;
          background-color: rgba(0, 0, 0, 0);
          padding: 10px 0;
        }
        .loginBtn {
          width: 100%;

          cursor: pointer;
        }
        .tip {
          font-size: 12px;
          padding-top: 20px;
        }
      }
    }
  }

  input::-webkit-input-placeholder {
    color: #d3d7f7;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #d3d7f7;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #d3d7f7;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #d3d7f7;
  }

  @-ms-keyframes cloud {
    0% {
      -ms-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -ms-transform: translate(-50%, -40%);
    }
  }
  @-moz-keyframes cloud {
    0% {
      -moz-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(-50%, -40%);
    }
  }
  @-o-keyframes cloud {
    0% {
      -o-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -o-transform: translate(-50%, -40%);
    }
  }
  @-webkit-keyframes cloud {
    0% {
      -webkit-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(-50%, -40%);
    }
  }
  @keyframes cloud {
    0% {
      transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -40%);
    }
  }
</style>
