import random

# All the possible balls
chest = [
    {"colour": "yellow", "point": 1}, {"colour": "yellow", "point": 1}, {"colour": "yellow", "point": 1},  {"colour": "yellow", "point": 1},  {"colour": "yellow", "point": 1}, 
    {"colour": "yellow", "point": 1},{"colour": "red", "point": 2}, {"colour": "red", "point": 2}, {"colour": "red", "point": 2}, {"colour": "green", "point": 4}, 
    {"colour": "green", "point": 4}, {"colour": "green", "point": 4}, {"colour": "orange", "point": 5}, {"colour": "orange", "point": 5}, {"colour": "purple", "point": 10}
]

def prize(score):
    print("Score: " + str(score))
    if score >= 22:
        print("Congratulations! You've won a big prize!")
    elif score >= 15 and score < 22:
        print("Nice one! You've won a small prize!")
    elif score < 15:
        print("Mission failed! we'll get'em next time #COD")

def play_game():
    score = 0

    for i in range(5):
        # A randomly-selected ball
        ball = chest.pop(random.randint(0, (len(chest)-1)))
        # The point's ball is added to the user's score
        score += ball["point"]
    
    prize(score)

play_game()