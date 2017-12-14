import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Produit} from './produit';
import {Router} from '@angular/router';
import {ProduitService} from "./produit.service";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';

@Component({
  selector: 'add-produit',
  templateUrl: './produit-add.component.html',
  styleUrls: ['../app.component.css']
})

export class ProduitAddComponent implements OnInit {
  produitAddForm: FormGroup;
  produit = new Produit();
  fileuploaderFileChange(files: FileList){
  }
  options: FancyImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: './assets/image/#id',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
};

  constructor(private produitService: ProduitService,
              private router: Router,
              private location: Location,
              private FormBuilder: FormBuilder){
              };

  ngOnInit(): void {
    this.buildForm();
  }

  onUpload(file: UploadedFile) {
  console.log(file.response);
}

  buildForm(): void{
    this.produitAddForm = this.FormBuilder.group({
      ref: ['', Validators.required],
      refFournisseur: ['', Validators.required],
      typeProd: [''],
      ean: ['', Validators.required],
      ean2: ['', Validators.required],
      nomAmazon: ['', Validators.required],
      nom: ['', Validators.required],
      nomIndex: ['', Validators.required],
      soustitre: ['', Validators.required],
      des: ['', Validators.required],
      img1: [0],
      img2: [0],
      img3: [0],
      img4: [0],
      afficher: [false],
      afficherAmazon: [false],
      afficherGoogle: [false],
      ingredient: ['', Validators.required],
      presentation: ['', Validators.required],
      modedemploi: ['', Validators.required],
      lesplus: ['', Validators.required],
      important: ['', Validators.required],
      lesmoins: ['', Validators.required],
      ridMarque: [0, Validators.required],
      ridGamme: [0, Validators.required],
      ridCat: [0, Validators.required],
      ridCat2: [0, Validators.required],
      ridCat3: [0, Validators.required],
      ridCat4: [0, Validators.required],
      ridCat5: [0, Validators.required],
      ridCatAmazone: [0, Validators.required],
      ridCat2Amazone: [0, Validators.required],
      ridCatLeguilde: [0, Validators.required],
      ridCatGoogle: [0, Validators.required],
      lienforum: ['', Validators.required],
      prodAsso: ['', Validators.required],
      analyse: [''],
      precautions: [''],
      analyseNomRnj: [''],
      analyseNomUnite: [''],
      premPage: [false],
      promo: [false],
      semaine: [false],
      new: [false],
      stock: [0, Validators.required],
      stockMin: [0, Validators.required],
      poids: [0, Validators.required],
      longueur: [0, Validators.required],
      hauteur: [0, Validators.required],
      peremption: ['', Validators.required],
      tva: [0, Validators.required],
      searchterms1: ['', Validators.required],
      searchterms2: ['', Validators.required],
      searchterms3: ['', Validators.required],
      searchterms4: ['', Validators.required],
      searchterms5: ['', Validators.required],
      itemform: ['', Validators.required],
      prixAchat: [0, Validators.required],
      prixAchatCatalogue: [0, Validators.required],
      baisseDesPrix: [''],
      neolog: [false, Validators.required],
      ideeProduit: ['', Validators.required],
      lettreMax: [false],
      qteLettreMax: [0, Validators.required],
      remiseAchat: [0, Validators.required],
      offreFournisseur: [0, Validators.required],
      gratuiteAchat: ['', Validators.required],
      gratuiteAchete: [0, Validators.required],
      gratuiteOffert: [0, Validators.required],
      qteMinReappro: [0, Validators.required],
      ridIndex: [0, Validators.required],
      majProduit: [false, Validators.required],
      infos: ['', Validators.required],
      stock2mois: [0, Validators.required],
      stock1an: [0, Validators.required],
      stock1anencors: [0, Validators.required],
      majStock: [false, Validators.required],
      dateCreation: ['', Validators.required],
      dateModification: ['', Validators.required],
      dateArrete: [''],
      raisonArrete: [''],
      ridUserMod: [0, Validators.required],
      ridUserAj: [0, Validators.required],
      envSocol: [false],
      contenance: [0, Validators.required],
      ridTypeContenance: [0, Validators.required],
      IngredientNomUnite: ['', Validators.required],
      ingredientNomDjr:	['', Validators.required],
      elaboreAvec:	['', Validators.required],
      modedemploiCombien:	['', Validators.required],
      modedemploiComment:	['', Validators.required],
      modedemploiCure:	['', Validators.required],
      modedemploiPrecaution:	['', Validators.required],
      maxQteSocol:	[0, Validators.required],
      stockMois:	[0, Validators.required],
      ridCatStock:	[0, Validators.required],
      stock12mois:	[0, Validators.required],
      smm:	[0, Validators.required],
      ts:	['', Validators.required],
      dateEnvente:	['', Validators.required],
      colisage:	[0, Validators.required],
      ridProdSubstitution:	[0, Validators.required],
      zoomActif:	[false],
      opFidelite:	[false],
      avecLot:	[false],
      conseil:	[''],
      remiseAchat1:	[0],
      remiseAchat2:	[0],
      ridFamille:	[0],
      poidsNet:	[0],
      poidsNetEnKilo:	[0],
      contenanceNetteEnLitres:	[0],
      salePricePerUnitId:	[0],
      produitQtes: [''],
      marque: [''],
      supportsTextes: [''],
      //avis: [''],
      //categorie: [''],
      //categorie2: [''],
      //categorie3: [''],
      //categorie4: [''],
      //categorie5: [''],
      //produitConseille: [''],
      //produitConseilles: [''],
      /**  *///typeContenance: [''],
      /** MTM *///actifs: [''],
      /** OTO *///bundle: [''],
      /** MTO *///famille: [''],
      //statistiquesProduitVendu: [''],
      /** OTM *///produitScore: [''],
      /** OTM *///produitIngredients: [''],
      /** FK *///gamme: [''],
      /** FK *///favoris: [''],
      /** OTM *///produitsLiaisons: [''],
      /** FK *///produitPrecautions: [''],
      /** FK *///originesGelule: [''],
      /** FK *///excipients: [''],
      /** FK *///index: [''],
      /** MTM *///criteres: [''],
      /** MTM *///labels: [''],

    })
  }

  add(): void {
    let produit = this.produitAddForm.value as Produit;
    this.produitService.add(produit)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/produits']);
      })
    }

  goBack(): void {
    this.location.back();
  }
}
