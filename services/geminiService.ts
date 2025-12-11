import { GoogleGenAI, Type } from "@google/genai";

// Helper to ensure API key exists.
// IMPORTANT: Always call this immediately before usage to pick up any environment variable changes.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSiteContent = async (): Promise<{ articles: any[], heroBlurb: string }> => {
  try {
    const ai = getClient();
    const model = "gemini-2.5-flash";
    
    const prompt = `
      You are the content manager for "Carolina Diecast & Figures", a high-end luxury collectibles shop.
      Generate 3 engaging, short blog post summaries about "Sought After Diecast Cars" and one catchy 2-sentence hero sales pitch.
      Return strictly JSON.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            heroBlurb: { type: Type.STRING },
            articles: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  date: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    throw new Error("No content generated");
  } catch (error) {
    console.error("Content generation failed:", error);
    return {
      heroBlurb: "Experience the thrill of precision engineering in the palm of your hand.",
      articles: [
        { title: "The Rise of 1:18 Scale Hypercars", summary: "Why collectors are flocking to detailed resin models.", date: "2023-10-24" },
        { title: "Ghostbusters Ecto-1: A Timeless Classic", summary: "Analyzing the market value of the iconic movie vehicle.", date: "2023-11-02" }
      ]
    };
  }
};

export const generateVeoVideo = async (onProgress: (msg: string) => void): Promise<string> => {
  // Recursive function to handle retry logic
  const attemptGeneration = async (retry: boolean): Promise<string> => {
    try {
      onProgress(retry ? "Retrying launch sequence..." : "Initializing launch sequence...");
      
      const win = window as any;

      // 1. Check for API key selection (mandatory for Veo)
      if (win.aistudio && typeof win.aistudio.hasSelectedApiKey === 'function') {
        const hasKey = await win.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          onProgress("Waiting for clearance (Select API Key)...");
          await win.aistudio.openSelectKey();
        }
      }

      // 2. Create client immediately before usage to ensure latest key
      const ai = getClient();

      onProgress("Igniting Veo-3 engines...");
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Cinematic shot of an astronaut on the red surface of Mars kneeling down to look at a collection of shiny futuristic diecast race cars. 4k resolution, hyper-realistic, dramatic lighting, luxury commercial style.',
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: '16:9'
        }
      });

      onProgress("Rendering simulation (this may take a moment)...");

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        onProgress("Processing orbital data...");
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!videoUri) throw new Error("Video generation returned no URI");

      // Append API key for playback
      return `${videoUri}&key=${process.env.API_KEY}`;

    } catch (error: any) {
      // Handle "Requested entity was not found" specifically which indicates 
      // the selected project/key doesn't have access or a key wasn't selected properly.
      const errorMessage = error.message || JSON.stringify(error);
      const win = window as any;

      if (errorMessage.includes("Requested entity was not found") && !retry) {
        console.warn("API Key issue detected, prompting for selection...");
        onProgress("Authorization failed. Please select a valid Paid API Key.");
        
        if (win.aistudio && typeof win.aistudio.openSelectKey === 'function') {
          // Reset key selection state and prompt user
          await win.aistudio.openSelectKey();
          // Recursively retry once
          return attemptGeneration(true);
        }
      }
      
      console.error("Veo generation failed:", error);
      throw error;
    }
  };

  return attemptGeneration(false);
};