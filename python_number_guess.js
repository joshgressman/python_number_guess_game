Type "copyright", "credits" or "license()" for more information.
>>> WARNING: The version of Tcl/Tk (8.5.9) in use may be unstable.
Visit http://www.python.org/download/mac/tcltk/ for current information.

>>> numbers = [1,2,3,4,5,6,7,8,9,10]
>>> 10 in numbers
True
>>> 11 in numbers
False
>>> 11 not in numbers
True
>>> if not 3 > 5"
SyntaxError: EOL while scanning string literal
>>> if not 3 > 5:
	print("This is weird!!")


This is weird!!
>>> # if not runs the same as ! in JS
>>>
>>> magic_numbers = [3, 9]
>>> user_number = 4
>>> user_number in magic_number
Traceback (most recent call last):
  File "<pyshell#13>", line 1, in <module>
    user_number in magic_number
NameError: name 'magic_number' is not defined
>>> user_number in magic_numbers
False
>>> if user_number not in magic_numbers:
	print("Your number is not magic please try again!")


Your number is not magic please try again!
>>> if user_number in magic_numbers:
	print("correct")


>>> user_number = 9
>>> if user_number in magic_numbers:
	print("correct")


correct
>>>
