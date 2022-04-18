import configurations from './flowConfigs.js';

class ReadingTracker {
    constructor(configurations, patternChangeEmitter){
        this.selectedConfName = undefined;
        this.onPageChange("triangles");
    }

    onPageChange(page){
        console.log("flowing to page "+page);

        const pageToConfig = {
            "/": "colors",
            "/synesthesia1/": "circle",
            "/abluedwarftale/": "trianglesCrystals",
            "/blog/2120_imagination_machine": "smoke",
            "/blog/the_imagination_machine_today": "green_smoke",
            "/blog/about_the_method": "red_smoke",
            // "/": "triangles",
            // "/page-2/": "points",
            // "/blogarticle2/": "trianglesCrystals",
            // "/blog/jenny": "circle",
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