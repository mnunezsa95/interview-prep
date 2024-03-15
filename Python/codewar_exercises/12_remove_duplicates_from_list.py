# ------------------------------------------------------------------------------------------------ #
#                                  12. Remove duplicates from list                                 #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 8 kyu

Define a function that removes duplicates from an array of non negative numbers and returns it as 
a result. The order of the sequence has to stay the same.

Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
"""


# ------------------------------------------ SOLUTION 1 ------------------------------------------ #
def distinct(seq):
    res = []
    [res.append(x) for x in seq if x not in res]
    return res


print(distinct([1, 1, 1, 2, 3, 4, 5]))


# ------------------------------------------ SOLUTION 2 ------------------------------------------ #
def distinct2(seq):
    return list(set(seq))


print(distinct2([1, 1, 1, 2, 3, 4, 5]))
