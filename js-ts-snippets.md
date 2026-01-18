# JavaScript/TypeScript Snippets Quick Reference

## Arrow Functions

| Prefix | Output                        | Description                   |
| ------ | ----------------------------- | ----------------------------- |
| `af`   | `() => `                      | Arrow function inline         |
| `afn`  | `() => {}`                    | Arrow function block no param |
| `af1`  | `() => {}`                    | Arrow function block 1 param  |
| `af2`  | `() => {}`                    | Arrow function block 2 params |
| `caf`  | `const name = () => {}`       | Const arrow function          |
| `aaf`  | `async () => {}`              | Async arrow function          |
| `caaf` | `const name = async () => {}` | Const async arrow function    |

## Regular Functions

| Prefix | Output                     | Description        |
| ------ | -------------------------- | ------------------ |
| `fn`   | `function name() {}`       | Named function     |
| `afn`  | `async function name() {}` | Async function     |
| `anf`  | `function() {}`            | Anonymous function |

## Console

| Prefix | Output                    | Description            |
| ------ | ------------------------- | ---------------------- |
| `clg`  | `console.log()`           | Console log            |
| `clgl` | `console.log('label:', )` | Console log with label |
| `cle`  | `console.error()`         | Console error          |
| `clw`  | `console.warn()`          | Console warn           |
| `clt`  | `console.table()`         | Console table          |
| `cld`  | `console.dir()`           | Console dir            |

## Control Flow

| Prefix   | Output                | Description       |
| -------- | --------------------- | ----------------- |
| `if`     | `if () {}`            | If statement      |
| `ife`    | `if () {} else {}`    | If else statement |
| `elif`   | `else if () {}`       | Else if statement |
| `ter`    | `? :`                 | Ternary operator  |
| `switch` | `switch () { case: }` | Switch statement  |

## Loops

| Prefix    | Output                             | Description    |
| --------- | ---------------------------------- | -------------- |
| `for`     | `for (let i = 0; i < length; i++)` | For loop       |
| `forof`   | `for (const item of array)`        | For of loop    |
| `forin`   | `for (const key in object)`        | For in loop    |
| `foreach` | `.forEach((item) => {})`           | ForEach method |
| `while`   | `while () {}`                      | While loop     |

## Array Methods

| Prefix      | Output                                | Description     |
| ----------- | ------------------------------------- | --------------- |
| `map`       | `.map((item) => )`                    | Array map       |
| `filter`    | `.filter((item) => )`                 | Array filter    |
| `reduce`    | `.reduce((acc, item) => {}, initial)` | Array reduce    |
| `find`      | `.find((item) => )`                   | Array find      |
| `findindex` | `.findIndex((item) => )`              | Array findIndex |
| `some`      | `.some((item) => )`                   | Array some      |
| `every`     | `.every((item) => )`                  | Array every     |

## Promises & Async

| Prefix  | Output                                 | Description        |
| ------- | -------------------------------------- | ------------------ |
| `prom`  | `new Promise((resolve, reject) => {})` | New Promise        |
| `thenc` | `.then().catch()`                      | Promise then catch |
| `aw`    | `await`                                | Await              |
| `tryc`  | `try {} catch {}`                      | Try catch block    |
| `trycf` | `try {} catch {} finally {}`           | Try catch finally  |
| `atryc` | `try { await } catch {}`               | Async try catch    |

## Objects & Classes

| Prefix        | Output                            | Description       |
| ------------- | --------------------------------- | ----------------- |
| `obj`         | `{ key: value }`                  | Object literal    |
| `cobj`        | `const name = { key: value }`     | Const object      |
| `class`       | `class Name { constructor() {} }` | Class declaration |
| `constructor` | `constructor() {}`                | Class constructor |
| `method`      | `methodName() {}`                 | Class method      |

## Destructuring

| Prefix | Output         | Description        |
| ------ | -------------- | ------------------ |
| `dob`  | `const { } = ` | Destructure object |
| `dar`  | `const [ ] = ` | Destructure array  |

## Imports & Exports

| Prefix | Output                         | Description         |
| ------ | ------------------------------ | ------------------- |
| `imp`  | `import module from 'path'`    | Import statement    |
| `impd` | `import { } from 'path'`       | Import destructured |
| `impa` | `import * as name from 'path'` | Import as           |
| `expd` | `export default`               | Export default      |
| `expn` | `export { }`                   | Export named        |
| `expc` | `export const name =`          | Export const        |

## TypeScript Specific

| Prefix      | Output               | Description           |
| ----------- | -------------------- | --------------------- |
| `interface` | `interface Name { }` | TypeScript interface  |
| `type`      | `type Name = `       | TypeScript type alias |
| `enum`      | `enum Name { }`      | TypeScript enum       |

## Express/Node.js

| Prefix    | Output                                             | Description           |
| --------- | -------------------------------------------------- | --------------------- |
| `erh`     | `export const handler = async (req, res) => {}`    | Express route handler |
| `emw`     | `export const middleware = (req, res, next) => {}` | Express middleware    |
| `erouter` | `const router = Router()`                          | Express router        |

## React Hooks

| Prefix | Output                                       | Description      |
| ------ | -------------------------------------------- | ---------------- |
| `us`   | `const [state, setState] = useState()`       | useState hook    |
| `ue`   | `useEffect(() => {}, [])`                    | useEffect hook   |
| `uc`   | `const context = useContext()`               | useContext hook  |
| `ur`   | `const ref = useRef()`                       | useRef hook      |
| `um`   | `const memoized = useMemo(() => {}, [])`     | useMemo hook     |
| `ucb`  | `const callback = useCallback(() => {}, [])` | useCallback hook |

## React Components

| Prefix | Output                               | Description                           |
| ------ | ------------------------------------ | ------------------------------------- |
| `rfc`  | `export const Component = () => {}`  | React functional component            |
| `rfcp` | React component with props interface | React component with TypeScript props |

## Testing (Vitest/Jest)

| Prefix | Output                           | Description         |
| ------ | -------------------------------- | ------------------- |
| `desc` | `describe('', () => {})`         | Describe test block |
| `test` | `test('should', async () => {})` | Test case           |
| `it`   | `it('should', async () => {})`   | It test block       |
| `bef`  | `beforeEach(async () => {})`     | Before each hook    |
| `aft`  | `afterEach(async () => {})`      | After each hook     |
| `exp`  | `expect().toBe()`                | Expect assertion    |

---

## Usage Tips

1. **Type the prefix** and press `Tab` to expand
2. **Press `Tab` again** to jump between placeholders (`$1`, `$2`, etc.)
3. **Customize**: Edit the snippets file to match your preferences
4. **Location**: VS Code → Preferences → Configure User Snippets → `javascript-typescript-snippets`

## Most Used Snippets (Top 10)

1. `clg` - Console log
2. `af` / `afb` - Arrow functions
3. `tryc` - Try catch
4. `map` / `filter` - Array methods
5. `imp` / `impd` - Imports
6. `caf` - Const arrow function
7. `ue` - useEffect (React)
8. `us` - useState (React)
9. `test` - Test case
10. `erh` - Express handler
