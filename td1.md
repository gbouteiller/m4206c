# TD 1 : Application Angular

Le but de ce TD  est de réaliser une application Angular ayant le comportement suivant :

 1. L'utilisateur arrive sur un écran de connexion, avec deux champs Identifiant et Mot de passe, sur lequel il doit s'identifier.
 2. Si ses identifiants sont incorrects, un message le lui indique.
 3. Sinon, il arrive sur une page sur laquelle il peut visualiser une liste de ses articles.
 4. Au clic sur un des articles, le contenu dudit article se charge dans une nouvelle page avec possibilité de retour à la liste.
 5. A tout moment, l'utilisateur peut se déconnecter, auquel cas, il est redirigé vers l'écran de connexion.

> Le TD est à réaliser sur l'IDE en ligne Stackblitz à partir de l'environnement configuré disponible [ICI](https://stackblitz.com/edit/m4206c-td1).

## 1 - Modèles

Les données utilisées dans cet exercice sont récupérées du générateur [**jsonplaceholder**](https://jsonplaceholder.typicode.com).

 1. Dans le dossier `post` créer un fichier `post.ts` contenant une interface **Typescript** décrivant la structure d'un [article](https://jsonplaceholder.typicode.com/posts/1).
 

	> [Rappel : interface ](https://www.typescriptlang.org/docs/handbook/interfaces.html)
	
	> *N'oubliez pas d'**exporter** votre interface afin de pouvoir l'importer dans d'autres fichiers.*

 3. Faire de même pour la structure d'un utilisateur dans un fichier `user.ts` du dossier `auth`.

## 2 - Routage

1. Pour chacune des trois "pages" de notre application, créer le `handler` correspondant *( le contenu du handler sera défini dans la partie 3 )*. 
	 > **Rappel :** un handler est un simple composant Angular; nous utilisons le terme handler pour désigner un composant chargé par le routeur et dont le comportement peut être assimilé à une page. Ce composant a la particularité de ne pas posséder de sélecteur.
	 > **Rappel :** tout composant est composé de 3 fichiers : un script d'extension .ts, un template d'extension .html, une feuille de style d'extension .css
	 >**Rappel :** n'oubliez pas de déclarer vos composants dans le module principal.
	 
2. Ajouter les trois routes correspondantes dans le module de routage `AppRoutingModule` avec une url dynamique pour le handler représentant un article
	> [Rappel : documentation routage](https://angular.io/guide/router)
	 

## 3 - Interface Utilisateur

### 3.1 - Connexion

 1. Dans le `handler` correspondant à la page principale, définir le `template` permettant de saisir le nom d'utilisateur et le mot de passe avec un bouton de connexion.
 2. Dans un premier temps définir le bouton de connexion comme une balise lien vers la page des articles.
	 > [Rappel : documentation routage](https://angular.io/guide/router#router-links)

### 3.2 - Liste des articles

 1. Dans le `handler` correspondant à la page des articles, créer une propriété `posts` de type `Post[]` ayant pour valeur les 3 premiers articles se trouvant [ICI](https://jsonplaceholder.typicode.com/posts?userId=3) 
 2.  Définir le `template` permettant d'afficher la liste des articles à partir de la propriété.
	 > [Rappel : documentation *ngFor](https://angular.io/guide/displaying-data#showing-an-array-property-with-ngfor)
 
 3. Un clic sur un article doit ouvrir la page de l'article correspondant. 

### 3.3 - Article

 1. Dans le `handler` correspondant à la page d'un article, définir le template permettant d'afficher le titre de l'article et son contenu ainsi qu'un bouton retour vers la liste.

## 4 - Services

### 4.1 - Articles

 1. Créer un service `PostService` dans un fichier `post.service.ts` du répertoire `post` avec :
	  - une propriété `posts` de type `Post[]` ayant pour valeur les 3 premiers articles se trouvant [ICI](https://jsonplaceholder.typicode.com/posts?userId=3) 
	  - une méthode `readMany` retournant la liste des articles
	  - une méthode `read` retournant un article de la liste à partir de son `id`.
	
 2. Injecter le service dans les bons composants et remplacer les données correspondantes. 

### 4.2 - Authentification

 1. Créer un service `AuthService` dans un fichier `auth.service.ts` du répertoire `auth` avec :
	 - une propriété `users` de type `User[]` ayant pour [valeur](https://jsonplaceholder.typicode.com/users/3).
	 - une propriété `user` de type `User` 
	 - une méthode `signin` comparant la valeur de ses arguments avec celles des utilisateurs, affichant un message d'erreur si l'utilisateur n'existe pas, le redirigeant vers la page des articles sinon après avoir initialisé la variable `user.`
	 - une méthode `signout` réinitialisant la variable `user` et redirigeant l'utilisateur vers la page de connexion.
	 
 2. Injecter le service dans les bons composants et remplacer les données correspondantes.

## 5 - Puis

 1. Récupérer le contenu des données à partir d'appels HTTP à l'A.P.I. **jsonplaceholder**.
