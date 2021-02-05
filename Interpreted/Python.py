# https://github.com/MatthijsReyers/SyntaxHighlightingTests
# Contributors: [Matthijs Reyers, Serge Johanns]

# Different types of imports/includes.
import asyncio
from abc import ABCMeta, abstractmethod

# Simple function with optional paramter.
def simpleFunction(parameter: int, optional: int = 5) -> float:
    return float(parameter * optional)

# Use of built-in functions.
print("Hello world")
input("Choose a number:")

# Use of regular functions.
simpleFunction(3,4)

class Checker(metaclass=ABCMeta):
    @abstractmethod
    def check(self, *args, **kwargs) -> bool:
        return False

class NumberDivisibilityChecker(Checker):
    def check(self, a: int, b: int) -> bool:
        return a % b == 0

number_divisibility_checker = NumberDivisibilityChecker()

FIZZ, BUZZ, *_ = [3, 5, "this", "part", "is", "ignored"]
def fizzbuzz(n) -> str:
    """Return the fizzbuzz stringification of a number."""
    return (("fizz" if number_divisibility_checker.check(n, FIZZ) else "")
          + ("buzz" if number_divisibility_checker.check(n, BUZZ) else "")
          or str(n))

# Lists and list Comprehension.
numbers = [1,2,3,4,5]
numbers_2 = [i for i in range(1,100) if i%2 == 1]

# Main entry point for application.
if __name__ == "__main__":

    # For each loop.
    for number in numbers:
        pass
    results = {i:fizzbuzz(i) for i in range(100)}
    
    for i, val in results.items():
        print(f"{i}->{val} \n")
    
    print("Unchanged:")
    print([i for i, val in results.items() if str(i) == val])