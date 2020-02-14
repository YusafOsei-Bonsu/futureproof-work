import json 
import requests # http requests
from json_convert_to_dict import convert_to_dict

# Turns Python object into a JSON object
datastore = {"name": "Yusaf", "age": 24, "Occupation": "Trainee Software Engineer"}
my_dictionary = json.dumps(datastore) 
print(my_dictionary)
print(type(my_dictionary), "\n")

# Turns "json_dict" into a Python object
json_dict = '{"name": "Yusaf", "age": 24, "Occupation": "Trainee Software Engineer"}'
reverted = json.loads(json_dict) 
print(reverted)
print(type(reverted), "\n")

# # Reads JSON content from a file
# with open("data.txt") as json_file:
#     data = json.load(json_file)

# # Writes JSON into a file
# with open("data.txt", w) as json_file:
#     json.dumps(data, json_file)

response = requests.get("https://jsonplaceholder.typicode.com/todos") # Gets todos data
todos = json.loads(response.text)
print(todos)
print(type(todos), "\n")

# Because JSON isn't a built-in data type in Python, 
# the only way to use JSON objects Python files is to convert a Python object into JSON.
py_object = {
    "forename": "Yusaf",
    "surname": "Osei-Bonsu",
    "age": 35,
    "favourite_food": "custard"
}
json_object = json.dumps(py_object)
print(json_object)
print(type(json_object))