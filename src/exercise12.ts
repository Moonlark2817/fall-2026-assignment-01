export type RemoteUser = {
  id: number;
  name: string;
  email: string;
};

export async function fetchUserEmails(): Promise<string[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const users = (await response.json()) as RemoteUser[];

  return users.map((user) => user.email);
}
