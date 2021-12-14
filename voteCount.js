"use strict";

let getVoteCount = function (obj) {
  const { upvotes, downvotes } = obj;
  return upvotes - downvotes;
};
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
