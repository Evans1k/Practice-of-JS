var countBits = function(n) {
    try{
        if (n === 0) throw new ZeroException("Bad number");
    let binaryCod;
    binaryCod = n.toString(2);
    one = binaryCod.match(/1/g).length;
    return one;
        }
        catch (e) {
            return 0;
        }
};

