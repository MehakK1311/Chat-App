const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    //list of users
    users: [
      {
        type: mongoose.Schema.Types.ObjectId, //contains id of the user
        ref: "User", //reference to the user model
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    //who is the grp admin
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamp: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;