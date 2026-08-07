# 🤖 Frontend Interview Coach

Frontend mülakatlarına hazırlanan geliştiriciler için tasarlanmış, Google Gemini 3.5 Flash-Lite modeli destekli, akıllı bir mülakat koçu ve teknik eğitmendir.
Bu uygulama, kullanıcıyı sadece mülakat sorularına hazırlamakla kalmaz; Senior bir eğitmen gibi kavramların mantığını öğretir, gerçek hayattan benzetmeler yapar ve profesyonel kod örnekleri sunar.

<img width="524" height="685" alt="Screenshot 2026-08-05 at 23 30 42" src="https://github.com/user-attachments/assets/5fb5e676-fb94-4cbf-b63f-fc9bf7f0d19d" />


## 🚀 Özellikler

- **Uzman AI Persona:** Senior Frontend Developer ve Teknik Eğitmen rolünde özelleştirilmiş sistem komutları (System Prompt).
- **Mülakat Odaklı Yanıtlar:** Soruları sadece cevaplamakla kalmaz; mülakat taktikleri, gerçek hayat benzetmeleri ve takip soruları sunar.
- **Zengin Metin Desteği:** `react-markdown` ile kod blokları, tablolar ve listeler içeren profesyonel formatlı yanıtlar.
- **Modern Teknik Mimari:** Logic ve UI'ın birbirinden ayrıldığı **Custom Hook** (`useGemini`) yapısı.
- **Responsive Arayüz:** Tailwind CSS ile oluşturulmuş, kullanıcı dostu ve modern sohbet ekranı.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** React (Vite)
- **AI Engine:** Google Gemini AI API (`@google/genai`)
- **Styling:** Tailwind CSS & Lucide Icons
- **Metin İşleme:** React Markdown
- **State Yönetimi:** React Hooks (Custom Hooks, useState)

## 📦 Kurulum

Projeyi yerel bilgisayarınızda çalıştırmak için şu adımları izleyin:

1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/kullanici-adiniz/frontend-mentor-chatbot.git
   cd frontend-mentor-chatbot
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Çevresel değişkenleri ayarlayın:**
   Ana dizinde `.env` dosyası oluşturun ve Gemini API anahtarınızı ekleyin:
   ```env
   VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
   ```

4. **Uygulamayı başlatın:**
   ```bash
   npm run dev
   ```

## 🧠 Proje Yapısı

Uygulama, sürdürülebilir ve okunabilir bir kod yapısı için modüler olarak kurgulanmıştır:

- `src/hooks/useGemini.js`: API isteklerini ve mesaj geçmişini yöneten merkezi mantık.
- `src/constants/prompts.js`: AI'nın karakterini belirleyen detaylı sistem komutları.
- `src/components/`: Atomik yapıya uygun parçalanmış UI bileşenleri (Chatbot, User).

## 🎯 Gelecek Planları

- [ ] Sohbet geçmişini saklamak için **LocalStorage** entegrasyonu.
- [ ] Farklı mülakat seviyeleri (Junior/Senior) için mod seçimi.
- [ ] State yönetimini optimize etmek için **useReducer** geçişi.
- [ ] Karanlık mod desteği.

---
