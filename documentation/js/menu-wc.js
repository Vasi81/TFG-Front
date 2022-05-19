'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">edix-frontend13 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0143d8f8690a0049024c01d843d9139c8fd24c3565a9df8a82e35d4d4009db6b5bcb6cc279b7f1eb84975f4039b9eedd0deba5e6cf8cbd952531cb6126aeb377"' : 'data-target="#xs-components-links-module-AppModule-0143d8f8690a0049024c01d843d9139c8fd24c3565a9df8a82e35d4d4009db6b5bcb6cc279b7f1eb84975f4039b9eedd0deba5e6cf8cbd952531cb6126aeb377"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0143d8f8690a0049024c01d843d9139c8fd24c3565a9df8a82e35d4d4009db6b5bcb6cc279b7f1eb84975f4039b9eedd0deba5e6cf8cbd952531cb6126aeb377"' :
                                            'id="xs-components-links-module-AppModule-0143d8f8690a0049024c01d843d9139c8fd24c3565a9df8a82e35d4d4009db6b5bcb6cc279b7f1eb84975f4039b9eedd0deba5e6cf8cbd952531cb6126aeb377"' }>
                                            <li class="link">
                                                <a href="components/AllProfilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllProfilesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselimagenesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselimagenesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateProfileSecundaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProfileSecundaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GooglemapsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GooglemapsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OficinaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OficinaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OficinaDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OficinaDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OficinasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OficinasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OficinasFiltroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OficinasFiltroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OficinasModalityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OficinasModalityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiciosoficinasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiciosoficinasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AllProfilesComponent.html" data-type="entity-link" >AllProfilesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CarouselimagenesComponent.html" data-type="entity-link" >CarouselimagenesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateProfileComponent.html" data-type="entity-link" >CreateProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateProfileSecundaryComponent.html" data-type="entity-link" >CreateProfileSecundaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeComponent.html" data-type="entity-link" >EmployeeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeDetailComponent.html" data-type="entity-link" >EmployeeDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormularioComponent.html" data-type="entity-link" >FormularioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GooglemapsComponent.html" data-type="entity-link" >GooglemapsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OficinaComponent.html" data-type="entity-link" >OficinaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OficinaDetailComponent.html" data-type="entity-link" >OficinaDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OficinasComponent.html" data-type="entity-link" >OficinasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OficinasFiltroComponent.html" data-type="entity-link" >OficinasFiltroComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OficinasModalityComponent.html" data-type="entity-link" >OficinasModalityComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Emailcontact.html" data-type="entity-link" >Emailcontact</a>
                            </li>
                            <li class="link">
                                <a href="classes/Employee.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="classes/Oficinas.html" data-type="entity-link" >Oficinas</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EmailcontactService.html" data-type="entity-link" >EmailcontactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmployeeService.html" data-type="entity-link" >EmployeeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OficinasService.html" data-type="entity-link" >OficinasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});