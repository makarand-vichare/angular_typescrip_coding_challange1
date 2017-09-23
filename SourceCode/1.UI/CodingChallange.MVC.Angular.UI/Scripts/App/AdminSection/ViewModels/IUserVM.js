var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AdminSection;
(function (AdminSection) {
    var ViewModels;
    (function (ViewModels) {
        var IUserVM = (function (_super) {
            __extends(IUserVM, _super);
            function IUserVM() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return IUserVM;
        }(Common.ViewModels.IBaseVM));
        ViewModels.IUserVM = IUserVM;
    })(ViewModels = AdminSection.ViewModels || (AdminSection.ViewModels = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=IUserVM.js.map