function randomMessage() {
    // Define arrays of words to use in the sentence
    const subject = ['Arthur', 'Mary', 'The Cougar', 'A Phanter', 'Eagle'];
    const verbs = ['ran', 'jumped', 'slipt', 'eat', 'hunted'];
    const objects = ['the Hiena', 'a deer', 'a burger', 'the bison'];
    const adjectives = ['blue', 'funny', 'long', 'tall', 'cute'];

    // Randomly choose one string of each array
    const subjectString = Math.floor(Math.random() * subject.length);
    const verbsString = Math.floor(Math.random() * verbs.length);
    const objectsString = Math.floor(Math.random() * objects.length);
    const adjectivesString = Math.floor(Math.random() * adjectives.length);

    // Create the sentence
    const sentence = `${subject[subjectString]} ${verbs[verbsString]} ${adjectives[adjectivesString]} ${objects[objectsString]}.`;

    // Return sentence
    return sentence
}

console.log(randomMessage());