import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real app, ensure API_KEY is set. 
// If undefined, the service handles initialization gracefully but calls will fail if not provided.

let ai: GoogleGenAI | null = null;

try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_INSTRUCTION = `
당신은 '산들강 웅포마을'의 친절한 디지털 가이드 '웅포지기'입니다.
방문객들에게 마을의 아름다움, 숙박 정보, 체험 프로그램, 그리고 여행 팁을 안내하는 역할을 맡고 있습니다.

다음 정보를 바탕으로 답변해주세요:
1. 마을 특징: 금강과 함라산이 어우러진 힐링 마을, 전북 익산시 웅포면 위치.
2. 숙박: 황토방 별채, 강변 펜션 등 자연 친화적인 숙소 보유.
3. 체험: 블루베리 수확, 뱃놀이, 고추장 만들기 등 가족 단위 체험 가능.
4. 말투: 정중하고 따뜻하며, 시골의 정이 느껴지는 친근한 말투를 사용하세요. (예: "~합니다", "~한답니다", "어떠신가요?")
5. 정보가 없는 질문에는 "죄송하지만 그 부분은 마을 운영위원회(063-000-0000)로 직접 문의해주시면 정확히 안내해 드리겠습니다."라고 답변하세요.
`;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};