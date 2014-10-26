angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            all: function() {
                return friends;
            },
            get: function(friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    });

angular.module('cyq.services', [])
    .factory('FitnessTests', function() {
        var tests = [
            new FitnessTest('bmi',
                'BMI',
                ['Height', 'Weight'],
                function(height, weight) {
                    return weight / height / height;
                }),

            new FitnessTest('rockport',
                'VO\u2082 Max: Rockport Walking',
                ['Age', 'Weight (Kg)', 'Walk Time (min)', 'Heart Rate', 'is male'],
                function(a, w, t, h, m) {
                    var VO2 = 139.168 - ((a *.388) + (w * 0.169) + (t * 3.265) + (h * 0.156));
                    if (m) {
                        VO2 += 6.318;
                    }
                    return VO2;
                }),

            new FitnessTest('cooper',
                'VO\u2082 Max: Cooper 12min Run',
                ['Distance (m)'],
                function(d) {
                    return (d - 505) / 45;
                })
        ];

        return {
            tests: tests,
            get: function (id) {
                return tests.filter(function (test) {
                    return test.id === id;
                }).pop();
            }
        }
    });
