
import OpenAI from "openai";
const openai = new OpenAI();

// Create an instance of the OpenAI class
const client = new OpenAI({
    apiKey: `${apiKey}`,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);