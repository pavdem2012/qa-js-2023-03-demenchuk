//Задание 1:

//список имен персонажей

let pers1 = 'Дедушка' //персонаж из списка к задаче
let pers2 = 'Заяц' //персонаж из списка к задаче
let pers3 = 'Лиса' //персонаж из списка к задаче
let pers4 = 'Волк' //персонаж не из списка к задаче, на случай ошибки ввода


// функция colobok в виде конструкции switch/case: принимает на вход имя персонажа, возвращает, что сделал колобок после встречи с персонажем.

function kolobok(name) {
    let strOutput;
    switch(name) {        
      // если Дедушка
      case 'Дедушка':
        strOutput = 'Я от дедушки ушёл'
        console.log(strOutput)
        return strOutput
      // если Заяц
      case 'Заяц':
        strOutput = 'Я от зайца ушёл'
        console.log(strOutput)
        return strOutput
      // если Лиса
      case 'Лиса':
        strOutput = 'Меня съели'
        console.log(strOutput)
        return strOutput
      // если персонажа нет в конструкции
      default:
        strOutput = 'Нет такого персонажа'
        console.log(strOutput)
        return 'strOutput'
    } 
  }

//вызов функции kolobok в качестве аргумента передается имя персонажа
kolobok(pers1)


//функция kolobok1 в виде конструкции if/else: принимает на вход имя персонажа, возвращает, что сделал колобок после встречи с персонажем.

function kolobok1(name) {
    let strOutput;
    if(name === 'Дедушка'){
        strOutput = 'Я от дедушки ушёл'
        console.log(strOutput)
        return strOutput
    }else if(name === 'Заяц'){
        strOutput = 'Я от зайца ушёл'
        console.log(strOutput)
        return strOutput
    }else if(name === 'Лиса'){
        strOutput = 'Меня съели'
        console.log(strOutput)
        return strOutput
    }else{
        strOutput = 'Нет такого персонажа'
        console.log(strOutput)
        return 'strOutput'
    }

}

//вызов функции kolobok1 в качестве аргумента передается имя персонажа
  kolobok1(pers4)

//Задание 2:

//список имен персонажей

let strHero = 'Дед Мороз'  //персонаж из списка к задаче
let strHero1 =  'Снегурочка'  //персонаж из списка к задаче
let strHero2 = 'Волк'  //персонаж не из списка к задаче, на случай ошибки ввода


//функция  newYear:  на вход принимает имя персонажа Дед Мороз или Снегурочка.
//возвращает: "Дед Мороз! Дед Мороз! Дед Мороз!" или "Снегурочка! Снегурочка! Снегурочка!";
//использует шаблонные строки, конструкцию  switch/case и метод String.prototype.repeat();

function newYear(name) {
    let strOutput;
    switch(name) {        
      // если Дед Мороз
      case 'Дед Мороз':
        strOutput = `${name}! `.repeat(3)
        console.log(strOutput)
        return strOutput
      // если Снегурочка
      case 'Снегурочка':
        strOutput = `${name}! `.repeat(3)
        console.log(strOutput)
        return strOutput
      // если персонажа нет в конструкции
      default:
        strOutput = 'Нет такого персонажа'
        console.log(strOutput)
        return 'strOutput'
    } 
  }

//вызов функции newYear в качестве аргумента передается имя персонажа
newYear(strHero)


//функция  newYear1:  на вход принимает имя персонажа Дед Мороз или Снегурочка.
//возвращает: "Дед Мороз! Дед Мороз! Дед Мороз!" или "Снегурочка! Снегурочка! Снегурочка!";
//использует шаблонные строки, конструкцию  if/else и метод String.prototype.repeat();
function newYear1(name) {
    let strOutput;
    if(name === 'Дед Мороз'){
        strOutput = `${name}! `.repeat(3)
        console.log(strOutput)
        return strOutput
    }else if(name === 'Снегурочка'){
        strOutput = `${name}! `.repeat(3)
        console.log(strOutput)
        return strOutput
    }else{
        strOutput = 'Нет такого персонажа'
        console.log(strOutput)
        return 'strOutput'
    }

}

//вызов функции newYear1 в качестве аргумента передается имя персонажа
newYear(strHero1)