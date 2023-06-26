import FaqItem from "./FaqItem/FaqItem";
import styles from "./FaqList.module.css";

const faq = [
  {
    question: 'Что такое Билетопоиск?',
    answer: `Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы,
    купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам
    оценки, написать рецензии и дополнить описание фильмов.`,
  },
  {
    question: 'Какой компании принадлежит Билетопоиск?',
    answer: `Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта,
     40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис
      купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то время).`,
  },
  {
    question: 'Как купить билет на Билетопоиск?',
    answer: `Купить невозможно, поскольку я (разработчик) не смог за целых 3 дня нормально реализовать функционал.
    Простите меня, пожалуйста, я больше так не буду!`,
  },
  {
    question: 'Как оставить отзыв на Билетопоиск?',
    answer: `К сожалению, на данный момент этот функционал находится в разработке.`,
  }
];

export type FaqItemType = typeof faq[number];

const FaqList = () => {
  return (
    <ul className={styles.faqList}>
      {
        faq.map(item => (
            <FaqItem key={item.question} faqItem={item} />
        ))
      }
    </ul>
  )
};

export default FaqList;