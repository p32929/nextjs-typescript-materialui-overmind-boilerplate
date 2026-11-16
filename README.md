# nextjs-typescript-materialui-overmind-boilerplate

A ready-to-use starter for a Next.js app in TypeScript, with Material-UI and Overmind state already wired together. Instead of spending the first hour of every project on setup, you clone it and start on your actual pages.

It was made in 2020 and uses the Material-UI v4 and Overmind versions of that time, so check them before you use it for a new project.

## What's included

1. **Next.js** with TypeScript and a `type-check` script
2. **Material-UI** with a theme file and a shared colour palette
3. **Overmind** state — state, actions and a typed helper, hooked up in `_app`
4. **SSR-safe bits** — a `_document` that injects MUI's server-side styles, plus a `NoSsr` wrapper
5. **Small helpers I always need** — `AppBarOffset`, dialog title/actions wrappers, an SVG icon renderer

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

1. [nextjs_typescript_materialui_usm_boilerplate](https://github.com/p32929/nextjs_typescript_materialui_usm_boilerplate) — same stack, usm-redux instead of Overmind
2. [nextjs-typescript-overmind-shadcn-boilerplate](https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate) — Overmind with shadcn/ui instead of Material-UI
3. [react-typescript-materialui-overmind-boilerplate](https://github.com/p32929/react-typescript-materialui-overmind-boilerplate) — the plain React version

## License

MIT License — Copyright (c) 2020 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make this boilerplate better.

## Share

<a href="https://p32929.github.io/share/?repo=nextjs-typescript-materialui-overmind-boilerplate"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
