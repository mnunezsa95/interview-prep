/* ---------------------------------------------------------------------------------------------- */
/*                                           Fake Binary                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8kyu

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above 
with '1'. Return the resulting string.

Note: input will never be an empty string
*/

/*
You are given a table 'fakebin' with column 'x', return a table with column 'x' and your result 
in a column named 'res'.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
SELECT x, replace(
  replace(
    replace(
      replace(
        replace(
          replace(
            replace(
              replace(
                replace(
                  replace( x, '4', '0')
                  ,'3', '0')
                , '2', '0')
              , '1', '0')
            , '0', '0')
          , '5', '1')
        , '6', '1')
      , '7', '1')
    , '8', '1')
  , '9', '1') AS res
FROM fakebin


/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
SELECT 
    x, 
    TRANSLATE(x, '123456789', '000011111') AS res 
FROM 
    fakebin