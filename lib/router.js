Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',

});

Router.route('/', {name: 'categoryList'});
Router.route('/add', {name: 'categoryAddForm'});
Router.route('/addEntry', {name: 'entryAddForm'});

