import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPENAI_KEY
});

export default openai;