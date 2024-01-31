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
                {
                    name: "Task 5",
                    done: true,
                },
                {
                    name: "Task 6",
                    done: false,
                },
            ],

            newTask:{
                name: "",
                done: false
            } 
        };
    },
    methods: {
        createTask(){
            tasks.push(this.newTask);
        }
    },
   
});

app.mount('#app');