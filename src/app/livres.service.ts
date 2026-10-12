import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Livre } from './livres';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);

  private readonly liste = signal<Livre[]>([]);
  readonly livres = this.liste.asReadonly();

  readonly chargement = signal(true);
  readonly erreur = signal<string | null>(null);

  constructor() {
    const url = new URL('livres.json', this.document.baseURI).href;

    this.http.get<Livre[]>(url).subscribe({
      next: livres => {
        this.liste.set(livres);
        this.chargement.set(false);
      },
      error: () => {
        this.erreur.set('Impossible de charger les livres.');
        this.chargement.set(false);
      }
    });
  }
}