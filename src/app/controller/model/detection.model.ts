import { Etudiant } from './etudiant.model';
import { Identified } from './identified.model';

export class Detection {
  public id: number;
  public etudiant: Etudiant;
  public identified: Identified;
}
