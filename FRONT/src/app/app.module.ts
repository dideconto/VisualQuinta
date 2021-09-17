import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
//Imports dos componentes
import { AppComponent } from "./app.component";
import { ProdutoCadastrarComponent } from "./components/views/produto/produto-cadastrar/produto-cadastrar.component";
import { ProdutoListarComponent } from "./components/views/produto/produto-listar/produto-listar.component";

@NgModule({
    declarations: [
        AppComponent,
        ProdutoCadastrarComponent,
        ProdutoListarComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
