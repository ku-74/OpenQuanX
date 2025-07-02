# OpenQuanX



# 资源解析器：
（把链接转换成圈X能用的）

resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js

配置文件--编辑--添加--选择_general--添加以上链接--

# 添加图标包：

仓库：
https://github.com/Orz-3/mini



# BoxJs脚本：
是一款运行在 Surge、Quantumult X、Loon、Shadowrocket、Stash 环境下的脚本！

具体介绍：
https://docs.boxjs.app/awesome/subscriptions

打开网址安装：
https://api.boxjs.app/quanx-install

完成后可以浏览器打开 boxjs.com 查看




# 分流：
将域名之类的弄成一个名单，保存起来，比如 bilibili，
步骤：分流--规则资源--添加--写入路径（这一步就是要看大佬）（打开资源解析器）--命名标签--（这一步不用打开策略偏好）--保存
主页会有新生成的策略组，在这里进行命名-选择节点等设置，，再去打开策略偏好，选择新生成的编辑后的策略组，

分流规则资源 也可以保存到iCloud，需要将GitHub上的.list后缀名改为.snippet才能被圈X读取到， 也可以将多个目标写入同一个文资源件中，
找到目标app，点开找到.list文件下载保存（1.按照上述重命名，或者复制内容 写入 ），或者打开README.md，复制里面的raw链接，

仅让一个网站走固定线路时，选择keyword，例：qq.com

国内外app的分流规则（真大佬）：https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX


# 策略：
对多个节点进行自定义策略（分类）--选择类型--命名策略名--节点名匹配--（策略偏好）--保存
类型：static（手动选择一个节点，一直不变），
available（按照顺序选择一个能用的节点即可，不关心延迟），
round-robin（按照顺序，轮流使用节点），
Desk-hash（均衡负载，相同域名走同一个节点），
Url-latency-benchmark（自动选择最低延迟的节点）

保存之后，主页界面就会有这个策略（策略名称会固定，不能改），长按编辑后可以选择 -可引用-定义用哪些策略，可以手动切换，如果之前已经自定义了（策略偏好），  则会忽略此处的选择，只用（策略偏好），，用处：比如哔哩哔哩，偶尔用香港节点的时候可以手动选择，TikTok，切换美区日区之类的，

Direct 直连不经过圈X转发，重新规则应该可以用，
Proxy 默认规则分流，国外走国外，国内走国内，大致上的基本策略，如果国内网站想走国外，就不能用这个，
Reject 拒绝访问，直接关停链接域名，访问不进去，


