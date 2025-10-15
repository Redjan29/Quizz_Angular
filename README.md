# Angular Quiz (version simplifiée)

Ceci est une version simplifiée du projet **Angular Quiz**. J'ai réduit le dataset côté backend pour le rendre plus lisible et j'ai allégé quelques textes dans les templates UI pour un rendu plus naturel en français.

## Prérequis
- Node.js (v18+ recommandé). Angular 19 fonctionne généralement avec Node 18/20.
- npm
- (optionnel) json-server (mais on peut utiliser `npx json-server` sans installation globale)

## Installer les dépendances
Ouvrir un terminal à la racine du projet `r:\angular-quiz` et lancer :

```powershell
npm install
```

## Lancer le backend mock (json-server)
Option 1 (sans installation globale) :

```powershell
npx json-server --watch backend/db.json --port 3000
```

Option 2 (installer globalement) :

```powershell
npm install -g json-server
json-server --watch backend/db.json --port 3000
```

L'API sera alors disponible sur http://localhost:3000/categories

## Lancer le frontend (Angular)
Dans un autre terminal, lancer :

```powershell
npm start
# ou directement
npx ng serve --open
```

L'application sera servie par défaut sur http://localhost:4200

## Lancer tout en une commande (PowerShell)
Un petit helper PowerShell est fourni dans `scripts/start-dev.ps1` : il ouvre deux fenêtres PowerShell (une pour json-server et une pour `ng serve`). Pour l'utiliser :

```powershell
.\scripts\start-dev.ps1
```

> Note : le script ouvre deux nouvelles fenêtres PowerShell et laisse les processus actifs.

## Restauration des fichiers
Si tu veux revenir aux templates d'origine, je peux restaurer les fichiers modifiés (`header`, `home`, `quiz`, `question`, `answer`, `result`, `footer`) via git si le projet est sous contrôle de version.

## Problèmes courants
- Si `npm start` indique qu'il manque `ng`, utilise `npx ng serve`.
- Si un port est occupé, change le port avec `--port` pour `ng serve` ou `json-server`.
- Si des warnings `EBADENGINE` s'affichent (packages demandant Node >= 20), ils sont généralement non bloquants ; si le build échoue, envisager une mise à jour de Node.

---

Si tu veux, je peux aussi :
- Restaurer les textes originaux.
- Réduire encore le nombre de composants (fusionner header/footer dans app.component, etc.).

Dis-moi ce que tu préfères ensuite.
# AngularQuiz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.17.

## Migration History
- **Angular 16.1.7** → **Angular 19.2.17** (Migration completed successfully)
- **TypeScript**: 5.8.3 (compatible with Angular 19)
- **RxJS**: 7.8.2
- **Zone.js**: 0.15.1

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
