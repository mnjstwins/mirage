"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TermsQuery = (function () {
    function TermsQuery() {
        this.getQueryFormat = new core_1.EventEmitter();
        this.inputs = {
            input: {
                placeholder: 'Input',
                value: ''
            }
        };
        this.queryFormat = {};
    }
    TermsQuery.prototype.ngOnInit = function () {
        this.setFormat();
    };
    // QUERY FORMAT
    /*
        Query Format for this query is
        @queryName: {
            @fieldName: @value
        }
    */
    TermsQuery.prototype.setFormat = function () {
        this.queryFormat[this.queryName] = {};
        this.queryFormat[this.queryName][this.fieldName] = this.inputs.input.value;
        this.getQueryFormat.emit(this.queryFormat);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TermsQuery.prototype, "queryName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TermsQuery.prototype, "fieldName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TermsQuery.prototype, "getQueryFormat", void 0);
    TermsQuery = __decorate([
        core_1.Component({
            selector: 'terms-query',
            template: "<div class=\"form-group form-element col-xs-12\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control col-xs-12\"\n\t\t\t\t\t\t[(ngModel)]=\"inputs.input.value\" \n\t\t\t\t\t \tplaceholder=\"{{inputs.input.placeholder}}\"\n\t\t\t\t\t \t(keyup)=\"setFormat();\" />\n\t\t\t\t</div>",
            inputs: ['queryName', 'fieldName', 'getQueryFormat']
        }), 
        __metadata('design:paramtypes', [])
    ], TermsQuery);
    return TermsQuery;
}());
exports.TermsQuery = TermsQuery;
//# sourceMappingURL=terms.query.js.map