# A. (ints and floats)
age = 24
print(type(age))
age = float(age)
print(type(age))
print()

# B. (strings)
sentence = 'I\'m learning python for the very first time this morning! We\'re having a great time.'
print(sentence)

capitalised_sentence = sentence.upper() # Capitalising all words 
print(capitalised_sentence) 

first_sentence = sentence[:57]
second_sentence = sentence[-26:]
print(first_sentence)
print(second_sentence)
print()

# C. (lists)
three_nums = [3, 2, 1]
print("First Element: ", three_nums[0])
three_nums[2] = 24 # Changing the third element
print("Updated Third Element: ", three_nums[-1])
print()

# D. (tuples)
friends = ("Shaquille", "Pio", "James")
print("Last element of tuple: ", friends[-1]) # Printing the last element of the tuple

if "hello" not in friends: # Checks if "hello" is in "friends"
    print("Hello is not in 'friends'")

print()

# E. (dictionary)
about_me = {
    "name": "Yusaf Osei-Bonsu",
    "python_skill_lvl": 4,
    "coffee": False
}
print("Name: ", about_me["name"])
about_me["python_skill_lvl"] += 1 # Updating skill level in Python
print("Updated Python skill lvl: ", about_me["python_skill_lvl"])
about_me["coding_languages"] = ("Java", "HTML", "CSS", "JavaScript", "C++") # Adding a tuple of languages that I know
print()

## F. (sets)
favourite_foods = {"chicken fried rice", "jellof rice", "spicy hot wings"}
# replacing CFR with biyirani
favourite_foods.remove("chicken fried rice") 
favourite_foods.add("biyirani")
print(favourite_foods)
# The number of items in the set
print("Set length: ", len(favourite_foods))