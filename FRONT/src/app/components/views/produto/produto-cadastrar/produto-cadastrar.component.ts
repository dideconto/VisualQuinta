import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Produto } from "src/app/models/Produto";
import { ProdutoService } from "src/app/services/produto.service";

@Component({
    selector: "app-produto-cadastrar",
    templateUrl: "./produto-cadastrar.component.html",
    styleUrls: ["./produto-cadastrar.component.css"],
})
export class ProdutoCadastrarComponent implements OnInit {
    id!: number;
    nome!: string;
    descricao!: string;
    preco!: number;
    quantidade!: number;

    constructor(
        private service: ProdutoService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = params.id;
            if (this.id != undefined) {
                this.service.getById(this.id).subscribe((produto) => {
                    this.nome = produto.nome;
                    this.descricao = produto.descricao;
                    this.quantidade = produto.quantidade;
                    this.preco = produto.preco;
                });
            }
        });
    }

    cadastrar(): void {
        let produto: Produto = {
            nome: this.nome,
            descricao: this.descricao,
            quantidade: this.quantidade,
            preco: this.preco,
        };
        //Chamar o create do service
        this.service.create(produto).subscribe((produto) => {
            console.log(produto);
            this.router.navigate(["produto/listar"]);
        });
    }

    editar(): void {
        let produto: Produto = {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            quantidade: this.quantidade,
            preco: this.preco,
        };
        this.service.update(produto).subscribe((produto) => {
            console.log(produto);
            this.router.navigate(["produto/listar"]);
        });
    }
}
