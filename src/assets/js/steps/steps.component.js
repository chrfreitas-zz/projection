(function(Vue){

    'use strict';

    const STATUS = {
        WAITING: 0,
        ACTIVE: 1,
        COMPLETED: 2
    };

    new Vue({
        el: '.main'
    });

    new Vue({
        el: '.step',
        data: {
            status: {},
            cssStatus: {
                'step--done': STATUS.COMPLETED === this.data.status,
                'step--active': STATUS.ACTIVE === this.data.status
            }
        },
        computed: function(){
            this.$data.status = STATUS.WAITING;
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
