"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var accounts_service_1 = require("./accounts.service");
describe('AccountsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [accounts_service_1.AccountsService]
        });
    });
    it('should be created', testing_1.inject([accounts_service_1.AccountsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=accounts.service.spec.js.map