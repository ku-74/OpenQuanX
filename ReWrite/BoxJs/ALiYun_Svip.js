




使用方法：

2、通过boxjs设置svip到期时间及等级
【此步骤可省略，会员到期时间永远定格永久7天后，失效请重开app】
【支持更改云容量显示，默认关闭】
【支持更改图标布局，新版本（4.9.0+）取消该特性，效果不好】
【支持获取视频m3u8临时下载链接，默认关闭】
【视频在线播放清晰度解锁，默认开启】
【支持自定义修改 注册排名】
【支持自定义修改 昵称底下 - 描述文字】
【支持自定义修改 超级会员右边 - 按钮文字】

3、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoALiCloud.js

********************************

[mitm]
hostname = api.aliyundrive.com,member.aliyundrive.com,api.alipan.com,member.alipan.com,auth.alipan.com

[rewrite_local]
https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v1\/users\/apps\/welcome url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/v2\/databox\/get_personal_info url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/vip\/info url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/member\.(aliyundrive|alipan)\.com\/v1\/users\/tools url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1\/users\/me\/vip\/info url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.1\/users\/me\/vip\/info url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v1\/users\/home\/widgets url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v2\/users\/home\/widgets url reject-dict
https://api.aliyundrive.com/apps/v1/users/home/news url reject-200
https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v1\/app\/logos url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v2\/user\/get url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/feature\/list url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/feature\/trial url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/v2\/file\/get_video_preview_play_info url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v2\/batch url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/member\.alipan\.com\/v2\/activity\/sign_in_info url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/member\.aliyundrive\.com\/v2\/activity\/sign_in_list url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.alipan\.com\/business\/v1.0\/users\/coupon\/detail url reject-200
https:\/\/member\.alipan\.com\/v1\/users\/onboard_list url reject-200
https:\/\/member\.alipan\.com\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.alipan\.com\/adrive\/v1\/timeline\/user\/get url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/member\.aliyundrive\.com\/v2\/activity\/sign_in_luckyBottle url reject
https:\/\/api\.alipan\.com\/apps\/v1\/users\/home\/recent url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
https:\/\/api\.alipan\.com\/adrive\/v1\/user\/getUserCapacityInfo url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/alic.js
 ***************/
