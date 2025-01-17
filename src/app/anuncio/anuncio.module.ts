import { EditarAnuncioComponent } from './editar-anuncio/editar-anuncio.component';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';
import { anuncioRoutes } from './anuncio.routing';
import { NgModule } from '@angular/core';

import { ListaAnunciosComponent } from './lista-anuncios.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(anuncioRoutes)
    ],
    exports: [],
    declarations: [ListaAnunciosComponent,
    CadastroAnuncioComponent,
    EditarAnuncioComponent],
    providers: [],
})
export class AnuncioModule { }
