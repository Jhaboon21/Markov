const markov = require('./markov');

test('should make text', function () {
    let text = "the cat in the hat";
    let testing = new markov.MarkovMachine(text);

    expect(testing.words).toEqual(["the", "cat", "in", "the", "hat"])
});
// {"chains": Map {"the" => ["cat", "hat"], "cat" => ["in"], "in" => ["the"], "hat" => [null]}, "words": ["the", "cat", "in", "the", "hat"]}