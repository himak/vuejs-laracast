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



