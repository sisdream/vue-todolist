const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            title: "Vue To Do List",

            tasks:[
                {
                    name: "Task 1",
                    done: true,
                },
                {
                    name: "Task 2",
                    done: false,
                },
                {
                    name: "Task 3",
                    done: true,
                },
                {
                    name: "Task 4",
                    done: false,
                },
                
            ],
           
        };
    },
    methods:{
        printHello(){
            console.log("hello vue");
        },
    },
    mounted(){
        this.printHello();
    },
});

app.mount('#app');