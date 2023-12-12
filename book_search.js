/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    //for each book in scannedTextObj- usually 1
    for(const book of scannedTextObj){
        // get ISBN from book
        const ISBN = book.ISBN;
        result.SearchTerm = searchTerm;
        //for content in book
        for(const content of book.Content){
            const page = content.Page;
            const line = content.Line;
            const text = content.Text;
            const words = text.split(/[^a-zA-Z]+/);
            for(let i =0; i<words.length; i++){
                const word = words[i];
                if(word === searchTerm){ 
                    result.Results.push({
                        "ISBN": ISBN,
                        "Page": page,
                        "Line": line,
                    });
                }
            }
        }
    } 
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const sampleTextInput = [
    {
        "Title": "Sample Text For Input",
        "ISBN": "1234567891011",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "I am a sample text for input. I contain some lines of text."
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "I Am repeating Myself. I am repeating myself. I Am repeating Myself."
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "I am going to run some tests - unit tests, that is."
            },
            {
                "Page": 1,
                "Line": 4,
                "Text": "I hope these tests go well!"
            } 
        ] 
    }
]

const texts = [
    {
        "Title": "Sample Text For Input",
        "ISBN": "1234567891011",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "I am a sample text for input. I contain some lines of text."
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "I Am repeating Myself. I am repeating myself. I Am repeating Myself."
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "I am going to run some tests - unit tests, that is."
            },
            {
                "Page": 1,
                "Line": 4,
                "Text": "I hope these tests go well! The best of luck!"
            } 
        ] 
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ]
    }

]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const positiveTestOut = {
    "SearchTerm": "good",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const negativeTestOut = {
    "SearchTerm": "NULL",
    "Results": []
}

const caseSensitiveLowercaseTestOut = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}
const caseSensitiveUppercaseTestOut = {
    "SearchTerm": "And",
    "Results": []
}
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// TODO: Add more tests
//positive test: results are returned
//negative test: results are not returned
//case sensitive test: results are returned if match is case sensitive e.g. "The" vs "the"
const positiveTest = findSearchTermInBooks("good", twentyLeaguesIn);
if(JSON.stringify(positiveTestOut) === JSON.stringify(positiveTest)){
    console.log("PASS: Positive Test");
} else {
    console.log("FAIL: Positive Test");
    console.log("Expected:", positiveTestOut);
    console.log("Received:", positiveTest);
}
//will not find a match - results should be empty - profound is found as profound;
const negativeTest = findSearchTermInBooks("NULL", twentyLeaguesIn);
if(JSON.stringify(negativeTestOut) === JSON.stringify(negativeTest)){
    console.log("PASS: Negative Test");
} else {
    console.log("FAIL: Negative Test");
    console.log("Expected:", negativeTestOut);
    console.log("Received:", negativeTest);
}

//case sensitive test - will find a match to and - not And
const caseSensitiveTestLowercase = findSearchTermInBooks("and", twentyLeaguesIn);
if(JSON.stringify(caseSensitiveLowercaseTestOut) === JSON.stringify(caseSensitiveTestLowercase)){
    console.log("PASS: Case Sensitive Test");
} else {
    console.log("FAIL: Case Sensitive Test Lowercase");
    console.log("Expected:", caseSensitiveLowercaseTestOut);
    console.log("Received:", caseSensitiveTestLowercase);
}

const caseSensitiveTestUppercase = findSearchTermInBooks("And", twentyLeaguesIn);
if(JSON.stringify(caseSensitiveUppercaseTestOut) === JSON.stringify(caseSensitiveTestUppercase)){
    console.log("PASS: Case Sensitive Test Uppercase");
} else {
    console.log("FAIL: Case Sensitive Test");
    console.log("Expected:", caseSensitiveUppercaseTestOut);
    console.log("Received:", caseSensitiveTestUppercase);
}


//some unit tests for a custom input- works with multiple words repeated
// const sample1result = findSearchTermInBooks("repeating", sampleTextInput);
// console.log("Sample 1 Result: ", sample1result);
//count of results
// const sample1count = sample1result.Results.length;
// console.log("Sample 1 Count: ", sample1count);

const multipleTexts = findSearchTermInBooks("The", texts);
console.log("Multiple Texts Result: ", multipleTexts);