$(function(){
	$("div.WB_miniblog").css({"background":"none"});
    var orgColors=[
        {r:0,g:0,b:255},
        {r:255,g:127,b:80},
        {r:34,g:165,b:13}
        ]
    var colorGrandientSteps=10;
    //form color1  to   color2
    function getColor(color0,color1,curstep,defaultStep){
        return {
            g:parseInt(color0.g+(color1.g-color0.g)/defaultStep*curstep,10),
            r:parseInt(color0.r+(color1.r-color0.r)/defaultStep*curstep,10),
            b:parseInt(color0.b+(color1.b-color0.b)/defaultStep*curstep,10)
        }
    }
    var renderColor=(function(colors,defaultStep){
        var curstep=1;
        var color1=colors[0],color2=colors[1];
        return function(){
            var newColor=getColor(color1,color2,curstep,defaultStep);
            var cssColor='rgb('+newColor.r+','+newColor.g+','+newColor.b+')';
            $("div.WB_miniblog").css({
                "background-color":cssColor
            });
            curstep++;
            if(curstep===defaultStep+1){
                //curstep 置为=1
                curstep=1;
                colors.push(color1);
                colors.shift();
                color1=colors[0];
                color2=colors[1];
            }
        }
    })(orgColors,colorGrandientSteps);

    setInterval(function(){
        renderColor();
    },500);
});