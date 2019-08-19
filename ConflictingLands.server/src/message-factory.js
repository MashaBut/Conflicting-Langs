"use strict";
exports.__esModule = true;
var message_type_1 = require("./message-modules/message-type");
var message_set_name_room_1 = require("./message-modules/message-set-name-room");
var message_new_room_1 = require("./message-modules/message-new-room");
var MessageFactory = /** @class */ (function () {
    function MessageFactory() {
    }
    MessageFactory.prototype.createMessageSetNameRoom = function (name, nameClient) {
        var message = new message_set_name_room_1.MessageSetNameRoom();
        message.Type = message_type_1.MessageType.SetNameRoom;
        message.nameRoom = name;
        message.nameClient = nameClient;
        return JSON.stringify(message);
    };
    MessageFactory.prototype.createMessageNewRoom = function (name) {
        var message = new message_new_room_1.MessageNewRoom();
        message.Type = message_type_1.MessageType.NewRoom;
        message.nameRoom = name;
        return JSON.stringify(message);
    };
    return MessageFactory;
}());
exports.MessageFactory = MessageFactory;
