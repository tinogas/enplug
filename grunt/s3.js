module.exports = {
    options: {
        accessKeyId: '<%= aws.accessKeyId %>',
        secretAccessKey: '<%= aws.secretAccessKey %>',
        bucket: '[yourbucket]',
        cacheTTL: 0,
        overwrite: true,

        // Auto-config buckets
    //    createBucket: true,
    //    enableWeb: true,
    //    access: 'public-read',
    //    region: 'US Standard'
    },
    release: {
        cwd: 'dist/',
        src: ['**']
    }
};
