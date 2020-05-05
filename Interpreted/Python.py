# https://github.com/MatthijsReyers/SyntaxHighlightingTests
# Contributors: [Matthijs Reyers, Serge Johanns]

import asyncio
from abc import ABCMeta, abstractmethod

async def thing():
    print("Starting up FizzBuzzsystem...")
    await asyncio.sleep(1)

asyncio.run(thing())

class Checker(metaclass=ABCMeta):
    @abstractmethod
    def check(self, *args, **kwargs) -> bool:
        pass

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

if __name__ == "__main__":
    results = {i:fizzbuzz(i) for i in range(100)}
    for i, val in results.items():
        print(i, "->", val)
    print("Unchanged:")
    print([i for i, val in results.items() if str(i) == val])