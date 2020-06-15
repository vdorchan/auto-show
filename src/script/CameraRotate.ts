import Controller from './Controller'

export default class CameraRotate extends Laya.Script3D {
		
    /** @private */
    protected  _tempVector3:Laya.Vector3 = new Laya.Vector3();
    protected  lastMouseX:number;
    protected  lastMouseY:number;
    protected  yawPitchRoll:Laya.Vector3 = new Laya.Vector3();
    protected  resultRotation:Laya.Quaternion = new Laya.Quaternion();
    protected  tempRotationZ:Laya.Quaternion = new Laya.Quaternion();
    protected  tempRotationX:Laya.Quaternion = new Laya.Quaternion();
    protected  tempRotationY:Laya.Quaternion = new Laya.Quaternion();
    protected  isMouseDown:Boolean;
    protected  rotaionSpeed:number = 0.00006;
    protected  camera:Laya.BaseCamera;
    protected  scene:Laya.Scene3D;

    public controller: Controller

    constructor() {
        super();
    }
    
    /**
     * @private
     */
    protected  _updateRotation():void {
        if (Math.abs(this.yawPitchRoll.y) < 1.50) {
            Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ);
            this.tempRotationZ.cloneTo(this.camera.transform.localRotation);
            this.camera.transform.localRotation = this.camera.transform.localRotation;
        }
    }
    
    /**
     * @inheritDoc
     */
    public  onAwake():void {
        console.log('onAwake', Laya.Event)
        this.camera = this.owner as Laya.Camera;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        //Laya.stage.on(Event.RIGHT_MOUSE_OUT, this, mouseOut);
    }
    
    /**
     * @inheritDoc
     */
    public  startUpdate():void {
        var elapsedTime:number = Laya.timer.delta;
        if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
            var scene:Laya.Scene3D = this.owner.scene;
            
            var offsetX:number = Laya.stage.mouseX - this.lastMouseX;
            var offsetY:number = Laya.stage.mouseY - this.lastMouseY;
            
            var yprElem:Laya.Vector3 = this.yawPitchRoll;
            yprElem.x -= offsetX * this.rotaionSpeed * elapsedTime;
            yprElem.y -= offsetY * this.rotaionSpeed * elapsedTime;
            this._updateRotation();
        }
        this.lastMouseX = Laya.stage.mouseX;
        this.lastMouseY = Laya.stage.mouseY;
    }
    
    /**
     * @inheritDoc
     */
    public  onDestroy():void {
        Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
    }
    
    protected  mouseDown(e:Event):void {
        console.log('mouseDown', Laya.stage)
        this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll);
        
        this.lastMouseX = Laya.stage.mouseX;
        this.lastMouseY = Laya.stage.mouseY;
        this.isMouseDown = true;
    }
    
    protected  mouseUp(e:Event):void {
        this.isMouseDown = false;
    }
    
    protected  mouseOut(e:Event):void {
        this.isMouseDown = false;
    }
}
