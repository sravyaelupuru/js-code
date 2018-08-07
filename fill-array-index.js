function arrayIndex(first,last,index){
    var object={
        ass1:first,
        ass2:last,
        integer:index,
        alphabet:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        result:[],
        fillArray:function(){
            for(i=(this.alphabet.indexOf(this.ass1));i<(this.alphabet.indexOf(this.ass2));i++){
                this.result.push(`${this.alphabet[i]}`);
               i+=this.integer-1
            }
            return this.result;
        }

    }
    return object.fillArray();
}
console.log(arrayIndex('a','z',2));