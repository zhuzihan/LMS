```
/**
 * _ooOoo_
 * o8888888o
 * 88" . "88
 * (| -_- |)
 * O\ = /O
 * ___/`---'\____
 * . ' \\| |// `.
 * / \\||| : |||// \
 * / _||||| -:- |||||- \
 * | | \\\ - /// | |
 * | \_| ''\---/'' | |
 * \ .-\__ `-` ___/-. /
 * ___`. .' /--.--\ `. . __
 * ."" '< `.___\_<|>_/___.' >'"".
 * | | : `- \`.;`\ _ /`;.`/ - ` : | |
 * \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 * `=---='
 * .............................................
 * 佛曰：bug泛滥，我已瘫痪！
 */
 ```
 
# LMS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## 自动部署

### 部署环境
* 系统：Ubuntu 16.04.1  
* Node版本：NodeJS 8+   
* NPM版本：NPM 5.6.0  
* 服务器：NGINX

### 自动部署文件
在bin文件夹下有三个文件分别是：
* build.sh （正常部署，当Git文件发生改变时会自动重新编译并且部署，否则不会执行任何操作）
* build.force.sh  （强制部署，无论Git上的文件是否发生改变，都会编译并部署）
* build.debug.sh  （调试部署，去掉`--prod`优化参数部署，便于调试）

### 部署步骤
```
git clone https://gitlab.com/Hansien/LMS.git
cd LMS/
sudo sh build.sh
```

###

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
