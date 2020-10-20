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
