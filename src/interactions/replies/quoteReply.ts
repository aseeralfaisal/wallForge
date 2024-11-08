import { ChatInputCommandInteraction, type CacheType } from "discord.js";
import { apiLlmInstance } from "@apiLlmInstance";
import { LLM_MODEL, LLM_SYSTEM_MESAGE, LLM_USER_PROMPT } from "@config";

const generateQuote = async () => {
  const response = await apiLlmInstance.post("/chat/completions", {
    model: LLM_MODEL,
    messages: [
      { role: "system", content: LLM_SYSTEM_MESAGE },
      { role: "user", content: LLM_USER_PROMPT }
    ]
  });
  const result = response.data?.choices[0]?.message?.content;
  return result;
};

let lastQuote: string;
export async function quoteReply(interaction: ChatInputCommandInteraction<CacheType>) {
  try {
    let replyQuote = await generateQuote();

    console.log(replyQuote === lastQuote);
    if (replyQuote === lastQuote) {
      replyQuote = await generateQuote();
      console.log(replyQuote);
    }
    await interaction.reply(replyQuote);
    lastQuote = replyQuote;
  } catch (error) {
    console.log(error);
  }
}
