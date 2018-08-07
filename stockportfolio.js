var stockTicker = ['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44];
var portfolio = [['AAPL', 100], ['YHOO', 200]];
function stockPortFolio(stockTicker,portfolio){
  var sum={'total':0};

            portfolio.forEach(function(pf){
                for(var i=0;i<stockTicker.length;i++){

              if(pf[0]==stockTicker[i]){
                  sum[pf[0]]=(pf[1]*stockTicker[i+1]);
                  sum['total']+=sum[pf[0]];
                  break;
                  
              }else {
				sum[pf[0]]='company doesnot exist';
                sum['total']+=0;
                
            }
        }
            });
        
   
   return sum;
      
    
}
console.log(stockPortFolio(stockTicker,portfolio));
//console.log(stockPortFolio(stockTicker,[['AAPL', 100],['HOPE', 10]]));