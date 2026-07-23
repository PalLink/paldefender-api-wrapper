# PalDefender API Wrapper

[![npm version](https://img.shields.io/badge/npm-v11.16.0-cyan?style=plastic)](https://www.npmjs.com/package/paldefender-api-wrapper)
[![npm version](https://img.shields.io/badge/node-v24.18.0-green?style=plastic)](https://www.npmjs.com/package/paldefender-api-wrapper)
[![license](https://img.shields.io/badge/license-MIT-green?style=plastic)](https://github.com/PalLink/paldefender-api-wrapper/blob/main/LICENSE)
[![PalLink](https://img.shields.io/badge/Pal-Link-blue?style=plastic&label=Pal&labelColor=pink&color=blue)](https://discord.gg/YUgcMMc6Ch)

A lightweight TypeScript wrapper for the PalDefender REST API.

## Installation

Install from npm:

```bash
npm install paldefender-api-wrapper
```

If you're working from this repository locally, you can also install dependencies and build from source:

```bash
npm install
npx tsc
```

## Usage

Create a client with your PalDefender host, port, and token:

```ts
import { PDAPIClient } from "paldefender-api-wrapper";

const client = new PDAPIClient({
  host: "127.0.0.1",
  port: 13997,
  token: "your-token",
});
```

### Players API

```ts
await client.players.getPlayers();
await client.players.getPlayer("player-uid");
await client.players.findPlayerByName("PlayerName");
await client.players.findPlayerByPartialName("Play");
await client.players.getPals("player-uid");
await client.players.getItems("player-uid");
await client.players.getProgression("player-uid");
await client.players.getTechs("player-uid");
```

### Guilds API

```ts
await client.guilds.getGuilds();
await client.guilds.getGuild("guild-id");
```

### Server API

```ts
await client.server.alert("Server message");
await client.server.banlist();
await client.server.broadcast("Hello everyone");
await client.server.deletebase("base-camp-id");
await client.server.reloadconfig();
await client.server.sendPlayerMessage({
  SendType: "UserID",
  Message: "Hello",
  UserID: "player-uid",
});
await client.server.version();
```

### Moderation API

```ts
await client.moderation.ban("player-uid", "spam");
await client.moderation.banip("1.2.3.4", { Reason: "spam" });
await client.moderation.kick("player-uid", "bad behavior");
await client.moderation.unban("user-id");
await client.moderation.unbanip("1.2.3.4");
```

### Give API

```ts
await client.give.items("player-uid", [
  { ItemID: "Stone", Count: 2 },
]);

await client.give.paleggs("player-uid", [
  { EggID: "PalEgg_Dark_01", PalID: "Alpaca" },
]);

await client.give.pals("player-uid", [
  { PalID: "Alpaca", Level: 10 },
]);

await client.give.palTemplate("player-uid", ["sekhmut"]);

await client.give.progression("player-uid", { EXP: 10 });

await client.give.giveRecipeMaterials("player-uid", ItemId.MegaSphere, 2);
```

### Technology API

```ts
await client.technology.learn("player-uid", "All");
await client.technology.learn("player-uid", ["TechnologyIdA", "TechnologyIdB"]);
await client.technology.forget("player-uid", "All");
await client.technology.forget("player-uid", ["TechnologyIdA", "TechnologyIdB"]);
```

### Use recipe constants

The package exports recipe and item constants from the `pal_constants` module.

```ts
import { ItemId, getRecipeMaterialGrants } from "paldefender-api-wrapper";

const grants = getRecipeMaterialGrants(ItemId.MegaSphere);
console.log(grants);
```

## Notes

- `PDAPIClient` is the main entry point.
- The client groups related endpoints under `players`, `server`, `guilds`, `moderation`, `give`, and `technology`.
- Item IDs and other IDs are exposed through the exported constants for better autocomplete and type safety.
