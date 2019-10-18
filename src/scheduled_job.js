(params) => {
  const userIds = api.listUsers().map(u => {return u.id});
//  console.log(userIds);
  api.runForAllUsers("this.find_and_post_new_channels", {}, {"users": userIds});
  
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */