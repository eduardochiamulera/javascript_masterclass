const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("ATF-8");
console.log(charsets);
console.log(charsets.size);
charsets.clear();
console.log(charsets);
console.log(charsets.size);