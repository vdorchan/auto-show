import Controller from './Controller'
import SpinCar from './SpinCar'
import CameraRotate from './CameraRotate'
import panCarConfig from './panoCarConfig'

export default class GameUI extends Laya.Scene {
  private _scene: Laya.Scene3D
  private camera: Laya.Camera
  private car: Laya.MeshSprite3D

  public angle: number = -1
  public radians: number = -1

  public controller: Controller
  public cameraRotate: CameraRotate
  public spinCar: SpinCar

  public character: Laya.CharacterController

  public speed: number = 0.04

  // private translateW = new Laya.Vector3(0, 0, -0.02)
  // private translateS = new Laya.Vector3(0, 0, 0.02)
  // private translateA = new Laya.Vector3(-0.02, 0, 0)
  // private translateD = new Laya.Vector3(0.02, 0, 0)

  $loading: any
  $percentBar: any

  private _outPos = new Laya.Vector4()
  private coupon: Laya.Image
  private couponStars: Laya.Sprite

  private __hallSceneConfig = window.__hallSceneConfig

  constructor() {
    super()

    console.log(this)

    this.loadScene('Hall.scene')

    Laya.MouseManager.multiTouchEnabled = false
    Config.isAntialias = true
    Laya3D.init(0, 0)
    Laya.stage.scaleMode = Laya.Stage.SCALE_FULL
    Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL

    this.$loading = document.getElementById('J-loading')
    this.$percentBar = this.$loading.querySelector('.percent-bar')
    this.coupon = this.scene.getChildByName('coupon')
    this.preloadRes()
  }

  onEnable() {
    // this.controller = this.getComponent(Controller)
  }

  hide(el) {
    el.classList.add('hide')
    setTimeout(() => {
      el.style.display = 'none'
    }, 1000)
  }

  show(el) {
    el.style.display = 'block'
    el.classList.remove('hide')
  }

  emit(fnName, ...args) {
    const fn = this.__hallSceneConfig[fnName]
    fn && fn.apply(this, args)
  }

  createCoupon() {
    try {
      const coupon = this.__hallSceneConfig.coupon

      ;(this.coupon.getChildByName('title') as Laya.Label).text = coupon.title
      ;(this.coupon.getChildByName('car') as Laya.Label).text = coupon.car
      this.drawCouponStars(coupon.star)
      this.coupon.on(Laya.Event.CLICK, this, () => {
        this.emit('onCouponClick')
      })
    } catch (error) {}
  }

  drawCouponStars(num = 1) {
    this.couponStars = this.coupon.getChildByName('stars') as Laya.Sprite
    for (let i = 0; i < 5; i++) {
      const star = new Laya.Image(`res/images/star${i + 1 <= num ? 2 : 1}.png`)
      star.pos(i * 20, 0)
      this.couponStars.addChild(star)
    }
  }

  preloadRes() {
    var resource = [
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-5-510.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-7-647.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-4-160.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-9-923.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-3-54.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-20-205.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/canary_wharf_2k.png',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-21-992.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-18-821.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-2-694.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-6-1.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-8-584.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-11-365.lm',
      'res/LayaScene_0619_04_scene01/Conventional/Assets/lipin-Obj3d66-810003-12-572.lm',
      'res/LayaScene_0619_04_scene01/Conventional/3.ls',
      ...panCarConfig[0].list
    ]
    Laya.loader.create(resource, Laya.Handler.create(this, this.onPreLoadFinish), Laya.Handler.create(this, this.onProgress))
  }

  onProgress(p) {
    this.emit('onProgress', p)
  }

  onPreLoadFinish() {
    this.emit('onComplete')

    // 主场景
    this._scene = Laya.stage.addChild(Laya.Loader.getRes('res/LayaScene_0619_04_scene01/Conventional/3.ls')) as Laya.Scene3D
    Laya.stage.setChildIndex(this._scene, 0)

    this.car = this._scene.getChildByName('car') as Laya.MeshSprite3D
    this.spinCar = this.car.addComponent(SpinCar)

    this.createCamera()
    this.createCharacter()
    this.createCoupon()
    // this.controller.show()

    Laya.timer.frameLoop(1, this, () => {
      this.car.transform.lookAt(this.camera.transform.position, new Laya.Vector3(0, 1, 0))
    })
  }

  createCamera() {
    this.camera = this._scene.getChildByName('Main Camera') as Laya.Camera
    this.cameraRotate = this.camera.addComponent(CameraRotate)
  }

  createCharacter() {
    this.character = this.camera.addComponent(Laya.CharacterController)
    let sphereShape = new Laya.CapsuleColliderShape(1.0, 3.4)
    sphereShape.localOffset = new Laya.Vector3(0, 1, 0)
    this.character.colliderShape = sphereShape
    Laya.timer.frameLoop(1, this, this.moveCharacter)
  }

  moveCharacter() {
    if (this.controller && this.controller.angle !== -1) {
      const translateX = Math.sin(this.controller.radians) * this.speed
      const translateZ = Math.cos(this.controller.radians) * this.speed
      // this.character.move(new Laya.Vector3(translateX, 0, translateZ))
      this.camera.transform.translate(new Laya.Vector3(translateX, 0, translateZ))
    } else {
      if (!this.spinCar.isMouseDown) {
        this.cameraRotate.startUpdate()
      }

      // Laya.KeyBoardManager.hasKeyDown(87) && this.camera.transform.translate(this.translateW) //W
      // Laya.KeyBoardManager.hasKeyDown(83) && this.camera.transform.translate(this.translateS) //S
      // Laya.KeyBoardManager.hasKeyDown(65) && this.camera.transform.translate(this.translateA) //A
      // Laya.KeyBoardManager.hasKeyDown(68) && this.camera.transform.translate(this.translateD) //D
      // Laya.KeyBoardManager.hasKeyDown(69) && character.jump(); //E
    }

    this.camera.viewport.project(this.car.transform.position, this.camera.projectionViewMatrix, this._outPos)
    if (this._outPos.z < 1) {
      const posX = this._outPos.x - this.coupon.getBounds().width / 2
      const posY = this._outPos.y - this.coupon.getBounds().height * 3
      this.coupon.pos(posX, posY)
      this.coupon.scaleX = this.coupon.scaleY = (this._outPos.z + 2) / Laya.Browser.window.devicePixelRatio
    }
  }

  createLight() {
    var directionLight = new Laya.DirectionLight()
    this._scene.addChild(directionLight)
    directionLight.color = new Laya.Vector3(1, 1, 1)
    directionLight.transform.rotate(new Laya.Vector3(-3.14 / 3, 0, 0))
  }

  onMouseDown() {}
}
