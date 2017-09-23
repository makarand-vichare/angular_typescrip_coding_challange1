/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="basecontroller.ts" />

describe("BaseController", () => {
    var controller: Common.Controllers.BaseController;
    var injectorService: ng.auto.IInjectorService;

    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common",[]);
    });

    beforeEach(inject(function (_injectorService: ng.auto.IInjectorService) {
        injectorService = _injectorService;
    }));

    it("should create controller", () => {
        controller = new Common.Controllers.BaseController(injectorService);
        expect(controller).not.toBeNull(); 
    });
    
});