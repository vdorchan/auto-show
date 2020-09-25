(function () {
  'use strict';

  const panoCarConfig = window.__hallSceneConfig.panoCarConfig;
  class SpinCar extends Laya.Script3D {
      constructor() {
          super(...arguments);
          this.spinIdx = 0;
          this.startX = null;
          this.colorIdx = 0;
          this.colorItemList = [];
          this.circleRadius = 40;
          this.hasLoadColorIdx = [0];
          this.colorPickItemPadding = 10;
          this.colorPickItemBorderWidth = 2;
          this.colorItemBorderColor = '#fff';
          this.colorItemActivedBorderColor = '#59b7ff';
      }
      onEnable() {
          console.log(123, this.owner.name);
          if (this.owner.name === 'car') {
              this.panoCars = panoCarConfig[0];
              this.carUrls = this.panoCars[0].list;
          }
          else {
              switch (this.owner.name) {
                  case 'car':
                      this.panoCars = panoCarConfig[0];
                      this.carUrls = this.panoCars[0].list;
                  case 'car2':
                      this.carUrls = panoCarConfig[1];
                      break;
                  case 'car2 (1)':
                      this.carUrls = panoCarConfig[2];
                      break;
                  case 'car2 (2)':
                      this.carUrls = panoCarConfig[3];
                      break;
              }
          }
          this.car = this.owner;
          if (this.car['showColorPick'] && this.panoCars) {
              this.createColorPick();
              this.onColorPick(0);
          }
          Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.handleMouseMove);
          Laya.stage.on(Laya.Event.MOUSE_UP, this, this.handleMouseUp);
          this.setTexture();
      }
      createColorPick() {
          this.colorPick = new Laya.Sprite();
          Laya.stage.addChild(this.colorPick);
          const width = this.panoCars.length * (this.circleRadius * 2 + this.colorPickItemPadding) + this.colorPickItemPadding;
          const height = this.circleRadius * 2 + this.colorPickItemPadding * 2;
          const radius = 20;
          var path = [
              ['moveTo', 0, 0],
              ['lineTo', width, 0],
              ['arcTo', width + radius, 0, width + radius, radius, radius],
              ['lineTo', width + radius, height],
              ['arcTo', width + radius, height + radius, width, height + radius, radius],
              ['lineTo', 0, height + radius],
              ['arcTo', -radius, height + radius, -radius, height, radius],
              ['lineTo', -radius, radius],
              ['arcTo', -radius, 0, 0, 0, radius]
          ];
          this.colorPick.graphics.drawPath(0, -radius / 2, path, { fillStyle: "#292929" });
          this.colorPick
              .size(width, height)
              .pivot(width / 2, 0)
              .pos(Laya.stage.width / 2, Laya.stage.height - height - 100);
          this.createColorPickItem();
      }
      hideColorPick() {
          this.colorPick.visible = false;
      }
      showColorPick() {
          this.colorPick.visible = true;
      }
      createColorPickItem() {
          for (let index = 0; index < this.panoCars.length; index++) {
              const car = this.panoCars[index];
              const sp = new Laya.Sprite();
              const x = this.colorPickItemPadding + index * (this.circleRadius * 2 + this.colorPickItemPadding);
              this.colorItemList.push(sp.graphics.drawCircle(this.circleRadius, this.circleRadius, this.circleRadius, `#${car.color}`, this.colorItemBorderColor, this.colorPickItemBorderWidth));
              sp.pos(x, this.colorPickItemPadding)
                  .size(this.circleRadius * 2, this.circleRadius * 2)
                  .on(Laya.Event.CLICK, this, () => this.onColorPick(index))
                  .on(Laya.Event.ROLL_OVER, this, () => {
                  Laya.Mouse.cursor = 'pointer';
              })
                  .on(Laya.Event.ROLL_OUT, this, () => {
                  Laya.Mouse.cursor = 'default';
              });
              this.colorPick.addChild(sp);
          }
      }
      onColorPick(index) {
          this.colorIdx = index;
          this.colorItemList.forEach((item, idx) => {
              if (idx === index) {
                  item.lineColor = this.colorItemActivedBorderColor;
                  item.lineWidth = this.colorPickItemBorderWidth + 2;
              }
              else {
                  item.lineColor = this.colorItemBorderColor;
                  item.lineWidth = this.colorPickItemBorderWidth;
              }
          });
          this.preloadRes();
      }
      preloadRes() {
          if (this.hasLoadColorIdx.indexOf(this.colorIdx) !== -1) {
              this.setTexture();
          }
          const carUrls = this.panoCars[this.colorIdx].list;
          Laya.loader.create([...carUrls], Laya.Handler.create(this, () => {
              this.car.active;
              this.hasLoadColorIdx.push(this.colorIdx);
              this.carUrls = carUrls;
              this.setTexture();
          }));
      }
      setTexture() {
          console.log('setTexture', this.carUrls[this.spinIdx]);
          const mater = new Laya.BlinnPhongMaterial();
          mater.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
          const texture = Laya.Loader.getRes(this.carUrls[this.spinIdx]);
          mater.albedoTexture = texture;
          this.car.meshRenderer.material = mater;
      }
      spin(reverse = false) {
          console.log(666, this.owner.name, this.carUrls);
          reverse ? this.spinIdx-- : this.spinIdx++;
          if (this.spinIdx < 0) {
              this.spinIdx += this.carUrls.length;
          }
          if (this.spinIdx > this.carUrls.length - 1) {
              this.spinIdx %= this.carUrls.length;
          }
          this.setTexture();
      }
      onMouseDown() {
          console.log('car mousedown');
      }
      handleMouseUp() {
          console.log('car mouseup');
          this.isMouseDown = false;
          this.startX = null;
      }
      handleMouseMove(e) {
          e.stopPropagation();
          if (!this.isMouseDown) {
              return;
          }
          if (typeof this.startX !== 'number') {
              this.startX = Laya.stage.mouseX;
          }
          if (Math.abs(Laya.stage.mouseX - this.startX) > 10) {
              this.spin(Laya.stage.mouseX - this.startX < 0);
              this.startX = Laya.stage.mouseX;
          }
      }
      autoSpin() {
          let count = 0;
          const spinFn = () => {
              this.spin();
              count++;
              if (count >= this.carUrls.length) {
                  Laya.timer.clear(this, spinFn);
              }
          };
          Laya.timer.frameLoop(5, this, spinFn);
      }
      onCollisionEnter(collision) {
          console.log('撞车了');
          this.autoSpin();
      }
      onUpdate() {
      }
  }

  class CameraRotate extends Laya.Script3D {
      constructor() {
          super();
          this._tempVector3 = new Laya.Vector3();
          this.yawPitchRoll = new Laya.Vector3();
          this.resultRotation = new Laya.Quaternion();
          this.tempRotationZ = new Laya.Quaternion();
          this.tempRotationX = new Laya.Quaternion();
          this.tempRotationY = new Laya.Quaternion();
          this.rotaionSpeed = 0.00006;
      }
      _updateRotation() {
          if (Math.abs(this.yawPitchRoll.y) < 1.50) {
              Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ);
              this.tempRotationZ.cloneTo(this.camera.transform.localRotation);
              this.camera.transform.localRotation = this.camera.transform.localRotation;
          }
      }
      onAwake() {
          this.camera = this.owner;
          Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
          Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
      }
      startUpdate() {
          var elapsedTime = Laya.timer.delta;
          if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
              var scene = this.owner.scene;
              var offsetX = Laya.stage.mouseX - this.lastMouseX;
              var offsetY = Laya.stage.mouseY - this.lastMouseY;
              var yprElem = this.yawPitchRoll;
              yprElem.x -= offsetX * this.rotaionSpeed * elapsedTime;
              yprElem.y -= offsetY * this.rotaionSpeed * elapsedTime;
              this._updateRotation();
          }
          this.lastMouseX = Laya.stage.mouseX;
          this.lastMouseY = Laya.stage.mouseY;
      }
      onDestroy() {
          Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown);
          Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
      }
      mouseDown(e) {
          if (this._touchId) {
              this.isMouseDown = false;
              this._touchId = null;
              return;
          }
          this._touchId = e.touchId;
          this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll);
          this.lastMouseX = Laya.stage.mouseX;
          this.lastMouseY = Laya.stage.mouseY;
          this.isMouseDown = true;
      }
      mouseUp(e) {
          if (this._touchId === e.touchId) {
              this.isMouseDown = false;
              this._touchId = null;
          }
      }
      mouseOut(e) {
          this.isMouseDown = false;
          this._touchId = null;
      }
  }

  const panoCarConfig$1 = window.__hallSceneConfig.panoCarConfig;
  class GameUI extends Laya.Scene {
      constructor() {
          super();
          this.angle = -1;
          this.radians = -1;
          this.speed = 0.04;
          this.__hallSceneConfig = window.__hallSceneConfig;
          this.point = new Laya.Vector2();
          this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
          this._outHitResult = new Laya.HitResult();
          console.log(this);
          this.loadScene('Hall.scene');
          Laya.MouseManager.multiTouchEnabled = false;
          Config.isAntialias = true;
          Laya3D.init(0, 0);
          Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
          Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
          this.$loading = document.getElementById('J-loading');
          this.$percentBar = this.$loading.querySelector('.percent-bar');
          this.coupons = [];
          for (let index = 0; index < 4; index++) {
              const coupon = this.scene.getChildByName(`coupon${index}`);
              this.coupons.push({
                  coupon,
                  couponButton: coupon.getChildByName('button'),
                  couponButtonDisabled: coupon.getChildByName('buttonDsiabled'),
              });
          }
          this.bannerImages = this.__hallSceneConfig.bannerImages;
          this.preloadRes();
          Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
          console.log('stage', Laya.stage);
      }
      onEnable() {
      }
      hide(el) {
          el.classList.add('hide');
          setTimeout(() => {
              el.style.display = 'none';
          }, 1000);
      }
      show(el) {
          el.style.display = 'block';
          el.classList.remove('hide');
      }
      emit(fnName, ...args) {
          const fn = this.__hallSceneConfig[fnName];
          fn && fn.apply(this, args);
      }
      createCoupon() {
          try {
              const couponListConfig = this.__hallSceneConfig.coupon;
              for (let index = 0; index < couponListConfig.length; index++) {
                  const couponConfig = couponListConfig[index];
                  const coupon = this.coupons[index];
                  coupon.coupon.getChildByName('title').text = couponConfig.title;
                  coupon.coupon.getChildByName('car').text = couponConfig.car;
                  this.drawCouponStars(coupon, couponConfig.star);
                  coupon.coupon.on(Laya.Event.CLICK, this, () => {
                      this.emit('onCouponClick', {
                          index,
                          disableCouponButton: this.disableCouponButton.bind(this),
                          enableCouponButton: this.enableCouponButton.bind(this),
                          couponButtonIsDisabled: coupon.couponButtonDisabled.visible
                      });
                  });
                  this.emit('init', {
                      disableCouponButton: this.disableCouponButton.bind(this),
                      enableCouponButton: this.enableCouponButton.bind(this),
                  });
              }
          }
          catch (error) { }
      }
      drawCouponStars(coupon, num = 1) {
          coupon.couponStars = coupon.coupon.getChildByName('stars');
          for (let i = 0; i < 5; i++) {
              const star = new Laya.Image(`res/images/star${i + 1 <= num ? 2 : 1}.png`);
              star.pos(i * 20, 0);
              coupon.couponStars.addChild(star);
          }
      }
      preloadRes() {
          var resource = [
              'res/LayaScene_neiguan_0924_1/Conventional/3.ls',
              ...Object.values(this.bannerImages),
              ...panoCarConfig$1[0][0].list,
              ...panoCarConfig$1.slice(1).flat(),
          ];
          Laya.loader.create(resource, Laya.Handler.create(this, this.onPreLoadFinish), Laya.Handler.create(this, this.onProgress));
      }
      onProgress(p) {
          this.emit('onProgress', p);
      }
      setBannerImg() {
          for (const nodeName in this.bannerImages) {
              const banner = this._scene.getChildByName(nodeName);
              const img = this.bannerImages[nodeName];
              if (banner) {
                  const mater = new Laya.BlinnPhongMaterial();
                  const texture = Laya.Loader.getRes(img);
                  mater.albedoTexture = texture;
                  banner.meshRenderer.material = mater;
              }
          }
      }
      onPreLoadFinish() {
          this.emit('onComplete');
          this._scene = Laya.stage.addChild(Laya.Loader.getRes('res/LayaScene_neiguan_0924_1/Conventional/3.ls'));
          Laya.stage.setChildIndex(this._scene, 0);
          this.cars = [
              this._scene.getChildByName('car'),
              this._scene.getChildByName('car2'),
              this._scene.getChildByName('car2 (1)'),
              this._scene.getChildByName('car2 (2)'),
          ];
          Object.assign(this.cars[0], { showColorPick: true });
          this.spinCars = [];
          for (let index = 0; index < this.cars.length; index++) {
              const car = this.cars[index];
              this.spinCars.push(car.addComponent(SpinCar));
          }
          this.setBannerImg();
          this.createCamera();
          this.createCharacter();
          this.createCoupon();
          Laya.timer.frameLoop(1, this, () => {
              for (let index = 0; index < this.cars.length; index++) {
                  const car = this.cars[index];
                  car.transform.lookAt(this.camera.transform.position, new Laya.Vector3(0, 1, 0));
              }
          });
      }
      disableCouponButton(index) {
          const { couponButton, couponButtonDisabled } = this.coupons[index];
          couponButton.visible = false;
          couponButtonDisabled.visible = true;
      }
      enableCouponButton(index) {
          const { couponButton, couponButtonDisabled } = this.coupons[index];
          couponButtonDisabled.visible = false;
          couponButton.visible = true;
      }
      createCamera() {
          this.camera = this._scene.getChildByName('Main Camera');
          this.cameraRotate = this.camera.addComponent(CameraRotate);
      }
      createCharacter() {
          this.character = this.camera.addComponent(Laya.CharacterController);
          let sphereShape = new Laya.CapsuleColliderShape(1.0, 3.4);
          sphereShape.localOffset = new Laya.Vector3(0, 1, 0);
          this.character.colliderShape = sphereShape;
          Laya.timer.frameLoop(1, this, this.moveCharacter);
      }
      moveCharacter() {
          if (this.controller && this.controller.angle !== -1) {
              const translateX = Math.sin(this.controller.radians) * this.speed;
              const translateZ = Math.cos(this.controller.radians) * this.speed;
              this.camera.transform.translate(new Laya.Vector3(translateX, 0, translateZ));
          }
          else {
              if (this.spinCars.every(s => !s.isMouseDown)) {
                  this.cameraRotate.startUpdate();
              }
          }
          for (let index = 0; index < this.cars.length; index++) {
              const car = this.cars[index];
              const outPos = new Laya.Vector4();
              const { coupon } = this.coupons[index];
              this.camera.viewport.project(car.transform.position, this.camera.projectionViewMatrix, outPos);
              if (outPos.z < 1) {
                  const posX = outPos.x - coupon.getBounds().width / 2;
                  const posY = outPos.y - coupon.getBounds().height * (index === 0 ? 3 : 2.5);
                  if (index !== 0) {
                      this.spinCars[0].hideColorPick();
                  }
                  else {
                      this.spinCars[0].showColorPick();
                  }
                  coupon.pos(posX, posY);
                  coupon.scaleX = coupon.scaleY = (outPos.z + 2) / Laya.Browser.window.devicePixelRatio;
              }
              else {
                  coupon.pos(-10000, -10000);
              }
          }
      }
      createLight() {
          var directionLight = new Laya.DirectionLight();
          this._scene.addChild(directionLight);
          directionLight.color = new Laya.Vector3(1, 1, 1);
          directionLight.transform.rotate(new Laya.Vector3(-3.14 / 3, 0, 0));
      }
      onMouseDown() {
          try {
              this.point.x = Laya.MouseManager.instance.mouseX;
              this.point.y = Laya.MouseManager.instance.mouseY;
              this.camera.viewportPointToRay(this.point, this._ray);
              this._scene.physicsSimulation.rayCast(this._ray, this._outHitResult);
              if (this._outHitResult.succeeded) {
                  const colliderName = this._outHitResult.collider.owner.name;
                  console.log({ colliderName });
                  this.spinCars.forEach(spinCar => {
                      if (spinCar.car.name === colliderName) {
                          spinCar.isMouseDown = true;
                          spinCar.startX = Laya.stage.mouseX;
                      }
                  });
                  if (colliderName === 'pengzhuang') {
                      this.emit('onTurntableClick');
                  }
              }
          }
          catch (error) {
              console.log(error);
          }
      }
  }

  class GameConfig {
      constructor() {
      }
      static init() {
          var reg = Laya.ClassUtils.regClass;
          reg("script/GameUI.ts", GameUI);
      }
  }
  GameConfig.width = 1136;
  GameConfig.height = 640;
  GameConfig.scaleMode = "full";
  GameConfig.screenMode = "horizontal";
  GameConfig.alignV = "top";
  GameConfig.alignH = "left";
  GameConfig.startScene = "Hall.scene";
  GameConfig.sceneRoot = "";
  GameConfig.debug = false;
  GameConfig.stat = false;
  GameConfig.physicsDebug = false;
  GameConfig.exportSceneToJson = true;
  GameConfig.init();

  class Main {
      constructor() {
          if (window["Laya3D"])
              Laya3D.init(GameConfig.width, GameConfig.height);
          else
              Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
          Laya["Physics"] && Laya["Physics"].enable();
          Laya["DebugPanel"] && Laya["DebugPanel"].enable();
          Laya.stage.scaleMode = GameConfig.scaleMode;
          Laya.stage.screenMode = GameConfig.screenMode;
          Laya.stage.alignV = GameConfig.alignV;
          Laya.stage.alignH = GameConfig.alignH;
          Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
          if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
              Laya.enableDebugPanel();
          if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
              Laya["PhysicsDebugDraw"].enable();
          if (GameConfig.stat)
              Laya.Stat.show();
          Laya.alertGlobalError(true);
          Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
      }
      onVersionLoaded() {
          Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
      }
      onConfigLoaded() {
          GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
      }
  }
  new Main();

}());
