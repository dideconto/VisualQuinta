import { Produto } from "src/app/models/Produto";

export interface ItemVenda {
    id?: number;
    quantidade: number;
    preco: number;
    produto: Produto;
    produtoId: number;
    carrinhoId?: string;
    criadoEm?: Date;
}
