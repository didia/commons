BASH
===============
- Bulk delete astuces
  ===================
  You need to use the extglob shell option using the shopt builtin command to use extended pattern matching operators such as:

  	shopt -s extglob
  	
	?(pattern-list) - Matches zero or one occurrence of the given patterns.
	*(pattern-list) - Matches zero or more occurrences of the given patterns.
	+(pattern-list) - Matches one or more occurrences of the given patterns.
	@(pattern-list) - Matches one of the given patterns.
	!(pattern-list) - Matches anything except one of the given patterns.






