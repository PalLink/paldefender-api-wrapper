import { ItemId } from "./items.js";

export type RecipeMaterialId = string;

export type RecipeMaterialMap = Readonly<Partial<Record<RecipeMaterialId, number>>>;

export interface Recipe {
  product: ItemId;
  materials: RecipeMaterialMap;
}

type ItemRecipeMap = Partial<Record<ItemId, Recipe>>;

const _ITEM_RECIPES: ItemRecipeMap = {
  [ItemId.GoldCoin]: {
    product: ItemId.GoldCoin,
    materials: {
      [ItemId.Ingot]: 30,
    },
  },
  [ItemId.PalSphere]: {
    product: ItemId.PalSphere,
    materials: {
      [ItemId.PaldiumFragment]: 1,
    },
  },
  [ItemId.MegaSphere]: {
    product: ItemId.MegaSphere,
    materials: {
      [ItemId.PaldiumFragment]: 1,
      [ItemId.Ingot]: 1,
      [ItemId.Wood]: 3,
      [ItemId.Stone]: 3,
    },
  },
  [ItemId.GigaSphere]: {
    product: ItemId.GigaSphere,
    materials: {
      [ItemId.PaldiumFragment]: 2,
      [ItemId.Ingot]: 2,
      [ItemId.Wood]: 5,
      [ItemId.Stone]: 5,
    },
  },
  [ItemId.HyperSphere]: {
    product: ItemId.HyperSphere,
    materials: {
      [ItemId.PaldiumFragment]: 3,
      [ItemId.Ingot]: 3,
      [ItemId.Wood]: 8,
      [ItemId.Stone]: 8,
    },
  },
  [ItemId.UltraSphere]: {
    product: ItemId.UltraSphere,
    materials: {
      [ItemId.PaldiumFragment]: 5,
      [ItemId.RefinedIngot]: 3,
      [ItemId.Wood]: 10,
      [ItemId.Stone]: 10,
    },
  },
  [ItemId.LegendarySphere]: {
    product: ItemId.LegendarySphere,
    materials: {
      [ItemId.PaldiumFragment]: 5,
      [ItemId.PalMetalIngot]: 3,
      [ItemId.Hardwood]: 3,
      [ItemId.Stone]: 20,
    },
  },
  [ItemId.UltimateSphere]: {
    product: ItemId.UltimateSphere,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.PalMetalIngot]: 5,
      [ItemId.Hardwood]: 10,
      [ItemId.Plasteel]: 1,
    },
  },
  [ItemId.ExoticSphere]: {
    product: ItemId.ExoticSphere,
    materials: {
      [ItemId.PaldiumFragment]: 15,
      [ItemId.Plasteel]: 1,
      [ItemId.Hardwood]: 10,
      [ItemId.Hexolite]: 1,
    },
  },
  [ItemId.SolSphere]: {
    product: ItemId.SolSphere,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.SoraliteIngot]: 2,
      [ItemId.Hardwood]: 10,
    },
  },
  [ItemId.AncientSphere]: {
    product: ItemId.AncientSphere,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.PaloxiteIngot]: 6,
      [ItemId.MythicalWood]: 3,
    },
  },
  [ItemId.Arrow]: {
    product: ItemId.Arrow,
    materials: {
      [ItemId.Wood]: 2,
      [ItemId.Stone]: 2,
    },
  },
  [ItemId.PoisonArrow]: {
    product: ItemId.PoisonArrow,
    materials: {
      [ItemId.Wood]: 2,
      [ItemId.Stone]: 2,
      [ItemId.VenomGland]: 1,
    },
  },
  [ItemId.FireArrow]: {
    product: ItemId.FireArrow,
    materials: {
      [ItemId.Wood]: 2,
      [ItemId.Stone]: 2,
      [ItemId.FlameOrgan]: 1,
    },
  },
  [ItemId.ReinforcedArrow]: {
    product: ItemId.ReinforcedArrow,
    materials: {
      [ItemId.RefinedIngot]: 2,
      [ItemId.CarbonFiber]: 2,
    },
  },
  [ItemId.AdvancedArrow]: {
    product: ItemId.AdvancedArrow,
    materials: {
      [ItemId.Plasteel]: 2,
      [ItemId.CarbonFiber]: 5,
    },
  },
  [ItemId.CoarseAmmo]: {
    product: ItemId.CoarseAmmo,
    materials: {
      [ItemId.Ingot]: 1,
      [ItemId.Gunpowder1]: 1,
    },
  },
  [ItemId.HandgunAmmo]: {
    product: ItemId.HandgunAmmo,
    materials: {
      [ItemId.Ingot]: 1,
      [ItemId.Gunpowder1]: 1,
    },
  },
  [ItemId.RifleAmmo]: {
    product: ItemId.RifleAmmo,
    materials: {
      [ItemId.RefinedIngot]: 2,
      [ItemId.Gunpowder1]: 2,
    },
  },
  [ItemId.ShotgunShell]: {
    product: ItemId.ShotgunShell,
    materials: {
      [ItemId.RefinedIngot]: 2,
      [ItemId.Gunpowder1]: 3,
    },
  },
  [ItemId.AssaultRifleAmmo]: {
    product: ItemId.AssaultRifleAmmo,
    materials: {
      [ItemId.RefinedIngot]: 1,
      [ItemId.Gunpowder1]: 2,
    },
  },
  [ItemId.RocketAmmo]: {
    product: ItemId.RocketAmmo,
    materials: {
      [ItemId.Hexolite]: 3,
      [ItemId.ThermalCore]: 1,
    },
  },
  [ItemId.DecalInk]: {
    product: ItemId.DecalInk,
    materials: {
      [ItemId.AquaticPalFluids]: 1,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.FlamethrowerFuel]: {
    product: ItemId.FlamethrowerFuel,
    materials: {
      [ItemId.CrudeOil]: 2,
      [ItemId.RefinedIngot]: 1,
    },
  },
  [ItemId.MissileAmmo]: {
    product: ItemId.MissileAmmo,
    materials: {
      [ItemId.PalMetalIngot]: 3,
      [ItemId.CrudeOil]: 1,
      [ItemId.Computer]: 1,
    },
  },
  [ItemId.GrenadeAmmo]: {
    product: ItemId.GrenadeAmmo,
    materials: {
      [ItemId.PalMetalIngot]: 2,
      [ItemId.Fiber]: 20,
      [ItemId.Gunpowder1]: 3,
    },
  },
  [ItemId.GatlingGunAmmo]: {
    product: ItemId.GatlingGunAmmo,
    materials: {
      [ItemId.PalMetalIngot]: 1,
      [ItemId.Gunpowder1]: 3,
    },
  },
  [ItemId.MeteoriteAmmo]: {
    product: ItemId.MeteoriteAmmo,
    materials: {
      [ItemId.MeteoriteFragment]: 3,
    },
  },
  [ItemId.EnergyCartridge]: {
    product: ItemId.EnergyCartridge,
    materials: {
      [ItemId.BioBattery]: 1,
      [ItemId.PalMetalIngot]: 2,
    },
  },
  [ItemId.PlasmaCartridge]: {
    product: ItemId.PlasmaCartridge,
    materials: {
      [ItemId.ThermalCore]: 1,
      [ItemId.Hexolite]: 2,
    },
  },
  [ItemId.LaserGatlingCartridge]: {
    product: ItemId.LaserGatlingCartridge,
    materials: {
      [ItemId.BioBattery]: 1,
      [ItemId.Plasteel]: 1,
    },
  },
  [ItemId.ChargeRifleAmmo]: {
    product: ItemId.ChargeRifleAmmo,
    materials: {
      [ItemId.BioBattery]: 1,
      [ItemId.ThermalCore]: 1,
    },
  },
  [ItemId.OverheatRifleAmmo]: {
    product: ItemId.OverheatRifleAmmo,
    materials: {
      [ItemId.ThermalCore]: 1,
      [ItemId.Hexolite]: 1,
    },
  },
  [ItemId.EnergyShotgunAmmo]: {
    product: ItemId.EnergyShotgunAmmo,
    materials: {
      [ItemId.BioBattery]: 1,
      [ItemId.Hexolite]: 2,
    },
  },
  [ItemId.BoostGunAmmo]: {
    product: ItemId.BoostGunAmmo,
    materials: {
      [ItemId.Ingot]: 2,
      [ItemId.ElectricOrgan]: 1,
    },
  },
  [ItemId.BeamScatterAmmo]: {
    product: ItemId.BeamScatterAmmo,
    materials: {
      [ItemId.BioBattery]: 1,
      [ItemId.PaloxiteIngot]: 3,
      [ItemId.SoraliteIngot]: 2,
    },
  },
  [ItemId.PlasmaRifleAmmo]: {
    product: ItemId.PlasmaRifleAmmo,
    materials: {
      [ItemId.BioBattery]: 1,
      [ItemId.PaloxiteIngot]: 3,
      [ItemId.SoraliteIngot]: 2,
    },
  },
  [ItemId.BeamLauncherAmmo]: {
    product: ItemId.BeamLauncherAmmo,
    materials: {
      [ItemId.BioBattery]: 1,
      [ItemId.PaloxiteIngot]: 6,
      [ItemId.SoraliteIngot]: 2,
    },
  },
  [ItemId.MechanicalBowAmmo]: {
    product: ItemId.MechanicalBowAmmo,
    materials: {
      [ItemId.SoraliteIngot]: 2,
    },
  },
  [ItemId.CombatSMGAmmo]: {
    product: ItemId.CombatSMGAmmo,
    materials: {
      [ItemId.SoraliteIngot]: 2,
      [ItemId.Gunpowder1]: 6,
    },
  },
  [ItemId.PrototypeShotgunAmmo]: {
    product: ItemId.PrototypeShotgunAmmo,
    materials: {
      [ItemId.SoraliteIngot]: 4,
      [ItemId.Gunpowder1]: 8,
    },
  },
  [ItemId.HeavyAssaultRifleAmmo]: {
    product: ItemId.HeavyAssaultRifleAmmo,
    materials: {
      [ItemId.SoraliteIngot]: 2,
      [ItemId.Gunpowder1]: 10,
    },
  },
  [ItemId.TacticalGrenadeLauncherAmmo]: {
    product: ItemId.TacticalGrenadeLauncherAmmo,
    materials: {
      [ItemId.SoraliteIngot]: 4,
      [ItemId.Gunpowder1]: 10,
    },
  },
  [ItemId.WingCell]: {
    product: ItemId.WingCell,
    materials: {
      [ItemId.MythicalWood]: 10,
      [ItemId.CrudeOil]: 20,
    },
  },
  [ItemId.SimpleBait]: {
    product: ItemId.SimpleBait,
    materials: {
      [ItemId.AquaticPalFluids]: 2,
      [ItemId.RedBerries]: 4,
      [ItemId.Flour]: 2,
    },
  },
  [ItemId.HighQualityBait]: {
    product: ItemId.HighQualityBait,
    materials: {
      [ItemId.AquaticPalFluids]: 3,
      [ItemId.Tomato]: 4,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.DeluxeBait]: {
    product: ItemId.DeluxeBait,
    materials: {
      [ItemId.HighQualityPalOil]: 4,
      [ItemId.Onion]: 4,
      [ItemId.Carrot]: 3,
      [ItemId.Flour]: 4,
    },
  },
  [ItemId.BeginnerBait]: {
    product: ItemId.BeginnerBait,
    materials: {
      [ItemId.AquaticPalFluids]: 4,
      [ItemId.RedBerries]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.SweetBait]: {
    product: ItemId.SweetBait,
    materials: {
      [ItemId.AquaticPalFluids]: 4,
      [ItemId.RedBerries]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.LuckyBait]: {
    product: ItemId.LuckyBait,
    materials: {
      [ItemId.AquaticPalFluids]: 6,
      [ItemId.Tomato]: 5,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.QuickBait]: {
    product: ItemId.QuickBait,
    materials: {
      [ItemId.AquaticPalFluids]: 6,
      [ItemId.Tomato]: 5,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.AlluringBait]: {
    product: ItemId.AlluringBait,
    materials: {
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.CavernMushroom]: 1,
      [ItemId.Carrot]: 3,
      [ItemId.Flour]: 5,
    },
  },
  [ItemId.RiskyBait]: {
    product: ItemId.RiskyBait,
    materials: {
      [ItemId.HighQualityPalOil]: 8,
      [ItemId.CavernMushroom]: 3,
      [ItemId.Carrot]: 3,
      [ItemId.Flour]: 5,
    },
  },
  [ItemId.WoodenClub]: {
    product: ItemId.WoodenClub,
    materials: {
      [ItemId.Wood]: 5,
    },
  },
  [ItemId.HandHeldTorch]: {
    product: ItemId.HandHeldTorch,
    materials: {
      [ItemId.Wood]: 2,
      [ItemId.Stone]: 2,
    },
  },
  [ItemId.Bat]: {
    product: ItemId.Bat,
    materials: {
      [ItemId.Wood]: 30,
      [ItemId.Stone]: 10,
    },
  },
  [ItemId.MetalBat]: {
    product: ItemId.MetalBat,
    materials: {
      [ItemId.Hardwood]: 30,
      [ItemId.RefinedIngot]: 20,
    },
  },
  [ItemId.MetalBat1]: {
    product: ItemId.MetalBat1,
    materials: {
      [ItemId.Hardwood]: 37,
      [ItemId.RefinedIngot]: 25,
    },
  },
  [ItemId.MetalBat2]: {
    product: ItemId.MetalBat2,
    materials: {
      [ItemId.Hardwood]: 45,
      [ItemId.RefinedIngot]: 30,
    },
  },
  [ItemId.MetalBat3]: {
    product: ItemId.MetalBat3,
    materials: {
      [ItemId.Hardwood]: 52,
      [ItemId.RefinedIngot]: 35,
    },
  },
  [ItemId.MetalBat4]: {
    product: ItemId.MetalBat4,
    materials: {
      [ItemId.Hardwood]: 60,
      [ItemId.RefinedIngot]: 40,
    },
  },
  [ItemId.StoneAxe]: {
    product: ItemId.StoneAxe,
    materials: {
      [ItemId.Stone]: 5,
      [ItemId.Wood]: 5,
    },
  },
  [ItemId.MetalAxe]: {
    product: ItemId.MetalAxe,
    materials: {
      [ItemId.Stone]: 15,
      [ItemId.Wood]: 20,
      [ItemId.Ingot]: 15,
    },
  },
  [ItemId.RefinedMetalAxe]: {
    product: ItemId.RefinedMetalAxe,
    materials: {
      [ItemId.Stone]: 30,
      [ItemId.WoodenBoard]: 4,
      [ItemId.RefinedIngot]: 10,
    },
  },
  [ItemId.PalMetalAxe]: {
    product: ItemId.PalMetalAxe,
    materials: {
      [ItemId.PalMetalIngot]: 10,
      [ItemId.HighQualityWoodenBoard]: 10,
      [ItemId.Stone]: 100,
      [ItemId.CorrosiveSolvent]: 5,
    },
  },
  [ItemId.StonePickaxe]: {
    product: ItemId.StonePickaxe,
    materials: {
      [ItemId.Stone]: 5,
      [ItemId.Wood]: 5,
    },
  },
  [ItemId.MetalPickaxe]: {
    product: ItemId.MetalPickaxe,
    materials: {
      [ItemId.Stone]: 15,
      [ItemId.Wood]: 20,
      [ItemId.Ingot]: 15,
    },
  },
  [ItemId.RefinedMetalPickaxe]: {
    product: ItemId.RefinedMetalPickaxe,
    materials: {
      [ItemId.Stone]: 30,
      [ItemId.WoodenBoard]: 4,
      [ItemId.RefinedIngot]: 10,
    },
  },
  [ItemId.PalMetalPickaxe]: {
    product: ItemId.PalMetalPickaxe,
    materials: {
      [ItemId.PalMetalIngot]: 10,
      [ItemId.HighQualityWoodenBoard]: 10,
      [ItemId.Stone]: 100,
      [ItemId.CorrosiveSolvent]: 5,
    },
  },
  [ItemId.PlasmaMulticutter]: {
    product: ItemId.PlasmaMulticutter,
    materials: {
      [ItemId.PalMetalIngot]: 50,
      [ItemId.Plasteel]: 50,
      [ItemId.BioBattery]: 30,
      [ItemId.Computer]: 10,
      [ItemId.CryogenicCoolant]: 10,
    },
  },
  [ItemId.StoneSpear]: {
    product: ItemId.StoneSpear,
    materials: {
      [ItemId.Wood]: 18,
      [ItemId.Stone]: 6,
    },
  },
  [ItemId.MetalSpear]: {
    product: ItemId.MetalSpear,
    materials: {
      [ItemId.Wood]: 27,
      [ItemId.Stone]: 12,
      [ItemId.Ingot]: 10,
    },
  },
  [ItemId.RefinedMetalSpear]: {
    product: ItemId.RefinedMetalSpear,
    materials: {
      [ItemId.Wood]: 36,
      [ItemId.Stone]: 18,
      [ItemId.RefinedIngot]: 10,
    },
  },
  [ItemId.ElizabeeSStaff]: {
    product: ItemId.ElizabeeSStaff,
    materials: {
      [ItemId.Wood]: 1,
      [ItemId.Honey]: 1,
    },
  },
  [ItemId.BeegardeSSpear]: {
    product: ItemId.BeegardeSSpear,
    materials: {
      [ItemId.Wood]: 1,
      [ItemId.Honey]: 1,
    },
  },
  [ItemId.LilySSpear]: {
    product: ItemId.LilySSpear,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.RefinedIngot]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.HighQualityWoodenBoard]: 3,
    },
  },
  [ItemId.LilySSpear4]: {
    product: ItemId.LilySSpear4,
    materials: {
      [ItemId.PaldiumFragment]: 40,
      [ItemId.RefinedIngot]: 60,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.HighQualityWoodenBoard]: 6,
    },
  },
  [ItemId.EnhancedLilySSpear]: {
    product: ItemId.EnhancedLilySSpear,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.SoraliteIngot]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.HighQualityWoodenBoard]: 20,
    },
  },
  [ItemId.EnhancedLilySSpear4]: {
    product: ItemId.EnhancedLilySSpear4,
    materials: {
      [ItemId.PaldiumFragment]: 40,
      [ItemId.SoraliteIngot]: 60,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.HighQualityWoodenBoard]: 40,
    },
  },
  [ItemId.PrimitiveSword]: {
    product: ItemId.PrimitiveSword,
    materials: {
      [ItemId.WoodenBoard]: 2,
      [ItemId.Stone]: 15,
      [ItemId.Ingot]: 15,
    },
  },
  [ItemId.Sword]: {
    product: ItemId.Sword,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.WoodenBoard]: 2,
      [ItemId.Stone]: 20,
    },
  },
  [ItemId.Sword1]: {
    product: ItemId.Sword1,
    materials: {
      [ItemId.Ingot]: 37,
      [ItemId.WoodenBoard]: 2,
      [ItemId.Stone]: 25,
    },
  },
  [ItemId.Sword2]: {
    product: ItemId.Sword2,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.WoodenBoard]: 3,
      [ItemId.Stone]: 30,
    },
  },
  [ItemId.Sword3]: {
    product: ItemId.Sword3,
    materials: {
      [ItemId.Ingot]: 52,
      [ItemId.WoodenBoard]: 4,
      [ItemId.Stone]: 35,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.Sword4]: {
    product: ItemId.Sword4,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.WoodenBoard]: 5,
      [ItemId.Stone]: 40,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.Katana]: {
    product: ItemId.Katana,
    materials: {
      [ItemId.PalMetalIngot]: 20,
      [ItemId.HighQualityWoodenBoard]: 2,
      [ItemId.CorrosiveSolvent]: 3,
    },
  },
  [ItemId.Katana1]: {
    product: ItemId.Katana1,
    materials: {
      [ItemId.PalMetalIngot]: 25,
      [ItemId.HighQualityWoodenBoard]: 2,
      [ItemId.CorrosiveSolvent]: 3,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.Katana2]: {
    product: ItemId.Katana2,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityWoodenBoard]: 3,
      [ItemId.CorrosiveSolvent]: 4,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Katana3]: {
    product: ItemId.Katana3,
    materials: {
      [ItemId.PalMetalIngot]: 35,
      [ItemId.HighQualityWoodenBoard]: 4,
      [ItemId.CorrosiveSolvent]: 5,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.Katana4]: {
    product: ItemId.Katana4,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.HighQualityWoodenBoard]: 5,
      [ItemId.CorrosiveSolvent]: 6,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.BeamSword]: {
    product: ItemId.BeamSword,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.NightstarSand]: 20,
      [ItemId.Computer]: 1,
    },
  },
  [ItemId.BeamSword1]: {
    product: ItemId.BeamSword1,
    materials: {
      [ItemId.Plasteel]: 37,
      [ItemId.PaldiumFragment]: 125,
      [ItemId.NightstarSand]: 25,
      [ItemId.Computer]: 1,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.BeamSword2]: {
    product: ItemId.BeamSword2,
    materials: {
      [ItemId.Plasteel]: 45,
      [ItemId.PaldiumFragment]: 150,
      [ItemId.NightstarSand]: 30,
      [ItemId.Computer]: 2,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.BeamSword3]: {
    product: ItemId.BeamSword3,
    materials: {
      [ItemId.Plasteel]: 52,
      [ItemId.PaldiumFragment]: 175,
      [ItemId.NightstarSand]: 35,
      [ItemId.Computer]: 3,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.BeamSword4]: {
    product: ItemId.BeamSword4,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PaldiumFragment]: 200,
      [ItemId.NightstarSand]: 40,
      [ItemId.Computer]: 4,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LaserSword]: {
    product: ItemId.LaserSword,
    materials: {
      [ItemId.SoraliteIngot]: 50,
      [ItemId.PaldiumFragment]: 250,
      [ItemId.BioBattery]: 30,
      [ItemId.AICore]: 3,
    },
  },
  [ItemId.LaserSword1]: {
    product: ItemId.LaserSword1,
    materials: {
      [ItemId.SoraliteIngot]: 62,
      [ItemId.PaldiumFragment]: 312,
      [ItemId.BioBattery]: 37,
      [ItemId.AICore]: 3,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LaserSword2]: {
    product: ItemId.LaserSword2,
    materials: {
      [ItemId.SoraliteIngot]: 75,
      [ItemId.PaldiumFragment]: 375,
      [ItemId.BioBattery]: 45,
      [ItemId.AICore]: 4,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.LaserSword3]: {
    product: ItemId.LaserSword3,
    materials: {
      [ItemId.SoraliteIngot]: 87,
      [ItemId.PaldiumFragment]: 437,
      [ItemId.BioBattery]: 52,
      [ItemId.AICore]: 5,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.LaserSword4]: {
    product: ItemId.LaserSword4,
    materials: {
      [ItemId.SoraliteIngot]: 100,
      [ItemId.PaldiumFragment]: 500,
      [ItemId.BioBattery]: 60,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.MeatCleaver]: {
    product: ItemId.MeatCleaver,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Wood]: 20,
      [ItemId.Stone]: 5,
    },
  },
  [ItemId.StunBaton]: {
    product: ItemId.StunBaton,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.ElectricOrgan]: 20,
    },
  },
  [ItemId.MetalDetector]: {
    product: ItemId.MetalDetector,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.Computer]: 15,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.OldBow]: {
    product: ItemId.OldBow,
    materials: {
      [ItemId.Wood]: 30,
      [ItemId.Stone]: 5,
      [ItemId.Fiber]: 15,
    },
  },
  [ItemId.OldBow1]: {
    product: ItemId.OldBow1,
    materials: {
      [ItemId.Wood]: 37,
      [ItemId.Stone]: 6,
      [ItemId.Fiber]: 18,
    },
  },
  [ItemId.OldBow2]: {
    product: ItemId.OldBow2,
    materials: {
      [ItemId.Wood]: 45,
      [ItemId.Stone]: 7,
      [ItemId.Fiber]: 22,
    },
  },
  [ItemId.OldBow3]: {
    product: ItemId.OldBow3,
    materials: {
      [ItemId.Wood]: 52,
      [ItemId.Stone]: 8,
      [ItemId.Fiber]: 26,
    },
  },
  [ItemId.OldBow4]: {
    product: ItemId.OldBow4,
    materials: {
      [ItemId.Wood]: 60,
      [ItemId.Stone]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.PoisonBow]: {
    product: ItemId.PoisonBow,
    materials: {
      [ItemId.Wood]: 40,
      [ItemId.Stone]: 8,
      [ItemId.Fiber]: 20,
      [ItemId.VenomGland]: 2,
    },
  },
  [ItemId.FireBow]: {
    product: ItemId.FireBow,
    materials: {
      [ItemId.Wood]: 40,
      [ItemId.Stone]: 8,
      [ItemId.Fiber]: 20,
      [ItemId.FlameOrgan]: 2,
    },
  },
  [ItemId.ThreeShotBow]: {
    product: ItemId.ThreeShotBow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 12,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.Crossbow]: {
    product: ItemId.Crossbow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 40,
      [ItemId.Ingot]: 10,
      [ItemId.Nail]: 2,
    },
  },
  [ItemId.Crossbow1]: {
    product: ItemId.Crossbow1,
    materials: {
      [ItemId.Wood]: 62,
      [ItemId.Stone]: 50,
      [ItemId.Ingot]: 12,
      [ItemId.Nail]: 2,
    },
  },
  [ItemId.Crossbow2]: {
    product: ItemId.Crossbow2,
    materials: {
      [ItemId.Wood]: 75,
      [ItemId.Stone]: 60,
      [ItemId.Ingot]: 15,
      [ItemId.Nail]: 3,
    },
  },
  [ItemId.Crossbow3]: {
    product: ItemId.Crossbow3,
    materials: {
      [ItemId.Wood]: 87,
      [ItemId.Stone]: 70,
      [ItemId.Ingot]: 17,
      [ItemId.Nail]: 4,
    },
  },
  [ItemId.Crossbow4]: {
    product: ItemId.Crossbow4,
    materials: {
      [ItemId.Wood]: 100,
      [ItemId.Stone]: 80,
      [ItemId.Ingot]: 20,
      [ItemId.Nail]: 5,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.PoisonArrowCrossbow]: {
    product: ItemId.PoisonArrowCrossbow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 50,
      [ItemId.Ingot]: 15,
      [ItemId.Nail]: 3,
      [ItemId.VenomGland]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbow1]: {
    product: ItemId.PoisonArrowCrossbow1,
    materials: {
      [ItemId.Wood]: 62,
      [ItemId.Stone]: 62,
      [ItemId.Ingot]: 18,
      [ItemId.Nail]: 3,
    },
  },
  [ItemId.PoisonArrowCrossbow2]: {
    product: ItemId.PoisonArrowCrossbow2,
    materials: {
      [ItemId.Wood]: 75,
      [ItemId.Stone]: 75,
      [ItemId.Ingot]: 22,
      [ItemId.Nail]: 4,
    },
  },
  [ItemId.PoisonArrowCrossbow3]: {
    product: ItemId.PoisonArrowCrossbow3,
    materials: {
      [ItemId.Wood]: 87,
      [ItemId.Stone]: 87,
      [ItemId.Ingot]: 26,
      [ItemId.Nail]: 5,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.PoisonArrowCrossbow4]: {
    product: ItemId.PoisonArrowCrossbow4,
    materials: {
      [ItemId.Wood]: 100,
      [ItemId.Stone]: 100,
      [ItemId.Ingot]: 30,
      [ItemId.Nail]: 6,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.FireArrowCrossbow]: {
    product: ItemId.FireArrowCrossbow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 50,
      [ItemId.Ingot]: 15,
      [ItemId.Nail]: 3,
      [ItemId.FlameOrgan]: 5,
    },
  },
  [ItemId.FireArrowCrossbow1]: {
    product: ItemId.FireArrowCrossbow1,
    materials: {
      [ItemId.Wood]: 62,
      [ItemId.Stone]: 62,
      [ItemId.Ingot]: 18,
      [ItemId.Nail]: 3,
    },
  },
  [ItemId.FireArrowCrossbow2]: {
    product: ItemId.FireArrowCrossbow2,
    materials: {
      [ItemId.Wood]: 75,
      [ItemId.Stone]: 75,
      [ItemId.Ingot]: 22,
      [ItemId.Nail]: 4,
    },
  },
  [ItemId.FireArrowCrossbow3]: {
    product: ItemId.FireArrowCrossbow3,
    materials: {
      [ItemId.Wood]: 87,
      [ItemId.Stone]: 87,
      [ItemId.Ingot]: 26,
      [ItemId.Nail]: 5,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.FireArrowCrossbow4]: {
    product: ItemId.FireArrowCrossbow4,
    materials: {
      [ItemId.Wood]: 100,
      [ItemId.Stone]: 100,
      [ItemId.Ingot]: 30,
      [ItemId.Nail]: 6,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.CompoundBow]: {
    product: ItemId.CompoundBow,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Fiber]: 40,
      [ItemId.Nail]: 10,
    },
  },
  [ItemId.CompoundBow1]: {
    product: ItemId.CompoundBow1,
    materials: {
      [ItemId.RefinedIngot]: 62,
      [ItemId.Fiber]: 50,
      [ItemId.Nail]: 12,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.CompoundBow2]: {
    product: ItemId.CompoundBow2,
    materials: {
      [ItemId.RefinedIngot]: 75,
      [ItemId.Fiber]: 60,
      [ItemId.Nail]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.CompoundBow3]: {
    product: ItemId.CompoundBow3,
    materials: {
      [ItemId.RefinedIngot]: 87,
      [ItemId.Fiber]: 70,
      [ItemId.Nail]: 17,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.CompoundBow4]: {
    product: ItemId.CompoundBow4,
    materials: {
      [ItemId.RefinedIngot]: 100,
      [ItemId.Fiber]: 80,
      [ItemId.Nail]: 20,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.AdvancedBow]: {
    product: ItemId.AdvancedBow,
    materials: {
      [ItemId.Plasteel]: 40,
      [ItemId.CarbonFiber]: 25,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.AdvancedBow1]: {
    product: ItemId.AdvancedBow1,
    materials: {
      [ItemId.Plasteel]: 50,
      [ItemId.CarbonFiber]: 31,
      [ItemId.NightstarSand]: 25,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.AdvancedBow2]: {
    product: ItemId.AdvancedBow2,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.CarbonFiber]: 37,
      [ItemId.NightstarSand]: 30,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.AdvancedBow3]: {
    product: ItemId.AdvancedBow3,
    materials: {
      [ItemId.Plasteel]: 70,
      [ItemId.CarbonFiber]: 43,
      [ItemId.NightstarSand]: 35,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.AdvancedBow4]: {
    product: ItemId.AdvancedBow4,
    materials: {
      [ItemId.Plasteel]: 80,
      [ItemId.CarbonFiber]: 50,
      [ItemId.NightstarSand]: 40,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.MechanicalBow]: {
    product: ItemId.MechanicalBow,
    materials: {
      [ItemId.SoraliteIngot]: 40,
      [ItemId.CarbonFiber]: 20,
      [ItemId.PaldiumFragment]: 200,
      [ItemId.AICore]: 3,
    },
  },
  [ItemId.MechanicalBow1]: {
    product: ItemId.MechanicalBow1,
    materials: {
      [ItemId.SoraliteIngot]: 50,
      [ItemId.CarbonFiber]: 25,
      [ItemId.PaldiumFragment]: 250,
      [ItemId.AICore]: 3,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.MechanicalBow2]: {
    product: ItemId.MechanicalBow2,
    materials: {
      [ItemId.SoraliteIngot]: 60,
      [ItemId.CarbonFiber]: 30,
      [ItemId.PaldiumFragment]: 300,
      [ItemId.AICore]: 4,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.MechanicalBow3]: {
    product: ItemId.MechanicalBow3,
    materials: {
      [ItemId.SoraliteIngot]: 70,
      [ItemId.CarbonFiber]: 35,
      [ItemId.PaldiumFragment]: 350,
      [ItemId.AICore]: 5,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MechanicalBow4]: {
    product: ItemId.MechanicalBow4,
    materials: {
      [ItemId.SoraliteIngot]: 80,
      [ItemId.CarbonFiber]: 40,
      [ItemId.PaldiumFragment]: 400,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.MakeshiftHandgun]: {
    product: ItemId.MakeshiftHandgun,
    materials: {
      [ItemId.Ingot]: 35,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.MakeshiftHandgun1]: {
    product: ItemId.MakeshiftHandgun1,
    materials: {
      [ItemId.Ingot]: 43,
      [ItemId.HighQualityPalOil]: 12,
      [ItemId.Fiber]: 37,
    },
  },
  [ItemId.MakeshiftHandgun2]: {
    product: ItemId.MakeshiftHandgun2,
    materials: {
      [ItemId.Ingot]: 52,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.Fiber]: 45,
    },
  },
  [ItemId.MakeshiftHandgun3]: {
    product: ItemId.MakeshiftHandgun3,
    materials: {
      [ItemId.Ingot]: 61,
      [ItemId.HighQualityPalOil]: 17,
      [ItemId.Fiber]: 52,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MakeshiftHandgun4]: {
    product: ItemId.MakeshiftHandgun4,
    materials: {
      [ItemId.Ingot]: 70,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.Fiber]: 60,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.Handgun]: {
    product: ItemId.Handgun,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.HighQualityPalOil]: 15,
    },
  },
  [ItemId.Handgun1]: {
    product: ItemId.Handgun1,
    materials: {
      [ItemId.Ingot]: 62,
      [ItemId.HighQualityPalOil]: 18,
    },
  },
  [ItemId.Handgun2]: {
    product: ItemId.Handgun2,
    materials: {
      [ItemId.Ingot]: 75,
      [ItemId.HighQualityPalOil]: 22,
    },
  },
  [ItemId.Handgun3]: {
    product: ItemId.Handgun3,
    materials: {
      [ItemId.Ingot]: 87,
      [ItemId.HighQualityPalOil]: 26,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.Handgun4]: {
    product: ItemId.Handgun4,
    materials: {
      [ItemId.Ingot]: 100,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.DecalGun1]: {
    product: ItemId.DecalGun1,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun2]: {
    product: ItemId.DecalGun2,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun3]: {
    product: ItemId.DecalGun3,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun4]: {
    product: ItemId.DecalGun4,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun5]: {
    product: ItemId.DecalGun5,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.OldRevolver]: {
    product: ItemId.OldRevolver,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 20,
    },
  },
  [ItemId.OldRevolver1]: {
    product: ItemId.OldRevolver1,
    materials: {
      [ItemId.Ingot]: 75,
      [ItemId.HighQualityPalOil]: 25,
    },
  },
  [ItemId.OldRevolver2]: {
    product: ItemId.OldRevolver2,
    materials: {
      [ItemId.Ingot]: 90,
      [ItemId.HighQualityPalOil]: 30,
    },
  },
  [ItemId.OldRevolver3]: {
    product: ItemId.OldRevolver3,
    materials: {
      [ItemId.Ingot]: 105,
      [ItemId.HighQualityPalOil]: 35,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.OldRevolver4]: {
    product: ItemId.OldRevolver4,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.HighQualityPalOil]: 40,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.BoostGun]: {
    product: ItemId.BoostGun,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.MegaboostGun]: {
    product: ItemId.MegaboostGun,
    materials: {
      [ItemId.CoralumIngot]: 150,
      [ItemId.Hexolite]: 120,
      [ItemId.CarbonFiber]: 200,
      [ItemId.CircuitBoard]: 100,
    },
  },
  [ItemId.GrapplingGun]: {
    product: ItemId.GrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Ingot]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MegaGrapplingGun]: {
    product: ItemId.MegaGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.Ingot]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.GigaGrapplingGun]: {
    product: ItemId.GigaGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Fiber]: 80,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HyperGrapplingGun]: {
    product: ItemId.HyperGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 40,
      [ItemId.RefinedIngot]: 30,
      [ItemId.CarbonFiber]: 20,
      [ItemId.Polymer]: 20,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.UltraGrapplingGun]: {
    product: ItemId.UltraGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 100,
      [ItemId.CoralumIngot]: 30,
      [ItemId.CarbonFiber]: 50,
      [ItemId.Polymer]: 50,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.MakeshiftShotgun]: {
    product: ItemId.MakeshiftShotgun,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.Fiber]: 50,
    },
  },
  [ItemId.MakeshiftShotgun1]: {
    product: ItemId.MakeshiftShotgun1,
    materials: {
      [ItemId.Ingot]: 75,
      [ItemId.HighQualityPalOil]: 18,
      [ItemId.Fiber]: 62,
    },
  },
  [ItemId.MakeshiftShotgun2]: {
    product: ItemId.MakeshiftShotgun2,
    materials: {
      [ItemId.Ingot]: 90,
      [ItemId.HighQualityPalOil]: 22,
      [ItemId.Fiber]: 75,
    },
  },
  [ItemId.MakeshiftShotgun3]: {
    product: ItemId.MakeshiftShotgun3,
    materials: {
      [ItemId.Ingot]: 105,
      [ItemId.HighQualityPalOil]: 26,
      [ItemId.Fiber]: 87,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MakeshiftShotgun4]: {
    product: ItemId.MakeshiftShotgun4,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.Fiber]: 100,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.DoubleBarreledShotgun]: {
    product: ItemId.DoubleBarreledShotgun,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Polymer]: 7,
      [ItemId.Hardwood]: 25,
    },
  },
  [ItemId.DoubleBarreledShotgun1]: {
    product: ItemId.DoubleBarreledShotgun1,
    materials: {
      [ItemId.RefinedIngot]: 37,
      [ItemId.Polymer]: 8,
      [ItemId.Hardwood]: 31,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.DoubleBarreledShotgun2]: {
    product: ItemId.DoubleBarreledShotgun2,
    materials: {
      [ItemId.RefinedIngot]: 45,
      [ItemId.Polymer]: 10,
      [ItemId.Hardwood]: 37,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.DoubleBarreledShotgun3]: {
    product: ItemId.DoubleBarreledShotgun3,
    materials: {
      [ItemId.RefinedIngot]: 52,
      [ItemId.Polymer]: 12,
      [ItemId.Hardwood]: 43,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DoubleBarreledShotgun4]: {
    product: ItemId.DoubleBarreledShotgun4,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Polymer]: 14,
      [ItemId.Hardwood]: 50,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PumpActionShotgun]: {
    product: ItemId.PumpActionShotgun,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Polymer]: 20,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.PumpActionShotgun1]: {
    product: ItemId.PumpActionShotgun1,
    materials: {
      [ItemId.RefinedIngot]: 37,
      [ItemId.Polymer]: 25,
      [ItemId.CarbonFiber]: 12,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.PumpActionShotgun2]: {
    product: ItemId.PumpActionShotgun2,
    materials: {
      [ItemId.RefinedIngot]: 45,
      [ItemId.Polymer]: 30,
      [ItemId.CarbonFiber]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.PumpActionShotgun3]: {
    product: ItemId.PumpActionShotgun3,
    materials: {
      [ItemId.RefinedIngot]: 52,
      [ItemId.Polymer]: 35,
      [ItemId.CarbonFiber]: 17,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.PumpActionShotgun4]: {
    product: ItemId.PumpActionShotgun4,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Polymer]: 40,
      [ItemId.CarbonFiber]: 20,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SemiAutoShotgun]: {
    product: ItemId.SemiAutoShotgun,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 20,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.SemiAutoShotgun1]: {
    product: ItemId.SemiAutoShotgun1,
    materials: {
      [ItemId.RefinedIngot]: 62,
      [ItemId.Polymer]: 25,
      [ItemId.CarbonFiber]: 12,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.SemiAutoShotgun2]: {
    product: ItemId.SemiAutoShotgun2,
    materials: {
      [ItemId.RefinedIngot]: 75,
      [ItemId.Polymer]: 30,
      [ItemId.CarbonFiber]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.SemiAutoShotgun3]: {
    product: ItemId.SemiAutoShotgun3,
    materials: {
      [ItemId.RefinedIngot]: 87,
      [ItemId.Polymer]: 35,
      [ItemId.CarbonFiber]: 17,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.SemiAutoShotgun4]: {
    product: ItemId.SemiAutoShotgun4,
    materials: {
      [ItemId.RefinedIngot]: 100,
      [ItemId.Polymer]: 40,
      [ItemId.CarbonFiber]: 20,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.EnergyShotgun]: {
    product: ItemId.EnergyShotgun,
    materials: {
      [ItemId.CoralumIngot]: 155,
      [ItemId.Hexolite]: 130,
      [ItemId.ThermalCore]: 5,
      [ItemId.Computer]: 15,
    },
  },
  [ItemId.EnergyShotgun1]: {
    product: ItemId.EnergyShotgun1,
    materials: {
      [ItemId.CoralumIngot]: 193,
      [ItemId.Hexolite]: 162,
      [ItemId.ThermalCore]: 6,
      [ItemId.Computer]: 18,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.EnergyShotgun2]: {
    product: ItemId.EnergyShotgun2,
    materials: {
      [ItemId.CoralumIngot]: 232,
      [ItemId.Hexolite]: 195,
      [ItemId.ThermalCore]: 7,
      [ItemId.Computer]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.EnergyShotgun3]: {
    product: ItemId.EnergyShotgun3,
    materials: {
      [ItemId.CoralumIngot]: 271,
      [ItemId.Hexolite]: 227,
      [ItemId.ThermalCore]: 8,
      [ItemId.Computer]: 26,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.EnergyShotgun4]: {
    product: ItemId.EnergyShotgun4,
    materials: {
      [ItemId.CoralumIngot]: 310,
      [ItemId.Hexolite]: 260,
      [ItemId.ThermalCore]: 10,
      [ItemId.Computer]: 30,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.PrototypeShotgun]: {
    product: ItemId.PrototypeShotgun,
    materials: {
      [ItemId.SoraliteIngot]: 60,
      [ItemId.CarbonFiber]: 40,
      [ItemId.ThermalCore]: 5,
      [ItemId.AICore]: 5,
    },
  },
  [ItemId.PrototypeShotgun1]: {
    product: ItemId.PrototypeShotgun1,
    materials: {
      [ItemId.SoraliteIngot]: 75,
      [ItemId.CarbonFiber]: 50,
      [ItemId.ThermalCore]: 6,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.PrototypeShotgun2]: {
    product: ItemId.PrototypeShotgun2,
    materials: {
      [ItemId.SoraliteIngot]: 90,
      [ItemId.CarbonFiber]: 60,
      [ItemId.ThermalCore]: 7,
      [ItemId.AICore]: 7,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.PrototypeShotgun3]: {
    product: ItemId.PrototypeShotgun3,
    materials: {
      [ItemId.SoraliteIngot]: 105,
      [ItemId.CarbonFiber]: 70,
      [ItemId.ThermalCore]: 8,
      [ItemId.AICore]: 8,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.PrototypeShotgun4]: {
    product: ItemId.PrototypeShotgun4,
    materials: {
      [ItemId.SoraliteIngot]: 120,
      [ItemId.CarbonFiber]: 80,
      [ItemId.ThermalCore]: 10,
      [ItemId.AICore]: 10,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.BeamScatter]: {
    product: ItemId.BeamScatter,
    materials: {
      [ItemId.PaloxiteIngot]: 50,
      [ItemId.SoraliteIngot]: 50,
      [ItemId.AICore]: 5,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.BeamScatter1]: {
    product: ItemId.BeamScatter1,
    materials: {
      [ItemId.PaloxiteIngot]: 62,
      [ItemId.SoraliteIngot]: 62,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationCore]: 6,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.BeamScatter2]: {
    product: ItemId.BeamScatter2,
    materials: {
      [ItemId.PaloxiteIngot]: 75,
      [ItemId.SoraliteIngot]: 75,
      [ItemId.AICore]: 7,
      [ItemId.AncientCivilizationCore]: 7,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.BeamScatter3]: {
    product: ItemId.BeamScatter3,
    materials: {
      [ItemId.PaloxiteIngot]: 87,
      [ItemId.SoraliteIngot]: 87,
      [ItemId.AICore]: 8,
      [ItemId.AncientCivilizationCore]: 8,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.BeamScatter4]: {
    product: ItemId.BeamScatter4,
    materials: {
      [ItemId.PaloxiteIngot]: 100,
      [ItemId.SoraliteIngot]: 100,
      [ItemId.AICore]: 10,
      [ItemId.AncientCivilizationCore]: 10,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.Musket]: {
    product: ItemId.Musket,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.HighQualityPalOil]: 5,
      [ItemId.WoodenBoard]: 3,
    },
  },
  [ItemId.Musket1]: {
    product: ItemId.Musket1,
    materials: {
      [ItemId.Ingot]: 31,
      [ItemId.HighQualityPalOil]: 6,
      [ItemId.WoodenBoard]: 3,
    },
  },
  [ItemId.Musket2]: {
    product: ItemId.Musket2,
    materials: {
      [ItemId.Ingot]: 37,
      [ItemId.HighQualityPalOil]: 7,
      [ItemId.WoodenBoard]: 4,
    },
  },
  [ItemId.Musket3]: {
    product: ItemId.Musket3,
    materials: {
      [ItemId.Ingot]: 43,
      [ItemId.HighQualityPalOil]: 8,
      [ItemId.WoodenBoard]: 5,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.Musket4]: {
    product: ItemId.Musket4,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.WoodenBoard]: 6,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.SingleShotRifle]: {
    product: ItemId.SingleShotRifle,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Polymer]: 5,
      [ItemId.Hardwood]: 20,
    },
  },
  [ItemId.SingleShotRifle1]: {
    product: ItemId.SingleShotRifle1,
    materials: {
      [ItemId.RefinedIngot]: 25,
      [ItemId.Polymer]: 6,
      [ItemId.Hardwood]: 25,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.SingleShotRifle2]: {
    product: ItemId.SingleShotRifle2,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Polymer]: 7,
      [ItemId.Hardwood]: 30,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.SingleShotRifle3]: {
    product: ItemId.SingleShotRifle3,
    materials: {
      [ItemId.RefinedIngot]: 35,
      [ItemId.Polymer]: 8,
      [ItemId.Hardwood]: 35,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.SingleShotRifle4]: {
    product: ItemId.SingleShotRifle4,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Polymer]: 10,
      [ItemId.Hardwood]: 40,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SemiAutoRifle]: {
    product: ItemId.SemiAutoRifle,
    materials: {
      [ItemId.RefinedIngot]: 35,
      [ItemId.Polymer]: 10,
    },
  },
  [ItemId.SemiAutoRifle1]: {
    product: ItemId.SemiAutoRifle1,
    materials: {
      [ItemId.RefinedIngot]: 43,
      [ItemId.Polymer]: 12,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.SemiAutoRifle2]: {
    product: ItemId.SemiAutoRifle2,
    materials: {
      [ItemId.RefinedIngot]: 52,
      [ItemId.Polymer]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.SemiAutoRifle3]: {
    product: ItemId.SemiAutoRifle3,
    materials: {
      [ItemId.RefinedIngot]: 61,
      [ItemId.Polymer]: 17,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.SemiAutoRifle4]: {
    product: ItemId.SemiAutoRifle4,
    materials: {
      [ItemId.RefinedIngot]: 70,
      [ItemId.Polymer]: 20,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MakeshiftAssaultRifle]: {
    product: ItemId.MakeshiftAssaultRifle,
    materials: {
      [ItemId.Ingot]: 70,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.Fiber]: 60,
    },
  },
  [ItemId.MakeshiftAssaultRifle1]: {
    product: ItemId.MakeshiftAssaultRifle1,
    materials: {
      [ItemId.Ingot]: 87,
      [ItemId.HighQualityPalOil]: 25,
      [ItemId.Fiber]: 75,
    },
  },
  [ItemId.MakeshiftAssaultRifle2]: {
    product: ItemId.MakeshiftAssaultRifle2,
    materials: {
      [ItemId.Ingot]: 105,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.Fiber]: 90,
    },
  },
  [ItemId.MakeshiftAssaultRifle3]: {
    product: ItemId.MakeshiftAssaultRifle3,
    materials: {
      [ItemId.Ingot]: 122,
      [ItemId.HighQualityPalOil]: 35,
      [ItemId.Fiber]: 105,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MakeshiftAssaultRifle4]: {
    product: ItemId.MakeshiftAssaultRifle4,
    materials: {
      [ItemId.Ingot]: 140,
      [ItemId.HighQualityPalOil]: 40,
      [ItemId.Fiber]: 120,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.AssaultRifle]: {
    product: ItemId.AssaultRifle,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Polymer]: 10,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.AssaultRifle1]: {
    product: ItemId.AssaultRifle1,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 12,
      [ItemId.CarbonFiber]: 12,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.AssaultRifle2]: {
    product: ItemId.AssaultRifle2,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Polymer]: 15,
      [ItemId.CarbonFiber]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.AssaultRifle3]: {
    product: ItemId.AssaultRifle3,
    materials: {
      [ItemId.RefinedIngot]: 70,
      [ItemId.Polymer]: 17,
      [ItemId.CarbonFiber]: 17,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.AssaultRifle4]: {
    product: ItemId.AssaultRifle4,
    materials: {
      [ItemId.RefinedIngot]: 80,
      [ItemId.Polymer]: 20,
      [ItemId.CarbonFiber]: 20,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.HeavyAssaultRifle]: {
    product: ItemId.HeavyAssaultRifle,
    materials: {
      [ItemId.SoraliteIngot]: 100,
      [ItemId.CarbonFiber]: 50,
      [ItemId.BioBattery]: 30,
      [ItemId.AICore]: 5,
    },
  },
  [ItemId.HeavyAssaultRifle1]: {
    product: ItemId.HeavyAssaultRifle1,
    materials: {
      [ItemId.SoraliteIngot]: 125,
      [ItemId.CarbonFiber]: 62,
      [ItemId.BioBattery]: 37,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HeavyAssaultRifle2]: {
    product: ItemId.HeavyAssaultRifle2,
    materials: {
      [ItemId.SoraliteIngot]: 150,
      [ItemId.CarbonFiber]: 75,
      [ItemId.BioBattery]: 45,
      [ItemId.AICore]: 7,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.HeavyAssaultRifle3]: {
    product: ItemId.HeavyAssaultRifle3,
    materials: {
      [ItemId.SoraliteIngot]: 175,
      [ItemId.CarbonFiber]: 87,
      [ItemId.BioBattery]: 52,
      [ItemId.AICore]: 8,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.HeavyAssaultRifle4]: {
    product: ItemId.HeavyAssaultRifle4,
    materials: {
      [ItemId.SoraliteIngot]: 200,
      [ItemId.CarbonFiber]: 100,
      [ItemId.BioBattery]: 60,
      [ItemId.AICore]: 10,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.PlasmaRifle]: {
    product: ItemId.PlasmaRifle,
    materials: {
      [ItemId.PaloxiteIngot]: 80,
      [ItemId.BioBattery]: 50,
      [ItemId.AICore]: 8,
      [ItemId.AncientCivilizationCore]: 7,
    },
  },
  [ItemId.PlasmaRifle1]: {
    product: ItemId.PlasmaRifle1,
    materials: {
      [ItemId.PaloxiteIngot]: 100,
      [ItemId.BioBattery]: 62,
      [ItemId.AICore]: 10,
      [ItemId.AncientCivilizationCore]: 8,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.PlasmaRifle2]: {
    product: ItemId.PlasmaRifle2,
    materials: {
      [ItemId.PaloxiteIngot]: 120,
      [ItemId.BioBattery]: 75,
      [ItemId.AICore]: 12,
      [ItemId.AncientCivilizationCore]: 10,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.PlasmaRifle3]: {
    product: ItemId.PlasmaRifle3,
    materials: {
      [ItemId.PaloxiteIngot]: 140,
      [ItemId.BioBattery]: 87,
      [ItemId.AICore]: 14,
      [ItemId.AncientCivilizationCore]: 12,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.PlasmaRifle4]: {
    product: ItemId.PlasmaRifle4,
    materials: {
      [ItemId.PaloxiteIngot]: 160,
      [ItemId.BioBattery]: 100,
      [ItemId.AICore]: 16,
      [ItemId.AncientCivilizationCore]: 14,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.MakeshiftSMG]: {
    product: ItemId.MakeshiftSMG,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.MakeshiftSMG1]: {
    product: ItemId.MakeshiftSMG1,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.HighQualityPalOil]: 12,
      [ItemId.Fiber]: 37,
    },
  },
  [ItemId.MakeshiftSMG2]: {
    product: ItemId.MakeshiftSMG2,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.Fiber]: 45,
    },
  },
  [ItemId.MakeshiftSMG3]: {
    product: ItemId.MakeshiftSMG3,
    materials: {
      [ItemId.Ingot]: 70,
      [ItemId.HighQualityPalOil]: 17,
      [ItemId.Fiber]: 52,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MakeshiftSMG4]: {
    product: ItemId.MakeshiftSMG4,
    materials: {
      [ItemId.Ingot]: 80,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.Fiber]: 60,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.SMG]: {
    product: ItemId.SMG,
    materials: {
      [ItemId.RefinedIngot]: 25,
      [ItemId.Polymer]: 6,
    },
  },
  [ItemId.SMG1]: {
    product: ItemId.SMG1,
    materials: {
      [ItemId.RefinedIngot]: 31,
      [ItemId.Polymer]: 7,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.SMG2]: {
    product: ItemId.SMG2,
    materials: {
      [ItemId.RefinedIngot]: 37,
      [ItemId.Polymer]: 9,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.SMG3]: {
    product: ItemId.SMG3,
    materials: {
      [ItemId.RefinedIngot]: 43,
      [ItemId.Polymer]: 10,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.SMG4]: {
    product: ItemId.SMG4,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 12,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.CombatSMG]: {
    product: ItemId.CombatSMG,
    materials: {
      [ItemId.SoraliteIngot]: 50,
      [ItemId.CarbonFiber]: 30,
      [ItemId.CryogenicCoolant]: 20,
      [ItemId.AICore]: 4,
    },
  },
  [ItemId.CombatSMG1]: {
    product: ItemId.CombatSMG1,
    materials: {
      [ItemId.SoraliteIngot]: 62,
      [ItemId.CarbonFiber]: 37,
      [ItemId.CryogenicCoolant]: 25,
      [ItemId.AICore]: 5,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.CombatSMG2]: {
    product: ItemId.CombatSMG2,
    materials: {
      [ItemId.SoraliteIngot]: 75,
      [ItemId.CarbonFiber]: 45,
      [ItemId.CryogenicCoolant]: 30,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.CombatSMG3]: {
    product: ItemId.CombatSMG3,
    materials: {
      [ItemId.SoraliteIngot]: 87,
      [ItemId.CarbonFiber]: 52,
      [ItemId.CryogenicCoolant]: 35,
      [ItemId.AICore]: 7,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.CombatSMG4]: {
    product: ItemId.CombatSMG4,
    materials: {
      [ItemId.SoraliteIngot]: 100,
      [ItemId.CarbonFiber]: 60,
      [ItemId.CryogenicCoolant]: 40,
      [ItemId.AICore]: 8,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.RocketLauncher]: {
    product: ItemId.RocketLauncher,
    materials: {
      [ItemId.CoralumIngot]: 75,
      [ItemId.Polymer]: 30,
      [ItemId.CarbonFiber]: 25,
      [ItemId.Computer]: 10,
    },
  },
  [ItemId.RocketLauncher1]: {
    product: ItemId.RocketLauncher1,
    materials: {
      [ItemId.CoralumIngot]: 93,
      [ItemId.Polymer]: 37,
      [ItemId.CarbonFiber]: 31,
      [ItemId.Computer]: 12,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.RocketLauncher2]: {
    product: ItemId.RocketLauncher2,
    materials: {
      [ItemId.CoralumIngot]: 112,
      [ItemId.Polymer]: 45,
      [ItemId.CarbonFiber]: 37,
      [ItemId.Computer]: 15,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.RocketLauncher3]: {
    product: ItemId.RocketLauncher3,
    materials: {
      [ItemId.CoralumIngot]: 131,
      [ItemId.Polymer]: 52,
      [ItemId.CarbonFiber]: 43,
      [ItemId.Computer]: 17,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.RocketLauncher4]: {
    product: ItemId.RocketLauncher4,
    materials: {
      [ItemId.CoralumIngot]: 150,
      [ItemId.Polymer]: 60,
      [ItemId.CarbonFiber]: 50,
      [ItemId.Computer]: 20,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MeteorLauncher]: {
    product: ItemId.MeteorLauncher,
    materials: {
      [ItemId.MeteoriteFragment]: 100,
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.CorrosiveSolvent]: 5,
    },
  },
  [ItemId.MeteorLauncher4]: {
    product: ItemId.MeteorLauncher4,
    materials: {
      [ItemId.MeteoriteFragment]: 200,
      [ItemId.RefinedIngot]: 60,
      [ItemId.PaldiumFragment]: 40,
      [ItemId.CorrosiveSolvent]: 10,
    },
  },
  [ItemId.SingleShotSphereLauncher]: {
    product: ItemId.SingleShotSphereLauncher,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.Stone]: 100,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.ScatterSphereLauncher]: {
    product: ItemId.ScatterSphereLauncher,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 15,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.CarbonFiber]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HomingSphereLauncher]: {
    product: ItemId.HomingSphereLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 100,
      [ItemId.Polymer]: 50,
      [ItemId.PaldiumFragment]: 200,
      [ItemId.CarbonFiber]: 50,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.LaserRifle]: {
    product: ItemId.LaserRifle,
    materials: {
      [ItemId.PalMetalIngot]: 50,
      [ItemId.Plasteel]: 40,
      [ItemId.BioBattery]: 5,
      [ItemId.Computer]: 3,
    },
  },
  [ItemId.LaserRifle1]: {
    product: ItemId.LaserRifle1,
    materials: {
      [ItemId.PalMetalIngot]: 62,
      [ItemId.Plasteel]: 50,
      [ItemId.BioBattery]: 6,
      [ItemId.Computer]: 3,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.LaserRifle2]: {
    product: ItemId.LaserRifle2,
    materials: {
      [ItemId.PalMetalIngot]: 75,
      [ItemId.Plasteel]: 60,
      [ItemId.BioBattery]: 7,
      [ItemId.Computer]: 4,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.LaserRifle3]: {
    product: ItemId.LaserRifle3,
    materials: {
      [ItemId.PalMetalIngot]: 87,
      [ItemId.Plasteel]: 70,
      [ItemId.BioBattery]: 8,
      [ItemId.Computer]: 5,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.LaserRifle4]: {
    product: ItemId.LaserRifle4,
    materials: {
      [ItemId.PalMetalIngot]: 100,
      [ItemId.Plasteel]: 80,
      [ItemId.BioBattery]: 10,
      [ItemId.Computer]: 6,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.ChargeRifle]: {
    product: ItemId.ChargeRifle,
    materials: {
      [ItemId.CoralumIngot]: 200,
      [ItemId.BioBattery]: 25,
      [ItemId.ThermalCore]: 5,
      [ItemId.Computer]: 15,
    },
  },
  [ItemId.ChargeRifle1]: {
    product: ItemId.ChargeRifle1,
    materials: {
      [ItemId.CoralumIngot]: 250,
      [ItemId.BioBattery]: 31,
      [ItemId.ThermalCore]: 6,
      [ItemId.Computer]: 18,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.ChargeRifle2]: {
    product: ItemId.ChargeRifle2,
    materials: {
      [ItemId.CoralumIngot]: 300,
      [ItemId.BioBattery]: 37,
      [ItemId.ThermalCore]: 7,
      [ItemId.Computer]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.ChargeRifle3]: {
    product: ItemId.ChargeRifle3,
    materials: {
      [ItemId.CoralumIngot]: 350,
      [ItemId.BioBattery]: 43,
      [ItemId.ThermalCore]: 8,
      [ItemId.Computer]: 26,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.ChargeRifle4]: {
    product: ItemId.ChargeRifle4,
    materials: {
      [ItemId.CoralumIngot]: 400,
      [ItemId.BioBattery]: 50,
      [ItemId.ThermalCore]: 10,
      [ItemId.Computer]: 30,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.OverheatRifle]: {
    product: ItemId.OverheatRifle,
    materials: {
      [ItemId.CoralumIngot]: 160,
      [ItemId.Hexolite]: 135,
      [ItemId.ThermalCore]: 5,
      [ItemId.CryogenicCoolant]: 50,
    },
  },
  [ItemId.OverheatRifle1]: {
    product: ItemId.OverheatRifle1,
    materials: {
      [ItemId.CoralumIngot]: 200,
      [ItemId.Hexolite]: 168,
      [ItemId.ThermalCore]: 6,
      [ItemId.CryogenicCoolant]: 62,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.OverheatRifle2]: {
    product: ItemId.OverheatRifle2,
    materials: {
      [ItemId.CoralumIngot]: 240,
      [ItemId.Hexolite]: 202,
      [ItemId.ThermalCore]: 7,
      [ItemId.CryogenicCoolant]: 75,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.OverheatRifle3]: {
    product: ItemId.OverheatRifle3,
    materials: {
      [ItemId.CoralumIngot]: 280,
      [ItemId.Hexolite]: 236,
      [ItemId.ThermalCore]: 8,
      [ItemId.CryogenicCoolant]: 87,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.OverheatRifle4]: {
    product: ItemId.OverheatRifle4,
    materials: {
      [ItemId.CoralumIngot]: 320,
      [ItemId.Hexolite]: 270,
      [ItemId.ThermalCore]: 10,
      [ItemId.CryogenicCoolant]: 100,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.Flamethrower]: {
    product: ItemId.Flamethrower,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.Plasteel]: 30,
      [ItemId.CryogenicCoolant]: 13,
      [ItemId.FlameOrgan]: 30,
    },
  },
  [ItemId.Flamethrower1]: {
    product: ItemId.Flamethrower1,
    materials: {
      [ItemId.PalMetalIngot]: 50,
      [ItemId.Plasteel]: 37,
      [ItemId.CryogenicCoolant]: 16,
      [ItemId.FlameOrgan]: 37,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.Flamethrower2]: {
    product: ItemId.Flamethrower2,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.Plasteel]: 45,
      [ItemId.CryogenicCoolant]: 19,
      [ItemId.FlameOrgan]: 45,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Flamethrower3]: {
    product: ItemId.Flamethrower3,
    materials: {
      [ItemId.PalMetalIngot]: 70,
      [ItemId.Plasteel]: 52,
      [ItemId.CryogenicCoolant]: 22,
      [ItemId.FlameOrgan]: 52,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.Flamethrower4]: {
    product: ItemId.Flamethrower4,
    materials: {
      [ItemId.PalMetalIngot]: 80,
      [ItemId.Plasteel]: 60,
      [ItemId.CryogenicCoolant]: 26,
      [ItemId.FlameOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.GatlingGun]: {
    product: ItemId.GatlingGun,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 70,
      [ItemId.CarbonFiber]: 70,
    },
  },
  [ItemId.GatlingGun1]: {
    product: ItemId.GatlingGun1,
    materials: {
      [ItemId.PalMetalIngot]: 187,
      [ItemId.Plasteel]: 87,
      [ItemId.CarbonFiber]: 87,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.GatlingGun2]: {
    product: ItemId.GatlingGun2,
    materials: {
      [ItemId.PalMetalIngot]: 225,
      [ItemId.Plasteel]: 105,
      [ItemId.CarbonFiber]: 105,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GatlingGun3]: {
    product: ItemId.GatlingGun3,
    materials: {
      [ItemId.PalMetalIngot]: 262,
      [ItemId.Plasteel]: 122,
      [ItemId.CarbonFiber]: 122,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.GatlingGun4]: {
    product: ItemId.GatlingGun4,
    materials: {
      [ItemId.PalMetalIngot]: 300,
      [ItemId.Plasteel]: 140,
      [ItemId.CarbonFiber]: 140,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LaserGatlingGun]: {
    product: ItemId.LaserGatlingGun,
    materials: {
      [ItemId.Plasteel]: 110,
      [ItemId.Hexolite]: 100,
      [ItemId.Computer]: 10,
      [ItemId.ThermalCore]: 3,
    },
  },
  [ItemId.LaserGatlingGun1]: {
    product: ItemId.LaserGatlingGun1,
    materials: {
      [ItemId.Plasteel]: 137,
      [ItemId.Hexolite]: 125,
      [ItemId.Computer]: 12,
      [ItemId.ThermalCore]: 3,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.LaserGatlingGun2]: {
    product: ItemId.LaserGatlingGun2,
    materials: {
      [ItemId.Plasteel]: 165,
      [ItemId.Hexolite]: 150,
      [ItemId.Computer]: 15,
      [ItemId.ThermalCore]: 4,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.LaserGatlingGun3]: {
    product: ItemId.LaserGatlingGun3,
    materials: {
      [ItemId.Plasteel]: 192,
      [ItemId.Hexolite]: 175,
      [ItemId.Computer]: 17,
      [ItemId.ThermalCore]: 5,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LaserGatlingGun4]: {
    product: ItemId.LaserGatlingGun4,
    materials: {
      [ItemId.Plasteel]: 220,
      [ItemId.Hexolite]: 200,
      [ItemId.Computer]: 20,
      [ItemId.ThermalCore]: 6,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.GrenadeLauncher]: {
    product: ItemId.GrenadeLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 75,
      [ItemId.Plasteel]: 60,
      [ItemId.CarbonFiber]: 15,
    },
  },
  [ItemId.GrenadeLauncher1]: {
    product: ItemId.GrenadeLauncher1,
    materials: {
      [ItemId.PalMetalIngot]: 93,
      [ItemId.Plasteel]: 75,
      [ItemId.CarbonFiber]: 18,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.GrenadeLauncher2]: {
    product: ItemId.GrenadeLauncher2,
    materials: {
      [ItemId.PalMetalIngot]: 112,
      [ItemId.Plasteel]: 90,
      [ItemId.CarbonFiber]: 22,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.GrenadeLauncher3]: {
    product: ItemId.GrenadeLauncher3,
    materials: {
      [ItemId.PalMetalIngot]: 131,
      [ItemId.Plasteel]: 105,
      [ItemId.CarbonFiber]: 26,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GrenadeLauncher4]: {
    product: ItemId.GrenadeLauncher4,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 120,
      [ItemId.CarbonFiber]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.TacticalGrenadeLauncher]: {
    product: ItemId.TacticalGrenadeLauncher,
    materials: {
      [ItemId.SoraliteIngot]: 80,
      [ItemId.CorrosiveSolvent]: 15,
      [ItemId.ThermalCore]: 5,
      [ItemId.AICore]: 5,
    },
  },
  [ItemId.TacticalGrenadeLauncher1]: {
    product: ItemId.TacticalGrenadeLauncher1,
    materials: {
      [ItemId.SoraliteIngot]: 100,
      [ItemId.CorrosiveSolvent]: 18,
      [ItemId.ThermalCore]: 6,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.TacticalGrenadeLauncher2]: {
    product: ItemId.TacticalGrenadeLauncher2,
    materials: {
      [ItemId.SoraliteIngot]: 120,
      [ItemId.CorrosiveSolvent]: 22,
      [ItemId.ThermalCore]: 7,
      [ItemId.AICore]: 7,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.TacticalGrenadeLauncher3]: {
    product: ItemId.TacticalGrenadeLauncher3,
    materials: {
      [ItemId.SoraliteIngot]: 140,
      [ItemId.CorrosiveSolvent]: 26,
      [ItemId.ThermalCore]: 8,
      [ItemId.AICore]: 8,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.TacticalGrenadeLauncher4]: {
    product: ItemId.TacticalGrenadeLauncher4,
    materials: {
      [ItemId.SoraliteIngot]: 160,
      [ItemId.CorrosiveSolvent]: 30,
      [ItemId.ThermalCore]: 10,
      [ItemId.AICore]: 10,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.GuidedMissileLauncher]: {
    product: ItemId.GuidedMissileLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 100,
      [ItemId.Plasteel]: 50,
      [ItemId.CarbonFiber]: 25,
      [ItemId.Computer]: 5,
    },
  },
  [ItemId.GuidedMissileLauncher1]: {
    product: ItemId.GuidedMissileLauncher1,
    materials: {
      [ItemId.PalMetalIngot]: 125,
      [ItemId.Plasteel]: 62,
      [ItemId.CarbonFiber]: 31,
      [ItemId.Computer]: 6,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GuidedMissileLauncher2]: {
    product: ItemId.GuidedMissileLauncher2,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 75,
      [ItemId.CarbonFiber]: 37,
      [ItemId.Computer]: 7,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.GuidedMissileLauncher3]: {
    product: ItemId.GuidedMissileLauncher3,
    materials: {
      [ItemId.PalMetalIngot]: 175,
      [ItemId.Plasteel]: 87,
      [ItemId.CarbonFiber]: 43,
      [ItemId.Computer]: 8,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.GuidedMissileLauncher4]: {
    product: ItemId.GuidedMissileLauncher4,
    materials: {
      [ItemId.PalMetalIngot]: 200,
      [ItemId.Plasteel]: 100,
      [ItemId.CarbonFiber]: 50,
      [ItemId.Computer]: 10,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.MultiGuidedMissileLauncher]: {
    product: ItemId.MultiGuidedMissileLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 80,
      [ItemId.CarbonFiber]: 30,
      [ItemId.Computer]: 8,
    },
  },
  [ItemId.MultiGuidedMissileLauncher1]: {
    product: ItemId.MultiGuidedMissileLauncher1,
    materials: {
      [ItemId.PalMetalIngot]: 187,
      [ItemId.Plasteel]: 100,
      [ItemId.CarbonFiber]: 37,
      [ItemId.Computer]: 10,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MultiGuidedMissileLauncher2]: {
    product: ItemId.MultiGuidedMissileLauncher2,
    materials: {
      [ItemId.PalMetalIngot]: 225,
      [ItemId.Plasteel]: 120,
      [ItemId.CarbonFiber]: 45,
      [ItemId.Computer]: 12,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncher3]: {
    product: ItemId.MultiGuidedMissileLauncher3,
    materials: {
      [ItemId.PalMetalIngot]: 262,
      [ItemId.Plasteel]: 140,
      [ItemId.CarbonFiber]: 52,
      [ItemId.Computer]: 14,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.MultiGuidedMissileLauncher4]: {
    product: ItemId.MultiGuidedMissileLauncher4,
    materials: {
      [ItemId.PalMetalIngot]: 300,
      [ItemId.Plasteel]: 160,
      [ItemId.CarbonFiber]: 60,
      [ItemId.Computer]: 16,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.PlasmaCannon]: {
    product: ItemId.PlasmaCannon,
    materials: {
      [ItemId.Plasteel]: 150,
      [ItemId.Hexolite]: 130,
      [ItemId.ThermalCore]: 4,
      [ItemId.Computer]: 8,
    },
  },
  [ItemId.PlasmaCannon1]: {
    product: ItemId.PlasmaCannon1,
    materials: {
      [ItemId.Plasteel]: 187,
      [ItemId.Hexolite]: 162,
      [ItemId.ThermalCore]: 5,
      [ItemId.Computer]: 10,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.PlasmaCannon2]: {
    product: ItemId.PlasmaCannon2,
    materials: {
      [ItemId.Plasteel]: 225,
      [ItemId.Hexolite]: 195,
      [ItemId.ThermalCore]: 6,
      [ItemId.Computer]: 12,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.PlasmaCannon3]: {
    product: ItemId.PlasmaCannon3,
    materials: {
      [ItemId.Plasteel]: 262,
      [ItemId.Hexolite]: 227,
      [ItemId.ThermalCore]: 7,
      [ItemId.Computer]: 14,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.PlasmaCannon4]: {
    product: ItemId.PlasmaCannon4,
    materials: {
      [ItemId.Plasteel]: 300,
      [ItemId.Hexolite]: 260,
      [ItemId.ThermalCore]: 8,
      [ItemId.Computer]: 16,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.BeamLauncher]: {
    product: ItemId.BeamLauncher,
    materials: {
      [ItemId.PaloxiteIngot]: 100,
      [ItemId.BioBattery]: 50,
      [ItemId.AICore]: 10,
      [ItemId.AncientCivilizationCore]: 10,
    },
  },
  [ItemId.BeamLauncher1]: {
    product: ItemId.BeamLauncher1,
    materials: {
      [ItemId.PaloxiteIngot]: 125,
      [ItemId.BioBattery]: 62,
      [ItemId.AICore]: 12,
      [ItemId.AncientCivilizationCore]: 12,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.BeamLauncher2]: {
    product: ItemId.BeamLauncher2,
    materials: {
      [ItemId.PaloxiteIngot]: 150,
      [ItemId.BioBattery]: 75,
      [ItemId.AICore]: 15,
      [ItemId.AncientCivilizationCore]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.BeamLauncher3]: {
    product: ItemId.BeamLauncher3,
    materials: {
      [ItemId.PaloxiteIngot]: 175,
      [ItemId.BioBattery]: 87,
      [ItemId.AICore]: 17,
      [ItemId.AncientCivilizationCore]: 17,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.BeamLauncher4]: {
    product: ItemId.BeamLauncher4,
    materials: {
      [ItemId.PaloxiteIngot]: 200,
      [ItemId.BioBattery]: 100,
      [ItemId.AICore]: 20,
      [ItemId.AncientCivilizationCore]: 20,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.DroneLauncher]: {
    product: ItemId.DroneLauncher,
    materials: {
      [ItemId.PaloxiteIngot]: 70,
      [ItemId.WorldTreeHolyWater]: 40,
      [ItemId.AICore]: 8,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.DroneLauncher1]: {
    product: ItemId.DroneLauncher1,
    materials: {
      [ItemId.PaloxiteIngot]: 87,
      [ItemId.WorldTreeHolyWater]: 50,
      [ItemId.AICore]: 10,
      [ItemId.AncientCivilizationCore]: 6,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.DroneLauncher2]: {
    product: ItemId.DroneLauncher2,
    materials: {
      [ItemId.PaloxiteIngot]: 105,
      [ItemId.WorldTreeHolyWater]: 60,
      [ItemId.AICore]: 12,
      [ItemId.AncientCivilizationCore]: 7,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.DroneLauncher3]: {
    product: ItemId.DroneLauncher3,
    materials: {
      [ItemId.PaloxiteIngot]: 122,
      [ItemId.WorldTreeHolyWater]: 70,
      [ItemId.AICore]: 14,
      [ItemId.AncientCivilizationCore]: 8,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.DroneLauncher4]: {
    product: ItemId.DroneLauncher4,
    materials: {
      [ItemId.PaloxiteIngot]: 140,
      [ItemId.WorldTreeHolyWater]: 80,
      [ItemId.AICore]: 16,
      [ItemId.AncientCivilizationCore]: 10,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.Excalibur]: {
    product: ItemId.Excalibur,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.Excalibur1]: {
    product: ItemId.Excalibur1,
    materials: {
      [ItemId.HallowedBar]: 45,
    },
  },
  [ItemId.Excalibur2]: {
    product: ItemId.Excalibur2,
    materials: {
      [ItemId.HallowedBar]: 90,
    },
  },
  [ItemId.Excalibur3]: {
    product: ItemId.Excalibur3,
    materials: {
      [ItemId.HallowedBar]: 180,
    },
  },
  [ItemId.Excalibur4]: {
    product: ItemId.Excalibur4,
    materials: {
      [ItemId.HallowedBar]: 360,
    },
  },
  [ItemId.TerraBlade]: {
    product: ItemId.TerraBlade,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
    },
  },
  [ItemId.TerraBlade1]: {
    product: ItemId.TerraBlade1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
    },
  },
  [ItemId.TerraBlade2]: {
    product: ItemId.TerraBlade2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
    },
  },
  [ItemId.TerraBlade3]: {
    product: ItemId.TerraBlade3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
    },
  },
  [ItemId.TerraBlade4]: {
    product: ItemId.TerraBlade4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
    },
  },
  [ItemId.VortexBeater]: {
    product: ItemId.VortexBeater,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
      [ItemId.ElectricOrgan]: 5,
    },
  },
  [ItemId.VortexBeater1]: {
    product: ItemId.VortexBeater1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.ElectricOrgan]: 10,
    },
  },
  [ItemId.VortexBeater2]: {
    product: ItemId.VortexBeater2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.ElectricOrgan]: 15,
    },
  },
  [ItemId.VortexBeater3]: {
    product: ItemId.VortexBeater3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
      [ItemId.ElectricOrgan]: 20,
    },
  },
  [ItemId.VortexBeater4]: {
    product: ItemId.VortexBeater4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
      [ItemId.ElectricOrgan]: 25,
    },
  },
  [ItemId.Nightglow]: {
    product: ItemId.Nightglow,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Nightglow1]: {
    product: ItemId.Nightglow1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.Nightglow2]: {
    product: ItemId.Nightglow2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.Nightglow3]: {
    product: ItemId.Nightglow3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.Nightglow4]: {
    product: ItemId.Nightglow4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.Terraprisma]: {
    product: ItemId.Terraprisma,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Terraprisma1]: {
    product: ItemId.Terraprisma1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.Terraprisma2]: {
    product: ItemId.Terraprisma2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.Terraprisma3]: {
    product: ItemId.Terraprisma3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.Terraprisma4]: {
    product: ItemId.Terraprisma4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.Meowmere]: {
    product: ItemId.Meowmere,
    materials: {
      [ItemId.Ingot]: 22,
      [ItemId.PaldiumFragment]: 22,
      [ItemId.Coal]: 22,
    },
  },
  [ItemId.LegendaryMeowmere]: {
    product: ItemId.LegendaryMeowmere,
    materials: {
      [ItemId.HallowedBar]: 22,
      [ItemId.PaldiumFragment]: 22,
      [ItemId.Coal]: 22,
    },
  },
  [ItemId.MarksmanRevolver]: {
    product: ItemId.MarksmanRevolver,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 30,
    },
  },
  [ItemId.MarksmanRevolver1]: {
    product: ItemId.MarksmanRevolver1,
    materials: {
      [ItemId.Ingot]: 75,
      [ItemId.HighQualityPalOil]: 18,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 37,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.MarksmanRevolver2]: {
    product: ItemId.MarksmanRevolver2,
    materials: {
      [ItemId.Ingot]: 90,
      [ItemId.HighQualityPalOil]: 22,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 45,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.MarksmanRevolver3]: {
    product: ItemId.MarksmanRevolver3,
    materials: {
      [ItemId.Ingot]: 105,
      [ItemId.HighQualityPalOil]: 26,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 52,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MarksmanRevolver4]: {
    product: ItemId.MarksmanRevolver4,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.CoreEjectShotgun]: {
    product: ItemId.CoreEjectShotgun,
    materials: {
      [ItemId.PalMetalIngot]: 80,
      [ItemId.Plasteel]: 65,
      [ItemId.CarbonFiber]: 32,
      [ItemId.FlameOrgan]: 40,
    },
  },
  [ItemId.CoreEjectShotgun1]: {
    product: ItemId.CoreEjectShotgun1,
    materials: {
      [ItemId.PalMetalIngot]: 100,
      [ItemId.Plasteel]: 81,
      [ItemId.CarbonFiber]: 40,
      [ItemId.FlameOrgan]: 50,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.CoreEjectShotgun2]: {
    product: ItemId.CoreEjectShotgun2,
    materials: {
      [ItemId.PalMetalIngot]: 120,
      [ItemId.Plasteel]: 97,
      [ItemId.CarbonFiber]: 48,
      [ItemId.FlameOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.CoreEjectShotgun3]: {
    product: ItemId.CoreEjectShotgun3,
    materials: {
      [ItemId.PalMetalIngot]: 140,
      [ItemId.Plasteel]: 113,
      [ItemId.CarbonFiber]: 56,
      [ItemId.FlameOrgan]: 70,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.CoreEjectShotgun4]: {
    product: ItemId.CoreEjectShotgun4,
    materials: {
      [ItemId.PalMetalIngot]: 160,
      [ItemId.Plasteel]: 130,
      [ItemId.CarbonFiber]: 64,
      [ItemId.FlameOrgan]: 80,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.BeginnerFishingRodChillet]: {
    product: ItemId.BeginnerFishingRodChillet,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.AquaticPalFluids]: 3,
      [ItemId.Ingot]: 8,
      [ItemId.Fiber]: 8,
    },
  },
  [ItemId.BeginnerFishingRodGumoss]: {
    product: ItemId.BeginnerFishingRodGumoss,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.AquaticPalFluids]: 6,
      [ItemId.Ingot]: 16,
      [ItemId.Fiber]: 16,
      [ItemId.CoralumOre]: 3,
    },
  },
  [ItemId.IntermediateFishingRodCattiva]: {
    product: ItemId.IntermediateFishingRodCattiva,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.HighQualityPalOil]: 5,
      [ItemId.Cement]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.IntermediateFishingRodCroajiro]: {
    product: ItemId.IntermediateFishingRodCroajiro,
    materials: {
      [ItemId.PaldiumFragment]: 60,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Cement]: 20,
      [ItemId.Fiber]: 60,
      [ItemId.CoralumOre]: 10,
    },
  },
  [ItemId.AdvancedFishingRodPengullet]: {
    product: ItemId.AdvancedFishingRodPengullet,
    materials: {
      [ItemId.PaldiumFragment]: 70,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.PalMetalIngot]: 15,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.AdvancedFishingRodDepresso]: {
    product: ItemId.AdvancedFishingRodDepresso,
    materials: {
      [ItemId.PaldiumFragment]: 140,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.CarbonFiber]: 20,
      [ItemId.CoralumIngot]: 5,
    },
  },
  [ItemId.FragGrenade]: {
    product: ItemId.FragGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Stone]: 10,
    },
  },
  [ItemId.ShockGrenade]: {
    product: ItemId.ShockGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Stone]: 10,
      [ItemId.ElectricOrgan]: 1,
    },
  },
  [ItemId.IceGrenade]: {
    product: ItemId.IceGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Stone]: 10,
      [ItemId.IceOrgan]: 1,
    },
  },
  [ItemId.IncendiaryGrenade]: {
    product: ItemId.IncendiaryGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Stone]: 10,
      [ItemId.FlameOrgan]: 1,
    },
  },
  [ItemId.WaterGrenade]: {
    product: ItemId.WaterGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.CryogenicCoolant]: 1,
    },
  },
  [ItemId.GrassGrenade]: {
    product: ItemId.GrassGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Hardwood]: 1,
    },
  },
  [ItemId.GroundGrenade]: {
    product: ItemId.GroundGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Stone]: 10,
      [ItemId.Ore]: 1,
    },
  },
  [ItemId.DarkGrenade]: {
    product: ItemId.DarkGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.CorrosiveSolvent]: 1,
    },
  },
  [ItemId.DragonGrenade]: {
    product: ItemId.DragonGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Stone]: 10,
      [ItemId.Horn]: 1,
    },
  },
  [ItemId.FragGrenadeMk2]: {
    product: ItemId.FragGrenadeMk2,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.PalMetalIngot]: 3,
      [ItemId.CrudeOil]: 3,
    },
  },
  [ItemId.PalRecoveryGrenade]: {
    product: ItemId.PalRecoveryGrenade,
    materials: {
      [ItemId.Gunpowder1]: 1,
      [ItemId.Stone]: 10,
      [ItemId.CavernMushroom]: 5,
    },
  },
  [ItemId.CommonShield]: {
    product: ItemId.CommonShield,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Wood]: 20,
      ["stone"]: 20,
      [ItemId.Fiber]: 10,
    },
  },
  [ItemId.MegaShield]: {
    product: ItemId.MegaShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 5,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Ingot]: 10,
    },
  },
  [ItemId.GigaShield]: {
    product: ItemId.GigaShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 10,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.Ingot]: 20,
    },
  },
  [ItemId.HyperShield]: {
    product: ItemId.HyperShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 20,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.Ingot]: 30,
    },
  },
  [ItemId.UltraShield]: {
    product: ItemId.UltraShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 30,
      [ItemId.PaldiumFragment]: 150,
      [ItemId.Plasteel]: 50,
      [ItemId.BioBattery]: 10,
      [ItemId.AncientCivilizationCore]: 30,
    },
  },
  [ItemId.AdvancedShield]: {
    product: ItemId.AdvancedShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 50,
      [ItemId.PaldiumFragment]: 200,
      [ItemId.Hexolite]: 50,
      [ItemId.ThermalCore]: 5,
      [ItemId.AncientCivilizationCore]: 30,
    },
  },
  [ItemId.AncientShield]: {
    product: ItemId.AncientShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 50,
      [ItemId.PaldiumFragment]: 250,
      [ItemId.SoraliteIngot]: 30,
      [ItemId.AICore]: 5,
      [ItemId.AncientCivilizationCore]: 30,
    },
  },
  [ItemId.ClothOutfit]: {
    product: ItemId.ClothOutfit,
    materials: {
      [ItemId.Cloth]: 2,
      [ItemId.Fiber]: 7,
    },
  },
  [ItemId.ClothOutfit1]: {
    product: ItemId.ClothOutfit1,
    materials: {
      [ItemId.Cloth]: 3,
      [ItemId.Fiber]: 8,
    },
  },
  [ItemId.ClothOutfit2]: {
    product: ItemId.ClothOutfit2,
    materials: {
      [ItemId.Cloth]: 4,
      [ItemId.Fiber]: 10,
    },
  },
  [ItemId.ClothOutfit3]: {
    product: ItemId.ClothOutfit3,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.Fiber]: 12,
    },
  },
  [ItemId.ClothOutfit4]: {
    product: ItemId.ClothOutfit4,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.Fiber]: 14,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.TropicalOutfit]: {
    product: ItemId.TropicalOutfit,
    materials: {
      [ItemId.Cloth]: 3,
      [ItemId.FlameOrgan]: 2,
    },
  },
  [ItemId.TropicalOutfit1]: {
    product: ItemId.TropicalOutfit1,
    materials: {
      [ItemId.Cloth]: 4,
      [ItemId.FlameOrgan]: 3,
    },
  },
  [ItemId.TropicalOutfit2]: {
    product: ItemId.TropicalOutfit2,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.FlameOrgan]: 4,
    },
  },
  [ItemId.TropicalOutfit3]: {
    product: ItemId.TropicalOutfit3,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.FlameOrgan]: 5,
    },
  },
  [ItemId.TropicalOutfit4]: {
    product: ItemId.TropicalOutfit4,
    materials: {
      [ItemId.Cloth]: 7,
      [ItemId.FlameOrgan]: 6,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.TundraOutfit]: {
    product: ItemId.TundraOutfit,
    materials: {
      [ItemId.Cloth]: 3,
      [ItemId.IceOrgan]: 2,
    },
  },
  [ItemId.TundraOutfit1]: {
    product: ItemId.TundraOutfit1,
    materials: {
      [ItemId.Cloth]: 4,
      [ItemId.IceOrgan]: 3,
    },
  },
  [ItemId.TundraOutfit2]: {
    product: ItemId.TundraOutfit2,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.IceOrgan]: 4,
    },
  },
  [ItemId.TundraOutfit3]: {
    product: ItemId.TundraOutfit3,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.IceOrgan]: 5,
    },
  },
  [ItemId.TundraOutfit4]: {
    product: ItemId.TundraOutfit4,
    materials: {
      [ItemId.Cloth]: 7,
      [ItemId.IceOrgan]: 6,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.PeltArmor]: {
    product: ItemId.PeltArmor,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Ingot]: 10,
      [ItemId.Fiber]: 20,
    },
  },
  [ItemId.PeltArmor1]: {
    product: ItemId.PeltArmor1,
    materials: {
      [ItemId.Leather]: 12,
      [ItemId.Ingot]: 12,
      [ItemId.Fiber]: 25,
    },
  },
  [ItemId.PeltArmor2]: {
    product: ItemId.PeltArmor2,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Ingot]: 15,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.PeltArmor3]: {
    product: ItemId.PeltArmor3,
    materials: {
      [ItemId.Leather]: 17,
      [ItemId.Ingot]: 17,
      [ItemId.Fiber]: 35,
    },
  },
  [ItemId.PeltArmor4]: {
    product: ItemId.PeltArmor4,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Ingot]: 20,
      [ItemId.Fiber]: 40,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.HeatResistantPeltArmor]: {
    product: ItemId.HeatResistantPeltArmor,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.FlameOrgan]: 4,
      [ItemId.Ingot]: 10,
    },
  },
  [ItemId.HeatResistantPeltArmor1]: {
    product: ItemId.HeatResistantPeltArmor1,
    materials: {
      [ItemId.Leather]: 18,
      [ItemId.FlameOrgan]: 5,
      [ItemId.Ingot]: 12,
    },
  },
  [ItemId.HeatResistantPeltArmor2]: {
    product: ItemId.HeatResistantPeltArmor2,
    materials: {
      [ItemId.Leather]: 22,
      [ItemId.FlameOrgan]: 6,
      [ItemId.Ingot]: 15,
    },
  },
  [ItemId.HeatResistantPeltArmor3]: {
    product: ItemId.HeatResistantPeltArmor3,
    materials: {
      [ItemId.Leather]: 26,
      [ItemId.FlameOrgan]: 7,
      [ItemId.Ingot]: 17,
    },
  },
  [ItemId.HeatResistantPeltArmor4]: {
    product: ItemId.HeatResistantPeltArmor4,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.FlameOrgan]: 8,
      [ItemId.Ingot]: 20,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.ColdResistantPeltArmor]: {
    product: ItemId.ColdResistantPeltArmor,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.IceOrgan]: 4,
      [ItemId.Ingot]: 10,
    },
  },
  [ItemId.ColdResistantPeltArmor1]: {
    product: ItemId.ColdResistantPeltArmor1,
    materials: {
      [ItemId.Leather]: 18,
      [ItemId.IceOrgan]: 5,
      [ItemId.Ingot]: 12,
    },
  },
  [ItemId.ColdResistantPeltArmor2]: {
    product: ItemId.ColdResistantPeltArmor2,
    materials: {
      [ItemId.Leather]: 22,
      [ItemId.IceOrgan]: 6,
      [ItemId.Ingot]: 15,
    },
  },
  [ItemId.ColdResistantPeltArmor3]: {
    product: ItemId.ColdResistantPeltArmor3,
    materials: {
      [ItemId.Leather]: 26,
      [ItemId.IceOrgan]: 7,
      [ItemId.Ingot]: 17,
    },
  },
  [ItemId.ColdResistantPeltArmor4]: {
    product: ItemId.ColdResistantPeltArmor4,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.IceOrgan]: 8,
      [ItemId.Ingot]: 20,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MetalArmor]: {
    product: ItemId.MetalArmor,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Leather]: 10,
      [ItemId.Cloth]: 5,
    },
  },
  [ItemId.MetalArmor1]: {
    product: ItemId.MetalArmor1,
    materials: {
      [ItemId.Ingot]: 37,
      [ItemId.Leather]: 12,
      [ItemId.Cloth]: 6,
    },
  },
  [ItemId.MetalArmor2]: {
    product: ItemId.MetalArmor2,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.Leather]: 15,
      [ItemId.Cloth]: 7,
    },
  },
  [ItemId.MetalArmor3]: {
    product: ItemId.MetalArmor3,
    materials: {
      [ItemId.Ingot]: 52,
      [ItemId.Leather]: 17,
      [ItemId.Cloth]: 8,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MetalArmor4]: {
    product: ItemId.MetalArmor4,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.HeatResistantMetalArmor]: {
    product: ItemId.HeatResistantMetalArmor,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.Leather]: 13,
      [ItemId.Cloth]: 8,
      [ItemId.FlameOrgan]: 8,
    },
  },
  [ItemId.HeatResistantMetalArmor1]: {
    product: ItemId.HeatResistantMetalArmor1,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.Leather]: 16,
      [ItemId.Cloth]: 10,
      [ItemId.FlameOrgan]: 10,
    },
  },
  [ItemId.HeatResistantMetalArmor2]: {
    product: ItemId.HeatResistantMetalArmor2,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.Leather]: 19,
      [ItemId.Cloth]: 12,
      [ItemId.FlameOrgan]: 12,
    },
  },
  [ItemId.HeatResistantMetalArmor3]: {
    product: ItemId.HeatResistantMetalArmor3,
    materials: {
      [ItemId.Ingot]: 70,
      [ItemId.Leather]: 22,
      [ItemId.Cloth]: 14,
      [ItemId.FlameOrgan]: 14,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.HeatResistantMetalArmor4]: {
    product: ItemId.HeatResistantMetalArmor4,
    materials: {
      [ItemId.Ingot]: 80,
      [ItemId.Leather]: 26,
      [ItemId.Cloth]: 16,
      [ItemId.FlameOrgan]: 16,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.ColdResistantMetalArmor]: {
    product: ItemId.ColdResistantMetalArmor,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.Leather]: 13,
      [ItemId.Cloth]: 8,
      [ItemId.IceOrgan]: 8,
    },
  },
  [ItemId.ColdResistantMetalArmor1]: {
    product: ItemId.ColdResistantMetalArmor1,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.Leather]: 16,
      [ItemId.Cloth]: 10,
      [ItemId.IceOrgan]: 10,
    },
  },
  [ItemId.ColdResistantMetalArmor2]: {
    product: ItemId.ColdResistantMetalArmor2,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.Leather]: 19,
      [ItemId.Cloth]: 12,
      [ItemId.IceOrgan]: 12,
    },
  },
  [ItemId.ColdResistantMetalArmor3]: {
    product: ItemId.ColdResistantMetalArmor3,
    materials: {
      [ItemId.Ingot]: 70,
      [ItemId.Leather]: 22,
      [ItemId.Cloth]: 14,
      [ItemId.IceOrgan]: 14,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.ColdResistantMetalArmor4]: {
    product: ItemId.ColdResistantMetalArmor4,
    materials: {
      [ItemId.Ingot]: 80,
      [ItemId.Leather]: 26,
      [ItemId.Cloth]: 16,
      [ItemId.IceOrgan]: 16,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.RefinedMetalArmor]: {
    product: ItemId.RefinedMetalArmor,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Leather]: 15,
      [ItemId.HighQualityCloth]: 1,
    },
  },
  [ItemId.RefinedMetalArmor1]: {
    product: ItemId.RefinedMetalArmor1,
    materials: {
      [ItemId.RefinedIngot]: 37,
      [ItemId.Leather]: 18,
      [ItemId.HighQualityCloth]: 1,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.RefinedMetalArmor2]: {
    product: ItemId.RefinedMetalArmor2,
    materials: {
      [ItemId.RefinedIngot]: 45,
      [ItemId.Leather]: 22,
      [ItemId.HighQualityCloth]: 2,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.RefinedMetalArmor3]: {
    product: ItemId.RefinedMetalArmor3,
    materials: {
      [ItemId.RefinedIngot]: 52,
      [ItemId.Leather]: 26,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.RefinedMetalArmor4]: {
    product: ItemId.RefinedMetalArmor4,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor]: {
    product: ItemId.HeatResistantRefinedMetalArmor,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Leather]: 20,
      [ItemId.HighQualityCloth]: 2,
      [ItemId.FlameOrgan]: 12,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor1]: {
    product: ItemId.HeatResistantRefinedMetalArmor1,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Leather]: 25,
      [ItemId.HighQualityCloth]: 2,
      [ItemId.FlameOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor2]: {
    product: ItemId.HeatResistantRefinedMetalArmor2,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.FlameOrgan]: 18,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor3]: {
    product: ItemId.HeatResistantRefinedMetalArmor3,
    materials: {
      [ItemId.RefinedIngot]: 70,
      [ItemId.Leather]: 35,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.FlameOrgan]: 21,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor4]: {
    product: ItemId.HeatResistantRefinedMetalArmor4,
    materials: {
      [ItemId.RefinedIngot]: 80,
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.FlameOrgan]: 24,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor]: {
    product: ItemId.ColdResistantRefinedMetalArmor,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Leather]: 20,
      [ItemId.HighQualityCloth]: 2,
      [ItemId.CryogenicCoolant]: 4,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor1]: {
    product: ItemId.ColdResistantRefinedMetalArmor1,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Leather]: 25,
      [ItemId.HighQualityCloth]: 2,
      [ItemId.CryogenicCoolant]: 5,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor2]: {
    product: ItemId.ColdResistantRefinedMetalArmor2,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.CryogenicCoolant]: 6,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor3]: {
    product: ItemId.ColdResistantRefinedMetalArmor3,
    materials: {
      [ItemId.RefinedIngot]: 70,
      [ItemId.Leather]: 35,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.CryogenicCoolant]: 7,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor4]: {
    product: ItemId.ColdResistantRefinedMetalArmor4,
    materials: {
      [ItemId.RefinedIngot]: 80,
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.CryogenicCoolant]: 8,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PalMetalArmor]: {
    product: ItemId.PalMetalArmor,
    materials: {
      [ItemId.PalMetalIngot]: 20,
      [ItemId.Leather]: 20,
      [ItemId.HighQualityCloth]: 2,
    },
  },
  [ItemId.PalMetalArmor1]: {
    product: ItemId.PalMetalArmor1,
    materials: {
      [ItemId.PalMetalIngot]: 25,
      [ItemId.Leather]: 25,
      [ItemId.HighQualityCloth]: 2,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.PalMetalArmor2]: {
    product: ItemId.PalMetalArmor2,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.PalMetalArmor3]: {
    product: ItemId.PalMetalArmor3,
    materials: {
      [ItemId.PalMetalIngot]: 35,
      [ItemId.Leather]: 35,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PalMetalArmor4]: {
    product: ItemId.PalMetalArmor4,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HeatResistantPalMetalArmor]: {
    product: ItemId.HeatResistantPalMetalArmor,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.FlameOrgan]: 16,
    },
  },
  [ItemId.HeatResistantPalMetalArmor1]: {
    product: ItemId.HeatResistantPalMetalArmor1,
    materials: {
      [ItemId.PalMetalIngot]: 37,
      [ItemId.Leather]: 37,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.FlameOrgan]: 20,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.HeatResistantPalMetalArmor2]: {
    product: ItemId.HeatResistantPalMetalArmor2,
    materials: {
      [ItemId.PalMetalIngot]: 45,
      [ItemId.Leather]: 45,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.FlameOrgan]: 24,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.HeatResistantPalMetalArmor3]: {
    product: ItemId.HeatResistantPalMetalArmor3,
    materials: {
      [ItemId.PalMetalIngot]: 52,
      [ItemId.Leather]: 52,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.FlameOrgan]: 28,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.HeatResistantPalMetalArmor4]: {
    product: ItemId.HeatResistantPalMetalArmor4,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.FlameOrgan]: 32,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmor]: {
    product: ItemId.ColdResistantPalMetalArmor,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.CryogenicCoolant]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmor1]: {
    product: ItemId.ColdResistantPalMetalArmor1,
    materials: {
      [ItemId.PalMetalIngot]: 37,
      [ItemId.Leather]: 37,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.CryogenicCoolant]: 6,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.ColdResistantPalMetalArmor2]: {
    product: ItemId.ColdResistantPalMetalArmor2,
    materials: {
      [ItemId.PalMetalIngot]: 45,
      [ItemId.Leather]: 45,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.CryogenicCoolant]: 7,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.ColdResistantPalMetalArmor3]: {
    product: ItemId.ColdResistantPalMetalArmor3,
    materials: {
      [ItemId.PalMetalIngot]: 52,
      [ItemId.Leather]: 52,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.CryogenicCoolant]: 8,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.ColdResistantPalMetalArmor4]: {
    product: ItemId.ColdResistantPalMetalArmor4,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.CryogenicCoolant]: 10,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.PlasteelArmor]: {
    product: ItemId.PlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 5,
    },
  },
  [ItemId.PlasteelArmor1]: {
    product: ItemId.PlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 37,
      [ItemId.PalMetalIngot]: 37,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.PlasteelArmor2]: {
    product: ItemId.PlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 45,
      [ItemId.PalMetalIngot]: 45,
      [ItemId.HighQualityCloth]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PlasteelArmor3]: {
    product: ItemId.PlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 52,
      [ItemId.PalMetalIngot]: 52,
      [ItemId.HighQualityCloth]: 8,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.PlasteelArmor4]: {
    product: ItemId.PlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HeatResistantPlasteelArmor]: {
    product: ItemId.HeatResistantPlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.FlameOrgan]: 20,
    },
  },
  [ItemId.HeatResistantPlasteelArmor1]: {
    product: ItemId.HeatResistantPlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 37,
      [ItemId.PalMetalIngot]: 37,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.FlameOrgan]: 25,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.HeatResistantPlasteelArmor2]: {
    product: ItemId.HeatResistantPlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 45,
      [ItemId.PalMetalIngot]: 45,
      [ItemId.HighQualityCloth]: 7,
      [ItemId.FlameOrgan]: 30,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.HeatResistantPlasteelArmor3]: {
    product: ItemId.HeatResistantPlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 52,
      [ItemId.PalMetalIngot]: 52,
      [ItemId.HighQualityCloth]: 8,
      [ItemId.FlameOrgan]: 35,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HeatResistantPlasteelArmor4]: {
    product: ItemId.HeatResistantPlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.FlameOrgan]: 40,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.ColdResistantPlasteelArmor]: {
    product: ItemId.ColdResistantPlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.CryogenicCoolant]: 10,
    },
  },
  [ItemId.ColdResistantPlasteelArmor1]: {
    product: ItemId.ColdResistantPlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 37,
      [ItemId.PalMetalIngot]: 37,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.CryogenicCoolant]: 12,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.ColdResistantPlasteelArmor2]: {
    product: ItemId.ColdResistantPlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 45,
      [ItemId.PalMetalIngot]: 45,
      [ItemId.HighQualityCloth]: 7,
      [ItemId.CryogenicCoolant]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.ColdResistantPlasteelArmor3]: {
    product: ItemId.ColdResistantPlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 52,
      [ItemId.PalMetalIngot]: 52,
      [ItemId.HighQualityCloth]: 8,
      [ItemId.CryogenicCoolant]: 17,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.ColdResistantPlasteelArmor4]: {
    product: ItemId.ColdResistantPlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.CryogenicCoolant]: 20,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LightweightPlasteelArmor]: {
    product: ItemId.LightweightPlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 5,
      [ItemId.CorrosiveSolvent]: 8,
    },
  },
  [ItemId.LightweightPlasteelArmor1]: {
    product: ItemId.LightweightPlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 37,
      [ItemId.PalMetalIngot]: 37,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.CorrosiveSolvent]: 10,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.LightweightPlasteelArmor2]: {
    product: ItemId.LightweightPlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 45,
      [ItemId.PalMetalIngot]: 45,
      [ItemId.HighQualityCloth]: 7,
      [ItemId.CorrosiveSolvent]: 12,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.LightweightPlasteelArmor3]: {
    product: ItemId.LightweightPlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 52,
      [ItemId.PalMetalIngot]: 52,
      [ItemId.HighQualityCloth]: 8,
      [ItemId.CorrosiveSolvent]: 14,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.LightweightPlasteelArmor4]: {
    product: ItemId.LightweightPlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.CorrosiveSolvent]: 16,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HexoliteArmor]: {
    product: ItemId.HexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 50,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 10,
    },
  },
  [ItemId.HexoliteArmor1]: {
    product: ItemId.HexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 62,
      [ItemId.Plasteel]: 25,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.HexoliteArmor2]: {
    product: ItemId.HexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 75,
      [ItemId.Plasteel]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HexoliteArmor3]: {
    product: ItemId.HexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 87,
      [ItemId.Plasteel]: 35,
      [ItemId.HighQualityCloth]: 17,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HexoliteArmor4]: {
    product: ItemId.HexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.HeatResistantHexoliteArmor]: {
    product: ItemId.HeatResistantHexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 50,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.ThermalCore]: 2,
    },
  },
  [ItemId.HeatResistantHexoliteArmor1]: {
    product: ItemId.HeatResistantHexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 62,
      [ItemId.Plasteel]: 25,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.ThermalCore]: 2,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.HeatResistantHexoliteArmor2]: {
    product: ItemId.HeatResistantHexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 75,
      [ItemId.Plasteel]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.ThermalCore]: 3,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HeatResistantHexoliteArmor3]: {
    product: ItemId.HeatResistantHexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 87,
      [ItemId.Plasteel]: 35,
      [ItemId.HighQualityCloth]: 17,
      [ItemId.ThermalCore]: 4,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HeatResistantHexoliteArmor4]: {
    product: ItemId.HeatResistantHexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.ThermalCore]: 5,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.ColdResistantHexoliteArmor]: {
    product: ItemId.ColdResistantHexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 50,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.CryogenicCoolant]: 10,
    },
  },
  [ItemId.ColdResistantHexoliteArmor1]: {
    product: ItemId.ColdResistantHexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 62,
      [ItemId.Plasteel]: 25,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.CryogenicCoolant]: 12,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.ColdResistantHexoliteArmor2]: {
    product: ItemId.ColdResistantHexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 75,
      [ItemId.Plasteel]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.CryogenicCoolant]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.ColdResistantHexoliteArmor3]: {
    product: ItemId.ColdResistantHexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 87,
      [ItemId.Plasteel]: 35,
      [ItemId.HighQualityCloth]: 17,
      [ItemId.CryogenicCoolant]: 17,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.ColdResistantHexoliteArmor4]: {
    product: ItemId.ColdResistantHexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.CryogenicCoolant]: 20,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.LightweightHexoliteArmor]: {
    product: ItemId.LightweightHexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.CorrosiveSolvent]: 10,
    },
  },
  [ItemId.LightweightHexoliteArmor1]: {
    product: ItemId.LightweightHexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 125,
      [ItemId.Plasteel]: 25,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.CorrosiveSolvent]: 12,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.LightweightHexoliteArmor2]: {
    product: ItemId.LightweightHexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 150,
      [ItemId.Plasteel]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.CorrosiveSolvent]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.LightweightHexoliteArmor3]: {
    product: ItemId.LightweightHexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 175,
      [ItemId.Plasteel]: 35,
      [ItemId.HighQualityCloth]: 17,
      [ItemId.CorrosiveSolvent]: 17,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LightweightHexoliteArmor4]: {
    product: ItemId.LightweightHexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 200,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.CorrosiveSolvent]: 20,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.AncientArmor]: {
    product: ItemId.AncientArmor,
    materials: {
      [ItemId.SoraliteIngot]: 30,
      [ItemId.AICore]: 3,
    },
  },
  [ItemId.AncientArmor1]: {
    product: ItemId.AncientArmor1,
    materials: {
      [ItemId.SoraliteIngot]: 37,
      [ItemId.AICore]: 3,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.AncientArmor2]: {
    product: ItemId.AncientArmor2,
    materials: {
      [ItemId.SoraliteIngot]: 45,
      [ItemId.AICore]: 4,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.AncientArmor3]: {
    product: ItemId.AncientArmor3,
    materials: {
      [ItemId.SoraliteIngot]: 52,
      [ItemId.AICore]: 5,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.AncientArmor4]: {
    product: ItemId.AncientArmor4,
    materials: {
      [ItemId.SoraliteIngot]: 60,
      [ItemId.AICore]: 6,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.HeatResistantAncientArmor]: {
    product: ItemId.HeatResistantAncientArmor,
    materials: {
      [ItemId.PaloxiteIngot]: 30,
      [ItemId.AICore]: 5,
      [ItemId.ThermalCore]: 6,
    },
  },
  [ItemId.HeatResistantAncientArmor1]: {
    product: ItemId.HeatResistantAncientArmor1,
    materials: {
      [ItemId.PaloxiteIngot]: 37,
      [ItemId.AICore]: 6,
      [ItemId.ThermalCore]: 7,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HeatResistantAncientArmor2]: {
    product: ItemId.HeatResistantAncientArmor2,
    materials: {
      [ItemId.PaloxiteIngot]: 45,
      [ItemId.AICore]: 7,
      [ItemId.ThermalCore]: 9,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.HeatResistantAncientArmor3]: {
    product: ItemId.HeatResistantAncientArmor3,
    materials: {
      [ItemId.PaloxiteIngot]: 52,
      [ItemId.AICore]: 8,
      [ItemId.ThermalCore]: 10,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.HeatResistantAncientArmor4]: {
    product: ItemId.HeatResistantAncientArmor4,
    materials: {
      [ItemId.PaloxiteIngot]: 60,
      [ItemId.AICore]: 10,
      [ItemId.ThermalCore]: 12,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.ColdResistantAncientArmor]: {
    product: ItemId.ColdResistantAncientArmor,
    materials: {
      [ItemId.PaloxiteIngot]: 30,
      [ItemId.AICore]: 5,
      [ItemId.CryogenicCoolant]: 50,
    },
  },
  [ItemId.ColdResistantAncientArmor1]: {
    product: ItemId.ColdResistantAncientArmor1,
    materials: {
      [ItemId.PaloxiteIngot]: 37,
      [ItemId.AICore]: 6,
      [ItemId.CryogenicCoolant]: 62,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.ColdResistantAncientArmor2]: {
    product: ItemId.ColdResistantAncientArmor2,
    materials: {
      [ItemId.PaloxiteIngot]: 45,
      [ItemId.AICore]: 7,
      [ItemId.CryogenicCoolant]: 75,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.ColdResistantAncientArmor3]: {
    product: ItemId.ColdResistantAncientArmor3,
    materials: {
      [ItemId.PaloxiteIngot]: 52,
      [ItemId.AICore]: 8,
      [ItemId.CryogenicCoolant]: 87,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.ColdResistantAncientArmor4]: {
    product: ItemId.ColdResistantAncientArmor4,
    materials: {
      [ItemId.PaloxiteIngot]: 60,
      [ItemId.AICore]: 10,
      [ItemId.CryogenicCoolant]: 100,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.LightweightAncientArmor]: {
    product: ItemId.LightweightAncientArmor,
    materials: {
      [ItemId.PaloxiteIngot]: 30,
      [ItemId.AICore]: 7,
      [ItemId.CorrosiveSolvent]: 50,
    },
  },
  [ItemId.LightweightAncientArmor1]: {
    product: ItemId.LightweightAncientArmor1,
    materials: {
      [ItemId.PaloxiteIngot]: 37,
      [ItemId.AICore]: 8,
      [ItemId.CorrosiveSolvent]: 62,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LightweightAncientArmor2]: {
    product: ItemId.LightweightAncientArmor2,
    materials: {
      [ItemId.PaloxiteIngot]: 45,
      [ItemId.AICore]: 10,
      [ItemId.CorrosiveSolvent]: 75,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.LightweightAncientArmor3]: {
    product: ItemId.LightweightAncientArmor3,
    materials: {
      [ItemId.PaloxiteIngot]: 52,
      [ItemId.AICore]: 12,
      [ItemId.CorrosiveSolvent]: 87,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.LightweightAncientArmor4]: {
    product: ItemId.LightweightAncientArmor4,
    materials: {
      [ItemId.PaloxiteIngot]: 60,
      [ItemId.AICore]: 14,
      [ItemId.CorrosiveSolvent]: 100,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.DepressoArmor]: {
    product: ItemId.DepressoArmor,
    materials: {
      [ItemId.HighQualityCloth]: 15,
      [ItemId.VenomGland]: 75,
    },
  },
  [ItemId.HallowedPlateMail]: {
    product: ItemId.HallowedPlateMail,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedPlateMail1]: {
    product: ItemId.HallowedPlateMail1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedPlateMail2]: {
    product: ItemId.HallowedPlateMail2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedPlateMail3]: {
    product: ItemId.HallowedPlateMail3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedPlateMail4]: {
    product: ItemId.HallowedPlateMail4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.V1Armor]: {
    product: ItemId.V1Armor,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.HighQualityPalOil]: 15,
    },
  },
  [ItemId.V1Armor4]: {
    product: ItemId.V1Armor4,
    materials: {
      [ItemId.Ingot]: 270,
      [ItemId.HighQualityPalOil]: 85,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.V2Armor]: {
    product: ItemId.V2Armor,
    materials: {
      [ItemId.Plasteel]: 40,
      [ItemId.PalMetalIngot]: 40,
      [ItemId.HighQualityCloth]: 20,
    },
  },
  [ItemId.V2Armor4]: {
    product: ItemId.V2Armor4,
    materials: {
      [ItemId.Plasteel]: 270,
      [ItemId.PalMetalIngot]: 202,
      [ItemId.HighQualityCloth]: 80,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.FeatheredHairBand]: {
    product: ItemId.FeatheredHairBand,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Leather]: 1,
    },
  },
  [ItemId.FeatheredHairBand1]: {
    product: ItemId.FeatheredHairBand1,
    materials: {
      [ItemId.Fiber]: 12,
      [ItemId.Leather]: 1,
    },
  },
  [ItemId.FeatheredHairBand2]: {
    product: ItemId.FeatheredHairBand2,
    materials: {
      [ItemId.Fiber]: 15,
      [ItemId.Leather]: 2,
    },
  },
  [ItemId.FeatheredHairBand3]: {
    product: ItemId.FeatheredHairBand3,
    materials: {
      [ItemId.Fiber]: 17,
      [ItemId.Leather]: 3,
    },
  },
  [ItemId.FeatheredHairBand4]: {
    product: ItemId.FeatheredHairBand4,
    materials: {
      [ItemId.Fiber]: 20,
      [ItemId.Leather]: 4,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MetalHelm]: {
    product: ItemId.MetalHelm,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.MetalHelm1]: {
    product: ItemId.MetalHelm1,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.PaldiumFragment]: 12,
    },
  },
  [ItemId.MetalHelm2]: {
    product: ItemId.MetalHelm2,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.MetalHelm3]: {
    product: ItemId.MetalHelm3,
    materials: {
      [ItemId.Ingot]: 35,
      [ItemId.PaldiumFragment]: 17,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MetalHelm4]: {
    product: ItemId.MetalHelm4,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.RefinedMetalHelm]: {
    product: ItemId.RefinedMetalHelm,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.RefinedMetalHelm1]: {
    product: ItemId.RefinedMetalHelm1,
    materials: {
      [ItemId.RefinedIngot]: 25,
      [ItemId.PaldiumFragment]: 18,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.RefinedMetalHelm2]: {
    product: ItemId.RefinedMetalHelm2,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 22,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.RefinedMetalHelm3]: {
    product: ItemId.RefinedMetalHelm3,
    materials: {
      [ItemId.RefinedIngot]: 35,
      [ItemId.PaldiumFragment]: 26,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.RefinedMetalHelm4]: {
    product: ItemId.RefinedMetalHelm4,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PalMetalHelm]: {
    product: ItemId.PalMetalHelm,
    materials: {
      [ItemId.PalMetalIngot]: 20,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.PalMetalHelm1]: {
    product: ItemId.PalMetalHelm1,
    materials: {
      [ItemId.PalMetalIngot]: 25,
      [ItemId.PaldiumFragment]: 25,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.PalMetalHelm2]: {
    product: ItemId.PalMetalHelm2,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.PalMetalHelm3]: {
    product: ItemId.PalMetalHelm3,
    materials: {
      [ItemId.PalMetalIngot]: 35,
      [ItemId.PaldiumFragment]: 35,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PalMetalHelm4]: {
    product: ItemId.PalMetalHelm4,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.PaldiumFragment]: 40,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.PlasteelHelmet]: {
    product: ItemId.PlasteelHelmet,
    materials: {
      [ItemId.Plasteel]: 20,
      [ItemId.PalMetalIngot]: 25,
    },
  },
  [ItemId.PlasteelHelmet1]: {
    product: ItemId.PlasteelHelmet1,
    materials: {
      [ItemId.Plasteel]: 25,
      [ItemId.PalMetalIngot]: 31,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.PlasteelHelmet2]: {
    product: ItemId.PlasteelHelmet2,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 37,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PlasteelHelmet3]: {
    product: ItemId.PlasteelHelmet3,
    materials: {
      [ItemId.Plasteel]: 35,
      [ItemId.PalMetalIngot]: 43,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.PlasteelHelmet4]: {
    product: ItemId.PlasteelHelmet4,
    materials: {
      [ItemId.Plasteel]: 40,
      [ItemId.PalMetalIngot]: 50,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HexoliteHelmet]: {
    product: ItemId.HexoliteHelmet,
    materials: {
      [ItemId.Hexolite]: 40,
      [ItemId.Plasteel]: 15,
    },
  },
  [ItemId.HexoliteHelmet1]: {
    product: ItemId.HexoliteHelmet1,
    materials: {
      [ItemId.Hexolite]: 50,
      [ItemId.Plasteel]: 18,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.HexoliteHelmet2]: {
    product: ItemId.HexoliteHelmet2,
    materials: {
      [ItemId.Hexolite]: 60,
      [ItemId.Plasteel]: 22,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HexoliteHelmet3]: {
    product: ItemId.HexoliteHelmet3,
    materials: {
      [ItemId.Hexolite]: 70,
      [ItemId.Plasteel]: 26,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HexoliteHelmet4]: {
    product: ItemId.HexoliteHelmet4,
    materials: {
      [ItemId.Hexolite]: 80,
      [ItemId.Plasteel]: 30,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.AncientHelm]: {
    product: ItemId.AncientHelm,
    materials: {
      [ItemId.SoraliteIngot]: 20,
      [ItemId.AICore]: 2,
    },
  },
  [ItemId.AncientHelm1]: {
    product: ItemId.AncientHelm1,
    materials: {
      [ItemId.SoraliteIngot]: 25,
      [ItemId.AICore]: 2,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.AncientHelm2]: {
    product: ItemId.AncientHelm2,
    materials: {
      [ItemId.SoraliteIngot]: 30,
      [ItemId.AICore]: 3,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.AncientHelm3]: {
    product: ItemId.AncientHelm3,
    materials: {
      [ItemId.SoraliteIngot]: 35,
      [ItemId.AICore]: 4,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.AncientHelm4]: {
    product: ItemId.AncientHelm4,
    materials: {
      [ItemId.SoraliteIngot]: 40,
      [ItemId.AICore]: 5,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.HallowedMask]: {
    product: ItemId.HallowedMask,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedMask1]: {
    product: ItemId.HallowedMask1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedMask2]: {
    product: ItemId.HallowedMask2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedMask3]: {
    product: ItemId.HallowedMask3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedMask4]: {
    product: ItemId.HallowedMask4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.HallowedHelmet]: {
    product: ItemId.HallowedHelmet,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedHelmet1]: {
    product: ItemId.HallowedHelmet1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedHelmet2]: {
    product: ItemId.HallowedHelmet2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedHelmet3]: {
    product: ItemId.HallowedHelmet3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedHelmet4]: {
    product: ItemId.HallowedHelmet4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.HallowedHeadgear]: {
    product: ItemId.HallowedHeadgear,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedHeadgear1]: {
    product: ItemId.HallowedHeadgear1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedHeadgear2]: {
    product: ItemId.HallowedHeadgear2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedHeadgear3]: {
    product: ItemId.HallowedHeadgear3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedHeadgear4]: {
    product: ItemId.HallowedHeadgear4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.HallowedHood]: {
    product: ItemId.HallowedHood,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedHood1]: {
    product: ItemId.HallowedHood1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedHood2]: {
    product: ItemId.HallowedHood2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedHood3]: {
    product: ItemId.HallowedHood3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedHood4]: {
    product: ItemId.HallowedHood4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.MonarchSCrown]: {
    product: ItemId.MonarchSCrown,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Cloth]: 3,
    },
  },
  [ItemId.MonarchSCrown1]: {
    product: ItemId.MonarchSCrown1,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Cloth]: 4,
    },
  },
  [ItemId.MonarchSCrown2]: {
    product: ItemId.MonarchSCrown2,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.Cloth]: 6,
    },
  },
  [ItemId.MonarchSCrown3]: {
    product: ItemId.MonarchSCrown3,
    materials: {
      [ItemId.Ingot]: 67,
      [ItemId.Cloth]: 9,
    },
  },
  [ItemId.MonarchSCrown4]: {
    product: ItemId.MonarchSCrown4,
    materials: {
      [ItemId.Ingot]: 100,
      [ItemId.Cloth]: 13,
    },
  },
  [ItemId.GoldenCrown]: {
    product: ItemId.GoldenCrown,
    materials: {
      [ItemId.Ingot]: 25,
    },
  },
  [ItemId.GoldenCrown1]: {
    product: ItemId.GoldenCrown1,
    materials: {
      [ItemId.Ingot]: 37,
    },
  },
  [ItemId.GoldenCrown2]: {
    product: ItemId.GoldenCrown2,
    materials: {
      [ItemId.Ingot]: 55,
    },
  },
  [ItemId.GoldenCrown3]: {
    product: ItemId.GoldenCrown3,
    materials: {
      [ItemId.Ingot]: 82,
    },
  },
  [ItemId.GoldenCrown4]: {
    product: ItemId.GoldenCrown4,
    materials: {
      [ItemId.Ingot]: 123,
    },
  },
  [ItemId.LongEaredHeadband]: {
    product: ItemId.LongEaredHeadband,
    materials: {
      [ItemId.Cloth]: 12,
      [ItemId.Ingot]: 2,
    },
  },
  [ItemId.LongEaredHeadband1]: {
    product: ItemId.LongEaredHeadband1,
    materials: {
      [ItemId.Cloth]: 18,
      [ItemId.Ingot]: 3,
    },
  },
  [ItemId.LongEaredHeadband2]: {
    product: ItemId.LongEaredHeadband2,
    materials: {
      [ItemId.Cloth]: 27,
      [ItemId.Ingot]: 4,
    },
  },
  [ItemId.LongEaredHeadband3]: {
    product: ItemId.LongEaredHeadband3,
    materials: {
      [ItemId.Cloth]: 40,
      [ItemId.Ingot]: 6,
    },
  },
  [ItemId.LongEaredHeadband4]: {
    product: ItemId.LongEaredHeadband4,
    materials: {
      [ItemId.Cloth]: 60,
      [ItemId.Ingot]: 9,
    },
  },
  [ItemId.WitchHat]: {
    product: ItemId.WitchHat,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 3,
    },
  },
  [ItemId.WitchHat1]: {
    product: ItemId.WitchHat1,
    materials: {
      [ItemId.Cloth]: 15,
      [ItemId.Ingot]: 4,
    },
  },
  [ItemId.WitchHat2]: {
    product: ItemId.WitchHat2,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.Ingot]: 6,
    },
  },
  [ItemId.WitchHat3]: {
    product: ItemId.WitchHat3,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.Ingot]: 9,
    },
  },
  [ItemId.WitchHat4]: {
    product: ItemId.WitchHat4,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.Ingot]: 13,
    },
  },
  [ItemId.SoftHat]: {
    product: ItemId.SoftHat,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Fiber]: 10,
    },
  },
  [ItemId.SoftHat1]: {
    product: ItemId.SoftHat1,
    materials: {
      [ItemId.Cloth]: 15,
      [ItemId.Fiber]: 15,
    },
  },
  [ItemId.SoftHat2]: {
    product: ItemId.SoftHat2,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.Fiber]: 22,
    },
  },
  [ItemId.SoftHat3]: {
    product: ItemId.SoftHat3,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.Fiber]: 33,
    },
  },
  [ItemId.SoftHat4]: {
    product: ItemId.SoftHat4,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.Fiber]: 49,
    },
  },
  [ItemId.Helmet]: {
    product: ItemId.Helmet,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Wool]: 5,
    },
  },
  [ItemId.Helmet1]: {
    product: ItemId.Helmet1,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Wool]: 7,
    },
  },
  [ItemId.Helmet2]: {
    product: ItemId.Helmet2,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.Wool]: 10,
    },
  },
  [ItemId.Helmet3]: {
    product: ItemId.Helmet3,
    materials: {
      [ItemId.Ingot]: 67,
      [ItemId.Wool]: 15,
    },
  },
  [ItemId.Helmet4]: {
    product: ItemId.Helmet4,
    materials: {
      [ItemId.Ingot]: 100,
      [ItemId.Wool]: 22,
    },
  },
  [ItemId.SilkHat]: {
    product: ItemId.SilkHat,
    materials: {
      [ItemId.Cloth]: 15,
    },
  },
  [ItemId.SilkHat1]: {
    product: ItemId.SilkHat1,
    materials: {
      [ItemId.Cloth]: 22,
    },
  },
  [ItemId.SilkHat2]: {
    product: ItemId.SilkHat2,
    materials: {
      [ItemId.Cloth]: 33,
    },
  },
  [ItemId.SilkHat3]: {
    product: ItemId.SilkHat3,
    materials: {
      [ItemId.Cloth]: 49,
    },
  },
  [ItemId.SilkHat4]: {
    product: ItemId.SilkHat4,
    materials: {
      [ItemId.Cloth]: 73,
    },
  },
  [ItemId.Tricorne]: {
    product: ItemId.Tricorne,
    materials: {
      [ItemId.Leather]: 10,
    },
  },
  [ItemId.Tricorne1]: {
    product: ItemId.Tricorne1,
    materials: {
      [ItemId.Leather]: 15,
    },
  },
  [ItemId.Tricorne2]: {
    product: ItemId.Tricorne2,
    materials: {
      [ItemId.Leather]: 22,
    },
  },
  [ItemId.Tricorne3]: {
    product: ItemId.Tricorne3,
    materials: {
      [ItemId.Leather]: 33,
    },
  },
  [ItemId.Tricorne4]: {
    product: ItemId.Tricorne4,
    materials: {
      [ItemId.Leather]: 49,
    },
  },
  [ItemId.ExplorerCap]: {
    product: ItemId.ExplorerCap,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Leather]: 3,
      [ItemId.Ingot]: 2,
    },
  },
  [ItemId.ExplorerCap1]: {
    product: ItemId.ExplorerCap1,
    materials: {
      [ItemId.Cloth]: 15,
      [ItemId.Leather]: 4,
      [ItemId.Ingot]: 3,
    },
  },
  [ItemId.ExplorerCap2]: {
    product: ItemId.ExplorerCap2,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.Leather]: 6,
      [ItemId.Ingot]: 4,
    },
  },
  [ItemId.ExplorerCap3]: {
    product: ItemId.ExplorerCap3,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.Leather]: 9,
      [ItemId.Ingot]: 6,
    },
  },
  [ItemId.ExplorerCap4]: {
    product: ItemId.ExplorerCap4,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.Leather]: 13,
      [ItemId.Ingot]: 9,
    },
  },
  [ItemId.GraduationCap]: {
    product: ItemId.GraduationCap,
    materials: {
      [ItemId.Cloth]: 20,
      [ItemId.Fiber]: 10,
    },
  },
  [ItemId.GraduationCap1]: {
    product: ItemId.GraduationCap1,
    materials: {
      [ItemId.Cloth]: 30,
      [ItemId.Fiber]: 15,
    },
  },
  [ItemId.GraduationCap2]: {
    product: ItemId.GraduationCap2,
    materials: {
      [ItemId.Cloth]: 45,
      [ItemId.Fiber]: 22,
    },
  },
  [ItemId.GraduationCap3]: {
    product: ItemId.GraduationCap3,
    materials: {
      [ItemId.Cloth]: 67,
      [ItemId.Fiber]: 33,
    },
  },
  [ItemId.GraduationCap4]: {
    product: ItemId.GraduationCap4,
    materials: {
      [ItemId.Cloth]: 100,
      [ItemId.Fiber]: 49,
    },
  },
  [ItemId.FarmingHat]: {
    product: ItemId.FarmingHat,
    materials: {
      [ItemId.Fiber]: 30,
      [ItemId.Wood]: 10,
    },
  },
  [ItemId.FarmingHat1]: {
    product: ItemId.FarmingHat1,
    materials: {
      [ItemId.Fiber]: 45,
      [ItemId.Wood]: 15,
    },
  },
  [ItemId.FarmingHat2]: {
    product: ItemId.FarmingHat2,
    materials: {
      [ItemId.Fiber]: 67,
      [ItemId.Wood]: 22,
    },
  },
  [ItemId.FarmingHat3]: {
    product: ItemId.FarmingHat3,
    materials: {
      [ItemId.Fiber]: 100,
      [ItemId.Wood]: 33,
    },
  },
  [ItemId.FarmingHat4]: {
    product: ItemId.FarmingHat4,
    materials: {
      [ItemId.Fiber]: 150,
      [ItemId.Wood]: 49,
    },
  },
  [ItemId.BowlerHat]: {
    product: ItemId.BowlerHat,
    materials: {
      [ItemId.Cloth]: 15,
    },
  },
  [ItemId.BowlerHat1]: {
    product: ItemId.BowlerHat1,
    materials: {
      [ItemId.Cloth]: 22,
    },
  },
  [ItemId.BowlerHat2]: {
    product: ItemId.BowlerHat2,
    materials: {
      [ItemId.Cloth]: 33,
    },
  },
  [ItemId.BowlerHat3]: {
    product: ItemId.BowlerHat3,
    materials: {
      [ItemId.Cloth]: 49,
    },
  },
  [ItemId.BowlerHat4]: {
    product: ItemId.BowlerHat4,
    materials: {
      [ItemId.Cloth]: 73,
    },
  },
  [ItemId.TocotocoCap]: {
    product: ItemId.TocotocoCap,
    materials: {
      [ItemId.TocotocoFeather]: 5,
    },
  },
  [ItemId.TocotocoCap1]: {
    product: ItemId.TocotocoCap1,
    materials: {
      [ItemId.TocotocoFeather]: 7,
    },
  },
  [ItemId.TocotocoCap2]: {
    product: ItemId.TocotocoCap2,
    materials: {
      [ItemId.TocotocoFeather]: 10,
    },
  },
  [ItemId.TocotocoCap3]: {
    product: ItemId.TocotocoCap3,
    materials: {
      [ItemId.TocotocoFeather]: 15,
    },
  },
  [ItemId.TocotocoCap4]: {
    product: ItemId.TocotocoCap4,
    materials: {
      [ItemId.TocotocoFeather]: 22,
    },
  },
  [ItemId.GrinningTocotocoCap]: {
    product: ItemId.GrinningTocotocoCap,
    materials: {
      [ItemId.TocotocoFeather]: 5,
    },
  },
  [ItemId.GrinningTocotocoCap1]: {
    product: ItemId.GrinningTocotocoCap1,
    materials: {
      [ItemId.TocotocoFeather]: 7,
    },
  },
  [ItemId.GrinningTocotocoCap2]: {
    product: ItemId.GrinningTocotocoCap2,
    materials: {
      [ItemId.TocotocoFeather]: 10,
    },
  },
  [ItemId.GrinningTocotocoCap3]: {
    product: ItemId.GrinningTocotocoCap3,
    materials: {
      [ItemId.TocotocoFeather]: 15,
    },
  },
  [ItemId.GrinningTocotocoCap4]: {
    product: ItemId.GrinningTocotocoCap4,
    materials: {
      [ItemId.TocotocoFeather]: 22,
    },
  },
  [ItemId.GumossCap]: {
    product: ItemId.GumossCap,
    materials: {
      [ItemId.GumossLeaf]: 5,
    },
  },
  [ItemId.GumossCap1]: {
    product: ItemId.GumossCap1,
    materials: {
      [ItemId.GumossLeaf]: 7,
    },
  },
  [ItemId.GumossCap2]: {
    product: ItemId.GumossCap2,
    materials: {
      [ItemId.GumossLeaf]: 10,
    },
  },
  [ItemId.GumossCap3]: {
    product: ItemId.GumossCap3,
    materials: {
      [ItemId.GumossLeaf]: 15,
    },
  },
  [ItemId.GumossCap4]: {
    product: ItemId.GumossCap4,
    materials: {
      [ItemId.GumossLeaf]: 22,
    },
  },
  [ItemId.PenkingCap]: {
    product: ItemId.PenkingCap,
    materials: {
      [ItemId.PenkingPlume]: 5,
    },
  },
  [ItemId.PenkingCap1]: {
    product: ItemId.PenkingCap1,
    materials: {
      [ItemId.PenkingPlume]: 7,
    },
  },
  [ItemId.PenkingCap2]: {
    product: ItemId.PenkingCap2,
    materials: {
      [ItemId.PenkingPlume]: 10,
    },
  },
  [ItemId.PenkingCap3]: {
    product: ItemId.PenkingCap3,
    materials: {
      [ItemId.PenkingPlume]: 15,
    },
  },
  [ItemId.PenkingCap4]: {
    product: ItemId.PenkingCap4,
    materials: {
      [ItemId.PenkingPlume]: 22,
    },
  },
  [ItemId.KatressCap]: {
    product: ItemId.KatressCap,
    materials: {
      [ItemId.KatressHair]: 5,
    },
  },
  [ItemId.KatressCap1]: {
    product: ItemId.KatressCap1,
    materials: {
      [ItemId.KatressHair]: 7,
    },
  },
  [ItemId.KatressCap2]: {
    product: ItemId.KatressCap2,
    materials: {
      [ItemId.KatressHair]: 10,
    },
  },
  [ItemId.KatressCap3]: {
    product: ItemId.KatressCap3,
    materials: {
      [ItemId.KatressHair]: 15,
    },
  },
  [ItemId.KatressCap4]: {
    product: ItemId.KatressCap4,
    materials: {
      [ItemId.KatressHair]: 22,
    },
  },
  [ItemId.LyleenAccessory]: {
    product: ItemId.LyleenAccessory,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.SibelyxHat]: {
    product: ItemId.SibelyxHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.LeezpunkHood]: {
    product: ItemId.LeezpunkHood,
    materials: {
      [ItemId.LeezpunkCrest]: 5,
    },
  },
  [ItemId.LeezpunkHood1]: {
    product: ItemId.LeezpunkHood1,
    materials: {
      [ItemId.LeezpunkCrest]: 7,
    },
  },
  [ItemId.LeezpunkHood2]: {
    product: ItemId.LeezpunkHood2,
    materials: {
      [ItemId.LeezpunkCrest]: 10,
    },
  },
  [ItemId.LeezpunkHood3]: {
    product: ItemId.LeezpunkHood3,
    materials: {
      [ItemId.LeezpunkCrest]: 15,
    },
  },
  [ItemId.LeezpunkHood4]: {
    product: ItemId.LeezpunkHood4,
    materials: {
      [ItemId.LeezpunkCrest]: 22,
    },
  },
  [ItemId.KillamariCap]: {
    product: ItemId.KillamariCap,
    materials: {
      [ItemId.KillamariTentacle]: 5,
    },
  },
  [ItemId.KillamariCap1]: {
    product: ItemId.KillamariCap1,
    materials: {
      [ItemId.KillamariTentacle]: 7,
    },
  },
  [ItemId.KillamariCap2]: {
    product: ItemId.KillamariCap2,
    materials: {
      [ItemId.KillamariTentacle]: 10,
    },
  },
  [ItemId.KillamariCap3]: {
    product: ItemId.KillamariCap3,
    materials: {
      [ItemId.KillamariTentacle]: 15,
    },
  },
  [ItemId.KillamariCap4]: {
    product: ItemId.KillamariCap4,
    materials: {
      [ItemId.KillamariTentacle]: 22,
    },
  },
  [ItemId.CawgnitoHat]: {
    product: ItemId.CawgnitoHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.RibbunyHeadband]: {
    product: ItemId.RibbunyHeadband,
    materials: {
      [ItemId.RibbunyRibbon]: 5,
    },
  },
  [ItemId.RibbunyHeadband1]: {
    product: ItemId.RibbunyHeadband1,
    materials: {
      [ItemId.RibbunyRibbon]: 7,
    },
  },
  [ItemId.RibbunyHeadband2]: {
    product: ItemId.RibbunyHeadband2,
    materials: {
      [ItemId.RibbunyRibbon]: 10,
    },
  },
  [ItemId.RibbunyHeadband3]: {
    product: ItemId.RibbunyHeadband3,
    materials: {
      [ItemId.RibbunyRibbon]: 15,
    },
  },
  [ItemId.RibbunyHeadband4]: {
    product: ItemId.RibbunyHeadband4,
    materials: {
      [ItemId.RibbunyRibbon]: 22,
    },
  },
  [ItemId.LamballHelm]: {
    product: ItemId.LamballHelm,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.DumudHelm]: {
    product: ItemId.DumudHelm,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.SweeCap]: {
    product: ItemId.SweeCap,
    materials: {
      [ItemId.SweeHair]: 5,
    },
  },
  [ItemId.SweeCap1]: {
    product: ItemId.SweeCap1,
    materials: {
      [ItemId.SweeHair]: 7,
    },
  },
  [ItemId.SweeCap2]: {
    product: ItemId.SweeCap2,
    materials: {
      [ItemId.SweeHair]: 10,
    },
  },
  [ItemId.SweeCap3]: {
    product: ItemId.SweeCap3,
    materials: {
      [ItemId.SweeHair]: 15,
    },
  },
  [ItemId.SweeCap4]: {
    product: ItemId.SweeCap4,
    materials: {
      [ItemId.SweeHair]: 22,
    },
  },
  [ItemId.DazziHat]: {
    product: ItemId.DazziHat,
    materials: {
      [ItemId.DazziCloud]: 5,
    },
  },
  [ItemId.DazziHat1]: {
    product: ItemId.DazziHat1,
    materials: {
      [ItemId.DazziCloud]: 7,
    },
  },
  [ItemId.DazziHat2]: {
    product: ItemId.DazziHat2,
    materials: {
      [ItemId.DazziCloud]: 10,
    },
  },
  [ItemId.DazziHat3]: {
    product: ItemId.DazziHat3,
    materials: {
      [ItemId.DazziCloud]: 15,
    },
  },
  [ItemId.DazziHat4]: {
    product: ItemId.DazziHat4,
    materials: {
      [ItemId.DazziCloud]: 22,
    },
  },
  [ItemId.CattivaHat]: {
    product: ItemId.CattivaHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.WitchSCrown]: {
    product: ItemId.WitchSCrown,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.HornsOfSupremacy]: {
    product: ItemId.HornsOfSupremacy,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.XenolordSHead]: {
    product: ItemId.XenolordSHead,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.MoonLordMask]: {
    product: ItemId.MoonLordMask,
    materials: {
      [ItemId.HallowedBar]: 1,
    },
  },
  [ItemId.CrownOfSalvation]: {
    product: ItemId.CrownOfSalvation,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.ZoeHat]: {
    product: ItemId.ZoeHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.LilyHat]: {
    product: ItemId.LilyHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.AxelHat]: {
    product: ItemId.AxelHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.MarcusHat]: {
    product: ItemId.MarcusHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.VictorHat]: {
    product: ItemId.VictorHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.SayaHat]: {
    product: ItemId.SayaHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.BjornHat]: {
    product: ItemId.BjornHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.AuriHat]: {
    product: ItemId.AuriHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.ZenaraHat]: {
    product: ItemId.ZenaraHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.DepressoHelmet]: {
    product: ItemId.DepressoHelmet,
    materials: {
      [ItemId.HighQualityCloth]: 5,
      [ItemId.VenomGland]: 25,
    },
  },
  [ItemId.EyeOfCthulhuMask]: {
    product: ItemId.EyeOfCthulhuMask,
    materials: {
      [ItemId.HallowedBar]: 1,
    },
  },
  [ItemId.LifePendant]: {
    product: ItemId.LifePendant,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.Bone]: 20,
      [ItemId.PaldiumFragment]: 25,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.AttackPendant]: {
    product: ItemId.AttackPendant,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.Horn]: 20,
      [ItemId.PaldiumFragment]: 25,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.DefensePendant]: {
    product: ItemId.DefensePendant,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Ore]: 20,
      [ItemId.PaldiumFragment]: 25,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.PendantOfDiligence]: {
    product: ItemId.PendantOfDiligence,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.Leather]: 20,
      [ItemId.PaldiumFragment]: 25,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.HeatResistantUndershirt]: {
    product: ItemId.HeatResistantUndershirt,
    materials: {
      [ItemId.Wool]: 20,
      [ItemId.FlameOrgan]: 15,
      [ItemId.Leather]: 25,
      [ItemId.Fiber]: 35,
    },
  },
  [ItemId.ThermalUndershirt]: {
    product: ItemId.ThermalUndershirt,
    materials: {
      [ItemId.Wool]: 20,
      [ItemId.IceOrgan]: 15,
      [ItemId.Leather]: 25,
      [ItemId.Cloth]: 10,
    },
  },
  [ItemId.MulticlimateUndershirt]: {
    product: ItemId.MulticlimateUndershirt,
    materials: {
      [ItemId.HighQualityCloth]: 40,
      [ItemId.FlameOrgan]: 20,
      [ItemId.IceOrgan]: 20,
      [ItemId.Polymer]: 20,
    },
  },
  [ItemId.ExplosionResistantUndershirt]: {
    product: ItemId.ExplosionResistantUndershirt,
    materials: {
      [ItemId.ExplosionResistantFiber]: 10,
      [ItemId.MythicalWood]: 50,
    },
  },
  [ItemId.CorrosiveMistMask]: {
    product: ItemId.CorrosiveMistMask,
    materials: {
      [ItemId.ToxinFilteringMembrane]: 10,
      [ItemId.Paloxite]: 30,
    },
  },
  [ItemId.RingOfNeutralResistance]: {
    product: ItemId.RingOfNeutralResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.Cement]: 15,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfFireResistance]: {
    product: ItemId.RingOfFireResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.FlameOrgan]: 15,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfWaterResistance]: {
    product: ItemId.RingOfWaterResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.AquaticPalFluids]: 30,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfElectricResistance]: {
    product: ItemId.RingOfElectricResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.ElectricOrgan]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfGrassResistance]: {
    product: ItemId.RingOfGrassResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.GumossLeaf]: 5,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfIceResistance]: {
    product: ItemId.RingOfIceResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.IceOrgan]: 15,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfGroundResistance]: {
    product: ItemId.RingOfGroundResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.MeteoriteFragment]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfDarkResistance]: {
    product: ItemId.RingOfDarkResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.VenomGland]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfDragonResistance]: {
    product: ItemId.RingOfDragonResistance,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.PureQuartz]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RingOfMercy]: {
    product: ItemId.RingOfMercy,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.AbilityGlasses]: {
    product: ItemId.AbilityGlasses,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.AncientCivilizationParts]: 10,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.RingOfFreight]: {
    product: ItemId.RingOfFreight,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.Leather]: 20,
      [ItemId.Horn]: 20,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.AntiGravityBelt]: {
    product: ItemId.AntiGravityBelt,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.NightstarSand]: 10,
    },
  },
  [ItemId.DoubleJumpBoots]: {
    product: ItemId.DoubleJumpBoots,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.TripleJumpBoots]: {
    product: ItemId.TripleJumpBoots,
    materials: {
      [ItemId.Hexolite]: 30,
      [ItemId.PaldiumFragment]: 150,
      [ItemId.NightstarSand]: 50,
      [ItemId.DarkFragment]: 50,
    },
  },
  [ItemId.AirDashBoots]: {
    product: ItemId.AirDashBoots,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.DoubleAirDashBoots]: {
    product: ItemId.DoubleAirDashBoots,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.NightstarSand]: 30,
      [ItemId.DarkFragment]: 30,
    },
  },
  [ItemId.TripleAirDashBoots]: {
    product: ItemId.TripleAirDashBoots,
    materials: {
      [ItemId.CoralumIngot]: 30,
      [ItemId.PaldiumFragment]: 150,
      [ItemId.NightstarSand]: 40,
      [ItemId.DarkFragment]: 50,
    },
  },
  [ItemId.NeutralSupportWhistle]: {
    product: ItemId.NeutralSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.Cement]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.FireSupportWhistle]: {
    product: ItemId.FireSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.FlameOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.WaterSupportWhistle]: {
    product: ItemId.WaterSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.AquaticPalFluids]: 30,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.ElectricSupportWhistle]: {
    product: ItemId.ElectricSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.ElectricOrgan]: 10,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.GrassSupportWhistle]: {
    product: ItemId.GrassSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.GumossLeaf]: 5,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.IceSupportWhistle]: {
    product: ItemId.IceSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.IceOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.GroundSupportWhistle]: {
    product: ItemId.GroundSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.MeteoriteFragment]: 10,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.DarkSupportWhistle]: {
    product: ItemId.DarkSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.VenomGland]: 10,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.DragonSupportWhistle]: {
    product: ItemId.DragonSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.PureQuartz]: 20,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.AttackSupportWhistle]: {
    product: ItemId.AttackSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.Sulfur]: 25,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.DefenseSupportWhistle]: {
    product: ItemId.DefenseSupportWhistle,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.Polymer]: 15,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.GrowthAccelerationBell]: {
    product: ItemId.GrowthAccelerationBell,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.MysteriousMushroom]: 10,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DogenEmblem]: {
    product: ItemId.DogenEmblem,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Bone]: 30,
      [ItemId.PaldiumFragment]: 35,
      [ItemId.AncientBone]: 30,
    },
  },
  [ItemId.SilvegisEmblem]: {
    product: ItemId.SilvegisEmblem,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Chromite]: 10,
      [ItemId.PaldiumFragment]: 35,
      [ItemId.AncientBone]: 30,
    },
  },
  [ItemId.ReptyroCharm]: {
    product: ItemId.ReptyroCharm,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.CarbonFiber]: 30,
      [ItemId.AncientBark]: 30,
    },
  },
  [ItemId.WumpoCharm]: {
    product: ItemId.WumpoCharm,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.IceOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.AncientLava]: 30,
    },
  },
  [ItemId.WanderingMerchantCharm]: {
    product: ItemId.WanderingMerchantCharm,
    materials: {
      [ItemId.Polymer]: 30,
      [ItemId.Leather]: 30,
      [ItemId.FlameOrgan]: 20,
      [ItemId.IceOrgan]: 20,
      [ItemId.AncientBone]: 30,
    },
  },
  [ItemId.VanguardCharm]: {
    product: ItemId.VanguardCharm,
    materials: {
      [ItemId.Polymer]: 30,
      [ItemId.Bone]: 30,
      [ItemId.FlameOrgan]: 20,
      [ItemId.IceOrgan]: 20,
      [ItemId.AncientBone]: 30,
    },
  },
  [ItemId.WarsectTerraSBelt]: {
    product: ItemId.WarsectTerraSBelt,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Honey]: 20,
      [ItemId.PaldiumFragment]: 35,
      [ItemId.AncientLava]: 30,
    },
  },
  [ItemId.IslanderSToolBelt]: {
    product: ItemId.IslanderSToolBelt,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Leather]: 40,
      [ItemId.PaldiumFragment]: 35,
      [ItemId.AncientBark]: 30,
    },
  },
  [ItemId.CelestialEmperorSBaton]: {
    product: ItemId.CelestialEmperorSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.PalMetalIngot]: 10,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.FlameEmperorSBaton]: {
    product: ItemId.FlameEmperorSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.FlameOrgan]: 15,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.LordOfTheSeaSBaton]: {
    product: ItemId.LordOfTheSeaSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.AquaticPalFluids]: 30,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.LordOfLightningSBaton]: {
    product: ItemId.LordOfLightningSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.ElectricOrgan]: 10,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.SpiritEmperorSBaton]: {
    product: ItemId.SpiritEmperorSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.BeautifulFlower]: 5,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.IceEmperorSBaton]: {
    product: ItemId.IceEmperorSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.IceOrgan]: 15,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.EarthEmperorSBaton]: {
    product: ItemId.EarthEmperorSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.Bone]: 30,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.LordOfTheUnderworldSBaton]: {
    product: ItemId.LordOfTheUnderworldSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Horn]: 30,
      [ItemId.PureQuartz]: 15,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.DivineDragonSBaton]: {
    product: ItemId.DivineDragonSBaton,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Polymer]: 20,
      [ItemId.PureQuartz]: 20,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.PalTamerSGlasses]: {
    product: ItemId.PalTamerSGlasses,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.AncientCivilizationParts]: 10,
      [ItemId.AncientBark]: 15,
    },
  },
  [ItemId.AirWalkerMkI]: {
    product: ItemId.AirWalkerMkI,
    materials: {
      [ItemId.Hexolite]: 20,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.DarkFragment]: 15,
      [ItemId.NightstarSand]: 30,
      [ItemId.AncientBark]: 15,
    },
  },
  [ItemId.AirWalkerMkII]: {
    product: ItemId.AirWalkerMkII,
    materials: {
      [ItemId.Hexolite]: 30,
      [ItemId.PaldiumFragment]: 40,
      [ItemId.DarkFragment]: 25,
      [ItemId.NightstarSand]: 40,
      [ItemId.AncientLava]: 30,
    },
  },
  [ItemId.AirWalkerMkIII]: {
    product: ItemId.AirWalkerMkIII,
    materials: {
      [ItemId.CoralumIngot]: 20,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.DarkFragment]: 35,
      [ItemId.NightstarSand]: 50,
      [ItemId.AncientBone]: 30,
    },
  },
  [ItemId.AirWalkerEX]: {
    product: ItemId.AirWalkerEX,
    materials: {
      [ItemId.CoralumIngot]: 30,
      [ItemId.PaldiumFragment]: 60,
      [ItemId.DarkFragment]: 45,
      [ItemId.NightstarSand]: 60,
      [ItemId.AncientBone]: 60,
    },
  },
  [ItemId.HartalisSTalisman]: {
    product: ItemId.HartalisSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Leather]: 30,
      [ItemId.Horn]: 30,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.BlazamutSTalisman]: {
    product: ItemId.BlazamutSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Coal]: 15,
      [ItemId.FlameOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.NeptiliusSTalisman]: {
    product: ItemId.NeptiliusSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.CarbonFiber]: 15,
      [ItemId.AquaticPalFluids]: 30,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.OrserkSTalisman]: {
    product: ItemId.OrserkSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Bone]: 30,
      [ItemId.ElectricOrgan]: 10,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.LyleenSTalisman]: {
    product: ItemId.LyleenSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Bone]: 30,
      [ItemId.BeautifulFlower]: 5,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.FrostallionSTalisman]: {
    product: ItemId.FrostallionSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Bone]: 30,
      [ItemId.IceOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.AnubisSTalisman]: {
    product: ItemId.AnubisSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Bone]: 30,
      [ItemId.MeteoriteFragment]: 10,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.LyleenNoctSTalisman]: {
    product: ItemId.LyleenNoctSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.BeautifulFlower]: 5,
      [ItemId.VenomGland]: 10,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.JetragonSTalisman]: {
    product: ItemId.JetragonSTalisman,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.BlazehowlRing]: {
    product: ItemId.BlazehowlRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.FlameOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.FalerisAquaRing]: {
    product: ItemId.FalerisAquaRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.AquaticPalFluids]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.FenglopeLuxRing]: {
    product: ItemId.FenglopeLuxRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Leather]: 40,
      [ItemId.ElectricOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.MenastingTerraRing]: {
    product: ItemId.MenastingTerraRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.CrudeOil]: 15,
      [ItemId.FlameOrgan]: 10,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.VaeletRing]: {
    product: ItemId.VaeletRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.TomatoSeeds]: 10,
      [ItemId.OnionSeeds]: 10,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.KatressRing]: {
    product: ItemId.KatressRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Leather]: 20,
      [ItemId.KatressHair]: 10,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.ElphidranRing]: {
    product: ItemId.ElphidranRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Bone]: 20,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.CryolinxRing]: {
    product: ItemId.CryolinxRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.PureQuartz]: 20,
      [ItemId.IceOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.FalerisRing]: {
    product: ItemId.FalerisRing,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.IceOrgan]: 15,
      [ItemId.FlameOrgan]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.RingOfTrust]: {
    product: ItemId.RingOfTrust,
    materials: {
      [ItemId.RefinedIngot]: 25,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.BeautifulFlower]: 10,
      [ItemId.AncientLava]: 30,
    },
  },
  [ItemId.PhantomRing]: {
    product: ItemId.PhantomRing,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Plasteel]: 10,
      [ItemId.PalMetalIngot]: 15,
      [ItemId.AncientBone]: 30,
    },
  },
  [ItemId.NormalParachute]: {
    product: ItemId.NormalParachute,
    materials: {
      [ItemId.Wood]: 10,
      [ItemId.Cloth]: 2,
    },
  },
  [ItemId.MegaGlider]: {
    product: ItemId.MegaGlider,
    materials: {
      [ItemId.WoodenBoard]: 5,
      [ItemId.Bone]: 10,
      ["cloth"]: 20,
    },
  },
  [ItemId.GigaGlider]: {
    product: ItemId.GigaGlider,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Hardwood]: 100,
      [ItemId.CarbonFiber]: 15,
      ["cloth2"]: 10,
    },
  },
  [ItemId.HyperGlider1]: {
    product: ItemId.HyperGlider1,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.HighQualityWoodenBoard]: 20,
      [ItemId.CarbonFiber]: 25,
      ["cloth2"]: 20,
    },
  },
  [ItemId.WingPack]: {
    product: ItemId.WingPack,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.PaloxiteIngot]: 6,
      [ItemId.AICore]: 20,
      [ItemId.ThermalCore]: 20,
      [ItemId.AncientCivilizationCore]: 10,
    },
  },
  [ItemId.Cake]: {
    product: ItemId.Cake,
    materials: {
      [ItemId.Flour]: 5,
      [ItemId.RedBerries]: 8,
      [ItemId.Milk]: 7,
      [ItemId.Egg]: 8,
      [ItemId.Honey]: 2,
    },
  },
  [ItemId.MushroomCake]: {
    product: ItemId.MushroomCake,
    materials: {
      [ItemId.Flour]: 5,
      [ItemId.Mushroom]: 5,
      [ItemId.CavernMushroom]: 3,
      [ItemId.Egg]: 8,
      [ItemId.Honey]: 2,
    },
  },
  [ItemId.VegetableCake]: {
    product: ItemId.VegetableCake,
    materials: {
      [ItemId.Flour]: 8,
      [ItemId.Tomato]: 8,
      [ItemId.Lettuce]: 7,
      [ItemId.Egg]: 8,
      [ItemId.Honey]: 4,
    },
  },
  [ItemId.ExtravagantVegetableCake]: {
    product: ItemId.ExtravagantVegetableCake,
    materials: {
      [ItemId.Flour]: 12,
      [ItemId.CottonCandy]: 8,
      [ItemId.Potato]: 10,
      [ItemId.Onion]: 6,
      [ItemId.Carrot]: 8,
    },
  },
  [ItemId.SpecialCake]: {
    product: ItemId.SpecialCake,
    materials: {
      [ItemId.Flour]: 20,
      [ItemId.CaramelCottonCandy]: 8,
      [ItemId.Milk]: 15,
      [ItemId.Egg]: 15,
      [ItemId.MammorestMeat]: 2,
    },
  },
  [ItemId.MammorestCurry]: {
    product: ItemId.MammorestCurry,
    materials: {
      [ItemId.MammorestMeat]: 1,
      [ItemId.Onion]: 2,
      [ItemId.Carrot]: 2,
      [ItemId.Potato]: 2,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.BroncherryFriedNoodles]: {
    product: ItemId.BroncherryFriedNoodles,
    materials: {
      [ItemId.BroncherryMeat]: 1,
      [ItemId.Onion]: 1,
      [ItemId.Carrot]: 1,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.MozzarinaCheeseburger]: {
    product: ItemId.MozzarinaCheeseburger,
    materials: {
      [ItemId.MozzarinaMeat]: 2,
      [ItemId.Flour]: 1,
      [ItemId.Tomato]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.RoastReindrix]: {
    product: ItemId.RoastReindrix,
    materials: {
      [ItemId.ReindrixVenison]: 1,
    },
  },
  [ItemId.BroncherryRibRoast]: {
    product: ItemId.BroncherryRibRoast,
    materials: {
      [ItemId.BroncherryMeat]: 1,
    },
  },
  [ItemId.MammorestSteak]: {
    product: ItemId.MammorestSteak,
    materials: {
      [ItemId.MammorestMeat]: 1,
    },
  },
  [ItemId.EikthyrdeerStew]: {
    product: ItemId.EikthyrdeerStew,
    materials: {
      [ItemId.EikthyrdeerVenison]: 2,
      [ItemId.Mushroom]: 1,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.SeafoodPasta]: {
    product: ItemId.SeafoodPasta,
    materials: {
      [ItemId.GloopieTentacle]: 3,
      [ItemId.Flour]: 3,
      [ItemId.Tomato]: 2,
    },
  },
  [ItemId.Pizza]: {
    product: ItemId.Pizza,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.RedBerries]: 2,
      [ItemId.Tomato]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.MushroomQuiche]: {
    product: ItemId.MushroomQuiche,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.Mushroom]: 2,
      [ItemId.Onion]: 2,
      [ItemId.Egg]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.EikthyrdeerLocoMoco]: {
    product: ItemId.EikthyrdeerLocoMoco,
    materials: {
      [ItemId.EikthyrdeerVenison]: 1,
      [ItemId.RedBerries]: 2,
      [ItemId.Egg]: 2,
    },
  },
  [ItemId.DumudChowder]: {
    product: ItemId.DumudChowder,
    materials: {
      [ItemId.RawDumud]: 1,
      [ItemId.Lettuce]: 2,
      [ItemId.Tomato]: 2,
    },
  },
  [ItemId.RushoarBaconNEggs]: {
    product: ItemId.RushoarBaconNEggs,
    materials: {
      [ItemId.RushoarPork]: 2,
      [ItemId.Egg]: 2,
    },
  },
  [ItemId.MozzarinaHamburger]: {
    product: ItemId.MozzarinaHamburger,
    materials: {
      [ItemId.MozzarinaMeat]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Lettuce]: 2,
    },
  },
  [ItemId.GaleclawNikujaga]: {
    product: ItemId.GaleclawNikujaga,
    materials: {
      [ItemId.GaleclawPoultry]: 1,
      [ItemId.Onion]: 2,
      [ItemId.Carrot]: 2,
      [ItemId.Potato]: 2,
    },
  },
  [ItemId.GrilledLamball]: {
    product: ItemId.GrilledLamball,
    materials: {
      [ItemId.LamballMutton]: 1,
      [ItemId.Lettuce]: 2,
    },
  },
  [ItemId.Minestrone]: {
    product: ItemId.Minestrone,
    materials: {
      [ItemId.Tomato]: 3,
      [ItemId.Carrot]: 2,
      [ItemId.Onion]: 2,
      [ItemId.Potato]: 1,
    },
  },
  [ItemId.RushoarHotDog]: {
    product: ItemId.RushoarHotDog,
    materials: {
      [ItemId.RushoarPork]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Lettuce]: 2,
    },
  },
  [ItemId.ReindrixStew]: {
    product: ItemId.ReindrixStew,
    materials: {
      [ItemId.ReindrixVenison]: 1,
      [ItemId.Tomato]: 2,
    },
  },
  [ItemId.Carbonara]: {
    product: ItemId.Carbonara,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.Egg]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.RushoarGyoza]: {
    product: ItemId.RushoarGyoza,
    materials: {
      [ItemId.RushoarPork]: 1,
      [ItemId.Mushroom]: 1,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.SpringRolls]: {
    product: ItemId.SpringRolls,
    materials: {
      [ItemId.Onion]: 2,
      [ItemId.Mushroom]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.Gratin]: {
    product: ItemId.Gratin,
    materials: {
      [ItemId.Milk]: 2,
      [ItemId.Potato]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.FriedChikipi]: {
    product: ItemId.FriedChikipi,
    materials: {
      [ItemId.ChikipiPoultry]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Egg]: 1,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.FriedKelpsea]: {
    product: ItemId.FriedKelpsea,
    materials: {
      [ItemId.RawKelpsea]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Egg]: 1,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.SeafoodSalad]: {
    product: ItemId.SeafoodSalad,
    materials: {
      [ItemId.GloopieTentacle]: 3,
      [ItemId.Lettuce]: 4,
    },
  },
  [ItemId.HerbRoastedLamball]: {
    product: ItemId.HerbRoastedLamball,
    materials: {
      [ItemId.LamballMutton]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.ChikipiSaut]: {
    product: ItemId.ChikipiSaut,
    materials: {
      [ItemId.ChikipiPoultry]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.StewedGaleclaw]: {
    product: ItemId.StewedGaleclaw,
    materials: {
      [ItemId.GaleclawPoultry]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.SaltGrilledSkutlass]: {
    product: ItemId.SaltGrilledSkutlass,
    materials: {
      [ItemId.SkutlassSashimi]: 1,
    },
  },
  [ItemId.MunchillSteak]: {
    product: ItemId.MunchillSteak,
    materials: {
      [ItemId.MunchillMeat]: 1,
    },
  },
  [ItemId.Salad]: {
    product: ItemId.Salad,
    materials: {
      [ItemId.Lettuce]: 2,
      [ItemId.Tomato]: 2,
    },
  },
  [ItemId.HerbRoastedCaprity]: {
    product: ItemId.HerbRoastedCaprity,
    materials: {
      [ItemId.CaprityMeat]: 1,
    },
  },
  [ItemId.MozzarinaSteak]: {
    product: ItemId.MozzarinaSteak,
    materials: {
      [ItemId.MozzarinaMeat]: 1,
    },
  },
  [ItemId.FriedGloopieBalls]: {
    product: ItemId.FriedGloopieBalls,
    materials: {
      [ItemId.GloopieTentacle]: 2,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.BroiledDumud]: {
    product: ItemId.BroiledDumud,
    materials: {
      [ItemId.RawDumud]: 1,
    },
  },
  [ItemId.RoastEikthyrdeer]: {
    product: ItemId.RoastEikthyrdeer,
    materials: {
      [ItemId.EikthyrdeerVenison]: 1,
    },
  },
  [ItemId.Omelet]: {
    product: ItemId.Omelet,
    materials: {
      [ItemId.Tomato]: 1,
      [ItemId.Egg]: 2,
    },
  },
  [ItemId.MarinatedMushrooms]: {
    product: ItemId.MarinatedMushrooms,
    materials: {
      [ItemId.Mushroom]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.RoastRushoar]: {
    product: ItemId.RoastRushoar,
    materials: {
      [ItemId.RushoarPork]: 1,
    },
  },
  [ItemId.JellroySJollyJelly]: {
    product: ItemId.JellroySJollyJelly,
    materials: {
      [ItemId.JellroyBellFlesh]: 2,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.JellietteSJigglyJelly]: {
    product: ItemId.JellietteSJigglyJelly,
    materials: {
      [ItemId.JellietteBellFlesh]: 2,
      [ItemId.AquaticPalFluids]: 2,
    },
  },
  [ItemId.StirFriedVegetables]: {
    product: ItemId.StirFriedVegetables,
    materials: {
      [ItemId.Onion]: 2,
      [ItemId.Carrot]: 2,
    },
  },
  [ItemId.MushroomSoup]: {
    product: ItemId.MushroomSoup,
    materials: {
      [ItemId.Mushroom]: 1,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.LamballKebab]: {
    product: ItemId.LamballKebab,
    materials: {
      [ItemId.LamballMutton]: 1,
    },
  },
  [ItemId.JamFilledBun]: {
    product: ItemId.JamFilledBun,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.GrilledChikipi]: {
    product: ItemId.GrilledChikipi,
    materials: {
      [ItemId.ChikipiPoultry]: 1,
    },
  },
  [ItemId.GrilledKelpsea]: {
    product: ItemId.GrilledKelpsea,
    materials: {
      [ItemId.RawKelpsea]: 1,
    },
  },
  [ItemId.GrilledGaleclaw]: {
    product: ItemId.GrilledGaleclaw,
    materials: {
      [ItemId.GaleclawPoultry]: 1,
    },
  },
  [ItemId.Pancake]: {
    product: ItemId.Pancake,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.Milk]: 1,
    },
  },
  [ItemId.FrenchFries]: {
    product: ItemId.FrenchFries,
    materials: {
      [ItemId.Potato]: 2,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.Bread]: {
    product: ItemId.Bread,
    materials: {
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.FriedEgg]: {
    product: ItemId.FriedEgg,
    materials: {
      [ItemId.Egg]: 1,
    },
  },
  [ItemId.BakedBerries]: {
    product: ItemId.BakedBerries,
    materials: {
      [ItemId.RedBerries]: 1,
    },
  },
  [ItemId.BakedMushroom]: {
    product: ItemId.BakedMushroom,
    materials: {
      [ItemId.Mushroom]: 1,
    },
  },
  [ItemId.HotMilk]: {
    product: ItemId.HotMilk,
    materials: {
      [ItemId.Milk]: 1,
    },
  },
  [ItemId.Flour]: {
    product: ItemId.Flour,
    materials: {
      [ItemId.Wheat]: 3,
    },
  },
  [ItemId.LowGradeMedicalSupplies]: {
    product: ItemId.LowGradeMedicalSupplies,
    materials: {
      [ItemId.RedBerries]: 5,
      [ItemId.Horn]: 2,
    },
  },
  [ItemId.MedicalSupplies]: {
    product: ItemId.MedicalSupplies,
    materials: {
      [ItemId.Ingot]: 3,
      [ItemId.Horn]: 3,
      [ItemId.Bone]: 1,
    },
  },
  [ItemId.HighGradeMedicalSupplies]: {
    product: ItemId.HighGradeMedicalSupplies,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Horn]: 5,
      [ItemId.Bone]: 2,
    },
  },
  [ItemId.MindControlMeds]: {
    product: ItemId.MindControlMeds,
    materials: {
      [ItemId.RefinedIngot]: 10,
      [ItemId.Horn]: 10,
      [ItemId.Bone]: 5,
      [ItemId.AquaticPalFluids]: 3,
    },
  },
  [ItemId.LowQualityRecoveryMeds]: {
    product: ItemId.LowQualityRecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 3,
      [ItemId.RedBerries]: 5,
      [ItemId.AquaticPalFluids]: 2,
    },
  },
  [ItemId.RecoveryMeds]: {
    product: ItemId.RecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 5,
      [ItemId.RedBerries]: 5,
      [ItemId.AquaticPalFluids]: 5,
      [ItemId.CottonCandy]: 3,
    },
  },
  [ItemId.HighQualityRecoveryMeds]: {
    product: ItemId.HighQualityRecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 10,
      [ItemId.RedBerries]: 20,
      [ItemId.HighQualityPalOil]: 5,
      [ItemId.CottonCandy]: 5,
      [ItemId.Sulfur]: 5,
    },
  },
  [ItemId.AdvancedRecoveryMeds]: {
    product: ItemId.AdvancedRecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 15,
      [ItemId.RedBerries]: 30,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.CottonCandy]: 7,
      [ItemId.Sulfur]: 10,
    },
  },
  [ItemId.SuspiciousJuice]: {
    product: ItemId.SuspiciousJuice,
    materials: {
      [ItemId.BeautifulFlower]: 3,
      [ItemId.Horn]: 3,
      [ItemId.Bone]: 1,
      [ItemId.AquaticPalFluids]: 1,
    },
  },
  [ItemId.StrangeJuice]: {
    product: ItemId.StrangeJuice,
    materials: {
      [ItemId.BeautifulFlower]: 5,
      [ItemId.Horn]: 5,
      [ItemId.Bone]: 2,
      [ItemId.AquaticPalFluids]: 2,
    },
  },
  [ItemId.MysteriousMushroomJuice]: {
    product: ItemId.MysteriousMushroomJuice,
    materials: {
      [ItemId.MysteriousMushroom]: 20,
      [ItemId.BeautifulFlower]: 10,
      [ItemId.Horn]: 10,
      [ItemId.Bone]: 5,
      [ItemId.AquaticPalFluids]: 5,
    },
  },
  [ItemId.MemoryWipingMedicine]: {
    product: ItemId.MemoryWipingMedicine,
    materials: {
      [ItemId.BeautifulFlower]: 99,
      [ItemId.Horn]: 50,
      [ItemId.Bone]: 50,
      [ItemId.AquaticPalFluids]: 50,
    },
  },
  [ItemId.NutrientTonic]: {
    product: ItemId.NutrientTonic,
    materials: {
      [ItemId.WorldTreeHolyWater]: 25,
      [ItemId.CaramelCottonCandy]: 18,
      [ItemId.Onion]: 20,
      [ItemId.CavernMushroom]: 10,
    },
  },
  [ItemId.RevivalPotion]: {
    product: ItemId.RevivalPotion,
    materials: {
      [ItemId.CavernMushroom]: 30,
      [ItemId.RedBerries]: 50,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.CottonCandy]: 10,
      [ItemId.Sulfur]: 20,
    },
  },
  [ItemId.WaterAwakeningCrystal]: {
    product: ItemId.WaterAwakeningCrystal,
    materials: {
      [ItemId.WaterRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.ElectricAwakeningCrystal]: {
    product: ItemId.ElectricAwakeningCrystal,
    materials: {
      [ItemId.ElectricRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.GroundAwakeningCrystal]: {
    product: ItemId.GroundAwakeningCrystal,
    materials: {
      [ItemId.GroundRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.GrassAwakeningCrystal]: {
    product: ItemId.GrassAwakeningCrystal,
    materials: {
      [ItemId.GrassRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.FireAwakeningCrystal]: {
    product: ItemId.FireAwakeningCrystal,
    materials: {
      [ItemId.FireRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.IceAwakeningCrystal]: {
    product: ItemId.IceAwakeningCrystal,
    materials: {
      [ItemId.IceRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.DragonAwakeningCrystal]: {
    product: ItemId.DragonAwakeningCrystal,
    materials: {
      [ItemId.DragonRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.DarkAwakeningCrystal]: {
    product: ItemId.DarkAwakeningCrystal,
    materials: {
      [ItemId.DarkRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.NeutralAwakeningCrystal]: {
    product: ItemId.NeutralAwakeningCrystal,
    materials: {
      [ItemId.NeutralRadiantGem]: 50,
      [ItemId.WorldTreeHolyWater]: 10,
    },
  },
  [ItemId.VitalRemedy]: {
    product: ItemId.VitalRemedy,
    materials: {
      [ItemId.LifeLotusS]: 4,
      [ItemId.PredatorCore]: 1,
    },
  },
  [ItemId.StaminaRemedy]: {
    product: ItemId.StaminaRemedy,
    materials: {
      [ItemId.StaminaLotusS]: 4,
      [ItemId.PredatorCore]: 1,
    },
  },
  [ItemId.MightRemedy]: {
    product: ItemId.MightRemedy,
    materials: {
      [ItemId.PowerLotusS]: 4,
      [ItemId.PredatorCore]: 1,
    },
  },
  [ItemId.SpeedRemedy]: {
    product: ItemId.SpeedRemedy,
    materials: {
      [ItemId.SpeedLotusS]: 4,
      [ItemId.PredatorCore]: 1,
    },
  },
  [ItemId.BurdenRemedy]: {
    product: ItemId.BurdenRemedy,
    materials: {
      [ItemId.CarryingLotusS]: 4,
      [ItemId.PredatorCore]: 1,
    },
  },
  [ItemId.VitalElixir]: {
    product: ItemId.VitalElixir,
    materials: {
      [ItemId.LifeLotusL]: 6,
      [ItemId.PredatorCore]: 2,
    },
  },
  [ItemId.StaminaElixir]: {
    product: ItemId.StaminaElixir,
    materials: {
      [ItemId.StaminaLotusL]: 6,
      [ItemId.PredatorCore]: 2,
    },
  },
  [ItemId.MightElixir]: {
    product: ItemId.MightElixir,
    materials: {
      [ItemId.PowerLotusL]: 6,
      [ItemId.PredatorCore]: 2,
    },
  },
  [ItemId.SpeedElixir]: {
    product: ItemId.SpeedElixir,
    materials: {
      [ItemId.SpeedLotusL]: 6,
      [ItemId.PredatorCore]: 2,
    },
  },
  [ItemId.BurdenElixir]: {
    product: ItemId.BurdenElixir,
    materials: {
      [ItemId.CarryingLotusL]: 6,
      [ItemId.PredatorCore]: 2,
    },
  },
  [ItemId.LifeFruit]: {
    product: ItemId.LifeFruit,
    materials: {
      [ItemId.LifeLotusS]: 3,
      [ItemId.LifeLotusL]: 3,
      [ItemId.SpeedLotusS]: 3,
      [ItemId.CarryingLotusS]: 3,
    },
  },
  [ItemId.PowerFruit]: {
    product: ItemId.PowerFruit,
    materials: {
      [ItemId.PowerLotusS]: 3,
      [ItemId.PowerLotusL]: 3,
      [ItemId.SpeedLotusL]: 3,
    },
  },
  [ItemId.StoutFruit]: {
    product: ItemId.StoutFruit,
    materials: {
      [ItemId.StaminaLotusS]: 3,
      [ItemId.StaminaLotusL]: 3,
      [ItemId.CarryingLotusL]: 3,
    },
  },
  [ItemId.HomewardThundercloud]: {
    product: ItemId.HomewardThundercloud,
    materials: {
      [ItemId.DazziCloud]: 1,
      [ItemId.ElectricOrgan]: 5,
    },
  },
  [ItemId.TrainingManualL]: {
    product: ItemId.TrainingManualL,
    materials: {
      [ItemId.AncientPalManuscript]: 100,
      ["FIber"]: 10,
    },
  },
  [ItemId.TrainingManualXL]: {
    product: ItemId.TrainingManualXL,
    materials: {
      [ItemId.AncientPalManuscript]: 500,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.Leather]: 5,
    },
  },
  [ItemId.Fiber]: {
    product: ItemId.Fiber,
    materials: {
      [ItemId.Wood]: 1,
    },
  },
  [ItemId.PaldiumFragment]: {
    product: ItemId.PaldiumFragment,
    materials: {
      [ItemId.AncientSphere]: 1,
    },
  },
  [ItemId.Cloth]: {
    product: ItemId.Cloth,
    materials: {
      [ItemId.Wool]: 2,
    },
  },
  [ItemId.HighQualityCloth]: {
    product: ItemId.HighQualityCloth,
    materials: {
      [ItemId.Wool]: 10,
      [ItemId.Leather]: 1,
    },
  },
  [ItemId.WoodenBoard]: {
    product: ItemId.WoodenBoard,
    materials: {
      [ItemId.Wood]: 10,
      [ItemId.Fiber]: 5,
      [ItemId.Nail]: 1,
    },
  },
  [ItemId.HighQualityWoodenBoard]: {
    product: ItemId.HighQualityWoodenBoard,
    materials: {
      [ItemId.Hardwood]: 10,
      [ItemId.Wood]: 10,
      [ItemId.HighQualityCloth]: 2,
    },
  },
  [ItemId.MythicalWoodenBoard]: {
    product: ItemId.MythicalWoodenBoard,
    materials: {
      [ItemId.MythicalWood]: 10,
      [ItemId.Hardwood]: 10,
      [ItemId.Chromite]: 5,
    },
  },
  [ItemId.Nail]: {
    product: ItemId.Nail,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.Gunpowder1]: {
    product: ItemId.Gunpowder1,
    materials: {
      [ItemId.Charcoal]: 2,
      [ItemId.Sulfur]: 1,
    },
  },
  [ItemId.CircuitBoard]: {
    product: ItemId.CircuitBoard,
    materials: {
      [ItemId.PureQuartz]: 2,
      [ItemId.Polymer]: 1,
    },
  },
  [ItemId.Polymer]: {
    product: ItemId.Polymer,
    materials: {
      [ItemId.HighQualityPalOil]: 2,
      [ItemId.Sulfur]: 1,
    },
  },
  [ItemId.Cement]: {
    product: ItemId.Cement,
    materials: {
      [ItemId.Stone]: 20,
      [ItemId.Bone]: 1,
      [ItemId.AquaticPalFluids]: 1,
    },
  },
  [ItemId.CarbonFiber]: {
    product: ItemId.CarbonFiber,
    materials: {
      [ItemId.Charcoal]: 5,
      [ItemId.FlameOrgan]: 1,
    },
  },
  [ItemId.CryogenicCoolant]: {
    product: ItemId.CryogenicCoolant,
    materials: {
      [ItemId.AquaticPalFluids]: 1,
      [ItemId.IceOrgan]: 1,
    },
  },
  [ItemId.CorrosiveSolvent]: {
    product: ItemId.CorrosiveSolvent,
    materials: {
      [ItemId.VenomGland]: 1,
      [ItemId.Sulfur]: 1,
    },
  },
  [ItemId.BioBattery]: {
    product: ItemId.BioBattery,
    materials: {
      [ItemId.ElectricOrgan]: 1,
      [ItemId.RefinedIngot]: 1,
      [ItemId.CarbonFiber]: 1,
    },
  },
  [ItemId.ThermalCore]: {
    product: ItemId.ThermalCore,
    materials: {
      [ItemId.FlameOrgan]: 4,
      [ItemId.Coal]: 8,
      [ItemId.CorrosiveSolvent]: 2,
      [ItemId.Hexolite]: 2,
    },
  },
  [ItemId.Computer]: {
    product: ItemId.Computer,
    materials: {
      [ItemId.CircuitBoard]: 2,
      [ItemId.Plasteel]: 3,
      [ItemId.BioBattery]: 2,
      [ItemId.CarbonFiber]: 2,
    },
  },
  [ItemId.AICore]: {
    product: ItemId.AICore,
    materials: {
      [ItemId.Computer]: 5,
      [ItemId.SoraliteIngot]: 10,
      [ItemId.ThermalCore]: 2,
      [ItemId.AncientCivilizationCore]: 1,
    },
  },
  [ItemId.Charcoal]: {
    product: ItemId.Charcoal,
    materials: {
      [ItemId.Wood]: 2,
    },
  },
  [ItemId.Ingot]: {
    product: ItemId.Ingot,
    materials: {
      [ItemId.Ore]: 2,
    },
  },
  [ItemId.RefinedIngot]: {
    product: ItemId.RefinedIngot,
    materials: {
      [ItemId.Ore]: 2,
      [ItemId.Coal]: 2,
    },
  },
  [ItemId.PalMetalIngot]: {
    product: ItemId.PalMetalIngot,
    materials: {
      [ItemId.Ore]: 4,
      [ItemId.PureQuartz]: 1,
      [ItemId.PaldiumFragment]: 2,
    },
  },
  [ItemId.Plasteel]: {
    product: ItemId.Plasteel,
    materials: {
      [ItemId.CrudeOil]: 2,
      [ItemId.Ore]: 5,
    },
  },
  [ItemId.Hexolite]: {
    product: ItemId.Hexolite,
    materials: {
      [ItemId.Chromite]: 1,
      [ItemId.HexoliteQuartz]: 1,
    },
  },
  [ItemId.CoralumIngot]: {
    product: ItemId.CoralumIngot,
    materials: {
      [ItemId.CoralumOre]: 2,
      [ItemId.Coal]: 5,
    },
  },
  [ItemId.SoraliteIngot]: {
    product: ItemId.SoraliteIngot,
    materials: {
      [ItemId.Soralite]: 2,
      [ItemId.PureQuartz]: 2,
    },
  },
  [ItemId.PaloxiteIngot]: {
    product: ItemId.PaloxiteIngot,
    materials: {
      [ItemId.Soralite]: 1,
      [ItemId.Paloxite]: 2,
      [ItemId.WorldTreeHolyWater]: 1,
    },
  },
  [ItemId.SmallPalSoul]: {
    product: ItemId.SmallPalSoul,
    materials: {
      [ItemId.MediumPalSoul]: 1,
    },
  },
  [ItemId.MediumPalSoul]: {
    product: ItemId.MediumPalSoul,
    materials: {
      [ItemId.LargePalSoul]: 1,
    },
  },
  [ItemId.LargePalSoul]: {
    product: ItemId.LargePalSoul,
    materials: {
      [ItemId.GiantPalSoul]: 1,
    },
  },
  [ItemId.GiantPalSoul]: {
    product: ItemId.GiantPalSoul,
    materials: {
      [ItemId.LargePalSoul]: 2,
    },
  },
  [ItemId.FishingMagnet]: {
    product: ItemId.FishingMagnet,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.AquaticConstructionKit]: {
    product: ItemId.AquaticConstructionKit,
    materials: {
      [ItemId.Cement]: 200,
      [ItemId.CoralumIngot]: 50,
      [ItemId.HighQualityWoodenBoard]: 100,
    },
  },
  [ItemId.MetalBatSchematic2]: {
    product: ItemId.MetalBatSchematic2,
    materials: {
      [ItemId.MetalBatSchematic1]: 5,
    },
  },
  [ItemId.MetalBatSchematic3]: {
    product: ItemId.MetalBatSchematic3,
    materials: {
      [ItemId.MetalBatSchematic2]: 5,
    },
  },
  [ItemId.MetalBatSchematic4]: {
    product: ItemId.MetalBatSchematic4,
    materials: {
      [ItemId.MetalBatSchematic3]: 5,
    },
  },
  [ItemId.SwordSchematic2]: {
    product: ItemId.SwordSchematic2,
    materials: {
      [ItemId.SwordSchematic1]: 5,
    },
  },
  [ItemId.SwordSchematic3]: {
    product: ItemId.SwordSchematic3,
    materials: {
      [ItemId.SwordSchematic2]: 5,
    },
  },
  [ItemId.SwordSchematic4]: {
    product: ItemId.SwordSchematic4,
    materials: {
      [ItemId.SwordSchematic3]: 5,
    },
  },
  [ItemId.KatanaSchematic2]: {
    product: ItemId.KatanaSchematic2,
    materials: {
      [ItemId.KatanaSchematic1]: 5,
    },
  },
  [ItemId.KatanaSchematic3]: {
    product: ItemId.KatanaSchematic3,
    materials: {
      [ItemId.KatanaSchematic2]: 5,
    },
  },
  [ItemId.KatanaSchematic4]: {
    product: ItemId.KatanaSchematic4,
    materials: {
      [ItemId.KatanaSchematic3]: 5,
    },
  },
  [ItemId.BeamSwordSchematic2]: {
    product: ItemId.BeamSwordSchematic2,
    materials: {
      [ItemId.BeamSwordSchematic1]: 5,
    },
  },
  [ItemId.BeamSwordSchematic3]: {
    product: ItemId.BeamSwordSchematic3,
    materials: {
      [ItemId.BeamSwordSchematic2]: 5,
    },
  },
  [ItemId.BeamSwordSchematic4]: {
    product: ItemId.BeamSwordSchematic4,
    materials: {
      [ItemId.BeamSwordSchematic3]: 5,
    },
  },
  [ItemId.LaserSwordSchematic2]: {
    product: ItemId.LaserSwordSchematic2,
    materials: {
      [ItemId.LaserSwordSchematic1]: 5,
    },
  },
  [ItemId.LaserSwordSchematic3]: {
    product: ItemId.LaserSwordSchematic3,
    materials: {
      [ItemId.LaserSwordSchematic2]: 5,
    },
  },
  [ItemId.LaserSwordSchematic4]: {
    product: ItemId.LaserSwordSchematic4,
    materials: {
      [ItemId.LaserSwordSchematic3]: 5,
    },
  },
  [ItemId.OldBowSchematic2]: {
    product: ItemId.OldBowSchematic2,
    materials: {
      [ItemId.OldBowSchematic1]: 5,
    },
  },
  [ItemId.OldBowSchematic3]: {
    product: ItemId.OldBowSchematic3,
    materials: {
      [ItemId.OldBowSchematic2]: 5,
    },
  },
  [ItemId.OldBowSchematic4]: {
    product: ItemId.OldBowSchematic4,
    materials: {
      [ItemId.OldBowSchematic3]: 5,
    },
  },
  [ItemId.CrossbowSchematic2]: {
    product: ItemId.CrossbowSchematic2,
    materials: {
      [ItemId.CrossbowSchematic1]: 5,
    },
  },
  [ItemId.CrossbowSchematic3]: {
    product: ItemId.CrossbowSchematic3,
    materials: {
      [ItemId.CrossbowSchematic2]: 5,
    },
  },
  [ItemId.CrossbowSchematic4]: {
    product: ItemId.CrossbowSchematic4,
    materials: {
      [ItemId.CrossbowSchematic3]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbowSchematic2]: {
    product: ItemId.PoisonArrowCrossbowSchematic2,
    materials: {
      [ItemId.PoisonArrowCrossbowSchematic1]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbowSchematic3]: {
    product: ItemId.PoisonArrowCrossbowSchematic3,
    materials: {
      [ItemId.PoisonArrowCrossbowSchematic2]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbowSchematic4]: {
    product: ItemId.PoisonArrowCrossbowSchematic4,
    materials: {
      [ItemId.PoisonArrowCrossbowSchematic3]: 5,
    },
  },
  [ItemId.FireArrowCrossbowSchematic2]: {
    product: ItemId.FireArrowCrossbowSchematic2,
    materials: {
      [ItemId.FireArrowCrossbowSchematic1]: 5,
    },
  },
  [ItemId.FireArrowCrossbowSchematic3]: {
    product: ItemId.FireArrowCrossbowSchematic3,
    materials: {
      [ItemId.FireArrowCrossbowSchematic2]: 5,
    },
  },
  [ItemId.FireArrowCrossbowSchematic4]: {
    product: ItemId.FireArrowCrossbowSchematic4,
    materials: {
      [ItemId.FireArrowCrossbowSchematic3]: 5,
    },
  },
  [ItemId.CompoundBowSchematic2]: {
    product: ItemId.CompoundBowSchematic2,
    materials: {
      [ItemId.CompoundBowSchematic1]: 5,
    },
  },
  [ItemId.CompoundBowSchematic3]: {
    product: ItemId.CompoundBowSchematic3,
    materials: {
      [ItemId.CompoundBowSchematic2]: 5,
    },
  },
  [ItemId.CompoundBowSchematic4]: {
    product: ItemId.CompoundBowSchematic4,
    materials: {
      [ItemId.CompoundBowSchematic3]: 5,
    },
  },
  [ItemId.AdvancedBowSchematic2]: {
    product: ItemId.AdvancedBowSchematic2,
    materials: {
      [ItemId.AdvancedBowSchematic1]: 5,
    },
  },
  [ItemId.AdvancedBowSchematic3]: {
    product: ItemId.AdvancedBowSchematic3,
    materials: {
      [ItemId.AdvancedBowSchematic2]: 5,
    },
  },
  [ItemId.AdvancedBowSchematic4]: {
    product: ItemId.AdvancedBowSchematic4,
    materials: {
      [ItemId.AdvancedBowSchematic3]: 5,
    },
  },
  [ItemId.MechanicalBowSchematic2]: {
    product: ItemId.MechanicalBowSchematic2,
    materials: {
      [ItemId.MechanicalBowSchematic1]: 5,
    },
  },
  [ItemId.MechanicalBowSchematic3]: {
    product: ItemId.MechanicalBowSchematic3,
    materials: {
      [ItemId.MechanicalBowSchematic2]: 5,
    },
  },
  [ItemId.MechanicalBowSchematic4]: {
    product: ItemId.MechanicalBowSchematic4,
    materials: {
      [ItemId.MechanicalBowSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftHandgunSchematic2]: {
    product: ItemId.MakeshiftHandgunSchematic2,
    materials: {
      [ItemId.MakeshiftHandgunSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftHandgunSchematic3]: {
    product: ItemId.MakeshiftHandgunSchematic3,
    materials: {
      [ItemId.MakeshiftHandgunSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftHandgunSchematic4]: {
    product: ItemId.MakeshiftHandgunSchematic4,
    materials: {
      [ItemId.MakeshiftHandgunSchematic3]: 5,
    },
  },
  [ItemId.HandgunSchematic2]: {
    product: ItemId.HandgunSchematic2,
    materials: {
      [ItemId.HandgunSchematic1]: 5,
    },
  },
  [ItemId.HandgunSchematic3]: {
    product: ItemId.HandgunSchematic3,
    materials: {
      [ItemId.HandgunSchematic2]: 5,
    },
  },
  [ItemId.HandgunSchematic4]: {
    product: ItemId.HandgunSchematic4,
    materials: {
      [ItemId.HandgunSchematic3]: 5,
    },
  },
  [ItemId.OldRevolverSchematic2]: {
    product: ItemId.OldRevolverSchematic2,
    materials: {
      [ItemId.OldRevolverSchematic1]: 5,
    },
  },
  [ItemId.OldRevolverSchematic3]: {
    product: ItemId.OldRevolverSchematic3,
    materials: {
      [ItemId.OldRevolverSchematic2]: 5,
    },
  },
  [ItemId.OldRevolverSchematic4]: {
    product: ItemId.OldRevolverSchematic4,
    materials: {
      [ItemId.OldRevolverSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftShotgunSchematic2]: {
    product: ItemId.MakeshiftShotgunSchematic2,
    materials: {
      [ItemId.MakeshiftShotgunSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftShotgunSchematic3]: {
    product: ItemId.MakeshiftShotgunSchematic3,
    materials: {
      [ItemId.MakeshiftShotgunSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftShotgunSchematic4]: {
    product: ItemId.MakeshiftShotgunSchematic4,
    materials: {
      [ItemId.MakeshiftShotgunSchematic3]: 5,
    },
  },
  [ItemId.DoubleBarreledShotgunSchematic2]: {
    product: ItemId.DoubleBarreledShotgunSchematic2,
    materials: {
      [ItemId.DoubleBarreledShotgunSchematic1]: 5,
    },
  },
  [ItemId.DoubleBarreledShotgunSchematic3]: {
    product: ItemId.DoubleBarreledShotgunSchematic3,
    materials: {
      [ItemId.DoubleBarreledShotgunSchematic2]: 5,
    },
  },
  [ItemId.DoubleBarreledShotgunSchematic4]: {
    product: ItemId.DoubleBarreledShotgunSchematic4,
    materials: {
      [ItemId.DoubleBarreledShotgunSchematic3]: 5,
    },
  },
  [ItemId.PumpActionShotgunSchematic2]: {
    product: ItemId.PumpActionShotgunSchematic2,
    materials: {
      [ItemId.PumpActionShotgunSchematic1]: 5,
    },
  },
  [ItemId.PumpActionShotgunSchematic3]: {
    product: ItemId.PumpActionShotgunSchematic3,
    materials: {
      [ItemId.PumpActionShotgunSchematic2]: 5,
    },
  },
  [ItemId.PumpActionShotgunSchematic4]: {
    product: ItemId.PumpActionShotgunSchematic4,
    materials: {
      [ItemId.PumpActionShotgunSchematic3]: 5,
    },
  },
  [ItemId.SemiAutoShotgunSchematic2]: {
    product: ItemId.SemiAutoShotgunSchematic2,
    materials: {
      [ItemId.SemiAutoShotgunSchematic1]: 5,
    },
  },
  [ItemId.SemiAutoShotgunSchematic3]: {
    product: ItemId.SemiAutoShotgunSchematic3,
    materials: {
      [ItemId.SemiAutoShotgunSchematic2]: 5,
    },
  },
  [ItemId.SemiAutoShotgunSchematic4]: {
    product: ItemId.SemiAutoShotgunSchematic4,
    materials: {
      [ItemId.SemiAutoShotgunSchematic3]: 5,
    },
  },
  [ItemId.EnergyShotgunSchematic2]: {
    product: ItemId.EnergyShotgunSchematic2,
    materials: {
      [ItemId.EnergyShotgunSchematic1]: 5,
    },
  },
  [ItemId.EnergyShotgunSchematic3]: {
    product: ItemId.EnergyShotgunSchematic3,
    materials: {
      [ItemId.EnergyShotgunSchematic2]: 5,
    },
  },
  [ItemId.EnergyShotgunSchematic4]: {
    product: ItemId.EnergyShotgunSchematic4,
    materials: {
      [ItemId.EnergyShotgunSchematic3]: 5,
    },
  },
  [ItemId.PrototypeShotgunSchematic2]: {
    product: ItemId.PrototypeShotgunSchematic2,
    materials: {
      [ItemId.PrototypeShotgunSchematic1]: 5,
    },
  },
  [ItemId.PrototypeShotgunSchematic3]: {
    product: ItemId.PrototypeShotgunSchematic3,
    materials: {
      [ItemId.PrototypeShotgunSchematic2]: 5,
    },
  },
  [ItemId.PrototypeShotgunSchematic4]: {
    product: ItemId.PrototypeShotgunSchematic4,
    materials: {
      [ItemId.PrototypeShotgunSchematic3]: 5,
    },
  },
  [ItemId.BeamScatterSchematic2]: {
    product: ItemId.BeamScatterSchematic2,
    materials: {
      [ItemId.BeamScatterSchematic1]: 5,
    },
  },
  [ItemId.BeamScatterSchematic3]: {
    product: ItemId.BeamScatterSchematic3,
    materials: {
      [ItemId.BeamScatterSchematic2]: 5,
    },
  },
  [ItemId.BeamScatterSchematic4]: {
    product: ItemId.BeamScatterSchematic4,
    materials: {
      [ItemId.BeamScatterSchematic3]: 5,
    },
  },
  [ItemId.MusketSchematic2]: {
    product: ItemId.MusketSchematic2,
    materials: {
      [ItemId.MusketSchematic1]: 5,
    },
  },
  [ItemId.MusketSchematic3]: {
    product: ItemId.MusketSchematic3,
    materials: {
      [ItemId.MusketSchematic2]: 5,
    },
  },
  [ItemId.MusketSchematic4]: {
    product: ItemId.MusketSchematic4,
    materials: {
      [ItemId.MusketSchematic3]: 5,
    },
  },
  [ItemId.SingleShotRifleSchematic2]: {
    product: ItemId.SingleShotRifleSchematic2,
    materials: {
      [ItemId.SingleShotRifleSchematic1]: 5,
    },
  },
  [ItemId.SingleShotRifleSchematic3]: {
    product: ItemId.SingleShotRifleSchematic3,
    materials: {
      [ItemId.SingleShotRifleSchematic2]: 5,
    },
  },
  [ItemId.SingleShotRifleSchematic4]: {
    product: ItemId.SingleShotRifleSchematic4,
    materials: {
      [ItemId.SingleShotRifleSchematic3]: 5,
    },
  },
  [ItemId.SemiAutoRifleSchematic2]: {
    product: ItemId.SemiAutoRifleSchematic2,
    materials: {
      [ItemId.SemiAutoRifleSchematic1]: 5,
    },
  },
  [ItemId.SemiAutoRifleSchematic3]: {
    product: ItemId.SemiAutoRifleSchematic3,
    materials: {
      [ItemId.SemiAutoRifleSchematic2]: 5,
    },
  },
  [ItemId.SemiAutoRifleSchematic4]: {
    product: ItemId.SemiAutoRifleSchematic4,
    materials: {
      [ItemId.SemiAutoRifleSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftAssaultRifleSchematic2]: {
    product: ItemId.MakeshiftAssaultRifleSchematic2,
    materials: {
      [ItemId.MakeshiftAssaultRifleSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftAssaultRifleSchematic3]: {
    product: ItemId.MakeshiftAssaultRifleSchematic3,
    materials: {
      [ItemId.MakeshiftAssaultRifleSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftAssaultRifleSchematic4]: {
    product: ItemId.MakeshiftAssaultRifleSchematic4,
    materials: {
      [ItemId.MakeshiftAssaultRifleSchematic3]: 5,
    },
  },
  [ItemId.AssaultRifleSchematic2]: {
    product: ItemId.AssaultRifleSchematic2,
    materials: {
      [ItemId.AssaultRifleSchematic1]: 5,
    },
  },
  [ItemId.AssaultRifleSchematic3]: {
    product: ItemId.AssaultRifleSchematic3,
    materials: {
      [ItemId.AssaultRifleSchematic2]: 5,
    },
  },
  [ItemId.AssaultRifleSchematic4]: {
    product: ItemId.AssaultRifleSchematic4,
    materials: {
      [ItemId.AssaultRifleSchematic3]: 5,
    },
  },
  [ItemId.HeavyAssaultRifleSchematic2]: {
    product: ItemId.HeavyAssaultRifleSchematic2,
    materials: {
      [ItemId.HeavyAssaultRifleSchematic1]: 5,
    },
  },
  [ItemId.HeavyAssaultRifleSchematic3]: {
    product: ItemId.HeavyAssaultRifleSchematic3,
    materials: {
      [ItemId.HeavyAssaultRifleSchematic2]: 5,
    },
  },
  [ItemId.HeavyAssaultRifleSchematic4]: {
    product: ItemId.HeavyAssaultRifleSchematic4,
    materials: {
      [ItemId.HeavyAssaultRifleSchematic3]: 5,
    },
  },
  [ItemId.PlasmaRifleSchematic2]: {
    product: ItemId.PlasmaRifleSchematic2,
    materials: {
      [ItemId.PlasmaRifleSchematic1]: 5,
    },
  },
  [ItemId.PlasmaRifleSchematic3]: {
    product: ItemId.PlasmaRifleSchematic3,
    materials: {
      [ItemId.PlasmaRifleSchematic2]: 5,
    },
  },
  [ItemId.PlasmaRifleSchematic4]: {
    product: ItemId.PlasmaRifleSchematic4,
    materials: {
      [ItemId.PlasmaRifleSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftSMGSchematic2]: {
    product: ItemId.MakeshiftSMGSchematic2,
    materials: {
      [ItemId.MakeshiftSMGSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftSMGSchematic3]: {
    product: ItemId.MakeshiftSMGSchematic3,
    materials: {
      [ItemId.MakeshiftSMGSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftSMGSchematic4]: {
    product: ItemId.MakeshiftSMGSchematic4,
    materials: {
      [ItemId.MakeshiftSMGSchematic3]: 5,
    },
  },
  [ItemId.SMGSchematic2]: {
    product: ItemId.SMGSchematic2,
    materials: {
      [ItemId.SMGSchematic1]: 5,
    },
  },
  [ItemId.SMGSchematic3]: {
    product: ItemId.SMGSchematic3,
    materials: {
      [ItemId.SMGSchematic2]: 5,
    },
  },
  [ItemId.SMGSchematic4]: {
    product: ItemId.SMGSchematic4,
    materials: {
      [ItemId.SMGSchematic3]: 5,
    },
  },
  [ItemId.CombatSMGSchematic2]: {
    product: ItemId.CombatSMGSchematic2,
    materials: {
      [ItemId.CombatSMGSchematic1]: 5,
    },
  },
  [ItemId.CombatSMGSchematic3]: {
    product: ItemId.CombatSMGSchematic3,
    materials: {
      [ItemId.CombatSMGSchematic2]: 5,
    },
  },
  [ItemId.CombatSMGSchematic4]: {
    product: ItemId.CombatSMGSchematic4,
    materials: {
      [ItemId.CombatSMGSchematic3]: 5,
    },
  },
  [ItemId.RocketLauncherSchematic2]: {
    product: ItemId.RocketLauncherSchematic2,
    materials: {
      [ItemId.RocketLauncherSchematic1]: 5,
    },
  },
  [ItemId.RocketLauncherSchematic3]: {
    product: ItemId.RocketLauncherSchematic3,
    materials: {
      [ItemId.RocketLauncherSchematic2]: 5,
    },
  },
  [ItemId.RocketLauncherSchematic4]: {
    product: ItemId.RocketLauncherSchematic4,
    materials: {
      [ItemId.RocketLauncherSchematic3]: 5,
    },
  },
  [ItemId.LaserRifleSchematic2]: {
    product: ItemId.LaserRifleSchematic2,
    materials: {
      [ItemId.LaserRifleSchematic1]: 5,
    },
  },
  [ItemId.LaserRifleSchematic3]: {
    product: ItemId.LaserRifleSchematic3,
    materials: {
      [ItemId.LaserRifleSchematic2]: 5,
    },
  },
  [ItemId.LaserRifleSchematic4]: {
    product: ItemId.LaserRifleSchematic4,
    materials: {
      [ItemId.LaserRifleSchematic3]: 5,
    },
  },
  [ItemId.ChargeRifleSchematic2]: {
    product: ItemId.ChargeRifleSchematic2,
    materials: {
      [ItemId.ChargeRifleSchematic1]: 5,
    },
  },
  [ItemId.ChargeRifleSchematic3]: {
    product: ItemId.ChargeRifleSchematic3,
    materials: {
      [ItemId.ChargeRifleSchematic2]: 5,
    },
  },
  [ItemId.ChargeRifleSchematic4]: {
    product: ItemId.ChargeRifleSchematic4,
    materials: {
      [ItemId.ChargeRifleSchematic3]: 5,
    },
  },
  [ItemId.OverheatRifleSchematic2]: {
    product: ItemId.OverheatRifleSchematic2,
    materials: {
      [ItemId.OverheatRifleSchematic1]: 5,
    },
  },
  [ItemId.OverheatRifleSchematic3]: {
    product: ItemId.OverheatRifleSchematic3,
    materials: {
      [ItemId.OverheatRifleSchematic2]: 5,
    },
  },
  [ItemId.OverheatRifleSchematic4]: {
    product: ItemId.OverheatRifleSchematic4,
    materials: {
      [ItemId.OverheatRifleSchematic3]: 5,
    },
  },
  [ItemId.FlamethrowerSchematic2]: {
    product: ItemId.FlamethrowerSchematic2,
    materials: {
      [ItemId.FlamethrowerSchematic1]: 5,
    },
  },
  [ItemId.FlamethrowerSchematic3]: {
    product: ItemId.FlamethrowerSchematic3,
    materials: {
      [ItemId.FlamethrowerSchematic2]: 5,
    },
  },
  [ItemId.FlamethrowerSchematic4]: {
    product: ItemId.FlamethrowerSchematic4,
    materials: {
      [ItemId.FlamethrowerSchematic3]: 5,
    },
  },
  [ItemId.GatlingGunSchematic2]: {
    product: ItemId.GatlingGunSchematic2,
    materials: {
      [ItemId.GatlingGunSchematic1]: 5,
    },
  },
  [ItemId.GatlingGunSchematic3]: {
    product: ItemId.GatlingGunSchematic3,
    materials: {
      [ItemId.GatlingGunSchematic2]: 5,
    },
  },
  [ItemId.GatlingGunSchematic4]: {
    product: ItemId.GatlingGunSchematic4,
    materials: {
      [ItemId.GatlingGunSchematic3]: 5,
    },
  },
  [ItemId.LaserGatlingGunSchematic2]: {
    product: ItemId.LaserGatlingGunSchematic2,
    materials: {
      [ItemId.LaserGatlingGunSchematic1]: 5,
    },
  },
  [ItemId.LaserGatlingGunSchematic3]: {
    product: ItemId.LaserGatlingGunSchematic3,
    materials: {
      [ItemId.LaserGatlingGunSchematic2]: 5,
    },
  },
  [ItemId.LaserGatlingGunSchematic4]: {
    product: ItemId.LaserGatlingGunSchematic4,
    materials: {
      [ItemId.LaserGatlingGunSchematic3]: 5,
    },
  },
  [ItemId.GrenadeLauncherSchematic2]: {
    product: ItemId.GrenadeLauncherSchematic2,
    materials: {
      [ItemId.GrenadeLauncherSchematic1]: 5,
    },
  },
  [ItemId.GrenadeLauncherSchematic3]: {
    product: ItemId.GrenadeLauncherSchematic3,
    materials: {
      [ItemId.GrenadeLauncherSchematic2]: 5,
    },
  },
  [ItemId.GrenadeLauncherSchematic4]: {
    product: ItemId.GrenadeLauncherSchematic4,
    materials: {
      [ItemId.GrenadeLauncherSchematic3]: 5,
    },
  },
  [ItemId.TacticalGrenadeLauncherSchematic2]: {
    product: ItemId.TacticalGrenadeLauncherSchematic2,
    materials: {
      [ItemId.TacticalGrenadeLauncherSchematic1]: 5,
    },
  },
  [ItemId.TacticalGrenadeLauncherSchematic3]: {
    product: ItemId.TacticalGrenadeLauncherSchematic3,
    materials: {
      [ItemId.TacticalGrenadeLauncherSchematic2]: 5,
    },
  },
  [ItemId.TacticalGrenadeLauncherSchematic4]: {
    product: ItemId.TacticalGrenadeLauncherSchematic4,
    materials: {
      [ItemId.TacticalGrenadeLauncherSchematic3]: 5,
    },
  },
  [ItemId.GuidedMissileLauncherSchematic2]: {
    product: ItemId.GuidedMissileLauncherSchematic2,
    materials: {
      [ItemId.GuidedMissileLauncherSchematic1]: 5,
    },
  },
  [ItemId.GuidedMissileLauncherSchematic3]: {
    product: ItemId.GuidedMissileLauncherSchematic3,
    materials: {
      [ItemId.GuidedMissileLauncherSchematic2]: 5,
    },
  },
  [ItemId.GuidedMissileLauncherSchematic4]: {
    product: ItemId.GuidedMissileLauncherSchematic4,
    materials: {
      [ItemId.GuidedMissileLauncherSchematic3]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic1]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic1,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic2]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic2,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic1]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic3]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic3,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic2]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic4]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic4,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic3]: 5,
    },
  },
  [ItemId.PlasmaCannonSchematic2]: {
    product: ItemId.PlasmaCannonSchematic2,
    materials: {
      [ItemId.PlasmaCannonSchematic1]: 5,
    },
  },
  [ItemId.PlasmaCannonSchematic3]: {
    product: ItemId.PlasmaCannonSchematic3,
    materials: {
      [ItemId.PlasmaCannonSchematic2]: 5,
    },
  },
  [ItemId.PlasmaCannonSchematic4]: {
    product: ItemId.PlasmaCannonSchematic4,
    materials: {
      [ItemId.PlasmaCannonSchematic3]: 5,
    },
  },
  [ItemId.BeamLauncherSchematic2]: {
    product: ItemId.BeamLauncherSchematic2,
    materials: {
      [ItemId.BeamLauncherSchematic1]: 5,
    },
  },
  [ItemId.BeamLauncherSchematic3]: {
    product: ItemId.BeamLauncherSchematic3,
    materials: {
      [ItemId.BeamLauncherSchematic2]: 5,
    },
  },
  [ItemId.BeamLauncherSchematic4]: {
    product: ItemId.BeamLauncherSchematic4,
    materials: {
      [ItemId.BeamLauncherSchematic3]: 5,
    },
  },
  [ItemId.DroneLauncherSchematic2]: {
    product: ItemId.DroneLauncherSchematic2,
    materials: {
      [ItemId.DroneLauncherSchematic1]: 5,
    },
  },
  [ItemId.DroneLauncherSchematic3]: {
    product: ItemId.DroneLauncherSchematic3,
    materials: {
      [ItemId.DroneLauncherSchematic2]: 5,
    },
  },
  [ItemId.DroneLauncherSchematic4]: {
    product: ItemId.DroneLauncherSchematic4,
    materials: {
      [ItemId.DroneLauncherSchematic3]: 5,
    },
  },
  [ItemId.ExcaliburSchematic1]: {
    product: ItemId.ExcaliburSchematic1,
    materials: {
      [ItemId.ExcaliburSchematic]: 5,
    },
  },
  [ItemId.ExcaliburSchematic2]: {
    product: ItemId.ExcaliburSchematic2,
    materials: {
      [ItemId.ExcaliburSchematic1]: 5,
    },
  },
  [ItemId.ExcaliburSchematic3]: {
    product: ItemId.ExcaliburSchematic3,
    materials: {
      [ItemId.ExcaliburSchematic2]: 5,
    },
  },
  [ItemId.ExcaliburSchematic4]: {
    product: ItemId.ExcaliburSchematic4,
    materials: {
      [ItemId.ExcaliburSchematic3]: 5,
    },
  },
  [ItemId.TerraBladeSchematic1]: {
    product: ItemId.TerraBladeSchematic1,
    materials: {
      [ItemId.TerraBladeSchematic]: 5,
    },
  },
  [ItemId.TerraBladeSchematic2]: {
    product: ItemId.TerraBladeSchematic2,
    materials: {
      [ItemId.TerraBladeSchematic1]: 5,
    },
  },
  [ItemId.TerraBladeSchematic3]: {
    product: ItemId.TerraBladeSchematic3,
    materials: {
      [ItemId.TerraBladeSchematic2]: 5,
    },
  },
  [ItemId.TerraBladeSchematic4]: {
    product: ItemId.TerraBladeSchematic4,
    materials: {
      [ItemId.TerraBladeSchematic3]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic1]: {
    product: ItemId.VortexBeaterSchematic1,
    materials: {
      [ItemId.VortexBeaterSchematic]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic2]: {
    product: ItemId.VortexBeaterSchematic2,
    materials: {
      [ItemId.VortexBeaterSchematic1]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic3]: {
    product: ItemId.VortexBeaterSchematic3,
    materials: {
      [ItemId.VortexBeaterSchematic2]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic4]: {
    product: ItemId.VortexBeaterSchematic4,
    materials: {
      [ItemId.VortexBeaterSchematic3]: 5,
    },
  },
  [ItemId.NightglowSchematic1]: {
    product: ItemId.NightglowSchematic1,
    materials: {
      [ItemId.NightglowSchematic]: 5,
    },
  },
  [ItemId.NightglowSchematic2]: {
    product: ItemId.NightglowSchematic2,
    materials: {
      [ItemId.NightglowSchematic1]: 5,
    },
  },
  [ItemId.NightglowSchematic3]: {
    product: ItemId.NightglowSchematic3,
    materials: {
      [ItemId.NightglowSchematic2]: 5,
    },
  },
  [ItemId.NightglowSchematic4]: {
    product: ItemId.NightglowSchematic4,
    materials: {
      [ItemId.NightglowSchematic3]: 5,
    },
  },
  [ItemId.TerraprismaSchematic1]: {
    product: ItemId.TerraprismaSchematic1,
    materials: {
      [ItemId.TerraprismaSchematic]: 5,
    },
  },
  [ItemId.TerraprismaSchematic2]: {
    product: ItemId.TerraprismaSchematic2,
    materials: {
      [ItemId.TerraprismaSchematic1]: 5,
    },
  },
  [ItemId.TerraprismaSchematic3]: {
    product: ItemId.TerraprismaSchematic3,
    materials: {
      [ItemId.TerraprismaSchematic2]: 5,
    },
  },
  [ItemId.TerraprismaSchematic4]: {
    product: ItemId.TerraprismaSchematic4,
    materials: {
      [ItemId.TerraprismaSchematic3]: 5,
    },
  },
  [ItemId.ClothOutfitSchematic2]: {
    product: ItemId.ClothOutfitSchematic2,
    materials: {
      [ItemId.ClothOutfitSchematic1]: 5,
    },
  },
  [ItemId.ClothOutfitSchematic3]: {
    product: ItemId.ClothOutfitSchematic3,
    materials: {
      [ItemId.ClothOutfitSchematic2]: 5,
    },
  },
  [ItemId.ClothOutfitSchematic4]: {
    product: ItemId.ClothOutfitSchematic4,
    materials: {
      [ItemId.ClothOutfitSchematic3]: 5,
    },
  },
  [ItemId.TropicalOutfitSchematic2]: {
    product: ItemId.TropicalOutfitSchematic2,
    materials: {
      [ItemId.TropicalOutfitSchematic1]: 5,
    },
  },
  [ItemId.TropicalOutfitSchematic3]: {
    product: ItemId.TropicalOutfitSchematic3,
    materials: {
      [ItemId.TropicalOutfitSchematic2]: 5,
    },
  },
  [ItemId.TropicalOutfitSchematic4]: {
    product: ItemId.TropicalOutfitSchematic4,
    materials: {
      [ItemId.TropicalOutfitSchematic3]: 5,
    },
  },
  [ItemId.TundraOutfitSchematic2]: {
    product: ItemId.TundraOutfitSchematic2,
    materials: {
      [ItemId.TundraOutfitSchematic1]: 5,
    },
  },
  [ItemId.TundraOutfitSchematic3]: {
    product: ItemId.TundraOutfitSchematic3,
    materials: {
      [ItemId.TundraOutfitSchematic2]: 5,
    },
  },
  [ItemId.TundraOutfitSchematic4]: {
    product: ItemId.TundraOutfitSchematic4,
    materials: {
      [ItemId.TundraOutfitSchematic3]: 5,
    },
  },
  [ItemId.PeltArmorSchematic2]: {
    product: ItemId.PeltArmorSchematic2,
    materials: {
      [ItemId.PeltArmorSchematic1]: 5,
    },
  },
  [ItemId.PeltArmorSchematic3]: {
    product: ItemId.PeltArmorSchematic3,
    materials: {
      [ItemId.PeltArmorSchematic2]: 5,
    },
  },
  [ItemId.PeltArmorSchematic4]: {
    product: ItemId.PeltArmorSchematic4,
    materials: {
      [ItemId.PeltArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantPeltArmorSchematic2]: {
    product: ItemId.HeatResistantPeltArmorSchematic2,
    materials: {
      [ItemId.HeatResistantPeltArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantPeltArmorSchematic3]: {
    product: ItemId.HeatResistantPeltArmorSchematic3,
    materials: {
      [ItemId.HeatResistantPeltArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantPeltArmorSchematic4]: {
    product: ItemId.HeatResistantPeltArmorSchematic4,
    materials: {
      [ItemId.HeatResistantPeltArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantPeltArmorSchematic2]: {
    product: ItemId.ColdResistantPeltArmorSchematic2,
    materials: {
      [ItemId.ColdResistantPeltArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantPeltArmorSchematic3]: {
    product: ItemId.ColdResistantPeltArmorSchematic3,
    materials: {
      [ItemId.ColdResistantPeltArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantPeltArmorSchematic4]: {
    product: ItemId.ColdResistantPeltArmorSchematic4,
    materials: {
      [ItemId.ColdResistantPeltArmorSchematic3]: 5,
    },
  },
  [ItemId.MetalArmorSchematic2]: {
    product: ItemId.MetalArmorSchematic2,
    materials: {
      [ItemId.MetalArmorSchematic1]: 5,
    },
  },
  [ItemId.MetalArmorSchematic3]: {
    product: ItemId.MetalArmorSchematic3,
    materials: {
      [ItemId.MetalArmorSchematic2]: 5,
    },
  },
  [ItemId.MetalArmorSchematic4]: {
    product: ItemId.MetalArmorSchematic4,
    materials: {
      [ItemId.MetalArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantMetalArmorSchematic2]: {
    product: ItemId.HeatResistantMetalArmorSchematic2,
    materials: {
      [ItemId.HeatResistantMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantMetalArmorSchematic3]: {
    product: ItemId.HeatResistantMetalArmorSchematic3,
    materials: {
      [ItemId.HeatResistantMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantMetalArmorSchematic4]: {
    product: ItemId.HeatResistantMetalArmorSchematic4,
    materials: {
      [ItemId.HeatResistantMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantMetalArmorSchematic2]: {
    product: ItemId.ColdResistantMetalArmorSchematic2,
    materials: {
      [ItemId.ColdResistantMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantMetalArmorSchematic3]: {
    product: ItemId.ColdResistantMetalArmorSchematic3,
    materials: {
      [ItemId.ColdResistantMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantMetalArmorSchematic4]: {
    product: ItemId.ColdResistantMetalArmorSchematic4,
    materials: {
      [ItemId.ColdResistantMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.RefinedMetalArmorSchematic2]: {
    product: ItemId.RefinedMetalArmorSchematic2,
    materials: {
      [ItemId.RefinedMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.RefinedMetalArmorSchematic3]: {
    product: ItemId.RefinedMetalArmorSchematic3,
    materials: {
      [ItemId.RefinedMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.RefinedMetalArmorSchematic4]: {
    product: ItemId.RefinedMetalArmorSchematic4,
    materials: {
      [ItemId.RefinedMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmorSchematic2]: {
    product: ItemId.HeatResistantRefinedMetalArmorSchematic2,
    materials: {
      [ItemId.HeatResistantRefinedMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmorSchematic3]: {
    product: ItemId.HeatResistantRefinedMetalArmorSchematic3,
    materials: {
      [ItemId.HeatResistantRefinedMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmorSchematic4]: {
    product: ItemId.HeatResistantRefinedMetalArmorSchematic4,
    materials: {
      [ItemId.HeatResistantRefinedMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmorSchematic2]: {
    product: ItemId.ColdResistantRefinedMetalArmorSchematic2,
    materials: {
      [ItemId.ColdResistantRefinedMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmorSchematic3]: {
    product: ItemId.ColdResistantRefinedMetalArmorSchematic3,
    materials: {
      [ItemId.ColdResistantRefinedMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmorSchematic4]: {
    product: ItemId.ColdResistantRefinedMetalArmorSchematic4,
    materials: {
      [ItemId.ColdResistantRefinedMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.PalMetalArmorSchematic2]: {
    product: ItemId.PalMetalArmorSchematic2,
    materials: {
      [ItemId.PalMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.PalMetalArmorSchematic3]: {
    product: ItemId.PalMetalArmorSchematic3,
    materials: {
      [ItemId.PalMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.PalMetalArmorSchematic4]: {
    product: ItemId.PalMetalArmorSchematic4,
    materials: {
      [ItemId.PalMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantPalMetalArmorSchematic2]: {
    product: ItemId.HeatResistantPalMetalArmorSchematic2,
    materials: {
      [ItemId.HeatResistantPalMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantPalMetalArmorSchematic3]: {
    product: ItemId.HeatResistantPalMetalArmorSchematic3,
    materials: {
      [ItemId.HeatResistantPalMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantPalMetalArmorSchematic4]: {
    product: ItemId.HeatResistantPalMetalArmorSchematic4,
    materials: {
      [ItemId.HeatResistantPalMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmorSchematic2]: {
    product: ItemId.ColdResistantPalMetalArmorSchematic2,
    materials: {
      [ItemId.ColdResistantPalMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmorSchematic3]: {
    product: ItemId.ColdResistantPalMetalArmorSchematic3,
    materials: {
      [ItemId.ColdResistantPalMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmorSchematic4]: {
    product: ItemId.ColdResistantPalMetalArmorSchematic4,
    materials: {
      [ItemId.ColdResistantPalMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.PlasteelArmorSchematic2]: {
    product: ItemId.PlasteelArmorSchematic2,
    materials: {
      [ItemId.PlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.PlasteelArmorSchematic3]: {
    product: ItemId.PlasteelArmorSchematic3,
    materials: {
      [ItemId.PlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.PlasteelArmorSchematic4]: {
    product: ItemId.PlasteelArmorSchematic4,
    materials: {
      [ItemId.PlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantPlasteelArmorSchematic2]: {
    product: ItemId.HeatResistantPlasteelArmorSchematic2,
    materials: {
      [ItemId.HeatResistantPlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantPlasteelArmorSchematic3]: {
    product: ItemId.HeatResistantPlasteelArmorSchematic3,
    materials: {
      [ItemId.HeatResistantPlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantPlasteelArmorSchematic4]: {
    product: ItemId.HeatResistantPlasteelArmorSchematic4,
    materials: {
      [ItemId.HeatResistantPlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantPlasteelArmorSchematic2]: {
    product: ItemId.ColdResistantPlasteelArmorSchematic2,
    materials: {
      [ItemId.ColdResistantPlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantPlasteelArmorSchematic3]: {
    product: ItemId.ColdResistantPlasteelArmorSchematic3,
    materials: {
      [ItemId.ColdResistantPlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantPlasteelArmorSchematic4]: {
    product: ItemId.ColdResistantPlasteelArmorSchematic4,
    materials: {
      [ItemId.ColdResistantPlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.LightweightPlasteelArmorSchematic2]: {
    product: ItemId.LightweightPlasteelArmorSchematic2,
    materials: {
      [ItemId.LightweightPlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.LightweightPlasteelArmorSchematic3]: {
    product: ItemId.LightweightPlasteelArmorSchematic3,
    materials: {
      [ItemId.LightweightPlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.LightweightPlasteelArmorSchematic4]: {
    product: ItemId.LightweightPlasteelArmorSchematic4,
    materials: {
      [ItemId.LightweightPlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.HexoliteArmorSchematic2]: {
    product: ItemId.HexoliteArmorSchematic2,
    materials: {
      [ItemId.HexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.HexoliteArmorSchematic3]: {
    product: ItemId.HexoliteArmorSchematic3,
    materials: {
      [ItemId.HexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.HexoliteArmorSchematic4]: {
    product: ItemId.HexoliteArmorSchematic4,
    materials: {
      [ItemId.HexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantHexoliteArmorSchematic2]: {
    product: ItemId.HeatResistantHexoliteArmorSchematic2,
    materials: {
      [ItemId.HeatResistantHexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantHexoliteArmorSchematic3]: {
    product: ItemId.HeatResistantHexoliteArmorSchematic3,
    materials: {
      [ItemId.HeatResistantHexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantHexoliteArmorSchematic4]: {
    product: ItemId.HeatResistantHexoliteArmorSchematic4,
    materials: {
      [ItemId.HeatResistantHexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantHexoliteArmorSchematic2]: {
    product: ItemId.ColdResistantHexoliteArmorSchematic2,
    materials: {
      [ItemId.ColdResistantHexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantHexoliteArmorSchematic3]: {
    product: ItemId.ColdResistantHexoliteArmorSchematic3,
    materials: {
      [ItemId.ColdResistantHexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantHexoliteArmorSchematic4]: {
    product: ItemId.ColdResistantHexoliteArmorSchematic4,
    materials: {
      [ItemId.ColdResistantHexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.LightweightHexoliteArmorSchematic2]: {
    product: ItemId.LightweightHexoliteArmorSchematic2,
    materials: {
      [ItemId.LightweightHexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.LightweightHexoliteArmorSchematic3]: {
    product: ItemId.LightweightHexoliteArmorSchematic3,
    materials: {
      [ItemId.LightweightHexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.LightweightHexoliteArmorSchematic4]: {
    product: ItemId.LightweightHexoliteArmorSchematic4,
    materials: {
      [ItemId.LightweightHexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.AncientArmorSchematic2]: {
    product: ItemId.AncientArmorSchematic2,
    materials: {
      [ItemId.AncientArmorSchematic1]: 5,
    },
  },
  [ItemId.AncientArmorSchematic3]: {
    product: ItemId.AncientArmorSchematic3,
    materials: {
      [ItemId.AncientArmorSchematic2]: 5,
    },
  },
  [ItemId.AncientArmorSchematic4]: {
    product: ItemId.AncientArmorSchematic4,
    materials: {
      [ItemId.AncientArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantAncientArmorSchematic2]: {
    product: ItemId.HeatResistantAncientArmorSchematic2,
    materials: {
      [ItemId.HeatResistantAncientArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantAncientArmorSchematic3]: {
    product: ItemId.HeatResistantAncientArmorSchematic3,
    materials: {
      [ItemId.HeatResistantAncientArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantAncientArmorSchematic4]: {
    product: ItemId.HeatResistantAncientArmorSchematic4,
    materials: {
      [ItemId.HeatResistantAncientArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantAncientArmorSchematic2]: {
    product: ItemId.ColdResistantAncientArmorSchematic2,
    materials: {
      [ItemId.ColdResistantAncientArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantAncientArmorSchematic3]: {
    product: ItemId.ColdResistantAncientArmorSchematic3,
    materials: {
      [ItemId.ColdResistantAncientArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantAncientArmorSchematic4]: {
    product: ItemId.ColdResistantAncientArmorSchematic4,
    materials: {
      [ItemId.ColdResistantAncientArmorSchematic3]: 5,
    },
  },
  [ItemId.LightweightAncientArmorSchematic2]: {
    product: ItemId.LightweightAncientArmorSchematic2,
    materials: {
      [ItemId.LightweightAncientArmorSchematic1]: 5,
    },
  },
  [ItemId.LightweightAncientArmorSchematic3]: {
    product: ItemId.LightweightAncientArmorSchematic3,
    materials: {
      [ItemId.LightweightAncientArmorSchematic2]: 5,
    },
  },
  [ItemId.LightweightAncientArmorSchematic4]: {
    product: ItemId.LightweightAncientArmorSchematic4,
    materials: {
      [ItemId.LightweightAncientArmorSchematic3]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic1]: {
    product: ItemId.HallowedPlateMailSchematic1,
    materials: {
      [ItemId.HallowedPlateMailSchematic]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic2]: {
    product: ItemId.HallowedPlateMailSchematic2,
    materials: {
      [ItemId.HallowedPlateMailSchematic1]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic3]: {
    product: ItemId.HallowedPlateMailSchematic3,
    materials: {
      [ItemId.HallowedPlateMailSchematic2]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic4]: {
    product: ItemId.HallowedPlateMailSchematic4,
    materials: {
      [ItemId.HallowedPlateMailSchematic3]: 5,
    },
  },
  [ItemId.FeatheredHairBandSchematic2]: {
    product: ItemId.FeatheredHairBandSchematic2,
    materials: {
      [ItemId.FeatheredHairBandSchematic1]: 5,
    },
  },
  [ItemId.FeatheredHairBandSchematic3]: {
    product: ItemId.FeatheredHairBandSchematic3,
    materials: {
      [ItemId.FeatheredHairBandSchematic2]: 5,
    },
  },
  [ItemId.FeatheredHairBandSchematic4]: {
    product: ItemId.FeatheredHairBandSchematic4,
    materials: {
      [ItemId.FeatheredHairBandSchematic3]: 5,
    },
  },
  [ItemId.MetalHelmSchematic2]: {
    product: ItemId.MetalHelmSchematic2,
    materials: {
      [ItemId.MetalHelmSchematic1]: 5,
    },
  },
  [ItemId.MetalHelmSchematic3]: {
    product: ItemId.MetalHelmSchematic3,
    materials: {
      [ItemId.MetalHelmSchematic2]: 5,
    },
  },
  [ItemId.MetalHelmSchematic4]: {
    product: ItemId.MetalHelmSchematic4,
    materials: {
      [ItemId.MetalHelmSchematic3]: 5,
    },
  },
  [ItemId.RefinedMetalHelmSchematic2]: {
    product: ItemId.RefinedMetalHelmSchematic2,
    materials: {
      [ItemId.RefinedMetalHelmSchematic1]: 5,
    },
  },
  [ItemId.RefinedMetalHelmSchematic3]: {
    product: ItemId.RefinedMetalHelmSchematic3,
    materials: {
      [ItemId.RefinedMetalHelmSchematic2]: 5,
    },
  },
  [ItemId.RefinedMetalHelmSchematic4]: {
    product: ItemId.RefinedMetalHelmSchematic4,
    materials: {
      [ItemId.RefinedMetalHelmSchematic3]: 5,
    },
  },
  [ItemId.PalMetalHelmSchematic2]: {
    product: ItemId.PalMetalHelmSchematic2,
    materials: {
      [ItemId.PalMetalHelmSchematic1]: 5,
    },
  },
  [ItemId.PalMetalHelmSchematic3]: {
    product: ItemId.PalMetalHelmSchematic3,
    materials: {
      [ItemId.PalMetalHelmSchematic2]: 5,
    },
  },
  [ItemId.PalMetalHelmSchematic4]: {
    product: ItemId.PalMetalHelmSchematic4,
    materials: {
      [ItemId.PalMetalHelmSchematic3]: 5,
    },
  },
  [ItemId.PlasteelHelmetSchematic2]: {
    product: ItemId.PlasteelHelmetSchematic2,
    materials: {
      [ItemId.PlasteelHelmetSchematic1]: 5,
    },
  },
  [ItemId.PlasteelHelmetSchematic3]: {
    product: ItemId.PlasteelHelmetSchematic3,
    materials: {
      [ItemId.PlasteelHelmetSchematic2]: 5,
    },
  },
  [ItemId.PlasteelHelmetSchematic4]: {
    product: ItemId.PlasteelHelmetSchematic4,
    materials: {
      [ItemId.PlasteelHelmetSchematic3]: 5,
    },
  },
  [ItemId.HexoliteHelmetSchematic2]: {
    product: ItemId.HexoliteHelmetSchematic2,
    materials: {
      [ItemId.HexoliteHelmetSchematic1]: 5,
    },
  },
  [ItemId.HexoliteHelmetSchematic3]: {
    product: ItemId.HexoliteHelmetSchematic3,
    materials: {
      [ItemId.HexoliteHelmetSchematic2]: 5,
    },
  },
  [ItemId.HexoliteHelmetSchematic4]: {
    product: ItemId.HexoliteHelmetSchematic4,
    materials: {
      [ItemId.HexoliteHelmetSchematic3]: 5,
    },
  },
  [ItemId.AncientHelmSchematic2]: {
    product: ItemId.AncientHelmSchematic2,
    materials: {
      [ItemId.AncientHelmSchematic1]: 5,
    },
  },
  [ItemId.AncientHelmSchematic3]: {
    product: ItemId.AncientHelmSchematic3,
    materials: {
      [ItemId.AncientHelmSchematic2]: 5,
    },
  },
  [ItemId.AncientHelmSchematic4]: {
    product: ItemId.AncientHelmSchematic4,
    materials: {
      [ItemId.AncientHelmSchematic3]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic1]: {
    product: ItemId.HallowedMaskSchematic1,
    materials: {
      [ItemId.HallowedMaskSchematic]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic2]: {
    product: ItemId.HallowedMaskSchematic2,
    materials: {
      [ItemId.HallowedMaskSchematic1]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic3]: {
    product: ItemId.HallowedMaskSchematic3,
    materials: {
      [ItemId.HallowedMaskSchematic2]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic4]: {
    product: ItemId.HallowedMaskSchematic4,
    materials: {
      [ItemId.HallowedMaskSchematic3]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic1]: {
    product: ItemId.HallowedHelmetSchematic1,
    materials: {
      [ItemId.HallowedHelmetSchematic]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic2]: {
    product: ItemId.HallowedHelmetSchematic2,
    materials: {
      [ItemId.HallowedHelmetSchematic1]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic3]: {
    product: ItemId.HallowedHelmetSchematic3,
    materials: {
      [ItemId.HallowedHelmetSchematic2]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic4]: {
    product: ItemId.HallowedHelmetSchematic4,
    materials: {
      [ItemId.HallowedHelmetSchematic3]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic1]: {
    product: ItemId.HallowedHeadgearSchematic1,
    materials: {
      [ItemId.HallowedHeadgearSchematic]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic2]: {
    product: ItemId.HallowedHeadgearSchematic2,
    materials: {
      [ItemId.HallowedHeadgearSchematic1]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic3]: {
    product: ItemId.HallowedHeadgearSchematic3,
    materials: {
      [ItemId.HallowedHeadgearSchematic2]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic4]: {
    product: ItemId.HallowedHeadgearSchematic4,
    materials: {
      [ItemId.HallowedHeadgearSchematic3]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic1]: {
    product: ItemId.HallowedHoodSchematic1,
    materials: {
      [ItemId.HallowedHoodSchematic]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic2]: {
    product: ItemId.HallowedHoodSchematic2,
    materials: {
      [ItemId.HallowedHoodSchematic1]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic3]: {
    product: ItemId.HallowedHoodSchematic3,
    materials: {
      [ItemId.HallowedHoodSchematic2]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic4]: {
    product: ItemId.HallowedHoodSchematic4,
    materials: {
      [ItemId.HallowedHoodSchematic3]: 5,
    },
  },
  [ItemId.BellanoirSSlab]: {
    product: ItemId.BellanoirSSlab,
    materials: {
      [ItemId.BellanoirSSlabFragment]: 4,
    },
  },
  [ItemId.BellanoirLiberoSSlab]: {
    product: ItemId.BellanoirLiberoSSlab,
    materials: {
      [ItemId.BellanoirLiberoSSlabFragment]: 4,
    },
  },
  [ItemId.BlazamutRyuSlab]: {
    product: ItemId.BlazamutRyuSlab,
    materials: {
      [ItemId.BlazamutRyuSlabFragment]: 4,
    },
  },
  [ItemId.XenolordSlab]: {
    product: ItemId.XenolordSlab,
    materials: {
      [ItemId.XenolordSlabFragment]: 4,
    },
  },
  [ItemId.CelestialSigil]: {
    product: ItemId.CelestialSigil,
    materials: {
      [ItemId.HallowedBar]: 100,
    },
  },
  [ItemId.HartalisSlab]: {
    product: ItemId.HartalisSlab,
    materials: {
      [ItemId.HartalisSlabFragment]: 4,
    },
  },
  [ItemId.BellanoirLiberoUltraSlab]: {
    product: ItemId.BellanoirLiberoUltraSlab,
    materials: {
      [ItemId.BellanoirLiberoUltraSlabFragment]: 4,
    },
  },
  [ItemId.BlazamutRyuUltraSlab]: {
    product: ItemId.BlazamutRyuUltraSlab,
    materials: {
      [ItemId.BlazamutRyuUltraSlabFragment]: 4,
    },
  },
  [ItemId.XenolordUltraSlab]: {
    product: ItemId.XenolordUltraSlab,
    materials: {
      [ItemId.XenolordUltraSlabFragment]: 4,
    },
  },
  [ItemId.HartalisUltraSlab]: {
    product: ItemId.HartalisUltraSlab,
    materials: {
      [ItemId.HartalisUltraSlabFragment]: 4,
    },
  },
  [ItemId.PowerfulFishingMagnet]: {
    product: ItemId.PowerfulFishingMagnet,
    materials: {
      [ItemId.Hexolite]: 1,
      [ItemId.CryogenicCoolant]: 1,
      [ItemId.BioBattery]: 1,
    },
  },
  [ItemId.SunreachRapidFireAmmo]: {
    product: ItemId.SunreachRapidFireAmmo,
    materials: {
      [ItemId.SoraliteIngot]: 1,
      [ItemId.Gunpowder1]: 1,
    },
  },
  [ItemId.SunreachSingleShotAmmo]: {
    product: ItemId.SunreachSingleShotAmmo,
    materials: {
      [ItemId.SoraliteIngot]: 2,
    },
  },
  [ItemId.HipLantern]: {
    product: ItemId.HipLantern,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Wood]: 10,
      [ItemId.FlameOrgan]: 10,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.EnhancedHipLantern]: {
    product: ItemId.EnhancedHipLantern,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Wood]: 30,
      [ItemId.FlameOrgan]: 30,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.SmallFeedBag]: {
    product: ItemId.SmallFeedBag,
    materials: {
      [ItemId.Wood]: 5,
      [ItemId.Fiber]: 10,
      [ItemId.Leather]: 3,
    },
  },
  [ItemId.AverageFeedBag]: {
    product: ItemId.AverageFeedBag,
    materials: {
      [ItemId.Wood]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.Leather]: 10,
    },
  },
  [ItemId.LargeFeedBag]: {
    product: ItemId.LargeFeedBag,
    materials: {
      [ItemId.Wood]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.Leather]: 20,
    },
  },
  [ItemId.HugeFeedBag]: {
    product: ItemId.HugeFeedBag,
    materials: {
      [ItemId.Hardwood]: 30,
      [ItemId.Fiber]: 90,
      [ItemId.Leather]: 35,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.GiantFeedBag]: {
    product: ItemId.GiantFeedBag,
    materials: {
      [ItemId.Hardwood]: 50,
      [ItemId.Fiber]: 200,
      [ItemId.Leather]: 50,
      [ItemId.CarbonFiber]: 20,
    },
  },
  [ItemId.LockpickingToolV1]: {
    product: ItemId.LockpickingToolV1,
    materials: {
      [ItemId.Ingot]: 10,
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Nail]: 5,
    },
  },
  [ItemId.LockpickingToolV2]: {
    product: ItemId.LockpickingToolV2,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.Nail]: 10,
    },
  },
  [ItemId.LockpickingToolV3]: {
    product: ItemId.LockpickingToolV3,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Nail]: 20,
    },
  },
  [ItemId.RushoarSaddle]: {
    product: ItemId.RushoarSaddle,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.Stone]: 10,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.FoxparksHarness]: {
    product: ItemId.FoxparksHarness,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.FlameOrgan]: 5,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.FoxparksCrystSHarness]: {
    product: ItemId.FoxparksCrystSHarness,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.IceOrgan]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.MelpacaSaddle]: {
    product: ItemId.MelpacaSaddle,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.Wool]: 5,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.CelaraySGloves]: {
    product: ItemId.CelaraySGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.AquaticPalFluids]: 3,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.CelarayLuxSGloves]: {
    product: ItemId.CelarayLuxSGloves,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.ElectricOrgan]: 5,
      [ItemId.PaldiumFragment]: 6,
    },
  },
  [ItemId.JolthogSGloves]: {
    product: ItemId.JolthogSGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.ElectricOrgan]: 5,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.JolthogCrystSGloves]: {
    product: ItemId.JolthogCrystSGloves,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.IceOrgan]: 6,
      [ItemId.PaldiumFragment]: 6,
    },
  },
  [ItemId.DaedreamSNecklace]: {
    product: ItemId.DaedreamSNecklace,
    materials: {
      [ItemId.Leather]: 5,
      [ItemId.Fiber]: 10,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.DirehowlSSaddledHarness]: {
    product: ItemId.DirehowlSSaddledHarness,
    materials: {
      [ItemId.Leather]: 10,
      ["wood"]: 20,
      [ItemId.Fiber]: 15,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.KillamariSGloves]: {
    product: ItemId.KillamariSGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.VenomGland]: 5,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.KillamariPrimoSGloves]: {
    product: ItemId.KillamariPrimoSGloves,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.AquaticPalFluids]: 4,
      [ItemId.PaldiumFragment]: 12,
    },
  },
  [ItemId.ChilletSaddle]: {
    product: ItemId.ChilletSaddle,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 20,
      [ItemId.Cloth]: 5,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ChilletIgnisSaddle]: {
    product: ItemId.ChilletIgnisSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.LifmunkSSubmachineGun]: {
    product: ItemId.LifmunkSSubmachineGun,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Stone]: 10,
      [ItemId.Wood]: 20,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.TanzeeSAssaultRifle]: {
    product: ItemId.TanzeeSAssaultRifle,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Stone]: 15,
      [ItemId.Wood]: 15,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.TanzeeIgnisSAssaultRifle]: {
    product: ItemId.TanzeeIgnisSAssaultRifle,
    materials: {
      [ItemId.Ingot]: 6,
      [ItemId.Stone]: 18,
      [ItemId.Wood]: 18,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.EikthyrdeerSaddle]: {
    product: ItemId.EikthyrdeerSaddle,
    materials: {
      [ItemId.Leather]: 5,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 10,
      [ItemId.Horn]: 3,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.EikthyrdeerTerraSaddle]: {
    product: ItemId.EikthyrdeerTerraSaddle,
    materials: {
      [ItemId.Leather]: 6,
      [ItemId.Fiber]: 24,
      [ItemId.Ingot]: 12,
      [ItemId.Horn]: 3,
      [ItemId.PaldiumFragment]: 18,
    },
  },
  [ItemId.UnivoltSaddle]: {
    product: ItemId.UnivoltSaddle,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Ingot]: 5,
      [ItemId.ElectricOrgan]: 10,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.UnivoltCrystSaddle]: {
    product: ItemId.UnivoltCrystSaddle,
    materials: {
      [ItemId.Leather]: 12,
      [ItemId.CoralumIngot]: 5,
      [ItemId.IceOrgan]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ArsoxSaddle]: {
    product: ItemId.ArsoxSaddle,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 25,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.NitewingSaddle]: {
    product: ItemId.NitewingSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 15,
      [ItemId.Fiber]: 20,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.SurfentSaddle]: {
    product: ItemId.SurfentSaddle,
    materials: {
      [ItemId.Leather]: 5,
      [ItemId.AquaticPalFluids]: 5,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.SurfentTerraSaddle]: {
    product: ItemId.SurfentTerraSaddle,
    materials: {
      [ItemId.Leather]: 6,
      [ItemId.Ingot]: 6,
      [ItemId.PaldiumFragment]: 12,
    },
  },
  [ItemId.PengulletRocketLauncher]: {
    product: ItemId.PengulletRocketLauncher,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Stone]: 20,
      [ItemId.WoodenBoard]: 3,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.PengulletLuxSRocketLauncher]: {
    product: ItemId.PengulletLuxSRocketLauncher,
    materials: {
      [ItemId.Ingot]: 24,
      [ItemId.Stone]: 24,
      [ItemId.WoodenBoard]: 3,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.FlopieSNecklace]: {
    product: ItemId.FlopieSNecklace,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 5,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.TocotocoSGloves]: {
    product: ItemId.TocotocoSGloves,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 15,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.DigtoiseSHeadband]: {
    product: ItemId.DigtoiseSHeadband,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 10,
      [ItemId.Stone]: 50,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.HangyuSGloves]: {
    product: ItemId.HangyuSGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.Leather]: 3,
      [ItemId.Fiber]: 10,
      [ItemId.Ingot]: 3,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.HangyuCrystSGlove]: {
    product: ItemId.HangyuCrystSGlove,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.Leather]: 3,
      [ItemId.Fiber]: 12,
      [ItemId.Ingot]: 3,
      [ItemId.PaldiumFragment]: 12,
    },
  },
  [ItemId.GrintaleSaddle]: {
    product: ItemId.GrintaleSaddle,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.ElphidranSaddle]: {
    product: ItemId.ElphidranSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ElphidranAquaSaddle]: {
    product: ItemId.ElphidranAquaSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 24,
      [ItemId.Ingot]: 18,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.TarantrissSaddle]: {
    product: ItemId.TarantrissSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 50,
      [ItemId.VenomGland]: 30,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.VanwyrmSaddle]: {
    product: ItemId.VanwyrmSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.FlameOrgan]: 10,
      [ItemId.Ingot]: 15,
      [ItemId.Fiber]: 30,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.VanwyrmCrystSaddle]: {
    product: ItemId.VanwyrmCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.IceOrgan]: 12,
      [ItemId.Ingot]: 18,
      [ItemId.Fiber]: 36,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.SweepaSaddle]: {
    product: ItemId.SweepaSaddle,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.Cloth]: 8,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.DazziSNecklace]: {
    product: ItemId.DazziSNecklace,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 15,
      [ItemId.Ingot]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.DazziNoctSNecklace]: {
    product: ItemId.DazziNoctSNecklace,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.DarkFragment]: 10,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.KingpacaSaddle]: {
    product: ItemId.KingpacaSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 15,
      [ItemId.Wool]: 30,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.KingpacaCrystSaddle]: {
    product: ItemId.KingpacaCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 24,
      [ItemId.Ingot]: 18,
      [ItemId.Wool]: 36,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.GaleclawSGloves]: {
    product: ItemId.GaleclawSGloves,
    materials: {
      [ItemId.Cloth]: 20,
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.AzurobeSaddle]: {
    product: ItemId.AzurobeSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Fiber]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.AquaticPalFluids]: 10,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.AzurobeCrystSaddle]: {
    product: ItemId.AzurobeCrystSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 36,
      [ItemId.Cloth]: 12,
      [ItemId.IceOrgan]: 12,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.DinossomSaddle]: {
    product: ItemId.DinossomSaddle,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.DinossomLuxSaddle]: {
    product: ItemId.DinossomLuxSaddle,
    materials: {
      [ItemId.Leather]: 18,
      [ItemId.Fiber]: 36,
      [ItemId.Ingot]: 12,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.HelzephyrSaddle]: {
    product: ItemId.HelzephyrSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.HelzephyrLuxSaddle]: {
    product: ItemId.HelzephyrLuxSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.RefinedIngot]: 10,
      [ItemId.ElectricOrgan]: 30,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.FenglopeSaddle]: {
    product: ItemId.FenglopeSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 20,
      [ItemId.Cloth]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.FenglopeLuxSaddle]: {
    product: ItemId.FenglopeLuxSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 30,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.PaldiumFragment]: 45,
    },
  },
  [ItemId.PolapupSaddle]: {
    product: ItemId.PolapupSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 60,
      [ItemId.Ingot]: 30,
      [ItemId.IceOrgan]: 6,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.HerbilSHarness]: {
    product: ItemId.HerbilSHarness,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 40,
      [ItemId.Ingot]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.DazemuSaddle]: {
    product: ItemId.DazemuSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.PyrinSaddle]: {
    product: ItemId.PyrinSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Fiber]: 30,
      [ItemId.FlameOrgan]: 20,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.PyrinNoctSaddle]: {
    product: ItemId.PyrinNoctSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 36,
      [ItemId.FlameOrgan]: 24,
      [ItemId.Ingot]: 18,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.MammorestSaddle]: {
    product: ItemId.MammorestSaddle,
    materials: {
      [ItemId.Leather]: 50,
      [ItemId.Fiber]: 70,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Wood]: 100,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.MammorestCrystSaddle]: {
    product: ItemId.MammorestCrystSaddle,
    materials: {
      [ItemId.Leather]: 60,
      [ItemId.Fiber]: 84,
      [ItemId.HighQualityPalOil]: 12,
      [ItemId.Wood]: 120,
      [ItemId.PaldiumFragment]: 72,
    },
  },
  [ItemId.BeakonSaddle]: {
    product: ItemId.BeakonSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.BeakonCrystSaddle]: {
    product: ItemId.BeakonCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Cloth]: 12,
      [ItemId.SoraliteIngot]: 24,
      [ItemId.IceOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.RayhoundSaddle]: {
    product: ItemId.RayhoundSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 40,
      [ItemId.Ingot]: 20,
      [ItemId.ElectricOrgan]: 15,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.RayhoundCrystSaddle]: {
    product: ItemId.RayhoundCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 48,
      [ItemId.Ingot]: 20,
      [ItemId.IceOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.GhanglerSaddle]: {
    product: ItemId.GhanglerSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.CryogenicCoolant]: 10,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.GhanglerIgnisSaddle]: {
    product: ItemId.GhanglerIgnisSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.RefinedIngot]: 20,
      [ItemId.FlameOrgan]: 12,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.MossandaSGrenadeLauncher]: {
    product: ItemId.MossandaSGrenadeLauncher,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.MossandaLuxSGrenadeLauncher]: {
    product: ItemId.MossandaLuxSGrenadeLauncher,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 24,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.ReindrixSaddle]: {
    product: ItemId.ReindrixSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.IceOrgan]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.BlazehowlSaddle]: {
    product: ItemId.BlazehowlSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Fiber]: 50,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.BlazehowlNoctSaddle]: {
    product: ItemId.BlazehowlNoctSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.Ingot]: 36,
      [ItemId.Fiber]: 60,
      [ItemId.FlameOrgan]: 24,
      [ItemId.PaldiumFragment]: 36,
    },
  },
  [ItemId.RagnahawkSaddle]: {
    product: ItemId.RagnahawkSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.BroncherrySaddle]: {
    product: ItemId.BroncherrySaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.BroncherryAquaSaddle]: {
    product: ItemId.BroncherryAquaSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 36,
      [ItemId.RefinedIngot]: 20,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.PalumbaSaddle]: {
    product: ItemId.PalumbaSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Cloth]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.BralohaSaddle]: {
    product: ItemId.BralohaSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.MoldronSaddle]: {
    product: ItemId.MoldronSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 20,
      [ItemId.RefinedIngot]: 15,
      [ItemId.FlameOrgan]: 5,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.MoldronCrystSaddle]: {
    product: ItemId.MoldronCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.HighQualityCloth]: 24,
      [ItemId.CoralumIngot]: 18,
      [ItemId.IceOrgan]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.MaraithSaddle]: {
    product: ItemId.MaraithSaddle,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 25,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.QuivernSaddle]: {
    product: ItemId.QuivernSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.RefinedIngot]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.CryogenicCoolant]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.QuivernBotanSaddle]: {
    product: ItemId.QuivernBotanSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.RefinedIngot]: 30,
      [ItemId.Cloth]: 20,
      [ItemId.CryogenicCoolant]: 10,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.AstegonSaddle]: {
    product: ItemId.AstegonSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.RefinedIngot]: 50,
      [ItemId.Ingot]: 50,
      [ItemId.CorrosiveSolvent]: 10,
      [ItemId.PaldiumFragment]: 55,
    },
  },
  [ItemId.ShroomerSaddle]: {
    product: ItemId.ShroomerSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Mushroom]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.ShroomerNoctSaddle]: {
    product: ItemId.ShroomerNoctSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.MysteriousMushroom]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.GrizzboltSMinigun]: {
    product: ItemId.GrizzboltSMinigun,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 20,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.XenogardSaddle]: {
    product: ItemId.XenogardSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.MeteoriteFragment]: 30,
      [ItemId.PaldiumFragment]: 50,
    },
  },
  [ItemId.YakumoSaddle]: {
    product: ItemId.YakumoSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 50,
      [ItemId.RefinedIngot]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.WhalaskaSaddle]: {
    product: ItemId.WhalaskaSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.RefinedIngot]: 20,
      [ItemId.CryogenicCoolant]: 10,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.WhalaskaIgnisSaddle]: {
    product: ItemId.WhalaskaIgnisSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Cloth]: 12,
      [ItemId.SoraliteIngot]: 20,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.ReptyroSaddle]: {
    product: ItemId.ReptyroSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.RefinedIngot]: 20,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ReptyroCrystSaddle]: {
    product: ItemId.ReptyroCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.RefinedIngot]: 24,
      [ItemId.IceOrgan]: 24,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.SuzakuSaddle]: {
    product: ItemId.SuzakuSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.RefinedIngot]: 25,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.SuzakuAquaSaddle]: {
    product: ItemId.SuzakuAquaSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.RefinedIngot]: 30,
      [ItemId.AquaticPalFluids]: 24,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.RelaxaurusMissileLauncher]: {
    product: ItemId.RelaxaurusMissileLauncher,
    materials: {
      [ItemId.RefinedIngot]: 100,
      [ItemId.Polymer]: 35,
      [ItemId.Ingot]: 100,
      [ItemId.PaldiumFragment]: 85,
    },
  },
  [ItemId.RelaxaurusLuxSMissileLauncher]: {
    product: ItemId.RelaxaurusLuxSMissileLauncher,
    materials: {
      [ItemId.RefinedIngot]: 120,
      [ItemId.Polymer]: 42,
      [ItemId.Ingot]: 120,
      [ItemId.PaldiumFragment]: 102,
    },
  },
  [ItemId.WumpoSaddle]: {
    product: ItemId.WumpoSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.IceOrgan]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.WumpoBotanSaddle]: {
    product: ItemId.WumpoBotanSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.BeautifulFlower]: 24,
      [ItemId.Fiber]: 60,
      [ItemId.RefinedIngot]: 12,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.ShadowbeakSaddle]: {
    product: ItemId.ShadowbeakSaddle,
    materials: {
      [ItemId.Leather]: 50,
      [ItemId.RefinedIngot]: 40,
      [ItemId.CorrosiveSolvent]: 15,
      [ItemId.PaldiumFragment]: 45,
    },
  },
  [ItemId.DualithSaddle]: {
    product: ItemId.DualithSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.DualithNoctSaddle]: {
    product: ItemId.DualithNoctSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.HighQualityCloth]: 24,
      [ItemId.SoraliteIngot]: 12,
      [ItemId.DarkFragment]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.TetroiseSaddle]: {
    product: ItemId.TetroiseSaddle,
    materials: {
      [ItemId.Leather]: 32,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 45,
    },
  },
  [ItemId.TetroisePrimoSaddle]: {
    product: ItemId.TetroisePrimoSaddle,
    materials: {
      [ItemId.Leather]: 38,
      [ItemId.HighQualityCloth]: 24,
      [ItemId.PaloxiteIngot]: 16,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.NyafiaSShotgun]: {
    product: ItemId.NyafiaSShotgun,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.DarkFragment]: 30,
      [ItemId.Polymer]: 30,
      [ItemId.PaldiumFragment]: 85,
    },
  },
  [ItemId.SelyneSaddle]: {
    product: ItemId.SelyneSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Plasteel]: 30,
      [ItemId.MeteoriteFragment]: 10,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.BulldosuSaddle]: {
    product: ItemId.BulldosuSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 24,
      [ItemId.Cloth]: 15,
      [ItemId.Plasteel]: 30,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.GildaneSaddle]: {
    product: ItemId.GildaneSaddle,
    materials: {
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.PolapupTerraSaddle]: {
    product: ItemId.PolapupTerraSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.Fiber]: 72,
      [ItemId.Plasteel]: 30,
      [ItemId.IceOrgan]: 7,
      [ItemId.PaldiumFragment]: 36,
    },
  },
  [ItemId.StarryonSaddle]: {
    product: ItemId.StarryonSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.DarkFragment]: 20,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.StarryonPrimoSaddle]: {
    product: ItemId.StarryonPrimoSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.HighQualityCloth]: 18,
      [ItemId.DarkFragment]: 24,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.PaldiumFragment]: 65,
    },
  },
  [ItemId.KitsunSaddle]: {
    product: ItemId.KitsunSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Cloth]: 10,
      [ItemId.FlameOrgan]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.KitsunNoctSaddle]: {
    product: ItemId.KitsunNoctSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.FlameOrgan]: 30,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.SmokieSHarness]: {
    product: ItemId.SmokieSHarness,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.DarkFragment]: 5,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.AzurmaneSaddle]: {
    product: ItemId.AzurmaneSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.ElectricOrgan]: 50,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.FalerisSaddle]: {
    product: ItemId.FalerisSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.Hexolite]: 5,
      [ItemId.FlameOrgan]: 25,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.FalerisAquaSaddle]: {
    product: ItemId.FalerisAquaSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.Hexolite]: 5,
      [ItemId.AquaticPalFluids]: 30,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.SilvegisSaddle]: {
    product: ItemId.SilvegisSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Hexolite]: 15,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.SolmoraSaddle]: {
    product: ItemId.SolmoraSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.CoralumIngot]: 10,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.SolmoraLuxSaddle]: {
    product: ItemId.SolmoraLuxSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Cloth]: 12,
      [ItemId.CoralumIngot]: 12,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.DynamoffSaddle]: {
    product: ItemId.DynamoffSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.SoraliteIngot]: 10,
      [ItemId.ElectricOrgan]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.XenolordSaddle]: {
    product: ItemId.XenolordSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.DarkFragment]: 50,
      [ItemId.MeteoriteFragment]: 30,
      [ItemId.PaldiumFragment]: 200,
    },
  },
  [ItemId.EidrolonSaddle]: {
    product: ItemId.EidrolonSaddle,
    materials: {
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.SoraliteIngot]: 20,
      [ItemId.PaldiumFragment]: 45,
    },
  },
  [ItemId.EidrolonIgnisSaddle]: {
    product: ItemId.EidrolonIgnisSaddle,
    materials: {
      [ItemId.Leather]: 48,
      [ItemId.HighQualityCloth]: 36,
      [ItemId.PaloxiteIngot]: 24,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 50,
    },
  },
  [ItemId.RoujaySaddle]: {
    product: ItemId.RoujaySaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.SoraliteIngot]: 10,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.OphydiaSaddle]: {
    product: ItemId.OphydiaSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.SoraliteIngot]: 24,
      [ItemId.AquaticPalFluids]: 15,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.BastigorSHammer]: {
    product: ItemId.BastigorSHammer,
    materials: {
      [ItemId.SoraliteIngot]: 30,
      [ItemId.IceOrgan]: 50,
      [ItemId.PaldiumFragment]: 140,
    },
  },
  [ItemId.ShaolongSaddle]: {
    product: ItemId.ShaolongSaddle,
    materials: {
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 32,
      [ItemId.SoraliteIngot]: 32,
      [ItemId.PaldiumFragment]: 83,
    },
  },
  [ItemId.AegidronSaddle]: {
    product: ItemId.AegidronSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 24,
      [ItemId.PaloxiteIngot]: 18,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 46,
    },
  },
  [ItemId.JormuntideSaddle]: {
    product: ItemId.JormuntideSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.Fiber]: 60,
      [ItemId.RefinedIngot]: 24,
      [ItemId.CryogenicCoolant]: 24,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.JormuntideIgnisSaddle]: {
    product: ItemId.JormuntideIgnisSaddle,
    materials: {
      [ItemId.Leather]: 43,
      [ItemId.Fiber]: 72,
      [ItemId.Hexolite]: 28,
      [ItemId.FlameOrgan]: 28,
      [ItemId.PaldiumFragment]: 57,
    },
  },
  [ItemId.BlazamutSaddle]: {
    product: ItemId.BlazamutSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.RefinedIngot]: 36,
      [ItemId.Ingot]: 24,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.BlazamutRyuSaddle]: {
    product: ItemId.BlazamutRyuSaddle,
    materials: {
      [ItemId.Leather]: 43,
      [ItemId.Plasteel]: 43,
      [ItemId.FlameOrgan]: 60,
      [ItemId.PaldiumFragment]: 57,
    },
  },
  [ItemId.CelesdirSaddle]: {
    product: ItemId.CelesdirSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.HighQualityCloth]: 24,
      [ItemId.HighQualityRecoveryMeds]: 5,
      [ItemId.PaldiumFragment]: 80,
    },
  },
  [ItemId.CelesdirNoctSaddle]: {
    product: ItemId.CelesdirNoctSaddle,
    materials: {
      [ItemId.Leather]: 43,
      [ItemId.HighQualityCloth]: 28,
      [ItemId.HighQualityRecoveryMeds]: 6,
      [ItemId.DarkFragment]: 20,
      [ItemId.PaldiumFragment]: 96,
    },
  },
  [ItemId.PaladiusSaddle]: {
    product: ItemId.PaladiusSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.Hexolite]: 24,
      [ItemId.PalMetalIngot]: 36,
      [ItemId.PaldiumFragment]: 102,
    },
  },
  [ItemId.NecromusSaddle]: {
    product: ItemId.NecromusSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.Hexolite]: 24,
      [ItemId.PalMetalIngot]: 36,
      [ItemId.PaldiumFragment]: 102,
    },
  },
  [ItemId.FrostallionSaddle]: {
    product: ItemId.FrostallionSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.CoralumIngot]: 36,
      [ItemId.IceOrgan]: 60,
      [ItemId.PaldiumFragment]: 80,
    },
  },
  [ItemId.FrostallionNoctSaddle]: {
    product: ItemId.FrostallionNoctSaddle,
    materials: {
      [ItemId.Leather]: 43,
      [ItemId.CoralumIngot]: 43,
      [ItemId.VenomGland]: 72,
      [ItemId.PaldiumFragment]: 96,
    },
  },
  [ItemId.NeptiliusSaddle]: {
    product: ItemId.NeptiliusSaddle,
    materials: {
      [ItemId.Leather]: 48,
      [ItemId.CoralumIngot]: 48,
      [ItemId.AquaticPalFluids]: 80,
      [ItemId.PaldiumFragment]: 200,
    },
  },
  [ItemId.HartalisSaddle]: {
    product: ItemId.HartalisSaddle,
    materials: {
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 48,
      [ItemId.CoralumIngot]: 48,
      [ItemId.PaldiumFragment]: 200,
    },
  },
  [ItemId.JetragonSMissileLauncher]: {
    product: ItemId.JetragonSMissileLauncher,
    materials: {
      [ItemId.Leather]: 70,
      [ItemId.PaloxiteIngot]: 60,
      [ItemId.AICore]: 24,
      [ItemId.PaldiumFragment]: 210,
    },
  },
  [ItemId.ExtraWeaponHolster]: {
    product: ItemId.ExtraWeaponHolster,
    materials: {
      [ItemId.WoodenBoard]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Leather]: 20,
    },
  },
  [ItemId.ExtraWeaponHolster2]: {
    product: ItemId.ExtraWeaponHolster2,
    materials: {
      [ItemId.HighQualityWoodenBoard]: 40,
      [ItemId.Fiber]: 100,
      [ItemId.Leather]: 40,
      [ItemId.CarbonFiber]: 20,
    },
  },
  [ItemId.SmallPouch]: {
    product: ItemId.SmallPouch,
    materials: {
      [ItemId.WoodenBoard]: 10,
      [ItemId.Fiber]: 20,
      [ItemId.Leather]: 10,
    },
  },
  [ItemId.MediumPouch]: {
    product: ItemId.MediumPouch,
    materials: {
      [ItemId.Hardwood]: 50,
      [ItemId.Fiber]: 50,
      [ItemId.Leather]: 20,
    },
  },
  [ItemId.LargePouch]: {
    product: ItemId.LargePouch,
    materials: {
      [ItemId.HighQualityWoodenBoard]: 20,
      [ItemId.Fiber]: 80,
      [ItemId.Leather]: 30,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.GiantPouch]: {
    product: ItemId.GiantPouch,
    materials: {
      [ItemId.HighQualityWoodenBoard]: 50,
      [ItemId.Fiber]: 120,
      [ItemId.Leather]: 40,
      [ItemId.CarbonFiber]: 20,
    },
  },
  [ItemId.HeavyWeightModule]: {
    product: ItemId.HeavyWeightModule,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Ingot]: 10,
      [ItemId.Stone]: 20,
    },
  },
  [ItemId.CurveModule]: {
    product: ItemId.CurveModule,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Stone]: 50,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.SniperModule]: {
    product: ItemId.SniperModule,
    materials: {
      [ItemId.PaldiumFragment]: 50,
      [ItemId.Ingot]: 50,
      [ItemId.Cement]: 30,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.SliderModule]: {
    product: ItemId.SliderModule,
    materials: {
      [ItemId.PaldiumFragment]: 100,
      [ItemId.RefinedIngot]: 30,
      [ItemId.CarbonFiber]: 15,
      [ItemId.CorrosiveSolvent]: 8,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.SniperModuleII]: {
    product: ItemId.SniperModuleII,
    materials: {
      [ItemId.PaldiumFragment]: 200,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.CarbonFiber]: 30,
      [ItemId.AncientCivilizationParts]: 20,
      [ItemId.AncientCivilizationCore]: 2,
    },
  },
  [ItemId.HomingModule]: {
    product: ItemId.HomingModule,
    materials: {
      [ItemId.SoraliteIngot]: 50,
      [ItemId.AICore]: 3,
      [ItemId.AncientCivilizationParts]: 40,
      [ItemId.DarkFragment]: 50,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.ZoeSHalloweenCostume]: {
    product: ItemId.ZoeSHalloweenCostume,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.Leather]: 5,
    },
  },
  [ItemId.EchoingFlute]: {
    product: ItemId.EchoingFlute,
    materials: {
      [ItemId.MarineEchobone]: 1,
      [ItemId.SilentEchobone]: 1,
      [ItemId.SeafoamEchobone]: 1,
      [ItemId.TidewindEchobone]: 1,
    },
  },
};

export function hasRecipe(product: ItemId): boolean {
  return product in _ITEM_RECIPES;
}

export function getRecipe(product: ItemId): Recipe | undefined {
  const recipe = _ITEM_RECIPES[product];
  if (!recipe) {
    return undefined;
  }
  return {
    product: recipe.product,
    materials: { ...recipe.materials },
  };
}

export function getRecipes(): Readonly<ItemRecipeMap> {
  return Object.fromEntries(
    Object.entries(_ITEM_RECIPES).map(([product, recipe]) => [
      product,
      {
        product: recipe.product,
        materials: { ...recipe.materials },
      },
    ]),
  ) as Readonly<ItemRecipeMap>;
}

export function getRecipeMaterials(product: ItemId): RecipeMaterialMap | undefined {
  const recipe = _ITEM_RECIPES[product];
  if (!recipe) {
    return undefined;
  }
  return { ...recipe.materials };
}

/**
 * Build an item grant list for the materials required to craft a product.
 *
 * This is useful for sending a `give/items` request containing all required recipe items.
 *
 * @param product Product item to craft
 */
export function getRecipeMaterialGrants(product: ItemId): Array<{ ItemID: ItemId; Count: number }> | undefined {
  const materials = getRecipeMaterials(product);
  if (!materials) {
    return undefined;
  }

  return Object.entries(materials).map(([ItemID, count]) => ({ ItemID: ItemID as ItemId, Count: count ?? 1 }));
}
