var names={
op:'Let the wind tell you',
m01:'Untitled (01)',
chicken:'ni tai mei',
new:'Untitled (00)',
mkbk:'Makka Pakka',
rr:'Rickroll',
igallta:'igallta',
awa:' (⊙ω⊙)',
};

var songs={
op$ez:{
    composer:'ChiliChill',
    track:[-2,1,3,5,7,9,11,13,15, 17,21,25,27,29,    ],
    map  :[5,1,4,2,5,1,3,5,3,     1,5,2,4,1,         ],
    hold :[2.5,,,,,1.5,1.5,1.5,,  3.5,3.5,1.5,1.5,3, ],
    offset:-0.93,
    beat:0.25,
    current:1,
    url:'http://music.163.com/song/media/outer/url?id=1818031620'
},
op$in:{
    composer:'ChiliChill',
    track:[-2,-1,0,1,2,3,5,6,7,9,10,11,12,13,14,15,16, 17,18,19,21,22,23,25,26,27,28,29,30,31,32, 33,33,34,35,35,37,37,38,39,39,41,41,42,43,43,44,45,45,46,47,48, 49,51,53,55,57,59,61, 
            64,64.5,65,66,66.5,67,68,69,69.5,70,70.5,71, 72,72.5,73,74,74.5,75,76,77,77.5,78,78.5,79, 80,80.5,81,82,82.5,83,84,85,85.5,86,86.5,87, 88,88.5,89,90,90.5,91,92,93,93.5,94,94.5,95, ],
    map  :[1,3,5,2,4,5,1,3,5,5,1,3,2,4,5,4,2,          5,2,1,5,3,2,4,1,5,3,1,5,4,3,               2,5,1,2,4,3,5,2,1,4,2,4,5,1,4,3,2,4,1,5,3,                      1,4,5,3,2,5,1,        
            3,1,4, 4,2,5, 2, 4,1,5,1,4,                  2,5,1, 1,4,2, 1, 2,5,1,5,2,                  4,2,1, 4,2,5, 4, 1,2,4,2,5,                  2,4,5, 2,4,1, 2, 5,4,2,4,1,                  ],
    hold :[,,,2,,,2,,,3,,,3,,,1,,                      1.5,,1.5,1.5,,1.5,1.5,,1.5,,3,,,,          ,1.5,,,1.5,,1.5,,,1.5,1.5,,,1.5,,,,1.5,,,,                      3,,3,,3.5,4.5,2.5,    
            ,0.5,, ,0.5,, , ,,,,,                        ,0.5,, ,0.5,, , ,,,,,                        ,,0.5, ,,0.5, , ,,,,1,                       ,,0.5, ,,0.5, , ,,,,1,                       ],
    offset:-0.93,
    beat:0.25,
    current:1,
    url:'http://music.163.com/song/media/outer/url?id=1818031620'
},
a$a:{
    composer:'laman29',
//    track:Array(66+18+1).fill().map((x,y)=>y+12),
//    map:Array(66).fill().map((x,y)=>4-[0.8,1.6,2.4,3.2,2.4,1.6][y%6]).concat(Array(18).fill().map((x,y)=>3.2-0.48*(y%6))).concat([2]),
    track:[1,5,9,13,13,15,15,17,21,21,25,25,29,31,],
    map:  [1.5,-2.5,-3,-1,2.5,1.5,-3,2,-1.5,-2.5,1,3,-2,2,],
    hold: [11,3,3,,,,,3,3,3,3,3,2,1.5,],
    offset:-1.9,
    beat:0.36,
    current:0,
    url:'https://music.163.com/song/media/outer/url?id=1961805370'
},
a$in:{
    composer:'',
    track:[1,2,3,4,5,6,7,8],
    map  :[2,-2,2,-2,2,-2,2,-2],
    hold :[1,1,1,1,1,1,1,1],
    offset:0,
    beat:0.3,
    current:0,
    url:''
},
m01$in:{
    composer:'laman29',
    track:[-1,0,1,3,4,5,7,8,9,10,10.5,11,12,13,13,        16,16.5,17,17,18.5,18.5,20,20,21,21,22.5,22.5,24,24,24.5,25,25,27,29, ],
    map  :[1.5,2.5,1,3,2.5,1.5,2.5,2,1,1.5,2,1.5,2.5,1,3, 2.5,1.5,1,2,1.5,3,1,2.5,2,3,1.5,2.5,1,2,2.5,1.5,2.5,2.5,2.5,          ],
    hold :[,,3,,,3,,,1.5,,,1,,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,1,1,                                                        ],
    offset:-0.52,
    beat:0.27,
    current:0,
    url:'media/m01.mp3'
},
chicken$ez:{
    composer:'SWIN-S',
    track:[-2,-1,0,1,3,5,7,10,11,        14,15,16,17,17,19,19,21,21,23,23,26,27, 28,29,30,30.5,31,32,33,33,35,37,39,42,43, 46,47,48,49,49,51,51,53,53,55,55,58,59,60,61,62,63, ],
    map  :[1.5,2,2,3,3,2.5,1.5,1.5,1, 1.5,2.5,2,1,3,2,3,1.5,2.5,1,2,1.5,1,       3,2.5,2.5,1.5,2.5,3,1,2.5,2,3,1,2,1.5,    2.5,3,1,1.5,3,1,2,2,3,1,2.5,3,1.5,2.5,2,1.5,1,      ],
    offset:-0.81,
    beat:0.28037,
    current:0.25,
    url:'../draw32/jntm_full.mp3'
},
chicken$in:{
    composer:'SWIN-S vs. laman29',
    track:[-2,-1,0,1,1,3,3.5,4,4.5,5,5.5,6,7,7.5,8,9,10,11,11,13, 14,15,15,16,17,17,19,19.5,20,20.5,21,21.5,22,23,23.5,24, 25,26,27,28,29,30,30.5,31,32,33,33, ],
    map  :[1,2.5,1.5,1,3,2,3,3,3,1.5,2.5,2.5,1,2,2,1,3,1.5,2.5,1, 2.5,1.5,3,2.5,1,2,1,2,3,2,1,2,3,1,2,3,                   1.5,2.5,1,3,2.5,2.5,1.5,2.5,3,1,2,  ],
    offset:-0.81,
    beat:0.28037,
    current:0.25,
    url:'../draw32/jntm_full.mp3'
},
new$in:{
    composer:'~laman29~',
    track:[1,1,15,15,17,17,29,31, 33,33,34,35,36,37,37,39,41,41,42,43,44,45,45,47, 49,49,50,51,52,52.5,53,54,55,56,57,57,58,58.5,59,60,61,62,63, 65,66,67,68,70,71,72,73,74,75,76,77,77,79,79,80,81,82,83,84,85,87,89,89,91,91,93,93,95,95,
            97,97,98,99,100,102,103,104,105,105,107,108,109,109,111,112, 113,114,115,116,117,118,119,121,122,123,124,124.5,125,126,127,128, ],
    map  :[1,3,1,2,  2,3,  2, 1,  2,3,2,3,1,2,3,1.5,      1,2,3,2.5,1.5,1,2,3,     2,3,2.5,1.5,3,1,3,1.5,2.5,1,1.5,2.5,3,2,3,2.5,2.5,2.5,2.5,    3,1,2.5,1.5,1.5,3,1,2.5,1,3,1.5,2,3,1.5,3,2.5,1,1.5,3,2,1,3,1.5,2.5,1,2,1.5,3,1,2.5,
            1,3,1.5,2.5,1.5,3,2,3,1,2.5,3,1,1.5,3,2.5,1,                 3,1,3,1,3,2,1,1.5,2.5,1.5,3,1,2.5,1.5,3,1,                         ],
    offset:-0.087,
    beat:0.174,
    url:'media/new.mp3'
},
new$legacy:{
    composer:'~laman29~',
    track:[1,1,15,15,17,17,29,31, 33,33,34,35,36,37,37,39,41,41,42,43,44,45,45,47, 49,49,50,51,52,52.5,53,53,54,55,55,56,57,57,58,58.5,59,59.5,60,60.5,61,61.5,62,62.5,63, 65,66,67,68,70,71,72,73,74,75,76,77,77,79,79,80,81,82,83,84,85,87,89,89,91,91,93,93,95,95,
            97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,111,112,112,113,114,115,115,116,116.5,117,117,118,118.5,119,119,120,121,121,122,122,123,123,124,124,125,125.5,126,126.5,127,127.5,128,],
    map  :[1,3,1,2,  2,3,  2, 1,  2,3,2,3,1,2,3,1.5,      1,2,3,2.5,1.5,1,2,3,     2,3,2.5,1.5,3,2,1.5,2.5,3,1,2,2.5,1.5,2.5,3,2,3,1.5,2.5,1.5,2.5,1.5,2.5,1.5,2.5,        3,1,2.5,1.5,1.5,3,1,2.5,1,3,1.5,2,3,1.5,3,2.5,1,1.5,3,2,1,3,1.5,2.5,1,2,1.5,3,1,2.5,
            3,1,3,1.5,3,1,2.5,1.5,2.5,3,2.5,2,1.5,1,1.5,2.5,1,2,1.5,2.5,1,3,1.5,2.5,2,3,1,2,1.5,2.5,3,1,2.5,1.5,3,1,2.5,1.5,3,1.5,2.5,1.5,2.5,1.5,2.5,1,],
    offset:-0,
    beat:0.176,
    url:'media/new.mp3'
},
mkbk$ez:{
    composer:'laman29',
    track:[1,3,5,7,9,11,13, 17,19,21,23,25,27,29, 33,35,38.5,39,41,43,45,45, 49,51,53,55,57,59,61,61,65],
    map  :[1,3,1,3,1,2,3,   1,2,3,2,3,2,1,        2,2,1,2,3,2,1,2,         2,3,2,1,2,3,1,3,2],
    offset:-0.1,
    beat:0.226,
    current:10.5,
    url:'http://music.163.com/song/media/outer/url?id=1482222430.mp3'
},
mkbk$hd:{
    composer:'laman29',
    track:[1,2,3,4,5,6,7,8,9,10,11,12,13,13,15, 17,18,19,20,21,22,23,24,25,26,27,28,29,29,31, 33,33,35,35,37,38.5,39,41,41,43,43,45,45, 48,48.5,49,49.5,50,50.5,51,52,53,53,54,55,55,56,57,58,59,60,61,61, 65,],
    map  :[3,1,2,1,3,1,2,1,3,2,1,2,1,3,     2,  3,2,3,2,1,2,1,2,3,1,2,3,1,2,               1, 2,3,1,2,1.5,3,1,2,3,1.5,2.5,1,3,          2,1,3,1,2.5,1.5,2,1,2,3,2.5,1,2,2.5,3,1,2,2.5,1,3,                 2,],
    offset:-0.2,
    beat:0.226,
    current:10.5,
    url:'http://music.163.com/song/media/outer/url?id=1482222430.mp3'
},
mkbk$in:{
    composer:'laman29',
    track:[1,2,3,4,5,6,7,8,9,10,11,11,12,12,13,13,14,15,16,         17,17,18,19,19,20,21,21,22,23,23,24,25,25,26,27,27,28,28,29,29,30,31,32, 33,33,34,35,35,36,37,38,38.5,39,40,41,41,42,43,43,44,45,45,46,47,48, 49,50,51,52,53,53,54,55,55,56,57,57,58,59,59,60,61,61,63,63, 64,64.3,65,65.3,],
    map  :[3,1,2.5,1.5,3,1,2.5,1.5,3,1.5,2,3,1.5,2.5,1,3,1.5,2.5,1, 2,3,2.5,1,3,2.5,1,2,3,1.5,2.5,1,1.5,3,1,2,3,1,2,1.5,3,2.5,2,1,           1,3,2.5,1,3,2,1,2.5,1.5,3,1.5,1,2,2.5,1.5,3,2.5,1,3,3,1.5,2.5,       3,1,2.5,1.5,2,3,2.5,1,3,2.5,1,2,1.5,2,3,1,1.5,2.5,1,3,     3,1.5,2.5,1,],
    offset:-0.2,
    beat:0.226,
    current:10.5,
    url:'http://music.163.com/song/media/outer/url?id=1482222430.mp3'
},
rr$ez:{
    composer:'Rick Astley vs. laman29',
    track:[0,0,1,1,3,4,5,7,8,9, 10,16,22,24, 26,32,38,39,40,41, 42,48,54,56, 58,58,62,62,66,68,69,70,71,72,73, ],
    map  :[1,3,1,3,3,2,3,1,2,1, 2, 3, 1, 1,  3, 2, 1, 2, 3, 2,  1, 3, 1, 1,  1.5,2.5,1.5,2.5,2,1,1,3,3,1,1,    ],
    offset:-0.55,
    beat:0.131579,
    url:'https://music.163.com/song/media/outer/url?id=5221167'
},
igallta$ez:{
    composer:'Se-U-Ra',
    track:[10,12,15,18,18,30,34,36,38,40,42,45,48, 50,52,53,54,56,58,61,64, 66,68,70,72,74,77,80, 82,83,86,88,90,90,94,94, 98,98,98],
    map  :[1, 2, 2, 1, 2, 1, 1, 3,2.5,2, 3, 2, 1,  3, 2, 3,2.5,3, 1, 2, 3,  1, 3,2.5,2, 3, 2, 1,  1.5,1.6,2.5,1.2,2,3,1,2, 1, 2, 3],
    offset:-1.8,
    beat:0.13125,
    url:'https://music.163.com/song/media/outer/url?id=1904191784'
},
awa$in:{
    composer:'laman29 XD',
    track:Array(616).fill().map(function(y,x){return x}),
//    map:Array(616).fill().map(function(x,y){return 2+(y%2?1:-1)*(1-Math.floor(Math.random()*2.2)/2)}),
    map:Array(616).fill(2),
    offset:0,
    beat:0.17/2,
    url:'https://music.163.com/song/media/outer/url?id=1811959255'
},
awa$sp:{
    composer:'laman29 XD',
    track:Array(616).fill().map(function(y,x){return x}),
    map:Array(616).fill().map(function(x,y){return 2+(y%2?1:-1)*(1-Math.floor(Math.random()*2.2)/2)}),
//    map:Array(616).fill(2),
    offset:0,
    beat:0.17/2,
    url:'https://music.163.com/song/media/outer/url?id=1811959255'
},

/*Tip:
xx$in:{
    composer:'',
    track:[],
    map  :[],
    offset:0,
    beat:0.1,
    current:0,
    url:''
},
*/

};

var old_maps=['m01','chicken','new','mkbk','rr','igallta','awa'];
