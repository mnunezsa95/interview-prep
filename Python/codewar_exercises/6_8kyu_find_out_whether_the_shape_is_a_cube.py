# --------------------------------------------------------------------------------------------------- #
#                               6. Find out whether the shape is a cube                               #
# --------------------------------------------------------------------------------------------------- #

"""
Difficulty: 8 kyu

To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a 
single side! It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.
Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
"""


def cube_checker(volume, side):
    if volume <= 0 or side <= 0:
        return False
    elif volume / side == side * side:
        return True
    else:
        return False


print(cube_checker(27, 3))
print(cube_checker(8, 2))
print(cube_checker(8, 3))
print(cube_checker(12, -1))
print(cube_checker(125, -5))
print(cube_checker(125, 5))
print(cube_checker(0, 0))
