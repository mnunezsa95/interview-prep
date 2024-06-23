# ------------------------------------------------------------------------------------------------ #
#                                         Go: Stone Scoring                                        #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 7 kyu

One traditional method of determining the winning side of a Go match is called stone scoring. This method has some flaws but is algorithmically the easiest one. Therefore, we will start of with this method.

Your puzzle inputs are list of lists that represents a Go board like:

board = [
    ["W","W","W","B","B","B"],
    ["W","W","W","W","B","B"],
    ["W","W","W","B","B","B"],
    ["W","X","W","B","B","B"],
    ["X","W","B","B","B","B"],
    ["W","W","B","X","B","X"]
]
"B"s represent fields with black stones, "W"s represent fields with white stones, and "X"s represent empty fields. Your task is to determine the winning side, i.e., the side with more stones on the board. Then, return either "W" or "B" and the number of the side's stones as a tuple depending on which side has more stones on the board. If there is a tie, return a "T" and the number of stones of one side as a tuple, e.g. ("T", 32). Empty fields, i.e., "X"s, are not considered in this method for determining the winning side. Thus, they can be ignored.

In the example, "B" has 17 stones on the boards whereas "W" only has 15. Hence, the black side won and ("B", 17) should be returned.

Be aware that the board can vary in size but are at least of size 3x3!
"""


def determine_winner(board):
    board = sum(board, [])  # Flatten array
    counts = {"W": 0, "X": 0, "B": 0}  # Create dict for values
    max_score = float("-inf")  # Set max score to high value
    winners = []
    for char in board:
        counts[char] += 1
    counts["X"] = 0

    for player, score in counts.items():
        if score > max_score:
            max_score = score
            winners = [player]
        elif score == max_score:
            winners.append(player)

    if len(winners) == 1:
        return (winners[0], max_score)
    else:
        return ("T", max_score)


print(
    determine_winner(
        [
            ["W", "W", "W", "B", "B", "B"],
            ["W", "W", "W", "W", "W", "B"],
            ["W", "W", "W", "B", "B", "B"],
            ["W", "X", "W", "W", "B", "B"],
            ["X", "W", "B", "B", "B", "B"],
            ["W", "W", "B", "X", "B", "X"],
        ]
    )
)
