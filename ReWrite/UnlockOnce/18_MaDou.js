# 重写地址：https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/ReWrite/UnlockOnce/18_MaDou.js



# 麻豆网址：https://d1skbu98kuldnf.cloudfront.net/


[Script]
 # 会员
 http-response https://(d1skbu98kuldnf|dnt92ffcqr0xu).cloudfront.net/api/app/user/info script-path=https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/Source/18_MaDou.js, requires-body=true, timeout=60, tag=会员
 # 视频
 http-response https://(d1skbu98kuldnf|dnt92ffcqr0xu).cloudfront.net/api/app/media/play script-path=https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/Source/18_MaDou.js, requires-body=true, timeout=60, tag=视频
 # 广告
 http-response https://(d1skbu98kuldnf|dnt92ffcqr0xu).cloudfront.net/(api/app/ping/config|api/app/media/v5/home) script-path=https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/Source/18_MaDou.js, requires-body=true, timeout=60, tag=广告


 [MITM]
 hostname = *.cloudfront.net
