import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';

const API_BASE_URL: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Movie[]> {
    // api request
    // htt.get() => return an observable
    return this.http.get<Movie[]>(`${API_BASE_URL}/seances`);
  }
}
