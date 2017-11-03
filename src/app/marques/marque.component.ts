
import {Component, OnInit} from '@angular/core';
import {Marque} from './marque';
import {MarqueService} from './marque.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-marques ',
  templateUrl: './marques.component.html',
  styleUrls: ['../app.component.css'],
  providers: [MarqueService]
})

export class MarqueComponent implements OnInit {
  marques: Marque[];

  constructor(private router: Router,
              private marqueService: MarqueService) {
  }

  /**
   * Gets the existing marques
   */
  getMarques(): void {
    this.marqueService.getMarques()
      .then(marques => {
        this.marques = marques;
      });
  }

  ngOnInit(): void {
    this.getMarques();
  }

  update(id: string): void {
    this.router.navigate(['/marque/update', id]);
  }

  remove(id: string): void {
    this.marqueService.remove(id)
      .then(() => {
        this.getMarques();
      });
  }

  viewDetail(id: string): void {
    this.router.navigate(['/marque/detail', id]);
  }
}
