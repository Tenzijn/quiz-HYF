## Constants

<dl>
<dt><a href="#createQuestionComponent">createQuestionComponent</a> ⇒ <code>HTMLDivElement</code></dt>
<dd><p>Creates a full question element</p>
</dd>
<dt><a href="#questionNumberTracker">questionNumberTracker</a> ⇒ <code>HTMLDivElement</code></dt>
<dd><p>Creates a div element for tracking the current question number.</p>
</dd>
<dt><a href="#createWelcomeComponent">createWelcomeComponent</a> ⇒ <code>HTMLDivElement</code></dt>
<dd><p>Creates a div element for showing the landing page components.</p>
</dd>
<dt><a href="#initResultPage">initResultPage</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Initializes result page. Places the components on result page and calls necessary methods.</p>
</dd>
<dt><a href="#checkAnswer">checkAnswer</a></dt>
<dd><p>Checks if selected option is correct answer or not. Colors the options according to result. Increment score according to result.</p>
</dd>
<dt><a href="#setLocalStorage">setLocalStorage</a></dt>
<dd><p>Checks local storage. if there is no &#39;answeredQuestions&#39; item as an array, creates an empty array, if there is, pushes selected option to the array with an index of current question index.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#disableClick - Disables clicking again when user choose an answer.">disableClick - Disables clicking again when user choose an answer.(key, answerText, onSelect)</a> ⇒ <code>HTMLLIElement</code></dt>
<dd><p>Creates a li element for each answer</p>
</dd>
<dt><a href="#restartQuiz - Restarts the quiz, resets score."> resets score.()</a> ⇒ <code>HTMLDivElement</code></dt>
<dd><p>Creates a div element for showing the total score.</p>
</dd>
<dt><a href="#appendTimer - Appends a timer to the div element.">appendTimer - Appends a timer to the div element.(onFinish)</a> ⇒ <code>HTMLDivElement</code></dt>
<dd><p>Creates a div element for showing the timer.</p>
</dd>
<dt><a href="#nextQuestion - Re initializes question page with next question.">nextQuestion - Re initializes question page with next question.()</a></dt>
<dd><p>Initializes question page. Places the components on question page and calls necessary methods.</p>
</dd>
<dt><a href="#startQuiz - Starts quiz initialize question page with first question.">startQuiz - Starts quiz initialize question page with first question.()</a></dt>
<dd><p>A page to show welcome page.</p>
</dd>
<dt><a href="#disableBtn - Disables next button.">disableBtn - Disables next button.()</a></dt>
<dd><p>Enable/Disable Next Button Utility</p>
</dd>
<dt><a href="#evaluateScore - Checks the score and define a complement sentence.">evaluateScore - Checks the score and define a complement sentence.(score)</a> ⇒ <code>string</code></dt>
<dd><p>Give Complement Utility</p>
</dd>
</dl>

<a name="createQuestionComponent"></a>

## createQuestionComponent ⇒ <code>HTMLDivElement</code>
Creates a full question element

**Kind**: global constant  
**Returns**: <code>HTMLDivElement</code> - - The full question element  

| Param | Type | Description |
| --- | --- | --- |
| question | <code>string</code> | The text of the question. |

<a name="questionNumberTracker"></a>

## questionNumberTracker ⇒ <code>HTMLDivElement</code>
Creates a div element for tracking the current question number.

**Kind**: global constant  
**Returns**: <code>HTMLDivElement</code> - - The div element that keeps track of the current question  

| Param | Type | Description |
| --- | --- | --- |
| currentQuestionNumber | <code>number</code> | The id of question. |
| totalQuestions | <code>number</code> | The length of questions array. |

<a name="createWelcomeComponent"></a>

## createWelcomeComponent ⇒ <code>HTMLDivElement</code>
Creates a div element for showing the landing page components.

**Kind**: global constant  
**Returns**: <code>HTMLDivElement</code> - - The div element that keeps timer.  
<a name="initResultPage"></a>

## initResultPage ⇒ <code>HTMLElement</code>
Initializes result page. Places the components on result page and calls necessary methods.

**Kind**: global constant  
<a name="checkAnswer"></a>

## checkAnswer
Checks if selected option is correct answer or not. Colors the options according to result. Increment score according to result.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| questionIndex- | <code>number</code> | Index number of current question in quiz data. |

<a name="setLocalStorage"></a>

## setLocalStorage
Checks local storage. if there is no 'answeredQuestions' item as an array, creates an empty array, if there is, pushes selected option to the array with an index of current question index.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| currentQuestionIndex | <code>number</code> | Index number of current question in quiz data. |
| selectedAnswer | <code>string</code> | Selected option from keys of answers object in quiz data |
| checkAnswer | <code>function</code> | Callback function. |

<a name="disableClick - Disables clicking again when user choose an answer."></a>

## disableClick - Disables clicking again when user choose an answer.(key, answerText, onSelect) ⇒ <code>HTMLLIElement</code>
Creates a li element for each answer

**Kind**: global function  
**Returns**: <code>HTMLLIElement</code> - - The li element as an option  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Key of each answer in answers object in questions. |
| answerText | <code>string</code> | The value of each answer in answers object in questions. |
| onSelect | <code>function</code> | Triggered when user selects an answer. |

<a name="appendTimer - Appends a timer to the div element."></a>

## appendTimer - Appends a timer to the div element.(onFinish) ⇒ <code>HTMLDivElement</code>
Creates a div element for showing the timer.

**Kind**: global function  
**Returns**: <code>HTMLDivElement</code> - - The div element that keeps timer.  

| Param | Type | Description |
| --- | --- | --- |
| onFinish | <code>function</code> | Triggered when the timer counter reaches zero. |

<a name="nextQuestion - Re initializes question page with next question."></a>

## nextQuestion - Re initializes question page with next question.()
Initializes question page. Places the components on question page and calls necessary methods.

**Kind**: global function  
<a name="startQuiz - Starts quiz initialize question page with first question."></a>

## startQuiz - Starts quiz initialize question page with first question.()
A page to show welcome page.

**Kind**: global function  
<a name="disableBtn - Disables next button."></a>

## disableBtn - Disables next button.()
Enable/Disable Next Button Utility

**Kind**: global function  
<a name="evaluateScore - Checks the score and define a complement sentence."></a>

## evaluateScore - Checks the score and define a complement sentence.(score) ⇒ <code>string</code>
Give Complement Utility

**Kind**: global function  
**Returns**: <code>string</code> - - Evaluation sentence.  

| Param | Type | Description |
| --- | --- | --- |
| score | <code>number</code> | Quiz data total score. |

