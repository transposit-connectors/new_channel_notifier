# New Channel Notifier

Transposit is an excellent tool to create operations to extend Slack. If you've ever thought "why doesn't slack do that?" now you can use Transposit to do that. This application keeps a record of all new public channels in your Slack workspace and publishes the list to a configurable 'new channel announcement' channel.

## Slack setup

  * Create a channel for new channel announcements. Suggested names: 'announcements' or 'new_channels'.

## Transposit setup

  * Fork the app [https://console.transposit.com/t/transposit-sample/new_channel_notifier](https://console.transposit.com/t/transposit-sample/new_channel_notifier) (find the Fork button at the top of the editor view).
  * Navigate to **Users > User Configuration** and note the URL, something like `https://new-channel-notifier-c0g4t.transposit.io`.
  * Open up that URL and connect Slack (this will install a Slack application with limited privileges). Specify the channel name you created above.

