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
            investiment: '',
            rate: '',
            time: '',
            result: '',
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

            // Object with status classe
            cssStatus: function(step) {
                return {
                    'step--active' : (this.$data.steps[step].status === STATUS.ACTIVE),
                    'step--done' : (this.$data.steps[step].status === STATUS.COMPLETED)
                };
            },

            // Get all the numbers and calculate wat It will be result.
            process: function(){

                let rate = this.$data.rate/100,
                    result = this.$data.investiment * Math.pow(1 + rate, this.$data.time);

                this.$data.result = result.toFixed(2);
                this.goTo(4);
            },

            changeInvestiment: function(value){
                this.$data.investiment = value;
            }
        }
    });

})(Vue);
