import { writeFile } from 'node:fs/promises';

type RemoteComment = {
  postId: number;
  id: number;
  email: string;
};

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }

  const comments = (await response.json()) as RemoteComment[];

  const summaries: CommentSummary[] = comments.map((comment) => ({
    postId: comment.postId,
    id: comment.id,
    commenterEmail: comment.email.trim(),
  }));

  const filteredSummaries = summaries.filter(
    (comment) => !comment.commenterEmail.endsWith('.org'),
  );

  const jsonOutput = JSON.stringify(filteredSummaries, null, 2);

  await writeFile(outputPath, jsonOutput, 'utf-8');

  return filteredSummaries.length;
}
