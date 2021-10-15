import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "src/app/models/Categoria";
import { Produto } from "src/app/models/Produto";
import { CategoriaService } from "src/app/services/categoria.service";
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
    categorias!: Categoria[];
    categoriaId!: number;

    constructor(
        private produtoService: ProdutoService,
        private categoriaService: CategoriaService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.categoriaService.list().subscribe((categorias) => {
            this.categorias = categorias;
        });

        this.route.params.subscribe((params) => {
            this.id = params.id;
            if (this.id != undefined) {
                this.produtoService.getById(this.id).subscribe((produto) => {
                    this.nome = produto.nome;
                    this.descricao = produto.descricao;
                    this.quantidade = produto.quantidade;
                    this.preco = produto.preco;
                    this.categoriaId = produto.categoriaId;
                    console.log(produto.categoriaId);
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
            categoriaId: this.categoriaId,
        };
        //Chamar o create do service
        this.produtoService.create(produto).subscribe((produto) => {
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
            categoriaId: this.categoriaId,
        };
        this.produtoService.update(produto).subscribe((produto) => {
            console.log(produto);
            this.router.navigate(["produto/listar"]);
        });
    }
}
