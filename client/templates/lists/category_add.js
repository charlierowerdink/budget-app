Template.categoryAdd.events({
    'click #addButton': function(e) {
        e.preventDefault();
        Router.go('categoryAddForm');
    }
});

Template.categoryAddForm.events({
    'submit form': function(e) {
        e.preventDefault();

        var category = {
            name: $(e.target).find('[name=name]').val(),
            allocation: $(e.target).find('[name=allocation]').val(),
            balance: $(e.target).find('[name=allocation]').val(),
            entries: []
        };

        category._id = Categories.insert(category);
        Router.go('categoryList');
    }
});