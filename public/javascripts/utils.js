function phoneFomatter(num){
  var formatNum = '';
  if(num.length==11) {
    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if(num.length==8){
    formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else {
    if(num.indexOf('02')==0){
      formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
    } else {
      formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  }
  return formatNum;
}
Date.prototype.yyyymmddhhmiss = function() {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();
  var hh = this.getHours();
  var mi = this.getMinutes();
  var ss = this.getSeconds();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd,
          (hh>9 ? '' : '0') + hh,
          (mi>9 ? '' : '0') + mi,
          (ss>9 ? '' : '0') + ss
         ].join('');
};

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};
