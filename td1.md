# TD 1 : Application Angular

Le but de ce TD  est de réaliser une application Angular ayant le comportement suivant :

 1. Pour un utilisateur non authentifié l'application est redirigée sur l'écran de connexion, avec deux champs Identifiant et Mot de passe.
 2. Pour un utilisateur authentifié, l'application est redirigée sur la liste des articles.
 3. Sur la liste des articles, un bouton permet le tri par nom ou pour id.
 4. Au clic sur un des articles, le contenu dudit article se charge dans une nouvelle page avec possibilité de retour à la liste.
 5. A tout moment, l'utilisateur peut se déconnecter, auquel cas, il est redirigé vers l'écran de connexion.

> Le TD est à réaliser sur l'IDE en ligne Stackblitz à partir de l'environnement configuré disponible [ICI](https://stackblitz.com/edit/m4206c-td1).

## 0 - Documentation

 - [Documentation officielle Typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)
 - [Documentation officielle Angular](https://angular.io/docs)
 - [Documentation officielle Angular Material](https://material.angular.io/)
 - [Documentation officielle Lodash](https://lodash.com/)

## 1 - Conventions

### 1.1 - Structure des dossiers

Chaque dossier représentant une fonctionnalité (`app, auth, product`) contient :

 - un dossier `modules` contenant l'ensemble des [modules](https://angular.io/guide/ngmodules) de la fonctionnalité
 - un dossier `components` contenant l'ensemble des [composants](https://angular.io/guide/displaying-data) et des handlers
	 > **Rappel :** un handler est un simple composant Angular; nous utilisons le terme handler pour désigner un composant chargé par le routeur et dont le comportement peut être assimilé à une page. Ce composant a la particularité de ne pas posséder de sélecteur à l'exception du handler principal.
 - un dossier `services` contenant les [services](https://angular.io/guide/singleton-services), [gardes](https://angular.io/guide/router#milestone-5-route-guards), [intercepteurs](https://angular.io/guide/http#intercepting-requests-and-responses)

### 1.2 - Convention de nommage

Chaque fichier a pour nom `fonctionnalite[.nom].type.extension`

## 2 - Modèles

Les données utilisées dans cet exercice sont récupérées du générateur [**reqres.in**](https://reqres.in/) via 3 requêtes :
 
	-  connexion : https://reqres.in/api/login (POST)
	-  obtention des articles : https://reqres.in/api/products?per_page=100 (GET)
	-  obtention d'un article : https://reqres.in/api/products/1 (GET)

 1. Dans le dossier `product` créer un fichier `models.ts` contenant une interface **Typescript** `Product` décrivant la structure d'un [article](https://reqres.in/api/products/1). Créer dans le même fichier une interface pour la réponse de la requête de plusieurs produits  `ProductsResponse` et d'un seul produit `ProductResponse`.
	> [Rappel : interface ](https://www.typescriptlang.org/docs/handbook/interfaces.html)
	
	> *N'oubliez pas d'**exporter** vos interfaces afin de pouvoir les importer dans d'autres fichiers.*
 2. Faire de même pour la structure d'un connexion `AuthSignin` et d'une réponse à la requête de connexion `AuthSigninResponse` dans un fichier `models.ts` du dossier `auth`.
 
## 3 - Routage

1. Pour chacune des trois "pages" de notre application, créer le `handler` correspondant *( le contenu du handler sera défini dans la partie 4 )*. 
	 
	 > **Rappel :** tout composant est composé de 3 fichiers : un script d'extension .ts, un template d'extension .html, une feuille de style d'extension .css
	 >**Rappel :** n'oubliez pas de déclarer vos composants dans le module principal.
	 
2. Ajouter les trois routes correspondantes dans le module de routage `AppRoutingModule` avec une url dynamique pour le handler représentant un article
	> [Rappel : documentation routage](https://angular.io/guide/router)
	 

## 4 - Interface Utilisateur

### 4.1 - Connexion

 1. Dans le `handler` correspondant à la page principale, définir le `template` permettant de saisir l'identifiant et le mot de passe avec un bouton de connexion.
	 > [Rappel : documentation formulaire](https://angular.io/guide/reactive-forms)
 3. Dans un premier temps définir le bouton de connexion comme une balise lien vers la page des articles.
	 > [Rappel : documentation routage](https://angular.io/guide/router#router-links)

### 4.2 - Liste des articles

 1. Dans le `handler` correspondant à la page des articles, créer une propriété `products` de type `Product[]` ayant pour valeur les 3 premiers articles se trouvant [ICI](https://reqres.in/api/products?per_page=100) 
 2.  Définir le `template` permettant d'afficher la liste des articles à partir de la propriété.
	 > [Rappel : documentation *ngFor](https://angular.io/guide/displaying-data#showing-an-array-property-with-ngfor)
 
 3. Un clic sur un article doit ouvrir l'url de la page de l'article correspondant *(qui mènera pour l'instant au handler suivant dont le contenu correspond au premier article pour le moment ).* 

### 4.3 - Article

 1. Dans le `handler` correspondant à la page d'un article, créer une propriété product de type Product ayant pour valeur [l' article](https://reqres.in/api/products/1)
 2. définir le `template` permettant d'afficher l'article comme une carte avec comme titre son nom, comme sous-titre son année, comme contenu la propriété `pantone_value` dans un rectangle de sa couleur,  ainsi qu'un bouton retour vers la liste.

### 4.4 - Barre de déconnexion

 1. Créer un `handler` parent pour tout le contenu authentifié  ( articles et article ). Son `template` contiendra la barre de déconnexion avec le logo de l'université et  un bouton de déconnexion.
 2. Rediriger le clic sur le bouton vers la page de connexion.
 3. Mettre à jour le routage en conséquence.

### 4.5 - Validation du formulaire

 1. Ajouter la validation des champs sur le formulaire de connexion.
	 > [Rappel : documentation validation](https://angular.io/guide/reactive-forms#simple-form-validation)
 2. Le passage à la page des articles doit être empêché si le formulaire n'est pas valide.

### 4.6 - Tri de la liste d'articles

 1. Ajouter un bouton flottant permettant le tri de la liste par nom ou par id au clic.
	 > [Rappel : documentation sort](https://lodash.com/docs/4.17.11#sortBy)

## 5 - Services

### 5.1 - Articles

 1. Créer un service `ProductService` dans un fichier `product.service.ts` pour la fonctionnalité `product` avec :
	  - une propriété `products` de type `Product[]` ayant pour valeur les 3 premiers articles se trouvant [ICI](https://reqres.in/api/products?per_page=100) 
	  - une méthode `readMany` retournant la liste des articles
	  - une méthode `read` retournant un article de la liste à partir de son `id`.
	  - une méthode `sortBy` retournant la liste triée en fonction de l'argument `property`.
	
 2. Injecter le service dans les bons composants et remplacer les données correspondantes. 

### 5.2 - Authentification

 1. Créer un service `AuthService` dans un fichier `auth.service.ts` du répertoire `auth` avec :
	 - une propriété `users` de type `User[]` ayant pour [valeur](https://jsonplaceholder.typicode.com/users/3).
	 - une propriété `user` de type `User` 
	 - une méthode `signin` comparant la valeur de ses arguments avec celles des utilisateurs, affichant un message d'erreur si l'utilisateur n'existe pas, le redirigeant vers la page des articles sinon après avoir initialisé la variable `user.`
	 - une méthode `signout` réinitialisant la variable `user` et redirigeant l'utilisateur vers la page de connexion.
	 
 2. Injecter le service dans les bons composants et remplacer les données correspondantes.

## 6 - Connexion à l'API

### 6.1 - ProductService

 1. Intégrer le service [HttpClient](https://angular.io/guide/http).
 2. Modifier les méthodes `readMany` et `read` afin de récupérer le ou les articles correspondants par requête HTTP.

### 6.2 - AuthService

 1. Intégrer le service [HttpClient](https://angular.io/guide/http).
 2. Modifier la méthode `signin` afin d'effectuer une requête HTTP à l'API.
 
### 6.3 - Loaders

 1. Ajouter un [Indicateur de chargement](https://material.angular.io/components/progress-spinner/overview) lors de la connexion.
 2. Ajouter une [Barre de progression](https://material.angular.io/components/progress-bar/overview) lors du chargement d'un ou plusieurs articles.

## 7 - Refactorisation

### 7.1 - Articles

1. Créer les modules `ProductModule`, `ProductRoutingModule` et déplacer les `handlers` correspondants.
2. Factoriser le contenu du `handler` d'article avec la création d'un composant `ProductComponent`.
3. Mettre en place le [lazyloading](https://angular.io/guide/router#milestone-6-asynchronous-routing) du module.

### 7.2 - Authentification

1. Créer le module `AuthModule` et créer un composant `AuthSigninComponent` réutilisable afin de factoriser le `handler` de connexion.

 
## 8 - Persistance de l'authentification
 
 1. Ajouter le token obtenu lors de la connexion dans le [LocalStorage](https://developer.mozilla.org/fr/docs/Web/API/Storage/LocalStorage).
 2. Supprimer le token dans la méthode `signout`

## 9 - Intercepteurs

### 9.1 - Redirection 
 
 1. Créer un [intercepteur](https://angular.io/guide/http#intercepting-requests-and-responses) afin de simplifier l'url des différentes requêtes.

### 9.2 - Gestion des erreurs

 1. Créer un [intercepteur](https://angular.io/guide/http#intercepting-requests-and-responses) afin de centraliser les erreurs de requête.
 2. Afficher les erreurs de requête à l'aide d'une [snackbar](https://material.angular.io/components/snack-bar/overview).

### 9.3 - Mise en place du cache

 1. Créer un [intercepteur](https://angular.io/guide/http#intercepting-requests-and-responses) afin de mettre en place un système simple de cache pour les requêtes.

### 9.4 - Authentification des requêtes

 1. Créer un [intercepteur](https://angular.io/guide/http#intercepting-requests-and-responses) afin de mettre en place une vérification du token avant l'envoi de requêtes.
 
## 10 - Authentification des routes

 1. Créer un [garde](https://angular.io/guide/router#milestone-5-route-guards) afin de protéger l'accès aux routes qui le nécessitent. 
