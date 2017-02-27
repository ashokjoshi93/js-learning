
function maxmin(ab)
{
  ab.sort();
  console.log("2nd Min is:"+ab[1]);
  console.log("2nd Max is:"+ab[ab.length-2]);
}

maxmin([8,9,6,7,5]);
