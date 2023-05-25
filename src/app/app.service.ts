import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class AppService {
    private url = 'https://5l2z1qnym5.execute-api.us-east-1.amazonaws.com/Prod/activities';
    
    //starshipList: Starship[] | undefined;
    
    constructor(private httpClient: HttpClient) { }
    data : any;

}