import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Produit} from "./produit";
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class ProduitService {
  private produitsURL = `http://localhost:8000/api/produits`;
  private headers = new Headers({'Accept': 'application/json'  });


  constructor(private http: Http) {
  };

  /**
   * Return all Produits
   * @returns {Promise<Produit[]>}
   */
  getProduits(): Promise<Produit[]> {
    let options = new RequestOptions({ headers: this.headers});
      return this.http.get(this.produitsURL, options)
      .toPromise()
      .then(response => {
        return response.json() as Produit[];
      })
      .catch(this.handleError);
  }


  /**
   * Returns Produit based on id
   * @param id:string
   * @returns {Promise<Produit>}
   */
  getProduit(id: string): Promise<Produit> {
    let options = new RequestOptions({ headers: this.headers});
    const url = `${this.produitsURL}/${id}`;
    return this.http.get(url, options)
      .toPromise()
      .then(response => response.json() as Produit)
      .catch(this.handleError);
  }

  /**
   * Adds new produit
   * @param produit:Produit
   * @returns {Promise<Produit>}
   */
  add(produit: Produit): Promise<Produit>{
    let options = new RequestOptions({ headers: this.headers});
    return this.http.post(`${this.produitsURL}`, produit, options)
      .toPromise()
      .then(response => response.json() as Produit)
      .catch(this.handleError);
  }

  /**
   * Removes produit
   * @param id:string
   * @returns {Promise<Produit>}
   */
  remove(id: string): Promise<any>{
    return this.http.delete(`${this.produitsURL}/${id}`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  /**
   * Updates produit that matches to id
   * @param produit:Produit
   * @returns {Promise<Produit>}
   */
   update(produit: Produit): Promise<Produit>{
     let options = new RequestOptions({ headers: this.headers});
     return this.http.put(`${this.produitsURL}/${produit.idProd}`, produit, options)
       .toPromise()
       .then(response => response.json() as Produit)
       .catch(this.handleError);
   }



  /**
   * Handles error thrown during HTTP call
   * @param error:any
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
