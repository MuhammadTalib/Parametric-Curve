class compute_curve{
    constructor(minT,maxT)
    {
      this.minT=minT;
      this.maxT=maxT;
      this.x=x;
      this.y=y;
    }

    mapToarray(){
      var list=[];
      var parts=1000;
      var a=20;
      var t=(this.maxT - this.minT)/parts;
      console.log("t",t,this.maxT,this.minT)
      var list2=[]
    for(var i=this.minT;i<this.maxT;i=i+t)
        {
            var obj1=new Object()
            this.x=a*i*i/2; //parabola
            this.y=2*a*i+cvs.height/2;
            
            obj1.x=this.x;
            obj1.y=this.y;
            
            list2.push(obj1);
            
            i=i*(-1)
            this.x=a*i*i/2;
            this.y=2*a*i+ cvs.height/2;
            var obj2=new Object()
            obj2.x=this.x;
            obj2.y=this.y;
            
            list.push(obj2);
            i=i*(-1)
            
        }
        this.draw(list);
        this.draw(list2);

        console.log("list",list)
                this.draw(list);
     }
    
    draw(list)
    {
        var j;
        var i=0
        var p1=list[i]
        for(var j=1;j<list.length;j++)
        {
            var p2=list[j]
            ctx.moveTo(p1.x,p1.y)
            ctx.lineTo(p2.x,p2.y);
            ctx.stroke();
            p1=p2
        } 
    }
}