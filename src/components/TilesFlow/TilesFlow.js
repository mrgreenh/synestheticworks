import {Form, Point, Color} from 'ptjs';
import PointsMatrix from './PointsMatrix.js';
import patterns from './patterns.js';
import ForceField from './ForceField.js';
import {CanvasSpace} from 'ptjs';
import {debounce} from 'debounce';

class TilesFlow {

    constructor(containerId, forceField, visualSettings){
        const debouncedSetup = debounce(() => {
            if (this._windowHeight !== window.outerHeight) {
                this._windowHeight = window.outerHeight;
                this.setup(containerId, forceField, visualSettings)
            }
        }, 1000);
        window.addEventListener("resize", debouncedSetup);
        this.setup(containerId, forceField, visualSettings);
    }
    
    setup(containerId, forceField, visualSettings){
        this._windowHeight = window.outerHeight;
        this._space = new CanvasSpace('canvasElem_'+containerId.substr(1), '#fff').display(containerId);
        this._space.size.x = this._space.space.width;
        this._space.size.y = Math.max(this._space.space.height,800);
        this._forceField = new ForceField(forceField, this._space.size.y, this._space.size.x);
        this._visualSettings = visualSettings;
    }

    getCanvas(){
        return this._space.space;
    }

    render(offsetX){

        var visualSettings = Object.assign({}, {
            step: 100,
            stroke: undefined,
            fill: undefined,
            pattern: undefined,
            baseColor: [0,0,0,0],
            colorInterpolationMode: "addition",
            showForces: false,
            pattern: patterns.cloth,
            padding: [0,0,0,0],
            pointsColor: [0,0,0,0]
        }, this._visualSettings)

        var form = new Form(this._space);
        var pointsMatrix = new PointsMatrix(
            this._space.size.x,
            this._space.size.y,
            visualSettings.step,
            visualSettings.baseColor,
            visualSettings.colorInterpolationMode,
            this._forceField,
            offsetX);
        var points = pointsMatrix.getFlattenedMatrix();
        var triangles = pointsMatrix.getTiles(visualSettings.pattern, visualSettings.padding);

        var forces = pointsMatrix._forces;

        for(let triangle of triangles){
            if(triangle.color){
                var color = triangle.color;
                var fillColor = this.getFillWithSettings(color, visualSettings);
                form.fill( new Color(fillColor[0], fillColor[1], fillColor[2], fillColor[3]/255, 'rgba').rgba() );
                var strokeColor = this.getStrokeWithSettings(color, visualSettings);
                form.stroke( new Color(strokeColor[0], strokeColor[1], strokeColor[2], strokeColor[3]/255, 'rgba').rgba() );
            }
            form.triangle(triangle.concept);
        }

        var pointsColor = visualSettings.pointsColor;
        form.fill(new Color(pointsColor[0], pointsColor[1], pointsColor[2], pointsColor[3]/255, 'rgba').rgba());
        form.stroke(new Color(pointsColor[0], pointsColor[1], pointsColor[2], pointsColor[3]/255, 'rgba').rgba());
        form.points( points.map(point => point.concept) );

        if(visualSettings.showForces){
            for(let i in forces){
              var p = new Point(forces[i]._y, forces[i]._x);
              form.stroke("red");
              form.fill("red");
              form.point(p);
            }            
        }

    }

    getFillWithSettings(color, visualSettings){
        if(!visualSettings.fill) return color;
        else return visualSettings.fill;
    }

    getStrokeWithSettings(color, visualSettings){
        if(!visualSettings.stroke) return color;
        else return visualSettings.stroke;
    }
}

TilesFlow.PATTERNS = patterns;
export default TilesFlow;