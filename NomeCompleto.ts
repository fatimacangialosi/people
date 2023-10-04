/* - Creare una interfaccia che descrive una persona con le seguenti props:
 nomeCompleto di tipo nomeCompleto e dataDiNascita di tipo dataDiNascita
- Creare una interfaccia nomeCompleto con due props: nome e cognome, due stringhe
- Creare una interfaccia dataDiNascita con tre props: giorno, mese, anno, 3 number

Crearli all'interno di un app angular chiamata people (utilizzare ng new people), 
dentro la cartella src/app */
export interface NomeCompleto {
  nome: string;
  cognome: string;
}
