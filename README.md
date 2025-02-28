# Docs for GitHub

LLM context for documentation of common libraries and frameworks.

## Overview

This project provides a simple way to access documentation context for popular libraries and frameworks for use with LLMs. It combines GitHub repository content with uithub and nachocache for efficient and fast documentation access.

## How to Use

* Visit [docs.forgithub.com](https://docs.forgithub.com) and select your library of interest
* Choose a specific folder or documentation section
* Copy the context using the copy button
* Paste the context into your favorite LLM model

## Supported Libraries

* Upstash
* Cloudflare
* Deno
* Fly.io
* Bun

## Contributing

Want to add a new library? It's simple:

1. [Edit the folders.json file](https://github.com/janwilmake/forgithub.docs/edit/main/public/folders.json) to add your library mapping
2. Submit a PR with your changes

We welcome all contributions that help expand the available documentation!

## Development

* Run locally with `wrangler dev`
* Deploy with Cloudflare Workers using the configuration in `wrangler.toml`

## Changelog

### February 2025
Rebranding, redesign, fixed caching with stale-while-revalidate approach, fixed Fly.io folders, and added navigation buttons.

### December 2024
Initial release with core functionality:
* Created `folders.json` mapping between owners, repos and directories
* Implemented proxy mechanism for documentation content
* Built HTML interface with copy functionality and token counting
* Deployed at docs.forgithub.com with caching for popular content

## License

This project is licensed under the MIT License.