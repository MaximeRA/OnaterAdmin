import { Component, OnInit } from '@angular/core';
import {Produit} from './produit';
import {ProduitService} from './produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ProduitService]
})
export class ProduitsComponent implements OnInit {
  produits: Produit[];

  constructor(private router: Router,
              private produitService: ProduitService) {
  }

  getProduits(): void {
    this.produitService.getProduits()
    .then(produits => {
      this.produits = produits;
    });
  }

  ngOnInit(): void {
    this.getProduits();
  }

  update(id: string): void {
    this.router.navigate(['/produit/update', id]);
  }

  remove(id: string): void {
    this.produitService.remove(id)
      .then(() => {
        this.getProduits();
      });
  }

  viewDetail(id: string): void {
    this.router.navigate(['/produit/detail', id]);
  }

}
