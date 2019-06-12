## leancloud主机环境变量配置

### GIT_CLONE_USER_NAME 

> git配置用户名

### GIT_CLONE_USER_EMAIL 

> git配置邮箱

### GIT_CLONE_REPOSITORY_HOST 

> git克隆仓库的域名

### GIT_CLONE_REPOSITORY_USERNAME 

> git克隆仓库的用户名

### GIT_CLONE_REPOSITORY_PASSWORD 

> git克隆仓库的密码

### GIT_CLONE_REPOSITORY_PROJECT 

> git克隆仓库的项目名

### GIT_CLONE_REPOSITORY_BRANCH 

> git克隆仓库的分支

### GIT_DEPLOY_USER_NAME 

> git配置部提交户名

### GIT_DEPLOY_USER_EMAIL 

> git配置提交邮箱

### GIT_DEPLOY_REPOSITORY_HOST 

> git提交仓库的域名

### GIT_DEPLOY_REPOSITORY_USERNAME 

> git提交仓库的用户名

### GIT_DEPLOY_REPOSITORY_PASSWORD 

> git提交仓库的密码

### GIT_DEPLOY_REPOSITORY_PROJECT 

> git提交仓库的项目名

### GIT_DEPLOY_REPOSITORY_BRANCH 

> git提交仓库的分支

### PROCESS_DIR 

> 工作目录

### NPM_REPOSITORY 

> npm仓库镜像，不配置的话默认是'https:>registry.npm.taobao.org'

------

# 备注

> 说一下我的博客架构，首先我使用的`Hexo`搭建的博客（如果你不是也没有关系，你可以参考代码，修改编译的逻辑，以后我会增加其他的支持），然后我的博客源码存储在`bitbucket`上，博客编译后存储在`coding`（不要问我为什么，因为快啊）上，启用`pages
`服务发布。所以当我提交代码到`bitbucket
`上的时候，`bitbucket`就会触发我设置的`Webhook`，然后调用`leancloud`主机上的程序完成自动发布同步。

------

# 相关文档

* [Hexo博客搭建](https://hexo.io/docs/)
* [网站托管开发指南](https://leancloud.cn/docs/leanengine_webhosting_guide-node.html)
