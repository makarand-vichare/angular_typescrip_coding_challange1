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
var UsersSection;
(function (UsersSection) {
    var Controllers;
    (function (Controllers) {
        var StarshipTravelController = (function (_super) {
            __extends(StarshipTravelController, _super);
            function StarshipTravelController(_injectorService, modelService, starshipTravelService, planetService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.modelService = modelService;
                _this.starshipTravelService = starshipTravelService;
                _this.planetService = planetService;
                _this.starshipModel = {
                    starships: new Array(),
                    next: '',
                    previous: ''
                };
                _this.onlyNumbers = /^[1-9][0-9]*$/;
                _this.planetDistance = 1000000;
                _this.showModal = false;
                //OpenModel = (starship: AdminSection.ViewModels.IStarshipVM) => {
                //    var options: ng.ui.bootstrap.IModalSettings = {
                //        templateUrl: 'modal.html',
                //        controller: Common.Controllers.ModelController + ' as modal',
                //        resolve: {
                //            item: () => starship // <- this will pass the same instance 
                //            // of the item displayed in the table to the modal
                //        }
                //    };
                //    //this.$modal.open(options).result
                //    //    .then(updatedItem => this.CloseModel(updatedItem));
                //}
                _this.OpenStarshipModel = function (starship) {
                    var self = _this;
                    var modalInstance = self.modelService.open({
                        templateUrl: 'starshipModal.html',
                        controller: Common.Controllers.ModelController,
                        bindToController: true,
                        controllerAs: 'popup',
                        resolve: {
                            item: function () { return starship; } // <- this will pass the same instance 
                            // of the item displayed in the table to the modal
                        }
                    });
                    modalInstance.result.then(function (selectedItem) {
                        self.selectedStarship = selectedItem;
                    });
                };
                _this.GetShipsSupplyCount = function () {
                    var self = _this;
                    self.StartProcess();
                    self.starshipTravelService.GetShipsSupplyCount(self.planetDistance)
                        .then(function (response) {
                        self.starshipModel.starships = response.data.results;
                        self.starshipModel.next = response.data.next;
                        self.starshipModel.previous = response.data.previous;
                        self.ProcessInfo.IsSucceed = true;
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                _this.GetByUrl = function (url) {
                    var self = _this;
                    self.StartProcess();
                    self.starshipTravelService.GetByUrl(url, self.planetDistance)
                        .then(function (response) {
                        self.starshipModel.starships = response.data.results;
                        self.starshipModel.next = response.data.next;
                        self.starshipModel.previous = response.data.previous;
                        self.ProcessInfo.IsSucceed = true;
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                return _this;
            }
            return StarshipTravelController;
        }(Common.Controllers.BaseController));
        StarshipTravelController.$inject = ["$injector", "$uibModal", "UsersSection.Services.StarshipTravelService", "AdminSection.Services.PlanetService"];
        Controllers.StarshipTravelController = StarshipTravelController;
        App.ModuleInitiator.GetModule("UsersSection").controller("UsersSection.Controllers.StarshipTravelController", StarshipTravelController);
    })(Controllers = UsersSection.Controllers || (UsersSection.Controllers = {}));
})(UsersSection || (UsersSection = {}));
//# sourceMappingURL=starshiptravelcontroller.js.map