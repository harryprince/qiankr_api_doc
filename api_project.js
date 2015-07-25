define({  "name": "Qiankr Api Docs for Backend",  "version": "0.0.3",  "description": "Qiankr Api Docs for Backend Based on Tornado Restful-API Design and Apidoc",  "title": "千刻开发者文档",  "url": "http://api.qiankr.com/",  "sampleUrl": "http://api.qiankr.com/",  "header": {    "title": "开发者须知",    "content": "<!-- # Qiankr API Docs -->\n<!-- This docs is for font-end developer to build font-end service for qiankr. -->\n<p><img src=\"https://raw.githubusercontent.com/harryprince/qiankrdocs/master/docs/img/qiankr_logo.jpeg\" alt=\"qiankr-logo\"></p>\n<h1>开发者声明</h1>\n<p>本文档为北京千刻科技维护，仅供开发者帮助开发千刻Web、App服务，非法用途者将追究相应责任。</p>\n<hr>\n<h1>千刻开发者API文档结构</h1>\n<p>千刻开发者API文档包括5个模块</p>\n<ol>\n<li>用户验证模块</li>\n<li>推荐系统模块</li>\n<li>详情查看模块</li>\n<li>内容编辑模块</li>\n<li>社交消息模块</li>\n</ol>\n<p>其中2,3,4,5模块的功能需要用户登陆后查看，非注册用户只允许查看首页。</p>\n<hr>\n<h1>图片操作逻辑</h1>\n<h2>图片上传</h2>\n<ol>\n<li>前端--&gt;后端；访问接口/api/upload_token，提交若干参数（需登录）, 后端返回 token+img_version 作为图片地址</li>\n<li>前端--&gt;七牛；前端根据七牛的上传规则，上传相应图片。</li>\n<li>前端--&gt;后端；前端将上传图片的相关信息写入后端数据库（POST到 /api/user 或者 /api/album 或者 /api/event）</li>\n</ol>\n<h3>1. 用户  /api/user</h3>\n<p>主体：用户\n客体：用户资料\n行为：上传头像、背景图 image_id</p>\n<h3>2. 专辑  /api/album</h3>\n<p>主体： 用户\n客体： 专辑\n行为：上传若干照片 image_id</p>\n<h3>3. 任务  /api/event</h3>\n<p>主体：用户\n客体：任务\n行为：上传一张图片 image_id</p>\n<h2>图片下载</h2>\n<ol>\n<li>前端--&gt;后端; 访问数据接口获取图片地址</li>\n<li>前端--&gt;七牛；前端根据七牛的下载策略，下载私有仓库中的图片</li>\n</ol>\n<h2>图片命名规则</h2>\n<p>比如：image_id = fdbaf9d61f8148c38e62104fc9f1adda_3dfa2aab60fe433683ad564b47338b4c_img_version_1</p>\n<p>image_id 三部分构成: user_id(主体id)+entity_id(客体id)+img_version_数字(图片版本控制)</p>\n<p>图片url: http://qiankr.qiniudn.com/fdbaf9d61f8148c38e62104fc9f1adda_3dfa2aab60fe433683ad564b47338b4c_img_version_1</p>\n<hr>\n<h1>专辑创建逻辑</h1>\n<ol>\n<li>用户点击创建专辑，前端访问api/create/album初始化一个空专辑</li>\n<li>用户选取图片，前端访问api/upload_token 获取图片的上传token</li>\n<li>用户进入专辑专辑编辑页面，前端访问api/edit/album 确认提交编辑专辑细节，写入数据库</li>\n</ol>\n<hr>\n<h1>用户注册登陆操作逻辑</h1>\n<h2>1. 手机注册</h2>\n<ol>\n<li>用户需要正确填写符合格式的手机号，前端需要验证 符合手机号格式。</li>\n<li>用户点击发送验证码，调用短信验证api，若手机号已经注册将返回已注册错误。</li>\n<li>用户填写账号密码、验证码后提交注册。</li>\n<li>用户首次注册后可以之间调用登陆api，完成自动登陆。</li>\n<li>2.0版本暂无用户引导页设计。</li>\n</ol>\n<h2>2. 手机登陆</h2>\n<ol>\n<li>输入手机号码、密码</li>\n<li>点击登陆，若未注册则返回未注册错误，账号密码不一致返回不一致错误，否则成功登陆</li>\n<li>登陆成功根据user_id,生成登陆cookie</li>\n</ol>\n<h2>3. 微信Web登陆</h2>\n<ol>\n<li>根据前端参数判断用户是否已经存在</li>\n<li>用户已经存在，根据wechat_uid直接生成登陆cookie</li>\n<li>用户未存在，创建用户，并生成登陆cookie</li>\n</ol>\n<h2>4. 微博Web登陆</h2>\n<p>与微信登陆类似</p>\n<h2>4. 微信App登陆</h2>\n<p>同上</p>\n<h2>5. 微博App登陆</h2>\n<p>同上</p>\n<h2>6. 密码忘记重置</h2>\n<p>与手机注册类似。</p>\n"  },  "footer": {    "title": "关于我们",    "content": "<h1>关于我们.</h1>\n<p>对于千刻开发者API文档如有疑问，请咨询：\nE-mail: junhui@qiankr.com\n我们将尽快解决您的疑问,期待您的开发过程愉快而顺利。</p>\n"  },  "template": {    "withCompare": true,    "withGenerator": true  },  "apidoc": "0.2.0",  "generator": {    "name": "apidoc",    "time": "2015-07-25T09:38:37.506Z",    "url": "http://apidocjs.com",    "version": "0.13.1"  }});