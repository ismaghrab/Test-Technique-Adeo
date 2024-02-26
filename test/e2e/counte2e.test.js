import { execSync } from 'child_process';

describe('Testing app.js functionality', () => {
    it('shows countries, people and animals with count in their name', () => {
        const consoleOutput = execSync('node app.js --count', { encoding: 'utf-8' });
        expect(consoleOutput).toContain('[\n' +
            '  {\n' +
            '    "name": "Dillauti [5]",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Winifred Graham [6]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Anoa"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Duck"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Narwhal"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Badger"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cobra"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Crow"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Blanche Viciani [8]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Barbet"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rhea"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Snakes"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Antelope"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Echidna"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Crow"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Guinea Fowl"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Deer Mouse"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Philip Murray [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Sand Dollar"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Buzzard"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Elephant"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Xenops"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Dormouse"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Anchovy"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Dinosaur"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Bobby Ristori [9]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Kowari"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Caecilian"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Common Genet"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Chipmunk"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Aardwolf"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Przewalski\'s Horse"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Badger"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Sand Cat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Linne\'s Two-toed Sloth"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Louise Pinzauti [5]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Manta Ray"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Nubian Ibex"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Warbler"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Duck"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Mice"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "Tohabdal [8]",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Effie Houghton [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Zebra"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Ring-tailed Lemur"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Fly"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Blue Iguana"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Emu"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "African Wild Ass"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Numbat"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Essie Bennett [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Aldabra Tortoise"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Patagonian Toothfish"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Giant Panda"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Goat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Quahog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Collared Lemur"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Aldabra Tortoise"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Owen Bongini [5]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Zebrashark"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Dogs"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Mouse"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Numbat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "African Wild Dog"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Alexander Fleury [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Gelada"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rattlesnake"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rabbit"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Aardvark"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Duck"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Courser"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Woodpecker"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Curtis Fuchs [6]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Squirrel"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Falcon"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Lobe Coral"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Camel"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Broadclub Cuttlefish"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Maud Lorenzo [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Bush Dog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Sea Urchin"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Gayal"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Tortoise"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Meerkat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Lion"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Gecko"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Linnie Lamb [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Burro"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "African Wild Dog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Slender Snipe Eel"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Red Panda"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Baby Doll Sheep"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "California Sea Lion"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rabbits"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Randall Benoît [5]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Chameleons"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Bee-eater"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "King Vulture"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Giant Isopod"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Sand Cat"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "Uzuzozne [7]",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Harold Patton [8]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Bearded Dragon"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Chicken"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Sand Cat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Hedgehog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Collared Lemur"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Frogmouth"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Raccoon dog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Shortfin Mako Shark"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Millie Lapini [8]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Bearded Dragon"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Peafowl"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Aardvark"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cows"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Crane Fly"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rock Hyrax"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Gerbils"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Brown Bear"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Lillian Calamandrei [8]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Rats"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Macaw"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Gazelle"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Gazelle"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Alpaca"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Snakes"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Yellowjacket"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Stickleback"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Lina Allen [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Rabbit"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cats"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Jaguarundi"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Duck"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Caribbean Flamingo"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Oyster"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Agouti"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Georgia Hooper [8]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Grasshopper"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Polar Bear"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rabbit"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Loggerhead Turtle"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rhinoceros"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "African Wild Dog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Jackal"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Zebu"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Lillie Abbott [6]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "John Dory"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Gayal"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Hawk"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Umbrella Squid"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Hyrax"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Henkel\'s Leaf-tailed Gecko"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Philip Davis [8]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Mini Donkey"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Flatback Turtle"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rabbit"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Zebra"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Rhea"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Leafy Seadragon"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Bat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Caterpillar"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "Zuhackog [7]",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Elva Baroni [6]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Silkworm"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Zebu"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "King Vulture"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Zebrashark"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Ostrich"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Waxwing"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Johnny Graziani [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Dunnart"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cotinga"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Carp"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Bat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Olive Sea Snake"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Caterpillar"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Jackal"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Herman Christensen [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Death Adder"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Pronghorn"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Carp"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Jaguar"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Anteater"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Zebu"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Red Ruffed Lemur"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Fannie Ancillotti [8]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Silkworm"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Horses"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Anaconda"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Guinea"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Bird"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Aardwolf"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Crane Fly"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Caterpillar"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Lawrence Camiciottoli [9]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Bustard"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Numbat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Gecko"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Northern Red Snapper"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Monkfish"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Birds"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Caterpillar"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Mule"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Marion Landi [6]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Tortoise"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Mule"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Hedgehog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Geckos"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Sheep"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Emu"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Lou de Bruin [5]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Boa"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Death Adder"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Okapi"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Fly"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Horses"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "Satanwi [5]",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Elmer Kinoshita [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Weasel"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Birds"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Snakes"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Anteater"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Groundhog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Ant"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Courser"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Cora Howell [7]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Rhea"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Sponge"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cat"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "African Wild Dog"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Snakes"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Starling"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Pronghorn"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Ernest Conte [5]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Bird"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Colugo"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Grison"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Pot Bellied Pig"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Asian Elephant"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Dennis Franci [9]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Grouse"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Hapuka"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Cheetah"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Donkey"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Turkey"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Carp"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Octopus"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Silkworm"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Bearded Dragon"\n' +
            '          }\n' +
            '        ]\n' +
            '      },\n' +
            '      {\n' +
            '        "name": "Anthony Bruno [6]",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Caracal"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Anteater"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Kiwa Hirsuta"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Zooplankton"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Tarantula"\n' +
            '          },\n' +
            '          {\n' +
            '            "name": "Oryx"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  }\n' +
            ']\n');
    });
});
