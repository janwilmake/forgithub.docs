create a index.html that fetches `/folders.json`.

then, it fetches all /[owner]/path/to/folder combinations (all items in folders) in the background. Before being done it already shows all folders for every owner in a list. every folder links to that path when clicking on it (`/owner/path/to/folder`).

After a fetch is complete, it gets response.text() from that:

- calculates token count: Math.round(text.length/5) and prints that after the link.
- Also, adds a copy button that, when clicked, copies the text to the clipboard (first inject to hidden element) and shows a checkmark with text 'copied' for a second besides the link.

Use plain HTML and cdn.tailwindcss.com script for css.

No-bullshit headline: "LLM Context For Common Libs" and subtitle: [for llms](/llms.txt), powered by [uithub](https://uithub.com) and [nachocache](https://nachocache.com) - [DM](https://x.com/janwilmake) to request more libs.

head metadata:

<meta property="og:type" content="website" />
<meta property="og:url" content="https://docs.uithub.com" />
<meta property="og:image" content="https://quickog.com/screenshot/docs.uithub.com" />
