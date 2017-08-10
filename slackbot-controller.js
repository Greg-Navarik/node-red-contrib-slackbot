
module.exports = function(RED) {
    function SlackbotNode(n) {
        RED.nodes.createNode(this,n);
        this.bot_token = this.credentials.bot_token;
    }
    RED.nodes.registerType("slackbot-controller", SlackbotNode, {
      credentials: {
        bot_token: {type:"text"},
      }
    });
}
