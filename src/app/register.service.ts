

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './models/user';

@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://10.117.189.184:9595/register/save');
    }

    getById(id: number) {
        return this.http.get('http://10.117.189.184:9595/register/save' + id);
    }

    create(user: User) {
        return this.http.post('http://10.117.189.184:9595/register/save', user);
    }

    update(user: User) {
        return this.http.put('http://10.117.189.184:9595/register/save' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('http://10.117.189.184:9595/register/save' + id);
    }
}
