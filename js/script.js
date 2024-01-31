const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            title: "Vue To Do List",
        }
    },
    
});

app.mount('#app');