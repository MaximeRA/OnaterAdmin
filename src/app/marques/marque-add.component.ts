import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Marque} from './marque';
import {Router} from '@angular/router';
import {MarqueService} from "./marque.service";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";

@Component({
  selector: 'add-marque',
  templateUrl: './marque-add.component.html',
  styleUrls: ['../app.component.css']
})

export class MarqueAddComponent implements OnInit{
  marqueAddForm: FormGroup;
  marque = new Marque();
  fileuploaderFileChange(files: FileList){
  }

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
        desMarque: ['', Validators.required],
        nomMarqueAmazon: ['', Validators.required],
        premPage: [false, Validators.required],
        afficher: [false, Validators.required],
        afficherPromotion: [false, Validators.required],
        afficherIndex: ['', Validators.required],
        desCourt: [' ', Validators.required],
        nbSemReappro: [0, Validators.required],
        nbJourReappro: [0, Validators.required],
        couleurMarque: ['', Validators.required],
        condComm: ['0', Validators.required],
        ridFournisseur: [0, Validators.required],
        emailFicheTechnique: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        urlPubHaut: ['', Validators.required],
        desPromos: [' ', Validators.required],
        triProdVendu: [false, Validators.required],
        triProdIndispo: [false, Validators.required],
        phraseHaut: ['', Validators.required],
        prixMin: ['', Validators.required],
        ts: ['', Validators.required]
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
