import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProdutoCadastrarComponent } from './components/views/produto/produto-cadastrar/produto-cadastrar.component';
import { ProdutoListarComponent } from './components/views/produto/produto-listar/produto-listar.component';

@NgModule({
    declarations: [AppComponent, ProdutoCadastrarComponent, ProdutoListarComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
