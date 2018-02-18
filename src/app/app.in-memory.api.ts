import {InMemoryDbService} from 'angular-in-memory-web-api';
export class AppInMemoryApi implements InMemoryDbService {
    createDb() {
        return {
            'games': [
                {
                  'id': 1,
                  'image': 'horizon_zero_dawn.jpg',
                  'name': 'Horizon Zero Dawn',
                  'releaseDate': '2017-02-28',
                  'platforms': [
                    2
                  ],
                  'description': `Horizon Zero Dawn is an action role-playing video game
                   developed by Guerrilla Games and published by Sony Interactive Entertainment
                   for PlayStation 4 and released in early 2017. The plot revolves around Aloy,
                   a hunter and archer living in a world overrun by machines. Having been an
                   outcast her whole life, she sets out to discover the dangers that kept her
                   sheltered. The character uses ranged weapons and a spear and stealth tactics
                   to combat the mechanised creatures, whose remains can be looted for resources.
                    A skill tree provides the player with new abilities and passive bonuses.
                   The game features an open world environment for Aloy to explore,
                   while undertaking side and main story quests.`
                },
                {
                  'id': 2,
                  'image': 'destiny2.jpg',
                  'name': 'Destiny 2',
                  'releaseDate': '2017-09-06',
                  'platforms': [1, 2, 3],
                  'description': `Destiny 2 is an online-only multiplayer first-person shooter
                    video game developed by Bungie and published by Activision. It was released
                    for PlayStation 4 and Xbox One on September 6, 2017, followed by a Microsoft
                     Windows version the following month. It is the sequel to 2014's Destiny
                     and its subsequent expansions.`
                },
                {
                  'id': 3,
                  'image': 'gran_turismo.jpg',
                  'name': 'Gran Turismo Sport',
                  'releaseDate': '2017-10-17',
                  'platforms': [1, 2, 3],
                  'description': `Gran Turismo Sport is the latest entry in the long-running
                    simulation racing series, and it's no doubt going to be another
                     graphical showcase for the PlayStation 4. Though the series has dedicated
                     fans, it's most notorious for being the most expensive commercial for
                     whatever Sony's current game console is.`
                },
                {
                  'id': 4,
                  'image': 'resident_evil.jpg',
                  'name': 'Resident Evil 7: Biohazard',
                  'releaseDate': '2017-01-24',
                  'platforms': [1, 2, 3],
                  'descripion': `Resident Evil 7: Biohazard[a] is a survival horror video game developed
                   and published by Capcom. The game was released worldwide in January 2017 for Microsoft
                    Windows, PlayStation 4 – with support for the PlayStation VR headset – and Xbox One.
                     It is the eleventh main entry and 24th entry overall in the Resident Evil franchise.
                      It is the first main series installment to be played from a first-person perspective.`
                },
                {
                  'id': 5,
                  'image': 'call_of_dutty.jpg',
                  'name': 'Call of Duty: WWII',
                  'releaseDate': '2017-11-03',
                  'platforms': [1, 2, 3],
                  'description': `Call of Duty: WWII is a first-person shooter video game developed by
                   Sledgehammer Games and published by Activision. It is the fourteenth main installment in
                    the Call of Duty series and was released worldwide on November 3, 2017 for Microsoft
                     Windows, PlayStation 4 and Xbox One. It is the first title in the series to be set
                      primarily during World War II since Call of Duty: World at War in 2008.[2] The game is
                       set in the European theatre, and is centered around a squad in the 1st Infantry
                        Division, following their battles on the Western Front, and set mainly in the
                         historical events of Operation Overlord; the multiplayer expands to different fronts not seen in the campaign.`
                },
                {
                  'id': 6,
                  'image': 'uncharted.jpg',
                  'name': 'Uncharted: The Lost Legacy',
                  'releaseDate': '2017-08-22',
                  'platforms': [2],
                  'description': `Uncharted: The Lost Legacy is an action-adventure game developed by Naughty Dog and
                   published by Sony Interactive Entertainment. Released in August 2017 for the PlayStation 4,
                    it is a standalone expansion to the Uncharted series, and is the first game not to
                     feature protagonist Nathan Drake. The game follows fortune hunter Chloe Frazer, who seeks
                      the Tusk of Ganesh in the mountains of India in the midst of a civil war, with the help
                       of ex-mercenary Nadine Ross and Nathan's brother Sam Drake. The game is played from a
                        third-person perspective; players use firearms, and can use melee combat and stealth
                         to defend against hostile enemies. Players solve puzzles, incorporating several
                          platformer elements to advance the narrative, and navigate the game world on foot or by vehicle.`
                },
                {
                  'id': 7,
                  'image': 'assassins_creed_origin.jpg',
                  'name': `Assassin's Creed: Origins`,
                  'releaseDate': '2017-10-27',
                  'platforms': [1, 2, 3],
                  'description': `Assassin's Creed Origins is an action-adventure video game developed by
                   Ubisoft Montreal and published by Ubisoft. It is the tenth major installment in the
                    Assassin's Creed series and the successor to 2015's Assassin's Creed Syndicate.
                     It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on
                      October 27, 2017. The game is set in Egypt during the near end of the Ptolemaic period
                       (49-47 BC) and recounts the secret fictional history of real-world events. The story
                        explores the origins of the centuries-long conflict between the Brotherhood of
                         Assassins, who fight for peace by promoting liberty, and The Order of the Ancients—forerunners
                          to the Templar Order—who desire peace through the forced imposition of order.`
                },
                {
                  'id': 8,
                  'image': 'crash.jpg',
                  'name': 'Crash Bandicoot N. Sane Trilogy',
                  'releaseDate': '2017-06-30',
                  'platforms': [2],
                  'description': `Crash Bandicoot N. Sane Trilogy is a platform video game compilation
                   developed by Vicarious Visions and published by Activision for PlayStation 4. It is a
                    collection of remasters of the first three titles in the Crash Bandicoot series: Crash
                     Bandicoot, Cortex Strikes Back, and Warped, which were originally developed by Naughty
                      Dog for PlayStation in the 1990s. The game was released on June 30, 2017, receiving
                       generally favorable reviews from critics, who praised the game's faithfulness to the
                        original trilogy. By the end of 2017, it had sold over two million units worldwide.`
                },
                {
                  'id': 9,
                  'image': 'battlefrontII.jpg',
                  'name': 'Star Wars Battlefront II',
                  'releaseDate': '2017-11-17',
                  'platforms': [1, 2, 3],
                  'description': `Star Wars Battlefront II is an action shooter video game based on the
                   Star Wars film franchise. It is the fourth major installment of the Star Wars:
                    Battlefront series and seventh overall, and a sequel to the 2015 reboot of the series.
                     It was developed by EA DICE, in collaboration with Criterion Games and Motive Studios,
                      and published by Electronic Arts. The game was released worldwide on November 17,
                       2017 for PlayStation 4, Xbox One, and Microsoft Windows.`
                },
                {
                  'id': 10,
                  'image': 'farpoint.jpg',
                  'name': 'Farpoint',
                  'releaseDate': '2017-05-16',
                  'platforms': [2],
                  'description': `Farpoint is a virtual reality first-person shooter set on a hostile
                   alien world. It can be played with the PS VR Aim Controller.[1] It also features
                    online cooperative play, and includes a single-player campaign.`
                },
                {
                  'id': 11,
                  'image': 'south_park.jpg',
                  'name': 'South Park: The Fractured But Whole',
                  'releaseDate': '2017-10-17',
                  'platforms': [1, 2, 3],
                  'description': `South Park: The Fractured but Whole is a 2017 role-playing video game
                   developed by Ubisoft San Francisco and published by Ubisoft in collaboration with
                    South Park Digital Studios. Based on the American adult animated television series
                     South Park, it is the sequel to the 2014 video game South Park: The Stick of Truth.
                      The game's narrative occurs one day after the events of its predecessor; it follows
                       the New Kid, who has recently moved to South Park and becomes involved in an epic
                        roleplay involving two rival superhero factions vying to create their own
                         superhero media franchises. The superheroes' game unintentionally uncovers a
                          conspiracy to raise crime in the town, bringing them into conflict with
                           supervillains, genetically engineered monsters, the police, crime families, and the new kingpin of crime.`
                },
                {
                  'id': 12,
                  'image': 'drawn_to_death.jpg',
                  'name': 'Drawn to Death',
                  'releaseDate': '2017-04-04',
                  'platforms': [2],
                  'description': `Drawn to Death is a third-person shooter combined with a brawler
                   arena multiplayer video game for PlayStation 4, developed by David Jaffe's studio
                    The Bartlet Jones Supernatural Detective Agency and SIE San Diego Studio, and
                     released on April 4, 2017. It allows four-player multiplayer in an arena shooter
                      type setting and is reported to be set inside the pages of a teenager's notebook,
                       as such, it features a hand-drawn-looking visual style.`
                },
                {
                  'id': 13,
                  'image': 'ark_survival_evolved.jpg',
                  'name': 'Ark: Survival Evolved',
                  'releaseDate': '2017-08-29',
                  'platforms': [1, 2, 3],
                  'description': `Ark: Survival Evolved (stylized as ΛRK) is an action-adventure
                   survival video game developed by Studio Wildcard in collaboration with Instinct
                    Games, Efecto Studios, and Virtual Basement. It was released in August 2017
                     for PlayStation 4, Xbox One, Microsoft Windows, OS X and Linux. In the game,
                      players must survive being stranded on an island filled with roaming dinosaurs
                       and other prehistoric animals, natural hazards, and potentially hostile human players.`
                },
                {
                  'id': 14,
                  'image': 'WolfensteinII.jpg',
                  'name': 'Wolfenstein II: The New Colossus',
                  'releaseDate': '2017-10-27',
                  'platforms': [1, 2, 3],
                  'description': `Wolfenstein II: The New Colossus is an action-adventure
                   first-person shooter video game developed by MachineGames and published
                    by Bethesda Softworks. It was released on 27 October 2017 for Microsoft
                     Windows, PlayStation 4, and Xbox One, and is scheduled for release in 2018
                      for Nintendo Switch. The game is the eighth main entry in the Wolfenstein
                       series and the sequel to 2014's Wolfenstein: The New Order, set in an
                        alternate history 1961 following the Nazi victory of the Second World
                         War. The story follows war veteran William B.J. Blazkowicz and his
                          efforts to fight against the Nazi regime in America.`
                }
              ],
              'platforms': [
                {
                  'id': 1,
                  'name': 'Xbox One'
                },
                {
                  'id': 2,
                  'name': 'PlayStation 4'
                },
                {
                  'id': 3,
                  'name': 'PC'
                }
              ]
        };
    }
}
