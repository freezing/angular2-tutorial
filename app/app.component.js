System.register(['@angular/core', "./property-binding/property-binding-parent.component", "./puzzle/puzzle.component", "./first-app/first-app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, property_binding_parent_component_1, puzzle_component_1, first_app_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_parent_component_1_1) {
                property_binding_parent_component_1 = property_binding_parent_component_1_1;
            },
            function (puzzle_component_1_1) {
                puzzle_component_1 = puzzle_component_1_1;
            },
            function (first_app_component_1_1) {
                first_app_component_1 = first_app_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <!--<my-puzzle></my-puzzle>-->\n        <!--<my-parent-property></my-parent-property>  -->\n        <my-first-app></my-first-app>\n    ",
                        directives: [first_app_component_1.MyFirstAppComponent, puzzle_component_1.PuzzleComponent, property_binding_parent_component_1.ParentPropertyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtnQkFDQSxDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxtSkFJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx5Q0FBbUIsRUFBRSxrQ0FBZSxFQUFFLDJEQUF1QixDQUFDO3FCQUM5RSxDQUFDOztnQ0FBQTtnQkFFRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXJlbnRQcm9wZXJ0eUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvcGVydHktYmluZGluZy9wcm9wZXJ0eS1iaW5kaW5nLXBhcmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHV6emxlQ29tcG9uZW50fSBmcm9tIFwiLi9wdXp6bGUvcHV6emxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNeUZpcnN0QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9maXJzdC1hcHAvZmlyc3QtYXBwLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPCEtLTxteS1wdXp6bGU+PC9teS1wdXp6bGU+LS0+XG4gICAgICAgIDwhLS08bXktcGFyZW50LXByb3BlcnR5PjwvbXktcGFyZW50LXByb3BlcnR5PiAgLS0+XG4gICAgICAgIDxteS1maXJzdC1hcHA+PC9teS1maXJzdC1hcHA+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTXlGaXJzdEFwcENvbXBvbmVudCwgUHV6emxlQ29tcG9uZW50LCBQYXJlbnRQcm9wZXJ0eUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
