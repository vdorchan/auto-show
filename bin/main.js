window.__hallSceneConfig = {
  /**
   * 场景初始化回调
   * @param {function} config.disableCouponButton 禁用优惠券按钮，必传 index 参数
   * @param {function} config.enableCouponButton 启用优惠券按钮，必传 index 参数
   * 
   */
  init: function ({ disableCouponButton, enableCouponButton }) {
    // 禁用第 1 个优惠券
    disableCouponButton(1)
  },

  /**
   * loading 进程
   */
  onProgress: onProgress,

  /**
   * loading 结束
   */
  onComplete: onComplete,

  /**
   * 优惠券点击
   * @param {object} config
   * @param {number} config.index 优惠券索引
   * @param {function} config.disableCouponButton 禁用优惠券按钮，必传 index 参数
   * @param {function} config.enableCouponButton 启用优惠券按钮，必传 index 参数
   * @param {boolean} config.couponButtonIsDisabled 优惠券按钮是否被禁用
  */
  onCouponClick: function ({ index, disableCouponButton, enableCouponButton, couponButtonIsDisabled }) {
    if (!couponButtonIsDisabled) {
      alert(`你点击了第${index}个优惠券`)
      disableCouponButton(index)
    }
  },

  /**
   * 转盘点击
   */
  onTurntableClick: function () {
    alert('你点击了转盘')
  },

  /**
   * 优惠券配置
   * @type {number} star 星星数
   * @type {string} title 标题
   * @type {car} car 车型名字
   */
  coupon: [
    {
      star: 3,
      title: '购置税减半至高5000元',
      car: '宝马xx'
    },
    {
      star: 3,
      title: '购置税减半至高5000元',
      car: '宝马xx'
    },
    {
      star: 3,
      title: '购置税减半至高5000元',
      car: '宝马xx'
    },
    {
      star: 3,
      title: '购置税减半至高5000元',
      car: '宝马xx'
    },
],

  // 从左到右为 banner1 到 banner5，正中间最长为 screen
  bannerImages: {
    banner1: 'res/banner/banner1.jpg',
    banner2: 'res/banner/banner2.jpg',
    banner3: 'res/banner/banner3.jpg',
    banner4: 'res/banner/banner4.jpg',
    banner5: 'res/banner/banner5.jpg',
    screen: 'res/banner/screen.jpg',
  }
}

var $loading = document.getElementById('J-loading')
var $circleProgress = $loading.querySelector('.circle-progress')
var $circleLeft = $circleProgress.querySelector('.circle-left .circle')
var $circleRight = $circleProgress.querySelector('.circle-right .circle')
var $circleLight = $circleProgress.querySelector('.circle-light')
var $circlePercent = $circleProgress.querySelector('.circle-percent')

function onProgress(p) {
  var angle = p * 360
  var getCircleLeftAngle = p => (p <= 0.5 ? -135 : 45 + angle)
  var getCircleRightAngle = p => (p <= 0.5 ? -135 + angle : 45)
  var getCircleLightAngle = p => p * 360
  $circleLeft.style.transform = 'rotate(' + getCircleLeftAngle(p) + 'deg)'
  $circleRight.style.transform = 'rotate(' + getCircleRightAngle(p) + 'deg)'
  $circleLight.style.transform = 'rotate(' + getCircleLightAngle(p) + 'deg)'

  var x = 110 + Math.sin((180 - angle) * (Math.PI / 180)) * 160
  var y = 110 + Math.cos((180 - angle) * (Math.PI / 180)) * 160

  $circlePercent.innerText = Math.floor(p * 100) + '%'
  $circlePercent.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)'
}

onProgress(0)

function onComplete() {
  $loading.classList.add('hide')
  setTimeout(() => {
    $loading.parentNode.removeChild($loading)
  }, 1000);
}

