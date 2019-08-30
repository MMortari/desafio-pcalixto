import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formulario: any;
  formularioEdit: any;
  contacts: any[];

  modalEditar = false;

  constructor(private contactsService: ContactsService){}

  ngOnInit() {
    this.formulario = {
      first_name: "",
      last_name: "",
      phone: "",
      email: ""
    }
    this.formularioEdit = {
      first_name: "",
      last_name: "",
      phone: "",
      email: ""
    }

    this.getContactsFromApi();
  }

  getContactsFromApi() {
    this.contactsService.list().subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }

  createNewContact() {
    this.contactsService.create(this.formulario).subscribe(() => {
      this.getContactsFromApi();
    })
  }

  toggleModal(contact?: any) {
    if(contact) {
      this.formularioEdit = contact;
    }
    this.modalEditar = !this.modalEditar;
  }

  editContact() {
    this.contactsService.update(this.formularioEdit).subscribe(() => {
      this.getContactsFromApi();
    })
    this.toggleModal();
  }

  deleteContact(id) {
    this.contactsService.delete(id).subscribe(() => {})
    this.contacts = this.contacts.filter(contact => contact.id != id);
  }

}
