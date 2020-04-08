import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {InvoicesComponent} from "./components/invoices/invoices.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'invoice',
    pathMatch: 'full',
    component: InvoicesComponent
  },
];
