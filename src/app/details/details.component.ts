import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireStorage
} from '@angular/fire/compat/storage';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
formations:any[];
  nomproduit;
  detailsproduit;
  imgurl;

  userId;
userdoc;
userdocid;
authState: any = null;

  constructor(private route: ActivatedRoute,private data:DataService ,public afAuth: AngularFireAuth
    ) { 
      this.formations=this.data.formationslist;
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = routeParams.get('productId');
  this.nomproduit=productIdFromRoute;
  this.detailsproduit=this.formations.find(formation=>formation.nom===this.nomproduit);
  if(this.data.isready){
  this.data.getFirestoreImages(this.detailsproduit.ref);
  this.imgurl=this.data.imgurl;}
    }

  async ngOnInit() {
    
    // Id current user 
   const  utilisateur= await this.afAuth.currentUser.then( data  => {
      
    this.userId=data.uid;
  })
  this.userdoc=this.data.users.find(user=>user.Uid===this.userId);
  
  this.userdocid=this.userdoc.id;
}

update(){
  this.data.updateUser(this.userdocid);
  }
}
