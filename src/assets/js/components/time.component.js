(function(Vue){
    'use strict';

    Vue.component('input-time', {
        template: '<input class="step__input" type="text" v-on:keyup.enter="onNext" v-model="value" v-on:input="onChange">',
        data() {
            return {
                value: ''
            };
        },
        methods: {
            onChange() {
                this.$emit('change', this.$data.value);
            },
            onNext(){
                this.$emit('next');
            }
        }
    });

})(Vue);
