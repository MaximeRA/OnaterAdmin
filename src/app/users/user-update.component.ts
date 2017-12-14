import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from "./user.service";
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'update-user',
  templateUrl: './user-update.component.html',
  styleUrls: ['../app.component.css']
})

export class UserUpdateComponent implements OnInit {
  userUpdateForm: FormGroup;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  };

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(params['id']))
      .subscribe(user => {
        this.user = user;
        this.buildForm();
      });
  }

  buildForm(): void {
    this.userUpdateForm = this.formBuilder.group({
      prenom: [this.user.prenom, Validators.required],
      nom: [this.user.nom, Validators.required],
      civilite: [this.user.civilite, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      idClient: [this.user.idClient],
      dateConnexion: [this.user.dateConnexion, Validators.required],
      dateInscription: [this.user.dateInscription, Validators.required],
      newsletterFidelite: [this.user.newsletterFidelite, Validators.required],
      newsletterAvoir: [this.user.newsletterAvoir, Validators.required],
      envoieFidelite: [this.user.envoieFidelite, Validators.required],
      actifClient: [this.user.actifClient, Validators.required],
      envoieEnquete: [this.user.envoieEnquete, Validators.required],
      nbCommande: [this.user.nbCommande, Validators.required],
      envoieRappelWelcome: [this.user.envoieRappelWelcome, Validators.required],
      envoieRappelTreflesX2: [this.user.envoieRappelTreflesX2, Validators.required]
    });
  }

  update(): void {
    let user = this.userUpdateForm.value as User;
    this.userService.update(user)
      .then(() => {
        this.router.navigate(['/users']);
      })
  }

  goBack(): void {
    this.location.back();
  }
}
