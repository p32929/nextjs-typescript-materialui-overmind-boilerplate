# nextjs-typescript-materialui-overmind-boilerplate

A Next.js + TypeScript starter with Material-UI and Overmind already wired together, plus the small helpers I end up rewriting in every project.

## What's included

- **Next.js** with TypeScript and a `type-check` script
- **Material-UI** with a theme file and a shared colour palette
- **Overmind** state — state, actions and a typed helper, hooked up in `_app`
- **SSR-safe bits** — a `_document` that injects MUI's server-side styles, plus a `NoSsr` wrapper
- **Small helpers I always need** — `AppBarOffset`, dialog title/actions wrappers, an SVG icon renderer

## Project layout

```
pages/_app.tsx                 Overmind provider + MUI theme
pages/_document.tsx            MUI server-side style injection
pages/index.tsx                your first page
src/Overmind/                  OvermindState / OvermindActions / helper
src/Others/Theme.ts            MUI theme
src/Others/AppColors.ts        colour palette
src/Components/Helpers/        AppBarOffset, NoSsr, dialog + SVG helpers
```

## Getting started

```bash
git clone https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate.git
cd nextjs-typescript-materialui-overmind-boilerplate
npm install
npm run dev        # http://localhost:3000

npm run build      # production build
npm run type-check # tsc, no emit
```

## Related boilerplates

- [nextjs_typescript_materialui_usm_boilerplate](https://github.com/p32929/nextjs_typescript_materialui_usm_boilerplate) — same stack, usm-redux instead of Overmind
- [nextjs-typescript-overmind-shadcn-boilerplate](https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate) — Overmind with shadcn/ui instead of Material-UI
- [react-typescript-materialui-overmind-boilerplate](https://github.com/p32929/react-typescript-materialui-overmind-boilerplate) — the plain React version

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate/)
