from sklearn import datasets
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics
import pickle

# Finding the source (i.e. Iris) & creating the model
dataset = datasets.load_iris()
model = DecisionTreeClassifier()
model.fit(dataset.data, dataset.target)
print(model)

expected = dataset.target # Expected output
predicted = model.predict(dataset.data) # Predicted output
print(metrics.classification_report(expected, predicted))
print(metrics.confusion_matrix(expected, predicted))

# Split arrays/matrices into random train and test subsets
features_train, features_test, classifier_train, classifier_test = train_test_split(dataset.data, dataset.target)
# feature (data) & classifier (method of identification)
model.fit(features_train, classifier_train)
print(model)
predicted = model.predict(features_test) # By confusion, we mean how many guesses the metric took.
print(metrics.classification_report(classifier_test, predicted))
print(metrics.confusion_matrix(classifier_test, predicted))

decision_tree_pkl_filename = "decision_tree_classifier_20200123.pkl"
decision_tree_model_pkl = open(decision_tree_pkl_filename, "wb")
pickle.dump(model, decision_tree_model_pkl)
decision_tree_model_pkl.close()
decision_tree_model_pkl = open(decision_tree_pkl_filename, "rb")
decision_tree_model = pickle.load(decision_tree_model_pkl)