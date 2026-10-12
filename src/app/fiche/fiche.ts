import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivresService } from '../livres.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-fiche',
  imports: [RouterLink],
  templateUrl: './fiche.html',
  styleUrl: './fiche.css'
})
export class Fiche {
  readonly id = input.required<string>();

  protected readonly catalogue = inject(LivresService);
  private readonly panier = inject(PanierService);

  protected readonly livre = computed(() =>
    this.catalogue.livres().find(l => l.id === Number(this.id()))
  );

  protected readonly ajoute = computed(() =>
    this.panier.contient(Number(this.id()))
  );

  protected readonly suggestions = computed(() =>
    this.catalogue.livres()
      .filter(l => l.id !== Number(this.id()))
      .slice(0, 4)
  );

  protected ajouter(): void {
    const livre = this.livre();

    if (livre) {
      this.panier.ajouter(livre.id);
    }
  }
}