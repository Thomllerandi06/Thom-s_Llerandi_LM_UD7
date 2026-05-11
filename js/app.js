fetch("datos.json")
    .then(response => response.json())
    .then(data => {

        const root = data.the_connections;

        const container = document.getElementById("games-container");

        /* ===================================== */
        /* MAIN TITLE */
        /* ===================================== */

        const mainTitle = document.createElement("h1");

        mainTitle.textContent = "THE CONNECTIONS ARCHIVE";

        container.appendChild(mainTitle);

        /* ===================================== */
        /* GENERAL INFORMATION */
        /* ===================================== */

        const infoSection = document.createElement("section");

        infoSection.classList.add("info-section");

        infoSection.innerHTML = `

            <h2>General Information</h2>

            <p>
                <b>File Name:</b>
                ${root.general_information.file_name}
            </p>

            <p>
                <b>Classification:</b>
                ${root.general_information.classification}
            </p>

            <p>
                <b>Last Update:</b>
                ${root.general_information.last_update}
            </p>

        `;

        container.appendChild(infoSection);

        /* ===================================== */
        /* GAMES SECTION */
        /* ===================================== */

        const gamesTitle = document.createElement("h2");

        gamesTitle.classList.add("section-title");

        gamesTitle.textContent = "Incident Timeline";

        container.appendChild(gamesTitle);

        const gamesGrid = document.createElement("div");

        gamesGrid.classList.add("games-grid");

        root.timeline.game.forEach(game => {

            const card = document.createElement("div");

            card.classList.add("game");

            /* CHARACTERS */

            let charactersHTML = "";

            const characters = Array.isArray(game.characters.character)
                ? game.characters.character
                : [game.characters.character];

            characters.forEach(character => {

                let characterName = character["@id_ref"]

                    // quitar "p_"
                    .replace("p_", "")

                    // cambiar _ por espacios
                    .replaceAll("_", " ")

                    // capitalizar
                    .split(" ")
                    .map(word =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1)
                    )
                    .join(" ");

                            charactersHTML += `
                    <li>${characterName}</li>
                `;

            });

            /* WEAPONS */

            let weaponsHTML = "";

            const weapons = Array.isArray(game.weapons.weapon)
                ? game.weapons.weapon
                : [game.weapons.weapon];

            weapons.forEach(weapon => {

                weaponsHTML += `

                    <li>

                        <b>${weapon.name}</b>

                        (${weapon["@type"]})

                        - ${weapon["@ammo"]}

                    </li>

                `;

            });

            /* VIRUS */

            const virus = game.viruses.biological_agent;

            /* CARD */

            card.innerHTML = `

                <div class="game-content">

                    <h2>${game.title}</h2>

                    <p>
                        <b>Year:</b>
                        ${game["@year"]}
                    </p>

                    <p>
                        <b>Developer:</b>
                        ${game.developer}
                    </p>

                    <p>
                        <b>Main Incident:</b>
                        ${game.main_incident}
                    </p>

                    <p>
                        <b>Location:</b>
                        ${game.location}
                    </p>

                    <p>
                        <b>Virus Status:</b>
                        ${game.viruses["@status"]}
                    </p>

                    <div class="sub-section">

                        <h3>Biological Agent</h3>

                        <p>
                            <b>Name:</b>
                            ${virus.name}
                        </p>

                        <p>
                            <b>Type:</b>
                            ${virus.type}
                        </p>

                        <p>
                            <b>Danger Level:</b>
                            ${virus["@danger_level"]}
                        </p>

                        <p>
                            <b>Infectivity:</b>
                            ${virus["@infectivity"]}
                        </p>

                        <p>
                            <b>Description:</b>
                            ${virus.description}
                        </p>

                    </div>

                    <div class="sub-section">

                        <h3>Characters Involved</h3>

                        <ul>
                            ${charactersHTML}
                        </ul>

                    </div>

                    <div class="sub-section">

                        <h3>Weapons</h3>

                        <ul>
                            ${weaponsHTML}
                        </ul>

                    </div>

                </div>

            `;

            gamesGrid.appendChild(card);

        });

        container.appendChild(gamesGrid);

        /* ===================================== */
        /* ORGANIZATIONS */
        /* ===================================== */

        const organizationsTitle = document.createElement("h2");

        organizationsTitle.classList.add("section-title");

        organizationsTitle.textContent = "Organizations";

        container.appendChild(organizationsTitle);

        const organizationsGrid = document.createElement("div");

        organizationsGrid.classList.add("organizations-grid");

        root.organizations.organization.forEach(org => {

            const orgCard = document.createElement("div");

            orgCard.classList.add("organization-card");

            orgCard.innerHTML = `

                <h3>${org.name}</h3>

                <p>
                    <b>Status:</b>
                    ${org["@status"]}
                </p>

                <p>
                    ${org.description}
                </p>

            `;

            organizationsGrid.appendChild(orgCard);

        });

        container.appendChild(organizationsGrid);

        /* ===================================== */
        /* BIOLOGICAL THREATS */
        /* ===================================== */

        const threatsTitle = document.createElement("h2");

        threatsTitle.classList.add("section-title");

        threatsTitle.textContent = "Biological Threats";

        container.appendChild(threatsTitle);

        const threatsGrid = document.createElement("div");

        threatsGrid.classList.add("threats-grid");

        root.biological_threats.threat.forEach(threat => {

            const threatCard = document.createElement("div");

            threatCard.classList.add("threat-card");

            threatCard.innerHTML = `

                <h3>${threat.name}</h3>

                <p>
                    <b>Status:</b>
                    ${threat["@status"]}
                </p>

                <p>
                    <b>Risk Level:</b>
                    ${threat.risk_level}
                </p>

                <p>
                    <b>Replication:</b>
                    ${threat.replication}
                </p>

            `;

            threatsGrid.appendChild(threatCard);

        });

        container.appendChild(threatsGrid);

    })

    .catch(error => {

        console.error(
            "Error loading JSON:",
            error
        );

    });