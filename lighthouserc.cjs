module.exports = {
    ci: {
        collect: {
            /* Add configuration here */
            staticDistDir: './build',
            url: ['http://localhost:8080','http://localhost:8080/signin']
        },
        upload: {
            /* Add configuration here */
            target: 'temporary-public-storage',
        },
    },
};
