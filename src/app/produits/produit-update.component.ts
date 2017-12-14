import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Produit} from './produit';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProduitService} from "./produit.service";
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';

@Component({
  selector: 'update-produit',
  templateUrl: './produit-update.component.html',
  styleUrls: ['../app.component.css']
})

export class ProduitUpdateComponent implements OnInit {
  produitUpdateForm: FormGroup;
  produit: Produit;
  options: FancyImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
};

  constructor(private produitService: ProduitService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
    };

    ngOnInit(): void {
      this.route.params
      .switchMap((params: Params) => this.produitService.getProduit(params['id']))
      .subscribe(produit => {
        this.produit = produit;
        this.buildForm();
      });
    }

    onUpload(file: UploadedFile) {
    console.log(file.response);
  }

    buildForm(): void {
      this.produitUpdateForm = this.formBuilder.group({
        idProd: [this.produit.idProd, Validators.required],
        nom: [this.produit.nom, Validators.required],
        soustitre: [this.produit.soustitre, Validators.required],
        ridCatGoogle: [this.produit.ridCatGoogle, Validators.required],
        img1: [this.produit.img1, Validators.required]
      });
    }

    update(): void {
      let produit = this.produitUpdateForm.value as Produit;
      this.produitService.update(produit)
        .then(() => {
          this.router.navigate(['/produits']);
      })
    }

    goBack(): void {
    this.location.back();
    }

}
