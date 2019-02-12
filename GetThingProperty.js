let request = require('request');

let getProperty = function(node, requestOpts) {
    request(requestOpts, function (error, response, body) {
        node.status({});
        if (error) {
            node.log('error occurred in making request');
            node.status({
                fill: 'red',
                text: `${error.message}`,
            });
        } else {
            if(response.status === '404') {
                node.log('Resource unavailable. Please check if thingId and propertyId are set correctly.');
                node.status({
                    fill: 'red',
                    text: 'Resource unavailable. Please check if thingId and propertyId are set correctly.',
                });  
            } else {
                node.status({
                    fill: 'green',                
                    text: 'Successfully fetched response',
                });
                node.send({ payload:response.body });
            }
        }
    });
};


module.exports = function(RED) {
    function GetThingProperty(config) {
        RED.nodes.createNode(this, config);
        let node = this;
        node.on('input', function() {
            let getUrl = config.baseurl+"/"+config.thingid+"/"+config.propertyid;
            node.log(`${getUrl}`);
            let requestOpts = {
                method: 'GET',
                url: getUrl,
                json: true
            };
            getProperty(node, requestOpts);
        });
    }
    RED.nodes.registerType("get-thing-property", GetThingProperty);
}