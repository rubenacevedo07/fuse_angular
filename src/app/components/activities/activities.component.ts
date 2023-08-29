import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Activity, ActivityI } from './../../model/activity';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  private url = 'https://5l2z1qnym5.execute-api.us-east-1.amazonaws.com/Prod/activities';
  
  data! : any;
  data1! : any;
  data2! : any;
  activity! : Activity;
  response! : Response;
  activityList: Activity[] | undefined;

  /**
   * Constructor
   */
  constructor(private route: ActivatedRoute, private _fuseMediaWatcherService: FuseMediaWatcherService, private httpClient: HttpClient)
  {
  }

  // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
     /**
      * 
fetch('https://bf8fqwvrr8.execute-api.us-east-1.amazonaws.com/Prod/hello', {mode:'cors'})


      */
        this.loadActivities();
        this.loadPets();
        this.loadFalse();
       // fetch('https://bf8fqwvrr8.execute-api.us-east-1.amazonaws.com/Prod/hello', {mode:'cors'})
       // fetch('api/starwars', {mode:'cors'})
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened if
                if ( matchingAliases.includes('lg') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });

            
    }

    loadActivities() {    
      return this.getSpaceships().subscribe((data: {}) => {
        this.data = data;
      });
    }
      loadPets() {    
      return this.getPets().subscribe((data1: {}) => {
        this.data = data1;
      });
    }
      loadFalse() {    
      return this.getFalse().subscribe((data2: {}) => {
        this.data = data2;
      });
    }
      

    getSpaceships(): Observable<any> {
      return this.httpClient
        .get<any>('https://run.mocky.io/v3/7a7a924f-72dd-4cd7-aefa-12be3608e839');
    }

    getPets(): Observable<any> {
      return this.httpClient
        .get<any>('https://oou88whst5.execute-api.us-east-2.amazonaws.com/Stage/pets?api_key=FGl1oSRv7P6uMCSsyjprh2xpurPJDa6q6Hx3BBX2');
    }

    getFalse(): Observable<any> {
      return this.httpClient
        .get<any>('https://oou88whst5.execute-api.us-east-2.amazonaws.com/Stage/pets/');
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
