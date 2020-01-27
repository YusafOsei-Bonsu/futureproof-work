hometown = "London"

hometown_stats = {
    "population": 8900000,
    "land_area": 1572,
    "birthplace": {
        "england": 79.20,
        "sri lanka": 1.90,
        "india": 1.70,
        "ireland": 1.20,
        "scotland": 1.10,
        "wales": 0.70,
        "nigeria": 0.70,
        "south america": 0.60,
        "south africa": 0.50,
        "ghana": 0.50,
        "other": 11.90
    },
    "languages": {
        "english": 91.60,
        "tamil": 1.50,
        "polish": 0.90,
        "portuguese": 0.50,
        "gujarati": 0.40,
        "urdu": 0.30,
        "german": 0.30,
        "bengali": 0.20,
        "nepalese": 0.20,
        "turkish": 0.20,
        "other": 3.90
    },
    "religion": {
        "christian": 57.60,
        "atheist": 24.80,
        "hindu": 4.30,
        "muslim": 3.50,
        "buddhist": 0.90,
        "jewish": 0.20,
        "sikh": 0.10,
        "agnostic": 0.10,
        "other": 8.50
    }
}

# Shows the pop density of a town
def show_population_density(stats, town="London"):
    population_density = stats["population"] / stats["land_area"]
    print("The population density of " + town + " is " + str(population_density))

show_population_density(hometown_stats, hometown)