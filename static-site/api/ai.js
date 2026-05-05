export default async function handler(req, res) {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "No input" });
    }

    const prompt = `
Ты — эксперт по стартапам, дизайну и продуктам.

Создай креативные референсы для проекта:

Название: ${title}
Описание: ${description}

Ответ должен быть структурирован:

1. 💡 Идеи (5 штук)
2. 🎨 Стиль дизайна
3. 🌐 Референсы (какие сайты или направления)
4. 🧠 UX (как должен работать продукт)

Пиши коротко, понятно и полезно.
`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();

    res.status(200).json({
      result: data.choices?.[0]?.message?.content || "Ошибка генерации"
    });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
