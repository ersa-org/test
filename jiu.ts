const MoveDecorator: ClassDecorator = (constructor: Function) => {
  constructor.prototype.hd = '后盾人'
  constructor.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 100 }
  }
}

@MoveDecorator
class Tank {
  constructor() {
    console.log('tank 构造函数')
  }
}
const tank = new Tank()
