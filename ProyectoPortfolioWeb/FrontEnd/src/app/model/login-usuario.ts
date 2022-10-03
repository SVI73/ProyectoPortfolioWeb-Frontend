export class LoginUsuario {
    nombreUsuario: string = 'nombre';
    password: string = '';

    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
