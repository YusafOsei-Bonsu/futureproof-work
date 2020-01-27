import unittest
from fizzbuzz import fizzbuzz 

class TestFizzbuzz(unittest.TestCase):
    def test_fizzbuzz(self):
        result = fizzbuzz(30)
        self.assertEqual(result, "FizzBuzz")
    
    def test_fizz(self):
        result = fizzbuzz(9)
        self.assertEqual(result, "Fizz")

    def test_buzz(self):
        result = fizzbuzz(10)
        self.assertEqual(result, "Buzz")

    def test_else(self):
        result = fizzbuzz(98)
        self.assertEqual(result, 98)
    
if __name__ == "__main__":
    unittest.main()