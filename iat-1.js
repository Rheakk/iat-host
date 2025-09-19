define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Asian people', //Will appear in the data.
			title : {
				media : {image : 'Asian people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'asian_face_1.jpg'}, 
    			{image : 'asian_face_2.jpg'}, 
    			{image : 'asian_face_3.jpg'}, 
    			{image : 'asian_face_4.jpg'}, 
    			{image : 'asian_face_5.jpg'}, 
    			{image : 'asian_face_6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {image : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'ea_face_1.jpg'}, 
    			{image : 'ea_face_2.jpg'}, 
    			{image : 'ea_face_3.jpg'}, 
    			{image : 'ea_face_4.jpg'}, 
    			{image : 'ea_face_5.jpg'}, 
    			{image : 'ea_face_6.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category3 :	{
			name : 'Good words', //Will appear in the data.
			title : {
				media : {word : 'Good words'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word: 'Celebrate'},
				{word: 'Magnificent'},
				{word: 'Fabulous'},
				{word: 'Beautiful'},
				{word: 'Lovely'},
				{word: 'Glad'},
				{word: 'Spectacular'},
				{word: 'Terrific'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		category4 :	{
			name : 'Bad words', //Will appear in the data.
			title : {
				media : {word : 'Bad words'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word: 'Negative'},
				{word: 'Angry'},
				{word: 'Poison'},
				{word: 'Pain'},
				{word: 'Humiliate'},
				{word: 'Sadness'},
				{word: 'Awful'},
				{word: 'Scorn'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		}

		base_url : {//Where are your images at?
			image : 'https://Rheakk.github.io/iat-host/images/'
		} 
	});
});
