import { bit, eth, met, rub } from '@/assets/icons'
import { Lorem } from '@/utils/lorem'

export const main = () => ({
  disabled: false,
  show: { main: false },
  icon: 'bx-home-alt',
  name: 'Главная',
  id: 'main',
  children: []
})

export const bill = () => ({
  disabled: false,
  show: { bill: false },
  icon: 'bx-link-alt',
  name: 'Выставить счет',
  id: 'bill',
  children: []
})

export const deposits = () => ({
  disabled: false,
  show: { deposits: false },
  icon: 'bx-bookmark-minus',
  name: 'Депозиты',
  id: 'deposits',
  children: []
})

export const projects = () => ({
  disabled: false,
  show: { projects: false },
  icon: 'bx-menu-alt-left',
  name: 'Мои проекты',
  id: 'projects',
  children: [
    { subName: 'Проект 1', value: 'p1' },
    { subName: 'Проект 2', value: 'p2' },
    { subName: 'Проект 3', value: 'p3' }
  ]
})

export const history = () => ({
  disabled: false,
  show: { history: false },
  icon: 'bx-time-five',
  name: 'История',
  id: 'history',
  children: []
})

export const integration = () => ({
  disabled: true,
  show: { integration: false },
  icon: 'bx-slider-alt',
  name: 'Интеграция',
  id: 'integration',
  children: [
    { subName: 'Интеграция 1' },
    { subName: 'Интеграция 2' },
    { subName: 'Интеграция 3' }
  ]
})

export const center = () => ({
  disabled: false,
  show: { center: false },
  icon: 'bx-message-rounded-dots',
  name: 'Информационный центр',
  id: 'center',
  children: []
})

export const referral = () => ({
  disabled: false,
  show: { referral: false },
  icon: 'bx-user-plus',
  name: 'Реферальная программа',
  id: 'referral',
  children: []
})

export const operations = () => ({
  header: ['Дата','Время','User','Тип','Сумма','Депозит','Счет','Детали'],
  data: Array.from({ length: 7 }, () => ({
    date: '10/01/23',
    time: '12:23:45',
    user: 'ID345678',
    type: 'Приход',
    amount: '100 USDT',
    deposite: '10 USDT',
    bill: '1N4Qbzg6LS...',
    detail: 'комментарий'
  }))
})

export const notifications = () => {
  const list = Array.from({ length: 350 }, () => Lorem.get(7))

  list.push('Закончился срок депозита по заявке №1233473 ожидает...')

  return {
    title: 'Новые уведомления',
    list
  }
}

export const bills = () => ({
  active: { title: 'Активные счета', value: '350' },
  amount: { title: 'На сумму', value: '1.789.567.57'}
})

export const deposites = () => ({
  active: { title: 'Активные депозиты', value: '10.000' },
  amount: { title: 'На сумму', value: '1.789.567.57'}
})

export const userAssets = () => ({
  title: 'Мои активы:',
    link: 'Все активы',
    list: [
    {
      id: 'rub',
      title: 'RUB',
      desc: 'Russian Rubles',
      value: '1.789.567.57',
      authIcon: 'logout.svg',
      assetIcon: rub
    },
    {
      id: 'bit',
      title: 'Bitcoin',
      desc: 'BTC',
      value: '1.789.567.57',
      authIcon: 'logout.svg',
      assetIcon: bit
    },
    {
      id: 'met',
      title: 'Green Metaverse Token',
      desc: 'PEOPLE',
      value: '1.789.567.57',
      authIcon: 'logout.svg',
      assetIcon: met
    },
    {
      id: 'eth',
      title: 'Etherium',
      desc: 'ETH',
      value: '1.789.567.57',
      authIcon: 'logout.svg',
      assetIcon: eth
    }
  ]
})

export const assets = () => ([
  { name: 'USD',       code: 'usd' },
  { name: 'RUB',       code: 'rub' },
  { name: 'Bitcoin',   code: 'bit' },
  { name: 'Metaverse', code: 'met' },
  { name: 'Etherium',  code: 'eth' }
])

export const menu = () => [

  main,
  bill,
  deposits,
  projects,
  history,
  integration,
  center,
  referral

].map(fn => fn())
