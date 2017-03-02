function nonrep(str)
{
  var arr=str.split('');
  var out;
  var count;

  for (var i=0; i<arr.length; i++) {
    count=0;
    for (var j=0;j<arr.length; j++)
    {
      if (arr[i]==arr[j]) {
        count+= 1;
      }
    }

    if (count==1)
    {
      out=arr[i];
      break;
    }
  }
  return out;
}
console.log(nonrep('abacddbec'));
console.log(nonrep('abcdfhkjfhjkilokiuj'));
console.log(nonrep('nananananarennanan'));
