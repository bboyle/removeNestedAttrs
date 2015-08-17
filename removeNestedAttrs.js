// remove matched attributes from descendent elements
// selector: a css selector or jquery object
// attrs: array of attribute names to match and remove
function removeNestedAttrs( selector, attrs ) {
    selector = $( selector );
    if ( typeof attrs === 'string' ) {
        attrs = [ attrs ];
    }
    for ( var i = 0; i < attrs.length; i++ ) {
        selector.find( '[' + attrs[i] + ']' ).removeAttr( attrs[i] );
    }
}
