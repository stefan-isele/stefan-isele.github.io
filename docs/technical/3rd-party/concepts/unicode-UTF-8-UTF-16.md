Unicode is a standard, that basically defines two things :

1. A table, that maps each character of each language to a hexadecimal number.
These hex numbers are called 'codepoints'.
A codepoint is written as "U+", followed by its hex value.
#### Examples ####
* U+0041 is used for the letter 'A'
* U+005A is used for the letter 'Z'

2. Ways to organize these codepoints in byte sequences, to store them in memory or files called 'encodings'.
Examples are UTF-8 or UTF-16

## Encodings ##
Unicode currently defines 136.755 characters, so to store the regarding hex values, more than two bytes are needed.
These characters include letters as well as symbols, see [List of Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters).

All ASCII characters use codepoints below decimal 128 and it may be considered a waste, to use 2 or more bytes to store them.
There are different strategies, to store codepoints as bytes, optimized for performance or memory usage.
This is the reason why different encodings are used.
However, each Unicode encoding is capable to handle all possible codepoints, the only difference is, how this is done internally.

The most important encodings are :

* UTF-8, every code point from decimal 0-127 is stored in a single byte.
Code points 128 and above are stored using 2, 3, or more bytes.
This is the de-facto standard, and unless you really know what you are doing, you should use UTF-8 for files, HTML, JSON, XML etc.

* UTF-16 was meant to use 2 bytes for every codepoint.
This fixed length makes it easy to implement methods like [String#charAt(int)](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#charAt(int)).
That may be the reason why Java internally uses UTF-16 to store strings.
Later, Unicode was extended. So now two bytes are not sufficient for all codepoints, which forces UTF.16 also to use variable length (2 or more bytes per codepoint).

There are many more Unicode encodings, see [Mapping and encodings](https://en.wikipedia.org/wiki/Unicode#Mapping_and_encodings)
There are also other character sets, that are not Unicode, for example [ISO 8859-1](https://de.wikipedia.org/wiki/ISO_8859-1).

## Links ##
* https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/
* https://stackoverflow.com/questions/2241348/what-is-unicode-utf-8-utf-16

