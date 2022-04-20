import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from '../data.service';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {
public formations:any[];
userId;
userdoc;
nombreAchat;
authState: any = null;

constructor(
            private data:DataService,public afAuth: AngularFireAuth) {
              
            }
         
  
           
  async ngOnInit() {
    // Id current user 
   const  utilisateur= await this.afAuth.currentUser.then( data  => {
      
      this.userId=data.uid;
    })
    this.userdoc=this.data.users.find(user=>user.Uid===this.userId);
    
    this.nombreAchat=this.userdoc.nbAchat;
    console.log("nombre"+this.nombreAchat);
   
    
this.formations=this.data.formationslist;


}

}
