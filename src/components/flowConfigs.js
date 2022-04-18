import TilesFlow from './TilesFlow/TilesFlow.js';
var configurations = {
    points: {
        forces: [
            {
             x: 110,
             y: 90,
             decay: "superGentle",
             intensity: 190,
             influencePosition: true,
             influenceColor: false,
             color: [100, 100, 100, 0],
           },
           {
            x: 90,
            y: 10,
            decay: "sine",
            intensity: 100,
            influenceColor: false,
            color: [100, 100, 100, 250],
        },
        {
            x: 30,
            y: 35,
            decay: "superGentle",
            intensity: 30,
            influencePosition: true,
          },
          {
            x: 30,
            y: 70,
            decay: "gentle",
            intensity: 120,
            influenceColor: false,
            color: [255, 255, 255, 0],
          }
        ],
        visualConfig: {
            pointsColor: [100,100,100,255]
        },
        speedOffset: -2
    },
    circle: {
        forces: [
            {
                x: 0,
                y: 0,
                decay: "linear",
                intensity: 90,
                influencePosition: true,
                influenceColor: true,
                color: [150, 0, 200, 0]
          },
        ],
        visualConfig: {
            step: 100,
            pointsColor: [0,0,0,255]
        }
    },
    triangles: {
        visualConfig: {
            padding: [0, 0, 5, 0],
            stroke: [0,0,0,20],
            pointsColor: [0,255,0,0],
        },
        forces: [
            {
             x: 110,
             y: 15,
             decay: "superGentle",
             intensity: 190,
             influencePosition: true,
             influenceColor: true,
             color: [100, 100, 100, 100],
           },
           {
            x: 90,
            y: 70,
            decay: "sine",
            intensity: 100,
            influenceColor: true,
            color: [50, 50, 50, 250],
        },
        {
            x: 30,
            y: 70,
            decay: "superGentle",
            intensity: 100,
            influencePosition: true,
          },
          {
            x: 30,
            y: -30,
            decay: "gentle",
            intensity: 120,
            influenceColor: true,
            color: [70, 70, 70, 255],
          }
        ],
    },
    trianglesCrystals: {
        visualConfig: {
            padding: [0, 0, 5, 0],
            stroke: [0,0,0,0],
            pointsColor: [0,255,0,0],
            showForces: false,
            pattern: TilesFlow.PATTERNS.brokenGlass,
        },
        speedOffset: 0.2,
        forces: [
            {
             x: 20,
             y: 5,
             decay: "superGentle",
             intensity: 50,
             influencePosition: true,
             influenceColor: true,
             color: [255, 50, 50, 150],
           },
           {
            x: 90,
            y: 90,
            decay: "linear",
            intensity: 100,
            influencePosition: true,
            influenceColor: true,
            color: [200, 200, 200, 250],
        },
        {
            x: 0,
            y: 30,
            decay: "superGentle",
            intensity: 30,
            influencePosition: true,
            influenceColor: true,
            color: [150, 50, 50, 250],
          },
          {
            x: 30,
            y: 0,
            decay: "gentle",
            intensity: -30,
            influenceColor: true,
            color: [255, 50, 50, 200],
          }
        ],
    },
    colors: {
        visualConfig: {
            padding: [0, 0, 5, 0],
            stroke: [0,0,0,0],
            pointsColor: [0,0,0,0],
        },
        forces: [
            {
             x: 90,
             y: 50,
             decay: "superGentle",
             intensity: 50,
             influencePosition: true,
             influenceColor: true,
             color: [120, 50, 100, 50],
           },
           {
            x: 30,
            y: 70,
            decay: "gentle",
            intensity: 100,
            influencePosition: true,
            influenceColor: true,
            color: [50, 100, 255, 250],
        },
        {
            x: 0,
            y: 40,
            decay: "superGentle",
            intensity: 60,
            influencePosition: true,
            influenceColor: true,
            color: [255, 100, 100, 250],
          },
          {
            x: 30,
            y: -30,
            decay: "gentle",
            intensity: -30,
            influenceColor: true,
            color: [70, 200, 70, 50],
          }
        ],
        speedOffset: -0.5
    },
    smoke: {
        visualConfig: {
            padding: [0, 0, 5, 0],
            stroke: [0,0,0,0],
            pointsColor: [0,0,0,0],
        },
        forces: [
            {
             x: 90,
             y: 50,
             decay: "superGentle",
             intensity: 50,
             influencePosition: true,
             influenceColor: true,
             color: [70, 70, 70, 150],
           },
           {
            x: 30,
            y: 70,
            decay: "gentle",
            intensity: 100,
            influencePosition: true,
            influenceColor: true,
            color: [200, 200, 200, 250],
        },
        {
            x: 0,
            y: 30,
            decay: "superGentle",
            intensity: 30,
            influencePosition: true,
            influenceColor: true,
            color: [150, 50, 50, 250],
          },
          {
            x: 30,
            y: 0,
            decay: "gentle",
            intensity: -30,
            influenceColor: true,
            color: [255, 50, 50, 200],
          }
        ],
        speedOffset: -0.5
    },
    red_smoke: {
        visualConfig: {
            padding: [0, 0, 5, 0],
            stroke: [0,150,0,20],
            pointsColor: [150,0,0,50],
        },
        forces: [
            {
             x: 90,
             y: 50,
             decay: "superGentle",
             intensity: 50,
             influencePosition: true,
             influenceColor: true,
             color: [150, 100, 100, 150],
           },
           {
            x: 30,
            y: 70,
            decay: "gentle",
            intensity: 100,
            influencePosition: true,
            influenceColor: true,
            color: [250, 200, 200, 250],
            },
            {
            x: 0,
            y: 30,
            decay: "superGentle",
            intensity: 30,
            influencePosition: true,
            influenceColor: true,
            color: [150, 50, 50, 250],
            },
            {
            x: 30,
            y: 0,
            decay: "gentle",
            intensity: -30,
            influenceColor: true,
            color: [255, 100, 100, 200],
            }
        ],
        speedOffset: -0.5
        },
        padding: {
            forces: [
                {
                x: 50,
                y: 40,
                decay: "linear",
                intensity: 100,
                influencePosition: true
            }
            ],
            visualConfig: {
                stroke: [100,0,100,255],
                baseColor: [250,250,0,100],
                padding: [0,0,1,0]
            }
    },
    green_smoke: {
        visualConfig: {
            padding: [0, 0, 5, 0],
            stroke: [0,150,0,20],
            pointsColor: [0,150,0,50],
        },
        forces: [
            {
             x: 90,
             y: 50,
             decay: "superGentle",
             intensity: 50,
             influencePosition: true,
             influenceColor: true,
             color: [100, 150, 100, 150],
           },
           {
            x: 30,
            y: 70,
            decay: "gentle",
            intensity: 100,
            influencePosition: true,
            influenceColor: true,
            color: [200, 250, 200, 250],
            },
            {
            x: 0,
            y: 30,
            decay: "superGentle",
            intensity: 30,
            influencePosition: true,
            influenceColor: true,
            color: [50, 150, 50, 250],
            },
            {
            x: 30,
            y: 0,
            decay: "gentle",
            intensity: -30,
            influenceColor: true,
            color: [100, 255, 100, 200],
            }
        ],
        speedOffset: -0.5
        },
        padding: {
            forces: [
                {
                x: 50,
                y: 40,
                decay: "linear",
                intensity: 100,
                influencePosition: true
            }
            ],
            visualConfig: {
                stroke: [100,0,100,255],
                baseColor: [250,250,0,100],
                padding: [0,0,1,0]
            }
    },
    forces_colors: {
        forces:[
            {
                 x: 50,
                 y: 40,
                 decay: "linear",
                 intensity: 100,
                 influencePosition: true,
                 influenceColor: true,
                 color: [250, 0, 100, 250]
           }
       ],
        visualConfig: {
                stroke: [255,255,255,255],
                pointsColor: [0,0,0,255],
                baseColor: [50,100,50,50],
                showForces: true,
                padding: [0,0,1,0]
        }
    },
    more_on_colors: {
        forces:[
            {
                 x: 50,
                 y: 40,
                 decay: "linear",
                 intensity: 100,
                 influencePosition: true,
                 influenceColor: true,
                 color: [150, 0, 200, 0]
           },
           {
                 x: 20,
                 y: 60,
                 decay: "cosine",
                 intensity: 150,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
          {
                 x: 80,
                 y: -20,
                 decay: "sine",
                 intensity: 150,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
         {
                 x: 60,
                 y: 60,
                 decay: "clipping_power",
                 intensity: 200,
                 influenceColor: true,
                 color: [0, 200, 200, 0]
           }

       ],
        visualConfig: {
                stroke: [255,255,255,0],
                baseColor: [255,255,255,255],
                padding: [0,0,1,0],
                colorInterpolationMode: "subtraction"
        }
    },
    patterns: {
        forces:[
            {
                 x: 50,
                 y: 40,
                 decay: "linear",
                 intensity: 100,
                 influencePosition: true,
                 influenceColor: true,
                 color: [150, 0, 200, 0]
           },
           {
                 x: 35,
                 y: 60,
                 decay: "cosine",
                 intensity: 80,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
          {
                 x: 80,
                 y: -20,
                 decay: "sine",
                 intensity: 90,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
         {
                 x: 60,
                 y: 60,
                 decay: "clipping_power",
                 intensity: 100,
                 influenceColor: true,
                 color: [0, 200, 200, 0]
           },

            {
                 x: 55,
                 y: 90,
                 intensity: 100,
                 influencePosition: true
           },

           {
                 x: 30,
                 y: 90,
                 intensity: 100,
                 influencePosition: true
           }

       ],
        visualConfig: {
                baseColor: [255,255,255,255],
                stroke: [50,50,50,50],
                padding: [0,2,0,0],
                colorInterpolationMode: "subtraction",
                pattern: TilesFlow.PATTERNS.brokenGlass
        }
    }
};

export default configurations;