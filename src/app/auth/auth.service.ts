import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


interface AuthResponseData {
    kind: string;
    idToekn: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService
{
    constructor(private http: HttpClient){}

    signup(email: string, password: string)
    {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkmhG7H5KnnZ5wrFgNyaiSFYQKhOGvOe8',
        {
           email: email,
           password: password,
           returnSecureToekn: true
        }
        );
    }
}