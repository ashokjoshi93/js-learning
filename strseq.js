
var str = "azxriop";
var arr = new Array();
arr = str.split("");
console.log(arr);

for(var i=0;i<arr.length;i++)
{
  for(var j=i;j<arr.length;j++)
  {
    if(arr[i]>arr[j])
    {
       var temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
}

console.log(arr);
