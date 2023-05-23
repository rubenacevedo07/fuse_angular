import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { Task } from './task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Items } from 'app/model/items';
import { Student } from 'app/model/student';
import { FirebaseService } from 'app/shared/firebase/firebase.service';

interface Spaceships {
    name: string
  };

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  itemList : Items[] = [];
  id : string = '';
  name : string = '';

  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!'
    }
  ];

  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void {}

  drop(event: CdkDragDrop<Task[]|null>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);
  /**
   * Constructor
   */
  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService, private service : FirebaseService)
  {
    /*const itemCollection = collection(this.firestore, 'spaceships');
   
    this.item$ = collectionData(itemCollection);
    console.log(itemCollection);*/
  }

  // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.getAllItems();
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

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    getAllItems(){
      this.service.getAllItems().subscribe(res => {

        this.itemList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })

      }, err => {
        alert('test rac');
      })
    }

  
}

