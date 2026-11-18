/**
 * mx_ 主要功能：本地数据服务器
 * 1. GET /api/poems —— 读取同目录 db.json，返回 poems 数组（pic / title / content）
 * 2. 静态托管仓库根目录（../），让 poem-cards.html 可以通过 http://localhost:3004/poem-cards.html 直接访问
 * 3. 开启 CORS，允许 file:// 打开的页面也能跨域获取数据
 * 端口：3004
 */
var mx_express = require('express');
var mx_path = require('path');
var mx_fs = require('fs');

var mx_app = mx_express();

/* mx_ 主要功能：CORS 中间件，允许任意来源跨域访问接口 */
mx_app.use(function (mx_req, mx_res, mx_next) {
  mx_res.setHeader('Access-Control-Allow-Origin', '*');
  mx_next();
});

/* mx_ 主要功能：读取 db.json 并返回 poems 数组的接口 */
mx_app.get('/api/poems', function (mx_req, mx_res) {
  var mx_file = mx_path.join(__dirname, 'db.json');
  mx_fs.readFile(mx_file, 'utf8', function (mx_err, mx_data) {
    if (mx_err) {
      mx_res.status(500).json({ error: '读取 db.json 失败：' + mx_err.message });
      return;
    }
    try {
      var mx_json = JSON.parse(mx_data);
      mx_res.json(mx_json.poems || []);
    } catch (mx_e) {
      mx_res.status(500).json({ error: 'db.json 格式错误：' + mx_e.message });
    }
  });
});

/* mx_ 主要功能：返回 authors 作者数组的第二个接口（课堂任务二） */
mx_app.get('/api/authors', function (mx_req, mx_res) {
  var mx_file = mx_path.join(__dirname, 'db.json');
  mx_fs.readFile(mx_file, 'utf8', function (mx_err, mx_data) {
    if (mx_err) {
      mx_res.status(500).json({ error: '读取 db.json 失败：' + mx_err.message });
      return;
    }
    try {
      var mx_json = JSON.parse(mx_data);
      mx_res.json(mx_json.authors || []);
    } catch (mx_e) {
      mx_res.status(500).json({ error: 'db.json 格式错误：' + mx_e.message });
    }
  });
});

/* mx_ 主要功能：静态托管仓库根目录（db 的上一级），页面可直接访问 */
mx_app.use(mx_express.static(mx_path.join(__dirname, '..')));

/* mx_ 主要功能：启动服务器并监听 3004 端口 */
mx_app.listen(3004, function () {
  console.log('mx_ 数据服务器已启动：http://localhost:3004');
  console.log('mx_ 诗句接口：    http://localhost:3004/api/poems');
  console.log('mx_ 卡片页面：    http://localhost:3004/poem-cards.html');
});
