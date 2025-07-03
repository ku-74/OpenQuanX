
#  今日热榜vip+广告移除+订阅摘要展示+追踪摘要展示+自定义摘要展示
#  官方会员兑换码：0B4KM


使用方法：
1、使用BoxJS（浏览器里）增加以下脚本订阅。
https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/ReWrite/BoxJs/BosJs_0.js

2、通过boxjs设置vip到期时间及等级
【二此步骤可省略，会员到期时间永远定格明天，失效请重开app】

3、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
  https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoTodayHotList.js
  
********************************

[mitm]
hostname = api2.tophub.app

[rewrite_local]
https:\/\/api2\.tophub\.app\/account\/sync url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/th.js
https:\/\/api2\.tophub\.app\/my\/items url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/th.js
https:\/\/api2\.tophub\.app\/my\/alerts\/items url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/th.js
https:\/\/api2\.tophub\.app\/my\/channels\/.+\/items url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/th.js
https:\/\/api2\.tophub\.app\/explore url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/th.js
https:\/\/api2\.tophub\.app\/remai\/recommend\/taobao url reject-dict
 ***************/
