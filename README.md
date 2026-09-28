# nexusdynamic.org

The NexusDynamic website: <https://nexusdynamic.org/>

A static [SvelteKit](https://svelte.dev/docs/kit) site with [Tailwind CSS](https://tailwindcss.com/), deployed to GitHub Pages.

## Updating the content

All text and links are in [`src/lib/content.ts`](src/lib/content.ts):

- `site`: title, intro, footer links and citation
- `heroLinks`: the buttons under the intro
- `featured`: the large cards (LSL Viewer, Rise Together)
- `sections`: the card grids (liblsl.dart, Timing and latency, Flutter packages)
- `research`: the research paradigm section

To add a project, add an entry to the right section's `projects` array. Images go in `static/img/`; reference them as `/img/name.webp`.

## Development

Requires Node (the version in `.node-version`) and pnpm (`corepack enable` picks up the version in `package.json`).

```sh
pnpm install
pnpm dev       # local dev server
pnpm lint      # prettier + eslint
pnpm check     # type check
pnpm build     # static build into ./build
pnpm preview   # serve the build
```

`pnpm format` fixes formatting.

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`). Pull requests run lint, type check and build but do not deploy.

## Dependencies

Dependabot (`.github/dependabot.yml`) opens a weekly PR with grouped minor and patch updates, separate PRs for major updates, and a PR for GitHub Actions updates. CI runs on each PR, so a green PR is safe to merge.

TypeScript is held at 6.x until `typescript-eslint` and `svelte-check` support 7.
