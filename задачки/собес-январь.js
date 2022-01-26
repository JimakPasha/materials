## Как проверить переменную `x` на массив?
 
```javascript=
Array.isArray
 
 
```
 
## Как проверить переменную `x` на объект?
 
```javascript=
const x = {};
 
console.log(typeof x) // 'object'
 
if (typeof x === 'object' && !Array.isArray(x) && x !== null) {
    
}
```
 
## Какие значения возвращает `typeof`?
 
- object: array, object, null
- function
- number
- string
- boolean
- undefined
 
## Какие типы данных есть в ES5?
 
```
- number
- string
- boolean
- null
- undefined
- object
 
ES6
 
- bigint
- symbol
```
 
## Как преобразовать массив в объект?
 
```javascript
var list = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 }
];
 
// TODO: { width: 10, height: 20 }
 
list.reduce((acc, curr, index, array) => {
    acc[curr.name] = curr.value
    // acc['width'] = acc['10']
    return acc;
}, {})
 
```
 
## Как сверстать?
 
<p><img src="https://i.imgur.com/UJPisQ2.png" width="308"/></p>
 
```jsx=
const handleClick2 = (e) => {
    e.preventDefault();
    // history.push('…')
}
 
<div className="popup">
    <a href="sdf" onClick={(e) => handleClick2(e)}>
        <div>
            <div>
                <img src="https://i.imgur.com/UJPisQ2.png" width="308"/>
            </div>
            <div>
                <p>Констини...</p>
                <p>web..</p>
            </div>
            <button className="close" onClick={handleClick1}>
                <svg/>
            </button>
        </div>
    </a>
</div>