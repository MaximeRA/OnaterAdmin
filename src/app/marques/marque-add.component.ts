import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Marque} from './marque';
import {Router} from '@angular/router';
import {MarqueService} from "./marque.service";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';


@Component({
  selector: 'add-marque',
  templateUrl: './marque-add.component.html',
  styleUrls: ['../app.component.css']
})

export class MarqueAddComponent implements OnInit{
  marqueAddForm: FormGroup;
  marque = new Marque();

  constructor(private marqueService: MarqueService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
            };

    ngOnInit(): void {
      this.buildForm();
    }


    buildForm(): void {
      this.marqueAddForm = this.formBuilder.group({
        nomMarque: ['', Validators.required],
        desMarque: [''],
        nomMarqueAmazon: ['', Validators.required],
        premPage: [false],
        afficher: [false],
        afficherPromotion: [false],
        afficherIndex: [false],
        desCourt: [' ', Validators.required],
        nbSemReappro: [0],
        nbJourReappro: [0],
        couleurMarque: [''],
        condComm: ['', Validators.required],
        ridFournisseur: [0],
        emailFicheTechnique: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        urlPubHaut: ['', Validators.required],
        desPromos: ['', Validators.required],
        triProdVendu: [false],
        triProdIndispo: [false],
        phraseHaut: ['', Validators.required],
        prixMin: ['', Validators.required],
        ts: ['', Validators.required],
        margin: [0],
        ownBrand: [false],
        nbRefs: [0]
      });
    }

    add(): void {
      let marque = this.marqueAddForm.value as Marque;
      this.marqueService.add(marque)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/marques']);
      })
    }

    goBack(): void {
      this.location.back();
    }
  }
