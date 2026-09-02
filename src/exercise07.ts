import { readFileSync } from 'node:fs';

export type Gradebook = {
  [studentName: string]: {
    [subjectName: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const filePath = new URL('../data/gradebook.json', import.meta.url);
  const fileContents = readFileSync(filePath, 'utf-8');
  const gradebook = JSON.parse(fileContents) as Gradebook;

  const grades = Object.values(gradebook)
    .map((studentGrades) => studentGrades[subject])
    .filter((grade) => grade !== undefined);

  if (grades.length === 0) {
    return 0;
  }

  const total = grades.reduce((sum, grade) => sum + grade, 0);

  return total / grades.length;
}
