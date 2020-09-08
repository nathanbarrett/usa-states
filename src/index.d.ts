// Type definitions for usa-states 0.0.1
// Project: A library that helps you generate the list of states you like
// Definitions by: Nathan Barrett www.dysonsphere.solutions


export as namespace usaStatesLib;

export = UsaStates;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace UsaStates {
    export interface IStateResult {
        name: string,
        abbreviation: string,
        territory: boolean,
        capital: string,
        contiguous: boolean,
    }

    export interface IConfiguration {
        contiguousOnly: boolean,
        includeTerritories: boolean,
        exclude: string[],
        ignoreCharacter: string
    }
    
    /*~ Write your module's methods and properties in this class */
    export class UsaStates {
        constructor(configuration?: UsaStates.IConfiguration);

        states: IStateResult[];
        config: UsaStates.IConfiguration;

        /** Takes a selector of 'abbreviation', 'state', or 'capital' and returns an array of strings */
        arrayOf(selector: string): string[];

        /** Takes a custom object template with aliases and returns an array of us states in that format */
        format(customFormat?: Object): Object[];
    }
}
