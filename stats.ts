//% color="#AA278D" icon="\uf205"
namespace stats {
    /**
     * Toggle stats being on or off. 
     */
    //% block="turn stats %on"
    //% on.shadow="toggleOnOff"
    //% weight=100
    export function turnStats(on: boolean) {
        game.stats = on;
        if (!game.stats && control.EventContext.onStats) {
            control.EventContext.onStats("");
        }
    }

    /**
     * Set the stat text to a string.
     */
    //% block="set stat text to %str"
    //% weight=90
    export function setStat(str: string) {
        control.EventContext.onStats(str);
    }
    /**
     * Returns if stats are on or not as a boolean.
     */
    //% block="if stats on"
    //% weight=80
    export function ifStats() {
        return game.stats
    }
}