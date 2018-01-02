import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Platform} from './platform';

@Injectable()
export class PlatformsService {

  protected URL = 'http://localhost:3000/api/platforms';

  constructor(protected http: HttpClient) {
  }

  /**
   * Find an object by its identifier
   * @param id the object identifier
   * @returns gets the object found
   */
  public findById(id: any): Observable<Platform> {
    return this.http.get<Platform>(this.URL + '/' + id);
  }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.URL, {params: params});
  }

  /**
   * Delete an object by its identifier field
   * @param id the object identifier
   * @returns gets the response
   */
  public delete(id): Observable<Platform> {
    return this.http.delete<Platform>(this.URL + '/' + id);
  }

  /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
  public insert(data: Platform): Observable<Platform> {
    return this.http.post<Platform>(this.URL, JSON.stringify(data));
  }

  /**
   * Update specific object into DB
   * @param data the object to be updated
   * @returns gets the response
   */
  public update(data: Platform): Observable<Platform> {
    return this.http.put<Platform>(this.URL + '/' + data.id, JSON.stringify(data));
  }
}
