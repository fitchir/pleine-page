import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './panier.html',
  styleUrl: './panier.css'
})
export class Panier {
  protected readonly panier = inject(PanierService);
}
