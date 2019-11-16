import { LAND_TYPE, WATER_TYPE, AIRFIELD_TYPE, MISSILE_SILO_TYPE, FLAG_TYPE } from "./gameboardConstants";

const BOMBER_TYPE_ID = 0;
const STEALTH_BOMBER_TYPE_ID = 1;
const STEALTH_FIGHTER_TYPE_ID = 2;
const AIR_REFUELING_SQUADRON_ID = 3;
const TACTICAL_AIRLIFT_SQUADRON_TYPE_ID = 4;
const AIRBORN_ISR_TYPE_ID = 5;
const ARMY_INFANTRY_COMPANY_TYPE_ID = 6;
const ARTILLERY_BATTERY_TYPE_ID = 7;
const TANK_COMPANY_TYPE_ID = 8;
const MARINE_INFANTRY_COMPANY_TYPE_ID = 9;
const ATTACK_HELICOPTER_TYPE_ID = 10;
const LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID = 11;
const SAM_SITE_TYPE_ID = 12;
const DESTROYER_TYPE_ID = 13;
const A_C_CARRIER_TYPE_ID = 14;
const SUBMARINE_TYPE_ID = 15;
const TRANSPORT_TYPE_ID = 16;
const MC_12_TYPE_ID = 17;
const C_130_TYPE_ID = 18;
const SOF_TEAM_TYPE_ID = 19;
const RADAR_TYPE_ID = 34; //TODO: could change to RADAR_STATION_TYPE_ID to be consistent with other names? (not important)
const MISSILE_TYPE_ID = 35;
const ATC_SCRAMBLE_TYPE_ID = 20;
const CYBER_DOMINANCE_TYPE_ID = 21;
const MISSILE_LAUNCH_DISRUPTION_TYPE_ID = 22;
const COMMUNICATIONS_INTERRUPTION_TYPE_ID = 23;
const REMOTE_SENSING_TYPE_ID = 24;
const RODS_FROM_GOD_TYPE_ID = 25;
const ANTI_SATELLITE_MISSILES_TYPE_ID = 26;
const GOLDEN_EYE_TYPE_ID = 27;
const NUCLEAR_STRIKE_TYPE_ID = 28;
const BIOLOGICAL_WEAPONS_TYPE_ID = 29;
const SEA_MINES_TYPE_ID = 30;
const DRONE_SWARMS_TYPE_ID = 31;
const INSURGENCY_TYPE_ID = 32;
const RAISE_MORALE_TYPE_ID = 33;

//prettier-ignore
const LIST_ALL_PIECES = [BOMBER_TYPE_ID,STEALTH_BOMBER_TYPE_ID,STEALTH_FIGHTER_TYPE_ID,AIR_REFUELING_SQUADRON_ID,TACTICAL_AIRLIFT_SQUADRON_TYPE_ID,AIRBORN_ISR_TYPE_ID,ARMY_INFANTRY_COMPANY_TYPE_ID,ARTILLERY_BATTERY_TYPE_ID,TANK_COMPANY_TYPE_ID,MARINE_INFANTRY_COMPANY_TYPE_ID,ATTACK_HELICOPTER_TYPE_ID,LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,SAM_SITE_TYPE_ID,DESTROYER_TYPE_ID,A_C_CARRIER_TYPE_ID,SUBMARINE_TYPE_ID,TRANSPORT_TYPE_ID,MC_12_TYPE_ID,C_130_TYPE_ID,SOF_TEAM_TYPE_ID, RADAR_TYPE_ID];
//prettier-ignore
const LIST_ALL_CAPABILITIES = [ATC_SCRAMBLE_TYPE_ID,CYBER_DOMINANCE_TYPE_ID,MISSILE_LAUNCH_DISRUPTION_TYPE_ID,COMMUNICATIONS_INTERRUPTION_TYPE_ID,REMOTE_SENSING_TYPE_ID,RODS_FROM_GOD_TYPE_ID,ANTI_SATELLITE_MISSILES_TYPE_ID,GOLDEN_EYE_TYPE_ID,NUCLEAR_STRIKE_TYPE_ID,BIOLOGICAL_WEAPONS_TYPE_ID,SEA_MINES_TYPE_ID,DRONE_SWARMS_TYPE_ID,INSURGENCY_TYPE_ID,RAISE_MORALE_TYPE_ID];

let TYPE_COSTS = {};
TYPE_COSTS[BOMBER_TYPE_ID] = 15;
TYPE_COSTS[STEALTH_BOMBER_TYPE_ID] = 21;
TYPE_COSTS[STEALTH_FIGHTER_TYPE_ID] = 18;
TYPE_COSTS[AIR_REFUELING_SQUADRON_ID] = 11;
TYPE_COSTS[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 12;
TYPE_COSTS[AIRBORN_ISR_TYPE_ID] = 8;
TYPE_COSTS[ARMY_INFANTRY_COMPANY_TYPE_ID] = 3;
TYPE_COSTS[ARTILLERY_BATTERY_TYPE_ID] = 8;
TYPE_COSTS[TANK_COMPANY_TYPE_ID] = 8;
TYPE_COSTS[MARINE_INFANTRY_COMPANY_TYPE_ID] = 4;
TYPE_COSTS[ATTACK_HELICOPTER_TYPE_ID] = 11;
TYPE_COSTS[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = 7;
TYPE_COSTS[SAM_SITE_TYPE_ID] = 9;
TYPE_COSTS[DESTROYER_TYPE_ID] = 18;
TYPE_COSTS[A_C_CARRIER_TYPE_ID] = 24;
TYPE_COSTS[SUBMARINE_TYPE_ID] = 16;
TYPE_COSTS[TRANSPORT_TYPE_ID] = 10;
TYPE_COSTS[MC_12_TYPE_ID] = 11;
TYPE_COSTS[C_130_TYPE_ID] = 12;
TYPE_COSTS[SOF_TEAM_TYPE_ID] = 7;
TYPE_COSTS[RADAR_TYPE_ID] = 20;
TYPE_COSTS[MISSILE_TYPE_ID] = 6969;
TYPE_COSTS[ATC_SCRAMBLE_TYPE_ID] = 20;
TYPE_COSTS[CYBER_DOMINANCE_TYPE_ID] = 40;
TYPE_COSTS[MISSILE_LAUNCH_DISRUPTION_TYPE_ID] = 25;
TYPE_COSTS[COMMUNICATIONS_INTERRUPTION_TYPE_ID] = 30;
TYPE_COSTS[REMOTE_SENSING_TYPE_ID] = 60;
TYPE_COSTS[RODS_FROM_GOD_TYPE_ID] = 35;
TYPE_COSTS[ANTI_SATELLITE_MISSILES_TYPE_ID] = 35;
TYPE_COSTS[GOLDEN_EYE_TYPE_ID] = 90;
TYPE_COSTS[NUCLEAR_STRIKE_TYPE_ID] = 190;
TYPE_COSTS[BIOLOGICAL_WEAPONS_TYPE_ID] = 25;
TYPE_COSTS[SEA_MINES_TYPE_ID] = 20;
TYPE_COSTS[DRONE_SWARMS_TYPE_ID] = 20;
TYPE_COSTS[INSURGENCY_TYPE_ID] = 20;
TYPE_COSTS[RAISE_MORALE_TYPE_ID] = 50;

let TYPE_NAMES = {};
TYPE_NAMES[BOMBER_TYPE_ID] = "Bomber Squadron";
TYPE_NAMES[STEALTH_BOMBER_TYPE_ID] = "Stealth Bomber Squadron";
TYPE_NAMES[STEALTH_FIGHTER_TYPE_ID] = "Stealth Fighter Squadron";
TYPE_NAMES[AIR_REFUELING_SQUADRON_ID] = "Air Refueling Squadron";
TYPE_NAMES[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = "Tactical Airlift Squadron";
TYPE_NAMES[AIRBORN_ISR_TYPE_ID] = "Airborne ISR";
TYPE_NAMES[ARMY_INFANTRY_COMPANY_TYPE_ID] = "Army Infantry Company";
TYPE_NAMES[ARTILLERY_BATTERY_TYPE_ID] = "Artillery Battery";
TYPE_NAMES[TANK_COMPANY_TYPE_ID] = "Tank Company";
TYPE_NAMES[MARINE_INFANTRY_COMPANY_TYPE_ID] = "Marine Infantry Company";
TYPE_NAMES[ATTACK_HELICOPTER_TYPE_ID] = "Attack Helicopter";
TYPE_NAMES[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = "Light Infantry Vehicle Convoy";
TYPE_NAMES[SAM_SITE_TYPE_ID] = "SAM Site";
TYPE_NAMES[DESTROYER_TYPE_ID] = "Destroyer";
TYPE_NAMES[A_C_CARRIER_TYPE_ID] = "A.C. Carrier";
TYPE_NAMES[SUBMARINE_TYPE_ID] = "Submarine";
TYPE_NAMES[TRANSPORT_TYPE_ID] = "Transport";
TYPE_NAMES[MC_12_TYPE_ID] = "MC-12";
TYPE_NAMES[C_130_TYPE_ID] = "C-130";
TYPE_NAMES[SOF_TEAM_TYPE_ID] = "SOF Team";
TYPE_NAMES[ATC_SCRAMBLE_TYPE_ID] = "ATC Scramble";
TYPE_NAMES[CYBER_DOMINANCE_TYPE_ID] = "Cyber Dominance";
TYPE_NAMES[MISSILE_LAUNCH_DISRUPTION_TYPE_ID] = "Missile Launch Disruption";
TYPE_NAMES[COMMUNICATIONS_INTERRUPTION_TYPE_ID] = "Communications Interrupt";
TYPE_NAMES[REMOTE_SENSING_TYPE_ID] = "Remote Sensing";
TYPE_NAMES[RODS_FROM_GOD_TYPE_ID] = "Rods from God";
TYPE_NAMES[ANTI_SATELLITE_MISSILES_TYPE_ID] = "Anti Satellite Missiles";
TYPE_NAMES[GOLDEN_EYE_TYPE_ID] = "Golden Eye";
TYPE_NAMES[NUCLEAR_STRIKE_TYPE_ID] = "Nuclear Strike";
TYPE_NAMES[BIOLOGICAL_WEAPONS_TYPE_ID] = "Biological Weapons";
TYPE_NAMES[SEA_MINES_TYPE_ID] = "Sea Mines";
TYPE_NAMES[DRONE_SWARMS_TYPE_ID] = "Drone Swarms";
TYPE_NAMES[INSURGENCY_TYPE_ID] = "Insurgency";
TYPE_NAMES[RAISE_MORALE_TYPE_ID] = "Raise Morale";
TYPE_NAMES[RADAR_TYPE_ID] = "Radar Station";
TYPE_NAMES[MISSILE_TYPE_ID] = "Land Based Sea Missile";

let TYPE_MOVES = {};
TYPE_MOVES[BOMBER_TYPE_ID] = 6;
TYPE_MOVES[STEALTH_BOMBER_TYPE_ID] = 8;
TYPE_MOVES[STEALTH_FIGHTER_TYPE_ID] = 12;
TYPE_MOVES[AIR_REFUELING_SQUADRON_ID] = 6;
TYPE_MOVES[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 7;
TYPE_MOVES[AIRBORN_ISR_TYPE_ID] = 7;
TYPE_MOVES[ARMY_INFANTRY_COMPANY_TYPE_ID] = 1;
TYPE_MOVES[ARTILLERY_BATTERY_TYPE_ID] = 1;
TYPE_MOVES[TANK_COMPANY_TYPE_ID] = 1;
TYPE_MOVES[MARINE_INFANTRY_COMPANY_TYPE_ID] = 1;
TYPE_MOVES[ATTACK_HELICOPTER_TYPE_ID] = 2;
TYPE_MOVES[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = 2;
TYPE_MOVES[SAM_SITE_TYPE_ID] = 1;
TYPE_MOVES[DESTROYER_TYPE_ID] = 2;
TYPE_MOVES[A_C_CARRIER_TYPE_ID] = 2;
TYPE_MOVES[SUBMARINE_TYPE_ID] = 2;
TYPE_MOVES[TRANSPORT_TYPE_ID] = 2;
TYPE_MOVES[MC_12_TYPE_ID] = 4;
TYPE_MOVES[C_130_TYPE_ID] = 7;
TYPE_MOVES[SOF_TEAM_TYPE_ID] = 1;
TYPE_MOVES[RADAR_TYPE_ID] = 0;
TYPE_MOVES[MISSILE_TYPE_ID] = 0;

let TYPE_FUEL = {};
TYPE_FUEL[BOMBER_TYPE_ID] = 15;
TYPE_FUEL[STEALTH_BOMBER_TYPE_ID] = 12;
TYPE_FUEL[STEALTH_FIGHTER_TYPE_ID] = 8;
TYPE_FUEL[AIR_REFUELING_SQUADRON_ID] = 22;
TYPE_FUEL[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = 17;
TYPE_FUEL[AIRBORN_ISR_TYPE_ID] = 13;
TYPE_FUEL[ARMY_INFANTRY_COMPANY_TYPE_ID] = -1;
TYPE_FUEL[ARTILLERY_BATTERY_TYPE_ID] = -1;
TYPE_FUEL[TANK_COMPANY_TYPE_ID] = -1;
TYPE_FUEL[MARINE_INFANTRY_COMPANY_TYPE_ID] = -1;
TYPE_FUEL[ATTACK_HELICOPTER_TYPE_ID] = 3;
TYPE_FUEL[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = -1;
TYPE_FUEL[SAM_SITE_TYPE_ID] = -1;
TYPE_FUEL[DESTROYER_TYPE_ID] = -1;
TYPE_FUEL[A_C_CARRIER_TYPE_ID] = -1;
TYPE_FUEL[SUBMARINE_TYPE_ID] = -1;
TYPE_FUEL[TRANSPORT_TYPE_ID] = -1;
TYPE_FUEL[MC_12_TYPE_ID] = 12;
TYPE_FUEL[C_130_TYPE_ID] = 14;
TYPE_FUEL[SOF_TEAM_TYPE_ID] = -1;
TYPE_FUEL[RADAR_TYPE_ID] = -1;
TYPE_FUEL[MISSILE_TYPE_ID] = -1;

const ALL_TERRAIN = [LAND_TYPE, WATER_TYPE, AIRFIELD_TYPE, MISSILE_SILO_TYPE, FLAG_TYPE];
const GROUND_TERRAIN = [LAND_TYPE, AIRFIELD_TYPE, MISSILE_SILO_TYPE, FLAG_TYPE];
const WATER_TERRAIN = [WATER_TYPE];
let TYPE_TERRAIN = {};
TYPE_TERRAIN[BOMBER_TYPE_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[STEALTH_BOMBER_TYPE_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[STEALTH_FIGHTER_TYPE_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[AIR_REFUELING_SQUADRON_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[TACTICAL_AIRLIFT_SQUADRON_TYPE_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[AIRBORN_ISR_TYPE_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[ARMY_INFANTRY_COMPANY_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[ARTILLERY_BATTERY_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[TANK_COMPANY_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[MARINE_INFANTRY_COMPANY_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[ATTACK_HELICOPTER_TYPE_ID] = 3;
TYPE_TERRAIN[LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[SAM_SITE_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[DESTROYER_TYPE_ID] = [...WATER_TERRAIN];
TYPE_TERRAIN[A_C_CARRIER_TYPE_ID] = [...WATER_TERRAIN];
TYPE_TERRAIN[SUBMARINE_TYPE_ID] = [...WATER_TERRAIN];
TYPE_TERRAIN[TRANSPORT_TYPE_ID] = [...WATER_TERRAIN];
TYPE_TERRAIN[MC_12_TYPE_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[C_130_TYPE_ID] = [...ALL_TERRAIN];
TYPE_TERRAIN[SOF_TEAM_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[RADAR_TYPE_ID] = [...GROUND_TERRAIN];
TYPE_TERRAIN[MISSILE_TYPE_ID] = [...GROUND_TERRAIN];

//TODO: re-work capability constants to be less involved with piece constants (separate TYPE into PIECETYPE and CAPABILITYTYPE)
//This is especially misleading when it is used in ShopMenu (auto-creating PurchaseItems based on these constants...)
const TYPE_MAIN = 0;
const TYPE_AIR = 1;
const TYPE_LAND = 2;
const TYPE_SEA = 3;
const TYPE_SPECIAL = 4;
const ALL_COMMANDER_TYPES = [TYPE_MAIN, TYPE_AIR, TYPE_LAND, TYPE_SEA, TYPE_SPECIAL];

let TYPE_OWNER_NAMES = {};
TYPE_OWNER_NAMES[TYPE_MAIN] = "COCOM";
TYPE_OWNER_NAMES[TYPE_AIR] = "JFACC";
TYPE_OWNER_NAMES[TYPE_LAND] = "JFLCC";
TYPE_OWNER_NAMES[TYPE_SEA] = "JFMCC";
TYPE_OWNER_NAMES[TYPE_SPECIAL] = "JFSOCC";

let TYPE_OWNERS = {};
//prettier-ignore
TYPE_OWNERS[TYPE_MAIN] = [BOMBER_TYPE_ID,STEALTH_BOMBER_TYPE_ID,STEALTH_FIGHTER_TYPE_ID,AIR_REFUELING_SQUADRON_ID,TACTICAL_AIRLIFT_SQUADRON_TYPE_ID,AIRBORN_ISR_TYPE_ID,ARMY_INFANTRY_COMPANY_TYPE_ID,ARTILLERY_BATTERY_TYPE_ID,TANK_COMPANY_TYPE_ID,MARINE_INFANTRY_COMPANY_TYPE_ID,ATTACK_HELICOPTER_TYPE_ID,LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,SAM_SITE_TYPE_ID,DESTROYER_TYPE_ID,A_C_CARRIER_TYPE_ID,SUBMARINE_TYPE_ID,TRANSPORT_TYPE_ID,MC_12_TYPE_ID,C_130_TYPE_ID,SOF_TEAM_TYPE_ID,ATC_SCRAMBLE_TYPE_ID,CYBER_DOMINANCE_TYPE_ID,MISSILE_LAUNCH_DISRUPTION_TYPE_ID,COMMUNICATIONS_INTERRUPTION_TYPE_ID,REMOTE_SENSING_TYPE_ID,RODS_FROM_GOD_TYPE_ID,ANTI_SATELLITE_MISSILES_TYPE_ID,GOLDEN_EYE_TYPE_ID,NUCLEAR_STRIKE_TYPE_ID,BIOLOGICAL_WEAPONS_TYPE_ID,SEA_MINES_TYPE_ID,DRONE_SWARMS_TYPE_ID,INSURGENCY_TYPE_ID,RAISE_MORALE_TYPE_ID,RADAR_TYPE_ID,MISSILE_TYPE_ID];
TYPE_OWNERS[TYPE_AIR] = [
    RADAR_TYPE_ID,
    BOMBER_TYPE_ID,
    STEALTH_BOMBER_TYPE_ID,
    STEALTH_FIGHTER_TYPE_ID,
    AIR_REFUELING_SQUADRON_ID,
    TACTICAL_AIRLIFT_SQUADRON_TYPE_ID,
    AIRBORN_ISR_TYPE_ID
];
//prettier-ignore
TYPE_OWNERS[TYPE_LAND] = [ARMY_INFANTRY_COMPANY_TYPE_ID,ARTILLERY_BATTERY_TYPE_ID,TANK_COMPANY_TYPE_ID,MARINE_INFANTRY_COMPANY_TYPE_ID,ATTACK_HELICOPTER_TYPE_ID,LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,SAM_SITE_TYPE_ID];
TYPE_OWNERS[TYPE_SEA] = [DESTROYER_TYPE_ID, A_C_CARRIER_TYPE_ID, SUBMARINE_TYPE_ID, TRANSPORT_TYPE_ID];
TYPE_OWNERS[TYPE_SPECIAL] = [MC_12_TYPE_ID, C_130_TYPE_ID, SOF_TEAM_TYPE_ID, MISSILE_TYPE_ID];

const TYPE_AIR_PIECES = [
    BOMBER_TYPE_ID,
    STEALTH_BOMBER_TYPE_ID,
    STEALTH_FIGHTER_TYPE_ID,
    AIR_REFUELING_SQUADRON_ID,
    TACTICAL_AIRLIFT_SQUADRON_TYPE_ID,
    AIRBORN_ISR_TYPE_ID,
    C_130_TYPE_ID,
    MC_12_TYPE_ID,
    ATTACK_HELICOPTER_TYPE_ID
];

const TYPE_GROUND_PIECES = [
    ARMY_INFANTRY_COMPANY_TYPE_ID,
    ARTILLERY_BATTERY_TYPE_ID,
    TANK_COMPANY_TYPE_ID,
    MARINE_INFANTRY_COMPANY_TYPE_ID,
    LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,
    SAM_SITE_TYPE_ID,
    SOF_TEAM_TYPE_ID
];

const CONTAINER_TYPES = [TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, A_C_CARRIER_TYPE_ID, TRANSPORT_TYPE_ID, C_130_TYPE_ID];
const CAPTURE_TYPES = [
    ARMY_INFANTRY_COMPANY_TYPE_ID,
    ARTILLERY_BATTERY_TYPE_ID,
    TANK_COMPANY_TYPE_ID,
    MARINE_INFANTRY_COMPANY_TYPE_ID,
    LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,
    SAM_SITE_TYPE_ID,
    SOF_TEAM_TYPE_ID
];

//prettier-ignore
const TYPE_HIGH_LOW = {
    highPieces: [BOMBER_TYPE_ID, STEALTH_BOMBER_TYPE_ID, STEALTH_FIGHTER_TYPE_ID, AIR_REFUELING_SQUADRON_ID, TACTICAL_AIRLIFT_SQUADRON_TYPE_ID, AIRBORN_ISR_TYPE_ID, ATTACK_HELICOPTER_TYPE_ID, MC_12_TYPE_ID, C_130_TYPE_ID],
    lowPieces: [ARMY_INFANTRY_COMPANY_TYPE_ID, ARTILLERY_BATTERY_TYPE_ID, TANK_COMPANY_TYPE_ID, MARINE_INFANTRY_COMPANY_TYPE_ID, LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID, SAM_SITE_TYPE_ID, DESTROYER_TYPE_ID, TRANSPORT_TYPE_ID, A_C_CARRIER_TYPE_ID, SUBMARINE_TYPE_ID, SOF_TEAM_TYPE_ID, RADAR_TYPE_ID, MISSILE_TYPE_ID]
};

const REMOTE_SENSING_RANGE = 3;
const COMM_INTERRUPT_RANGE = 2;
const GOLDEN_EYE_RANGE = 2;

const COMM_INTERRUPT_ROUNDS = 3;
const BIO_WEAPONS_ROUNDS = 9;
const RAISE_MORALE_ROUNDS = 3;
const REMOTE_SENSING_ROUNDS = 9;
const GOLDEN_EYE_ROUNDS = 3;

const ACTIVATED = 1;
const DEACTIVATED = 0;

const NEWS_PHASE_ID = 0;
const PURCHASE_PHASE_ID = 1;
const COMBAT_PHASE_ID = 3;
const PLACE_PHASE_ID = 4;

const SLICE_PLANNING_ID = 0;
const SLICE_EXECUTING_ID = 1;

// used the updated units excel at https://docs.google.com/spreadsheets/d/1kiMLv05oK6IZKtiYdErvD4Kp5tI3lXLL2-qbO3ZqHAI/edit#gid=306372336
//TODO: fix for radar and missile (late additions)
const VISIBILITY_MATRIX = [
    [1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, -1, 2, 1, 1, -1, 2, -1], //bomber
    [1, 0, -1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, -1, 2, 1, 1, -1, 2, -1], //stealth bomber
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, -1, 2, 1, 1, -1, 2, -1], //stealth fighter
    [0, -1, -1, 0, 1, 0, 0, -1, -1, -1, 0, -1, -1, 0, 0, -1, 0, 0, 1, -1, 0, -1], //tanker
    [0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, -1, 0, -1], //air transport
    [2, 0, 0, 2, 2, 2, -1, -1, -1, -1, 2, -1, -1, 0, 0, -1, 0, 2, 2, -1, 0, -1], //air isr
    [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, -1, -1, 0, 1, -1], //infantry (army)
    [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, 0, -1, -1, 0, 1, -1], //artillery
    [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, -1, -1, 0, 1, -1], //tank
    [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, -1, -1, 0, 1, -1], //infantry (marine)
    [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 0, 1, 0, 2, -1], //attack helicopter
    [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, -1, -1, 0, 1, -1], //LAV
    [2, 0, 0, 2, 2, 2, -1, -1, -1, -1, 2, -1, 0, -1, -1, -1, -1, 1, 2, -1, -1, -1], //SAM
    [0, -1, -1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, -1, 1, -1], //destroyer
    [0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, -1, 1, 0, 1, -1, 0, -1], //a.c. carrier
    [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 1, -1, -1, -1, -1, -1], //submarine
    [0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 0, -1], //transport
    [-1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 1, 2, 2, 2, 2, -1, 2, 1, 0, 1, 3, -1], //mc-12
    [0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, -1, 1, 1, 1, -1, 1, -1], //c-130
    [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, 0, 0, 0, 0, 1, -1], //sof team
    [3, 1, 1, 3, 3, 3, 1, 2, 2, 1, 2, 2, 2, 3, 3, -1, 3, 2, 2, 0, 3, -1], //radar
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1] //missile
];

//TODO: fix for radar and missile (late additions)
const ATTACK_MATRIX = [
    [0, 0, 0, 0, 0, 0, 11, 11, 10, 11, 0, 10, 3, 10, 9, 0, 8, 0, 0, 8, 11, 0, 0, 11, 0], //bomber
    [0, 0, 0, 0, 0, 0, 10, 10, 9, 10, 0, 9, 8, 9, 8, 0, 8, 0, 0, 8, 11, 0, 0, 11, 0], //stealth bomber
    [10, 4, 3, 11, 10, 11, 5, 5, 4, 5, 9, 6, 7, 4, 3, 0, 6, 10, 9, 8, 8, 0, 0, 8, 0], //stealth fighter
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //tanker
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //air transport
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //air isr
    [0, 0, 0, 0, 0, 0, 7, 8, 4, 8, 6, 6, 10, 0, 0, 0, 0, 2, 2, 9, 6, 0, 0, 6, 0], //infantry (army)
    [0, 0, 0, 0, 0, 0, 8, 8, 6, 7, 0, 7, 10, 0, 0, 0, 0, 0, 0, 10, 9, 0, 0, 9, 0], //artillery
    [0, 0, 0, 0, 0, 0, 7, 10, 7, 7, 2, 8, 11, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 10, 0], //tank
    [0, 0, 0, 0, 0, 0, 8, 9, 5, 7, 3, 6, 10, 0, 0, 0, 0, 2, 2, 9, 7, 0, 0, 7, 0], //infantry (marine)
    [0, 0, 0, 0, 0, 0, 9, 10, 8, 9, 2, 10, 9, 6, 5, 0, 5, 8, 7, 10, 9, 0, 0, 9, 0], //attack helicopter
    [0, 0, 0, 0, 0, 0, 8, 8, 6, 8, 4, 7, 10, 0, 0, 0, 0, 3, 2, 9, 8, 0, 0, 8, 0], //LAV
    [10, 8, 7, 11, 10, 10, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0], //SAM
    [9, 0, 0, 5, 5, 5, 6, 7, 6, 6, 6, 4, 7, 7, 8, 9, 8, 3, 3, 3, 9, 0, 0, 9, 0], //destroyer
    [9, 1, 1, 3, 2, 4, 0, 0, 0, 0, 3, 0, 0, 2, 4, 2, 4, 6, 5, 0, 0, 0, 0, 0, 0], //a.c. carrier
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0], //submarine
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //transport
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //mc-12
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //c-130
    [0, 0, 0, 0, 0, 0, 3, 8, 2, 3, 2, 5, 10, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 8, 0], //sof team
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //rader
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //missile
];

const BLUE_TEAM_ID = 0;
const RED_TEAM_ID = 1;
const NEUTRAL_TEAM_ID = -1;

const NOT_WAITING_STATUS = 0;
const WAITING_STATUS = 1;

export {
    BOMBER_TYPE_ID,
    STEALTH_BOMBER_TYPE_ID,
    STEALTH_FIGHTER_TYPE_ID,
    AIR_REFUELING_SQUADRON_ID,
    TACTICAL_AIRLIFT_SQUADRON_TYPE_ID,
    AIRBORN_ISR_TYPE_ID,
    ARMY_INFANTRY_COMPANY_TYPE_ID,
    ARTILLERY_BATTERY_TYPE_ID,
    TANK_COMPANY_TYPE_ID,
    MARINE_INFANTRY_COMPANY_TYPE_ID,
    ATTACK_HELICOPTER_TYPE_ID,
    LIGHT_INFANTRY_VEHICLE_CONVOY_TYPE_ID,
    SAM_SITE_TYPE_ID,
    DESTROYER_TYPE_ID,
    A_C_CARRIER_TYPE_ID,
    SUBMARINE_TYPE_ID,
    TRANSPORT_TYPE_ID,
    MC_12_TYPE_ID,
    C_130_TYPE_ID,
    SOF_TEAM_TYPE_ID,
    ATC_SCRAMBLE_TYPE_ID,
    CYBER_DOMINANCE_TYPE_ID,
    MISSILE_LAUNCH_DISRUPTION_TYPE_ID,
    COMMUNICATIONS_INTERRUPTION_TYPE_ID,
    REMOTE_SENSING_TYPE_ID,
    RODS_FROM_GOD_TYPE_ID,
    ANTI_SATELLITE_MISSILES_TYPE_ID,
    GOLDEN_EYE_TYPE_ID,
    NUCLEAR_STRIKE_TYPE_ID,
    BIOLOGICAL_WEAPONS_TYPE_ID,
    SEA_MINES_TYPE_ID,
    DRONE_SWARMS_TYPE_ID,
    INSURGENCY_TYPE_ID,
    RAISE_MORALE_TYPE_ID,
    RADAR_TYPE_ID,
    LIST_ALL_PIECES,
    LIST_ALL_CAPABILITIES,
    TYPE_COSTS,
    TYPE_NAMES,
    TYPE_MOVES,
    TYPE_FUEL,
    TYPE_MAIN,
    TYPE_AIR,
    TYPE_LAND,
    TYPE_SEA,
    TYPE_SPECIAL,
    TYPE_OWNERS,
    CONTAINER_TYPES,
    CAPTURE_TYPES,
    TYPE_HIGH_LOW,
    REMOTE_SENSING_RANGE,
    COMM_INTERRUPT_RANGE,
    COMM_INTERRUPT_ROUNDS,
    BIO_WEAPONS_ROUNDS,
    RAISE_MORALE_ROUNDS,
    REMOTE_SENSING_ROUNDS,
    ACTIVATED,
    DEACTIVATED,
    VISIBILITY_MATRIX,
    ATTACK_MATRIX,
    NEWS_PHASE_ID,
    PURCHASE_PHASE_ID,
    COMBAT_PHASE_ID,
    PLACE_PHASE_ID,
    SLICE_EXECUTING_ID,
    SLICE_PLANNING_ID,
    BLUE_TEAM_ID,
    RED_TEAM_ID,
    ALL_COMMANDER_TYPES,
    NEUTRAL_TEAM_ID,
    GOLDEN_EYE_ROUNDS,
    GOLDEN_EYE_RANGE,
    NOT_WAITING_STATUS,
    WAITING_STATUS,
    TYPE_OWNER_NAMES,
    TYPE_TERRAIN,
    MISSILE_TYPE_ID,
    TYPE_AIR_PIECES,
    TYPE_GROUND_PIECES
};
