Vue.component('task-list', {

	template: '' +
		'<div>' +
			'<task v-for="task in tasks" v-bind:key="task.id">{{ task.description }}</task>' +
		'</div>',

	data() {
		return {
			tasks: [
				{ description: 'Go to the store', completed: true },
				{ description: 'Finish screencast', completed: false },
				{ description: 'Make donation', completed: false },
				{ description: 'Clear inbox', completed: false },
				{ description: 'Make dinner', completed: false },
				{ description: 'Clean room', completed: true }
			]
		};
	}

});


Vue.component('task', {

	template: '<li><slot></slot></li>'

});


new Vue({
	el: '#root'
})
