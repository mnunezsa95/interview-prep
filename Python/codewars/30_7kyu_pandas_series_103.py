# ------------------------------------------------------------------------------------------------ #
#            Pandas Series 103: Filter Rows From DataFrames That Don't Satisfy Condition           #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 7 kyu

Input parameters
- dataframe: pandas.DataFrame object
- col: target column
- func: filter function

Task
- Your function must return a new pandas.DataFrame object with the same columns as the original 
input. However, include only the rows whose cell values in the designated column evaluate to False 
by func.

Input DataFrame will never be empty. The target column will always be one of the dataframe columns. 
Filter function will be a valid one. Index value must remain the same.

Examples
- Input
   A  B  C
0  1  2  3
1  4  5  6
2  6  3  2
3  1  1  7

col = "A"
func = lambda x: x<=2

- Output
   A  B  C
1  4  5  6
2  6  3  2

"""

import pandas as pd

df = pd.DataFrame(
    data=[[1, 2, 3], [4, 5, 6], [6, 3, 2], [1, 1, 7]], columns=list("ABC")
)
column = "A"
func = lambda x: x <= 2


# ------------------------------------------ Solution 1 ------------------------------------------ #
def filter_dataframe(dataframe, col, func):
    if col not in dataframe.columns:
        raise ValueError(f"Column '{col}' is not present in the DataFrame.")

    mask = dataframe[col].apply(func)
    return dataframe[~mask]


# ------------------------------------------ Solution 2 ------------------------------------------ #
def filter_dataframe2(dataframe, col, func):
    if col not in dataframe.columns:
        raise ValueError(f"Column '{col}' is not present in the DataFrame.")

    mask = dataframe[col].apply(func)
    return dataframe[mask == False]


print(filter_dataframe(df, column, func))
print(filter_dataframe2(df, column, func))
