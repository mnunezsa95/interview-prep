"""
Difficulty: 7 kyu

In this kata, your task is to create a function that takes a single list as an argument and returns a flattened list. The input list will have a maximum of one level of nesting (list(s) inside of a list).

# no nesting
- [1, 2, 3]

# one level of nesting
- [1, [2, 3]]


Examples
- flatten_me(['!', '?'])
--- ['!', '?']

- flatten_me([1, [2, 3], 4])
---[1, 2, 3, 4]

- flatten_me([['a', 'b'], 'c', ['d']])
--- ['a', 'b', 'c', 'd']

- flatten_me([[True, False], ['!'], ['?'], [71, '@']]) 
--- [True, False, '!', '?', 71, '@']
"""


def flatten_me(input_list):
    result = []
    for element in input_list:
        if isinstance(element, list):
            result.extend(element)
        else:
            result.append(element)
    return result


print(flatten_me([[True, False], ["!"], ["?"], [71, "@"]]))
print(flatten_me([["a", "b"], "c", ["d"]]), ["a", "b", "c", "d"])
print(flatten_me([1, [2, 3], 4]), [1, 2, 3, 4])
