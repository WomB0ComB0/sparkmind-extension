import axios from 'axios';

const studyGuidePrompt = (topic: string, websiteData: string): string => `
You are a helpful AI assistant creating a 
concise and informative study guide on the 
topic of "${topic}" using information extracted 
from the provided website content.

## Website Content:

\`\`\`
${websiteData} 
\`\`\`

## Study Guide Requirements:

* **Concise and Focused:**  Prioritize key 
concepts and essential information for 
understanding the topic. 
* **Organized Structure:** Divide the content 
into logical sections (e.g., Introduction, Key 
Concepts, Examples, Applications, Summary) 
using headings and subheadings.
* **Clear Language:** Use plain language and 
avoid jargon where possible.
* **Examples and Illustrations:** When 
applicable, include illustrative examples to 
aid understanding.

## Begin generating the study guide:
`;

const fetchDescriptionFromURL = async (url: string) => {
  try {
    const { data } = await axios.get(
      `https://slave-api.vercel.app/v1/opengraph/description?url=${url}`,
    );

    return data.ogDescription;
  } catch (error) {
    throw new Error(`${error instanceof Error ? error.message : 'An unknown error occurred'}`);
  }
};

export { studyGuidePrompt, fetchDescriptionFromURL };
