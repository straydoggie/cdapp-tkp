// 作为配置文件，直接导出配置对象即可
module.exports = {
    //baseUrl: "./",
    publicPath: "./",
    devServer: {
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
            '/backend': {
                // 目标 API 地址
                target: 'http://localhost/project3/backend/',
                // 如果要代理 websockets
                //ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: false,
                pathRewrite: {
                    '^/backend': ''
                }
            }
        }
    }
} 