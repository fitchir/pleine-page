import { Injectable, computed, effect, signal } from '@angular/core';
import { LIVRES } from './livres';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private readonly cle = 'pleine-page-panier';
  private readonly ids = signal<number[]>(this.charger());

  readonly nombre = computed(() => this.ids().length);

  readonly livres = computed(() =>
    LIVRES.filter(livre => this.ids().includes(livre.id))
  );

  readonly total = computed(() =>
    this.livres().reduce((somme, livre) => somme + livre.prix, 0)
  );

  constructor() {
    effect(() => {
      localStorage.setItem(this.cle, JSON.stringify(this.ids()));
    });
  }

  contient(id: number): boolean {
    return this.ids().includes(id);
  }

  ajouter(id: number): void {
    this.ids.update(ids =>
      ids.includes(id) ? ids : [...ids, id]
    );
  }

  retirer(id: number): void {
    this.ids.update(ids => ids.filter(livreId => livreId !== id));
  }

  vider(): void {
    this.ids.set([]);
  }

  private charger(): number[] {
    try {
      const contenu = localStorage.getItem(this.cle);

      if (contenu === null) {
        return [];
      }

      const donnees: unknown = JSON.parse(contenu);

      if (!Array.isArray(donnees)) {
        return [];
      }

      return [
        ...new Set(
          donnees.filter(
            (id): id is number =>
              typeof id === 'number' && Number.isInteger(id)
          )
        )
      ];
    } catch {
      return [];
    }
  }
}