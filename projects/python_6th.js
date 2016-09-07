Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 26 2016, 10:47:25)
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "copyright", "credits" or "license()" for more information.
>>> WARNING: The version of Tcl/Tk (8.5.9) in use may be unstable.
Visit http://www.python.org/download/mac/tcltk/ for current information.

>>> magic = [4, 5, 6, 9, 12]
>>> pick = input("what is your pick")
what is your pick 3
>>> if pick in magic:
	print("correct")
    if pick not in magic

SyntaxError: unindent does not match any outer indentation level
>>>  if pick in magic:
	print("correct")
    if pick not in magic:

SyntaxError: unexpected indent
>>>  if pick in magic:
	print("correct")
     if pick not in magic:

SyntaxError: unexpected indent
>>> 
