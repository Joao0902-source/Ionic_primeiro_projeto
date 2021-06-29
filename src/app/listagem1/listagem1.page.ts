import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listagem1',
  templateUrl: './listagem1.page.html',
  styleUrls: ['./listagem1.page.scss'],
})
export class Listagem1Page implements OnInit {

  constructor(private navCtrl : NavController) {}
  ngOnInit() {

  }
  ShowPageHome(){
    this.navCtrl.navigateForward('home');
  }

    ShowPageCadastro(){
      this.navCtrl.navigateForward('cadastro');
  }
}

