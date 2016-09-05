intellisense.addEventListener('statementcompletion', function (e) {
    e.items.forEach(function (item) {
        // Detect a namespace by using the _isNamespace flag.
        if (item.value && item.value._isNamespace) {
            item.glyph = 'vs:GlyphGroupNamespace';
            }

            if (item.value && item.value._isEnum) {
            item.glyph = 'vs:GlyphGroupEnum';
            }

            if (item.value && item.value._Class) {
            item.glyph = 'vs:GlyphGroupClass';
            }

        // if (item.parentObject && item.parentObject._isNamespace) {
        //     // The item is a member of a namespace. 

        //     // All constructor functions that are part of a namespace 
        //     // are considered classes. 
        //     // A constructor function starts with
        //     // an uppercase letter by convention.  
        //     if (typeof item.value == 'function' && (item.name[0].toUpperCase() 
        //         == item.name[0])) {
        //         //item.glyph = 'vs:GlyphGroupEnum';
        //     }

        //     // Detect an enumeration by using the _isEnum flag.
        //     if (item.value && item.value._isEnum) {
        //         //item.glyph = 'vs:GlyphGroupEnum';
        //     }
        // }
    });
});

intellisense.addEventListener('statementcompletionhint', function (e) {
    if (e.completionItem.value) {
        if (e.completionItem.value._isNamespace) {
            e.symbolHelp.symbolDisplayType = 'Namespace';
        }
        if (e.completionItem.value._isEnum) {
            e.symbolHelp.symbolDisplayType = 'Enum';
        }
    }
});