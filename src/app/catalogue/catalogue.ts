import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-catalogue',
  imports: [RouterLink],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css'
})
export class Catalogue {
  protected readonly catalogue = inject(LivresService);

  protected readonly filtre = signal('');

  protected readonly resultats = computed(() =>
    this.catalogue.livres().filter(livre =>
      livre.auteur
        .toLowerCase()
        .includes(this.filtre().toLowerCase())
    )
  );
}