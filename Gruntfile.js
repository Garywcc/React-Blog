module.exports=function(grunt){
	
	grunt.initConfig({
	  autoprefixer: {
	    options: {
	      // Task-specific options go here.
	      browsers:['last 2 versions']
	    },
	    dist: {
	      // Target-specific file lists and/or options go here. 
	    	files : { 'dist/index.css' : 'css/index.css' }
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('test', ['autoprefixer'])
}