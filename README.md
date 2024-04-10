<a href="https://track75.com">
  <img alt="Track 75" src="https://github.com/behrendco/track-75/blob/main/public/images/opengraph-image.png" width="100%">
  <h1 align="center">Track 75</h1>
  <p align="center"><b>75 Hard & Soft Challenge Tracker</b></p>
</a>

<h4 align="center">
  <a href="https://twitter.com/behrend_co">
    <img src="https://img.shields.io/twitter/follow/behrend_co?style=flat&label=%40behrend_co&logo=twitter&color=0bf&logoColor=fff" alt="Twitter" />
  </a>
  <a href="https://track75.com">
    <img src="https://img.shields.io/badge/Website-track75.com-blue" alt="Website" />
  </a>
  <a href="https://github.com/behrendco/track-75/pull">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs welcome!" />
  </a>
</h4>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#self-hosting"><strong>Self Hosting</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Introduction

Track 75 is a web app for tracking progress on the 75 Hard & 75 Soft Challenges. Currently supports 75 Soft only.

## Features

- [75 Soft](https://track75.com)
- [Daily Progress Tracking](https://track75.com)
- [Streak Counter](https://track75.com)
- [Personal Best Counter](https://track75.com)

## Tech Stack

- [Next.js](https://nextjs.org/) – Framework
- [TypeScript](https://typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Shadcn](https://ui.shadcn.com/) – UI
- [Supabase](https://supabase.com/) – Auth/Database
- [Vercel](https://vercel.com/) – Hosting

## Self Hosting

1. Clone the repo

```bash
git clone https://github.com/behrendco/track-75.git
```

2. cd into the repo

```bash
cd track-75
```

3. Copy the `.env.example` file

```bash
cp .env.example .env
```

4. Setup environment variables

```bash
vim .env
```

5. Quickstart

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## Contributing

Here's how you can contribute:

- [Open an issue](https://github.com/behrendco/track-75/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/behrendco/track-75/pull) to add new features/make quality-of-life improvements/fix bugs.
