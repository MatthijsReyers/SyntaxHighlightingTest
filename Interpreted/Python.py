# https://github.com/MatthijsReyers/SyntaxHighlightingTests
# Contributors: [Matthijs Reyers]

import math
from random import random
from threading import Thread as th

class Shape:
    def __init__(self):
        self.name = "generic shape"

    def getCircumference(self) -> int:
        raise NotImplementedError
    
    def getArea(self) -> int:
        raise NotImplementedError

class Square(Shape):
    name = "Box"

    def __init__(self, width: int, height: int):
        super().__init__(self)
        self.dimentions = (width, height)

    @staticmethod
    def getName():
        return Square.name

    def getCircumference(self) -> int:
        return sum(list(self.dimentions)) * 2

    def getArea(self) -> int:
        return self.dimentions[0] * self.dimentions[1]

if __name__ == "__main__":
    
    for i in range(55):
        print("{}".format(i))

    while False:
        pass