import configurations from './flowConfigs.js';

class ReadingTracker {
    constructor(configurations, patternChangeEmitter){
        this.selectedConfName = undefined;
        this.onPageChange("triangles");
    }

    onPageChange(page){
        console.log("flowing to page "+page);

        const pageToConfig = {
            "/": "triangles",
            "/page-2/": "points",
            "/blogarticle2/": "trianglesCrystals",
            "/blog/jenny": "circle",
        }

        const name = pageToConfig[page] ?? "triangles";

        if(configurations[name]){
            this.forceField = configurations[name].forces;
            this.visualSettings = configurations[name].visualConfig;
            this.selectedConfName = name;
            this.speedOffset = configurations[name].speedOffset ?? 0.5;
        }
    }
}

export default ReadingTracker;