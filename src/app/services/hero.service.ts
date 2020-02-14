import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private api_url: string = 'https://api.github.com/users/';

  constructor(
    private http: HttpClient,
  ) { }

  public getHeroData(nickname: string): Observable<any> {
    return this.http.get(`${this.api_url}${nickname}`);
  }
}
