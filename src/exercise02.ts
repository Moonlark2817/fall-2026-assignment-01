// export function transcribeDNA(dna: string): string {
//   return '';
// }

export class InvalidDNAError extends Error {
  constructor(nucleotide: string) {
    super('Invalid DNA nucleotide: ' + nucleotide);
    this.name = 'InvalidDNAError';
  }
}

export function transcribeDNA(dna: string): string {
  let rna = '';

  for (const nucleotide of dna) {
    if (nucleotide === 'A') {
      rna += 'U';
    } else if (nucleotide === 'T') {
      rna += 'A';
    } else if (nucleotide === 'C') {
      rna += 'G';
    } else if (nucleotide === 'G') {
      rna += 'C';
    } else {
      throw new InvalidDNAError(nucleotide);
    }
  }

  return rna;
}
