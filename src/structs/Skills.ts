import { AssetFinder } from "../client";
import { AssetFinderOptions } from "../types";
import { SkillImages } from "./AssetFinder";
import { characters } from '../utils'

/**
 * A class that structures the skill types data.
 */
export class Skills {
    /**
     * The normal attacks data.
     */
    normalAttacks: Skill;

    /**
     * The elemental skill data.
     */
    elementalSkill: Skill;

    /**
     * The elemental burst data.
     */
    elementalBurst: Skill;

    /**
     * Creates a new `Skills` instance.
     * @param data - The data of the skill.
     * @param characterId - The ID of the character.
     * @param language - The language to get the names.
     */
    constructor(data: any, characterId: number, language: AssetFinderOptions["language"]) {
        const idArr = Object.keys(data)

        this.normalAttacks = new Skill(
            data[idArr[idArr.indexOf(characters[characterId].skillOrder[0])]],
            +idArr[idArr.indexOf(characters[characterId].skillOrder[0])],
            language
        );
        this.elementalSkill = new Skill(
            data[idArr[idArr.indexOf(characters[characterId].skillOrder[1])]],
            +idArr[idArr.indexOf(characters[characterId].skillOrder[1])],
            language
        );
        this.elementalBurst = new Skill(
            data[idArr[idArr.indexOf(characters[characterId].skillOrder[2])]],
            +idArr[idArr.indexOf(characters[characterId].skillOrder[2])],
            language
        );
    }
}

/**
 * A class that structures the skills data.
 */
class Skill {
    /**
     * The skill's level.
     */
    level: number;

    /**
     * The skill's ID.
     */
    id: number;

    /**
     * The skill's assets.
     */
    assets: SkillImages;

    /**
     * The skill's name.
     */
    name: string;

    /**
     * Creates a new `Skill` instance.
     * @param level - The level of the skill.
     * @param id - The ID of the skill.
     * @param language - The language to get the name.
     */
    constructor(level: number, id: number, language: AssetFinderOptions["language"]) {
        this.level = level;
        this.id = id;
        this.assets = new AssetFinder().skill(id).assets;
        this.name = new AssetFinder({ language }).skill(id).name;
    }
}
