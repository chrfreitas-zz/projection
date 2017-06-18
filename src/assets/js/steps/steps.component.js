(function(Vue){

    'use strict';

    // Status of each steps
    const STATUS = {
        WAITING: 0,
        ACTIVE: 1,
        COMPLETED: 2
    };

    new Vue({
        el: '.main',
        data: {
            steps: [
                {
                    id: 0,
                    status: STATUS.ACTIVE
                },
                {
                    id: 1,
                    status: STATUS.WAITING
                },
                {
                    id: 2,
                    status: STATUS.WAITING
                },
                {
                    id: 3,
                    status: STATUS.WAITING
                },
                {
                    id: 4,
                    status: STATUS.WAITING
                }
            ]
        },
        methods: {
            // Set step to status completed
            goTo: function(step) {
                this.$data.steps[step - 1].status = STATUS.COMPLETED;
                this.$data.steps[step].status = STATUS.ACTIVE;
            },
            cssStatus: function(step) {                
                return {
                    'step--active' : (this.$data.steps[step].status === STATUS.ACTIVE),
                    'step--done' : (this.$data.steps[step].status === STATUS.COMPLETED)
                };
            }
        }
    });

})(Vue);
