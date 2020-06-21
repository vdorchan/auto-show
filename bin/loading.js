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

function onComplete() {
  $loading.classList.add('hide')
  setTimeout(() => {
    $loading.parentNode.removeChild($loading)
  }, 1000);
}

window.__onProgress = onProgress
window.__onComplete = onComplete
