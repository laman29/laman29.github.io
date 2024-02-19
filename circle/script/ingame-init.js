//script/ingame-init.js

try{
//throw 'I miss you.';

var speed=140;
var delay=0;
var lineY=90;
var T80=0.08,T160,T180;
var current=0;
var mode=0;
var tapsound=false;
var autoplay=false;
var mirror=false;
var ezhd_speed_slowdown=true;
var airmode=false;
var auto_fit_screen=true;
var pattern_width=1,
    hold_pattern_width;
var rate=1;
var arc_color=['#00ddff','#ff55dd','#00ff00'];
//var arc_color=['#00ddff','#ffff33','#00ff00'];

var _args=location.search.substring(1).split('&');
var _sch=_args[0].replace('.','$');
var _rest=_args.slice(1);
var [_id,level]=_sch.split('$',2);

if(_sch in songs){
    var songname=names[_id];
    var _song=songs[_sch];
    var composer=_song.composer;
    var track=_song.track;
    var map  =_song.map;
    if(old_maps.indexOf(_id)>-1){
        map=map.map(x=> 2*x-Math.sign(x));
    }
    var hold =_song.hold ?? [];
    hold=track.map((x,i)=> hold[i] ?? 0);
    var arc=[],arc_count=0;
    if(_song.arc){
        var i,j,k,_from_track,_this_track,_from_arc,_this_arc,_subarc,_cmd,_index,_start,_end,_x0='unknown',_x1,_type;
        for(i=0;i<_song.arc.length;i++){
            _from_track=_song.arc[i];
            _this_track={
                pin:0,
                flag:0,
                color:arc_color[i],
                arcs:[]
            };
            arc.push(_this_track);
            for(j=0;j<_from_track.length;j++){
                _from_arc=_from_track[j].split(' ');
                _this_arc={
                    pin:0,
                    flag:0,
                    start:null,
                    end:null,
                    subarcs:[]
                };
                _this_track.arcs.push(_this_arc);
                _start=null;
                _x0='unknown';
                for(k=0;k<_from_arc.length;k++){
                    _cmd=_from_arc[k];
                    _index=ARC_TYPES.indexOf(_cmd.toUpperCase());
                    if(_index>-1){
                        _type=_index;
                    }else{
                        [_end,_x1]=_cmd.split(':');
                        _end=+_end;
                        _x1=+_x1;
                        if(_x0!='unknown'){
                            _this_arc.subarcs.push(_subarc={
                                pin:0,
                                flag:0,
                                notes:[],
                                start:_start,
                                end:_end,
                                x0:_x0,
                                x1:_x1,
                                type:_type
                            });
                            var len=_end-_start;
                            if(_song.beat<0.12){
                                len/=2;
                            }
                            var _note= len==0?0 :len<1?1 :_this_arc.subarcs.length>1?Math.floor(len*2) :Math.floor(len*2-1);
                            _subarc.notes=Array(_note).fill(0);
                            arc_count+=_note
                        }
                        _type=0;
                        _start=_end;
                        _x0=_x1;
                        _this_arc.end=_end;
                    }
                }
                _this_arc.start=_this_arc.subarcs[0].start;
            }
        }
    }
    var total_count=track.length+arc_count;
    var offset=_song.offset;
    var beat=_song.beat;
    level=(level=='legacy'?'Legacy':level.toUpperCase());
    if(ezhd_speed_slowdown){
        switch(level){
        case 'EZ':
            speed*=0.75;
        break;
        case 'HD':
            speed*=0.85;
        }
    }
    if(tapsound){
        delay-=200;
    }
    if(airmode || !_song.url){
        var music={
            readyState:4,
            play:()=>{},
            pause:()=>{},
            addEventListener:(name,func,...args)=>{func(event,...args)}
        };
    }else{
        var music=new Audio(_song.url);
    }
    music.preload='auto';
    music.currentTime=_song.current??0;
    var _l,_k,_v,b_i,i_i;
    var BOOL_ARGS='tapsound,autoplay,mirror,ezhd_speed_slowdown,airmode,auto_fit_screen'.split(',');
    var INTG_ARGS='speed,delay,lineY,T80,T160,T180,current,mode,pattern_width,hold_pattern_width,rate'.split(',');
    for(var i=0;i<_rest.length;i++){
        _l=_rest[i].split('=');
        if(_l.length==1){
            if(BOOL_ARGS.indexOf(_l[0])>-1){
                _l.push('yes');
            }else{
                continue;
            }
        }
        [_k,_v]=_l;
        b_i=BOOL_ARGS.indexOf(_k);
        if(b_i>-1){
            _v=['yes','y'].indexOf(_v.toLowerCase())>-1;
            window[_k]=_v;
            continue;
        }
        i_i=INTG_ARGS.indexOf(_k);
        if(i_i>-1){
            _v=+_v;
            if(_v==_v){
                window[_k]=_v;
            }
        }
    }
    T160??=T80*2;
    T180??=T80*2.25;
    if(mirror){
        map=map.map(x=> Math.sign(x)*6-x);
    }
    hold_pattern_width??=pattern_width
}else{
    location.replace('index.html');
}

}catch(e){
    //alert('你看这个laman29，又写了一个Bug！\n错误信息：'+e)
    alert('参数格式不正确\n'+e);
    //location.replace('index.html');
}
