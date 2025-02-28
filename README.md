# Docs for GitHub

LLM context for docs of common libs

## Overview

This project provides a simple way to access LLM context for common libraries and frameworks. It uses a combination of GitHub, uithub, and nachocache to provide a fast and efficient way to access documentation.

## Contributing

[Edit the folders available](https://github.com/janwilmake/forgithub.docs/edit/main/public/folders.json) and send a PR!

## Changelog

### December '24

1. ✅ `folders.json`: create a mapping between owner and the repo and subdirectories to be available under which name: manually
2. ✅ proxy :owner/:folder to [folder] replaced $ref using simple worker script. docs.uithub.com/[owner]/[subset] should use daily refresh uithub ?lines=false&maxTokens=10000000000
3. ✅ html at https://docs.uithub.com, takes folders.json and fetches all folders. makes context copyable using copy button. tokencount shown for each. no-bullshit headline: "Perfect Context For Any Lib"
4. ✅ deploy this at docs.uithub.com
5. ✅ docs.uithub.com/llms.txt should overview all subsets
6. ✅ cache popular stuff on uithub using nachocache so individual pages become fast and max 1d old (only for large, expensive, repos)

🎉 Now i have great context for cloudflare, deno, upstash, and my other favorite platforms. the great thing is the speed.

😏 This is a great base to start; from here we can further reduce context for any given task using the 'everything is a hierarchy' concept, looking at the package.json and environment as a starting point.

### February 27, 2025

Rebranding, redesign, fix caching stale-while-revalidate, fixed folders of fly.io, and add some buttons.

### how to use
* go to https://docs.forgithub.com and click the library you're interested in
* select a folder from the library
* click the copy button to copy the context for that folder
* use the context in your favorite LLM model

### supported libraries
* Upstash
* Cloudflare
* Deno
* Fly.io

## Deployment

This project is deployed using Cloudflare Workers. The `wrangler.toml` file contains the configuration for the deployment.

## Development

To run the project locally, use `wrangler dev`. This will start a development server that you can use to test the project.

## API Documentation

The API documentation is available at https://docs.forgithub.com/llms.txt. This file contains a list of all the libraries and folders that are available, along with a brief description of each.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Please make sure to follow the standard professional guidelines for commit messages and API documentation.

## License

This project is licensed under the MIT License.