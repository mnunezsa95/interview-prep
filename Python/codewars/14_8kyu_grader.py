# ---------------------------------------------------------------------------------------------------- #
#                                              14. Grader                                              #
# ---------------------------------------------------------------------------------------------------- #

"""
Difficulty: 8 kyu

Create a function that takes a number as an argument and returns a grade based on that number.

Score	                                    Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	                            "A"
0.8 or greater	                          	"B"
0.7 or greater	                            "C"
0.6 or greater	                            "D"

Examples:
- grader(0)   should be "F"
- grader(1.1) should be "F"
- grader(0.9) should be "A"
- grader(0.8) should be "B"
- grader(0.7) should be "C"
- grader(0.6) should be "D"
"""


def grader(x):
    if 0.9 <= x <= 1:
        return "A"
    elif 0.8 <= x < 0.9:
        return "B"
    elif 0.7 <= x < 0.8:
        return "C"
    elif 0.6 <= x < 0.7:
        return "D"
    else:
        return "F"


print(grader(0.7))
