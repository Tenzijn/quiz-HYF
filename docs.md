## Classes

<dl>
<dt><a href="#loadApp">loadApp</a></dt>
<dd></dd>
<dt><a href="#initWelcomePage">initWelcomePage</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#nextQuestion - Re initializes question page with next question.">nextQuestion - Re initializes question page with next question.()</a></dt>
<dd><p>Initializes question page. Places the components on question page and calls necessary methods.</p></dd>
<dt><a href="#startQuiz - Starts quiz initialize question page with first question.">startQuiz - Starts quiz initialize question page with first question.()</a></dt>
<dd><p>Initializes welcome page. Places the components on welcome page and calls necessary methods.</p></dd>
<dt><a href="#disableClick - Disables clicking again when user choose an answer.">disableClick - Disables clicking again when user choose an answer.(key, answerText, onSelect)</a> ⇒ <code>HTMLLIElement</code></dt>
<dd><p>Creates a li element for each answer</p></dd>
<dt><a href="#restartQuiz - Restarts the quiz, resets score."> resets score.()</a> ⇒ <code>HTMLDivElement</code></dt>
<dd><p>Creates a div element for showing the total score.</p></dd>
<dt><a href="#appendTimer - Appends a timer to the div element.">appendTimer - Appends a timer to the div element.(onFinish)</a> ⇒ <code>HTMLDivElement</code></dt>
<dd><p>Creates a div element for showing the timer.</p></dd>
</dl>

<a name="loadApp"></a>

## loadApp
**Kind**: global class  
<a name="new_loadApp_new"></a>

### new loadApp(name, age)
<p>Load the App.</p>


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the person.</p> |
| age | <code>number</code> | <p>The age of the person.</p> |

<a name="initWelcomePage"></a>

## initWelcomePage
**Kind**: global class  
<a name="new_initWelcomePage_new"></a>

### new exports.initWelcomePage(name, age)
<p>initWelcomePage.</p>


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the person.</p> |
| age | <code>number</code> | <p>The age of the person.</p> |

<a name="nextQuestion - Re initializes question page with next question."></a>

## nextQuestion - Re initializes question page with next question.()
<p>Initializes question page. Places the components on question page and calls necessary methods.</p>

**Kind**: global function  
<a name="startQuiz - Starts quiz initialize question page with first question."></a>

## startQuiz - Starts quiz initialize question page with first question.()
<p>Initializes welcome page. Places the components on welcome page and calls necessary methods.</p>

**Kind**: global function  
<a name="disableClick - Disables clicking again when user choose an answer."></a>

## disableClick - Disables clicking again when user choose an answer.(key, answerText, onSelect) ⇒ <code>HTMLLIElement</code>
<p>Creates a li element for each answer</p>

**Kind**: global function  
**Returns**: <code>HTMLLIElement</code> - <ul>
<li>The li element as an option</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>Key of each answer in answers object in questions.</p> |
| answerText | <code>string</code> | <p>The value of each answer in answers object in questions.</p> |
| onSelect | <code>function</code> | <p>Triggered when user selects an answer.</p> |

<a name="appendTimer - Appends a timer to the div element."></a>

## appendTimer - Appends a timer to the div element.(onFinish) ⇒ <code>HTMLDivElement</code>
<p>Creates a div element for showing the timer.</p>

**Kind**: global function  
**Returns**: <code>HTMLDivElement</code> - <ul>
<li>The div element that keeps timer.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| onFinish | <code>function</code> | <p>Triggered when the timer counter reaches zero.</p> |

