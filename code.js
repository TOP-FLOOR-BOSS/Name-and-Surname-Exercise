const T = Vue.createApp(
    {

    data : function() {
        return{
            name: 'Liam',
            surname: 'Engel'
        }

    }
});

T.mount('#fullName');
