import moment from 'moment';
import Vue from 'vue';

export default Vue.filter('formdate',function(value,format){
    return moment(value).format(format);
})