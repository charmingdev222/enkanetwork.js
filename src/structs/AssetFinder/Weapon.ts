import { weapons as wContent, hashes as hContent } from "../../utils";
import { WeaponImage } from "../../types";

const weapons: { [key: string]: any } = wContent;
const hashes: { [key: string]: any } = hContent;

/**
 * A class that structures the weapon assets and name.
 */
export class WeaponAssets {
    /**
     * The weapon name.
     */
    name: string;

    /**
     * The weapon assets.
     */
    assets: WeaponImages;

    /**
     * Creates a new `WeaponAssets` instance.
     * @param weaponId - The ID of the weapon.
     * @param language - The language to get the name.
     */
    constructor(weaponId: string | number, language: string) {
        this.name = hashes[language][weapons[weaponId]?.nameTextMapHash] || "";
        this.assets = weapons[weaponId] ? new WeaponImages(weapons[weaponId]) : {} as WeaponImages;
    }
}

/**
 * A class that structures the weapon images.
 */
export class WeaponImages {
    /**
     * The weapon's icon.
     */
    icon: string;

    /**
     * The weapon's awaken icon
     */
    awakenIcon: string;

    /**
     * Creates a new `WeaponImages` instance.
     * @param data - The data of the weapon.
     */
    constructor(data: WeaponImage) {
        this.icon = data ? data.icon : "";
        this.awakenIcon = data ? data.awakenIcon : "";
    }
}
