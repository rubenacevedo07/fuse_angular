import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from 'app/model/student';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  //getAll Items
  getAllItems(){
    return this.afs.collection('/Items').snapshotChanges();
  }

  // add student
  addStudent(student : Student) {
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  // delete student
  deleteStudent(student : Student) {
     this.afs.doc('/Students/'+student.id).delete();
  }

  // update student
  updateStudent(student : Student) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
