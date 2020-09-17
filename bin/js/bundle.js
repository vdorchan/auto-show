(function () {
  'use strict';

  const panoCars = [{ "BaseColorName": "", "ColorName": "矿石白", "ColorValue": "dee4ef", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700917_1548296055712_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700877_1548296055734_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700640_1548296055681_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700956_1548296061093_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701033_1548296061974_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700983_1548296062986_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700957_1548296064164_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701034_1548296064322_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700934_1548296069000_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700994_1548296070011_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701035_1548296070977_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700931_1548296072239_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700995_1548296077193_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701083_1548296085873_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701096_1548296086173_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701038_1548296086058_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700958_1548296092067_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700936_1548296092961_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701040_1548296093810_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701114_1548296097721_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701049_1548296099760_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700987_1548296101709_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701152_1548296104096_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701050_1548296105772_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700959_1548296108745_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701182_1548296109821_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701087_1548296110744_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701090_1548296115086_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700960_1548296115824_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701184_1548296117810_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700990_1548296122402_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701202_1548296123158_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701185_1548296123533_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700991_1548296125944_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701165_1548296126365_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701195_1548296126493_1200.png" }] }, "Id": 2183, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "巴伦西亚橙", "ColorValue": "DF4E22", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700434_1548295933899_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700446_1548295933985_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699851_1548295934053_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700483_1548295939983_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700134_1548295940923_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700450_1548295942804_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699965_1548295945917_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699917_1548295946933_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699918_1548295949050_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700527_1548295951985_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700490_1548295954190_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700531_1548295957225_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700562_1548295957960_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700573_1548295961079_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700536_1548295962937_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700564_1548295964002_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699969_1548295966929_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700576_1548295966920_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700137_1548295966912_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700138_1548295969347_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700595_1548295969692_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700549_1548295969666_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700517_1548295971341_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700613_1548295976426_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700139_1548295977266_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700583_1548295978150_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700047_1548295982541_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700520_1548295983298_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700642_1548295985274_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700685_1548295988429_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700653_1548295991241_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700048_1548295992308_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700742_1548295993661_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700667_1548295994801_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700654_1548295994840_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700694_1548295996624_1200.png" }] }, "Id": 2179, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "宝石青", "ColorValue": "202020", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701161_1548296123007_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701144_1548296122785_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701051_1548296122973_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129700961_1548296128102_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701242_1548296129086_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701263_1548296130026_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701146_1548296133175_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701205_1548296135149_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701283_1548296136165_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701149_1548296140105_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701206_1548296141189_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701188_1548296142189_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701313_1548296147439_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701209_1548296148258_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701343_1548296149216_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701344_1548296154468_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701338_1548296155255_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701287_1548296156246_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701374_1548296161268_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701315_1548296162184_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701255_1548296163303_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701347_1548296169199_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701412_1548296170434_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701330_1548296171278_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701288_1548296175330_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701375_1548296176263_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701289_1548296178677_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701429_1548296181521_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701377_1548296196394_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701350_1548296197409_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701448_1548296198380_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701351_1548296203413_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701493_1548296204525_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701495_1548296205688_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701219_1548296209610_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701290_1548296210497_1200.png" }] }, "Id": 2180, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "地中海蓝", "ColorValue": "002C62", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700938_1548296107560_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700939_1548296107610_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700988_1548296107622_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701128_1548296113687_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701121_1548296114945_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701183_1548296115900_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700941_1548296119841_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701131_1548296120706_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701194_1548296122227_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701212_1548296123222_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701145_1548296126507_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701223_1548296126580_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701204_1548296126588_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701186_1548296128893_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701225_1548296128989_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701000_1548296129488_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701282_1548296131149_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701187_1548296131368_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701197_1548296132779_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701198_1548296133411_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701253_1548296133935_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701169_1548296136108_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701214_1548296136266_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701284_1548296136945_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701245_1548296138080_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701265_1548296138874_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701148_1548296139155_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701216_1548296141776_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701247_1548296142732_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701312_1548296142801_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701201_1548296143937_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701286_1548296146393_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701301_1548296146816_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701248_1548296147207_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701324_1548296148371_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701334_1548296149158_1200.png" }] }, "Id": 2181, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "开士米银", "ColorValue": "D2CEC8", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701060_1548296085228_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701006_1548296085331_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700984_1548296085354_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701047_1548296091975_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700881_1548296093020_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701010_1548296093745_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701041_1548296096981_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701048_1548296099028_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700937_1548296099901_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701116_1548296104099_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701117_1548296104794_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701162_1548296107859_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701118_1548296110101_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701088_1548296111302_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700989_1548296115137_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700940_1548296115999_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701160_1548296118027_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700998_1548296122595_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701203_1548296123182_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700999_1548296123816_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701252_1548296129267_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701167_1548296130238_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701243_1548296131322_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701213_1548296135537_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701147_1548296136271_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701001_1548296138334_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701215_1548296141611_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701266_1548296143311_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701189_1548296146724_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701171_1548296147504_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701190_1548296150433_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701314_1548296152476_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701345_1548296154596_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701210_1548296156422_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701217_1548296159537_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c2/129701254_1548296160442_1200.png" }] }, "Id": 2182, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "栗铜棕色", "ColorValue": "8A411B", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700590_1548296026020_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700849_1548296026268_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700882_1548296026217_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700701_1548296031594_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700819_1548296034106_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700811_1548296034608_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700932_1548296037988_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700639_1548296040650_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700874_1548296041847_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700982_1548296044730_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700954_1548296047361_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700933_1548296048714_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700821_1548296051721_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700955_1548296052713_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700641_1548296055839_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701032_1548296056694_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700993_1548296056755_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700926_1548296061723_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701043_1548296063806_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700919_1548296064878_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701064_1548296069026_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701005_1548296070671_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701055_1548296071737_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701044_1548296074870_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700935_1548296077032_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700920_1548296077986_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701045_1548296080827_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700880_1548296083995_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700996_1548296084878_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701046_1548296086842_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700985_1548296089924_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701008_1548296092141_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701009_1548296093080_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700986_1548296097097_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701115_1548296099265_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701125_1548296099959_1200.png" }] }, "Id": 2184, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "墨尔本红", "ColorValue": "D20E1C", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700692_1548295990242_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700633_1548295990575_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129699971_1548295990603_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700693_1548295993362_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700049_1548295993219_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700651_1548295993389_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700725_1548295996170_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700635_1548295996619_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700776_1548296000440_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700587_1548296002591_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700766_1548296003590_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700051_1548296005471_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700696_1548296006110_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700656_1548296009763_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700679_1548296010366_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700812_1548296010263_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700657_1548296016780_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700589_1548296017561_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700771_1548296018493_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700637_1548296023578_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700816_1548296024477_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700700_1548296026286_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700591_1548296026340_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700740_1548296027509_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700741_1548296032897_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700661_1548296033867_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700887_1548296034930_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700638_1548296038861_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700953_1548296040860_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700875_1548296042032_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700889_1548296044822_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700968_1548296047397_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700924_1548296047868_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700992_1548296050891_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700891_1548296052951_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129701004_1548296055544_1200.png" }] }, "Id": 2185, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "星光粽", "ColorValue": "40291D", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699967_1548295965811_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700593_1548295965830_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700045_1548295965897_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700550_1548295970503_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699780_1548295971542_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700581_1548295974145_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700566_1548295976678_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700046_1548295977779_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700141_1548295979720_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700624_1548295983854_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700652_1548295985922_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700673_1548295986706_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700649_1548295991902_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700634_1548295992802_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700732_1548295992860_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700585_1548295997281_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700586_1548295997279_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700695_1548295997258_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700676_1548296004241_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700729_1548296005139_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700783_1548296005980_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700636_1548296010372_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700680_1548296010990_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700788_1548296011244_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700731_1548296012114_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700737_1548296016659_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700804_1548296017664_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700738_1548296018491_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700842_1548296022556_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700739_1548296024419_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700872_1548296025454_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700659_1548296028354_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700810_1548296030570_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700885_1548296031381_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700888_1548296035419_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700873_1548296037974_1200.png" }] }, "Id": 2186, "Over": { "Normal": [] } }, { "BaseColorName": "", "ColorName": "旋风棕", "ColorValue": "4A3733", "Hori": { "Normal": [{ "Seq": 1, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700532_1548295948634_1200.png" }, { "Seq": 2, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700514_1548295949005_1200.png" }, { "Seq": 3, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700440_1548295948940_1200.png" }, { "Seq": 4, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699919_1548295954592_1200.png" }, { "Seq": 5, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700491_1548295955593_1200.png" }, { "Seq": 6, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700544_1548295957058_1200.png" }, { "Seq": 7, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699966_1548295960683_1200.png" }, { "Seq": 8, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699920_1548295961620_1200.png" }, { "Seq": 9, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700582_1548295963828_1200.png" }, { "Seq": 10, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700136_1548295966483_1200.png" }, { "Seq": 11, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699968_1548295966666_1200.png" }, { "Seq": 12, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700540_1548295970612_1200.png" }, { "Seq": 13, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699970_1548295972680_1200.png" }, { "Seq": 14, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700597_1548295974089_1200.png" }, { "Seq": 15, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129699921_1548295977779_1200.png" }, { "Seq": 16, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700140_1548295978696_1200.png" }, { "Seq": 17, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c0/129700568_1548295980699_1200.png" }, { "Seq": 18, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700584_1548295984756_1200.png" }, { "Seq": 19, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700662_1548295985922_1200.png" }, { "Seq": 20, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700683_1548295987620_1200.png" }, { "Seq": 21, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700689_1548295991478_1200.png" }, { "Seq": 22, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700674_1548295991511_1200.png" }, { "Seq": 23, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700722_1548295991873_1200.png" }, { "Seq": 24, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700734_1548295996992_1200.png" }, { "Seq": 25, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700764_1548295997031_1200.png" }, { "Seq": 26, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700050_1548295997227_1200.png" }, { "Seq": 27, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700727_1548296002000_1200.png" }, { "Seq": 28, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700735_1548296003533_1200.png" }, { "Seq": 29, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700778_1548296004273_1200.png" }, { "Seq": 30, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700588_1548296009204_1200.png" }, { "Seq": 31, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700736_1548296010476_1200.png" }, { "Seq": 32, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700813_1548296010409_1200.png" }, { "Seq": 33, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700698_1548296015484_1200.png" }, { "Seq": 34, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700770_1548296016756_1200.png" }, { "Seq": 35, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700658_1548296017734_1200.png" }, { "Seq": 36, "Url": "//img.pcauto.com.cn/images/upload/upc/tx/panorama/1901/24/c1/129700699_1548296022596_1200.png" }] }, "Id": 2187, "Over": { "Normal": [] } }];
  var panCarConfig = panoCars.map(config => ({ color: config.ColorValue, list: config.Hori.Normal.map(n => n.Url) }));

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
          this.panoCars = panCarConfig;
          this.carUrls = this.panoCars[0].list;
          this.car = this.owner;
          if (this.car['showColorPick']) {
              this.createColorPick();
              this.onColorPick(0);
          }
          Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.handleMouseMove);
          Laya.stage.on(Laya.Event.MOUSE_UP, this, this.handleMouseUp);
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
          const mater = new Laya.BlinnPhongMaterial();
          mater.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
          const texture = Laya.Loader.getRes(this.carUrls[this.spinIdx]);
          mater.albedoTexture = texture;
          this.car.meshRenderer.material = mater;
      }
      spin(reverse = false) {
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
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-5-510.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-7-647.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-4-160.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-9-923.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-3-54.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-20-205.lm',
              'res/LayaScene_0917/Conventional/Assets/canary_wharf_2k.png',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-21-992.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-18-821.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-2-694.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-6-1.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-8-584.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-11-365.lm',
              'res/LayaScene_0917/Conventional/Assets/lipin-Obj3d66-810003-12-572.lm',
              'res/LayaScene_0917/Conventional/3.ls',
              ...Object.values(this.bannerImages),
              ...panCarConfig[0].list
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
          this._scene = Laya.stage.addChild(Laya.Loader.getRes('res/LayaScene_0917/Conventional/3.ls'));
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
                  const posY = outPos.y - coupon.getBounds().height * 3;
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
