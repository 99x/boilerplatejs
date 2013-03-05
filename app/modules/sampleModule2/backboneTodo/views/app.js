define([
	'../collections/todos',
	'../views/todos',
	'text!../templates/stats.html',
	'../common'
], function(Todos, TodoView, statsTemplate, Common ) {

	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#todoapp',

		// Compile our stats template
		template: _.template( statsTemplate ),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress #new-todo':		'createOnEnter',
			'click #clear-completed':	'clearCompleted',
			'click #toggle-all':		'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function() {
			this.input = this.$('#new-todo');
			this.allCheckbox = this.$('#toggle-all')[0];
			this.$footer = this.$('#footer');
			this.$main = this.$('#main');

			Todos.on( 'add', this.addAll, this );
			Todos.on( 'reset', this.addAll, this );
			Todos.on( 'change:completed', this.addAll, this );
			Todos.on( 'all', this.render, this );
			Todos.fetch();
		},

		// Rerendering the App just means refreshing the statistics  
		// the rest of the app doesn't change.
		render: function() {
			var completed = Todos.completed().length;
			var remaining = Todos.remaining().length;

			if ( Todos.length ) {
				this.$main.show();
				this.$footer.show();

				this.$footer.html(this.template({
					completed: completed,
					remaining: remaining
				}));

				this.$('#filters li a')
					.removeClass('selected')
					.filter( '[href="#/' + ( Common.TodoFilter || '' ) + '"]' )
					.addClass('selected');
			} else {
				this.$main.hide();
				this.$footer.hide();
			}

			this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function( todo ) {
			var view = new TodoView({ model: todo });
			$('#todo-list').append( view.render().el );
		},

		// Add all items in the **Todos** collection at once.
		addAll: function() {
			this.$('#todo-list').html('');

			switch( Common.TodoFilter ) {
				case 'active':
					_.each( Todos.remaining(), this.addOne );
					break;
				case 'completed':
					_.each( Todos.completed(), this.addOne );
					break;
				default:
					Todos.each( this.addOne, this );
					break;
			}
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function() {
			return {
				title: $.trim(this.input.val()),
				order: Todos.nextOrder(),
				completed: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function( e ) {
			if ( e.which !== Common.ENTER_KEY || !$.trim(this.input.val()) ) {
				return;
			}

			Todos.create( this.newAttributes() );
			this.input.val('');
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function() {
			_.each( Todos.completed(), function( todo ) {
				todo.destroy();
			});

			return false;
		},

		toggleAllComplete: function() {
			var completed = this.allCheckbox.checked;

			Todos.each(function( todo ) {
				todo.save({
					'completed': completed
				});
			});
		}
	});

	return AppView;
});
