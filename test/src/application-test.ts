import chitu = require('chitu');

var app = new chitu.Application();

QUnit.test("Application.parseUrl 路径、名称、参数测试", (assert) => {
    assert.notEqual(app.config, null);

    let routeData = app.parseUrl('#home/index');

    console.log(routeData.actionPath);
    console.log(routeData.viewPath);
    console.log(routeData.pageName);

    let actionPath = 'modules/home/index';
    let viewPath = 'modules/home/index.html';
    let pageName = 'home.index';

    assert.equal(routeData.actionPath, actionPath);
    assert.equal(routeData.viewPath, viewPath);
    assert.equal(routeData.pageName, pageName);

    routeData = app.parseUrl('#user/security/setting');
    actionPath = 'modules/user/security/setting';
    viewPath = 'modules/user/security/setting.html';
    pageName = 'user.security.setting';

    assert.equal(routeData.actionPath, actionPath);
    assert.equal(routeData.viewPath, viewPath);
    assert.equal(routeData.pageName, pageName);

    routeData = app.parseUrl('#user/security/setting?');
    assert.equal(routeData.actionPath, actionPath);
    assert.equal(routeData.viewPath, viewPath);
    assert.equal(routeData.pageName, pageName);

    routeData = app.parseUrl('#user/security/setting?name=maishu');
    assert.equal(routeData.actionPath, actionPath);
    assert.equal(routeData.viewPath, viewPath);
    assert.equal(routeData.pageName, pageName);
    assert.equal(routeData.values.name, 'maishu');
});

QUnit.asyncTest('Application.showPage 显示页面', (assert) => {
    app.showPage('#user/security/setting?name=maishu').done(page => {
        var element = document.getElementById('user.security.setting');
        assert.notEqual(element, null, "断言页面元素");
        page.load.add((sender, args) => {
            assert.equal(args.name, "maishu", "load 事件获取参数");
            QUnit.start();
        });

    });
});

QUnit.asyncTest('Application.showPage 显示无视图页面', (assert) => {

    let parseUrl = app.parseUrl;
    app.parseUrl = (url: string): chitu.RouteData => {
        var result = <chitu.RouteData>parseUrl.apply(app, [url]);
        if (result.pageName == 'user.index') {
            result.viewPath = null;
        }
        return result;
    };

    app.showPage('#user/index').done(() => {
        let page = app.getPage('user.index');

        assert.notEqual(page, null);
        QUnit.start();
    });
});

QUnit.asyncTest('Application.pageCreated 事件', (assert) => {
    let app = new chitu.Application();
    app.pageCreated.add((s, p) => {
        assert.equal(p.name, 'home.index');
        QUnit.start();
    });
    app.showPage('#home/index');
});
QUnit.asyncTest('Page 关闭事件', (assert) => {
    var app = new chitu.Application();
    app.showPage('#home/index').done((page) => {
        let closing_called = false;
        let closed_called = false;
        page.closing.add(() => {
            closing_called = true;
        });
        page.closed.add(() => {
            closed_called = true;
        });

        page.container.close(chitu.SwipeDirection.None);
        setTimeout(() => {
            assert.equal(closing_called, true, 'closing 事件已调用');
            assert.equal(closed_called, true, 'closed 事件已调用');
            QUnit.start();
        }, 100);
    });

});

