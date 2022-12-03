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
                    <a href="index.html" data-type="index-link">ans-directory documentation</a>
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
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountModule-8e0caf5c51d6435b62ae82e886f535a6ae43cba2db2372f3156d8dc5a2fdb574dff049af3eb4f35a23851babe2e0963c451fa61a8793acaf91a28144b02ad96b"' : 'data-target="#xs-injectables-links-module-AccountModule-8e0caf5c51d6435b62ae82e886f535a6ae43cba2db2372f3156d8dc5a2fdb574dff049af3eb4f35a23851babe2e0963c451fa61a8793acaf91a28144b02ad96b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-8e0caf5c51d6435b62ae82e886f535a6ae43cba2db2372f3156d8dc5a2fdb574dff049af3eb4f35a23851babe2e0963c451fa61a8793acaf91a28144b02ad96b"' :
                                        'id="xs-injectables-links-module-AccountModule-8e0caf5c51d6435b62ae82e886f535a6ae43cba2db2372f3156d8dc5a2fdb574dff049af3eb4f35a23851babe2e0963c451fa61a8793acaf91a28144b02ad96b"' }>
                                        <li class="link">
                                            <a href="injectables/AccountRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' : 'data-target="#xs-controllers-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' :
                                            'id="xs-controllers-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' : 'data-target="#xs-injectables-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' :
                                        'id="xs-injectables-links-module-AppModule-f266ec005f1945d7e984189804b537bb83f382ec2fba1b31a1e88d4e533d62bc6b23030e713ff0c00fdfd47ed2eda44fd4b7d1ce658956c1395d58a5e112d9c9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthProfessionalModule.html" data-type="entity-link" >HealthProfessionalModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthProfessionalModule-e4619dc25d31eed000505e7b79660d98a44e79ef28c908e1187fe00459aa0eeefbac000fa166d2f4d4149fbfa1a73844e6cb31636c55c655e09aa5dfc6a62d33"' : 'data-target="#xs-injectables-links-module-HealthProfessionalModule-e4619dc25d31eed000505e7b79660d98a44e79ef28c908e1187fe00459aa0eeefbac000fa166d2f4d4149fbfa1a73844e6cb31636c55c655e09aa5dfc6a62d33"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthProfessionalModule-e4619dc25d31eed000505e7b79660d98a44e79ef28c908e1187fe00459aa0eeefbac000fa166d2f4d4149fbfa1a73844e6cb31636c55c655e09aa5dfc6a62d33"' :
                                        'id="xs-injectables-links-module-HealthProfessionalModule-e4619dc25d31eed000505e7b79660d98a44e79ef28c908e1187fe00459aa0eeefbac000fa166d2f4d4149fbfa1a73844e6cb31636c55c655e09aa5dfc6a62d33"' }>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KnowHowModule.html" data-type="entity-link" >KnowHowModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-KnowHowModule-f68a8dbcb278ec118e102d4f5a2d11cf41e7fde16b4793a39013b3014cf091c522f5de21078a0be185f84d5713cea4fb5029d7311f64781d4b9d099d6b09ab50"' : 'data-target="#xs-injectables-links-module-KnowHowModule-f68a8dbcb278ec118e102d4f5a2d11cf41e7fde16b4793a39013b3014cf091c522f5de21078a0be185f84d5713cea4fb5029d7311f64781d4b9d099d6b09ab50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KnowHowModule-f68a8dbcb278ec118e102d4f5a2d11cf41e7fde16b4793a39013b3014cf091c522f5de21078a0be185f84d5713cea4fb5029d7311f64781d4b9d099d6b09ab50"' :
                                        'id="xs-injectables-links-module-KnowHowModule-f68a8dbcb278ec118e102d4f5a2d11cf41e7fde16b4793a39013b3014cf091c522f5de21078a0be185f84d5713cea4fb5029d7311f64781d4b9d099d6b09ab50"' }>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasKnowHowRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasKnowHowRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasKnowHowService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasKnowHowService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KnowHowRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KnowHowRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KnowHowService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KnowHowService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PharmacistInformationModule.html" data-type="entity-link" >PharmacistInformationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PharmacistInformationModule-226fd53e23eec5a86ab8d81bca9b7e7057075b7030a915a61c79d5c3cdf27975a583633befd625a1e00a47d1af8c0acdb4154be1474055d2a66fd01fd1a05f25"' : 'data-target="#xs-injectables-links-module-PharmacistInformationModule-226fd53e23eec5a86ab8d81bca9b7e7057075b7030a915a61c79d5c3cdf27975a583633befd625a1e00a47d1af8c0acdb4154be1474055d2a66fd01fd1a05f25"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PharmacistInformationModule-226fd53e23eec5a86ab8d81bca9b7e7057075b7030a915a61c79d5c3cdf27975a583633befd625a1e00a47d1af8c0acdb4154be1474055d2a66fd01fd1a05f25"' :
                                        'id="xs-injectables-links-module-PharmacistInformationModule-226fd53e23eec5a86ab8d81bca9b7e7057075b7030a915a61c79d5c3cdf27975a583633befd625a1e00a47d1af8c0acdb4154be1474055d2a66fd01fd1a05f25"' }>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasPharmacistInformationRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasPharmacistInformationRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasPharmacistInformationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasPharmacistInformationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PharmacistInformationRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PharmacistInformationRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PharmacistInformationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PharmacistInformationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-62ec092ef368f174ee38f2ab12f533066911a14d0cf31a43a32472237444e6622cbe4044ae722090d9b65e1cb90dfd18fff22ad9694f84b6f95f847b011de492"' : 'data-target="#xs-injectables-links-module-PrismaModule-62ec092ef368f174ee38f2ab12f533066911a14d0cf31a43a32472237444e6622cbe4044ae722090d9b65e1cb90dfd18fff22ad9694f84b6f95f847b011de492"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-62ec092ef368f174ee38f2ab12f533066911a14d0cf31a43a32472237444e6622cbe4044ae722090d9b65e1cb90dfd18fff22ad9694f84b6f95f847b011de492"' :
                                        'id="xs-injectables-links-module-PrismaModule-62ec092ef368f174ee38f2ab12f533066911a14d0cf31a43a32472237444e6622cbe4044ae722090d9b65e1cb90dfd18fff22ad9694f84b6f95f847b011de492"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfessionModule.html" data-type="entity-link" >ProfessionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfessionModule-efa499fee0882477f961f938667bb321e4b8dbd43bcb447f3d892bea86284075461b62e68885386fcae61a42e0e9a150b259849055104037c06be563520a3470"' : 'data-target="#xs-injectables-links-module-ProfessionModule-efa499fee0882477f961f938667bb321e4b8dbd43bcb447f3d892bea86284075461b62e68885386fcae61a42e0e9a150b259849055104037c06be563520a3470"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfessionModule-efa499fee0882477f961f938667bb321e4b8dbd43bcb447f3d892bea86284075461b62e68885386fcae61a42e0e9a150b259849055104037c06be563520a3470"' :
                                        'id="xs-injectables-links-module-ProfessionModule-efa499fee0882477f961f938667bb321e4b8dbd43bcb447f3d892bea86284075461b62e68885386fcae61a42e0e9a150b259849055104037c06be563520a3470"' }>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasProfessionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasProfessionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasProfessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasProfessionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfessionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfessionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StuctureModule.html" data-type="entity-link" >StuctureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StuctureModule-f36aa9208eb6a80fe57b26826dd1facb2b93f6076717ae722afcd34d2937afdd0c7e510911975e151f3dfa23f067e8af35deaef3b6267fcfe7f73a4a42888dda"' : 'data-target="#xs-injectables-links-module-StuctureModule-f36aa9208eb6a80fe57b26826dd1facb2b93f6076717ae722afcd34d2937afdd0c7e510911975e151f3dfa23f067e8af35deaef3b6267fcfe7f73a4a42888dda"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StuctureModule-f36aa9208eb6a80fe57b26826dd1facb2b93f6076717ae722afcd34d2937afdd0c7e510911975e151f3dfa23f067e8af35deaef3b6267fcfe7f73a4a42888dda"' :
                                        'id="xs-injectables-links-module-StuctureModule-f36aa9208eb6a80fe57b26826dd1facb2b93f6076717ae722afcd34d2937afdd0c7e510911975e151f3dfa23f067e8af35deaef3b6267fcfe7f73a4a42888dda"' }>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasStructureRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasStructureRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HealthProfessionalHasStructureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthProfessionalHasStructureService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StructureRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StructureRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StructureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StructureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UpdateModule.html" data-type="entity-link" >UpdateModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UpdateModule-880dc2ea41540720a412c3092712a021a127920aeef2ac2f5590a7376c07f495bd783fc4147db4d0799c7602123c09b7e907cf2486ddcb901ae81e3d7a836351"' : 'data-target="#xs-injectables-links-module-UpdateModule-880dc2ea41540720a412c3092712a021a127920aeef2ac2f5590a7376c07f495bd783fc4147db4d0799c7602123c09b7e907cf2486ddcb901ae81e3d7a836351"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UpdateModule-880dc2ea41540720a412c3092712a021a127920aeef2ac2f5590a7376c07f495bd783fc4147db4d0799c7602123c09b7e907cf2486ddcb901ae81e3d7a836351"' :
                                        'id="xs-injectables-links-module-UpdateModule-880dc2ea41540720a412c3092712a021a127920aeef2ac2f5590a7376c07f495bd783fc4147db4d0799c7602123c09b7e907cf2486ddcb901ae81e3d7a836351"' }>
                                        <li class="link">
                                            <a href="injectables/ActivityLoader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityLoader</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FileLoader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileLoader</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FileParser.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileParser</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KnowHowLoader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KnowHowLoader</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/AbstractArrayEntity.html" data-type="entity-link" >AbstractArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractEntity.html" data-type="entity-link" >AbstractEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountArrayEntity.html" data-type="entity-link" >AccountArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountEntity.html" data-type="entity-link" >AccountEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountPaginationCursorDto.html" data-type="entity-link" >AccountPaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountPaginationDto.html" data-type="entity-link" >AccountPaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountResolver.html" data-type="entity-link" >AccountResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountSortInputDto.html" data-type="entity-link" >AccountSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountWhereInputDto.html" data-type="entity-link" >AccountWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Activity.html" data-type="entity-link" >Activity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ActivitySector.html" data-type="entity-link" >ActivitySector</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountInputDto.html" data-type="entity-link" >CreateAccountInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateActivityInputDto.html" data-type="entity-link" >CreateActivityInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateActivitySectorInputDto.html" data-type="entity-link" >CreateActivitySectorInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthProfessionalHasKnowHowInputDto.html" data-type="entity-link" >CreateHealthProfessionalHasKnowHowInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthProfessionalHasPharmacistInformationInputDto.html" data-type="entity-link" >CreateHealthProfessionalHasPharmacistInformationInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthProfessionalHasProfessionInputDto.html" data-type="entity-link" >CreateHealthProfessionalHasProfessionInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthProfessionalHasStructureInputDto.html" data-type="entity-link" >CreateHealthProfessionalHasStructureInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthProfessionalInputDto.html" data-type="entity-link" >CreateHealthProfessionalInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateKnowHowInputDto.html" data-type="entity-link" >CreateKnowHowInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePharmacistInformationInputDto.html" data-type="entity-link" >CreatePharmacistInformationInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePracticeInputDto.html" data-type="entity-link" >CreatePracticeInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfessionInputDto.html" data-type="entity-link" >CreateProfessionInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRegistrationAuthorityInputDto.html" data-type="entity-link" >CreateRegistrationAuthorityInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleInputDto.html" data-type="entity-link" >CreateRoleInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStructureInputDto.html" data-type="entity-link" >CreateStructureInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomValidationPipe.html" data-type="entity-link" >CustomValidationPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeFilter.html" data-type="entity-link" >DateTimeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-1.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-2.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-3.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-4.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-5.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-6.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-7.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-8.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-9.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-10.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-11.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-12.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-13.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DTO-14.html" data-type="entity-link" >DTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityDto.html" data-type="entity-link" >EntityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityInitArgs.html" data-type="entity-link" >EntityInitArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorDatailsDto.html" data-type="entity-link" >ErrorDatailsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeneralPermissions.html" data-type="entity-link" >GeneralPermissions</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetManyCommonPaginationCursorDto.html" data-type="entity-link" >GetManyCommonPaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetManyCommonPaginationDto.html" data-type="entity-link" >GetManyCommonPaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetManyCommonSortDto.html" data-type="entity-link" >GetManyCommonSortDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetManyStringFilterDto.html" data-type="entity-link" >GetManyStringFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetManyStringNullableFilterDto.html" data-type="entity-link" >GetManyStringNullableFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetManyWhereDto.html" data-type="entity-link" >GetManyWhereDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUniqueCommonWhereDto.html" data-type="entity-link" >GetUniqueCommonWhereDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalArrayEntity.html" data-type="entity-link" >HealthProfessionalArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalEntity.html" data-type="entity-link" >HealthProfessionalEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowArrayEntity.html" data-type="entity-link" >HealthProfessionalHasKnowHowArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowEntity.html" data-type="entity-link" >HealthProfessionalHasKnowHowEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowListRelationFilterInputDto.html" data-type="entity-link" >HealthProfessionalHasKnowHowListRelationFilterInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowPaginationCursorDto.html" data-type="entity-link" >HealthProfessionalHasKnowHowPaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowPaginationDto.html" data-type="entity-link" >HealthProfessionalHasKnowHowPaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowResolver.html" data-type="entity-link" >HealthProfessionalHasKnowHowResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowSortInputDto.html" data-type="entity-link" >HealthProfessionalHasKnowHowSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasKnowHowWhereInputDto.html" data-type="entity-link" >HealthProfessionalHasKnowHowWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationArrayEntity.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationEntity.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationListRelationFilterInputDto.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationListRelationFilterInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationPaginationCursorDto.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationPaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationPaginationDto.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationPaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationResolver.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationSortInputDto.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasPharmacistInformationWhereInputDto.html" data-type="entity-link" >HealthProfessionalHasPharmacistInformationWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionArrayEntity.html" data-type="entity-link" >HealthProfessionalHasProfessionArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionEntity.html" data-type="entity-link" >HealthProfessionalHasProfessionEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionListRelationFilterInputDto.html" data-type="entity-link" >HealthProfessionalHasProfessionListRelationFilterInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionPaginationCursorDto.html" data-type="entity-link" >HealthProfessionalHasProfessionPaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionPaginationDto.html" data-type="entity-link" >HealthProfessionalHasProfessionPaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionResolver.html" data-type="entity-link" >HealthProfessionalHasProfessionResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionSortInputDto.html" data-type="entity-link" >HealthProfessionalHasProfessionSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasProfessionWhereInputDto.html" data-type="entity-link" >HealthProfessionalHasProfessionWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructureArrayEntity.html" data-type="entity-link" >HealthProfessionalHasStructureArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructureEntity.html" data-type="entity-link" >HealthProfessionalHasStructureEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructureListRelationFilterInputDto.html" data-type="entity-link" >HealthProfessionalHasStructureListRelationFilterInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructurePaginationCursorDto.html" data-type="entity-link" >HealthProfessionalHasStructurePaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructurePaginationDto.html" data-type="entity-link" >HealthProfessionalHasStructurePaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructureResolver.html" data-type="entity-link" >HealthProfessionalHasStructureResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructureSortInputDto.html" data-type="entity-link" >HealthProfessionalHasStructureSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalHasStructureWhereInputDto.html" data-type="entity-link" >HealthProfessionalHasStructureWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalListRelationFilterInputDto.html" data-type="entity-link" >HealthProfessionalListRelationFilterInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalPaginationCursorDto.html" data-type="entity-link" >HealthProfessionalPaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalPaginationDto.html" data-type="entity-link" >HealthProfessionalPaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalResolver.html" data-type="entity-link" >HealthProfessionalResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalSortInputDto.html" data-type="entity-link" >HealthProfessionalSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthProfessionalWhereInputDto.html" data-type="entity-link" >HealthProfessionalWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsNotNullContraint.html" data-type="entity-link" >IsNotNullContraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsNullIfOtherIsDefinedContraint.html" data-type="entity-link" >IsNullIfOtherIsDefinedContraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/KnowHowArrayEntity.html" data-type="entity-link" >KnowHowArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/KnowHowEntity.html" data-type="entity-link" >KnowHowEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/KnowHowResolver.html" data-type="entity-link" >KnowHowResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/KnowHowSortInputDto.html" data-type="entity-link" >KnowHowSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/KnowHowWhereInputDto.html" data-type="entity-link" >KnowHowWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LightHealthProfessionalEntity.html" data-type="entity-link" >LightHealthProfessionalEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacistInformationArrayEntity.html" data-type="entity-link" >PharmacistInformationArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacistInformationEntity.html" data-type="entity-link" >PharmacistInformationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacistInformationPaginationCursorDto.html" data-type="entity-link" >PharmacistInformationPaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacistInformationPaginationDto.html" data-type="entity-link" >PharmacistInformationPaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacistInformationResolver.html" data-type="entity-link" >PharmacistInformationResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacistInformationSortInputDto.html" data-type="entity-link" >PharmacistInformationSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PharmacistInformationWhereInputDto.html" data-type="entity-link" >PharmacistInformationWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Practice.html" data-type="entity-link" >Practice</a>
                            </li>
                            <li class="link">
                                <a href="classes/PracticeWhereInputDto.html" data-type="entity-link" >PracticeWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaErrorTraductor.html" data-type="entity-link" >PrismaErrorTraductor</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProcessError.html" data-type="entity-link" >ProcessError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProcessErrorDto.html" data-type="entity-link" >ProcessErrorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessionArrayEntity.html" data-type="entity-link" >ProfessionArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessionEntity.html" data-type="entity-link" >ProfessionEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessionResolver.html" data-type="entity-link" >ProfessionResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessionSortInputDto.html" data-type="entity-link" >ProfessionSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessionWhereInputDto.html" data-type="entity-link" >ProfessionWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistrationAuthority.html" data-type="entity-link" >RegistrationAuthority</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleWhereInputDto.html" data-type="entity-link" >RoleWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructureArrayEntity.html" data-type="entity-link" >StructureArrayEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructureEntity.html" data-type="entity-link" >StructureEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructureListRelationFilterInputDto.html" data-type="entity-link" >StructureListRelationFilterInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructurePaginationCursorDto.html" data-type="entity-link" >StructurePaginationCursorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructurePaginationDto.html" data-type="entity-link" >StructurePaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructureResolver.html" data-type="entity-link" >StructureResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructureSortInputDto.html" data-type="entity-link" >StructureSortInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StructureWhereInputDto.html" data-type="entity-link" >StructureWhereInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueAccountInputDto.html" data-type="entity-link" >UniqueAccountInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalHasKnowHowInputDto.html" data-type="entity-link" >UniqueHealthProfessionalHasKnowHowInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalHasPharmacistInformationInputDto.html" data-type="entity-link" >UniqueHealthProfessionalHasPharmacistInformationInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalHasProfessionInputDto.html" data-type="entity-link" >UniqueHealthProfessionalHasProfessionInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalHasStructureInputDto.html" data-type="entity-link" >UniqueHealthProfessionalHasStructureInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalId_knowHowIdInputDto.html" data-type="entity-link" >UniqueHealthProfessionalId_knowHowIdInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalId_pharmacistInformationIdInputDto.html" data-type="entity-link" >UniqueHealthProfessionalId_pharmacistInformationIdInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalId_professionIdInputDto.html" data-type="entity-link" >UniqueHealthProfessionalId_professionIdInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalId_structureId_practiceIdInputDto.html" data-type="entity-link" >UniqueHealthProfessionalId_structureId_practiceIdInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueHealthProfessionalInputDto.html" data-type="entity-link" >UniqueHealthProfessionalInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueKnowHowInputDto.html" data-type="entity-link" >UniqueKnowHowInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueknowHowTypeCode_knowHowCodeInputDto.html" data-type="entity-link" >UniqueknowHowTypeCode_knowHowCodeInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueknowHowTypeCode_knowHowCodeInputDto-1.html" data-type="entity-link" >UniqueknowHowTypeCode_knowHowCodeInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniquePharmacistInformationInputDto.html" data-type="entity-link" >UniquePharmacistInformationInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueProfessionCategoryCode_professionCodeInputDto.html" data-type="entity-link" >UniqueProfessionCategoryCode_professionCodeInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueProfessionInputDto.html" data-type="entity-link" >UniqueProfessionInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueStructureInputDto.html" data-type="entity-link" >UniqueStructureInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountInputDto.html" data-type="entity-link" >UpdateAccountInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthProfessionalHasKnowHowInputDto.html" data-type="entity-link" >UpdateHealthProfessionalHasKnowHowInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthProfessionalHasPharmacistInformationInputDto.html" data-type="entity-link" >UpdateHealthProfessionalHasPharmacistInformationInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthProfessionalHasProfessionInputDto.html" data-type="entity-link" >UpdateHealthProfessionalHasProfessionInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthProfessionalHasStructureInputDto.html" data-type="entity-link" >UpdateHealthProfessionalHasStructureInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthProfessionalInputDto.html" data-type="entity-link" >UpdateHealthProfessionalInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateKnowHowInputDto.html" data-type="entity-link" >UpdateKnowHowInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePharmacistInformationInputDto.html" data-type="entity-link" >UpdatePharmacistInformationInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfessionInputDto.html" data-type="entity-link" >UpdateProfessionInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResolver.html" data-type="entity-link" >UpdateResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStructureInputDto.html" data-type="entity-link" >UpdateStructureInputDto</a>
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
                                    <a href="injectables/AbstractRepository.html" data-type="entity-link" >AbstractRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AbstractRepositoryWithFind.html" data-type="entity-link" >AbstractRepositoryWithFind</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AbstractService.html" data-type="entity-link" >AbstractService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AbstractServiceWithFind.html" data-type="entity-link" >AbstractServiceWithFind</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/GQLAuthGuard.html" data-type="entity-link" >GQLAuthGuard</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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