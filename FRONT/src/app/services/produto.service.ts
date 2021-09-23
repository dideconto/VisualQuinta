import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/Produto";

@Injectable({
    providedIn: "root",
})
export class ProdutoService {
    private baseURL = "http://localhost:5000/api/produto";

    constructor(private http: HttpClient) {}

    list(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.baseURL}/list`);
    }

    create(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(`${this.baseURL}/create`, produto);
    }

    getById(id: number): Observable<Produto> {
        return this.http.get<Produto>(`${this.baseURL}/getbyid/${id}`);
    }

    update(produto: Produto): Observable<Produto> {
        return this.http.put<Produto>(`${this.baseURL}/update`, produto);
    }
}
