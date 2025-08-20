export const formatPrice =(number)=>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
    }).format(number);
}

// export { formatPrice };