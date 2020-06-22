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

  private translateW = new Laya.Vector3(0, 0, -0.02)
  private translateS = new Laya.Vector3(0, 0, 0.02)
  private translateA = new Laya.Vector3(-0.02, 0, 0)
  private translateD = new Laya.Vector3(0.02, 0, 0)

  $loading: any
  $percentBar: any
  $activityCard: any

  private _outPos = new Laya.Vector4()

  constructor() {
    super()

    console.log(this)

    this.loadScene('Hall.scene')
    Config.isAntialias = true
    Laya3D.init(0, 0)
    Laya.stage.scaleMode = Laya.Stage.SCALE_FULL
    Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL

    this.$loading = document.getElementById('J-loading')
    this.$percentBar = this.$loading.querySelector('.percent-bar')
    this.$activityCard = document.getElementById('J-activityCard')
    // this.$activityCard.parentNode.classList.add('horizontal')
    this.preloadRes()
  }

  onEnable() {
    // this.controller = this.getComponent(Controller)
  }

  hide(el) {
    el.classList.add('hide')
    setTimeout(() => {
      el.style.display = 'none'
    }, 1000);
  }

  show(el) {
    el.style.display = 'block'
    el.classList.remove('hide')
  }

  preloadRes() {
    var resource = [...panCarConfig[0].list, 'res/LayaScene_0619_04_scene01/Conventional/3.ls']
    Laya.loader.create(resource, Laya.Handler.create(this, this.onPreLoadFinish), Laya.Handler.create(this, this.onProgress))
  }

  onProgress(p) {
    console.log({p})
    if (window.__onProgress) {
      window.__onProgress(p)
    }
  }

  onPreLoadFinish() {
    if (window.__onComplete) {
      window.__onComplete()
    }

    // 主场景
    this._scene = Laya.stage.addChild(Laya.Loader.getRes('res/LayaScene_0619_04_scene01/Conventional/3.ls')) as Laya.Scene3D
    Laya.stage.setChildIndex(this._scene, 0)

    this.car = this._scene.getChildByName('car') as Laya.MeshSprite3D
    this.spinCar = this.car.addComponent(SpinCar)

    this.createCamera()
    this.createCharacter()
    // this.controller.show()

    Laya.timer.frameLoop(1, this, () => {
      this.car.transform.lookAt(this.camera.transform.position, new Laya.Vector3(0, 1, 0))
    })
  }

  createCamera() {
    this.camera = this._scene.getChildByName('Main Camera') as Laya.Camera
    this.cameraRotate = this.camera.addComponent(CameraRotate)

    // this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY
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

      Laya.KeyBoardManager.hasKeyDown(87) && this.camera.transform.translate(this.translateW) //W
      Laya.KeyBoardManager.hasKeyDown(83) && this.camera.transform.translate(this.translateS) //S
      Laya.KeyBoardManager.hasKeyDown(65) && this.camera.transform.translate(this.translateA) //A
      Laya.KeyBoardManager.hasKeyDown(68) && this.camera.transform.translate(this.translateD) //D
      // Laya.KeyBoardManager.hasKeyDown(69) && character.jump(); //E
    }

    this.camera.viewport.project(this.car.transform.position, this.camera.projectionViewMatrix, this._outPos)
    const posX = this._outPos.x / 2
    const posY = this._outPos.y / 2
    if (posY < 100) {
      this.hide(this.$activityCard)
    } else {
      this.show(this.$activityCard)
    }
    this.$activityCard.style.transform = `translate(${posX}px, ${posY}px)`
  }

  createLight() {
    var directionLight = new Laya.DirectionLight()
    this._scene.addChild(directionLight)
    directionLight.color = new Laya.Vector3(1, 1, 1)
    directionLight.transform.rotate(new Laya.Vector3(-3.14 / 3, 0, 0))
  }

  onMouseDown() {}
}
