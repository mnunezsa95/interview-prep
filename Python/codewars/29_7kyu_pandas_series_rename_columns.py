# ------------------------------------------------------------------------------------------------ #
#                                 Pandas Series 101: Rename Columns                                #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 7 kyu

Input parameters
1. pandas.DataFrame object
2. sequence

Task
Your function must return a new pandas.DataFrame object with same data than the original input but now its column names are the elements of the sequence. You must not modify the original input.

The number of columns of the input will always be equal to the size of the sequence.

Examples
   0  1  2
0  1  2  3
1  4  5  6

names = ['A', 'B', 'C']
   A  B  C
0  1  2  3
1  4  5  6
"""
import pandas as pd


def rename_columns(df, names):
    new_df = pd.DataFrame(df.values, columns=names)
    return new_df


df_input = pd.DataFrame(data=[[1, 2, 3], [4, 5, 6]], columns=list("123"))
names = ("A", "B", "C")
print(rename_columns(df_input, names))
