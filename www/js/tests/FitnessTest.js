
function FitnessTest (id, name, requirements, calculation) {
    this.id = id;
    this.name = name;
    this.fields = requirements.map(function (name) {
        var type = /height|weight/.test(name) ? 'number' : 'text'
        if (/^is\s/.test(name)) {
//            type = 'checkbox';
        }

        return {
            type: type,
            name: name
        };
    });

    this.calculate = function () {
        var args = this.fields.map (function (field) {
            return field.value;
        });

        return calculation.apply(calculation, args);
    };
}
