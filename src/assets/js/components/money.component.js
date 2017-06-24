(function(Vue, VMasker){

    'use strict';

    function takeOffMoneyMask(value = 0) {
        value = value.replace(/\./ig, '');
        value = value.replace(/\,/ig, '');
        return value;
    }

    Vue.component('input-money', {
        template: '<input class="step__input" type="text" v-on:keyup.enter="onNext" v-model="value" v-on:input="onChange">',
        data(){
            return {
                value: 0
            };
        },
        methods: {
            onChange() {
                let money = {
                    value: takeOffMoneyMask(this.$data.value),
                    mask: this.$data.value
                };

                this.$emit('change', money);
            },
            onNext(){
                this.$emit('next');
            }
        },
        mounted() {
            VMasker(this.$el).maskMoney({
                precision: 2,
                separator: ',',
                delimiter: '.',
                zeroCents: true
            });
        }
    });

})(Vue, VMasker);
