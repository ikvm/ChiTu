## 简介
采用TypeScript编写的轻量级单页面类库，帮助开发人员编写易维护的大规模项目。采用面向对象，事件驱动的编程模式。

它的关注点在于页面的加载，切换，以及页面间数据的交互。

## 设计理念
* 简单易用

作者在开发这个 ChiTu 的时候，简单是他所坚持的原则之一。这里说的简单并非简陋，而是功能性的单一，它只专注于页面的加载。

* 易于扩展

ChiTu 框架采用面向对象，事件驱件的编程模式，各个模块间解藕合理，整个类库很容易进行扩展。

## 项目生成
本项目是使用 Grunt 来生成项目，所以需要安装 Grunt 。
* 下载源码
* 安装 Grunt
* 运行 npm install 命令，安装所需要的 grunt 插件
* 运行 grunt 命令生成项目

## 对比其它框架
### Angular

选择 ChiTu 而不选择 Angular，有下面几个原因：

* 在 API 设计上，ChiTu 比 Angular 简单得多，因为 ChiTu 更多是专注于页面的加载，因此你可以快速掌握并投入开发。
 
* 在架构设计上，ChuTu 采用的是面向对象，事件驱动的模式，因此，更容易开发出高度可重用、维护的代码，更适合于应用在大型项目中。

* ChiTu 是一个更加灵活开放的解决方案，它允许你采用你喜欢的组件来进行开发。而不是必须采用为 Angular 编写的组件。比如说：数据绑定你可以使用 knockoutjs，也可以使用 vue。路由你可以采用 crossroads ，也可以采用其它的。

* ChiTu 是基于 TypeScript 开发，从开发的开始，就考虑了要使强类型，来尽可能地让发人员避免一些不必要的错语。

## 文档
https://github.com/ansiboy/ChiTu/wiki 


