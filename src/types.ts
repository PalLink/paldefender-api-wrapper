import type { ItemId, PalId, PalEggId, PassiveId, SkillId, TechnologyId } from "./pal_constants/index.js";

export type PDClientErrorContext = {
    path: string;
    method: "GET" | "POST";
    body?: unknown;
    status?: number;
    statusText?: string;
    responseText?: string;
};

export type PDClientErrorHandler = (
    error: Error,
    context: PDClientErrorContext,
) => void | Promise<void>;

export interface PDClientOptions {
    host?: string;
    port?: number;
    token?: string;
    errorHandler?: PDClientErrorHandler;
}

export interface SuccessResponse {
    Success: boolean;
}

export interface BanResponse {
    Success: boolean;
    UserId: string;
    IP: boolean;
    BannedIP: string;
    Kicked: number;
}

export interface Version {
    Major: number;
    Minor: number;
    Patch: number;
    Build: number;
    Version: string;
    VersionLong: string;
    Beta: boolean;
}

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

export type PlayerStatus = "Online" | "Offline";

export interface Player {
    Name: string;
    IP: string;
    PlayerUID: string;
    UserId: string;
    GuildName: string;
    GuildUUID: string;
    Status: PlayerStatus;
    WorldLocation: Vector3;
    MapLocation: Vector3;
}

export interface PlayersResponse {
    Meta: {
        PlayerCount: number;
        OnlineCount: number;
    };
    Players: Player[];
}

export interface Admin {
    id: string;
    name: string;
}

export interface Camp {
    id: string;
    world_pos: Vector3;
    map_pos: Vector3;
}
export interface Guild {
    name: string;
    Level: number;
    admin: Admin;
    camp_count: number;
    camps: Camp[]
    member_count: number;
    members: string[];
}
export interface GuildsMeta {
    GuildCount: number;
}
export interface Guilds {
    Meta: GuildsMeta;
    Guilds: Guild[];
}

export interface BanList {
    Banlist: Banlist;
}
export interface Banlist {
    Version: number;
    BannedMessage: string;
    UserEntries: UserEntries;
    IPEntries: IPEntries;
}
export interface UserEntries {
    UserId: string;
    Active: boolean;
    BannedBy: Issuer;
    UnBannedBy: Issuer;
}
export interface IPEntries {
    IP: string;
    Active: boolean;
    BannedBy: Issuer;
    UnBannedBy: Issuer;
}
type IssuerType =
    | "rest"
    | "player"
    | "system"

export interface Issuer {
    Type: IssuerType;
    NameValue: string;
    IP: string;
    Reason: string;
    Timestamp: Timestamp
}
export interface Timestamp {
    UTC: number;
    Year: number;
    Month: number;
    Day: number;
    Hour: number;
    Min: number;
    Sec: number;
    Msec: number;
}

export interface ProgressionResponse {
    Meta: ProgressionMeta;
    Progression: Progression;
}
export interface ProgressionMeta {
    PlayerUID: string;
    Player: string;
}
export interface Progression {
    Player: ProPlayer;
    Currencies: ProCurrencies;
    Bosses: ProBosses;
    Captures: ProCaptures;
    Activities: ProActivities;
}
export interface ProPlayer {
    level: number;
    exp: number;
    unusedStatusPoints: number;
}
export interface ProCurrencies {
    relics: { id: string, count: number };
    technologyPoints: number;
    ancientTechnologyPoints: number;
}
export interface ProBosses {
    towerBossDefeatCounts: { id: string, count: number };
    normalBossDefeatFlags: { id: string, flag: boolean };
    raidBossDefeatCounts: { id: string, count: number };
    totalBossDefeatCount: number;
    predatorDefeatCount: number;
}
export interface ProCaptures {
    tribeCaptureCount: number;
    palCaptureCounts: { id: string, count: number };
    palCaptureBonusCounts: { id: string, count: number };
    palButcherCounts: { id: string, count: number };
}
export interface ProActivities {
    craftItemCounts: { id: string, count: number };
    normalDungeonClearCount: number;
    fixedDungeonClearCount: number;
    oilrigClearCount: number;
    palRankUpCounts: { id: string, count: number };
    arenaSoloClearCounts: { id: string, count: number };
    npcTalkCounts: { id: string, count: number };
    fishingCounts: { id: string, count: number };
    foundTreasureCount: number;
    campConqueredCount: number;
    firstFishingComplete: boolean;
}

export interface AlertResponse extends SuccessResponse { }

export interface BanIPResponse extends SuccessResponse {
    IP: string;
    UserId?: string;
    Kicked: number;
}

export interface BroadcastResponse extends SuccessResponse { }

export interface DeleteBaseResponse {
    BaseCamp: DeleteBaseBaseCamp;
    Deleted: DeleteBaseDeleted;
    Archive: string;
}

export interface DeleteBaseBaseCamp {
    Id: string;
    Summary: string;
}

export interface DeleteBaseDeleted {
    BaseCampPals: number;
    StorageContainers: number;
    ItemStacks: number;
    ItemCount: number;
    Buildings: number;
    DropItems: number;
    DefenseModels: number;
    OtherMapObjects: number;
    PalBox: boolean;
}

export interface ForgetTechResponse {
    ForgottenCount: number;
    Forgotten: string[] | "All";
    Skipped: string[];
}

export interface GiveItemsResponse {
    Granted: GiveItemsGranted;
}

export interface GiveItemsGranted {
    Items: number;
}

export interface GivePalEggsResponse {
    Granted: GivePalEggsGranted;
}

export interface GivePalEggsGranted {
    PalEggs: number;
}

export interface GivePalsResponse {
    Granted: GivePalsGranted;
}

export interface GivePalsGranted {
    Pals: number;
}

export interface GivePalTemplateResponse {
    Granted: GivePalTemplateGranted;
}

export interface GivePalTemplateGranted {
    PalTemplates: number;
}

export interface GiveProgressionResponse {
    Granted: GiveProgressionGranted;
    Totals: GiveProgressionTotals;
}

export interface GiveProgressionGranted {
    EXP?: number;
    Relics?: Record<string, number>;
    TechnologyPoints?: number;
    AncientTechnologyPoints?: number;
}

export interface GiveProgressionTotals {
    Relics?: Record<string, number>;
    TechnologyPoints?: number;
    AncientTechnologyPoints?: number;
}

export type GiveDeprecatedResponse = unknown;

export interface GuildResponse {
    Guild: GuildDetails;
}

export interface GuildDetails {
    name: string;
    Level: number;
    admin: GuildAdmin;
    member_count: number;
    members: GuildMember[];
    camp_count: number;
    camps: GuildCamp[];
    items: Record<string, GuildItemContainer>;
    expeditions: GuildExpeditions;
    laboratory: GuildLaboratory;
}

export interface GuildAdmin {
    id: string;
    name: string;
}

export interface GuildMember {
    player_uid: string;
    player_name: string;
    status: string;
}

export interface GuildCamp {
    id: string;
    level: number;
    world_pos: Coordinate;
    map_pos: Coordinate;
    state: string;
    pals: Record<string, GuildCampPal>;
    buildings: string;
}

export interface Coordinate {
    x: number;
    y: number;
    z: number;
}

export interface GuildCampPal {
    nickname: string;
    pal_id: PalId;
    npc_id: string;
    skin_id: string;
    gender: string;
    level: number;
    shiny: boolean;
    phisical_health: string;
    worker_sick: string;
    san: number;
    imported: boolean;
    active_skills: SkillId[];
    learnt_skills: SkillId[];
    passives: PassiveId[];
    extra_work_suitabilities: Record<string, number>;
    disable_work_preferences: string[];
    team_slot_index?: number;
    page?: number;
    slot?: number;
    base_camp_slot_index?: number;
}

export interface GuildItemContainer {
    container_id: string;
    current: number;
    max: number;
    [slotIndex: string]: unknown;
}

export interface GuildExpeditions {
    finished: number;
    missions: Record<string, unknown>;
}

export interface GuildLaboratory {
    current_research: string;
    researches: Record<string, GuildLaboratoryResearch>;
}

export interface GuildLaboratoryResearch {
    work_amount: number;
    required_work_amount: number;
    percentage: number;
}

export type GuildsResponse = Guilds;
export type BanListResponse = BanList;

export interface ItemsResponse {
    Meta: ItemsMeta;
    Inventory: Inventory;
}

export interface ItemsMeta {
    PlayerUID: string;
    Player: string;
}

export interface Inventory {
    Items: InventoryContainer;
    KeyItems: InventoryContainer;
    Weapons: InventoryContainer;
    Armor: InventoryContainer;
    Food: InventoryContainer;
    DropSlot: InventoryContainer;
}

export interface InventoryContainer {
    Available: boolean;
    ContainerID: string;
    UsedSlots: number;
    MaxSlots: number;
    FreeSlots: number;
    Slots: Record<string, InventorySlot>;
}

export interface InventorySlot {
    ItemID: string;
    Count: number;
}

export interface KickResponse extends SuccessResponse {
    UserId: string;
}

export interface SendPlayerMessageResponse extends SuccessResponse {
    SentCount: number;
}

export interface SendPlayerMessageRequestBase {
    SendType:
    | "PlayerChat"
    | "PlayerGlobalChat"
    | "PlayerGuildChat"
    | "PlayerLogNormal"
    | "PlayerLogImportant"
    | "PlayerLogVeryImportant";
    Message: string;
}

type ExclusiveUserTarget =
    | { UserID: string; UserIDs?: never }
    | { UserIDs: string[]; UserID?: never };

export type SendPlayerMessageRequest = SendPlayerMessageRequestBase & ExclusiveUserTarget;

export interface GiveItemGrant {
    ItemID: ItemId;
    Count: number;
}

export interface GivePalEggGrant {
    EggID: PalEggId;
    PalID?: PalId;
    PalTemplate?: string;
}

export interface GivePalGrant {
    PalID: PalId;
    Level: number;
}

export interface GiveProgressionRequest {
    EXP?: number;
    Relics?: Record<string, number>;
    TechnologyPoints?: number;
    AncientTechnologyPoints?: number;
}

export interface ForgetTechRequest {
    Technology: TechnologyId | TechnologyId[] | "All";
}

export interface LearnTechRequest {
    Technology: TechnologyId | TechnologyId[] | "All";
}

export interface BanListQueryOptions {
    active?: boolean | "1";
    entryType?: string;
    userId?: string;
    ip?: string;
    userIP?: string;
    issuerType?: string;
    issuerName?: string;
    issuerIP?: string;
    reason?: string;
    q?: string;
}

export interface LearnTechResponse {
    UnlockedCount: number;
    Unlocked: string[];
    Skipped: string[];
}

export interface PalsResponse {
    Meta: PalsMeta;
    Pals: PalsCollection;
}

export interface PalsMeta {
    PlayerUID: string;
    Player: string;
    TeamCount: number;
    PalboxCount: number;
    BaseCampCount: number;
}

export interface PalsCollection {
    Team: Record<string, Pal>;
    Palbox: Record<string, Pal>;
    BaseCamps: GuildBaseCamp[];
}

export interface Pal {
    PalID: PalId;
    UniqueNPCID?: string;
    Nickname: string;
    SkinId: string;
    Gender: string;
    Level: number;
    Exp: number;
    Shiny: boolean;
    PartnerSkillLevel: number;
    CondensedPals: number;
    UnusedStatusPoints: number;
    FriendshipPoints: number;
    PhysicalHealth: string;
    WorkerSick: string;
    ImportedCharacter: boolean;
    HP: number;
    MP: number;
    SP: number;
    Shield: number;
    Hunger: number;
    MaxHunger: number;
    SAN: number;
    Support: number;
    CraftSpeed: number;
    PalSouls: Record<string, number>;
    IVs: Record<string, number>;
    ActiveSkills: SkillId[];
    LearntSkills: SkillId[];
    Passives: PassiveId[];
    ExtraWorkSuitabilities: Record<string, number>;
    DisableWorkPreferences: string[];
    team_slot_index?: number;
    page?: number;
    slot?: number;
    base_camp_slot_index?: number;
}

export interface GuildBaseCamp {
    id: string;
    level: number;
    world_pos: Coordinate;
    map_pos: Coordinate;
    state: string;
    pals: Record<string, Pal>;
}

export interface PlayerResponse {
    Player: Player;
}

export interface TechsResponse {
    Meta: TechsMeta;
    Techs: TechsData;
}

export interface TechsMeta {
    PlayerUID: string;
    Player: string;
    UnlockedCount: number;
    LockedCount: number;
    TotalCount: number;
}

export interface TechsData {
    Unlocked: string[];
}

export interface VersionResponse {
    Version: Version;
}
