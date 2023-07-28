// Importamos la clase "Xmen" que se exporta desde el módulo "./classes/xmen.class.ts"
// Para elo, usamos la desestructuración de objetos porque esa clase se exporta a través de un objeto
import { Xmen } from './classes/xmen.class';


const wolverine = new Xmen("Logan", "Wolverine");

wolverine.imprimir();