//   export function formatName(
//   firstName: string,
//   lastName: string,
//   middleName?: string | null,
// ): string {
//   return '';
// }

export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
  let formattedName = lastName + ', ' + firstName;

  if (middleName) {
    formattedName += ' ' + middleName[0] + '.';
  }

  return formattedName;
}
