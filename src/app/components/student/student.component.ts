import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { FirebaseService } from 'app/shared/firebase/firebase.service';
import { Student } from 'app/model/student';
import {MatTableModule} from '@angular/material/table';
import {NgFor} from '@angular/common';
import { DataSource } from '@angular/cdk/table';
//import { MatTableDataSource, MatSort } from '@angular/material';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  isLoading = true;
  dataSource! : any;
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'mobile'];

  columns = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: Student) => `${element.id}`,
    },
    {
      columnDef: 'first_name',
      header: 'Name',
      cell: (element: Student) => `${element.first_name}`,
    },
    {
      columnDef: 'last_name',
      header: 'Lastname',
      cell: (element: Student) => `${element.last_name}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: Student) => `${element.email}`,
    },
    {
      columnDef: 'mobile',
      header: 'Mobile',
      cell: (element: Student) => `${element.mobile}`,
    },
  ];
 
  

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  
  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };

  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  mobile: string = '';

   /**
   * Constructor
   */
  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService, private data: FirebaseService) { }

  ngOnInit(): void {
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

    this.getAllStudents();
    this.isLoading = false;        
    
    //dataSource = this.studentsList;

  }

  

  getAllStudents() {

    this.data.getAllStudents().subscribe(res => {

      this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        
        return data;
      

      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.mobile = '';
  }

  addStudent() {
    if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
      alert('Fill all input fields');
      return;
    }

    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.mobile = this.mobile;

    this.data.addStudent(this.studentObj);
    this.resetForm();

  }

  updateStudent() {

  }

  deleteStudent(student: Student) {
    if (window.confirm('Are you sure you want to delete ' + student.first_name + ' ' + student.last_name + ' ?')) {
      this.data.deleteStudent(student);
    }
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
