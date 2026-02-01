# Objectif du projet HRnet : 
Migrer l’application interne HRnet d’une version jQuery vers React, afin de moderniser l’architecture, réduire la dette technique et améliorer la maintenabilité du code.

## Technologies : 
Avant : HTML, CSS, JavaScript, jQuery, jQuery UI, jQuery Modal, jQuery DataTables
Après : React, React Router, MUI DataTable, Vite, LocalStorage

## Fonctionnalités principales :
- Création d’un employé via un formulaire React
- Sauvegarde des données dans le localStorage
- Affichage d’une modale de confirmation
- Liste des employés via un tableau permettant la suppression d'un employé

## Remplacement des plugins jQuery : 
Refactoriser un plugin jQuery en React = la modale.
Pour les autres fonctionnalités (datepicker, menus, tableau), utilisation de librairies React existantes.

## En Bref : 
La migration vers React permet une application plus moderne, maintenable et évolutive, tout en respectant les fonctionnalités existantes de HRnet.

## Lancer le projet :

### En mode développement : 
```javascript
`  npm install
  npm run dev`
```

### En mode production (audit Lighthouse recommandé) :
`  npm run build
  npm run preview`
    http://localhost:4173