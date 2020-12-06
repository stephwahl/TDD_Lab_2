// Multiple tests for words starting with different vowels add -way


describe("translate", function() {

    it("word starting with an A", function() {
        expect(translate('Amphibious')).toEqual('amphibiousway')
    });

    it("word starting with an e", function() {
        expect(translate('equalibrium')).toEqual('equalibriumway')
    });

    it("word starting with an I", function() {
        expect(translate('Idea')).toEqual('ideaway')
    });
    
    it("word starting with an o", function() {
        expect(translate('opal')).toEqual('opalway')
    });

    it("word starting with a U", function() {
        expect(translate('Ultimate')).toEqual('ultimateway')
    });

    it("word starting with Y consonant", function() {
        expect(translate('Yellow')).toEqual('ellowyay')
    });

    it("word with no vowel", function() {
        expect(translate('rhythm')).toEqual('rhythmay')
    });

    it("word starting with one consonant", function() {
        expect(translate('begin')).toEqual('eginbay')
    });

    it("word starting with two consonants", function() {
        expect(translate('Stand')).toEqual('andstay')
    });

    it("word starting with three consonants", function() {
        expect(translate('stretch')).toEqual('etchstray')
    });

    it("word starting with three consonants", function() {
        expect(translate('Dyke')).toEqual('edykay')
    });

    it("convert word to lowercase", function() {
        expect(translate('sTraWbErRy')).toEqual('awberrystray')
    });

})