# 👋 Hi, I'm Nam Nguyen

I'm a software engineer. This is my blog. I write about my experiences and thoughts on software development.

## 📬 Connect with Me

- 🌍 **GitHub**: [@karify98](https://github.com/karify98)
- ✍ **Blog**: karify98.is-a.dev/blogs

💡 **Always exploring new tech & building solutions!** 🚀

## 🗣️ Multilingual content

- The site ships with English (`en`) and Vietnamese (`vi`) locales.
- Blog posts live in `_posts/<locale>/`. Add new English posts to `_posts/en/` and Vietnamese posts to `_posts/vi/`.
- Keep the same slug (file name) across locales to link translations of the same article.
- Front matter follows the existing shape (`title`, `date`, `coverImage`, `author`, etc.). Assets remain relative to `public/`.
- If a translation is missing, the site gracefully falls back to the English version while staying on the selected language.

## 🛠️ Development workflow

- `pnpm` is the preferred package manager. When registry access is blocked, fall back to `npm` commands; the project scripts will honor the existing `node_modules` without forcing new downloads.
- `npm run lint` now wraps `next lint` and automatically falls back to `tsc --noEmit` when ESLint packages cannot be fetched (for example, in air-gapped environments). A globally installed ESLint is used when available.
- `npm run build` executes the standard Next.js build; run it after lint/type checking to validate the production bundle.
