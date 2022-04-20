import { Injectable } from '@angular/core';
import {
  AngularFireStorage
} from '@angular/fire/compat/storage';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'
import { FieldValue, increment } from 'firebase/firestore';
import { Subject } from 'rxjs';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  formationslist:any[];
  users:any[];
  imgurl:String;
  
  isready:boolean=false;
  imgobserver:Subject<String>=new Subject<String>();
  

  constructor(public firestore: Firestore,public af: AngularFireStorage) {
    this.imgobserver.subscribe(value=>this.imgurl=value);
    this.getformations();
    this.getusers();
   
  }
   getFirestoreImages(ref:string){
    this.af.ref(ref).getDownloadURL().subscribe(imgUrl => {
      this.imgurl=imgUrl;
      console.log(imgUrl);
      this.imgobserver.next(imgUrl);
    });
  }
  getusers() {
    const dbInstance = collection(this.firestore, 'users');
    getDocs(dbInstance)
      .then((response) => {
        this.users = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }
  getformations() {
    const dbInstance = collection(this.firestore, 'formations');
    getDocs(dbInstance)
      .then((response) => {
        this.formationslist = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }
  adduser(value: any) {
    const dbInstance = collection(this.firestore, 'users');
    addDoc(dbInstance, value)
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  updateUser(id: string) {
    const dataToUpdate = doc(this.firestore, 'users', id);
    
    updateDoc(dataToUpdate, { nbAchat:1})
      .then(() => {
        alert('Data updated');
        
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  
}
