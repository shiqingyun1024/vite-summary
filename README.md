# vite-summary
vite相关的总结

### 什么是打包？
```
使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。
```
### 常用的前端打包构建工具
- webpack
- rollup
- parcel
- gulp

### 它们存在哪些问题？
```
1、缓慢的服务启动
当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。
什么叫冷启动，什么叫热启动
在APP中：
　当用户启动应用程序时，后台没有该应用程序的进程，这时系统会重新给应用程序分配一个进程，这种方法就叫冷启动。
　当用户启动应用程序时，后台已经有了该程序的进程（通过，退出，home键退出让应用程序在后台继续执行）当再次点开APP马上能够恢复到上次使用的状态，不需要再回到手机的首页打开应用程序，这个方式就叫热启动。

冷启动：冷启动其实就是电脑启动的一种方式，当电脑切断电源，在关机状态下按下POWER启动计算机。
热启动：在计算机已经开启的状态下，通过菜单，任务管理器，快捷键或键盘重新引导操作。
在APP中：
　当用户启动应用程序时，后台没有该应用程序的进程，这时系统会重新给应用程序分配一个进程，这种方法就叫冷启动。
　当用户启动应用程序时，后台已经有了该程序的进程（通过，退出，home键退出让应用程序在后台继续执行）当再次点开APP马上能够恢复到上次使用的状态，不需要再回到手机的首页打开应用程序，这个方式就叫热启动。
共同点：
　无论是冷启动还是热启动，都要重新上电，检测硬件，将RAM区清零，即所有变量都初始化为0。

2、缓慢的更新
基于打包器启动时，重建整个包的效率很低。原因显而易见：因为这样更新速度会随着应用体积增长而直线下降。

3、传统打包器的流程
Bundle based dev server 流程如下：

                    module

          route     module

entry --> route --> module --> Bundle   -->     Server ready
(入口)     (页面)    (组件)      (打包成单一的文件)  (服务器加载)
          route     module

                    module

4、ESM打包器的流程
Native ESM based dev server  流程如下：

                                     module

                           route     module
        (HTTP request)
Server ready --> entry --> route --> module 
(服务器加载)       (入口) |   (页面)    (组件)
                        |   route    module
            (Dynamic import route 动态加载页面或者组件)
                                     module

上面的流程说白了就是按需加载的流程    

5、vite的优势
在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，
Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活[1]（大多数时候只是模块本身），
使得无论应用大小如何，HMR 始终能保持快速更新。

Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：
源码模块的请求会根据 304 Not Modified 进行协商缓存，
而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，
因此一旦被缓存它们将不需要再次请求。

```
