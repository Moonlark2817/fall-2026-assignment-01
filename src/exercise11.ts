import { appendFile } from 'node:fs/promises';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} ${statusMessage}\n`;

  await appendFile(filePath, logEntry, 'utf-8');
}
