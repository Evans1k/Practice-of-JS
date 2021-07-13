function likes(names) {
    try {
       return  names.length === 1 ? names[0] + " likes this"
           : names.length === 2 ? names[0] + " and " + names[1] + " like this"
               : names.length === 3 ? names[0] + ", " + names[1] + " and " + names[2] + " like this"
                   : names.length >= 4 ? names[0] + ", " + names[1] + " and " + (names.length - 2) +  " others like this"
                        : new ZeroException("Bad number") ;
    } catch (e) {
        return "no one likes this";
    }
}