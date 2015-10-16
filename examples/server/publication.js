Meteor.publish("friendsList", function(obj){
        var condition = obj || {};
        console.log(condition);
        return Friends.find(condition);
});