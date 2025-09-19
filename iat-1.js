define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    category1 : {
      name : 'Asian people',
      title : {
        media : {word : 'Asian people'}, 
        css : {color:'#31940F','font-size':'2em'},
        height : 4
      },
      stimulusMedia : [
        {image : 'asian_face_1.jpg'},
        {image : 'asian_face_2.jpg'},
        {image : 'asian_face_3.jpg'},
        {image : 'asian_face_4.jpg'},
        {image : 'asian_face_5.jpg'},
        {image : 'asian_face_6.jpg'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    category2 : {
      name : 'White people',
      title : {
        media : {word : 'White people'},
        css : {color:'#31940F','font-size':'2em'},
        height : 4
      },
      stimulusMedia : [
        {image : 'ea_face_1.jpg'},
        {image : 'ea_face_2.jpg'},
        {image : 'ea_face_3.jpg'},
        {image : 'ea_face_4.jpg'},
        {image : 'ea_face_5.jpg'},
        {image : 'ea_face_6.jpg'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    attribute1 : {
      name : 'Good words',
      title : {
        media : {word : 'Good words'},
        css : {color:'#31940F','font-size':'2em'},
        height : 4
      },
      stimulusMedia : [
        {word: 'Celebrate'},
        {word: 'Magnificent'},
        {word: 'Fabulous'},
        {word: 'Beautiful'},
        {word: 'Lovely'},
        {word: 'Glad'},
        {word: 'Spectacular'},
        {word: 'Terrific'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    attribute2 : {
      name : 'Bad words',
      title : {
        media : {word : 'Bad words'},
        css : {color:'#31940F','font-size':'2em'},
        height : 4
      },
      stimulusMedia : [
        {word: 'Negative'},
        {word: 'Angry'},
        {word: 'Poison'},
        {word: 'Pain'},
        {word: 'Humiliate'},
        {word: 'Sadness'},
        {word: 'Awful'},
        {word: 'Scorn'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    base_url : {
      image : 'https://Rheakk.github.io/iat-host/images/'
    }
  });
});
