
### �ο�����
* [react����](http://www.ruanyifeng.com/blog/2015/03/react.html)
* [react��������](http://www.codeceo.com/article/reactjs-life-circle-event.html)
###�������ܲ���

#### 1
npm install email 
	���email��װ��װ��node_modules�У�
	���ǲ����޸�package.json��
	֮������npm install Ҳ�����Զ���װemail��
npm install email --save  
	��email��װ��node_modules�е�ͬʱҲ����package.json��dependencies���������email��
	֮������npm install����ʱ�����Զ���װemail��node_modulesĿ¼��
	֮������npm install --production����ע��NODE_ENV����ֵΪproductionʱ�����Զ���װmsbuild��node_modulesĿ¼��
npm install email --save-dev
	���email����װ��node_modulesĿ¼��
	����package.json��devDependencies���������email
	֮������npm install����ʱ�����Զ���װemail��node_modulesĿ¼��
	֮������npm install --production����ע��NODE_ENV����ֵΪproductionʱ�������Զ���װemail��node_modulesĿ¼��

	
#### 2Ŀ¼�ṹ
 |__app
 | 	 |___components(�������)
 |   |    |___ ItesAnalytics.jsx(����������߼��Լ�����)
 |   |    |___ ItesAnalytics.less(�����������ʽ)
 |   |___containers(���)
 |   |___static()
 |   |___util()
 |   |___index.jsx(����ļ�)|     
 |   |___index.tmpl.html(ģ���ļ�)
 |   
 |  
 |__build(����ļ�)
 |__docs(д�ĵ�λ��)
 |__node_modules(node��modules)
 |__ItesAnalytics(��������,��Ҫ�Լ�����)
     |___components(����ģ�����)
     |    |___ ItesAnalytics.jsx(����������߼��Լ�����)
     |    |___ ItesAnalytics.css(�����������ʽ)
     |
     |___routes(���Ҫ������·�ɵĻ���Ҫ���routes�ļ���)
     |   |___ XXXX
     |        |___ components
     |        |___ routes
     |        |___ index.js
     |
     |___ index.js(·������ļ�,����pathΪ·�ɵ�·��,getChildRoutes()�����������·��,getComponent()���������ù���ģ������)
     








�������js css
npm install babel-plugin-import --save-dev