export class Voiture {

    id: number;
    marque: string;
    couleur: string;
    typeMoteur: string;
    prix: number;

    constructor(id:number, marque: string, couleur: string, typeMoteur: string, prix: number) {
        this.id= id;
        this.marque = marque;
        this.couleur = couleur;
        this.typeMoteur = typeMoteur;
        this.prix = prix;
    }
}