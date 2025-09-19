define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.7.3/IAT/qualtrics/quiat9.js'], 
function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    category1 : {
      name : 'Male words',
      title : { media : {word : 'Male words'}, css : {color:'#31940F','font-size':'2em'}, height : 4 },
      stimulusMedia : [
        {word : 'Ben'},
        {word : 'Paul'},
        {word : 'Daniel'},
        {word : 'John'},
        {word : 'Jeffrey'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    category2 : {
      name : 'Female words',
      title : { media : {word : 'Female words'}, css : {color:'#31940F','font-size':'2em'}, height : 4 },
      stimulusMedia : [
        {image : 'Rebecca'},
        {image : 'Michelle'},
        {image : 'Emily'},
        {image : 'Julia'},
        {image : 'Anna'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    attribute1 : {
      name : 'Career words',
      title : { media : {word : 'Career words'}, css : {color:'#31940F','font-size':'2em'}, height : 4 },
      stimulusMedia : [
        {word: 'Corporation'},
        {word: 'Salary'},
        {word: 'Office'},
        {word: 'Professional'},
        {word: 'Management'},
        {word: 'Business'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    attribute2 : {
      name : 'Family words',
      title : { media : {word : 'Family words'}, css : {color:'#31940F','font-size':'2em'}, height : 4 },
      stimulusMedia : [
        {word: 'Wedding'},
        {word: 'Marriage'},
        {word: 'Parents'},
        {word: 'Relatives'},
        {word: 'Family'},
        {word: 'Home'},
        {word: 'Children'},
        {word: 'Scorn'}
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    }
  });
});
