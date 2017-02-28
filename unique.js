
var str = "targariyant";
var arr = new Array();
arr = str.split("");
console.log(arr);

var arr2=new Array();

function contains(obj, ary)
  {
    for (var i = 0; i < ary.length; i++)
      {
        if (ary[i] == obj)
        {
            return true;
        }
     }
    return false;
  }

for(var i=0;i<arr.length;i++)
{
  var count=0;
  for(var j=i+1;j<arr.length;j++)
  {
    if(arr[i]== arr[j])
    {
      count++;
    }

  }
  if(count==0 && !(contains(arr[i],arr2)) )
  arr2.push(arr[i]);
}
console.log(arr2);
