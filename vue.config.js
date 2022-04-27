let proxyObj = {};
proxyObj["/api"] = {
    pathRewrite: {
        '^/api': ''
    },
    ws: false, // 关闭 webSocket
    target: "http://127.0.0.1:8097", // 后端的地址
    changeOrigin: true,
}

module.exports = {
    devServer: {
        host: "localhost",
        port: 8097,
        proxy: proxyObj
    },
    
    
}