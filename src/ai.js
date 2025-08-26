import { chatCompletion } from "@huggingface/inference";


const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
Format the response in markdown for better readability.
`;

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            accessToken: import.meta.env.VITE_HF_ACCESS_TOKEN, 
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe!` },
            ],
            max_tokens: 1024,
        });

        return response.choices[0].message.content;
    } catch (err) {
        console.error("Error fetching recipe:", err.message);
        return "Sorry, I couldn't fetch a recipe right now.";
    }
}
