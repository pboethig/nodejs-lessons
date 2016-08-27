module.exports=
{
    entry:'./main.js',
    output:
    {
        path:'./',
        filename: 'index.js'
    },
    devServer:
    {
        inline:true,
        port:3333
    },
    module:
    {
        loaders: [
            {
                text:/\.js$/,
                exclude: /node_modules/,
                loader:'babel',
                query:
                {
                    presets:['es2015','react']
                }
            }
        ]
    }
}