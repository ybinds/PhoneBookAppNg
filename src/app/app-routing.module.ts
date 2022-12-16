import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent},
  { path: 'contacts/:word', component: ContactListComponent},
  { path: 'add-contact', component: ContactInfoComponent},
  { path: 'contact/:id', component: ContactEditComponent},
  { path: '', component: ContactListComponent},
  { path: '**', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myComponents=[
  ContactEditComponent,
  ContactInfoComponent,
  ContactListComponent
]
