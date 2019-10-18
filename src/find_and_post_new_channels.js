(params) => {
  const list = api.run("this.get_channels_list");
  const new_channels = [];
  list.forEach((e) => {
    if (!stash.get(e.id)) {
      new_channels.push(e.id);
      stash.put(e.id,true);  
    }
  });
  
  if (new_channels.length > 0) {
  const new_channel_announcement_channel = user_setting.get('announcement_channel_name');
  const formatted_ids = new_channels.map((id) => {
     return "<#"+id+">";
  }).join(", ").replace(",$","");
  // console.log(formatted_ids);
  
  api.run("this.post_chat_message",{
    new_channel_announcement_channel: new_channel_announcement_channel,
    list_of_formatted_channel_ids: formatted_ids
  });
  }

}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */