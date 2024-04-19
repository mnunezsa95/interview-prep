# -------------------------------------------------------------------------------------------------- #
#                                          7. Invert Values                                          #
# -------------------------------------------------------------------------------------------------- #

"""
Difficulty: 8 kyu

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and 
the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
"""


def invert(lst):
    res = []
    for num in lst:
        if num > 0:
            res.append(-num)
        else:
            res.append(num * -1)
    return res


print(invert([1, 2, 3, 4, 5]))
print(invert([1, -2, 3, -4, 5]))
print(invert([]))


# SOLUTION 2
def invert2(lst):
    res = [-num for num in lst]
    return res


print(invert2([1, 2, 3, 4, 5]))
print(invert2([1, -2, 3, -4, 5]))
print(invert2([]))
