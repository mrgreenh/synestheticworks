import TilesFlow from './TilesFlow/TilesFlow.js';
import ReadingTracker from './FlowReadingTracker.js';

function doIt(readingTracker){
  var space1 = "#tilesflowContainer";
  var space2 = "#tilesflowContainer2";
  var spaces = [space1, space2];
  
  
  var space = spaces.shift();
  spaces.push(space);
  var a = TilesFlow;
  var flows = [new TilesFlow(space, readingTracker.forceField, readingTracker.visualSettings)];

  var speedOffset = readingTracker.speedOffset;
  var transitionProgress = 0;
  var transitionLength = 100;
  var previousConfName = readingTracker.selectedConfName;
  var transitioningToConf = null;
  var offsetX = 0;
  
  function paint(timestamp){
    offsetX = offsetX + speedOffset;
    for(var i in flows){
      console.log("Rendering frame")
      var currentFlow = flows[i];
      currentFlow._space.space.getContext("2d").clearRect(0,0,currentFlow._space.size.x,currentFlow._space.size.y)
      currentFlow.render(offsetX % 100);
    }

    //Transition handling
    if(previousConfName != readingTracker.selectedConfName || transitionProgress){
      //If we are not transitioning, we start one
      if(!transitioningToConf){
        transitioningToConf = readingTracker.selectedConfName;
        var space = spaces.shift();
        var targetForceField = Array.apply(null, readingTracker.forceField);
        var targetVisualSettings = Object.assign({}, readingTracker.visualSettings)
        flows.push(new TilesFlow(space, targetForceField, targetVisualSettings))
        spaces.push(space);
      }
      
      //If we are transitioning, we keep going
      if(transitionProgress < transitionLength){
        var progress = transitionProgress/transitionLength;
        var inverseProgress = 1 - progress;
        flows[0].getCanvas().style.opacity = inverseProgress;
        flows[1].getCanvas().style.opacity = progress;
        speedOffset = speedOffset * inverseProgress + readingTracker.speedOffset * progress;
        transitionProgress ++;
      }else{ //If transition is over, we clean up
        transitionProgress = 0;
        speedOffset = readingTracker.speedOffset;
        previousConfName = transitioningToConf;
        transitioningToConf = null;
        flows.shift();
      }
    }

    window.requestAnimationFrame(paint);
  }

  paint();
}

function renderFlow(readingTracker) {
    setTimeout(() => doIt(readingTracker), 10);
}

export default renderFlow;