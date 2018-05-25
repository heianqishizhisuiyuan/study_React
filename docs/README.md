
### 参考资料
* [react基础](http://www.ruanyifeng.com/blog/2015/03/react.html)
* [react生命周期](http://www.codeceo.com/article/reactjs-life-circle-event.html)
###开发功能步骤

#### 1
npm install email 
	会把email安装包装到node_modules中，
	但是不会修改package.json。
	之后运行npm install 也不会自动安装email。
npm install email --save  
	会email安装到node_modules中的同时也会在package.json的dependencies属性下添加email。
	之后运行npm install命令时，会自动安装email到node_modules目录中
	之后运行npm install --production或者注明NODE_ENV变量值为production时，会自动安装msbuild到node_modules目录中
npm install email --save-dev
	会把email包安装到node_modules目录中
	会在package.json的devDependencies属性下添加email
	之后运行npm install命令时，会自动安装email到node_modules目录中
	之后运行npm install --production或者注明NODE_ENV变量值为production时，不会自动安装email到node_modules目录中

	
#### 2目录结构
 |__app
 | 	 |___components(共用组件)
 |   |    |___ ItesAnalytics.jsx(共用组件的逻辑以及布局)
 |   |    |___ ItesAnalytics.less(共用组件的样式)
 |   |___containers(组件)
 |   |___static()
 |   |___util()
 |   |___index.jsx(入口文件)|     
 |   |___index.tmpl.html(模板文件)
 |   
 |  
 |__build(打包文件)
 |__docs(写文档位置)
 |__node_modules(node的modules)
 |__ItesAnalytics(功能名称,需要自己定义)
     |___components(功能模块组件)
     |    |___ ItesAnalytics.jsx(功能组件的逻辑以及布局)
     |    |___ ItesAnalytics.css(功能组件的样式)
     |
     |___routes(如果要是有子路由的话需要添加routes文件夹)
     |   |___ XXXX
     |        |___ components
     |        |___ routes
     |        |___ index.js
     |
     |___ index.js(路由入口文件,其中path为路由的路径,getChildRoutes()方法中添加子路由,getComponent()方法中设置功能模块的组件)
     








按需加载js css
npm install babel-plugin-import --save-dev