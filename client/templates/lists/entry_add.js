Template.categoryDropDown.helpers({ 
    name: function() {
        return this.name;
    }
});

Template.entryAddForm.helpers({
    categories: function() {
        return Categories.find();
    }
});

Template.entryAddForm.events({
    'submit form': function(e) {
        e.preventDefault();

        var entry = {
            date: new Date(),
            description: $(e.target).find('[name=description]').val(),
            amount: $(e.target).find('[name=amount]').val()
        };

        var categoryName = $(e.target).find('[name=category]').val();

        entry._id = Entries.insert(entry);

        Categories.update({name: categoryName}, {$push: { entries: entry._id}}); 
        Router.go('categoryList');
    }
});