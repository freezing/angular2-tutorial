System.register(['@angular/core', "./property-binding/property-binding-parent.component", "./puzzle/puzzle.component", "./first-app/first-app.component", "./attribute-directives/attribute-directives.component", "./attribute-directives/structural-directives.component", "./shoplist/shoplist-app.component"], function(exports_1, context_1) {
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
    var core_1, property_binding_parent_component_1, puzzle_component_1, first_app_component_1, attribute_directives_component_1, structural_directives_component_1, shoplist_app_component_1;
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
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            },
            function (structural_directives_component_1_1) {
                structural_directives_component_1 = structural_directives_component_1_1;
            },
            function (shoplist_app_component_1_1) {
                shoplist_app_component_1 = shoplist_app_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <!--<my-puzzle></my-puzzle>-->\n        <!--<my-parent-property></my-parent-property>  -->\n        <!--<my-first-app></my-first-app>-->\n        <!--<my-attribute-directives></my-attribute-directives>-->\n        <!--<br/><br/>-->\n        <!--<h2>Structural directives</h2>-->\n        <!--<my-structural-directives></my-structural-directives>-->\n        <shoplist-app></shoplist-app>\n    ",
                        directives: [shoplist_app_component_1.ShoplistAppComponent, structural_directives_component_1.MyStructuralDirectivesComponent, attribute_directives_component_1.MyAttributeDirectivesComponent, first_app_component_1.MyFirstAppComponent, puzzle_component_1.PuzzleComponent, property_binding_parent_component_1.ParentPropertyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHFaQVNUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLGlFQUErQixFQUFFLCtEQUE4QixFQUFFLHlDQUFtQixFQUFFLGtDQUFlLEVBQUUsMkRBQXVCLENBQUM7cUJBQ3JLLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhcmVudFByb3BlcnR5Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9wZXJ0eS1iaW5kaW5nL3Byb3BlcnR5LWJpbmRpbmctcGFyZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQdXp6bGVDb21wb25lbnR9IGZyb20gXCIuL3B1enpsZS9wdXp6bGUuY29tcG9uZW50XCI7XG5pbXBvcnQge015Rmlyc3RBcHBDb21wb25lbnR9IGZyb20gXCIuL2ZpcnN0LWFwcC9maXJzdC1hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge015QXR0cmlidXRlRGlyZWN0aXZlc0NvbXBvbmVudH0gZnJvbSBcIi4vYXR0cmlidXRlLWRpcmVjdGl2ZXMvYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQge015U3RydWN0dXJhbERpcmVjdGl2ZXNDb21wb25lbnR9IGZyb20gXCIuL2F0dHJpYnV0ZS1kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7U2hvcGxpc3RBcHBDb21wb25lbnR9IGZyb20gXCIuL3Nob3BsaXN0L3Nob3BsaXN0LWFwcC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDwhLS08bXktcHV6emxlPjwvbXktcHV6emxlPi0tPlxuICAgICAgICA8IS0tPG15LXBhcmVudC1wcm9wZXJ0eT48L215LXBhcmVudC1wcm9wZXJ0eT4gIC0tPlxuICAgICAgICA8IS0tPG15LWZpcnN0LWFwcD48L215LWZpcnN0LWFwcD4tLT5cbiAgICAgICAgPCEtLTxteS1hdHRyaWJ1dGUtZGlyZWN0aXZlcz48L215LWF0dHJpYnV0ZS1kaXJlY3RpdmVzPi0tPlxuICAgICAgICA8IS0tPGJyLz48YnIvPi0tPlxuICAgICAgICA8IS0tPGgyPlN0cnVjdHVyYWwgZGlyZWN0aXZlczwvaDI+LS0+XG4gICAgICAgIDwhLS08bXktc3RydWN0dXJhbC1kaXJlY3RpdmVzPjwvbXktc3RydWN0dXJhbC1kaXJlY3RpdmVzPi0tPlxuICAgICAgICA8c2hvcGxpc3QtYXBwPjwvc2hvcGxpc3QtYXBwPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BsaXN0QXBwQ29tcG9uZW50LCBNeVN0cnVjdHVyYWxEaXJlY3RpdmVzQ29tcG9uZW50LCBNeUF0dHJpYnV0ZURpcmVjdGl2ZXNDb21wb25lbnQsIE15Rmlyc3RBcHBDb21wb25lbnQsIFB1enpsZUNvbXBvbmVudCwgUGFyZW50UHJvcGVydHlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
