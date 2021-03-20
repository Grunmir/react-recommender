import { Get } from '../common/http';

export async function getQuestion(id) {
  const { data } = await Get(`pm-questions/${id}`);
  return data;
}
