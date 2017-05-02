var UsaStates = (function () {
    function UsaStates(configuration) {
        this._states = [
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
            {
                name: "American Samoa",
                abbreviation: "AS",
                territory: true,
                capital: "Pago Pago",
                contiguous: false
            },
            {
                name: "Arizona",
                abbreviation: "AZ",
                territory: false,
                capital: "Phoenix",
                contiguous: true
            },
            {
                name: "Arkansas",
                abbreviation: "AR",
                territory: false,
                capital: "Little Rock",
                contiguous: true
            },
            {
                name: "California",
                abbreviation: "CA",
                territory: false,
                capital: "Sacramento",
                contiguous: true
            },
            {
                name: "Colorado",
                abbreviation: "CO",
                territory: false,
                capital: "Denver",
                contiguous: true
            },
            {
                name: "Connecticut",
                abbreviation: "CT",
                territory: false,
                capital: "Hartford",
                contiguous: true
            },
            {
                name: "Delaware",
                abbreviation: "DE",
                territory: false,
                capital: "Dover",
                contiguous: true
            },
            {
                name: "District Of Columbia",
                abbreviation: "DC",
                territory: false,
                capital: "",
                contiguous: true
            },
            {
                name: "Federated States Of Micronesia",
                abbreviation: "FM",
                territory: true,
                capital: "Palikir",
                contiguous: false
            },
            {
                name: "Florida",
                abbreviation: "FL",
                territory: false,
                capital: "Tallahassee",
                contiguous: true
            },
            {
                name: "Georgia",
                abbreviation: "GA",
                territory: false,
                capital: "Atlanta",
                contiguous: true
            },
            {
                name: "Guam",
                abbreviation: "GU",
                territory: true,
                capital: "Hagåtña",
                contiguous: false
            },
            {
                name: "Hawaii",
                abbreviation: "HI",
                territory: false,
                capital: "Honolulu",
                contiguous: false
            },
            {
                name: "Idaho",
                abbreviation: "ID",
                territory: false,
                capital: "Boise",
                contiguous: true
            },
            {
                name: "Illinois",
                abbreviation: "IL",
                territory: false,
                capital: "Springfield",
                contiguous: true
            },
            {
                name: "Indiana",
                abbreviation: "IN",
                territory: false,
                capital: "Indianapolis",
                contiguous: true
            },
            {
                name: "Iowa",
                abbreviation: "IA",
                territory: false,
                capital: "Des Moines",
                contiguous: true
            },
            {
                name: "Kansas",
                abbreviation: "KS",
                territory: false,
                capital: "Topeka",
                contiguous: true
            },
            {
                name: "Kentucky",
                abbreviation: "KY",
                territory: false,
                capital: "Frankfort",
                contiguous: true
            },
            {
                name: "Louisiana",
                abbreviation: "LA",
                territory: false,
                capital: "Baton Rouge",
                contiguous: true
            },
            {
                name: "Maine",
                abbreviation: "ME",
                territory: false,
                capital: "Augusta",
                contiguous: true
            },
            {
                name: "Marshall Islands",
                abbreviation: "MH",
                territory: true,
                capital: "Majuro",
                contiguous: false
            },
            {
                name: "Maryland",
                abbreviation: "MD",
                territory: false,
                capital: "Annapolis",
                contiguous: true
            },
            {
                name: "Massachusetts",
                abbreviation: "MA",
                territory: false,
                capital: "Boston",
                contiguous: true
            },
            {
                name: "Michigan",
                abbreviation: "MI",
                territory: false,
                capital: "Lansing",
                contiguous: true
            },
            {
                name: "Minnesota",
                abbreviation: "MN",
                territory: false,
                capital: "Saint Paul",
                contiguous: true
            },
            {
                name: "Mississippi",
                abbreviation: "MS",
                territory: false,
                capital: "Jackson",
                contiguous: true
            },
            {
                name: "Missouri",
                abbreviation: "MO",
                territory: false,
                capital: "Jefferson City",
                contiguous: true
            },
            {
                name: "Montana",
                abbreviation: "MT",
                territory: false,
                capital: "Helena",
                contiguous: true
            },
            {
                name: "Nebraska",
                abbreviation: "NE",
                territory: false,
                capital: "Lincoln",
                contiguous: true
            },
            {
                name: "Nevada",
                abbreviation: "NV",
                territory: false,
                capital: "Carson City",
                contiguous: true
            },
            {
                name: "New Hampshire",
                abbreviation: "NH",
                territory: false,
                capital: "Concord",
                contiguous: true
            },
            {
                name: "New Jersey",
                abbreviation: "NJ",
                territory: false,
                capital: "Trenton",
                contiguous: true
            },
            {
                name: "New Mexico",
                abbreviation: "NM",
                territory: false,
                capital: "Santa Fe",
                contiguous: true
            },
            {
                name: "New York",
                abbreviation: "NY",
                territory: false,
                capital: "Albany",
                contiguous: true
            },
            {
                name: "North Carolina",
                abbreviation: "NC",
                territory: false,
                capital: "Raleigh",
                contiguous: true
            },
            {
                name: "North Dakota",
                abbreviation: "ND",
                territory: false,
                capital: "Bismarck",
                contiguous: true
            },
            {
                name: "Northern Mariana Islands",
                abbreviation: "MP",
                territory: true,
                capital: "Saipan",
                contiguous: false
            },
            {
                name: "Ohio",
                abbreviation: "OH",
                territory: false,
                capital: "Columbus",
                contiguous: true
            },
            {
                name: "Oklahoma",
                abbreviation: "OK",
                territory: false,
                capital: "Oklahoma City",
                contiguous: true
            },
            {
                name: "Oregon",
                abbreviation: "OR",
                territory: false,
                capital: "Salem",
                contiguous: true
            },
            {
                name: "Palau",
                abbreviation: "PW",
                territory: true,
                capital: "Ngerulmud",
                contiguous: false
            },
            {
                name: "Pennsylvania",
                abbreviation: "PA",
                territory: false,
                capital: "Harrisburg",
                contiguous: true
            },
            {
                name: "Puerto Rico",
                abbreviation: "PR",
                territory: true,
                capital: "San Juan",
                contiguous: false
            },
            {
                name: "Rhode Island",
                abbreviation: "RI",
                territory: false,
                capital: "Providence",
                contiguous: true
            },
            {
                name: "South Carolina",
                abbreviation: "SC",
                territory: false,
                capital: "Columbia",
                contiguous: true
            },
            {
                name: "South Dakota",
                abbreviation: "SD",
                territory: false,
                capital: "Pierre",
                contiguous: true
            },
            {
                name: "Tennessee",
                abbreviation: "TN",
                territory: false,
                capital: "Nashville",
                contiguous: true
            },
            {
                name: "Texas",
                abbreviation: "TX",
                territory: false,
                capital: "Austin",
                contiguous: true
            },
            {
                name: "Utah",
                abbreviation: "UT",
                territory: false,
                capital: "Salt Lake City",
                contiguous: true
            },
            {
                name: "Vermont",
                abbreviation: "VT",
                territory: false,
                capital: "Montpelier",
                contiguous: true
            },
            {
                name: "Virgin Islands",
                abbreviation: "VI",
                territory: true,
                capital: "Charlotte Amalie",
                contiguous: false
            },
            {
                name: "Virginia",
                abbreviation: "VA",
                territory: false,
                capital: "Richmond",
                contiguous: true
            },
            {
                name: "Washington",
                abbreviation: "WA",
                territory: false,
                capital: "Olympia",
                contiguous: true
            },
            {
                name: "West Virginia",
                abbreviation: "WV",
                territory: false,
                capital: "Charleston",
                contiguous: true
            },
            {
                name: "Wisconsin",
                abbreviation: "WI",
                territory: false,
                capital: "Madison",
                contiguous: true
            },
            {
                name: "Wyoming",
                abbreviation: "WY",
                territory: false,
                capital: "Cheyenne",
                contiguous: true
            }
        ];
        this.selectorAliases = {
            abbreviation: ['a', 'abbreviations', 'abbr'],
            name: ['names', 'state', 'states', 's', 'n'],
            capital: ['c', 'cap', 'capitals']
        };
        this.defaultFormat = {
            abbreviation: 'name'
        };
        this.defaultSelector = 'abbreviation';
        this.defaultConfig = {
            contiguousOnly: false,
            includeTerritories: false,
            exclude: []
        };
        this.config = this.defaultConfig;
        if (configuration) {
            for (var key in this.config) {
                if (typeof configuration[key] !== 'undefined') {
                    this.config[key] = configuration[key];
                }
            }
        }
        this.aliasKeys = Object.keys(this.selectorAliases);
        this.states = this.generateStates();
    }
    UsaStates.prototype.generateStates = function () {
        var states = [];
        for (var _i = 0, _a = this._states; _i < _a.length; _i++) {
            var state = _a[_i];
            if (!((this.config.contiguousOnly && !state.contiguous) || (!this.config.includeTerritories && state.territory))) {
                if (!(this.config.exclude &&
                    (this.config.exclude.indexOf(state.abbreviation) >= 0 ||
                        this.config.exclude.indexOf(state.name) >= 0 ||
                        this.config.exclude.indexOf(state.capital) >= 0))) {
                    states.push(state);
                }
            }
        }
        return states;
    };
    UsaStates.prototype.arrayOf = function (selector) {
        var select = selector ? this.findSelector(selector) : this.defaultSelector;
        if (!select)
            throw new Error('Invalid selector used: ' + selector);
        var states = [];
        for (var _i = 0, _a = this.states; _i < _a.length; _i++) {
            var state = _a[_i];
            states.push(state[select]);
        }
        return states;
    };
    UsaStates.prototype.format = function (format) {
        var states = [];
        var _format = format ? this.normalizeFormat(format) : this.defaultFormat;
        for (var _i = 0, _a = this.states; _i < _a.length; _i++) {
            var state = _a[_i];
            var formattedState = {};
            for (var key in _format) {
                var checkedKey = this.findSelector(key);
                var checkedValue = this.findSelector(_format[key]);
                if (!checkedKey && key[0] === '$')
                    key = key.substr(1);
                if (!checkedValue && _format[key][0] === '$')
                    _format[key] = _format[key].substr(1);
                formattedState[checkedKey ? state[checkedKey] : key] = checkedValue ? state[checkedValue] : _format[key];
            }
            states.push(formattedState);
        }
        return states;
    };
    UsaStates.prototype.normalizeFormat = function (format) {
        var _format = {};
        for (var key in format) {
            var checkedKey = this.findSelector(key);
            var checkedValue = this.findSelector(format[key]);
            _format[checkedKey ? checkedKey : key] = checkedValue ? checkedValue : format[key];
        }
        return _format;
    };
    UsaStates.prototype.findSelector = function (selector) {
        var select = selector.toLowerCase();
        if (this.aliasKeys.indexOf(select) >= 0) {
            return select;
        }
        for (var _i = 0, _a = this.aliasKeys; _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.selectorAliases[key].indexOf(select) >= 0) {
                return key;
            }
        }
        return null;
    };
    return UsaStates;
}());
exports.UsaStates = UsaStates;
