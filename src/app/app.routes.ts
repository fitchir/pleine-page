import { Routes } from '@angular/router';
import { Catalogue } from './catalogue/catalogue';
import { Fiche } from './fiche/fiche';
import { Panier } from './panier/panier';
import { PageIntrouvable } from './page-introuvable/page-introuvable';

export const routes: Routes = [
  { path: '', component: Catalogue, pathMatch: 'full' },
  { path: 'livre/:id', component: Fiche },
  { path: 'panier', component: Panier },
  { path: '**', component: PageIntrouvable }
];