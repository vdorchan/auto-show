import panoCarConfig from './panoCarConfig'

export default class ColorPick extends Laya.Script {
  /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
  public intType: number = 1000
  /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
  public numType: number = 1000
  /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
  public strType: string = 'hello laya'
  /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
  public boolType: boolean = true
  // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0

  public colorPick: Laya.Sprite
  public panoCars: { color: string; list: string[] }[]
  private curColor: string
  private circleRadius: number = 25

  onEnable(): void {
    console.log(123, this)

    this.panoCars = panoCarConfig

    this.colorPick = this.owner as Laya.Sprite
    const width = this.panoCars.length * (this.circleRadius * 2 + 10) + 20
    const height = this.circleRadius * 2

    this.colorPick.graphics.drawRect(0, 0, width, height, '#292929')
    this.colorPick
      .size(width, height)
      .pivot(width / 2, 0)
      .pos(Laya.stage.width / 2, Laya.stage.height - height - 100)

    // this.colorPick.on(Laya.Event.CLICK, this, e => {
    //   e.stopPropagation()
    // })

    this.curColor = this.panoCars[0].color
    this.createCircle()
  }

  onDisable(): void {}

  createCircle() {
    for (let index = 0; index < this.panoCars.length; index++) {
      const car = this.panoCars[index]
      const sp = new Laya.Sprite()
      const x = 10 + index * (this.circleRadius * 2 + 10)
      console.log({x})
      sp.pos(x, 0).size(this.circleRadius * 2, this.circleRadius * 2)
      sp.on(Laya.Event.MOUSE_DOWN, this, () => {
        console.log(12312312, car.color)
      })

      this.colorPick.addChild(sp)
      sp.graphics.drawCircle(this.circleRadius, this.colorPick.height / 2, this.circleRadius, `#${car.color}`)
    }
  }

  onSelectColor(color) {
    console.log(color)
  }
}
