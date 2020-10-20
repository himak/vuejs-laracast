# Vue.js Laracast

#### Lesson 1 - Data biding

    <div id="root">
        <input type="text" id="input" v-model="message">

        <p>The value of the input is : {{ message }}</p>
	</div>

	<script>

        new Vue({
            el: '#root',
            data: {
                message: 'Hello World'
            }
        })

    </script>

#### Lesson 2 - Devtools

Write in browser Console:

    $vm0            // Object ...
    $vm0.message    // "Hello World"
    $vm0.message = "I have been changed.";  // Change text in input element

#### Lesson 3 - Lists

     <div id="root">
        <ul>
            <li v-for="name in names" v-text="name"></li>
        </ul>

        <input id="input" type="text">
        <button id="button">Add Name</button>
    </div>

    <script>
        var app = new Vue({

            el: '#root',

            data: {
                names: ['Joe', 'Mary', 'Jane', 'Jack']
            },

            mounted() {
                document.querySelector('#button').addEventListener('click', () => {

                    let name = document.querySelector('#input');
                    app.names.push(name.value);
                    name.value = '';

                });
            }
        })
    </script>

#### Lesson 4 - Event listeners

This code you can replace

    document.querySelector('#button').addEventListener('click', () => {
        // code ...
    }

for Vue **v-on:click="addName"** in element like:

    <button id="button" v-on:click="addName">Add Name</button>


**TIP:** You can write short code:

    <button v-on:click="addName">Add Name</button>
    <button @click="addName">Add Name</button>      // shorten

#### Lesson 5 - Attribute and class binding

    // CSS
    .is-loading { background: red }


    // HTML
    <button :class="{ 'is-loading' : isLoading }" @click="toggleClass">Click Me</button>


    // SCRIPT
    data: {
        isLoading: false
    },

    methods: {
        toggleClass() {
            this.isLoading = true;
        }
    }

**TIP:** You can write short code:

    <button v-bind:title="title">Hover Over Me</button>
    <button :title="title">Hover Over Me</button>


#### Lesson 6 - The Need for Computed Properties

We have JSON of tasks:

    data: {
        tasks: [
            { description: 'Go to the store', completed: true },
            { description: 'Finish screencast', completed: false },
            { description: 'Make donation', completed: false },
            { description: 'Clear inbox', completed: false },
            { description: 'Make dinner', completed: false },
            { description: 'Clean room', completed: true }
        ]
    }

Get all tasks:

    <li v-for="task in tasks" v-text="task.description"></li>


Filter incomplete tasks

    HTML

    <li v-for="task in tasks" v-if="task.completed" v-text="task.description"></li>

    or shorten write with use computed method

    <li v-for="task in incompleteTasks" v-text="task.description"></li>


    SCRIPT

    computed: {

        incompleteTasks() {
            return this.tasks.filter(task => ! task.completed);
        }
    }

#### Lesson 7 - Components

    HTML

    <task>Go to the store</task>
    <task>Go to the bank</task>
    <task>Go to work</task>


    SCRIPT

    Vue.component('task', {

        template: '<li><slot></slot></li>',

    });

#### Lesson 8 - Nesting components

Get data from component to the other component:

    HTML

    <task-list></task-list>


    SCRIPT


    Vue.component('task-list', {

        template: '
            <div>
                <task v-for="task in tasks" v-bind:key="task.id">{{ task.description }}</task>
            </div>
        ',

        data() {
            return {
                tasks: [
                    { description: 'Go to the store', completed: true },
                    { description: 'Finish screencast', completed: false },
                    { description: 'Make donation', completed: false },
                ]
            };
        }
    });


    Vue.component('task', {

        template: '<li><slot></slot></li>'

    });


#### Lesson 9 - Exercise : Tabs

We create dynamic navigation Tabs:

    HTML

    <tabs>
        <tab name="About Us" :selected="true">
            <h1>Here is the content for the about us tab.</h1>
        </tab>

        <tab name="About Our Culture">
            <h1>Here is the content for the about culture tab.</h1>
        </tab>

        <tab name="About Our Vision">
            <h1>Here is the content for the about vision tab.</h1>
        </tab>
    </tabs>


    SCRIPT

    Vue.component('tabs', {

    	template: `
    		<div>
    			<div class="tabs">
    				<ul>
    					<li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
    						<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
    					</li>
    				</ul>
    			</div>

    			<div class="tabs-details">
    				<slot></slot>
    			</div>
    		</div>
    	`,

    	data() { return { tabs: [] } },

    	created() { this.tabs = this.$children },

    	methods: {
    		selectTab(selectedTab) {
    			this.tabs.forEach(tab => {
    				tab.isActive = (tab.name == selectedTab.name);
    			});
    		}
    	}
    })


    Vue.component('tab', {

    	template: `
    		<div v-show="isActive">
    			<slot></slot>
    		</div>
    	`,

    	props: {
    		name: { required: true },
    		selected: { default: false }
    	},

    	data() { return { isActive: false }; },

    	computed: {
    		href() {
    			// 'About Our Culture' convert to '#about-our-culture'
    			return '#' + this.name.toLowerCase().replace(/ /g, '-');
    		}
    	},

    	mounted() { this.isActive = this.selected; }
    })
