import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import {MatTableModule} from '@angular/material/table';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface PetElement {
    id: string;
    type: string;
    price: string;
  }

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent {
    isLoading = true;
    dataSource! : any;
    data! : any;
    displayedColumns: string[] = ['id', 'type', 'price'];
    
  

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  
  /**
   * Constructor
   */
  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService, private httpClient: HttpClient)
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
        this.loadPets();
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
   
    getPets(): Observable<any> {
        return this.httpClient
          .get<any>('api/pets');
    }

    loadPets() {    
        return this.getPets().subscribe((data1: {}) => {
          this.dataSource = data1;
          this.isLoading = false;
        });
        
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

  
}
