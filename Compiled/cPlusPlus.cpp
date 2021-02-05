// https://github.com/MatthijsReyers/SyntaxHighlightingTests
// Contributors: [Matthijs Reyers]

// Different types of imports/includes.
#include <iostream>
#include <vector>
#include "ncurses.h"

// Simple function with optional paramter.
float simpleFunction(int parameter, int optional = 5)
{
    return float(parameter * optional);
}

// Use of a template and array definition.
std::vector<int> numbers = {1,2,3,4,5};

// Main entry point for application.
int main(int argc, const char *argv[])
{
    // For each loop.
    for (auto number : numbers)
    {
        
    }
    
    return false;
}
