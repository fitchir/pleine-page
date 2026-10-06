import { Component, computed, signal } from '@angular/core';
import { LIVRES } from '../livres';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  imports: [RouterLink],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css'
})
export class Catalogue {
  protected readonly filtre = signal('');

  protected readonly resultats = computed(() =>
    LIVRES.filter(l =>
      l.auteur.toLowerCase().includes(this.filtre().toLowerCase())
    )
  );
}