function AmountCalculate (price) {
    const match = price.match(/[KMB]/);
    switch(match[0]) {
        case 'K':
            return parseFloat(price.replace(/[^0-9.]/g, '')*1000)
        case 'M':{
            return parseFloat(price.replace(/[^0-9.]/g, '')*100000);
        }
        case 'B':
            return parseFloat(price.replace(/[^0-9.]/g, '')*10000000)      
    }
   
}

export default AmountCalculate;