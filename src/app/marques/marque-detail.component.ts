import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Marque} from './marque';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {MarqueService} from "./marque.service";

@Component({
  selector: 'marque-detail',
  templateUrl: './marque-detail.component.html',
  styleUrls: ['../app.component.css']
})

export class MarqueDetailComponent implements OnInit{
  marque: Marque;

  constructor(
    private marqueService: MarqueService,
    private route: ActivatedRoute,
    private location: Location
  ){};

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.marqueService.getMarque(params['id']))
      .subscribe(marque => this.marque = marque);
  }

  goBack(): void{
    this.location.back();
  }
}
