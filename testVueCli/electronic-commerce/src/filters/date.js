export default function (num){
  const n = Number(num);
  if (!isNaN(n)) {
    const date = new Date(num*1000);
    return date.toLocaleDateString();
  } else if (num.indexOf('-') > 0) {
    return num.replace(/-/g,'/');
  } else {
    return num
  }
}
