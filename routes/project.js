
exports.viewProject = function(req, res) { 
	var name = req.params.name; 
    console.log("The project name is: " + name);
    //pass the name to the template
    res.render('project', {'projectName': name} ); 
};