class Help {

    constructor() {
        this.enabled = false;
        // [action,html]
        this.actionHelp = {
            1: `
            <h1>ORBIT SIDE - OBTAIN BLUEPRINT:</h1>
            <p>Take the Blueprint of a type that scores Lacerda's Scientists. If tied, take the leftmost card from the row with the most cards in it (bottom row if tied).</p>
            <hr>
            <h1>COLONY SIDE - CONSTRUCT A BUILDING:</h1>
            <p>Lacerda always builds the Building corresponding to the icon his Bot is on, but only if the LSS marker for that Building is below the Colony level marker.</p>
            <p>If his Bot is on the icon for a Building whose marker is above the current Colony level, he builds the next Building in the sequence, unless that Building's marker is above the current Colony level, and so on. He always constructs a Mine if that is next in the sequence.</p>
            <p>When constructing, Lacerda always tries to build the largest Complex possible using any available Tech. If there is more than one legal Building placement, check the <a class="popup" onclick="createPopup('ambiguities');">RESOLVING AMBIGUITIES<span class="popuptext" id="ambiguities">During the game, there will be times when Lacerda has more than one choice. In these cases, you must always choose the option which gives the most advantage to Lacerda. If there isn't a clear choice, use one of the random resolution guides on the card to the left.</span></a> rules. After constructing, move his Bot to the next icon in the sequence after the Building that was just constructed.</p>`,
            2:`
            <h1>ORBIT SIDE - LEARN NEW TECHNOLOGY:</h1>
            <p>Lacerda takes the cheapest one, leftmost if there are more than one. Place it in Lacerda's laboratory, top space first, taking benefit as normal (<a class="popup" onclick="createPopup('warehouse');">WAREHOUSE PRIORITY<span class="popuptext" id="warehouse">Lacerda takes whatever there is the most of. In case of a tie, he takes the leftmost one (Crystals first). Any Resources taken are placed into the general supply.</span></a>).</p>
            <hr>
            <h1>COLONY SIDE - UPGRADE A BUILDING:</h1>
            <p>Lacerda uses one of his Blueprints and upgrades a Building anywhere on the board. If the Upgrade Tech is in play, he uses it if able to upgrade as many Buildings as he can.</p>
            <p>If there is more than one Blueprint to upgrade, he gives preference to the one that increases the OP provided by his Scientists.
            </p>`,
            3:`
            <h1>ORBIT SIDE - RESEARCH AND DEVELOPMENT (R&D):</h1>
            <p>Lacerda develops the most-developed Tech that can be developed once, then the least developed Tech that can be developed once. If two Techs are tied, develop the bottom one.</p>
            <hr>
            <h1>COLONY SIDE - HIRE A SCIENTIST OR TAKE AN EARTH CONTRACT:</h1>
            <p>Lacerda hires the Scientist that will score him the most potential OP based on the number of Blueprints owned by each player (whether used to upgrade yet or not). Once he has two Scientists, he takes a Contract instead (the one worth the most OP). His Contracts are considered automatically completed. After taking the Scientist or Contract card, Lacerda shuffles the Contract deck and refills the display with the top card.</p>`,
        };
        
        this.generalHelp = {
            "mission": `
            <h1>MISSION</h1>
            <p>Move the indicated Mission tracker cube down one space. He gets Crystals for contributing to the Mission as usual.</p>
            <hr>`,
            "warehouse": `
            <h1>WAREHOUSE PRIORITY</h1>
            <p>Lacerda takes whatever there is the most of. In case of a tie, he takes the leftmost one (Crystals first). Any Resources taken are placed into the general supply.</p>
            <hr>`,
            "technology": `
            <h1>LEARN NEW TECHNOLOGY</h1>
            <p>Lacerda takes the cheapest one, leftmost if there are more than one. Place it in Lacerda's laboratory, top space first, taking benefit as normal.</p>
            <hr>`,
            "rover": `
            <h1>MOVES HIS ROVER</h1>
            <p>Move the indicated Mission tracker cube down one space. He gets Crystals for contributing to the Mission as usual.</p>
            <hr>`,
            "blueprint": `
            <h1>OBTAIN BLUEPRINT</h1>
            <p>Move the indicated Mission tracker cube down one space. He gets Crystals for contributing to the Mission as usual.</p>
            <hr>`,
        };

        this.shuttleHelp = `
        <h1>SHUTTLE PHASE</h1>
        <p>When Lacerda travels, choose an available Turn Order space at random. Resolve the travel as 
        normal, but with the following changes:</p>
        <ul>
            <li>When traveling to Orbit, Lacerda skips both steps.</li>
            <li>When traveling to the Colony, Lacerda places a Discovery tile but skips the retrieve Colonists step.</li>
            <li>When placing a Discovery tile, Lacerda always places the leftmost Discovery tile from the Exploration space. It is placed 3 spaces away from his Rover and as far away as possible from your Rover.</li>
            <li>When Lacerda travels to the Colony, after choosing a Turn Order space, he <a class="popup" onclick="createPopup('building');">CONSTRUCTS A BUILDING<span class="popuptext" id="building">Lacerda always builds the Building corresponding to the icon his Bot is on, but only if the LSS marker for that Building is below the Colony level marker.<br>If his Bot is on the icon for a Building whose marker is above the current Colony level, he builds the next Building in the sequence, unless that Building's marker is above the current Colony level, and so on. He always constructs a Mine if that is next in the sequence.<br>When constructing, Lacerda always tries to build the largest Complex possible using any available Tech. If there is more than one legal Building placement, check the Resolving Ambiguities rules. After constructing, move his Bot to the next icon in the sequence after the Building that was just constructed.</span></a>.</li>
        </ul>
        </p>
        <hr>
        <h1>TURN ORDER SPACE BENEFITS</h1>
        <p class="imgpara"><img src="./assets/icons/blueprint.png" class="imgparafloat">Lacerda takes a Blueprint as described under <a class="popup" onclick="createPopup('blueprint');">OBTAIN BLUEPRINT<span class="popuptext" id="blueprint">Take the Blueprint of a type that scores Lacerda's Scientists. If tied, take the leftmost card from the row with the most cards in it (bottom row if tied).</span></a>.</p>
        <p class="imgpara"><img src="./assets/icons/technology.png" class="imgparafloat">Lacerda takes a Tech tile as as described under <br><a class="popup" onclick="createPopup('technology');">LEARN NEW TECHNOLOGY<span class="popuptext" id="technology">Lacerda takes the cheapest one, leftmost if there are more than one. Place it in Lacerda's laboratory, top space first, taking benefit as normal.</span></a>.</p>
        <p class="imgpara"><img src="./assets/icons/colonist.png" class="imgparafloat">Since Lacerda always has all the Colonists he needs, instead he <a class="popup" onclick="createPopup('rover');">MOVES HIS ROVER<span class="popuptext" id="rover">Whenever Lacerda moves his Rover, it moves toward the closest tile (either Research or Discovery) that it can collect. Do not count any Discovery tiles that give Resources as they are useless to Lacerda. If tied, check the Resolving Ambiguities rules. He uses any available Tech and spends additional Crystals if required. If he reaches a tile, it is resolved immediately.</span></a>.</p>
        <p class="imgpara"><img src="./assets/icons/bot.png" class="imgparafloat">Move Lacerda's Bot using the <a class="popup" onclick="createPopup('rover');">MOVES HIS ROVER</a> rules.</p>
        <p class="imgpara"><img src="./assets/icons/warehouse.png" class="imgparafloat">Lacerda takes whatever there is the most of. In case of a tie, he takes the leftmost one (Crystals first). Any Resources taken are placed into the general supply.</p>
        `;

        this.topMenu = `
        <div id="topmenu">
            <span class="menu"><a class="popup" onclick="createPopup('placement');">COLONIST PLACEMENT<span class="popuptext" id="placement">Lacerda always has to place a Colonist on actions that depict a Red Colonist. He pays the additional cost with Crystals, he cannot pay with Colonists. If he does not have enough Crystals to pay, or if the move he is doing is not allowed for some reason (no space in his Lab to learn more Techs, no Blueprints available, Scientist slot is already occupied, etc.), then instead of performing the action, he moves his Rover instead.</span></a></span>
            <span class="menu"><a class="popup" onclick="createPopup('extrarules');">EXTRA RULES<span class="popuptext" id="extrarules"><ul>
            <li>Lacerda always has as many Colonists as he needs. At the end of the game, all spaces in his Living Quarters are considered occupied for scoring.</li>
            <li>Lacerda does not take any Executive actions.</li>
            <li>Lacerda never collects or stores resources. He never pays Resources to take any action.</li>
            <li>Lacerda gains Crystals as normal (Constructing Shelters, taking a Shelter Blueprint, contributing to a Mission, etc.). The number of Crystals he can store is limited to spaces in his Depot.</li>
            <li>When Lacerda builds a LSS building, if he has a Colonist on the Hire a Scientists action slot, he chooses the reward of retrieving that Colonist. If he does not have a Colonist there, he gains a Crystal instead.</li>
            <li>When Lacerda scores this tile, treat his Living Quarters as if it is full of Colonists.</li>
            <li>Lacerda always uses Tech if it is available. You get an Oxygen as normal if he uses your Tech.</li>
            <li>When he moves his Bot, move it to the next icon in the LSS sequence (Mine > Generator > Water Extractor > Greenhouse > Oxygen Condenser > back to Mine, etc.).</li>
            </ul>
            </span></a></span>
            <span class="menu"><a class="popup" onclick="createPopup('levelup');">COLONY LEVELS UP<span class="popuptext" id="levelup">Every time this happens, Lacerda places a Shelter according to the construction rules above, then he takes 1 Bot which is placed on his Player board. It is never placed on the main board, but it counts towards LSS Rewards or Missions. Lacerda also Welcomes a New Ship.</span></a></span>
        </div><hr>`;
    }

    showhide() {
        var helpDiv = document.getElementById("help");
        if (this.enabled) {
            this.enabled = false;
            helpDiv.style.display = "hidden";
        } else {
            this.enabled = true;
            helpDiv.style.display = "inline-block";
        }

    }
    
    enabled() {
        return this.enabled;
    }

    display(mission,action,shuttle) {
        if (this.enabled) {
            var helpDiv = document.getElementById("help");
            var newHTML = "";
            
            if(shuttle) {
                helpDiv.innerHTML = this.topMenu+this.shuttleHelp;
            } else {
                newHTML += this.topMenu;
                if(mission != null) {
                    newHTML += this.generalHelp["mission"];
                }
                newHTML += this.actionHelp[action];

                helpDiv.innerHTML = newHTML;
            }
        }
    }
}
