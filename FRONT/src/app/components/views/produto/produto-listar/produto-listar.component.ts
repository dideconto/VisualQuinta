import { Component, OnInit } from "@angular/core";
import { Produto } from "src/app/models/Produto";
import { ProdutoService } from "src/app/services/produto.service";

@Component({
    selector: "app-produto-listar",
    templateUrl: "./produto-listar.component.html",
    styleUrls: ["./produto-listar.component.css"],
})
export class ProdutoListarComponent implements OnInit {
    produtos: Produto[] = [];
    colunasExibidas: string[] = ["id", "nome", "editar"];

    constructor(private service: ProdutoService) {}

    ngOnInit(): void {
        this.service.list().subscribe((produtos) => {
            this.produtos = produtos;
        });
    }
}
