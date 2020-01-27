# Adds two numbers together
def adder(num1, num2): 
    return num1 + num2
print(adder(5, 6))

# Displays what the person is purchasing
def buying_confirmation(item_name, num):
    sentence = "You're buying " + str(num) + " " + item_name + 's'
    return sentence
print(buying_confirmation("donut", 10))

# Calculates the volume of a shape
def shape_volume(height = 1, width = 1, depth = 1):
    return height * width * depth
print(shape_volume(1, 2, 3))

# Calculates the shape volume and area
def shape_measurements(height = 1, width = 1, depth = 1):
    shape_volume = height * width * depth
    shape_area = height * width
    return shape_volume, shape_area
volume, area = shape_measurements(4,5,6)
print("Shape Volume: " + str(volume))
print("Shape Area: " + str(area))