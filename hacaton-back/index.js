






const TelegramBot = require('node-telegram-bot-api');

const token = '6940159062:AAENAk1wC_-kn2eYJlZlKBOxJszlcSIXUHs'


const bot = new TelegramBot(token, { polling: true });

// node --version # Should be >= 18
// npm install @google/generative-ai

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyDk47uP_P2YqLoozSUDmgkgZVtU1776E4Q";

async function runChat(messege) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            {
                role: "user",
                parts: [{ text: "Привет" }],
            },
            {
                role: "model",
                parts: [{ text: "Привет! 👋 Рад знакомству!  Я твой личный помощник по вопросам работы и бизнеса в Казахстане.  Чем могу тебе помочь сегодня? 🤔  Хочешь узнать о трендах на рынке труда,  начать свой бизнес или получить совет по развитию карьеры?" }],
            },
        ],
    });

    const result = await chat.sendMessage(messege);
    const response = result.response;
    console.log(response.text());
    return response.text();
}




bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text
    const startMsg = `**Добро пожаловать в твоего личного помощника по вопросам работы и бизнеса в Казахстане!** 👋

Чем я могу тебе помочь сегодня? 🤔

- **Тренды на рынке труда:** Узнай о востребованных профессиях, зарплатах и советах по поиску работы.
- **Создание бизнеса:** Начни свое дело с нуля с помощью пошаговых руководств, советов и подключения к ресурсам.
- **Развитие карьеры:** Получи советы экспертов по продвижению по карьерной лестнице, переговорам о зарплате и поддержанию баланса между работой и личной жизнью.

Все это **БЕСПЛАТНО**! 🙌

Просто задай свой вопрос, и я сразу же предоставлю тебе нужную информацию.

Например:

- Какие сейчас самые востребованные профессии?
- Как открыть ИП в Казахстане?
- Как вести переговоры о повышении зарплаты?

**Начнем!** 🚀`
    const ss = await runChat(text)
    if(text === '/start'){
        const userName = msg.from.first_name;

       
        bot.sendMessage(chatId, `Привет, ${userName} !${startMsg}`);
    } else { await bot.sendMessage(chatId, ss); }
   
   
});

// Обработка команды /start