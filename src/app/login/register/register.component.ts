import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private chatService: ChatService,
    private alertController: AlertController,
    private router: Router
  ) { }

  form: FormGroup;
  states: any;

  ngOnInit() {
    this.formInit();
  }


  formInit(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      location: ['', Validators.required],
      password: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      sex: ['', Validators.required],
      level: [2, Validators.nullValidator]
    });
    this.states = [    
      {"nome": "Acre", "sigla": "AC"},
      {"nome": "Alagoas", "sigla": "AL"},
      {"nome": "Amapá", "sigla": "AP"},
      {"nome": "Amazonas", "sigla": "AM"},
      {"nome": "Bahia", "sigla": "BA"},
      {"nome": "Ceará", "sigla": "CE"},
      {"nome": "Distrito Federal", "sigla": "DF"},
      {"nome": "Espírito Santo", "sigla": "ES"},
      {"nome": "Goiás", "sigla": "GO"},
      {"nome": "Maranhão", "sigla": "MA"},
      {"nome": "Mato Grosso", "sigla": "MT"},
      {"nome": "Mato Grosso do Sul", "sigla": "MS"},
      {"nome": "Minas Gerais", "sigla": "MG"},
      {"nome": "Pará", "sigla": "PA"},
      {"nome": "Paraíba", "sigla": "PB"},
      {"nome": "Paraná", "sigla": "PR"},
      {"nome": "Pernambuco", "sigla": "PE"},
      {"nome": "Piauí", "sigla": "PI"},
      {"nome": "Rio de Janeiro", "sigla": "RJ"},
      {"nome": "Rio Grande do Norte", "sigla": "RN"},
      {"nome": "Rio Grande do Sul", "sigla": "RS"},
      {"nome": "Rondônia", "sigla": "RO"},
      {"nome": "Roraima", "sigla": "RR"},
      {"nome": "Santa Catarina", "sigla": "SC"},
      {"nome": "São Paulo", "sigla": "SP"},
      {"nome": "Sergipe", "sigla": "SE"},
      {"nome": "Tocantins", "sigla": "TO"}    
]
  }

  async create(){
    await this.chatService.createUser(this.form.value).then(res =>{
      this.form.reset();
      this.presentAlert();
      this.router.navigate(['/']);
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cadastrado',
      message: 'Você foi cadastrado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
