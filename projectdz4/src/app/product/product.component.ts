import {Component, OnInit} from '@angular/core';

class Product {
  constructor(
    public img: string,
    public name: string,
    public list_text: string[]
  ) {
  }
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = []; // Инициализация пустого массива продуктов
  }

  ngOnInit(): void {
    const productData = [
      {
        img: '../../assets/images/noutbuki.png',
        name: 'Ноутбуки',
        list_text: []
      },
      {
        img: '../../assets/images/kompyutery.png',
        name: 'Компьютеры',
        list_text: []
      },
      {
        img: '../../assets/images/monitory.png',
        name: 'Мониторы',
        list_text: []
      },
      // Добавьте остальные продукты по аналогии
      {
        img: '../../assets/images/tovary-dlya-gejmerov.png',
        name: 'Gaming',
        list_text: []
      },
      {
        img: '../../assets/images/planshety.png',
        name: 'Планшеты',
        list_text: []
      },
      {
        img: '../../assets/images/kabeli-i-perekhodniki.png',
        name: 'Кабели и переходники',
        list_text: []
      },
      {
        img: '../../assets/images/kompyuternye-komplektuyushchie.png',
        name: 'Компьютерные комплектующие',
        list_text: ['SSD', 'Системы охлаждения', 'Видеокарты', 'Оперативная память', 'Процессоры', 'Материнские платы', 'Жесткие диски и дисковые массивы', 'Блоки питания']
      },
      {
        img: '../../assets/images/setevoe-oborudovanie.png',
        name: 'Сетевое оборудование',
        list_text: ['Маршрутизаторы', 'Коммутаторы', 'Сетевые адаптеры', 'Пассивное сетевое оборудование', 'Беспроводные точки доступа', 'Ретрансляторы Wi-Fi', 'Патч-корды']
      },
      {
        img: '../../assets/images/naushniki-i-aksessuary.png',
        name: 'Наушники и аксессуары',
        list_text: ['Наушники', 'TWS', 'Игровые гарнитуры', 'Вакуумные наушники', 'Наушники вкладыши', 'Накладные наушники', 'Полноразмерные наушники', 'Усилители для наушников', 'Аксессуары для наушников']
      },
      {
        img: '../../assets/images/klaviatury-i-myshi.png',
        name: 'Клавиатуры и мыши',
        list_text: ['Компьютерные мыши', 'Игровые поверхности', 'Клавиатуры', 'Комплект: клавиатура и мышь', 'Аксессуары для клавиатур и мышей', 'Мышек']
      },
      {
        img: '../../assets/images/aksessuari-dlia-elektronyky.png',
        name: 'Аксессуары для электроники',
        list_text: ['Флеш память USB', 'Хабы и кардридеры', 'Аксессуары для ПК и ноутбуков', 'Комплектующие для ноутбуков', 'Сетевые фильтры, адаптеры и удлинители', 'Чехлы для планшетов', 'Сумки, рюкзаки и чехлы для ноутбуков', 'Чистящие средства']
      },
      {
        img: '../../assets/images/ofisnaya-tekhnika.png',
        name: 'Оргтехника',
        list_text: ['МФУ/Принтеры', 'Сканеры', 'Расходные материалы для принтера', 'Доски, флипчарты']
      }
    ];

    for (const data of productData) {
      this.products.push(new Product(data.img, data.name, data.list_text));
    }
  }

}
