interface FolderConfig {
  $ref: string;
  folders: string[];
}

interface FoldersConfig {
  [owner: string]: FolderConfig;
}

import folders from "./public/folders.json";

export interface Env {
  // If you need environment variables, define them here
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const url = new URL(request.url);
      // Handle /llms.txt endpoint
      if (url.pathname === "/llms.txt") {
        const folderListing = Object.entries(folders as FoldersConfig)
          .map(([owner, config]) => {
            return `${owner}:\n${config.folders
              .map((folder) => `- https://docs.uithub.com/${owner}/${folder}`)
              .join("\n")}`;
          })
          .join("\n\n");

        return new Response(folderListing, {
          headers: {
            "Content-Type": "text/plain",
          },
        });
      }

      const pathParts = url.pathname.split("/").filter(Boolean);

      // Check if we have the required path parts
      if (pathParts.length < 2) {
        return new Response("Not Found", { status: 404 });
      }

      const [owner, ...folderParts] = pathParts;
      const folder = folderParts.join("/");

      const config = (folders as FoldersConfig)[owner];

      // Check if owner exists
      if (!config) {
        return new Response(`Owner "${owner}" not found`, { status: 404 });
      }

      // Check if folder exists in the allowed folders
      if (!config.folders.includes(folder)) {
        return new Response(
          `Folder "${folder}" not found for owner "${owner}"`,
          { status: 404 },
        );
      }

      // Replace [folder] placeholder with actual folder name
      const targetUrl = config.$ref.replace("[folder]", folder);

      // Forward the request to the target URL
      const proxyRequest = new Request(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body,
        redirect: "follow",
      });

      // Proxy the request
      const response = await fetch(proxyRequest);

      // Create a new response with the proxied response
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    } catch (error) {
      console.error("Error processing request:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
