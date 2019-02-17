  
# TD 2 : Application Nativescript

Le but de ce TD  est de migrer le comportement de l'application réalisée au TD 1 dans l'environnement NativeScript.

## 0 - Documentation

 - [Documentation officielle NativeScript](https://docs.nativescript.org/angular/start/introduction)
 - [Documentation officielle Typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)
 - [Documentation officielle Angular](https://angular.io/docs)
 - [Documentation officielle Lodash](https://lodash.com/)
 - [Documentation Rxjs](https://rxmarbles.com/)

## 1 - Conventions

### 1.1 - Structure finale de l'application

 - **app**
	 - **components**
		 - app.authenticated.handler.ts
		 - app.handler.ts
		 - app.public.handler.ts
	 - **modules**
		 - app.module.ts
		 - app.routing.module.ts
	 - **services**
		 - app.caching.interceptor.ts
		 - app.error.interceptor.ts
		 - app.redirect.interceptor.ts
 - **auth**
	 - models.ts
	 - **components**
		 - auth.signin.component.ts
	 - **modules**
		 - auth.module.ts
	 - **services**
		 - auth.guard.ts
		 - auth.service.ts
 - **product**
	 - models.ts
	 - **components**
		 - product.item.component.ts
		 - product.item.handler.ts
		 - product.list.handler.ts
	 - **modules**
		 - product.module.ts
		 - product.routing.module.ts
	 - **services**
		 - product.service.ts
		 
### 1.2 - Préparation du code

 - Intégrer l'ensemble du code du TD 1 à un nouveau projet NativeScript créé avec Sidekick.

## 2 - Modules, services et concepts

 - Supprimer MaterialModule ( NativeScript possède sa propre librairie de composants )
 - Dans chaque module, rajouter la propriété :  `schemas:  [NO_ERRORS_SCHEMA]`
 - Remplacer les modules Angular par les modules correspondants NativeScript :
	 - BrowserModule & BrowserAnimationsModule => NativeScriptModule
	 - CommonModule => NativescriptCommonModule
	 - RouterModule => NativeScriptRouterModule
	 - HttpClientModule => NativeScriptHttpClientModule
	 - ReactiveFormsModule => NativeScriptUIDataFormModule
- Remplacer les services Angular par les services correspondants NativeScript :
	- Router => RouterExtensions
- Remplacer le LocalStorage par le module ApplicationSettings 
 
## 3 - Refonte de l'interface

### 3.0 - Assets

- Intégrer les images et la police d'icônes.

### 3.1 - Handler principal

- Remplacer le router-outlet par le [page-router-outlet](https://docs.nativescript.org/angular/core-concepts/angular-navigation#page-router-outlet)

### 3.2 - Handler public

- Mettre à jour l'interface avec les composants NativeScript : [Image](https://docs.nativescript.org/angular/ui/ng-ui-widgets/image) et [FlexboxLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#flexboxlayout)
- Mettre à jour le style
- Masquer la barre d'action

### 3.3 - Handler authenticated

- Mettre à jour l'interface avec les composants NativeScript : [ActionBar](https://docs.nativescript.org/angular/ui/ng-ui-widgets/action-bar), ActionItem, [Image](https://docs.nativescript.org/angular/ui/ng-ui-widgets/image), [Button](https://docs.nativescript.org/angular/ui/ng-ui-widgets/button)
- Mettre à jour le style

### 3.4 - Composant  Connexion

- Mettre à jour l'interface avec les composants NativeScript : [GridLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#gridlayout), [Button](https://docs.nativescript.org/angular/ui/ng-ui-widgets/button), [RadDataForm](https://docs.nativescript.org/angular/ui/professional-ui-components/ng-DataForm/dataform-overview), [ActivityIndicator](https://docs.nativescript.org/angular/ui/ng-ui-widgets/activity-indicator), [FormattedString](https://docs.nativescript.org/angular/ui/ng-ui-widgets/formatted-string), Span
- Mettre à jour le style

### 3.5 - Handler Liste d'articles

- Mettre à jour l'interface avec les composants NativeScript : [GridLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#gridlayout), [ListView](https://docs.nativescript.org/angular/ui/ng-ui-widgets/listview), [StackLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#stacklayout), [ActivityIndicator](https://docs.nativescript.org/angular/ui/ng-ui-widgets/activity-indicator), [AbsoluteLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#absolutelayout), [Button](https://docs.nativescript.org/angular/ui/ng-ui-widgets/button)
- Mettre à jour le style

### 3.6 - Handler Article

- Mettre à jour l'interface avec les composants NativeScript : [GridLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#gridlayout), [Button](https://docs.nativescript.org/angular/ui/ng-ui-widgets/button), [ActivityIndicator](https://docs.nativescript.org/angular/ui/ng-ui-widgets/activity-indicator), [FormattedString](https://docs.nativescript.org/angular/ui/ng-ui-widgets/formatted-string), Span
- Mettre à jour le style

### 3.7 - Composant Article

- Mettre à jour l'interface avec les composants NativeScript : [StackLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#stacklayout), [Label](https://docs.nativescript.org/angular/ui/ng-ui-widgets/label), [FlexboxLayout](https://docs.nativescript.org/angular/ui/layouts/layout-containers#flexboxlayout)
- Mettre à jour le style
