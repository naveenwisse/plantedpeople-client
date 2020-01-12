module.exports = {
    index: {
        options: {
            patterns: [{
                match: 'ver',
                replacement: Date.now()
            }]
        },
        files: [{
            expand: true,
            flatten: true,
            src: ['index.html'],
            dest: 'dist/'
        }]
    },
    local: {
        options: {
            patterns: [{
                match: 'apiBase',
                replacement: '\/\/localhost:8080\/'
            }, {
                match: 'env',
                replacement: 'dev'
            }, {
                match: 'stripePublicKey',
                replacement: 'pk_test_4RDHi9UUACsPXOSvgaTFI5Jw'
            }, {
                match: 'visualizerInstance',
                replacement: 'enabled'
            }]
        },
        files: [{
            expand: true,
            flatten: true,
            src: [
                'dist/app.js'
            ],
            dest: 'dist/'
        }]
    },
    stage: {
        options: {
            patterns: [{
                match: 'apiBase',
                replacement: '\/\/plantedpeople-api-stage.herokuapp.com\/'
            }, {
                match: 'env',
                replacement: 'stage'
            }, {
                match: 'stripePublicKey',
                replacement: 'pk_test_4RDHi9UUACsPXOSvgaTFI5Jw'
            }, {
                match: 'visualizerInstance',
                replacement: false
            }]
        },
        files: [{
            expand: true,
            flatten: true,
            src: [
                'dist/index.html',
                'dist/app.js'
            ],
            dest: 'dist/'
        }]
    },
    prod: {
        options: {
            patterns: [{
                match: 'apiBase',
                replacement: '\/\/plantedpeople-api.herokuapp.com\/'
            }, {
                match: 'env',
                replacement: 'prod'
            }, {
                match: 'stripePublicKey',
                replacement: 'pk_live_5BtjakrDjRFULRQnxJ9nK59W'
            }, {
                match: 'visualizerInstance',
                replacement: false
            }]
        },
        files: [{
            expand: true,
            flatten: true,
            src: [
                'dist/index.html',
                'dist/app.js'
            ],
            dest: 'dist/'
        }]
    }
};