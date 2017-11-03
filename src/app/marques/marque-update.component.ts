
import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Marque} from './marque';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MarqueService} from "./marque.service";
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'update-marque',
  templateUrl: './marque-update.component.html',
  styleUrls: ['../app.component.css']
})

export class MarqueUpdateComponent implements OnInit {
  marqueUpdateForm: FormGroup;
  marque: Marque;
  fileuploaderFileChange(files: FileList){
  }

  constructor(private marqueService: MarqueService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder) {
    };

    ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.marqueService.getMarque(params['id']))
      .subscribe(marque => {
        this.marque = marque;
        this.buildForm();
      });
    }

    buildForm(): void {
      this.marqueUpdateForm = this.formBuilder.group({
        idMarque: [this.marque.idMarque, Validators.required],
        nomMarque: [this.marque.nomMarque, Validators.required],
        desMarque: [this.marque.desMarque, Validators.required],
        nomMarqueAmazon: [this.marque.nomMarqueAmazon, Validators.required],
        premPage: [this.marque.premPage, Validators.required],
        afficher: [this.marque.afficher, Validators.required],
        afficherPromotion: [this.marque.afficherPromotion, Validators.required],
        afficherIndex: [this.marque.afficherIndex, Validators.required],
        desCourt: [this.marque.desCourt, Validators.required],
        nbSemReappro: [this.marque.nbSemReappro, Validators.required],
        nbJourReappro: [this.marque.nbJourReappro, Validators.required],
        couleurMarque: [this.marque.couleurMarque, Validators.required],
        condComm: [this.marque.condComm, Validators.required],
        ridFournisseur: [this.marque.ridFournisseur, Validators.required],
        emailFicheTechnique: [this.marque.emailFicheTechnique, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        urlPubHaut: [this.marque.urlPubHaut, Validators.required],
        desPromos: [this.marque.desPromos, Validators.required],
        triProdVendu: [this.marque.triProdVendu, Validators.required],
        triProdIndispo: [this.marque.triProdIndispo, Validators.required],
        phraseHaut: [this.marque.phraseHaut, Validators.required],
        ts: [this.marque.ts, Validators.required],
        prixMin: [this.marque.prixMin, Validators.required]
      });
    }

    update(): void {
      let marque = this.marqueUpdateForm.value as Marque;
      this.marqueService.update(marque)
      .then(() => {
        this.router.navigate(['/marques']);
      })
    }

    goBack(): void {
      this.location.back();
    }
  }
