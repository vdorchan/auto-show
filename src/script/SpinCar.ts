import panCarConfig from './panoCarConfig'

export default class SpinCar extends Laya.Script3D {
  public car: Laya.MeshSprite3D
  public carUrls: string[]
  public isMouseDown: boolean
  public spinIdx: number = 0
  public startX: number = null
  public colorPick: Laya.Sprite
  public panoCars: { color: string; list: string[] }[]
  public colorIdx: number = 0
  public colorItemList: laya.display.cmd.DrawCircleCmd[] = []
  public circleRadius: number = 40
  public hasLoadColorIdx: number[] = [0]

  private colorPickItemPadding: number = 10
  private colorPickItemBorderWidth: number = 2
  private colorItemBorderColor: string = '#fff'
  private colorItemActivedBorderColor: string = '#59b7ff'

  onEnable(): void {
    this.panoCars = panCarConfig
    this.carUrls = this.panoCars[0].list
    this.car = this.owner as Laya.MeshSprite3D
    this.createColorPick()
    this.onColorPick(0)

    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.handleMouseMove)
    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.handleMouseUp)
  }

  createColorPick() {
    this.colorPick = new Laya.Sprite()
    Laya.stage.addChild(this.colorPick)

    const width = this.panoCars.length * (this.circleRadius * 2 + this.colorPickItemPadding) + this.colorPickItemPadding
    const height = this.circleRadius * 2 + this.colorPickItemPadding * 2

    const radius = 20

    var path: any[] = [
      ['moveTo', 0, 0], //画笔的起始点，
      ['lineTo', width, 0],
      ['arcTo', width + radius, 0, width + radius, radius, radius],
      ['lineTo', width + radius, height],
      ['arcTo', width + radius, height + radius, width, height + radius, radius],
      ['lineTo', 0, height + radius],
      ['arcTo', -radius, height + radius, -radius, height, radius],
      ['lineTo', -radius, radius],
      ['arcTo', -radius, 0, 0, 0, radius]
    ]

    this.colorPick.graphics.drawPath(0, -radius / 2 , path, {fillStyle: "#292929"});

    this.colorPick
      .size(width, height)
      .pivot(width / 2, 0)
      .pos(Laya.stage.width / 2, Laya.stage.height - height - 100)

    this.createColorPickItem()
  }

  createColorPickItem() {
    for (let index = 0; index < this.panoCars.length; index++) {
      const car = this.panoCars[index]
      const sp = new Laya.Sprite()
      const x = this.colorPickItemPadding + index * (this.circleRadius * 2 + this.colorPickItemPadding)
      this.colorItemList.push(sp.graphics.drawCircle(this.circleRadius, this.circleRadius, this.circleRadius, `#${car.color}`, this.colorItemBorderColor, this.colorPickItemBorderWidth))
      sp.pos(x, this.colorPickItemPadding)
        .size(this.circleRadius * 2, this.circleRadius * 2)
        .on(Laya.Event.CLICK, this, () => this.onColorPick(index))
        .on(Laya.Event.ROLL_OVER, this, () => {
          Laya.Mouse.cursor = 'pointer'
        })
        .on(Laya.Event.ROLL_OUT, this, () => {
          Laya.Mouse.cursor = 'default'
        })

      this.colorPick.addChild(sp)
    }
  }

  onColorPick(index) {
    this.colorIdx = index
    this.colorItemList.forEach((item, idx) => {
      if (idx === index) {
        item.lineColor = this.colorItemActivedBorderColor
        item.lineWidth = this.colorPickItemBorderWidth + 2
      } else {
        item.lineColor = this.colorItemBorderColor
        item.lineWidth = this.colorPickItemBorderWidth
      }
    })
    this.preloadRes()
  }

  preloadRes() {
    if (this.hasLoadColorIdx.indexOf(this.colorIdx) !== -1) {
      this.setTexture()
    }
    const carUrls = this.panoCars[this.colorIdx].list
    Laya.loader.create(
      [...carUrls],
      Laya.Handler.create(this, () => {
        this.car.active
        this.hasLoadColorIdx.push(this.colorIdx)
        this.carUrls = carUrls
        this.setTexture()
      })
    )
  }

  setTexture() {
    const mater = new Laya.BlinnPhongMaterial()
    mater.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT
    const texture = Laya.Loader.getRes(this.carUrls[this.spinIdx]) as Laya.Texture2D
    mater.albedoTexture = texture

    this.car.meshRenderer.material = mater
  }

  spin(reverse = false) {
    reverse ? this.spinIdx-- : this.spinIdx++
    if (this.spinIdx < 0) {
      this.spinIdx += this.carUrls.length
    }
    if (this.spinIdx > this.carUrls.length - 1) {
      this.spinIdx %= this.carUrls.length
    }

    this.setTexture()
  }

  //物体必须拥有碰撞组件（Collider）
  //当被鼠标点击
  onMouseDown() {
    this.isMouseDown = true
    this.startX = Laya.stage.mouseX
  }

  handleMouseUp() {
    this.isMouseDown = false
    this.startX = null
  }

  handleMouseMove(e) {
    e.stopPropagation()

    if (!this.isMouseDown) {
      return
    }
    if (typeof this.startX !== 'number') {
      this.startX = Laya.stage.mouseX
    }
    if (Math.abs(Laya.stage.mouseX - this.startX) > 10) {
      this.spin(Laya.stage.mouseX - this.startX < 0)
      this.startX = Laya.stage.mouseX
    }
  }

  autoSpin() {
    let count = 0
    const spinFn = () => {
      this.spin()
      count++
      if (count >= this.carUrls.length) {
        Laya.timer.clear(this, spinFn)
      }
    }
    Laya.timer.frameLoop(5, this, spinFn)
  }

  //当产生碰撞
  onCollisionEnter(collision) {
    console.log('撞车了')
    this.autoSpin()
  }
}
