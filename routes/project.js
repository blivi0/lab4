exports.viewProject = function(req, res) {
    var name = req.params.name || 'Project Title';
    console.log("The project name is: " + name);
    res.render('project', {
    'name': name
    });
};
