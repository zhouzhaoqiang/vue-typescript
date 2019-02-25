export default {
    url: {
       basicUrl:
        process.env.NODE_ENV === 'development'
            ? 'https://primeloanbeta.wecash.net/'
            : 'https://primeloan.wecash.net/',
    }
}