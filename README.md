# AFG CODER - prototype

پروژهٔ اولیهٔ AFG CODER — پلتفرم آپلود و راه‌اندازی خودکار پروژه‌های وب، تولید تصویر/ویدیو با AI، و پشتیبانی از طریق ربات تلگرام.

ویژگی‌های اولیه:
- ورود با گوگل و ایمیل (NextAuth) — 2FA ایمیلی قابل افزودن
- آپلود پروژه (فایل‌ها یا zip) و صف پردازش برای اصلاح خودکار با AI و deploy
- پنل admin محدود به jabircitez88@gmail.com
- نمونهٔ worker و bot تلگرام

نیازمندی‌ها برای اجرا محلی:
- Node.js 18+
- PostgreSQL (DATABASE_URL)
- Redis (REDIS_URL)
- S3-compatible storage یا fallback محلی
- SMTP / SendGrid برای ارسال ایمیل
- GOOGLE_CLIENT_ID و GOOGLE_CLIENT_SECRET
- NEXTAUTH_URL و NEXTAUTH_SECRET
- TELEGRAM_BOT_TOKEN
- OPENAI_API_KEY (برای AI fixer یا تولید تصویر)
- STRIPE keys (اختیاری برای پرداخت)

برای اجرای اولیه:
1. npm install
2. npm run dev
3. worker: npm run worker
4. bot: npm run bot
