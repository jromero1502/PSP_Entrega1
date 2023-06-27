import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { TaskModel } from '../models/tasks/tasks.model';
import { filter, map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private tasksCollection: CollectionReference<DocumentData>

  private readonly collectionName = 'tasks'

  constructor(
    private firestore: Firestore
  ) { 
    this.tasksCollection = collection(this.firestore, this.collectionName)
  }

  saveTask(task: TaskModel) {
    if (task.id) {
      return setDoc(doc(this.firestore, this.collectionName, task.id), task)
    } else {
      return addDoc(this.tasksCollection, task)
    }
  }

  deleteTask(task: TaskModel) {
    return deleteDoc(doc(this.firestore, this.collectionName, task.id ?? ''))
  }

  getByEmail(email: string) {
    return collectionData(this.tasksCollection, {
      idField: 'id'
    }).pipe(
      map(res => res.filter(t => t['createdBy'] === email))
    )
  }
}
