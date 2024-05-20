# ------------------------------------------------------------------------------------------------ #
#                                    String Reverse Slicing 101                                    #
# ------------------------------------------------------------------------------------------------ #

"""
You'll be given a string of characters as an input. Complete the function that returns a list of 
strings: 
- (a) in the reverse order of the original string, and 
- (b) with each successive string starting one character further in from the end of the original 
string.

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

Examples
- '123'   ==>  ['321', '21', '1']
- 'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
"""


# ------------------------------------------ SOLUTION 1 ------------------------------------------ #
def reverse_slice(s):
    lst = list(s)
    lst.reverse()
    reversedStr = "".join(lst)
    res = []
    for i in range(len(reversedStr)):
        res.append(reversedStr[i : len(s)])
    return res


print(reverse_slice("abcde"))


# ------------------------------------------ SOLUTION 2 ------------------------------------------ #
def reverse_slice2(s):
    reversedStr = s[::-1]
    res = []
    for i in range(len(reversedStr)):
        res.append(reversedStr[i : len(s)])
    return res


print(reverse_slice2("abcde"))

# ------------------------------------------ SOLUTION 3 ------------------------------------------ #


def reverse_slice3(s):
    s = s[::-1]
    return [s[i:] for i in range(len(s))]


print(reverse_slice3("abcde"))

# ------------------------------------------ SOLUTION 4 ------------------------------------------ #


def reverse_slice4(s):
    return [s[::-1][i:] for i in range(len(s))]


print(reverse_slice4("abcde"))
