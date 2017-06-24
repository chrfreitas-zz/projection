(function(Vue, VMasker){

    'use strict';

    function takeOffMoneyMask(value = 0) {
        value = value.replace(/\./ig, '');
        value = value.replace(/\,/ig, '');
        return value;
    }

    Vue.component('input-money', {
        template: '<input class="step__input" type="text" v-model="value" v-on:input="onChange">',
        data: function(){
            return {
                value: 0
            };
        },
        methods: {
            onChange: function(){
                let money = {
                    value: takeOffMoneyMask(this.$data.value),
                    mask: this.$data.value
                };

                this.$emit('change', money);
            }
        },
        mounted: function(){

            VMasker(this.$el).maskMoney({
                precision: 2,
                separator: ',',
                delimiter: '.',
                zeroCents: true
            });
        }
    });

})(Vue, VMasker);
