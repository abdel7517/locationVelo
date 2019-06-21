class Sign
{
    constructor()
{
   this.canvas = document.createElement('canvas');

    $(this.canvas)
       .attr('id', "canvas")
       .text('unsupported browser')
       .width("150px")
       .height("100px")
       .appendTo("form");
this.context = this.canvas.getContext("2d");
this.context.strokeStyle = "rgb(23, 145, 167)";
this.context.lineCap = 'round';
this.context.lineCap = 'round';
this.cursorX, this.cursorY;
this.painting = false;
this.started = false;
this.mousemove();
this.mousedown();
this.mouseup();

};

mousedown()
        {

          $("#canvas").mousedown((e) =>
          {
            this.painting = true;
            // Coordonnées de la souris :
            this.cursorX = e.pageX;
            this.cursorY = e.pageY;
          });
         };

mousemove()
        {
            $("#canvas").mousemove((e) =>
            {
             if (this.painting)
             {
                    this.cursorY = (e.pageY - canvas.offsetTop);
                    this.cursorX = (e.pageX - canvas.offsetLeft);
                    this.drawline();
             }

            });

        };

drawline()
{

    if (!this.started)
    {
            this.context.beginPath();
            this.context.moveTo(this.cursorX, this.cursorY);
           console.log(this.cursorX);
           console.log("a");

            this.started = true;
     }
    else
    {
            this.context.lineTo(this.cursorX, this.cursorY);
            this.context.stroke();
    }

};

mouseup()
{
    $("#canvas").mouseup((e) =>
        {
            this.painting = false;
            this.started = false;
        })

}


};


 new Sign();













