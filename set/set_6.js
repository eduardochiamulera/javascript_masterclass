const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("ATF-8");
charsets.forEach(function(charset){
    console.log(charset);
})