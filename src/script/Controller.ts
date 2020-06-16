export default class Controller extends Laya.Script {
  /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
  public intType: number = 1000
  /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
  public numType: number = 1000
  /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
  public strType: string = 'hello laya'
  /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
  public boolType: boolean = true
  // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0

  /***触摸区域****/
  private touchRect: Laya.Sprite
  private originPiont: Laya.Point
  private deltaX: number
  private deltaY: number
  private curTouchId: number = 0
  private isDown: Boolean = false
  public angle: number = -1
  public radians: number = -1

  private wrapper: Laya.Sprite
  private controller: Laya.Sprite
  private controllerDrag: Laya.Sprite

  constructor() {
    super()
  }

  onAwake() {
    this.touchRect = Laya.stage

    this.controller = this.owner.getChildByName('controller') as Laya.Sprite
    this.controller.pos(20, Laya.stage.height - this.controller.height - 20)

    this.controllerDrag = this.controller.getChildByName('controller_drag') as Laya.Sprite
    this.originPiont = new Laya.Point(this.controllerDrag.x, this.controllerDrag.y)

    this.controller.pos(20, Laya.stage.height - this.controller.height - 20).on(Laya.Event.MOUSE_DOWN, this, this.onRockerMouseDown)
    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onRockerMouseMove)
    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onRockerMouseUp)
  }

  show() {
    this.controller.visible = true
  }

  onEnable(): void {}

  onDisable(): void {}

  onRockerMouseDown(e: Laya.Event) {
    e.stopPropagation()
    console.log('onRockerMouseDown', e.touchId, this.isDown)
    if (this.isDown) {
      return
    }
    this.curTouchId = e.touchId
    this.isDown = true

    this.touchRect.on(Laya.Event.MOUSE_MOVE, this, this.onRockerMouseMove)
  }
  onRockerMouseUp() {
    this.isDown = false
    this.touchRect.off(Laya.Event.MOUSE_MOVE, this, this.onRockerMouseMove)
    this.radians = this.angle = -1

    this.controllerDrag.pos(this.originPiont.x, this.originPiont.y)
  }
  onRockerMouseMove(e: Laya.Event) {
    // 如果不是上次的点击id，返回（避免多点抬起，以第一次按下id为准）
    if (!this.isDown || e.touchId != this.curTouchId) return

    var locationPos: Laya.Point = this.controllerDrag.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY), false)

    locationPos = new Laya.Point(locationPos.x + this.controllerDrag.x - this.controllerDrag.width / 2, locationPos.y + this.controllerDrag.y - this.controllerDrag.height / 2)

    this.controllerDrag.pos(locationPos.x, locationPos.y)

    this.deltaX = locationPos.x - this.originPiont.x
    this.deltaY = locationPos.y - this.originPiont.y

    var dx: number = this.deltaX * this.deltaX
    var dy: number = this.deltaY * this.deltaY
    this.angle = (Math.atan2(this.deltaX, this.deltaY) * 180) / Math.PI
    if (this.angle < 0) this.angle += 360

    this.angle = Math.round(this.angle)

    this.radians = (Math.PI / 180) * this.angle

    if (dx + dy >= 80 * 80) {
      var x: number = Math.floor(Math.sin(this.radians) * 80 + this.originPiont.x)
      var y: number = Math.floor(Math.cos(this.radians) * 80 + this.originPiont.y)
      this.controllerDrag.pos(x, y)
    } else {
      this.controllerDrag.pos(locationPos.x, locationPos.y)
    }
  }
}
