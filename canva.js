let painting = false;
let started = false;
const canvas = $("#canvas");


function mousedown() {
        // Click souris enfoncé sur le canvas, je dessine :
        $(this.canvas).mousedown(function (e) {
            this.painting = true;

            // Coordonnées de la souris :
            this.cursorX = (e.pageX - this.offsetLeft);
            this.cursorY = (e.pageY - this.offsetTop);

        });

    }


if (painting)
{
    canvas.mousemove(function(e) {
      var msg = "Handler for .mousemove() called at ";
      msg += event.pageX + ", " + event.pageY;
      $( "#a" ).append( "<div>" + msg + "</div>" );
    });
}





class Sign {
    constructor() {
        // Variables :
        this.color = "#000";
        this.painting = false;
        this.started = false;
        this.width_brush = 1;
        this.canvas = $("#canvas");
        this.cursorX, this.cursorY;
        this.context = this.canvas.getContext('2d');
        // Trait arrondi :
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
        this.mousedown();
        this.mouseup();
        this.mousemove();
        this.drawLine();
    }
    mousedown() {
        // Click souris enfoncé sur le canvas, je dessine :
        $(this.canvas).mousedown(function (e) {
            this.painting = true;

            // Coordonnées de la souris :
            this.cursorX = (e.pageX - this.offsetLeft);
            this.cursorY = (e.pageY - this.offsetTop);

        });

    }



    mousemove() {
        // Mouvement de la souris sur le canvas :
        $(this.canvas).mousemove(function (e) {
            // Si je suis en train de dessiner (click souris enfoncé) :
            if (this.painting) {
                // Set Coordonnées de la souris :
                this.cursorX = (e.pageX - this.offsetLeft) - 2; // 10 = décalage du curseur
                this.cursorY = (e.pageY - this.offsetTop) - 2;
                this.drawLine()
            }
        });
    }
    // Fonction qui dessine une ligne :
    drawLine() {
        // Si c'est le début, j'initialise
        if (!this.started) {
            // Je place mon curseur pour la première fois :
            this.context.beginPath();
            this.context.moveTo(this.cursorX, this.cursorY);
            this.started = true;
        }
        // Sinon je dessine
        else {
            this.context.lineTo(this.cursorX, this.cursorY);
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.width_brush;
            this.context.stroke();
        }

    }

        mouseup() {
        // Relachement du Click sur tout le document, j'arrête de dessiner :
        $(this.canvas).mouseup(function () {
            this.painting = false;
            this.started = false;
        });
    }
}


