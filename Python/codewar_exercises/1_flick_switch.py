# ------------------------------------------------------------------------------------------------ #
#                                          1. Flick Switch                                         #
# ------------------------------------------------------------------------------------------------ #

"""
Diffficulty: 8 kyu

Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
-- ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
-- ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
-- ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes
-- "flick" will always be given in lowercase.
-- A list may contain multiple flicks.
-- Switch the boolean value on the same element as the flick itself.
"""


def flick_switch(lst):
    boolean = True
    bool_list = []
    for item in lst:
        if item == "flick" and boolean:
            boolean = False
        elif item == "flick" and not boolean:
            boolean = True
        bool_list.append(boolean)
    return bool_list


print(flick_switch(["codewars", "flick", "code", "wars"]))
print(flick_switch(["flick", "chocolate", "adventure", "sunshine"]))
print(flick_switch(["john, smith, susan", "flick"]))
