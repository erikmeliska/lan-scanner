# Development

This file is not shipped to the Raycast Store (see `scripts/publish-store.sh`).

## Run in development mode

```bash
git clone https://github.com/erikmeliska/lan-scanner.git
cd lan-scanner
npm install
npm run dev
```

`npm run dev` imports the extension into Raycast. It stays there after you stop the dev server.

## Command line

The scanner has no dependencies and also runs on its own:

```bash
node assets/scanner.mjs <dataDir> [--force-ports] [--host <ip>] [--port-max-age-h <hours>]
```

## Store screenshots

`node scripts/demo-state.mjs <dataDir>` writes a fictional network into the extension's data folder
(back up `state.json` first). Open the command with deeplinks such as
`raycast://extensions/erik_meliska/lan-scanner/scan-network?context={"showDetail":true}` and capture the window.

## Publishing to the Raycast Store

Run `scripts/publish-store.sh`. It copies the extension without repo-only files (`LICENSE`, `DEVELOPMENT.md`,
`scripts/`) to a temporary folder and runs `ray publish` from there.

## License

MIT, see `LICENSE`.
