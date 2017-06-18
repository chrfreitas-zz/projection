(function(Vue){

    'use strict';

    const STATUS = {
        WAITING: 0,
        ACTIVE: 1,
        COMPLETED: 2
    };

    new Vue({
        el: '.step',
        data: {
            status: ''
        },
        computed: {
            cssStatus: function() {
                return {
                    'step--done': (this.$data.status === STATUS.COMPLETED),
                    'step--active': (this.$data.status === STATUS.ACTIVE)
                };
            }
        },
        methods: {
            next: function() {
                this.$data.status = STATUS.COMPLETED;
                this.$emit('next');
            },
            previus: function() {
                this.$data.status = STATUS.WAITING;
                this.$emit('previus');
            }
        }
    });


})(Vue);
