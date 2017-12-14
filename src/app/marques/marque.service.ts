import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Marque} from "./marque";
import {Headers, Http, RequestOptions} from '@angular/http';
import {Fournisseur} from "../fournisseurs/fournisseur";

@Injectable()
export class MarqueService {
  private marquesURL = `http://localhost:8000/api/marques`;
  private fournisseursURL = `http://localhost:8000/api/fournisseurs`;
  private headers = new Headers({'Accept': 'application/json'  });


  constructor(private http: Http) {
  };


  /**
   * Return all marques
   * @returns {Promise<Marque[]>}
   */
  getMarques(): Promise<Marque[]> {
    let options = new RequestOptions({ headers: this.headers});
    this.getFournisseurs();
      return this.http.get(this.marquesURL, options)
      .toPromise()
      .then(response => {
        return response.json() as Marque[];
      })
      .catch(this.handleError);
  }

  /**
   * Return all marques
   * @returns {Promise<Fournisseur[]>}
   */
  getFournisseurs(): Promise<Fournisseur[]> {
    let options = new RequestOptions({ headers: this.headers});
      return this.http.get(this.fournisseursURL, options)
      .toPromise()
      .then(response => {
        return response.json() as Fournisseur[];
      })
      .catch(this.handleError);
  }

  /**
   * Returns marque based on id
   * @param id:string
   * @returns {Promise<Marque>}
   */
  getMarque(id: string): Promise<Marque> {
    let options = new RequestOptions({ headers: this.headers});
    const url = `${this.marquesURL}/${id}`;
    return this.http.get(url, options)
      .toPromise()
      .then(response => response.json() as Marque)
      .catch(this.handleError);
  }

  /**
   * Adds new marque
   * @param marque:marque
   * @returns {Promise<Marque>}
   */
  add(marque: Marque): Promise<Marque>{
    let options = new RequestOptions({ headers: this.headers});
    return this.http.post(`${this.marquesURL}`, marque, options)
      .toPromise()
      .then(response => response.json() as Marque)
      .catch(this.handleError);
  }

  /**
   * Removes marque
   * @param id:string
   * @returns {Promise<Marque>}
   */
  remove(id: string): Promise<any>{
    return this.http.delete(`${this.marquesURL}/${id}`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  /**
   * Updates marque that matches to id
   * @param marque:marque
   * @returns {Promise<Marque>}
   */
   update(marque: Marque): Promise<Marque>{
     let options = new RequestOptions({ headers: this.headers});
     return this.http.put(`${this.marquesURL}/${marque.idMarque}`, marque, options)
       .toPromise()
       .then(response => response.json() as Marque)
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
