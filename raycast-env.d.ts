/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Background scan - Turn off to stop the periodic background scan. Manual scans still work. */
  "backgroundScan": boolean,
  /** Auto-scan when older than (min) - Opening the list starts a new scan if the last one is older than this. 0 = never. */
  "autoScanMinutes": string,
  /** Re-scan ports after (hours) - Ports of a known device are re-scanned only when older than this. */
  "portMaxAgeHours": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `scan-network` command */
  export type ScanNetwork = ExtensionPreferences & {}
  /** Preferences accessible in the `background-scan` command */
  export type BackgroundScan = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `scan-network` command */
  export type ScanNetwork = {}
  /** Arguments passed to the `background-scan` command */
  export type BackgroundScan = {}
}

