import { ui } from '../ui/layaMaxUI'
import Controller from './Controller'
import SpinCar from './SpinCar'
import CameraRotate from './CameraRotate'
import panCarConfig from './panoCarConfig'

/**
 * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class GameUI extends ui.Hall {
  private _scene: Laya.Scene3D
  private camera: Laya.Camera
  private car: Laya.MeshSprite3D

  /***摇杆的角度****/
  public angle: number = -1
  /***摇杆的弧度****/
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

  constructor() {
    super()

    console.log({ game: this })
    Config.isAntialias = true
    Laya3D.init(0, 0)
    Laya.stage.scaleMode = Laya.Stage.SCALE_FULL
    Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL

    this.$loading = document.getElementById('J-loading')
    this.$percentBar = this.$loading.querySelector('.percent-bar')
    this.preloadRes()
  }

  onEnable() {
    this.controller = this.getComponent(Controller)
    console.log(this.controller)
  }

  preloadRes() {
    var resource = ['res/LayaScene_0615_01/Conventional/3.ls', ...panCarConfig[0].list]
    Laya.loader.create(resource, Laya.Handler.create(this, this.onPreLoadFinish), Laya.Handler.create(this, this.onProgress))
  }

  onProgress(p) {
    this.$percentBar.innerText = Math.ceil(p * 100) + '%' 
  }

  onPreLoadFinish() {
    console.log('onPreLoadFinish')
    this.$loading.classList.add('hide')
    setTimeout(() => {
      this.$loading.parentNode.removeChild(this.$loading)
    }, 1000);

    // 主场景
    this._scene = Laya.stage.addChild(Laya.Loader.getRes('res/LayaScene_0615_01/Conventional/3.ls')) as Laya.Scene3D
    Laya.stage.setChildIndex(this._scene, 0)

    this.car = this._scene.getChildByName('car') as Laya.MeshSprite3D
    this.spinCar = this.car.addComponent(SpinCar)

    this.createCamera()
    this.createCharacter()
    this.controller.show()

    Laya.timer.frameLoop(1, this, () => {
      this.car.transform.lookAt(this.camera.transform.position, new Laya.Vector3(0, 1, 0))
    })
  }

  createCamera() {
    // 模型相机
    this.camera = this._scene.getChildByName('Main Camera') as Laya.Camera
    this.cameraRotate = this.camera.addComponent(CameraRotate)

    //设置相机清楚标记，使用天空
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
  }

  createLight() {
    var directionLight = new Laya.DirectionLight()
    this._scene.addChild(directionLight)
    //设置平行光颜色
    directionLight.color = new Laya.Vector3(1, 1, 1)
    directionLight.transform.rotate(new Laya.Vector3(-3.14 / 3, 0, 0))
  }

  onMouseDown() {}
}
