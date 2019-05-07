import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[]         =  [];
  pages          =  1;
  current_page   =  1;
  total_users    =  0;
  loading       =  false;
  title = 'api';

  constructor(private cliente: ClienteService) { }

  listUsers(page: number = 1) {
    this.loading = true;
    this.cliente.getListUsers(page).subscribe((resp: any) => {
      try {
        this.usuarios       = resp.data;
        this.current_page   = resp.page;
        this.total_users    = resp.total;
        this.pages          = resp.total_pages;
      } catch (error) {
        this.usuarios       = [];
      }
      this.loading = false;
    });
  }

  ngOnInit() {
    this.listUsers();
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }

}
