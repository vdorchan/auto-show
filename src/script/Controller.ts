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
  /***控制器中心点****/
  private originPiont: Laya.Point
  /***摇杆与中心点的x轴距离****/
  private deltaX: number
  /***摇杆与中心点的y轴距离****/
  private deltaY: number
  /***当前多点触摸id****/
  private curTouchId: number = 0
  /***手指（鼠标）是否按下****/
  private isDown: Boolean = false
  /***摇杆的角度****/
  public angle: number = -1
  /***摇杆的弧度****/
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
    // 记录当前按下id
    this.curTouchId = e.touchId
    //已按下
    this.isDown = true

    //摇杆移动控制事件监听
    this.touchRect.on(Laya.Event.MOUSE_MOVE, this, this.onRockerMouseMove)
  }
  onRockerMouseUp() {
    this.isDown = false
    //移除摇杆移动事件监听
    this.touchRect.off(Laya.Event.MOUSE_MOVE, this, this.onRockerMouseMove)
    //修改摇杆角度与弧度为-1（代表无角度）
    this.radians = this.angle = -1

    //初始化摇杆控制点位置
    this.controllerDrag.pos(this.originPiont.x, this.originPiont.y)
  }
  onRockerMouseMove(e: Laya.Event) {
    // 如果不是上次的点击id，返回（避免多点抬起，以第一次按下id为准）
    if (!this.isDown || e.touchId != this.curTouchId) return
    //将移动时的鼠标屏幕坐标转化为摇杆局部坐标
    var locationPos: Laya.Point = this.controllerDrag.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY), false)

    locationPos = new Laya.Point(locationPos.x + this.controllerDrag.x - this.controllerDrag.width / 2, locationPos.y + this.controllerDrag.y - this.controllerDrag.height / 2)

    //更新摇杆控制点位置
    this.controllerDrag.pos(locationPos.x, locationPos.y)

    //更新控制点与摇杆中心点位置距离
    this.deltaX = locationPos.x - this.originPiont.x
    this.deltaY = locationPos.y - this.originPiont.y

    //计算控制点在摇杆中的角度
    var dx: number = this.deltaX * this.deltaX
    var dy: number = this.deltaY * this.deltaY
    this.angle = (Math.atan2(this.deltaX, this.deltaY) * 180) / Math.PI
    if (this.angle < 0) this.angle += 360

    //对角度取整
    this.angle = Math.round(this.angle)

    //计算控制点在摇杆中的弧度
    this.radians = (Math.PI / 180) * this.angle

    //强制控制点与中心距离不超过80像素
    if (dx + dy >= 80 * 80) {
      //控制点在半径为80像素的位置（根据弧度变化）
      var x: number = Math.floor(Math.sin(this.radians) * 80 + this.originPiont.x)
      var y: number = Math.floor(Math.cos(this.radians) * 80 + this.originPiont.y)
      this.controllerDrag.pos(x, y)
    } else {
      //不超过80像素取原坐标
      this.controllerDrag.pos(locationPos.x, locationPos.y)
    }
  }
}
