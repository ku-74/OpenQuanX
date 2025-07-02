# 应用名称：1Blocker
# 重写资源路径：https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/ReWrite/UnlockEver/1Blocker.js

[mitm]
hostname = api.revenuecat.com

[rewrite_local]
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/Source/1Blocker.js
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-header https://raw.githubusercontent.com/ku-74/OpenQuanX/refs/heads/main/Source/1Blocker.js
