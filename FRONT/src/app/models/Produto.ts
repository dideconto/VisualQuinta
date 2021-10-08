import { Categoria } from "./Categoria";

export interface Produto {
    id?: number;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: number;
    categoriaId: number;
    categoria?: Categoria;
}
