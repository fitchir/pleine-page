# Réponses au TP Plein Page

## Question 1
Dans app.ts, le signal title contient la valeur 'pleine-page'.
Le template app.html utilise cette valeur pour afficher le message "Hello, plein-page".

## Question 2
Le tableau des routes dans app.routes.ts est vide.
Aucun composant n'est associé à l'adresse d'accueil: router-outlet n'a donc rien à afficher.

## Question 3
le message était affiché dans app.html, le template du composant App.

## Question 4
La route { path: '', composent: Catalogue } a été ajoutée.
Elle associe l'adresse d'acueil au composant Ctalogue.

## Question 5
Un neuvième livre appait automatiquement.
la boucle @for parcourt le tableau et affiche chaque livre.

## Question 6
Le computed resultats recalcule la liste lorsque le signal filtre change.
le template affiche resultatss(). length : le compteur se met donc à jours.

## Question 7 
toLowerCase() est appliqué au nom de l'auteur et au texte recherché.
la recherche ne distingue donc pas les majuscules des miniscules.

## Question 8 
sans withComponetInputBinding(), le router ne fournit plus id à l'input du composant.
la lecture de cet input obligatoire peut déclencher l'erreur NG0950 :
"Input is required but not value is available yet. "

## Question 9 
Angular réutilise le composant Fiche lorsque seul le paramètre id change.
le signal ajoute conserve true, donc le bouton reste gris.

## Question 10
F5 redémarre l'application et crée une nouvelle instance du composant .
le signal ajoute est alors réinitialisé.

## Question 11 
Le panier pourrait être sauvegardé dans localStorage pour survivre à F5 
un service partagé permettrait aussi de le conserver lors des navigations entre les pages, mais ne suffit pas à lui seul pour F5.

## Question 12 
un accès direct à une fiche reçoit normalement un code HTTP 404.
Le fichier 404.html contient l'application Angular, qui démarre et
affiche la fiche correspondant à l'adresse.

## Question 13
## Q13
Le lien Catalogue mène à :
https://fitchir.github.io/pleine-page/
Le réglage --base-href /pleine-page/ définit la base des liens internes.