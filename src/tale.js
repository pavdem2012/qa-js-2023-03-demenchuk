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

//список имен персонажей

  let pers1 = 'Дедушка' //персонаж из списка к задаче
  let pers2 = 'Заяц' //персонаж из списка к задаче
  let pers3 = 'Лиса' //персонаж из списка к задаче
  let pers4 = 'Волк' //персонаж не из списка к задаче, на случай ошибки ввода

//вызов функции colobok в качестве аргумента передается имя персонажа
kolobok(pers1)


//функция colobok1 в виде конструкции if/else: принимает на вход имя персонажа, возвращает, что сделал колобок после встречи с персонажем.

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

//вызов функции colobok в качестве аргумента передается имя персонажа
  kolobok1(pers4)