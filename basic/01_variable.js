// Variable 변수
// var, let, const
// scope 블럭

// 1. var
// 읽기, 쓰기 가능하다.
// 블럭을 무시한다.
{
  var name = 'John'
  console.log(name)
}

console.log(name)

// 2. let
// 읽기, 쓰기 가능하다.
{
  let title = 'html'
  console.log(title)

  title = 'css'
  console.log(title)

  title = 'javascript'
  console.log(title)
}

// console.log(title)

// 3. const
// 상수 - 읽기만 가능. 변하지 않는다.
{
  const subject = 'html'
  console.log(subject)

  // subject = 'css'
  // console.log(subject)
}

// 4. 변수의 데이타 타입
// 원시데이타(primitive) : number, string, boolean, null, undefined
// object: 싱글데이타를 묶어놓은 데이타
// function : 일급객체(first class object)
// 변수에 담을 수 있다.
// 함수나 메서드의 인자로 넘길 수 있다.
// 함수나 메서드에서 리턴 할 수 있다.

// number
const num = 10
const width = 20.5
console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)

const a = 1 / 0
const b = -25 / 0
const c = 'html' / 10
console.log(a)
console.log(b)
console.log(c)

// String
const firstName = 'Jonh'
const lastName = 'Snow'
const fullName = firstName + lastName
console.log(fullName)
console.log(`${firstName} ${lastName}`)

//null
const fall = null
console.log(`${fall}이고 타입은 ${typeof fall}입니다.`)

//undifiend
let winter
console.log(`${winter}이고 타입은 ${typeof winter}입니다.`)

// 5. 동적 타입 - 자바스크립트는 runtime(브라우저에서 실행될 때) 상태에서 타입이 정해진다.
// 이러한 동적 타입 ==> typescript

let word = 'winter'
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = 100
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = '100' + 10
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = '100' / '10'
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
