export class Tarea{
    // Campos de clase
    private _nombre: string; 
    private _estado: boolean;

    public get estado(): boolean {
        return this._estado;
    }
    public set estado(value: boolean) {
        this._estado = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
        // Constructor
    constructor(nombre:string,estado:boolean){
        this._nombre = nombre;
        this._estado = estado;
    }
/*     // Versión Miguel
    private _nombre:string | undefined;
    private _estado:boolean | undefined;
    private _id:number | undefined;

    public get nombre(): string | undefined {
        return this._nombre;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public get estado(): boolean | undefined {
        return this._estado;
    }

    public set estado(estado: boolean | undefined) {
        this._estado = estado;
    }

    public get id(): number | undefined {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }


    constructor (nombre?: string,estado?:boolean,id?:number) {
        this._nombre = nombre;
        this._estado = false;
        this._id= id;
    }


    static from(json : { nombre?: string , estado?: boolean, id?: number } ){
        return Object.assign(new Tarea(),json);
    } */

}