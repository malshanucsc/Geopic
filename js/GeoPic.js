window.Instagram ={

	config:{},


	BASE_URL:'https://api.instagram.com/v1',

	init: function( opt ){
		opt=opt || {};
		this.config.client_id=opt.client_id;


	},
//https://api.instagram.com/v1/media/popular?client_id=
	popular:function(callback){

		var endpoint=this.BASE_URL+ '/media/popular?client_id='+this.config.client_id;
		this.getJSON(endpoint,callback);


	},
	tagsByName: function (name,callback) {
		var endpoint=this.BASE_URL+ '/tags/'+name+'/media/recent?client_id='+this.config.client_id;
		this.getJSON(endpoint,callback);


	},

	getJSON: function(url, callback){

				$.ajax({

			type:'GET',
			url:url,
			dataType: 'jsonp',
			success: function(response]){

				if(typeof callback==='function') callback(response);
			}

		});


	}
};

//081659794501432c9f43d9e87333aa25
//https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS_TOKEN
//https://api.instagram.com/v1/tags/{tag-name}?access_token=ACCESS-TOKEN
Instagram.init({

	client_id:'081659794501432c9f43d9e87333aa25';


})