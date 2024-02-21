# ------------------------------------------------------------------------------------------------ #
#                             2. Sum without highest and lowest number                             #
# ------------------------------------------------------------------------------------------------ #


"""
Difficulty: 8 kyu

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element (by value, 
not by index!).

The highest or lowest element respectively is a single element at each edge, even if there are more 
than one with the same value.

Mind the input validation.
Example
-- { 6, 2, 1, 8, 10 } => 16
-- { 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is 
an empty list or a list with only 1 element, return 0.
"""


def sum_array(arr):
    if arr is None or len(arr) == 0 or len(arr) == 1:
        return 0
    arr.remove(min(arr))
    arr.remove(max(arr))
    return sum(arr)


print(sum_array([]))
print(sum_array([3]))
print(sum_array([-6, -20, -1, -10, -12]))
