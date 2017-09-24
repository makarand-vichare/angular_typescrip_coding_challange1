module Common.Controllers {
    export class BaseController {
        protected locationService: ng.ILocationService;
        protected windowService: ng.IWindowService;
        protected logService: ng.ILogService;
        static $inject = ["$injector"];

        constructor(private injectorService: ng.auto.IInjectorService) {
            this.windowService = injectorService.get<ng.IWindowService>("$window");
            this.locationService = injectorService.get<ng.ILocationService>("$location");
            this.logService = injectorService.get<ng.ILogService>("$log");
        }

        ProcessInfo = { Message: "" } as Common.ViewModels.IMessageVM;

        StartProcess() {
            var self = this;
            self.ProcessInfo = {
                Message: "loading..",
                Loading: true,
                IsSucceed: false
            }
        }

        EndProcess(message: string, isSucceed: boolean) {
            var self = this;
            self.ProcessInfo = {
                Message: message,
                Loading: false,
                IsSucceed: isSucceed
            }
        }

        GetQueryStringData = (url: string): string => {
            var self = this;

            var indexQuestionMark = url.indexOf("?");
            if (indexQuestionMark >= 0) {
                return url.substr(indexQuestionMark + 1);
            } else {
                return "";
            }
        }

        GetFragment(url: string): IDictionary<string> {
            var self = this;
            var queryStringData = self.GetQueryStringData(url);
            if (queryStringData.length >= 0) {
                return self.ParseQueryString(queryStringData);
            } else {
                return {};
            }
        }

        ParseQueryString = (queryString: string): IDictionary<string> => {
            var data: IDictionary<string> = {};
            var pairs: Array<string>;
            var pair: string;
            var separatorIndex: number;
            var escapedKey: string;
            var escapedValue: string;
            var key: string;
            var value: string;

            if (queryString === null) {
                return data;
            }

            pairs = queryString.split("&");

            for (var i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                separatorIndex = pair.indexOf("=");

                if (separatorIndex === -1) {
                    escapedKey = pair;
                    escapedValue = null;
                } else {
                    escapedKey = pair.substr(0, separatorIndex);
                    escapedValue = pair.substr(separatorIndex + 1);
                }

                key = decodeURIComponent(escapedKey);
                value = decodeURIComponent(escapedValue);

                data[key] = value;
            }

            return data;
        }

    }
}