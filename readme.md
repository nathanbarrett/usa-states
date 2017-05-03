# Usa States

A simple javascript library to aid with the creation of your custom array of US States.

## Installation

`npm install usa-states`

Then include the library in your project with either

```javascript
var UsaStates = require('usa-states').UsaStates;
```

or

```html
<script src="/js/usa-states.js"></script>
```

## Usage

To quickly get a simple array of US States objects

```javascript
var usStates = new UsaStates();
console.log(usStates.states);
```
Outputs
```
{
    name: "Alabama",
    abbreviation: "AL",
    territory: false,
    capital: "Montgomery",
    contiguous: true
},
{
    name: "Alaska",
    abbreviation: "AK",
    territory: false,
    capital: "Juneau",
    contiguous: false
},
...(other states omitted for brevity)
{
    name: "Wyoming",
    abbreviation: "WY",
    territory: false,
    capital: "Cheyenne",
    contiguous: true
}
```

You can optionally filter or add to the list of US States

```javascript
var lowerFourtyEight = new UsaStates({contiguousOnly: true});
console.log('Lower 48 states only', lowerFourtyEight.states);

var statesAndTerritories = new UsaStates({includeTerritories: true}); 
console.log('All states including territories', statesAndTerritories.states);

```

You can also manually exclude one or more using any of the alias selectors

```javascript
var allStatesExceptDCandWY = new UsaStates({exclude: ['DC', 'Wyoming']});
```

You can get them as an array of strings using an alias selector
(full list of alias selectors below)

```javascript
var usStates = new UsaStates(myOptionalFilterSettings);
var statesAbbreviation = usStates.arrayOf('abbreviations');
var statesNames = usStates.arrayOf('names');
console.log(statesAbbreviation);
console.log(statesNames);
```
Outputs
```
["AL", "AK", ... , "WY"]
["Alabama", "Alaska", ..., "Wyoming"]
```

You can also get them as an array of custom objects using the alias selectors
If you want an alias ignored just append a '$' character to the desired location
(note: you can change this ignore character in your filter config, see below)

```javascript
var usStates = new UsaStates(myOptionalFilterSettings);
var myCustomStates = usStates.format({
    name: 'abbreviation',
    $abbreviation: 'abbr', // alternate alias 'abbr', see all below
    abbr: '$name',
    $capital: 'c',
});
console.log(myCustomStates);
```
Outputs
```
{
    Alabama: "AL",
    abbreviation: "AL",
    AL: "name",
    capital: "Mobile"
},
{
    Alaska: "AK",
    abbreviation: "AK",
    AK: "name",
    capital: "Juneau"
},
...
{
    Wyoming: "WY",
    abbreviation: "WY",
    WY: "name",
    capital: "Cheyenne"
}
```

### Configuration Settings

| Property Name | Default | Description |
| ------------- |:-------:| ----------- |
| contingousOnly | `false` | Filter out any state that is not in the lower 48. (note: this also filters out territories) |
| includeTerritories | `false` | Includes territories and affiliates of the United States such as Puerto Rico, Virgin Islands, etc. |
| exclude | `[]` | An array of one or more states to filter from your list of states using any of the alias selectors |
| ignoreCharacter | `"$"` | The character to parse out if found appended inside of the custom format given |

### Alias Selectors

| Name | Other Acceptable Aliases | Examples
| ---- |:-----------------------:| -------
| abbreviation | a, abbr, abbreviations, | AL, AK, ... WY
| name | names, state, states, n, s | Alabama, Alaska, ... Wyoming |
| capital | c, cap, capitals | Mobile, Juneau, ... Cheyenne |



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Author: Nathan Barrett
nathan.barrett@gmail.com

## License

### ISC License
Copyright 2017 Nathan Barrett

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.