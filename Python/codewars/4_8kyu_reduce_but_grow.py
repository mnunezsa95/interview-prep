# ------------------------------------------------------------------------------------------------ #
#                                   4. Beginner - Reduce but Grow                                  #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 8 kyu

Given a non-empty array of integers, return the result of multiplying the values together in order. 

Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
"""


def grow(arr):
    res = 1
    for val in arr:
        res *= val
    return res


print(grow([1, 2, 3]))
print(grow([2, 2, 2, 2, 2, 2]))
