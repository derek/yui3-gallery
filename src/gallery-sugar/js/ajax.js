
    /*
        Ajax sugar
    */
    var ajax = {

        post: function(url, data, callback){

            if (Y.Lang.isFunction(data)) {
                callback = data;
            }

            Y.io(url, {
                method: 'POST',
                data: data,
                on: {
                    complete: function(id, o, args) {
                        callback(o.response);
                    }
                }
            })
        },
    
        get: function(url, data, callback){

            if (Y.Lang.isFunction(data)) {
                callback = data;
            }

            Y.io(url, {
                method: 'GET',
                data: data,
                on: {
                    complete: function(id, o, args) {
                        callback(o.response);
                    }
                }
            })
        }

    };

    Y.ajax = ajax;
    