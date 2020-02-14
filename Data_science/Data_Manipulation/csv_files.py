import pandas as pd

data = pd.read_csv('car_data.csv')
data.head()
data.tail()
data.info()
print(data)

# "data.fillna(x)" - Drops in default value x

# "data = pd.to_numeric(extr)" - Converts the data into another type (e.g. string to int)