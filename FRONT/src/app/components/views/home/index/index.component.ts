import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "src/app/services/produto.service";
import { Produto } from "src/app/models/Produto";
import { ItemVenda } from "src/app/models/item-venda";
import { ItemVendaService } from "src/app/services/item-venda.service";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
    produtos!: Produto[];

    constructor(
        private produtoService: ProdutoService,
        private itemService: ItemVendaService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.produtoService.list().subscribe((produtos) => {
            this.produtos = produtos;
        });
    }

    adicionar(produto: Produto): void {
        let item: ItemVenda = {
            produto: produto,
            quantidade: 1,
            preco: produto.preco,
            produtoId: produto.id!,
            carrinhoId: localStorage.getItem("carrinhoId")! || "",
        };
        this.itemService.create(item).subscribe((item) => {
            localStorage.setItem("carrinhoId", item.carrinhoId!);
            this.router.navigate(["/home/carrinho"]);
        });
    }
}
