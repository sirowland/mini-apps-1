var getKeys = function(obj) {
    var keysRow = ['id','parentId'];
    for (var key in obj) {
        if (key !== 'children') {
            keysRow.push(key);
        }
    }
    return keysRow.join(',') + '<br>';
}

var writeRow = function(obj, id, parentId) {
    id = id.toString();
    parentId = parentId === null ? 'null' : parentId.toString();

    var arr = [ id, parentId ];

    for (var key in obj) {
        if (key !== 'children') {
            arr.push(obj[key]);
        }
    }
    return arr.join(',') + '<br>';
}

var toCSV = module.exports = function(object, callback) {
    var keys;
    var values = '';
    var id = 1;

    function writeRows (obj, parentId) {
        //if it's the first row parentId is null
        if (id === 1) {
            values += writeRow(obj, id, null);
        } else {
            values += writeRow(obj, id, parentId);
        }

        if (obj.children.length === 0) {
            return;
        } else {
            //if you start to go down a new tree, save parentId
            parentId = id;
            for (var i = 0; i < obj.children.length; i++) {
                //increment normal id
                id++;
                writeRows(obj.children[i], parentId);
            }
        }
    }

    //get keys
    keys = getKeys(object)

    //get rows
    writeRows(object, null);
    callback(keys + values);
}
