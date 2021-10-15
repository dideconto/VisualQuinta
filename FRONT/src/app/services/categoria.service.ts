import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "../models/Categoria";

@Injectable({
    providedIn: "root",
})
export class CategoriaService {
    private baseURL = "http://localhost:5000/api/categoria";

    constructor(private http: HttpClient) {}

    list(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`${this.baseURL}/list`);
    }
}