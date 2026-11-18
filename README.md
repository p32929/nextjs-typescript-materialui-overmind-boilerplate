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

## You might also like

<p><a href="https://openstore.pfay.workers.dev/cards/p32929/0?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/0.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/0.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (1)"></picture></a><a href="https://openstore.pfay.workers.dev/cards/p32929/1?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/1.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/1.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (2)"></picture></a><br><a href="https://openstore.pfay.workers.dev/cards/p32929/2?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/2.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/2.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (3)"></picture></a><a href="https://openstore.pfay.workers.dev/cards/p32929/3?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929/3.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929/3.svg?n=4&amp;repo=nextjs-typescript-materialui-overmind-boilerplate&amp;theme=light" width="50%" align="top" alt="More apps by p32929 on OpenStore (4)"></picture></a></p>

<p><a href="https://p32929.github.io/share/?repo=nextjs-typescript-materialui-overmind-boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
