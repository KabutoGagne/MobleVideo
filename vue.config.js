module.exports = {
    /* �������������Ϳ��������µ�URL���ɶԵ�ǰ�����������֣�baseUrl �� Vue CLI 3.3 �������ã�Ҫʹ��publicPath */ 
    //  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' 
    publicPath: process.env.NODE_ENV ===  'production' ? './' : '/' ,
    // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    /* ����ļ�Ŀ¼����npm run buildʱ�������ļ���Ŀ¼���� */
    outputDir: 'dist',
    /* �������ɵľ�̬��Դ (js��css��img��fonts) �� (����� outputDir ��) Ŀ¼ */
    assetsDir: "assets",
    /* �Ƿ��ڹ���������ʱ���� sourceMap �ļ���false����߹����ٶ� */
    productionSourceMap: false,
    /* Ĭ������£����ɵľ�̬��Դ�����ǵ��ļ����а����� hash �Ա���õĿ��ƻ��棬�����ͨ�������ѡ����Ϊ false ���ر��ļ�����ϣ��(false��ʱ�������ԭ�����ļ������ı�) */
    filenameHashing: false,
    /* ���뱣��ʱ����eslint��� */
    lintOnSave: true,
    /* webpack-dev-server ������� */
    devServer: {
    	//����Invalid Host header����취
    	disableHostCheck: true,
    	
        /* �Զ�������� */
        open: true,
        /* ����Ϊ0.0.0.0�����еĵ�ַ���ܷ��� */
        host: '0.0.0.0',
        port: 8066,
        https: false,
        hotOnly: false,
        /* ʹ�ô��� */
        proxy: {
            '/api': {
                /* Ŀ������������ַ */
                target: 'http://47.100.47.3/',
                /* ������� */
                changeOrigin: true,
            },
        },
    },
}
