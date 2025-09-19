define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.7.3/IAT/qualtrics/quiat9.js'],
function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    // Categories (at least 6 each)
    category1 : {
      name : 'Male words',
      title : { media : {word : 'Male words'}, css : {color:'#31940F','font-size':'2em'}, height : 4 },
      stimulusMedia : [
        {word : 'Ben'},
        {word : 'Paul'},
        {word : 'Daniel'},
        {word : 'John'},
        {word : 'Jeffrey'},
        {word : 'Adam'}           // added to reach 6
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    category2 : {
      name : 'Female words',
      title : { media : {word : 'Female words'}, css : {color:'#31940F','font-size':'2em'}, height : 4 },
      stimulusMedia : [
        {word : 'Rebecca'},
        {word : 'Michelle'},
        {word : 'Emily'},
        {word : 'Julia'},
        {word : 'Anna'},
        {word : 'Lauren'}         // added to reach 6
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    },

    // Attributes (aim for ~8 each)
    attribute1 : {
      name : 'Career words',
      title : { media : {word : 'Career words'}, css : {color:'#31940F','font-size':'2em'}, height : 4 },
      stimulusMedia : [
        {word: 'Corporation'},
        {word: 'Salary'},
        {word: 'Office'},
        {word: 'Professional'},
        {word: 'Management'},
        {word: 'Business'},
        {word: 'Career'},         // added
        {word: 'Engineer'}        // added
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
        {word: 'Siblings'}        // replaced 'Scorn'
      ],
      stimulusCss : {color:'#31940F','font-size':'1.8em'}
    }
  });
});
