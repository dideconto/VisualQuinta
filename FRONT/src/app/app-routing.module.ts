import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrinhoComponent } from "./components/views/home/carrinho/carrinho.component";
import { IndexComponent } from "./components/views/home/index/index.component";
import { ProdutoCadastrarComponent } from "./components/views/produto/produto-cadastrar/produto-cadastrar.component";
import { ProdutoListarComponent } from "./components/views/produto/produto-listar/produto-listar.component";

const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "home/carrinho",
        component: CarrinhoComponent,
    },
    {
        path: "produto/listar",
        component: ProdutoListarComponent,
    },
    {
        path: "produto/cadastrar",
        component: ProdutoCadastrarComponent,
    },
    {
        path: "produto/cadastrar/:id",
        component: ProdutoCadastrarComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
