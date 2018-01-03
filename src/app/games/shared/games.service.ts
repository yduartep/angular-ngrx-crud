import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Game} from './game';

@Injectable()
export class GamesService {
  protected URL = 'http://localhost:3000/api/games';

  constructor(protected http: HttpClient) {
  }

  /**
   * Find an object by its identifier
   * @param id the object identifier
   * @returns gets the object found
   */
  public findById(id: any): Observable<Game> {
    return this.http.get<Game>(this.URL + '/' + id);
  }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?): Observable<Game[]> {
    return this.http.get<Game[]>(this.URL, {params: params});
  }

  /**
   * Delete an object by its identifier field
   * @param id the object identifier
   * @returns gets the response
   */
  public delete(id): Observable<Game> {
    return this.http.delete<Game>(this.URL + '/' + id);
  }

  /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
  public insert(data: Game): Observable<Game> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<Game>(this.URL, JSON.stringify(data), {headers: headers});
  }

  /**
   * Update specific object into DB
   * @param game the object to be updated
   * @returns gets the response
   */
  public update(game: Game): Observable<Game> {
    const id = game.id;
    const data = {...game};
    delete data.id;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<Game>(this.URL + '/' + id, JSON.stringify(data), {headers: headers});
  }
}
