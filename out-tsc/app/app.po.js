"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPage = void 0;
var protractor_1 = require("protractor");
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function (destination) {
        return protractor_1.browser.get(destination);
    };
    AppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.deepCss('app-root ion-content')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
//# sourceMappingURL=app.po.js.map