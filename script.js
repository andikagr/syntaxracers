const snippets = {
    javascript: {
        easy: [
            `const sum = (a, b) => a + b;`,
            `console.log("Hello World");`,
            `let x = 10;
if (x > 5) {
  console.log("Greater");
}`
        ],
        medium: [
            `const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};`,
            `function greet(name) {
  return \`Hello, \${name}!\`;
}
[1, 2, 3].map(x => x * 2);`
        ],
        hard: [
            `function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`,
            `class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
}`
        ],
        master: [
            `class Observer {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  broadcast(data) {
    this.observers.forEach(fn => fn(data));
  }
}`,
            `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`
        ]
    },
    python: {
        easy: [
            `print("Hello World")`,
            `def add(a, b):
    return a + b`,
            `x = 10
if x > 5:
    print("Greater")`
        ],
        medium: [
            `numbers = [1, 2, 3, 4, 5]
squared = [x ** 2 for x in numbers]
print(squared)`,
            `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)`
        ],
        hard: [
            `def binary_search(arr, low, high, x):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
        else:
            return binary_search(arr, mid + 1, high, x)
    return -1`
        ],
        master: [
            `class NeuralNetwork:
    def __init__(self, x, y):
        self.input = x
        self.weights1 = np.random.rand(self.input.shape[1],4) 
        self.weights2 = np.random.rand(4,1)                 
        self.y = y
        self.output = np.zeros(self.y.shape)`,
            `@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users])`
        ]
    },
    css: {
        easy: [
            `body {
    margin: 0;
    padding: 0;
    color: red;
}`,
            `.card {
    background: white;
    border-radius: 8px;
}`
        ],
        medium: [
            `.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}`,
            `.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`
        ],
        hard: [
            `@media (prefers-color-scheme: dark) {
    :root {
        --foreground: #ffffff;
        --background: #000000;
        --accent: #58a6ff;
    }
    body {
        color: var(--foreground);
    }
}`
        ],
        master: [
            `.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    background-color: lighten($primary, 10%);
    animation: pulse 1s infinite;
}
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}`
        ]
    },
    java: {
        easy: [
            `System.out.println("Hello World");`,
            `int x = 5;
int y = 10;
int sum = x + y;`
        ],
        medium: [
            `public class Main {
    public static void main(String[] args) {
        String name = "John";
        System.out.println("Hello " + name);
    }
}`,
            `for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`
        ],
        hard: [
            `public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`
        ],
        master: [
            `@Override
public void onBindViewHolder(ViewHolder holder, int position) {
    String item = mData.get(position);
    holder.myTextView.setText(item);
    holder.itemView.setOnClickListener(v -> {
        listener.onItemClick(item);
    });
}`,
            `public class QuickSort {
    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
        return i+1;
    }
}`
        ]
    },
    csharp: {
        easy: [
            `Console.WriteLine("Hello World");`,
            `int myNum = 5;
string name = "John";`
        ],
        medium: [
            `public class Program {
    public static void Main() {
        int[] numbers = {1, 2, 3, 4};
        foreach (int i in numbers) {
            Console.WriteLine(i);
        }
    }
}`
        ],
        hard: [
            `using System.Linq;
public class LINQ {
    public void Filter() {
        int[] numbers = { 5, 10, 8, 3, 6, 12 };
        var query = from num in numbers
                    where num % 2 == 0
                    orderby num
                    select num;
    }
}`
        ],
        master: [
            `public async Task<string> FetchData() {
    using (HttpClient client = new HttpClient()) {
        try {
            string result = await client.GetStringAsync("http://api.example.com");
            return result;
        } catch (HttpRequestException e) {
            Console.WriteLine(e.Message);
            return null;
        }
    }
}`
        ]
    },
    php: {
        easy: [
            `<?php
echo "Hello World!";
?>`,
            `<?php
$x = 5;
$y = 10;
echo $x + $y;
?>`
        ],
        medium: [
            `<?php
function hello($name) {
    echo "Hello " . $name;
}
hello("World");
?>`,
            `<?php
$colors = array("red", "green", "blue");
foreach ($colors as $value) {
  echo "$value <br>";
}
?>`
        ],
        hard: [
            `<?php
class User {
    public $name;
    function __construct($name) {
        $this->name = $name;
    }
    function get_name() {
        return $this->name;
    }
}
?>`
        ],
        master: [
            `<?php
namespace App\\Http\\Controllers;
use App\\Models\\User;
class UserController extends Controller {
    public function index() {
        return User::all();
    }
    public function show($id) {
        return User::findOrFail($id);
    }
}
?>`
        ]
    },
    cpp: {
        easy: [
            `#include <iostream>
using namespace std;
int main() {
    cout << "Hello World";
    return 0;
}`,
            `int x = 5;
int y = 10;
int sum = x + y;`
        ],
        medium: [
            `#include <vector>
void printVector(const vector<int>& v) {
    for (int i = 0; i < v.size(); ++i) {
        cout << v[i] << " ";
    }
}`
        ],
        hard: [
            `class Rectangle {
    int width, height;
  public:
    void set_values (int,int);
    int area() {return width*height;}
};`
        ],
        master: [
            `template <class T>
class Stack {
    vector<T> elems;
public:
    void push(T const&);
    void pop();
    T top() const;
    bool empty() const {
        return elems.empty();
    }
};`
        ]
    }
};

// State
let currentLang = 'javascript';
let currentDifficulty = 'easy';
let duration = 30;
let timeLeft = duration;
let timerInterval = null;
let gameActive = false;
let currentSnippet = '';
let textToType = '';
let correctChars = 0;
let totalCharsTyped = 0;
let incorrectChars = 0;
let lastSnippetIndex = -1;

const screens = {
    menu: document.getElementById('menuScreen'),
    game: document.getElementById('gameScreen'),
    results: document.getElementById('resultsScreen')
};
const topStats = document.getElementById('topStats');
const codeDisplay = document.getElementById('codeDisplay');
const hiddenInput = document.getElementById('hiddenInput');
const timeDisplay = document.getElementById('timeDisplay');
const wpmDisplay = document.getElementById('wpmDisplay');
const progressBar = document.getElementById('progressBar');
const finalWpm = document.getElementById('finalWpm');
const finalAccuracy = document.getElementById('finalAccuracy');
const focusMessage = document.getElementById('focusMessage');

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        lastSnippetIndex = -1;
    });
});

document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        duration = parseInt(btn.dataset.time);
    });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDifficulty = btn.dataset.diff;
        lastSnippetIndex = -1;
    });
});

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', startGame);
document.getElementById('menuBtn').addEventListener('click', showMenu);

hiddenInput.addEventListener('input', handleInput);
hiddenInput.addEventListener('blur', () => {
    document.querySelector('.game-area').classList.add('blur-focus');
});
document.querySelector('.game-area').addEventListener('click', () => {
    if (gameActive) {
        hiddenInput.focus();
        document.querySelector('.game-area').classList.remove('blur-focus');
    }
});

function showMenu() {
    switchScreen('menu');
    topStats.style.opacity = '0';
}

function startGame() {
    timeLeft = duration;
    gameActive = true;
    correctChars = 0;
    totalCharsTyped = 0;
    incorrectChars = 0;
    hiddenInput.value = '';

    const langSnippets = snippets[currentLang][currentDifficulty];
    let randomIndex;

    if (langSnippets.length > 1) {
        do {
            randomIndex = Math.floor(Math.random() * langSnippets.length);
        } while (randomIndex === lastSnippetIndex);
    } else {
        randomIndex = 0;
    }

    lastSnippetIndex = randomIndex;
    const rawSnippet = langSnippets[randomIndex];

    currentSnippet = rawSnippet;
    textToType = rawSnippet;

    codeDisplay.className = `language-${currentLang}`;
    codeDisplay.textContent = rawSnippet;
    Prism.highlightElement(codeDisplay);
    processPrismOutput(codeDisplay);


    switchScreen('game');
    topStats.style.opacity = '1';
    updateStats();

    hiddenInput.focus();
    document.querySelector('.game-area').classList.remove('blur-focus');

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!gameActive) return;
        timeLeft--;
        updateStats();
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function processPrismOutput(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach(node => {
        const text = node.textContent;
        const fragment = document.createDocumentFragment();
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char';
            fragment.appendChild(span);
        }
        node.parentNode.replaceChild(fragment, node);
    });

    updateCursor(0);
}

function handleInput(e) {
    if (!gameActive) return;

    const inputVal = hiddenInput.value;
    const userText = inputVal;
    const charSpans = codeDisplay.querySelectorAll('.char');

    totalCharsTyped = Math.max(totalCharsTyped, userText.length);

    let isAllCorrectSoFar = true;

    charSpans.forEach((span, index) => {
        span.classList.remove('correct', 'incorrect', 'current');

        if (index < userText.length) {
            const userChar = userText[index];
            const targetChar = textToType[index];

            if (userChar === targetChar) {
                span.classList.add('correct');
            } else {
                span.classList.add('incorrect');
                isAllCorrectSoFar = false;
                if (!span.dataset.errorLogged) {
                    incorrectChars++;
                    span.dataset.errorLogged = 'true';
                }
            }
        }
    });

    if (userText.length < textToType.length) {
        charSpans[userText.length].classList.add('current');
    }

    const currentCursor = codeDisplay.querySelector('.current');
    if (currentCursor) {
        currentCursor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    correctChars = document.querySelectorAll('.char.correct').length;

    if (userText.length === textToType.length && isAllCorrectSoFar) {
        endGame();
    }

    updateStats();
}

function updateCursor(index) {
    const chars = codeDisplay.querySelectorAll('.char');
    if (chars[index]) chars[index].classList.add('current');
}

function updateStats() {
    timeDisplay.innerText = timeLeft + 's';

    let timeElapsed = duration - timeLeft;
    if (timeElapsed === 0) timeElapsed = 1;

    const wpm = Math.round((correctChars / 5) / (timeElapsed / 60));
    wpmDisplay.innerText = wpm;

    const progress = (correctChars / textToType.length) * 100;
    progressBar.style.width = progress + '%';
}

function endGame() {
    gameActive = false;
    clearInterval(timerInterval);

    const timeElapsed = duration - timeLeft;
    const wpm = Math.round((correctChars / 5) / (timeElapsed / 60));
    const accuracy = totalCharsTyped > 0 ? Math.round((correctChars / totalCharsTyped) * 100) : 0;

    finalWpm.innerText = wpm;
    finalAccuracy.innerText = accuracy + '%';

    const quote = accuracy > 90 ? "Excellent coding!" : "Keep practicing your syntax!";
    document.getElementById('resultQuote').innerText = quote;

    switchScreen('results');
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}
